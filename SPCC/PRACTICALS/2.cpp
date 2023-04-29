#include <bits/stdc++.h>
using namespace std;

struct MDT_row
{
    int index;
    string code;
};

struct MNT_row
{
    int index;
    string name;
    int mdt_index;
};

string get_macro_name_init_ALA(string line, vector<string> &ALA)
{
    int pos = 0;
    string name = "";
    while (pos < line.length())
    {
        while (line[pos] == ' ' || line[pos] == ',')
        {
            pos++;
        }
        if (line[pos] == '&')
        {
            string arg = "";
            while (pos < line.length() && line[pos] != ' ' && line[pos] != ',')
            {
                arg += line[pos];
                pos++;
            }
            ALA.push_back(arg);
        }
        else
        {
            while (pos < line.length() && line[pos] != ' ')
            {
                name += line[pos];
                pos++;
            }
        }
    }
    return name;
}

int search_ALA(vector<string> ALA, string arg)
{
    for (int i = 0; i < ALA.size(); i++)
    {
        if (ALA[i] == arg)
        {
            return i;
        }
    }
    return -1;
}

string replace_dummy_args(string line, vector<string> ALA)
{
    string res = "";
    int pos = 0;
    while (pos < line.length())
    {
        while (line[pos] == ' ' || line[pos] == ',')
        {
            res += line[pos];
            pos++;
        }
        if (line[pos] == '&')
        {
            string arg = "";
            while (pos < line.length() && line[pos] != ' ' && line[pos] != ',')
            {
                arg += line[pos];
                pos++;
            }
            int index = search_ALA(ALA, arg);
            res = res + '#' + to_string(index);
        }
        else
        {
            while (pos < line.length() && line[pos] != ' ' && line[pos] != ',')
            {
                res += line[pos];
                pos++;
            }
        }
    }
    return res;
}

void print_MDT(vector<MDT_row> MDT)
{
    cout << "---- Macro Definition Table ----" << endl;
    printf("%-7s%-2s%-50s\n", "Index", "|", "Card");
    printf("--------------------------------\n");
    for (int i = 0; i < MDT.size(); i++)
    {
        printf("%-7d%-2s%-50s\n", MDT[i].index, "|", MDT[i].code.c_str());
    }
    cout << endl;
}

void print_MNT(vector<MNT_row> MNT)
{
    cout << "---- Macro Name Table ----" << endl;
    printf("%-7s%-2s%-10s%-2s%-7s\n", "Index", "|", "Name", "|", "MDT Index");
    printf("--------------------------------\n");
    for (int i = 0; i < MNT.size(); i++)
    {
        printf("%-7d%-2s%-10s%-2s%-7d\n", MNT[i].index, "|", MNT[i].name.c_str(), "|", MNT[i].mdt_index);
    }
    cout << endl;
}

void print_ALA(vector<string> ALA)
{
    cout << "---- Argument List Array ----" << endl;
    printf("%-7s%-2s%-10s\n", "Index", "|", "Arguments");
    printf("--------------------------------\n");
    for (int i = 0; i < ALA.size(); i++)
    {
        printf("%-7d%-2s%-10s\n", i, "|", ALA[i].c_str());
    }
    cout << endl;
}

void print_output(vector<string> output)
{
    cout << "---- Output of Pass 1 ----" << endl;
    for (int i = 0; i < output.size(); i++)
    {
        cout << output[i] << endl;
    }
    cout << endl;
}

int main()
{
    ifstream inputfile("input.asm");
    string line;
    vector<string> output;
    vector<MDT_row> MDT;
    vector<MNT_row> MNT;
    vector<string> ALA;
    bool inside_macro = false;
    bool macro_name_line = false;
    int mdtc = 1, mntc = 1;
    while (getline(inputfile, line))
    {
        if ((line.find("MACRO") != string::npos) || (line.find("macro") != string::npos))
        {
            inside_macro = true;
            macro_name_line = true;
        }
        else if ((line.find("MEND") != string::npos) || (line.find("mend") != string::npos))
        {
            MDT_row row;
            row.index = mdtc;
            mdtc++;
            row.code = line;
            MDT.push_back(row);
            inside_macro = false;
        }
        else if (!inside_macro)
        {
            output.push_back(line);
        }
        else if (inside_macro)
        {
            if (macro_name_line)
            {
                MNT_row row;
                row.index = mntc;
                row.mdt_index = mdtc;
                mntc++;
                row.name = get_macro_name_init_ALA(line, ALA);
                MNT.push_back(row);

                MDT_row entry;
                entry.index = mdtc;
                mdtc++;
                entry.code = line;
                MDT.push_back(entry);
                macro_name_line = false;
            }
            else
            {
                MDT_row row;
                row.index = mdtc;
                mdtc++;
                row.code = replace_dummy_args(line, ALA);
                MDT.push_back(row);
            }
        }
    }
    print_MDT(MDT);
    print_MNT(MNT);
    print_ALA(ALA);
    print_output(output);
}

/*
INPUT :
     MACRO
&LAB INCR &ARG1,&ARG2,&ARG3
&LAB ADD AREG,&ARG1
     ADD AREG,&ARG2
     ADD AREG,&ARG3
     MEND

LOOP1 INCR DATA1,DATA2,DATA3
DATA1 DC F'5'
DATA2 DC F'10'
DATA3 DC F'15'
END
*/
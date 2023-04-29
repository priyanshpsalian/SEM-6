#include <bits/stdc++.h>
#define sp ' '
#define ln '\n'
#define fs first
#define sc second
#define ios() cin.tie(0)->sync_with_stdio(0);
const int px[8] = {0, 0, -1, 1, -1, -1, 1, 1};
const int py[8] = {-1, 1, 0, 0, -1, 1, -1, 1};
using namespace std;

/*

9
t1 = -c
t2 = a + b
t3 = a + b
t4 = a + b
t5 = d + e
t6 = a + b
t7 = -c
t8 = d + e
t9 = 4 * t4

*/

int main(void)
{
    int n;
    cout << "Enter number of lines:\n";
    cin >> n;
    set<string> st;
    map<string, vector<string>> mp;
    map<string, string> dmp;
    cout << "\nEnter expressions:\n";
    for (int i = 0; i < n; i++)
    {
        string str;
        cin >> str;

        string temp;
        cin >> temp;

        string exp;
        getline(cin, exp);

        st.insert(exp);
        mp[exp].push_back(str);
    }
    cout << "\nTerms are as follows:\n";
    for (auto it : st)
    {
        cout << it << ln;
    }
    cout << ln;
    for (auto it : mp)
    {
        for (int i = 1; i < it.sc.size(); i++)
        {
            dmp[it.sc[i]] = it.sc[0];
        }
    }
    cout << "Optimised code is as follows:\n";
    for (auto it : mp)
    {
        string lhs = it.sc[0];
        string rhs = it.fs;
        for (int i = 0; i < rhs.length(); i++)
        {
            if (rhs[i] == 't')
            {
                string mapped = "t";
                mapped += rhs[i + 1];
                if (dmp[mapped].length() == 2)
                    rhs[i + 1] = dmp[mapped][1];
            }
        }
        cout << lhs << " = " << rhs << endl;
    }
}
#include <iostream>
#include <bits/stdc++.h>

using namespace std;

int prec(char c)
{
    if (c == '^')
        return 3;
    else if (c == '/' || c == '*')
        return 2;
    else if (c == '+' || c == '-')
        return 1;
    else
        return -1;
}

string infixToPostfix(string s)
{
    stack<char> st;
    string result;
    for (int i = 0; i < s.length(); i++)
    {
        char c = s[i];
        if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9'))
        {
            result += c;
        }
        else if (c == '(')
        {
            st.push('(');
        }
        else if (c == ')')
        {
            while (st.top() != '(')
            {
                result += st.top();
                st.pop();
            }
            st.pop();
        }
        else
        {
            while (!st.empty() && prec(s[i]) <= prec(st.top()))
            {
                result += st.top();
                st.pop();
            }
            st.push(c);
        }
    }
    while (!st.empty())
    {
        result += st.top();
        st.pop();
    }
    return result;
}

void threeAddressCode(string postfix)
{
    vector<string> str{"t1", "t2", "t3", "t4", "t5"};
    int ptr = 0;
    stack<string> stk;
    for (char c : postfix)
    {
        string tp;
        tp += c;
        if (tp >= "a" && tp <= "z")
        {
            stk.push(tp);
        }
        else
        {
            string ch1 = stk.top();
            stk.pop();
            string ch2 = stk.top();
            stk.pop();
            if (!stk.empty())
            {
                cout << str[ptr] << " = " << ch2 << c << ch1 << endl;
                stk.push(str[ptr]);
            }
            else
            {
                cout << ch2 << c << ch1 << endl;
            }
            ptr++;
        }
    }
}

int main()
{
    string exp;
    cout << "Enter the expression:\n";
    cin >> exp;
    string postfix = infixToPostfix(exp);
    cout << "\nThe postfix of the expression is: " << postfix << endl;
    cout << "\nThe three address code is:\n";
    threeAddressCode(postfix);
    return 0;
}
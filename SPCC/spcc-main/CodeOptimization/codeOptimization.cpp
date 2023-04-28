#pragma GCC optimize("Ofast")
#pragma GCC optimize("unroll-loops")

#include <bits/stdc++.h>

using namespace std;

typedef long long int           ll;
typedef unsigned long long int  ull;
typedef long double             ld;

typedef pair<ll,ll>             pll;
typedef vector<ll>              vll;
typedef vector<pll>             vpll;
typedef map<ll, ll>             mll;
typedef map<char, ll>           mcl;

#define inf                 1<<30
#define mx9                 1000000007
#define test(t)             int t; cin >> t; while(t--)
#define f(i, a, b)          for(int (i) = (a); (i) < (b); ++(i))
#define all(a)              (a).begin(), (a).end()
#define endl                "\n"
#define ff                  first
#define ss                  second
#define pb                  push_back
#define deb(x)              cout << #x << ": " << x << endl;
#define deb2(x,y)           cout << #x << ": " << x << " ~ " <<  #y << ": " << y << endl;
#define deba(arr)           cout << #arr << " ~ [ "; for(auto n: arr) cout << n << " "; cout << "]" << endl;
#define debap(arr)          cout << #arr << " ~ [ "; for(auto n: arr) cout << n.first << "-" << n.second << " "; cout << "]" << endl;
#define fast                ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);

/*

input

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

output

t1 = -c
t2 = a + b
t5 = d + e
t9 = 4 * t2

t1 = -c
t2 = a + b
t3 = d + e
t4 = 4 * t2


*/

void solve()
{
    ll n;
    cin >> n;
    set<string> st;
    map<string, vector<string>> mp;
    map<string, string> dmp;
    f(i, 0, n) {
        string str;
        cin >> str;

        string temp;
        cin >> temp;
        
        string exp;
        getline(cin, exp);
        
        st.insert(exp);
        mp[exp].pb(str);
    }

    deba(st)
    for(auto it: mp) {
        deb(it.ff)
        deba(it.ss)
    }
    
    for(auto it: mp) {
        f(i, 1, it.ss.size()) {
            dmp[it.ss[i]] = it.ss[0];
        }
    }

    for(auto it: dmp) {
        deb2(it.ff, it.ss)
    } 
/*
    for(auto it: st) {
        string curr = it;
        string rep = "";
        string fin = "";
        f(i, 0, curr.length()) {
            if(curr[i] == 't') {
                rep += curr[i];
                rep += curr[++i];
                rep = dmp[rep];
                fin += rep;
            } else {
                fin += curr[i];
            }
        }
        st.erase(it);
        st.insert(fin);
    }
*/
    // deba(st)
    // debap(dmp)
    
    for(auto it: mp) {
        string lhs = it.ss[0];
        string rhs = it.ff;
        f(i, 0, rhs.length()) {
            if(rhs[i] == 't') {
                string mapped = "t";
                mapped += rhs[i + 1];
                if(dmp[mapped].length() == 2)
                    rhs[i + 1] = dmp[mapped][1];
            }
        }
        cout << lhs << " = " << rhs << endl;
    }
}

int main()
{
    fast;
        solve();
    return 0;
}
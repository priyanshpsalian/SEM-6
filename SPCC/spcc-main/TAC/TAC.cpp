#include<bits/stdc++.h>
using namespace std;

//#define endl "\n"
#define pb push_back
#define ll long long int
#define f(i, a, b) for(ll i=a;i<b;i++)
#define rf(i, a, b) for(ll i=a;i>=b;i--)

#define put(x) cout<<"I am here at "<<x<<" :";
#define shov(v) for(auto i: v) cout<<i<<" ";cout<<endl;
#define shom(m) for(auto i: m) cout<<i.first<<" "<<i.second<<endl;
#define test(t) ll t;cin>>t;while(t--)
#define __lcm(a, b) (((a) * (b)) / __gcd((a) , (b)))

#define vi vector<int>
#define vll vector<long long int>
#define vs vector<string>
#define mii map<int, int>
#define si set<int>

/**
1
a=b*c+d*e-f/g-h^i
*/

void solve() {
    string s;
    cin >> s;
    cout << "OPERATOR's LOCATIONS: " << endl;
    map<char, vll> m;
    ll curr = 1;
    vector<char> ops = {'^', '*', '/', '%', '+', '-'};
    f(i, 0, s.length()) 
        if(find(ops.begin(), ops.end(), s[i]) != ops.end()) 
            m[s[i]].pb(i);
    for(auto &i: m) reverse(i.second.begin(), i.second.end());
    for(auto i: m) {
        cout<<i.first<<" : ";
        shov(i.second);
    } 
    cout<<endl;
    map<int, char>nums;
    f(i, 0, 10) {
        nums[i] = ('0' + i);
    }
    map<string, ll>result;
    cout<<"LOGS : "<<endl;
    cout<<"\n**********************"<<endl;
    for(auto i: ops) {
        f(j, 0, s.size()) {
            if(s[j] == i) {
                ll loc1 = -1, loc2 = -1;
                f(k, j+1, s.size()) {
                    if(find(ops.begin(), ops.end(), s[k]) != ops.end()) {
                        loc2 = k - 1;
                        break;
                    }
                }
                if(loc2 == -1) loc2 = s.size() - 1;
                rf(k, j-1, 2) {
                    if(find(ops.begin(), ops.end(), s[k]) != ops.end()) {
                        loc1 = k + 1;
                        break;
                    }
                }
                if(loc1 == -1) loc1 = 2;
                string temp = "";
                f(k, loc1, j) temp.pb(s[k]); 
                temp.pb(s[j]); 
                f(k, j+1, loc2+1) temp.pb(s[k]); 
                cout<<"t"<<curr<<"="<<temp;
                cout<<endl;
                result[temp] = curr;
                temp = "";
                f(k, 0, loc1) temp.pb(s[k]);
                temp.pb('t');
                temp.pb(nums[curr]);
                f(k, loc2+1, s.size()) temp.pb(s[k]);
                s = temp;
                cout<<s<<endl;
                curr++;
                cout<<"\n**********************"<<endl;
            }
        }
    }
    cout<<s[0]<<"=t"<<curr<<endl;
    cout<<"\n**********************"<<endl;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    solve();
}
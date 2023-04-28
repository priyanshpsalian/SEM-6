#include <bits/stdc++.h>
using namespace std;

typedef long long int ll;

#define test(t)     int t; cin >> t; while(t--)
#define f(i, a, b)  for(int i = a; i < b; ++i)
#define endl        "\n"
#define ff                  first
#define ss                  second
#define pb                  push_back
#define deb(x)      cout << #x << ": " << x << endl;
#define deb2(x,y)           cout << #x << ": " << x << " ~ " <<  #y << ": " << y << endl;
#define deba(arr)           cout << #arr << " ~ [ "; for(auto n: arr) cout << n << " "; cout << "]" << endl;
#define debap(arr)          cout << #arr << " ~ [ "; for(auto n: arr) cout << n.first << "-" << n.second << " "; cout << "]" << endl;
#define fast        ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);

/*
input

5
E -> TR
R -> +T R | #
T -> FY
Y -> *F Y | #
F -> (E) | i

output

FIRST(E) = { (, i }
FIRST(R) = { +, # }
FIRST(T) = { (, i }
FIRST(Y) = { *, # }
FIRST(F) = { (, i }

*/

bool checkSpecialChar(char c) {
	vector<char> chars = { '+','-','*','/' };
	
	for(auto it: chars) {
		if (it == c) {
			return 1;
		}
	}
	
	return 0;
}

bool checkTerminal(char c) {
	
	ll ascii = (int)(c);
	
	if(65 <= ascii && ascii <= 90) 
		return 1;
	return 0;

}

void solve()
{
	ll n;
	cin >> n;
	cout << endl;

	string s;
	getline(cin, s);

	map<char, vector<string>> mp;
	set<char> nt;

	f(i, 0, n) {
		getline(cin, s);
		
		char first = s[0];
		nt.insert(first);
		
		ll len = s.length();
		string curr = "";

		f(i, 5, len + 1) {
			if(i == len) {
				if(curr.length()) {
					if(curr != "#")
						mp[first].pb(curr);
				}
			}

			if(s[i] == ' ') {
				continue;
			}
			if(s[i] == '#') {
				curr = "#";
				mp[first].pb(curr);
				curr = "";
				continue;
			}
			if(s[i] == '|') {
				mp[first].pb(curr);
				curr = "";
				continue;
			}
			
			curr += s[i];
		}
		
	}
	
	for(auto it: mp) {
			
			cout << "\nFirst(" << it.ff << ") = { ";
			f(i, 0, (it.ss.size())) {
				
				char ans = it.ss[i][0];
				char prev = 'x';
				while (1)
				{
					if(checkTerminal(ans)) {
						prev = ans;
						ans = mp[ans][i][0];
					}
					else {
						if(prev != 'x') {
							for(auto it: mp[prev])
								cout << it[0] << ", ";
						}
						else {
							cout << ans << ", ";
						}
						break;
					}
				}
			}
			cout << " }" << endl; 
			
	}
}

int main()
{
    //fast;
    // test(t)
        solve();
    return 0;
}


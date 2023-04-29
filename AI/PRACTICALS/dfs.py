# Prompt the user to enter the number of edges
num_edges = int(input("Enter the number of edges: "))

# Initialize an empty list to store the edges
edges = []

# Prompt the user to enter each edge as a pair of vertices
for i in range(num_edges):
    edge_str = input("Enter edge {}: ".format(i + 1))
    edge = tuple(map(int, edge_str.split()))
    edges.append(edge)

# Print the edges
print(edges)
# edges=[(0,1),(1,2),(1,3),(3,5),(2,4),(2,6),(5,7)]


class Graph:
    def __init__(self,no,edges):
        self.no=no
        self.data=[[] for _ in range(no) ]
        for n1,n2 in edges:
            self.data[n1].append(n2)
            self.data[n2].append(n1)


def dfs(graph,root):
    stack=[]
    discovered=[False]*len(graph.data)
    result=[]
    stack.append(root)
    while len(stack)>0:
        current =stack.pop()
        if not discovered[current]:
            discovered[current]=True
            result.append(current)
            for node in graph.data[current]:
                if not discovered[node]:
                    stack.append(node)
    return result

graph=Graph(num_edges+1,edges)
t=dfs(graph,3)
print(t)

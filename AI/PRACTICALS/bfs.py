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



def bfs(graph,root):
    queue=[]
    discovered =[False]*len(graph.data)
    # distance=[None]*len(graph.data)
    # parent=[None]*len(graph.data)
    discovered[root]=True
    queue.append(root)
    # distance[root]=0
    idx=0

    while idx<len(queue):
        current =queue[idx]
        idx+=1

        for node in graph.data[current]:
            if not discovered[node]:
                # distance[node]=1+distance[current]
                # parent[node]=current
                discovered[node]=True
                queue.append(node)
    return queue
    # return queue,distance,parent 

graph=Graph(num_edges+1,edges)
p=bfs(graph,0)
print(p)
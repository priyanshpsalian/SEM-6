# Python program to print DFS traversal from a given
# given graph

edges=[(0,1),(1,2),(1,3),(3,5),(2,4),(2,6),(5,7)]
# for edge in edges:
#     print(edge)


class Graph:
    def __init__(self,no,edges):
        self.no=no
        self.data=[[] for _ in range(no)]
        for n1,n2 in edges:
            self.data[n1].append(n2)
            self.data[n2].append(n1)
    # def __repr(self):

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


w=Graph(8,edges)
# print(w.data)
q=bfs(w,3)
print(q)



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


t=dfs(w,3)
print(t)
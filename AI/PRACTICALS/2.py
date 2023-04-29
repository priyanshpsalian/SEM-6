edges=[(0,1),(1,2),(1,3),(3,5),(2,4),(2,6),(5,7)]

class Graph:
    def __init__(self,edges,no):
        self.no=no
        self.data=[[] for _ in range(no)]
        for n1,n2 in edges:
            self.data[n1].append(n2)
            self.data[n2].append(n1)


graph=Graph(edges,8)

def dif(graph,src,target,max_depth):
    if(src==target):
        return True
    if(max_depth<=0):
        return False
    for nodes in graph.data[src]:
        if(dif(graph,nodes,target,max_depth-1)):
            return True
    return False


def dfid(graph,src,target,max_depth):
    for i in range(max_depth):
        if(dif(graph,src,target,i)):
            return True
        
    return False


p=dfid(graph,0,7,3)
print(p)
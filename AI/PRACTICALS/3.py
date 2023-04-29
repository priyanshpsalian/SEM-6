# class Graph:
#     def __init__(self, no, edges):
#         self.no = no
#         self.data = [[] for _ in range(no)]
#         for n1, n2, dist in edges:
#             self.data[n1].append((n2, dist))
#             self.data[n2].append((n1, dist))
# no = int(input("Enter the number of nodes in the graph: "))
# edges = []
# print("Enter the edges of the graph in the format 'start_node end_node distance', one edge per line. Enter 'done' to finish input.")
# while True:
#     edge_input = input()
#     if edge_input == "done":
#         break
#     n1, n2, dist = map(int, edge_input.split())
#     edges.append((n1, n2, dist))

# graph = Graph(no, edges)


class Graph:
    def __init__(self,no,edges):
        self.no=no
        self.data=[[] for _ in range(no)]
        for n1,n2,cost in edges:
            self.data[n1].append((n2,cost))
            self.data[n2].append((n1,cost))


no=int(input("enter no of edges"))
edges=[]
for i in range(no):
    edge_str=input("enter edge {}".format(i+1))
    edge=tuple(map(int,edge_str.split()))
    edges.append(edge)

# edges=[(0,1,3),(1,2,3),(2,3,5),(3,4,5)]
graph=Graph(no+1,edges)

import heapq

def uniform_cost_search(graph, start, goal):
    frontier = []  # priority queue for nodes to be explored
    heapq.heappush(frontier, (0, start))  # start node with path cost 0
    explored = set()  # set of explored nodes
    path_costs = [float('inf')] * graph.no  # list of best path costs found for each node
    path_costs[start] = 0  # path cost of start node is 0
    predecessors = [None] * graph.no  # list of predecessors for each node

    while frontier:
        path_cost, node = heapq.heappop(frontier)
        if node == goal:
            # goal node reached, construct path from predecessors and return total cost and path
            path = []
            while node is not None:
                path.append(node)
                node = predecessors[node]
            path.reverse()
            return (path_cost, path)
        if node in explored:
            continue
        explored.add(node)
        for neighbor, cost in graph.data[node]:
            if neighbor not in explored:
                new_path_cost = path_cost + cost
                if new_path_cost < path_costs[neighbor]:
                    # update path cost and add node to priority queue
                    path_costs[neighbor] = new_path_cost
                    predecessors[neighbor] = node
                    heapq.heappush(frontier, (new_path_cost, neighbor))

    # goal node not found, return None
    return None


ans=uniform_cost_search(graph,0,3)
print(ans)
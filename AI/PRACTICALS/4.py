from queue import PriorityQueue

def astar(start, goal, graph, heuristic):
    frontier = PriorityQueue()
    frontier.put((0, start))
    visited = set()
    gScore = {start: 0}
    fScore = {start: heuristic[start]}
    while not frontier.empty():
        _, node = frontier.get()
        if node == goal:
            return gScore[node]
        if node not in visited:
            visited.add(node)
            for neighbour, weight in graph[node].items():
                tGScore = gScore[node] + weight
                if neighbour in gScore and tGScore >= gScore[neighbour]:
                    continue
                gScore[neighbour] = tGScore
                fScore[neighbour] = tGScore + heuristic[neighbour]
                frontier.put((fScore[neighbour], neighbour))
    return -1

graph = {}
vertices = int(input("Enter the number of vertices: "))
for i in range(vertices):
    vertex = input(f"\nEnter vertex {i+1}: ")
    num_neighbours = int(input("Enter the number of neighbours: "))
    neighbours = {}
    for j in range(num_neighbours):
        neighbour = input(f"Enter neighbour {j+1}: ")
        weight = int(input(f"Enter the weight of edge ({vertex}, {neighbour}): "))
        neighbours[neighbour] = weight
    graph[vertex] = neighbours

start = input("\nEnter the start node: ")
goal = input("Enter the goal node: ")

heuristic = {}
for vertex in graph:
    heuristic[vertex] = int(input(f"Enter the heuristic for {vertex}: "))

cost = astar(start, goal, graph, heuristic)
if cost == -1:
    print("Path not found.")
else:
    print(f"The minimum cost from {start} to {goal} is {cost}.")

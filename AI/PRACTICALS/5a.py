import random
import math

# Define the objective function


def objective_function(x):
    return x**2

# Define the simulated annealing algorithm function


def simulated_annealing(initial_state, objective_function, max_iterations, max_temperature):
    current_state = initial_state
    current_energy = objective_function(current_state)
    best_state = current_state
    best_energy = current_energy
    temperature = max_temperature

    for i in range(max_iterations):
        # Calculate the acceptance probability
        temperature = temperature * 0.9
        neighbor = current_state + random.uniform(-1, 1)
        neighbor_energy = objective_function(neighbor)
        delta_energy = neighbor_energy - current_energy
        acceptance_probability = math.exp(-delta_energy / temperature)

        # Determine whether to accept the new state
        if delta_energy < 0:
            current_state = neighbor
            current_energy = neighbor_energy
            if current_energy < best_energy:
                best_state = current_state
                best_energy = current_energy
        elif random.uniform(0, 1) < acceptance_probability:
            current_state = neighbor
            current_energy = neighbor_energy

        # Print the current state, energy, and temperature
        print(
            f"Iteration {i}: State = {current_state}, Energy = {current_energy}, Temperature = {temperature}")

    return best_state, best_energy


# Test the algorithm
initial_state = 10
max_iterations = 100
max_temperature = 1000
best_state, best_energy = simulated_annealing(initial_state, objective_function, max_iterations, max_temperature)

print(f"\nBest state found: {best_state}")
print(f"Best energy found: {best_energy}")
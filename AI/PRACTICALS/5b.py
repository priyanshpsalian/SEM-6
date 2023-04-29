import random

# Define the fitness function to evaluate the individuals


def fitness(individual):
    # In this example, the fitness function simply counts the number of 1s in the binary string
    return sum(individual)


# Define the genetic algorithm function


def genetic_algorithm(population_size, chromosome_size, generations, mutation_rate):
    # Initialize the population with random individuals
    population = [
        [random.randint(0, 1) for j in range(chromosome_size)]
        for i in range(population_size)
    ]
    for generation in range(generations):
        # Evaluate the fitness of each individual in the population
        fitness_scores = [fitness(individual) for individual in population]
        # Select the best individuals to be the parents of the next generation
        parents = []
        for i in range(population_size // 2):
            parent1 = population[fitness_scores.index(max(fitness_scores))]
            fitness_scores[fitness_scores.index(max(fitness_scores))] = -1
            parent2 = population[fitness_scores.index(max(fitness_scores))]
            fitness_scores[fitness_scores.index(max(fitness_scores))] = -1
            parents.append((parent1, parent2))
        # Create the next generation by recombining the parents' chromosomes and mutating them
        population = []
        for parent1, parent2 in parents:
            child1, child2 = parent1[:], parent2[:]
            for i in range(chromosome_size):
                if random.random() < mutation_rate:
                    child1[i] = 1 - child1[i]
                if random.random() < mutation_rate:
                    child2[i] = 1 - child2[i]
            population.append(child1)
            population.append(child2)
    # Return the fittest individual from the final population
    fitness_scores = [fitness(individual) for individual in population]
    return population[fitness_scores.index(max(fitness_scores))]


# Example usage:
fittest_individual = genetic_algorithm(
    population_size=100, chromosome_size=10, generations=50, mutation_rate=0.01
)
print("Fittest individual:", fittest_individual)

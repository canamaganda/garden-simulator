from collections import deque


# ==========================================
# 1. PYTHON OOP - PLANT
# ==========================================

class Plant:
    def __init__(self, name, water_need):
        self.name = name
        self.water_need = water_need
        self.health = 100
        print("Plant is successfully created")

    def update_resources(self, water=200, seeds=90, energy=110, hope=80, coins=999):
        self.water = water
        self.seeds = seeds
        self.energy = energy
        self.hope = hope
        self.coins = coins

    def add_plants_to_dropdown(self, plants):
        self.plants = plants


# Create Plant
plant = Plant("Garden Plant", 48)

# Resource Storage
plant.update_resources(
    water=200,
    seeds=90,
    energy=110,
    hope=80,
    coins=999
)

# Plant Dropdown
plant.add_plants_to_dropdown([
    ("Lily", "🌺", 48),
    ("Sunflower", "🌻", 36),
    ("Cherry blossom", "🌸", 51)
])

print("Resource Storage and Plant dropdown unlocked!")


# ==========================================
# 2. STACK - ACTION HISTORY
# ==========================================

class ActionHistoryStack:
    def __init__(self):
        self.stack = []

    def push_action(self, action_string):
        self.stack.append(action_string)

    def pop_action(self):
        if self.stack:
            return self.stack.pop()
        return None

    def peek(self):
        if self.stack:
            return self.stack[-1]
        return None

    def is_empty(self):
        return len(self.stack) == 0


# Create Stack
action_history = ActionHistoryStack()

action_history.push_action("Planted Lily")
action_history.push_action("Watered Sunflower")
action_history.push_action("Planted Cherry Blossom")

print("\nAction History Stack:")
print(action_history.stack)

print("Last action:", action_history.peek())


# ==========================================
# 3. QUEUE - CLIMATE CHALLENGES
# ==========================================

class ClimateQueue:
    def __init__(self):
        self.queue = deque()

    def add_challenge(self, event_name):
        self.queue.append(event_name)

    def process_hazard(self):
        if self.queue:
            return self.queue.popleft()
        return None


# Create Queue
q = ClimateQueue()

q.add_challenge("El Niño")
q.add_challenge("Typhoon")
q.add_challenge("Flooding")

print("\nClimate Queue (FIFO):")
print(list(q.queue))

print("Processing hazard:", q.process_hazard())

print("Climate Queue (FIFO) ready!")


# ==========================================
# 4. 2D LIST / ARRAY - GARDEN GRID
# ==========================================

garden_grid = [
    ["🌱", "🌱", "🌻", "🌱"],
    ["🌱", "🌺", "🌱", "🌱"],
    ["🌸", "🌱", "🌱", "🌻"],
    ["🌱", "🌱", "🌺", "🌱"]
]

print("\nGarden Grid (2D Array):")

for row in garden_grid:
    print(" ".join(row))

print("2D Garden Grid ready!")


# ==========================================
# 5. HIERARCHICAL TREE
# ==========================================

class GardenNode:
    def __init__(self, name):
        self.name = name
        self.children = []

    def add_child(self, child):
        self.children.append(child)

    def display(self, level=0):
        print("  " * level + "└── " + self.name)

        for child in self.children:
            child.display(level + 1)


# Main Garden
garden = GardenNode("Garden")


# Garden Sections
flower_area = GardenNode("Flower Area")
tree_area = GardenNode("Tree Area")
resource_area = GardenNode("Resource Area")


# Plants
lily = GardenNode("Lily")
sunflower = GardenNode("Sunflower")
cherry_blossom = GardenNode("Cherry Blossom")


# Resources
water = GardenNode("Water")
seeds = GardenNode("Seeds")
energy = GardenNode("Energy")


# Build Flower Area
flower_area.add_child(lily)
flower_area.add_child(sunflower)


# Build Tree Area
tree_area.add_child(cherry_blossom)


# Build Resource Area
resource_area.add_child(water)
resource_area.add_child(seeds)
resource_area.add_child(energy)


# Add sections to Garden
garden.add_child(flower_area)
garden.add_child(tree_area)
garden.add_child(resource_area)


# Display Tree
print("\nHierarchical Garden Tree:")

garden.display()

print("Hierarchical Tree ready!")


# ==========================================
# PROJECT COMPLETE
# ==========================================

print("\n================================")
print("GARDEN SIMULATOR READY!")
print("================================")

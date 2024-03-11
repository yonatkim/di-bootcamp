# exercise 1
print("exercise 1")
class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def __init__(self, name, age):
        super().__init__(name, age)
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def __init__(self, name, age):
        super().__init__(name, age)
    def sing(self, sounds):
        return f'{sounds}'
    
class Siamese(Cat):
    def __init__(self, name, age):
        super().__init__(name, age)
    def sing(self, sounds):
        return f'{sounds}'
    
all_cats = [Bengal('Babe', 1), Chartreux('Suki', 3), Siamese('Moses', 2)]
sara_pets = Pets(all_cats)
sara_pets.walk()
print()

# exercise 2
print("exercise 2")
class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight
        self.speed = 0

    def bark(self):
        '''Returns the dog's bark'''
        return f"{self.name} is barking"
    
    def run_speed(self):
        '''Calculates and returns the dog's speed'''
        self.speed = self.weight/self.age*10
        return f"{self.name} has a running speed of {self.speed:.2f}"
    
    def fight(self, other_dog):
        '''Compares and returns the winning dog's name'''
        return other_dog.name if other_dog.speed > self.speed else self.name
    
collie = Dog('Welsh Collie', 2, 19)
print(collie.bark())
print(collie.run_speed())
spaniel = Dog('Water Sapniel', 3, 5)
print(spaniel.bark())
print(spaniel.run_speed())
terrier = Dog('Yorkshire Terrier', 5, 3)
print(terrier.bark())
print(terrier.run_speed())
print(f"The winner is {terrier.fight(spaniel)} in the fight between {terrier.name} and {spaniel.name}")
print(f"The winner is {terrier.fight(collie)} in the fight between {terrier.name} and {collie.name}")
print(f"The winner is {collie.fight(spaniel)} in the fight between {collie.name} and {spaniel.name}")



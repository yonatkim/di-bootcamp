# exercise 1
print("exercise 1")
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

def get_cats():
    '''Get name and age of cat as user input'''
    cat_details = input("Enter your cat's name and age: ")
    name, age = cat_details.split(' ')
    return name, age

# create 3 istances of the Cat class
cat_classes = []
for x in range(3):
    name, age = get_cats()
    cat_classes.append(Cat(name, age))


# get the name and age of the oldest cat
print()
print(f"Cat names are: {cat_classes[0].name, cat_classes[1].name, cat_classes[2].name}")
print(f"The cats are {cat_classes[0].age, cat_classes[1].age, cat_classes[2].age} years old respectively")
print()
oldest = max(cat_classes[0].age, cat_classes[1].age, cat_classes[2].age)
oldest_cat = [(x.name, x.age) for x in cat_classes if x.age == oldest]
print(f"The oldest cat is {oldest_cat[0][0]}, and {oldest_cat[0][0]} is {oldest_cat[0][1]} years old")

# exercise 2
print()
print("exercise 2")

class Dog:
    def __init__(self, dog_name, dog_height):
        self.dog_name = dog_name
        self.dog_height = dog_height

    def bark(self):
        print(f"{self.dog_name} goes wooof!!")

    def jump(self):
        print(f"{self.dog_name} jumps {self.dog_height*2}cm high!!")

davids_dog = Dog("Rex", 50)
print(f"David's dog's name is {davids_dog.dog_name} and his height is {davids_dog.dog_height}cm")
davids_dog.bark()
davids_dog.jump()
print()
sarahs_dog = Dog("Teacup", 20)
print(f"Sarah's dog's name is {sarahs_dog.dog_name} and his height is {sarahs_dog.dog_height}cm")
sarahs_dog.bark()
sarahs_dog.jump()
print()
print(f"The biggest dog is David's dog {davids_dog.dog_name}") if davids_dog.dog_height > sarahs_dog.dog_height else print(f"The biggest dog is Sarah's dog {sarahs_dog.dog_name}")

# exercise 3
print()
print("exercise 3")
class Song:
    def __init__(self, lyrics: list) -> None:
        self.lyrics = lyrics

    def sing_me_a_song(self):
        '''Prints the lyrics of a song, line by line'''
        for line in self.lyrics:
            print(f"{line}")

stairway = Song(["There's a lady who's sure","all that glitters is gold", "and she's buying a stairway to heaven"])
stairway.sing_me_a_song()

# exercise 4
print()
print("exercise 4")

class Zoo:
    def __init__(self, zoo_name) -> None:
        self.name = zoo_name
        self.animals = []
        self.groups = {}

    def add_animal(self, new_animal):
        '''Adds a new animal to the zoo, if the animal is not in the list of animals'''
        if not new_animal in self.animals: self.animals.append(new_animal)

    def get_animals(self):
        '''Prints every animal that is in the zoo'''
        print(f"The animals in {self.name} are: {self.animals}")

    def sell_animal(self, animal_sold):
        '''Removes the sold animal from the list, if the animal is in the list'''
        if animal_sold in self.animals: self.animals.remove(animal_sold)
    
    def sort_animals(self):
        '''Sorts alphabetically and group by fist letter'''
        from itertools import groupby
        self.animals.sort()
        self.groups = {k: list(g) for k, g in groupby(self.animals, key=lambda x: x[0])}
    
    def get_groups(self):
        print(f"The groups of animals are:\n {self.groups}")

ramat_gan_safari = Zoo("Ramat gan Safari")
animals = ["Emu", "Cat", "Giraffe", "Eel", "Baboon", "Ape", "Bear", "Cougar"]

for a in animals: ramat_gan_safari.add_animal(a)

ramat_gan_safari.get_animals()
ramat_gan_safari.sort_animals()
ramat_gan_safari.get_animals()

animal_sold = input("Which animal at the zoo has been sold? --> ")
ramat_gan_safari.sell_animal(animal_sold)
ramat_gan_safari.get_groups
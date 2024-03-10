print("challenge Old MacDonald's Farm")
print()
class Farm:
    def __init__(self, farm_name) -> None:
        self.name = farm_name
        self.animals = {}
        self.song = ""
        
    def add_song(self, song):
        self.song = song

    def add_animal(self, animal_name: str, animal_count: int = 1):
        '''Add the animal and how many of these animals there are'''
        if animal_name in self.animals.keys(): 
            self.animals.update({animal_name: self.animals.get(animal_name) + animal_count})
        else:
            self.animals.update({animal_name: animal_count})

    def get_animals(self):
        '''Prints the animals and how many of these animals there are'''
        print(f"{self.name}'s farm has:\n {self.animals}\n {self.song}")

    def get_animal_types(self):
        '''Prints the animal types on the farm'''
        print(f"{self.name}'s farm has these types of animals: {[k for k in self.animals.keys()]}")

    def get_info(self):
        '''Prints a summary about the farm'''
        self.get_animals()
    
    def get_short_info(self):
        self.get_animal_types()

macdonald = Farm("McDonald")
macdonald.add_song("    E-I-E-I-0!")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())
print(macdonald.get_short_info())
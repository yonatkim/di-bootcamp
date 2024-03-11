print("exercise 3")
from exercise import Dog

class PetDog(Dog):
    def __init__(self, name, age, weight, trained=False):
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self):
        print(Dog.bark(self))
        self.trained = True

    def play(self, *args):
        print(f"{args} all play together")
    
    def do_a_trick(self):
        import random
        games = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]
        print(f"{self.name} {random.choice(games)}")

pug = PetDog('Pug', 6, 8)
pug.train()
bernard = PetDog('St. Bernard', 7, 54)
bernard.train()
pomeranian = PetDog('Pomeranian', 9, 2)
pomeranian.train()
pug.play(pug.name, bernard.name, pomeranian.name)
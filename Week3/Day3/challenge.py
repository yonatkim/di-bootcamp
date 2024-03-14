import math
class Circle:
    def __init__(self, **kwargs) -> None:
        self.radius = 0
        self.diameter = 0
        for key, val in kwargs.items():
            if 'radius' in key:
                self.radius = val
            if 'diameter' in kwargs.items():
                self.diameter = val

    def set_dimension(self, *args):
        '''Sets the radius of diameter of the circle
        expected two params:
        str: radius or diameter
        int or float: a number'''
        if 'radius' in args: 
            self.radius = float(args[1]) 
            print(f"The radius: {self.radius} cm")
        if 'diameter' in args:
            self.diameter = float(args[1])
            print(f"The diameter: {self.diameter} cm")

    def get_area(self):
        '''Calculates the area of the circle
        updates the class attribute and returns the area'''
        area = 0
        if self.radius != 0:
            self.area = math.pi * self.radius ** 2
        elif self.diameter != 0:
            self.area = math.pi * self.diameter * 2
        return area
    
    def summarise(self):
        '''Prints the dimensions of the circle'''
        if self.radius == 0 and self.diameter != 0:
            self.radius = self.diameter / 2
        elif self.radius != 0 and self.diameter == 0:
            self.diameter = self.radius * 2
        print(f"The circle's properties are:\n radius: {self.radius}\n diameter: {self.diameter}\n area: {self.area:.2f}")

    def __repr__(self) -> str:
        '''Prints the class details'''
        #cl = self.__class__
        #print(f"<{cl.__name__}.{cl.__text_signature__} object> \n")
        return f"<Circle radius:{self.radius} diameter:{self.diameter}>"

    def __str__(self):
        return f"Circle radius:{self.radius} diameter:{self.diameter}"

    def __add__(self, other):
        '''Add the radius of two circles together'''
        return (self.diameter/2) + other.radius if self.radius == 0 and self.diameter != 0 else self.radius + other.radius

    def __gt__(self, other):
        '''Compares the radius of two circles 
        returns boolean True or False''' 
        return self.radius > other.radius 
    
    def __eq__(self, other):
        '''Compares the radius of two circles 
        returns boolean True or False''' 
        return self.radius == other.radius

    def sort(self, others: list):
        '''Sorts a list of circles from smallest to largest'''
        unsorted = [other.radius for other in others]
        unsorted.append(self.radius)
        unsorted.sort()
        return unsorted
        

# test cases
print('challenge')
circles = [{'radius': 3}, {'diameter': 5}, {'radius': 7}]
print(f"The input circles\n {circles}")
print()
c0 = Circle(**circles[0])
print("Circle 0")
c0.set_dimension(*circles[0], list(circles[0].values())[0])
c0.get_area()
c0.summarise()
print(c0)
print()
print("Circle 1")
c1 = Circle(**circles[1])
c1.set_dimension(*circles[1], list(circles[1].values())[0])
c1.get_area()
c1.summarise()
print(c1)
print(f"Is circle 0 greater than  circle 1? {c0 > c1}")
print()
print("Circle 2")
c2 = Circle(**circles[2])
c2.set_dimension(*circles[2], list(circles[2].values())[0])
c2.get_area()
c2.summarise()
print(c2)
print(f"Is circle 1 equal to circle 2? {c1 == c2}")
print(f"Circle 0 added to circle 2 = {c0 + c2} cm")
print(f"Sorted circles: {c0.sort([c1, c2])}")

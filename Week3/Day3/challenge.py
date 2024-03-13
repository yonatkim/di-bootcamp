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

    def get_dimension(self, *args):
        for key in args.items():
            if 'radius' in key:
                return {'radius': self.radius}
            if 'diameter' in args.items():
                return {'diameter': self.diameter}

    def get_area(self):
        area = 0
        if self.radius != 0:
            area = math.pi * self.radius ** 2
        elif self.diameter != 0:
            area = math.pi * self.diameter * 2
        return area
        
Print the attributes of the circle - use a dunder method
Be able to add two circles together, and return a new circle with the new radius - use a dunder method
Be able to compare two circles to see which is bigger, and return a Boolean - use a dunder method
Be able to compare two circles and see if there are equal, and return a Boolean- use a dunder method
Be able to put them in a list and sort them
Bonus (not mandatory) : Install the Turtle module, and draw the sorted circles
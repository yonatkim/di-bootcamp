# exercise 1 function to display message
print("exercise 1")
def display_message(msg):
    print(f"Your message: {msg}") 

msg = input("Enter your message: ")

display_message(msg)

# exercise 2
print()
print("exercise 2")
def favourite_book(title):
     print(f"One of my favorite books is {title}")

title = input("Enter the title of your favourite book: ")

favourite_book(title)

# exercise 3
print()
print("exercise 3")
def describe_city(city = 'Paris', country = 'France'):
     print(f"{city} is in {country}")
     print()

# three test cases
describe_city("Reykjavik", "Iceland")
describe_city()

favourite = input("Enter the names of your city and country: ")
city, country = favourite.split()
describe_city(city, country)

# exercise 4
print()
print("exercise 4")

rand = input("Enter a random number between 1 and 100: ")

def match_random(rand):
    import random as r
    num = r.randrange(1, 100, 1)
    if num == rand:
        print(f"It's a match! random number: {num} your number: {rand} SUCCESS")
    else:
        print(f"Better luck next time! random number: {num} your number: {rand} FAIL")

match_random(rand)

# exercise 5
print()
print("exercise 5")

def make_shirt(specs):
     size = specs.get('size', 'large')
     msg = specs.get('msg', 'I love Python 🐍')
     print(f"The size of the shirt is {size} and the text is {msg}")

# test cases
specs = {}
make_shirt(specs)
print()
make_shirt({'size': 'medium'})
dict.fromkeys(['size', 'msg'])

shirt = input("Enter the size and message you want to have on your t-shirt: ")
specs['size'] = shirt.split(' ', 1)[0]
specs['msg'] = shirt.partition(' ')[2]

make_shirt(specs)

# exercise 6
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians(magicians):
    print(f"The magicians are: {magicians}")

show_magicians(magician_names)

def make_great(magicians):
    great = [m +' the Great' for m in magicians]
    print(f"Make them GREAT: {great}")
    
make_great(magician_names)

# exercise 7


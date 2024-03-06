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
print()
print("exercise 7")
import random
def get_random_temp(season = 'winter'):
    # default minimum temp in degrees C = -10
    # default maximum temp in degrees C = 40 (max - min = 30)
    min, max = -10, 40
    match season:
        case 'spring':
            min = 0
            max = 23
        case 'summer':
            min = 19
            max = 40
        case 'autumn':
            min = 10
            max = 25
        case 'winter':
            min = -10
            max = 16
    print(f"The season is: {season} min, max : {min, max}")
    result = [random.uniform(min, max)]
    return result



def main():
    #seasons = ['spring', 'summer', 'autumn', 'winter']
    #season = random.choice(seasons)
    month = input("Enter the number of the current month: ")
    season = ''
    month = int(month)
    match int(month):
        case mon if 1 <= mon < 3: 
            season = 'winter'
        case mon if 3 <= mon < 6:
            season = 'spring'
        case mon if 6 <= mon < 9:
            season = 'summer'
        case mon if 9 <= mon < 12:
            season = 'autumn'
        case 12:
            season = 'winter'

    #today_temp = get_random_temp(season)[0] 
    today_temp = get_random_temp(season)
    print(f"The temperature right now is: {today_temp[0]:.2f} degrees Celsius")
    match today_temp[0]:
        case temp if temp <= 0:
            print("Brrr, that's freezing! Wear some extra layers today")
        case temp if 0 < temp < 16:
            print("Quite chilly! Don't forget your coat")
        case temp if 16 <= temp < 23:
            print("Fresh! Remember to move your legs")
        case temp if 23 <= temp < 32:
            print("Perfect! Make the most of the outdoors")
        case temp if 32 <= temp <= 40:
            print("Sizzling! Remember to drink enough water")

# test the function
for i in range(10):
    main()    

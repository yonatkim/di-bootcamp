# exercise 1
my_fav_numbers = {1, 2, 3, 5, 7, 8, 9, 13, 18, 22, 26, 31, 36, 55}
my_fav_numbers.update({69, 72})
print(f"My favourite numbers: {my_fav_numbers}")
my_fav_numbers = set(list(my_fav_numbers)[:-1])
print(f"Last numbber dopped: {my_fav_numbers}")

friend_fav_numbers = {0, 4, 6, 10, 11, 12, 14, 15, 16, 17, 19, 21, 31}
print(f"Friend's favourite numbers: {friend_fav_numbers}")
my_fav_numbers.update(friend_fav_numbers)
our_fav_numbers = my_fav_numbers.copy()
print(f"Our favourite numbers: {our_fav_numbers}")

# exercise 2
print()
tpl = (3,8,13)
print(f"The original tuple: {tpl}")
tpl = tpl + (18,)
print(f"Added an extra numbebr to a tuple: {tpl}")

# exercise 3
print()
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
print(f"Picnic basket: {basket}")
basket.remove("Banana")
print(f"Banana was popped from the basket: {basket}")
basket.remove("Blueberries")
print(f"Blueberries were popped from the basket: {basket}")
basket.append("Kiwi")
print(f"Kiwi was added the basket: {basket}")
basket.insert(0, "Apples")
print(f"Apples were inserted at the front of the basket: {basket}")
from collections import Counter
b = Counter(basket)
print(f"There are {b['Apples']} instances of Apples in the basket : {basket}")
del basket[:]
print(f"The basket was emptied: {basket}")

# exercise 4
print()
print("exercise 4")
print("What is a float? It is a data type that can hold a number that is a decimal fraction.")
print(f"What is the difference between an integer and a float? An integer is a data type that" \
       " only holds whol or integral numbers, whereas a float holds a floating point number.")
sequence = range(15, 55, 5)
print(f"A floating point range with a step of 0.5:-> {' '.join(str(x/10) for x in sequence)}")
another = list(map(lambda x: x/10.0, range(15, 55, 5)))
print(f"Another floating point lambda map range with a step of 0.5: {another}")

# exercise 5
print()
print("exercise 5")
print(f"For loop print from 1 to 20:-> {[x for x in range(1, 21)]}")
print(f"For loop print every even number from 1 to 20:-> {[x for x in range(1, 21) if x%2 == 0]}")

# exercise 6
print()
print("exercise 6")
my_name = "Yonat"
while True:
    your_name = input("Enter your name (let's hope it matches mine 😉): ")
    if my_name == your_name: break

# exercise 7
print()
print("exercise 7")
favourite_fruits = ['strawberry', 'prickly pear', 'pomegranite', 'guava', 'cherry', 'watermelon']
your_fruits = input("Enter your favourite fruit or fruits: ")
fruits_list = your_fruits.split(' ')
print(f"You chose one of your favourite fruits! Enjoy! {set(favourite_fruits) & set(fruits_list)}")

# exercise 8
print()
print("exercise 8")
toppings = []
while True:
    pizza_toppings = input("Enter one of your favourite pizza toppings(type 'quit' when you're done):")
    toppings.append(pizza_toppings.split(' '))
    if 'quit' in pizza_toppings: break
toppings = [item for items in toppings for item in items]
toppings.remove('quit')
print(f"{toppings} will be added on top of your pizza")

print()
print("exercise 9")
ticket_prices = {range(3): "free", range(3, 13): "$10", range(13, 121): "$15"}

number = int(input("Enter the number of family member tickets you want to purchase: "))
family_age = {}
for i in range((number)):
    entry = input("Enter the name and age of the next family member: ")
    entry = entry.split(' ')
    family_age.update(dict([[entry[0], int(entry[1])]]))

prices = []
for price in ticket_prices.items():
    for member in family_age.items():
        if member[1] in price[0]:
            prices.append(price[1])

# match the age with the correct ticket price           
family = dict(sorted(family_age.items(), key=lambda item: item[1]))

# add the ticket price to the family members
family_prices = dict(zip(family.items(), prices))
print(f"The price each member of your family would pay:\n{family_prices}")

# remove teenagers from the ticket purchase
teens_removed = {k: v for k, v in family_prices.items() if k[1] <= 16 or k[1] > 21}
print(f"The price each member of your family would pay and age restricted family members removed: {teens_removed}")

# exercise 10
print()
print("exercise 10")
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
updated_orders = [x for x in sandwich_orders if not 'Pastrami' in x]

finished_sandwiches = []
for sandwich in updated_orders:
    finished_sandwiches.append(sandwich)

[print(f"I made your {sandwich}") for sandwich in finished_sandwiches]

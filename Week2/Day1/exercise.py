print("Exercise 4: My computer brand")
computer_brand = "Dell"
print(f"I have a {computer_brand} computer")

print("Exercise 5: My personal information")
name = "Yonat"
age = 37
shoe_size = 238
info = "I like dragons"
print(f"My name is {name}, I'm {age} old, with a shoe size of {shoe_size}. An interesting fact about me is that {info}!")

print("Exercise 6: Numbers A and B")
a = input("Enter a positive number: ")
b = input("Enter another positive number: ")
print("Hello World!!") if a > b else print("Better luck next time..")

print("Exercise 7: Odd or Even")
c = int(input("Enter a positive number: "))
print("Your number is odd") if (c % 2 != 0) else print("Your number is even")

print("Exercise 8: Funny name")
your_name = input("Enter your name:")
print("How Long is a Chinese name..") if your_name != name else print("Bingo!! Did you steal my name?")

print("Exercise 9: Are you tall enough?")
d = int(input("Enter your height in inches:"))
print("You're tall enough to ride the rollercoaster!!!") if d*2.54 > 145 else print ("Try again when you're taller..")

print("Exercise 2 : What Is The Season?")
month = int(input("Enter the number of any month (1 to 12):"))
match month:
    case range(1, 3):
        print(f"The season for {month} is Winter")
    case range(3, 6):
        print(f"The season for {month} is Spring")
    case range(6, 9):
        print(f"The season for {month} is Summer")
    case range(9, 11):
        print(f"The season for {month} is Autumn")
    case 12:
        print(f"The season for {month} is Winter") 
        
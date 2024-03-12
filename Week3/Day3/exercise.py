# exercise 1
print("exercise 1")
class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

# test cases
c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)
    
print(f"String of currency 1: {str(c1.currency)}")
print(f"Integer of currency 1: {int(c1.amount)}")
print(f"Representation of currency 1: {repr(c1.currency), repr(c1.amount)}")
print(f"Sum of currency 1 and 5: {int(c1.amount) + 5}")
print(f"Sum of currency 1 and currency 2: {c1.amount + c2.amount} {c1.currency}")
print(f"Currency 1: {c1.amount} {c1.currency}") 
c1.amount += 5
print(f"Currency 1 += 5: {c1.amount} {c1.currency}")

try:
    if c1.currency != c2.currency:
        raise TypeError(f'TypeError: Cannot add between Currency type {c1.currency} and {c3.currency}')
    else:
        print(f"Currency 2: {c1.amount} {c2.currency}")
        c1.amount += c2.amount
        print(f"Currency 1 += currency 2: {c1.amount} {c1.currency}")
    if c1.currency != c3.currency:
        print(f"Cannot do currency 1 ({c1.amount} {c1.currency}) += currency 3 ({c3.amount} {c3.currency})")
        raise TypeError(f'Cannot add between Currency type {c1.currency} and {c3.currency}')
    else:
        c1.amount += c3.amount
        print(f"Currency 1 += currency 3: {c1.amount} {c1.currency}")
except TypeError as err:
    print(err.args)

# exercise 2
    from my_module import func as fn 
    fn(30, 5)

# exercise 3
print()
print("exercise 3")
import secrets
import string

result = ''.join(secrets.choice(string.ascii_lowercase + 
                                string.ascii_uppercase)
                                for i in range(5))
 

print("The generated random string: " + str(result))

# exercise 4
print()
print("exercise 4")
from my_module import dt_now as dt
dt()

# exercise 5
print()
print("exercise 5")
from my_module import days_left as dl
future_date = tuple(map(int, input("Enter the future date e.g. yyyy m d: ").split(' ')))
dl(future_date)

# exercise 6
print()
print("exercise 6")
from my_module import days_lived
birthdate = tuple(map(int, input("Enter your birthdate e.g. yyyy m d: ").split(' ')))
days_lived(birthdate)
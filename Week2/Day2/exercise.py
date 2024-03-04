# exercise 1
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
my_dict = dict(zip(keys, values))
print("exercise 1")
print(f"My my_dictionary: {my_dict}")

# exercise 2
family = {}
size_family = int(input("Enter the number of members in your family:"))
for x in range(size_family):
    input_family = input(f"Enter first name and age of family member {x+1}: ")
    list_family = input_family.split(' ')
    family[list_family[0]] = int(list_family[1])

print()
print("exercise 2")
print(f"Your family: {family}")

# default ticket prices
ticket_prices = {range(3): "free", range(3, 13): "$10", range(13, 121): "$15"}
prices = []
for price in ticket_prices.items():
    for member in family.items():
        if member[1] in price[0]:
            prices.append(price[1])
family = dict(sorted(family.items(), key=lambda item: item[1]))

# add the ticket price to the family members
family_prices = dict(zip(family.items(), prices))
print(f"The price each member of your family would pay:\n{family_prices}")

# exercise 3 
print()
print("exercise 3")
# brand
brand = {"name": "Zara",
         "creation_date": 1975,
         "creator_name": "Amancio Ortega Gaona",
         "type_of_clothes": ["men", "women", "children", "home"],
         "international_competitors": ["Gap", "H&M", "Benetton"],
         "number_stores": 7000, 
         "major_color": {"France": ["blue"], "Spain": ["red"], "US": ["pink", "green"]}}
# 3. Change the number of stores to 2
brand["number_stores"] = 2
# 4. Print a sentence that explains who Zaras clients are
print(f"The clients of Zara include: {brand['type_of_clothes']}")
# 5. Add a key called country_creation with a value of Spain
brand["country_creation"] = "Spain"
print("The key value pairs of the brand dictionary:")
for key, value in brand.items() :
    print (key, value)
# 6. Check if the key international_competitors is in the dictionary. If it is, add the store Desigual
if brand["international_competitors"]:
    brand["international_competitors"].append("Desigual")
# 7. Delete the information about the date of creation
brand.pop('creation_date', None)
# 8. Print the last international competitor
print(f"The last international competitor: {brand['international_competitors'][-1]}")
# 9. Print the major clothes colors in the US
print(f"Major clothes colours in USA: {brand['major_color']['US']}")
# 10. Print the amount of key value pairs (ie. length of the dictionary)
print(f"The length of the brand dictionary: {len(brand)}")
# 11. Print the keys of the dictionary
print(f"The brand dictionary keys: {brand.keys()}")
# 12. Create another dictionary called more_on_zara with the following details:
more_on_zara = {"creation_date": 1975, "number_stores": 10000}
print(f"Another dictionary called more_on_zara: {more_on_zara}")

# exercise 4
print()
print("exercise 4")
users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
# key start1 with 0
disney_users_A = dict(zip(users, range(len(users))))
print(f"Character dictionary starting with 0: {disney_users_A}")
# key starts with 1
disney_users_B = dict(zip(users, range(1, (len(users)+1))))
print(f"Character dictionary starting with 1: {disney_users_B}")
# sorted key starts with 0
users.sort()
disney_users_C = dict(zip(users, range(len(users))))
print(f"Sorted character dictionary: {disney_users_C}")
# characters with names containing the letter “i”
only_i = [x for x in users if "i" in x]
disney_only_i = dict(zip(only_i, range(len(only_i))))
print(f"Only characters with 'i' in their name: {disney_only_i}")
# characters with names stating with the letter “m” or “p”
starts_m_p = [x for x in users if x.startswith('M') or  x.startswith('P')]
disney_starts_m_p = dict(zip(starts_m_p, range(len(starts_m_p))))
print(f"Only characters with 'i' in their namwhose names start with M or P: {disney_starts_m_p}")
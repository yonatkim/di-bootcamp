input_string = str(input("Input a string. The string must be 10 characters long:"))

str_length = len(input_string)
if str_length == 10:
    print(f"“perfect string”")
elif str_length > 10:
    print(f"“string too long”")
else:
    print(f"“string not long enough”")

print(f"The first and last chatacters are: {input_string[0], input_string[-1]}")

part_string = ""
for each_char in input_string:
    part_string += each_char
    print(part_string)

# bonus challenge
import random
string_list = list(input_string)
random.shuffle(string_list)
print("shuffled bonus challenge result: ")
print(f"{''.join(string_list)}")

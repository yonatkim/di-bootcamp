# challenge 1
print('challenge 1')

num_len = input("Enter a number and how many multiples you want of this number: ")
numlen_list = num_len.split(' ')
result = range(int(numlen_list[0]), (int(numlen_list[0])*int(numlen_list[1]))+1, int(numlen_list[0]))
print(f"The multiples of {numlen_list[0]} for length {numlen_list[1]} :\n {[r for r in result]}")

# challenge 2
print()
print('challenge 2')
word = input("Enter your words with multiple consecutive letters: ")
word_list = word.split(' ')
import re
unscramble = [re.sub(r'(.)\1*', r'\1', w) for w in word_list]
print(f"Unscrambled: {unscramble}")


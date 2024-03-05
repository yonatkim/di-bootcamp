# challenge 1
print("challenge 1")
word = input("Enter your favourite word:")
letters = set(word)
print(f"Your letters are : {letters}")
word_list = list(word)
print(f"Your word list is: {word_list}")
indexed_word = [(item, [index]) for index, item in enumerate(word_list)]
print(f"Your indexed word is: {indexed_word}")

import collections as c
dodo = c.defaultdict(list)
for k,v in indexed_word:
    dodo[k].extend(v)  
print(f"Your collection of letters: {dodo}")

# challenge 2
print()




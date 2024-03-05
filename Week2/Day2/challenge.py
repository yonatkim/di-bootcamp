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
print("challenge 2")
items_purchase1 = {"Water": "$1", "Bread": "$3", "TV": "$1,000", "Fertilizer": "$20"}
wallet1 = "$300"

# remove currency and comma details
import re
trim = re.compile(r'[^\d.]+')
trimmed1 = [(key, float(trim.sub('', value))) for key, value in items_purchase1.items()]
trimmed1 = dict(trimmed1)
print(f"The trimmed flat dictionary: {trimmed1}")
wallet1 = float(trim.sub('', wallet1))
print(f"Your wallet has: $ {wallet1}")

# which items are affordable
afford1 = dict((k, v) for k, v in trimmed1.items() if v < wallet1)
if sum(afford1.values()) <= wallet1:
    print(f"With the $ {wallet1} in your wallet, you can afford: {afford1}\n Total cost: {sum(afford1.values())}")




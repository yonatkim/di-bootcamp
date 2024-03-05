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
def calc_afford(items_purchase, wallet):
    print()
    import re
    trim = re.compile(r'[^\d.]+')
    trimmed = [(key, float(trim.sub('', value))) for key, value in items_purchase.items()]
    trimmed = dict(trimmed)
    print(f"The trimmed flat dictionary: {trimmed}")
    wallet = float(trim.sub('', wallet))
    print(f"Your wallet has: $ {wallet}")

    # which items are affordable
    afford = dict((k, v) for k, v in trimmed.items() if v < wallet)
    keys_afford = list(afford.keys())
    keys_afford.sort()
    if not keys_afford:
        print(f"With the $ {wallet} in your wallet, you can afford: NOTHING")
    elif sum(afford.values()) <= wallet:
        print(f"With the $ {wallet} in your wallet, you can afford: {keys_afford}\n Total cost: {sum(afford.values())}")
    if wallet in trimmed.values():
        print(f"You could also buy only the {list(trimmed.keys())[list(trimmed.values()).index(wallet)]} for $ {wallet}")

# first test case
calc_afford(items_purchase1, wallet1)

# more test cases
items_purchase2 = {"Apple": "$4", "Honey": "$3", "Fan": "$14", "Bananas": "$4", "Pan": "$100", "Spoon": "$2"}
wallet2 = "$100" 

calc_afford(items_purchase2, wallet2)

items_purchase3 = {"Phone": "$999", "Speakers": "$300", "Laptop": "$5,000", "PC": "$1200"}
wallet3 = "$1"

calc_afford(items_purchase3, wallet3)





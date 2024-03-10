print("challenge 1")
comma_separated = input("Enter your words separated by a comma (e.g. without,hello,bag,world,beautiful): ")
word_list = comma_separated.split(',')
print(f"Your words are: {word_list}")
word_list.sort(key=len)
print(f"Your sorted list of words: {word_list}")

print()
print("challenge 2")

sentences = ["Margaret's toy is a pretty doll.", # ➞ "Margaret's"
             "A thing of beauty is a joy forever.", # ➞ "forever."
             "Forgetfulness is by all means powerless!"] # ➞ "Forgetfulness"

def longest_word (sentence_list):
    return max(sentence_list, key=len)

for sentence in sentences:
    print(f"The sentence is: {sentence} ")
    sentence_list = sentence.split(' ')
    print(f" The longest word in the sentence ➞ {longest_word(sentence_list)}")
    print()

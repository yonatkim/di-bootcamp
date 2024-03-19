# anagram exercise
from anagram_checker import AnagramChecker

def get_words_from_file(textfile: str = "Week3\Day4\sowpods.txt"): 
        '''Reads the lines of the text file into a list'''
        with open(textfile) as file:
            return [line.strip().lower() for line in file] 
        
def get_word():
    while True:
        word = input("Enter your word:")
        word = word.split(' ')
        try:
            if len(word) > 1:
                raise ValueError("You may enter only one word")
            elif not word[0].isalpha():
                raise ValueError("You may enter only alphabetic characters. No numbers. No special characters.")
            else:
                return word[0].strip()
        except Exception as e:
            print(f"{e}")
        
def show_menu():
    '''Show option to enter a word or to exit'''
    menu = {}
    menu['1']="Enter a word" 
    menu['2']="Exit"
    while True: 
        options = list(menu.keys())
        options.sort()
        for entry in options: 
            print(entry, menu[entry])
        selection = input("Please Select:") 
        if selection =='1': 
            return get_word()
        elif selection == '2': 
            break
        else: 
            print("Unknown Option Selected!")

def results(is_valid, word, anagrams):
    print(f"YOUR WORD: {word}")
    if is_valid: print("this is a valid English word.")
    print(f"Anagrams for your word: {anagrams}")

if __name__ == '__main__':
    # exercise anagram checker
    print("exercise anagram checker")   
    word = show_menu()
    print()
    textfile = []
    textfile = get_words_from_file()
    a = AnagramChecker(textfile)
    is_valid = a.is_valid_word(word)
    ana = a.get_anagrams(word)
    results(is_valid, word, ana)


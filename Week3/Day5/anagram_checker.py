from collections import Counter
class AnagramChecker:
    def __init__(self, textfile) -> None:
        self.text = textfile

    def is_valid_word(self, word):
        '''Check if the word is in the anagram file'''
        return True if word in self.text else False
    
    def is_anagram(self, word1, word2):
        '''Compare if two words contain the same letters'''
        return Counter(filter(str.isalnum, word1)) == Counter(filter(str.isalnum, word2))
    
    def get_anagrams(self, word):
        '''Returns all matches found'''
        anagrams = []
        for w in self.text:
            if self.is_anagram(w.lower(), word.lower()):
                anagrams.append(w)
        return anagrams

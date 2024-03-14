# challenge part 1
import string
from itertools import islice
GRAB_NUM = 13
class Text:
    
    def __init__(self, text = "Today, is a happy day") -> None:
        self.text = ""
        # check if input text is a list or string
        if isinstance(text, list):
            depunct = []
            for sentence in text:
                depunct.append(sentence.translate(str.maketrans('', '', string.punctuation)))
            self.text = ' '.join(depunct)  
        elif isinstance(text, str):
            self.text = text.translate(str.maketrans('', '', string.punctuation))
        
        self.analysis = {}
        self.unique = {}

    def word_freq(self):
        '''Finds the frequency of each word in the text string
        excludes one-letter words "a", "A", "I", "s", "d" ''' 
        excluded_keys = ["a", "A", "I", "o", "s", "d"]   
        self.analysis = {key: self.text.count(key) for key in self.text.split() if key not in excluded_keys}
        print(f"The word analysis (excluding one-letter words):\n")
        [print(f"{k}: {v}") for k,v in dict(islice(self.analysis.items(), GRAB_NUM)).items()]

    def most_common(self):
        '''Finds the word with the highest frequency'''
        print(f"The first most common word in the text: {max(self.analysis, key=self.analysis.get)}")

    def words_unique(self):
        '''Grab all the words with a frequenzy of 1'''
        self.unique = {k: v for k, v in self.analysis.items() if v == 1}
        print(f"The list of unique words are:\n") 
        [print(f"{k}") for k,v in dict(islice(self.unique.items(), GRAB_NUM)).items()]

    def from_file(self, filename):
        '''Reads the contents of a text file, sets the text attribute'''
        with open(f"Week3\Day4\{filename}") as f:
            lines = [line.rstrip() for line in f]
        defu = [line.translate(str.maketrans('', '', string.punctuation)) for line in lines if line]
        self.text = ' '.join(defu) 


if __name__ == '__main__':
    # test cases 
    print("challenge part 1")
    sample = ["A good book today would sometimes cost as much as a good house.", "today, is a good and happy day"]    
    analyse = Text(sample)
    analyse.word_freq()
    print()
    analyse.most_common()
    print()
    analyse.words_unique()
    print()

    print("challenge part 2")
    analyse.from_file("the_stranger.txt")
    analyse.word_freq()
    print()
    analyse.most_common()
    print()
    analyse.words_unique()
    print()





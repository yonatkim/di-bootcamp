# exercise 1
from random import sample, choice, seed, randrange
from datetime import date, timedelta
import os 

class Sentences:
    def __init__(self, file: str = "Week3\Day4\sowpods.txt") -> None:
        self.file = file
        print(f"File location : {os.getcwd()}\{file}")
        self.sentences = []
        self.sentence = []

    def get_words_from_file(self): 
        '''Reads the lines of the text file into a list'''
        with open(self.file) as file:
            self.sentences =  [line.strip().lower() for line in file]

    def get_random_sentence(self, length: int):
        self.sentence = sample(self.sentences, length)

if __name__ == '__main__':
    # exercise 1
    print("exercise 1")

    # instantiate the class
    s = Sentences()

    # explain the program
    print("This program will create a lowercase sentence from a file")
    print("The number of words will be selected at random")
    print("The number of words in the sentence  is the length")

    # get the number of words in the sentence
    while True:
        try: 
            length = int(input("Enter the length of the sentence (between 2 and 20): "))
            if 2 <= length <= 20:
                break
            else:
                raise ValueError('')
        except ValueError:
            print("Oops!  That was no valid number.  Try again...")
    
    # read the words from the file
    s.get_words_from_file()

    # take a random sample of 'length' from user input
    s.get_random_sentence(length)

    # print the resulted sentence
    print(f"\nThe random sentence is:\n {s.sentence}")

    # exercise 2
    print()
    print("exercise 2")

    # json test case
    import json
    sampleJson = """{ 
        "company":{ 
            "employee":{ 
                "name":"emma",
                "payable":{ 
                    "salary":7000,
                    "bonus":800
                }
            }
        }
    }"""

    # load as dictionary
    json_dict = json.loads(sampleJson)
    print(f"JSON string = {json_dict}")
    print()
    print(f"{str(json_dict['company']['employee']['name']).capitalize()}'s salary is {json_dict['company']['employee']['payable']['salary']}")
    print() 

    def get_random_bdate():
        
        firstdate, lastdate = date(1976, 9, 5), date(1995, 12, 30)
 
        print(f"Date range: {str(firstdate)} 🔛 {str(lastdate)}")
 
        K = 7
        days_count = lastdate - firstdate
        total_days = days_count.days
 
        date_range = []
        for x in range(K):
            seed(a=None)
            randomday = randrange(total_days)
            date_range.append(firstdate + timedelta(days=randomday))
        print()
        print(f"K = {K} random dates in range :\n {date_range}")
        print()
        return date_range

    print("Generate random range of valid birth dates")
    date_range = get_random_bdate()
    json_dict['company']['employee']['birth_date'] = f"{choice(date_range):%Y/%m/%d}"
    print(f"Added a random birthdate key and value:\n {json_dict['company']['employee']['birth_date']}")
    print(f"Updated json dictionary:\n {json_dict}")
    print()
    # full_path = os.path.join(base_dir, filename)
    with open('Week3\Day4\data.json', 'w') as f:
        json.dump(json_dict, f)  
    print(f"Written data to file!!")


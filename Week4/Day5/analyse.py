'''HACKERTON MINI PROJECT
1. scrapes X for tweets on:
    -- Israel
    -- Zionism(t)
    -- Jews
2. reads tweets, reads IHRA
3. ask for user seed words
4. ask reader to select IRHA example(s)
5. use the seed words and IHRA criteria to find suspect phrases
6. analyse:
    Context,
    Intent,
    Form,
    Extent,
    Likelihood of the speech to produce immediate actions against its targets
7. summarise and report results'''
import pandas as pd
import re
from flask import Flask, render_template
import postgres
FILE = "Week4\Day5\data.csv"
INIT_RUN = False
COLUMNS = ['url', 'comment']
SEEDS = ['enemy state', 'jew control', 'hardcore zion', 'communist jew', 
         'zion occupier', 'undoing zion', 'jew bullshit', 'gaslighting', 
         'jew pharisee', 'zion cancer', 'zion terrorist', 'hissing', 
         'zion nazi', 'zion division', 'anti-zion jew', 'gas chambers', 
         'zion enemy', 'apartheid', 'hate jew', 'white jew', 'gaza genocide',
         'jew identity', 'true biblical jew', 'mind control', 'smear israel', 'libel',
         'jew invaded', 'persecuted palestinians', 'buy politicians', 'fuck israel', 'wolf jew']
IHRA = {'1.0': 'hatred towards jews',
        '3.1.1': 'killing or harming jews',
        '3.1.2': 'demonising jews e.g. power of jews in media, economy, governments of institutions',
        '3.1.3': 'accusing all jews of being responsible for real or imagined wrongdoing',
        '3.1.4': 'denying the holocaust e.g. gas chambers',
        '3.1.5': 'accusing israel or jews of exaggerating the holocaust',
        '3.1.6': 'accusing jews of being more loyal to israel than the country where they reside',
        '3.1.7': 'claiming the existence of israel is a racist endeavour',
        '3.1.8': 'applying double standards to israel, standards not demanded of any other country',
        '3.1.9': 'classic antisemetic symbols e.g. blood libel',
        '3.1.10': 'comparing israeli policy to nazis',
        '3.1.11': 'hold all jews responsible for the actions of israel'}

SEED_IHRA_MAP = {'1.0': ['hissing', 'hate jew', 'white jew', 'anti-zion jew', 'wolf jew'],
                 '3.1.1': ['enemy state', 'smear israel', 'jew invaded'],
                 '3.1.2': ['jew control', 'buy politicians', 'gaslighting'],
                 '3.1.3': ['gaza genocide', 'jew bullshit'],
                 '3.1.4': ['gas chambers', 'jew bullshit'],
                 '3.1.5': ['playing victim', 'victimhood'],
                 '3.1.6': ['zion division', 'jew identity'],
                 '3.1.7': ['apartheid', 'hardcore zion', 'zion enemy', 'smear israel', 'fuck israel'],
                 '3.1.8': ['persecuted palestinians', 'zionist occupiers', 'undoing zionisim'],
                 '3.1.9': ['libel', 'wolf jew', 'jew pharisee', 'true biblical jew'],
                 '3.1.10': ['zion nazi'],
                 '3.1.11': ['communist jew', 'jew invaded']}

class Analyse:
    def __init__(self) -> None:
        self.data = []
        self.seeds = SEEDS
        self.ihra = IHRA
        self.map = SEED_IHRA_MAP 
        self.exact_matches = {}
        self.categories = {}

    def get_data(self, file):
        '''reads the dumped tweets'''
        data = pd.read_csv(file, header=None, index_col=0)
        data.columns = COLUMNS
        self.data = data

    def dump_seeds(self):
        s = postgres.SQL()
        for value in self.seeds:
            s.insert_into_seeds(value)

        print(f"{s.table_seeds} table has the following entries:\n {s.select_all(s.table_seeds)}")

        s.cursor.close()
        s.connection.close()  

    def dump_ihra(self):
        s = postgres.SQL()
        for key,value in self.ihra.items():
            s.insert_into_ihra(key, value)

        print(f"{s.table_ihra} table has the following entries:\n {s.select_all(s.table_ihra)}")

        s.cursor.close()
        s.connection.close()

    def dump_map(self):
        s = postgres.SQL()
        for key,value in self.map.items():
            s.insert_into_map(key, value)

        print(f"{s.table_map} table has the following entries:\n {s.select_all(s.table_map)}")

        s.cursor.close()
        s.connection.close()   
    
    def get_exact_matches(self):
        '''finding matches between the tweets and the seed words'''
        for comment in self.data['comment']:
            for seed in SEEDS:
                if seed in comment.lower():
                    self.exact_matches.update({seed: comment})
    
    def categorise(self):
        '''categorise the type of ihra violation using the seeds'''
        for key,value in self.exact_matches.items():
            for k,v in self.map.items():
                if key in v:
                    self.categories.update({f"{k} {key}": f"{value}"})

                

app = Flask(__name__)
#http://127.0.0.1:5000/

# Define a route to render the HTML template
@app.route('/')
def index():
    '''Passes the user's name and the categorised data 
    from Python to HTML template'''

    name = input("Enter your name: ")
    # test cases
    a = Analyse() 
    a.get_data(FILE)
    a.get_exact_matches()
    a.categorise()
    return render_template('index.html', name=name, data=a.categories)
 
if __name__ == '__main__':
    '''sends the results to an html page'''
    if INIT_RUN:
        d = Analyse()
        #d.dump_ihra() #only dumped to the database during the first run
        #d.dump_seeds()
        #d.dump_map()
        INIT_RUN = False
    app.run(debug=True)

    


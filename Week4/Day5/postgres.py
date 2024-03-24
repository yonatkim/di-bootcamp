import psycopg2

# connection details
HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = '31Kim@9y'
DATABASE = 'hackerton'
PORTNUMB = '5432' # default or 5433

class SQL:
    def __init__(self) -> None:
        try:
            self.connection = psycopg2.connect(
                dbname = DATABASE,
                user = USERNAME,
                password = PASSWORD,
                host = HOSTNAME,
                port = PORTNUMB
            )
        except Exception as e:
            print(f"Error: {e}")
        self.cursor = self.connection.cursor()
        self.table_seeds = 'seeds'
        self.query_seeds = f'''
            CREATE TABLE IF NOT EXISTS {self.table_seeds} (
            id SERIAL PRIMARY KEY,
            seeds VARCHAR(100) UNIQUE NOT NULL);'''
        self.table_ihra = 'ihra'
        self.query_ihra = f'''
            CREATE TABLE IF NOT EXISTS {self.table_ihra} (
            id SERIAL PRIMARY KEY,
            ihra VARCHAR(7) NOT NULL,
            description VARCHAR(100) NOT NULL)'''
        self.table_map = 'map'
        self.query_map = f'''
            CREATE TABLE IF NOT EXISTS {self.table_map} (
            id SERIAL PRIMARY KEY,
            ihra VARCHAR(7) NOT NULL,
            matches VARCHAR(300) NOT NULL)'''

    # SQL query
    def create_table(self, query): 
        '''create new table using query set in class init'''
        
        self.cursor.execute(query) 
        self.connection.commit()     # create table in the database

    def insert_into_seeds(self, seed: str):
        '''insert data into the seeds table'''
        qry = f'''
        INSERT INTO {self.table_seeds}(seeds)
        VALUES
        ('{seed}')
        '''
        self.cursor.execute(qry) 
        self.connection.commit()     # make changes to the seeds table in the database
    
    def insert_into_ihra(self, ihra: str, description: str):
        '''insert data into the table'''
        qry = f'''
        INSERT INTO {self.table_ihra}(ihra, description)
        VALUES
        ('{ihra}', '{description}')
        '''
        self.cursor.execute(qry) 
        self.connection.commit()     # make changes to the ihra table in the database
    
    def insert_into_map(self, ihra: str, matches: str):
        '''insert data into the table'''
        matches_string = ','.join(matches)
        qry = f'''
        INSERT INTO {self.table_map}(ihra, matches)
        VALUES
        ('{ihra}', '{matches_string}')
        '''
        self.cursor.execute(qry) 
        self.connection.commit()     # make changes to the ihra table in the database

    def select_all(self, table_name):
        '''selects all the data from the table'''
        if table_name == self.table_seeds:
            qry = f'''
            SELECT * FROM {self.table_seeds};
            '''
        elif table_name == self.table_ihra:
            qry = f'''
            SELECT * FROM {self.table_ihra};
            '''
        else:
            qry = f'''
            SELECT * FROM {self.table_map};
            '''
        self.cursor.execute(qry)
        output = self.cursor.fetchall()
        return output

if __name__ == '__main__':
    '''test the interaction between python and the postgres database'''

    s = SQL()
    s.create_table(s.query_seeds)
    s.create_table(s.query_ihra)
    s.create_table(s.query_map)

    print(f"{s.table_seeds}, {s.table_ihra}, {s.table_map} tables have the following entries:\n \
          {s.select_all(s.table_seeds)}\n \
          {s.select_all(s.table_ihra)}\n \
          {s.select_all(s.table_map)}")

    s.cursor.close()
    s.connection.close()  

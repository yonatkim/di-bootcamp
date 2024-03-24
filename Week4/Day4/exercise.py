import psycopg2

# connection details
HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = '31Kim@9y'
DATABASE = 'dvdrental'
PORTNUMB = '5432' # default or 5433

# SQL query
def create_table(table_name: str): 
    '''create new table with id, num'''

    query = f'''
    CREATE TABLE IF NOT EXISTS {table_name}(
        id SERIAL PRIMARY KEY,
        num INTEGER NOT NULL
    );
    '''
    cursor.execute(query) 
    connection.commit()     # make changes in the database

def insert_into_table(table_name: str, num_value: int):
    '''insert data into the table'''
    query = f'''
    INSERT INTO {table_name}(num)
    VALUES
    ({num_value})
    '''
    cursor.execute(query) 
    connection.commit()     # make changes to the table in the database

def select_all(table_name: str):
    '''selects all the data from the table'''
    query = f'''
    SELECT * FROM {table_name};
    '''

    cursor.execute(query)
    output = cursor.fetchall()
    return output



if __name__ == '__main__':
    '''test the interaction between python and the postgres database'''
    try:
        connection = psycopg2.connect(
            dbname = DATABASE,
            user = USERNAME,
            password = PASSWORD,
            host = HOSTNAME,
            port = PORTNUMB
        )
    except Exception as e:
        print(f"Error: {e}")
    
    try:
        cursor = connection.cursor()

        table_name = 'new_table3'

        create_table(table_name)

        insert_into_table(table_name, 12312)
        insert_into_table(table_name, 88888)

        print(f"{table_name} table has the following entries:\n {select_all(table_name)}")

    finally:
            connection.close()
    
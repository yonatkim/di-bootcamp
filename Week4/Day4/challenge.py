import requests
import random
import psycopg2

# connection details
HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = '31Kim@9y'
DATABASE = 'restapicountries'
PORTNUMB = '5432' # default or 5433

def fetch_random_countries():
    '''fetch random countries from the REST Countries API'''
    url = "https://restcountries.com/v3.1/all"
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    else:
        print("Failed to fetch data from API")
        return None

def insert_countries_to_db(countries):
    '''insert country data into the database'''
    try:
        connection = psycopg2.connect(dbname = DATABASE, user = USERNAME, password = PASSWORD, host = HOSTNAME, port = PORTNUMB)
        cursor = connection.cursor()
        for country in random.sample(countries, 10):  # Select 10 random countries
            name = country['name']['common']
            capital = country.get('capital', 'N/A')
            flag = country.get('flags', {}).get('png', 'N/A')
            subregion = country.get('subregion', 'N/A')
            population = country.get('population', 'N/A')
            query = "INSERT INTO countries (name, capital, flag, subregion, population) VALUES (%s, %s, %s, %s, %s)"
            cursor.execute(query,(name, capital, flag, subregion, population))
            connection.commit() 
    except Exception as e:
        print(f"Error: {e}")
    finally:
        connection.close()

def main():
    ''' try:
        connection = psycopg2.connect(dbname = DATABASE, user = USERNAME, password = PASSWORD, host = HOSTNAME, port = PORTNUMB)
        query = f"CREATE TABLE countries (id SERIAL PRIMARY KEY, name VARCHAR(50) NOT NULL, capital VARCHAR(50) NOT NULL, flag TEXT, subregion VARCHAR(50) NOT NULL, population INTEGER);"
        cursor = connection.cursor()
        cursor.execute(query) 
        connection.commit() 
        connection.close()
    except Exception as e:
        print(f"Error: {e}") '''
       
    countries_data = fetch_random_countries()
    for country in random.sample(countries_data, 10):  # Select 10 random countries
            name = country['name']['common']
            print("Country:", name)
            capital = country.get('capital', 'N/A')
            print("Capital:", capital)
            flag = country.get('flags', {}).get('png', 'N/A')
            print("Flag URL:", flag)
            subregion = country.get('subregion', 'N/A')
            print("Subregion:", subregion)
            population = country.get('population', 'N/A')
            print("Population:", population)
            print("~" * 50)

    if countries_data:
        insert_countries_to_db(countries_data)
        print("Countries inserted into the database successfully!")
    else:
        print("Failed to fetch country data")

if __name__ == "__main__":
    main()

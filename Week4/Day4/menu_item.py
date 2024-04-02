import psycopg2

# connection details
HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = '31Kim@9y'
DATABASE = 'menumanager'
PORTNUMB = '5432' # default or 5433

class MenuItem:
    def __init__(self, item_name, item_price):
        self.item_name = item_name
        self.item_price = item_price

    def save(self):
        try:
            conn = psycopg2.connect(database=DATABASE, user=USERNAME, password=PASSWORD, host=HOSTNAME, port=PORTNUMB)
            cur = conn.cursor()
            query = "INSERT INTO menu_items (item_name, item_price) VALUES (%s, %s)"
            cur.execute(query, (self.item_name, self.item_price))
            conn.commit()
        except Exception as e:
            print(f"Error: {e}")
        finally:
            conn.close()

    @classmethod
    def delete(cls, item_id):
        try:
            conn = psycopg2.connect(database=DATABASE, user=USERNAME, password=PASSWORD, host=HOSTNAME, port=PORTNUMB)
            cur = conn.cursor()
            query = "DELETE FROM menu_items WHERE item_id = %s"
            cur.execute(query, (item_id,))
            conn.commit()
        except Exception as e:
            print(f"Error: {e}")
        finally:
            conn.close()

    @classmethod
    def update(cls, item_id, item_name, item_price):
        try:
            conn = psycopg2.connect(database=DATABASE, user=USERNAME, password=PASSWORD, host=HOSTNAME, port=PORTNUMB)
            cur = conn.cursor()
            query = "UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_id = %s"
            cur.execute(query, (item_name, item_price, item_id))
            conn.commit()
        except Exception as e:
            print(f"Error: {e}")
        finally:
            conn.close()

class MenuManager:
    @classmethod
    def get_id_by_name(cls, item_name):
        try:
            conn = psycopg2.connect(database=DATABASE, user=USERNAME, password=PASSWORD, host=HOSTNAME, port=PORTNUMB)
            cur = conn.cursor()
        
            query = "SELECT * FROM Menu_Items WHERE item_name = %s"
            cur.execute(query, (item_name,))
            row = cur.fetchone()
            if row:
                return row[0]
            else:
                return None
        except Exception as e:
            print(f"Error: {e}")
        finally:
            conn.close()

    @classmethod
    def get_by_name(cls, item_name):
        try:
            conn = psycopg2.connect(database=DATABASE, user=USERNAME, password=PASSWORD, host=HOSTNAME, port=PORTNUMB)
            cur = conn.cursor()
        
            query = "SELECT * FROM Menu_Items WHERE item_name = %s"
            cur.execute(query, (item_name,))
            row = cur.fetchone()
            if row:
                return MenuItem(row[1], row[2])
            else:
                return None
        except Exception as e:
            print(f"Error: {e}")
        finally:
            conn.close()

    @classmethod
    def all_items(cls):
        try:
            conn = psycopg2.connect(database=DATABASE, user=USERNAME, password=PASSWORD, host=HOSTNAME, port=PORTNUMB)
            cur = conn.cursor()
            query = "SELECT * FROM menu_items;"
            cur.execute(query)
            rows = cur.fetchall()
            items = []
            for row in rows:
                items.append(MenuItem(row[1], row[2]))
            return items
        except Exception as e:
            print(f"Error: {e}")
        finally:
            conn.close()
        


if __name__ == '__main__':
    '''test the interaction between python and the postgres database'''
    '''try:
        connection = psycopg2.connect(dbname = DATABASE, user = USERNAME, password = PASSWORD, host = HOSTNAME, port = PORTNUMB)
    except Exception as e:
        print(f"Error: {e}")
    query = f"CREATE TABLE Menu_Items (item_id SERIAL PRIMARY KEY, item_name VARCHAR(30) NOT NULL, item_price MONEY DEFAULT 0);"
    cursor = connection.cursor()
    cursor.execute(query) 
    connection.commit() 
    connection.close()'''

    # testcases from codebox:
    '''item1 = MenuItem("Burger", 35)
    item1.save()
    item2 = MenuItem("Bulgogi", 36)
    item2.save()
    item3 = MenuItem("Beef Stew", 38)
    item3.save()
    MenuItem.update(2, "Veggie Burger", 37)
    MenuItem.delete(1)'''

    item = MenuManager.get_by_name("Beef Stew")
    print(item.item_name, item.item_price)
    print()
    items = MenuManager.all_items()
    for item in items:
        print(item.item_name, item.item_price)
    
    
    
    
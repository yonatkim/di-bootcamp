import menu_item

def show_user_menu():
    print("Menu Editor Options:")
    print("V - View an Item")
    print("A - Add an Item")
    print("D - Delete an Item")
    print("U - Update an Item")
    print("S - Show the Menu")
    print("Q - Quit")
    user_choice = input("Enter your choice: ").upper()
    return user_choice

def view_item():
    item_name = input("Enter the name of the item you want to view: ")
    item = menu_item.MenuManager.get_by_name(item_name)
    if item:
        print(f"Item Name: {item.item_name} Item Price: {item.item_price}")
    else:
        print("Item not found.")

def add_item_to_menu():
    item_name = input("Enter item name: ")
    item_price = float(input("Enter item price: "))
    new_item = menu_item.MenuItem(item_name, item_price)
    new_item.save()
    print("Item was added successfully.")

def remove_item_from_menu():
    item = None
    item_name = input("Enter the name of the item you want to remove: ")
    item = menu_item.MenuManager.get_id_by_name(item_name)
    if item:
        menu_item.MenuItem.delete(item)
        print("Item was deleted successfully.")
    else:
        print("Error: Item not found.")

def update_item_from_menu():
    old_item_name = input("Enter the name of the item you want to update: ")
    old_item = menu_item.MenuManager.get_by_name(old_item_name)
    old_item_id = menu_item.MenuManager.get_id_by_name(old_item_name)
    if old_item:
        new_item_name = input("Enter the new name for the item: ")
        new_item_price = float(input("Enter the new price for the item: "))
        menu_item.MenuItem.update(old_item_id, new_item_name, new_item_price)
        print("Item was updated successfully.")
    else:
        print("Error: Item not found.")

def show_restaurant_menu():
    items = menu_item.MenuManager.all_items()
    if items:
        print("Restaurant Menu:")
        for item in items:
            print(f"{item.item_name}: {item.item_price}")
    else:
        print("Restaurant menu is empty.")

def main():
    while True:
        user_choice = show_user_menu()
        if user_choice == 'V':
            view_item()
        elif user_choice == 'A':
            add_item_to_menu()
        elif user_choice == 'D':
            remove_item_from_menu()
        elif user_choice == 'U':
            update_item_from_menu()
        elif user_choice == 'S':
            show_restaurant_menu()
        elif user_choice == 'Q':
            print("Exiting program.")
            show_restaurant_menu()
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()

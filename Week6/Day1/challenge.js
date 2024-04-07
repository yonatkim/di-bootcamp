let client = "John";

const groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "$20",
    other: {
        paid: true,
        meansOfPayment: ["cash", "creditCard"]
    }
};

// --1
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => console.log(fruit));
};

// --2
const cloneGroceries = () => {
    let user = client; 
    client = "Betty"; 

    let shopping = { ...groceries }; 

    shopping.totalPrice = "$35";  
    shopping.other.paid = false;  
    console.log("Inside cloneGroceries function:");
    console.log("User:", user);
    console.log("Client:", client);
    // displays clone with updated values
    console.log("Shopping object:", shopping); 
    // displays original values
    console.log("Groceries object:", groceries);
};

// test case
cloneGroceries();

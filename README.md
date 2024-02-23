
## Context API

 We use context API to avoid props drilling . It allows us to pass data down from a parent component to its child components without having to pass and recieve the data between the components manually.

 ## Data

  The data for the context API is stored in the App.jsx and stored in the useState(). I added some more data to the provided one. 

Main body content components are given inside the *myContextProvider* tags and the values are also given.

## Total Price and Total Cart Value

The  total price is calculated by sum of the individual product prices and multiplied it with the quantity of the items. So Initially the cart value and total price is 0.

 Since the quantity field is not given in the data, it takes as 0 as initial value. If the Add button is pressed again, it checks for the id recieved and stored in the data are same, if true it adds quantity field and 1 to the data using spread operator. Now if the same item is pressed again, it takes the quantity field from the item data.

 ```
 const handleAdd = (id, quantity) => {
    setData((predata) => {
      return predata.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 || quantity + 1 };
        }
        return item;
      });
    });
  };
``` 

Similarly for Reducing the quantity in addtion to the id check it also checks if the quantity value is greater than zero so that the quantity won't  be in negative number

```
const handleSub = (id, quantity) => {
    setData((predata) => {
      return predata.map((item) => {
        if (item.id === id && quantity > 0) {
          return { ...item, quantity: item.quantity - 1 || quantity - 1 };
        }
        return item;
      });
    });
  };

```
With the quantity value it is multiplied with the price of the individual item.

Initial total value is zero, then every time an item is added  or removed from cart, it adds up to the total value.

```
 const totalPrice = data.reduce(
    (total, data) => total + data.price * (data.quantity || 0), 0
  ); // To recieve the total price and quantity  of all items in cart
  const totalCartValue = data.reduce(
    (total, data) => total + (data.quantity || 0), 0
  );
```

Thank you!!!!
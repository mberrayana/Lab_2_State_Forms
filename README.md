
## Exercise 1

1. Do items appear in a list?
This confirms that the component correctly renders the current list of items stored in state. Each item should be displayed using .map() to output list elements inside <li> tags within a <ul>.

2. Does "Add" button add items?
When the "Add Random Item" button is clicked, a new item from a predefined set should be added to the state array without mutating the original array. The update should trigger a re-render and the new item should appear in the list.

3. Does "Remove" button remove items?
Clicking the "Remove Last Item" button should remove the last item from the array state, again creating a new array rather than mutating the existing one. The list should update accordingly.

4. Do the buttons work multiple times?
This tests that the add and remove functionality are repeatable and stable. Users should be able to add multiple items sequentially and remove multiple items without errors, and the list updates correctly each time.

## Exercise 2

These questions refer to the expected behavior and testing criteria for a React component that updates and displays text input in real-time, from the exercise on handling change events with controlled components:

1. Does text appear as you type?
This checks that the input field is controlled by React state using the onChange event. The displayed text should update immediately as the user types, reflecting the current state value set by setText(e.target.value).

2. Is character count correct?
The component must correctly count the number of characters in the input text. This is typically done using text.length. It ensures that every character (including spaces) contributes to the count accurately.

3. Is word count correct? (test with: "hello", "hello world", " hello world ")
This verifies that the word count logic accounts for different input scenarios, handling trims and filtering out empty strings.

4. Does it handle empty input?
This confirms the component gracefully manages cases where the input is empty. The word count should be 0 and character count 0, and no errors should occur.

## Exercise 3

1. Can you type in text input?
Yes. The text input for "Username" is a controlled component with its value bound to React state (username). As you type, the onChange handler updates the username state, so the input field displays what you type in real-time.

2. Can you select different colors?
The "Favorite Color" select dropdown is controlled by the favoriteColor state. Changing the selection triggers onChange, which updates the state. The selected option immediately reflects in both the dropdown and the displayed current values.

3. Can you toggle checkboxes?
Clicking a checkbox toggles its state between true and false, and the checkbox's checked property updates accordingly. The displayed values also update to "Yes" or "No" based on the state.

4. Do radio buttons work (only one selected)?
The radio buttons share the same name="heardFrom", so only one can be selected at a time. The heardFrom state holds the currently selected radio value. Clicking a radio changes the state, which updates both the selected radio and the displayed value. Selecting one radio automatically deselects the others.

5. Do all values display correctly after form filled?
Below the form, all the current input values are displayed and updated in real-time as you interact with the form. This immediate feedback confirms the state is updated correctly for all input types.

## Exercise 4

1. Do products display?
The ProductList component receives the products array as a prop from the parent App component. It maps over this array and renders each product’s name and price in an <li>, along with an "Add" button. Because this is directly based on the hardcoded PRODUCTS array, all products (Laptop, Mouse, Keyboard, Monitor) display correctly on page load.

2. Can you add items to cart?
When you click an "Add" button in the product list, it calls the handleAddToCart function in App.js with the corresponding product object.

3. Does quantity increase if you add the same item?
If we add the same product multiple times, handleAddToCart finds the existing cart entry for the product and returns a new array where that product’s quantity is incremented by 1. This ensures the quantity increases correctly rather than adding duplicate entries.

4. Does cart update immediately?
Because cart is managed with React’s useState, updating the cart state via setCart triggers a re-render of the ShoppingCart and Checkout components that consume the cart state via props. The UI immediately reflects any changes to the cart content or quantities.

5. Is total calculated correctly?
The Checkout component uses .reduce() on cartItems to calculate the total by summing (price × quantity) for each item. The result is formatted to two decimal places and displayed. This total updates instantly with cart changes, matching the expected total for all items currently in the cart.

6. Can you remove items?
Each cart entry renders a "Remove" button. Clicking it calls the handleRemoveFromCart function in App.js with the product id. The function filters out the item from cart state, removing it entirely. The UI updates immediately to no longer show the removed item and to adjust the total accordingly.
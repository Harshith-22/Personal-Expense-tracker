# Personal-Expense-tracker
Created with CodeSandbox
Objective: Build a functional Personal Expense Tracker that allows users to add, edit, and delete expenses. Each entry must include a description, amount, and date. The app should be intuitive and visually appealing, with data persistence using Local Storage.

Key Features:
  
1. Add Expense:
  Create a form with input fields for:
  Description: The name or purpose of the expense (e.g., groceries, rent).
  Amount: The monetary value of the expense.
  Date: The date when the expense occurred.
  Input Validation:
  Ensure that all fields (description, amount, and date) are filled out before the expense can be added.
  If any field is empty, display an error message to the user.
2. Display Expenses:
  Show a list or table of all added expenses.
  Sort the list by date, displaying the most recent expenses at the top.
  Each entry should display:
  Expense description
  Amount
  Date
  Optionally, show the total sum of all expenses.
3. Edit Expense:
  Allow users to select an existing expense and update any of its details (description, amount, or date).
  When an expense is edited, validate the inputs to ensure that all fields are not empty.
  Update the expense list with the modified data.
4. Delete Expense:
  Provide a delete button for each expense in the list.
  Once clicked, the expense should be removed from the list and local storage.
5. Responsive Design:
  Design the app to work seamlessly on both desktop and mobile devices.
  Use CSS Grid and Flexbox for a flexible and responsive layout.

UI Elements:
1. Expense Form:
  Input fields for adding the description, amount, and date.
  A submit button to add the expense.
2. Expense List:
  A table or list showing each expense’s details.
  Edit and delete buttons for each expense entry.
3. Total Amount (Optional):
  Display the total sum of all expenses at the bottom of the list.

Technologies to Use:
React: Create the application using React components for efficient state management and dynamic UI updates.
CSS Grid and Flexbox: Use these modern CSS techniques to ensure the app layout is responsive and visually appealing.
Local Storage: Utilize local storage to save and retrieve the expense data, ensuring it persists after browser refreshes.


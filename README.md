# Calculator
A simple and user-friendly calculator built with HTML, CSS, and JavaScript, designed to perform basic arithmetic operations seamlessly.

**Features**
1. Basic Arithmetic Support : 
    - Addition (+)
    - Subtraction (-)
    - Multiplication (*, shown as X in UI)
    - Division (/)
    - Percentage Calculation (%) - Converts the most recent number in the expression to a percentage

2. Clear & reset functionality
    - AC – Clears the entire input
    - C – Clears the last character

3. Brackets Support
    - Toggles between opening and closing brackets with ( ) button
    - Ensures proper bracket balancing before evaluation

4. Pressing (=) or Enter (Keyboard Interaction) evaluates the expression

5. Decimal Point Handling
    - Prevents entering more than one decimal point in a single number segment

6. Operator Management
    - Prevents consecutive operators
    - Allows (-) at the beginning for negative numbers
    - Replaces the last operator if another one is clicked immediately after
    - Balanced Expression Check - Checks for proper operator placement and bracket balancing before evaluation

7. Error Handling - Displays "Error" if the expression is invalid

8. Console History Tracking - Logs the full expression and the result to the browser console for debugging or history tracking

9. Live Expression Display - Dynamically updates the input display as buttons are clicked

10. Chained Calculations - After evaluation, the result can be used for further calculations

**Files**
- index.html – Structure
- style.css – Styling
- script.js – Functionality
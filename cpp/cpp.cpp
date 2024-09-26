#include <iostream>
#include <stdexcept>

using namespace std;

// Function to perform addition
double add(double num1, double num2) {
    return num1 + num2;
}

// Function to perform subtraction
double subtract(double num1, double num2) {
    return num1 - num2;
}

// Function to perform multiplication
double multiply(double num1, double num2) {
    return num1 * num2;
}

// Function to perform division with error handling for division by zero
double divide(double num1, double num2) {
    if (num2 == 0) {
        throw invalid_argument("Error: Division by zero is not allowed.");
    }
    return num1 / num2;
}

int main() {
    double num1, num2;
    char operation;

    cout << "Welcome to the Simple Calculator" << endl;
    cout << "Enter first number: ";
    cin >> num1;

    cout << "Enter an operator (+, -, *, /): ";
    cin >> operation;

    cout << "Enter second number: ";
    cin >> num2;

    try {
        double result;
        switch (operation) {
            case '+':
                result = add(num1, num2);
                break;
            case '-':
                result = subtract(num1, num2);
                break;
            case '*':
                result = multiply(num1, num2);
                break;
            case '/':
                result = divide(num1, num2);
                break;
            default:
                throw invalid_argument("Error: Invalid operator.");
        }

        cout << "Result: " << num1 << " " << operation << " " << num2 << " = " << result << endl;
    } catch (const invalid_argument& e) {
        cout << e.what() << endl;
    }

    return 0;
}

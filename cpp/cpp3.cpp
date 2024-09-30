#include <iostream>
using namespace std;

int main() {
    int n;

    // Input: Size of the array
    cout << "Enter the size of the array: ";
    cin >> n;

    int arr[n];

    // Input: Elements of the array
    cout << "Enter " << n << " elements:" << endl;
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    // Initialize variables for largest and smallest
    int largest = arr[0];
    int smallest = arr[0];

    // Loop through the array to find the largest and smallest elements
    for (int i = 1; i < n; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    // Output the results
    cout << "Largest element: " << largest << endl;
    cout << "Smallest element: " << smallest << endl;

    return 0;
}

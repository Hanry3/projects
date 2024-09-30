package main

import (
	"fmt"
	"errors"
)

// BankAccount struct to store account details
type BankAccount struct {
	accountHolder string
	balance       float64
}

// NewBankAccount creates a new bank account with an initial balance
func NewBankAccount(accountHolder string, initialDeposit float64) *BankAccount {
	return &BankAccount{
		accountHolder: accountHolder,
		balance:       initialDeposit,
	}
}

// Deposit adds money to the account
func (ba *BankAccount) Deposit(amount float64) {
	if amount > 0 {
		ba.balance += amount
		fmt.Printf("$%.2f deposited successfully!\n", amount)
	} else {
		fmt.Println("Invalid deposit amount.")
	}
}

// Withdraw subtracts money from the account if sufficient balance is available
func (ba *BankAccount) Withdraw(amount float64) error {
	if amount > ba.balance {
		return errors.New("insufficient balance")
	}
	ba.balance -= amount
	fmt.Printf("$%.2f withdrawn successfully!\n", amount)
	return nil
}

// CheckBalance displays the current balance
func (ba *BankAccount) CheckBalance() {
	fmt.Printf("Current balance: $%.2f\n", ba.balance)
}

// BankingSystem struct to manage multiple bank accounts
type BankingSystem struct {
	accounts map[string]*BankAccount
}

// NewBankingSystem creates a new banking system
func NewBankingSystem() *BankingSystem {
	return &BankingSystem{
		accounts: make(map[string]*BankAccount),
	}
}

// CreateAccount adds a new account to the banking system
func (bs *BankingSystem) CreateAccount(accountHolder string, initialDeposit float64) {
	if _, exists := bs.accounts[accountHolder]; exists {
		fmt.Println("Account already exists.")
	} else {
		bs.accounts[accountHolder] = NewBankAccount(accountHolder, initialDeposit)
		fmt.Printf("Account created for %s with an initial deposit of $%.2f.\n", accountHolder, initialDeposit)
	}
}

// GetAccount retrieves an account by the account holder's name
func (bs *BankingSystem) GetAccount(accountHolder string) (*BankAccount, error) {
	account, exists := bs.accounts[accountHolder]
	if !exists {
		return nil, errors.New("account does not exist")
	}
	return account, nil
}

func displayMenu() {
	fmt.Println("\nBanking System Menu:")
	fmt.Println("1. Create a new account")
	fmt.Println("2. Deposit money")
	fmt.Println("3. Withdraw money")
	fmt.Println("4. Check balance")
	fmt.Println("5. Exit")
}

func main() {
	bankingSystem := NewBankingSystem()

	for {
		displayMenu()
		var choice int
		fmt.Scanln(&choice)

		switch choice {
		case 1:
			var name string
			var initialDeposit float64
			fmt.Println("Enter account holder's name:")
			fmt.Scanln(&name)
			fmt.Println("Enter initial deposit:")
			fmt.Scanln(&initialDeposit)
			bankingSystem.CreateAccount(name, initialDeposit)

		case 2:
			var name string
			var depositAmount float64
			fmt.Println("Enter account holder's name:")
			fmt.Scanln(&name)
			account, err := bankingSystem.GetAccount(name)
			if err != nil {
				fmt.Println(err)
				continue
			}
			fmt.Println("Enter deposit amount:")
			fmt.Scanln(&depositAmount)
			account.Deposit(depositAmount)

		case 3:
			var name string
			var withdrawAmount float64
			fmt.Println("Enter account holder's name:")
			fmt.Scanln(&name)
			account, err := bankingSystem.GetAccount(name)
			if err != nil {
				fmt.Println(err)
				continue
			}
			fmt.Println("Enter withdrawal amount:")
			fmt.Scanln(&withdrawAmount)
			if err := account.Withdraw(withdrawAmount); err != nil {
				fmt.Println(err)
			}

		case 4:
			var name string
			fmt.Println("Enter account holder's name:")
			fmt.Scanln(&name)
			account, err := bankingSystem.GetAccount(name)
			if err != nil {
				fmt.Println(err)
				continue
			}
			account.CheckBalance()

		case 5:
			fmt.Println("Exiting the banking system. Goodbye!")
			return

		default:
			fmt.Println("Invalid option. Please try again.")
		}
	}
}

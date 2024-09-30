use std::io::{self, Write};

struct Task {
    description: String,
    completed: bool,
}

impl Task {
    fn new(description: String) -> Task {
        Task {
            description,
            completed: false,
        }
    }

    fn mark_complete(&mut self) {
        self.completed = true;
    }
}

fn display_menu() {
    println!("\nTo-Do List:");
    println!("1. Add a task");
    println!("2. View tasks");
    println!("3. Mark a task as complete");
    println!("4. Exit");
}

fn main() {
    let mut tasks: Vec<Task> = Vec::new();

    loop {
        display_menu();
        let mut choice = String::new();
        io::stdout().flush().unwrap(); // To immediately display the menu
        io::stdin().read_line(&mut choice).expect("Failed to read input");

        match choice.trim() {
            "1" => {
                // Add a new task
                println!("Enter the task description:");
                let mut description = String::new();
                io::stdin().read_line(&mut description).expect("Failed to read input");

                let new_task = Task::new(description.trim().to_string());
                tasks.push(new_task);
                println!("Task added successfully!");
            }
            "2" => {
                // View tasks
                if tasks.is_empty() {
                    println!("No tasks available.");
                } else {
                    for (index, task) in tasks.iter().enumerate() {
                        let status = if task.completed { "✔" } else { "✘" };
                        println!("{}: {} [{}]", index + 1, task.description, status);
                    }
                }
            }
            "3" => {
                // Mark a task as complete
                if tasks.is_empty() {
                    println!("No tasks available.");
                } else {
                    println!("Enter the task number to mark as complete:");
                    let mut task_number = String::new();
                    io::stdin().read_line(&mut task_number).expect("Failed to read input");

                    let task_number: usize = task_number.trim().parse().expect("Please enter a valid number");
                    if task_number > 0 && task_number <= tasks.len() {
                        tasks[task_number - 1].mark_complete();
                        println!("Task marked as complete!");
                    } else {
                        println!("Invalid task number.");
                    }
                }
            }
            "4" => {
                // Exit the program
                println!("Goodbye!");
                break;
            }
            _ => {
                println!("Invalid choice. Please try again.");
            }
        }
    }
}

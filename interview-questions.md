# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: I think the new key that I am going to make will be in the student model because the student model goe back to the cohort and not the opposite. now regarding how to make the new key I am not sure, but my best shot would be making it by making a rout. 

Researched answer: right way to fix this is to migrate a new key data for the student model. 

2. Which RESTful routes must always be passed params? Why?

Your answer: show, new, update, I belive because in these i can put the new data i want.

Researched answer:  index, new, show, and edit must pass params because we can identify what is included 

3. Name three rails generator commands. What is created by each?

Your answer: I am very familiar with rails generate model,  where it creates new data and column names to be made and what is in each column.

Researched answer: rails generate migration action_name, is what allows me to make changes to all that data.  rails generate resource, creates a model and all RESTful routes within. rails generate model,  where it creates new data and column names to be made and what is in each column.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students- index

action: "POST" location: /students- index

action: "GET" location: /students/new- create a new student in a form

action: "GET" location: /students/2-show information about one student with the id (2)

action: "GET" location: /students/2/edit-edit student with id 2

action: "PATCH" location: /students/2-update

action: "DELETE" location: /students/2-destroy

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1-as a user, I want to be able to use the application on different devices, like my phone or my laptop.
2-as a user, I want to be able to have my own account profile that saves my info and I can open my account from anywhere.
3- as a user, I can create to do lists for more than just one person in my account.
4- as a user, I can create, delete, and update, tasks on my account.
5-as a user, I can recover deleted data within a time frame.
6-as a user, I can share some of my tasks through email or other apps. 
7- as a user, I can be able to print my tasks if i want to. 
8- as a user, I want to be able to add pictures to my tasks for motivation or reminders.
9-as a user , I want to be able to make future tasks and get reminders notification.
10- as a user, I want to be able to invite a person for a task list if we are both working on the same thing.
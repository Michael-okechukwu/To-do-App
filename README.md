# JavaScript To-Do App Project Instruction

Build a **To-Do App** using only **HTML, CSS, and JavaScript**.

The goal of this project is to test your understanding of:
- DOM manipulation
- form handling
- input validation
- arrays and objects
- CRUD operations
- password protection
- search filtering
- countdown timers
- character counting
- dynamic rendering
- localStorage

## Project Requirements

### 1. Add Task
The app must allow the user to add a new task.

Each task must contain:
- **Title**
- **Details** in a **textarea**
- **Password**
- **Minutes to complete the task**

When a task is added, it should automatically appear in the task list.

---

### 2. Task Details Validation
Before a task can be added, validate the inputs.

#### Title
- Must not be empty

#### Details textarea
- Must not be empty
- Must be at least **10 words**
- Must not be more than **250 words**

#### Password
- Must not be empty

#### Minutes
- Must not be empty
- Must be a valid number
- Must be greater than **0**

If any input is invalid, show a clear error message.

---

### 3. Character Counter
The details textarea must have a **live character counter**.

Example:  
`120 / 250 characters`

The counter should update as the user types.

---

### 4. Password Show/Hide Toggle
The password input field must have a **show/hide toggle**.

This allows the user to choose whether to display or hide the password while typing.

---

### 5. Countdown Timer for Each Task
Each task must have its own countdown timer.

#### How it should work
- The user enters the number of minutes for the task
- Once the task is added, the countdown starts immediately
- Every task must count down separately
- The remaining time should be displayed on the task card

When the countdown reaches zero:
- If the task is not completed, mark it as **expired**

---

### 6. Task Status
Each task must have one of these statuses:
- **Pending**
- **Completed**
- **Expired**

---

### 7. Status Colors and UI
Style each task according to its status:

#### Pending Task
- Green background

#### Expired Task
- Red background

#### Completed Task
Use a better clean style, for example:
- soft blue
- muted gray
- check icon
- line-through text
- completed badge

The UI should be neat, well spaced, and not clustered.

---

### 8. Update Task
The user must be able to update a task.

Before updating:
- ask for the **correct password** for that task

If the password is incorrect:
- do not allow the update

---

### 9. Delete Task
The user must be able to delete a task.

Before deleting:
- ask for the **correct password** for that task

If the password is incorrect:
- do not delete the task

---

### 10. Mark Task as Completed
The user must be able to mark a task as completed.

Before marking it as completed:
- ask for the **correct password** for that task

If the password is incorrect:
- do not complete the task

If the task is already expired:
- do not allow it to be marked as completed

---

### 11. Search Task
Add a search input field.

The user must be able to search tasks by:
- title
- details

The task list should update based on the search result.

---

### 12. Task Summary Section
The app must display the total number of:
- **Pending tasks**
- **Completed tasks**
- **Expired tasks**

This summary must update automatically whenever:
- a task is added
- a task is updated
- a task is deleted
- a task is completed
- a task expires

Example:

- Pending Tasks: 4
- Completed Tasks: 2
- Expired Tasks: 1

You can display them as:
- text summary
- cards
- badges
- dashboard boxes

---

### 13. Store Data Properly
Tasks should be stored in an array of objects.

Each task object should contain values like:

```javascript
{
  id: 1,
  title: "Study JavaScript",
  details: "Finish learning DOM manipulation and practice with examples every day.",
  password: "12345",
  minutes: 5,
  timeLeft: 300,
  status: "pending",
  completed: false,
  expired: false
}
```

---

### 14. Dynamic Rendering
Do not hardcode tasks in HTML.

All tasks must be:
- stored in JavaScript
- rendered dynamically into the DOM

---

### 15. Local Storage
Use **localStorage** so tasks remain available after page refresh.

This means:
- when the page reloads, saved tasks should still show
- task status should still remain
- remaining time should still make sense as much as possible

---

## Expected Features List
Your app must include all of the following:

- Add task
- Update task
- Delete task
- Mark task as completed
- Password confirmation for update
- Password confirmation for delete
- Password confirmation for completed
- Password show/hide toggle
- Details textarea
- Details validation
- 10-word minimum
- 250-word maximum
- Character counter
- Per-task countdown timer
- Expired task handling
- Search field
- Pending/completed/expired task styling
- Task summary counts
- Dynamic rendering
- localStorage

---

## Suggested Layout

### Top Section
- App title
- Search input
- Summary cards:
  - Pending
  - Completed
  - Expired

### Form Section
- Title input
- Details textarea
- Character counter
- Password input with show/hide toggle
- Minutes input
- Add task button

### Task List Section
Each task card should show:
- Title
- Details
- Remaining time
- Status
- Update button
- Delete button
- Complete button

---

## Rules
- Use only **HTML, CSS, and JavaScript**
- Write clean and readable code
- Use functions where necessary
- Separate your logic properly
- Make the UI neat and easy to use

---

## Bonus Features
These are not compulsory, but they will improve your project:

- edit form in modal
- filter by status
- confirm dialog before deleting
- icons for buttons
- progress bar for countdown
- responsive design for mobile
- dark mode
- toast notifications
- better completed task design
- sort tasks by latest or oldest

---

## What You Will Be Graded On
You will be checked based on:

- correct functionality
- clean code structure
- validation working properly
- password protection working properly
- countdown timer working properly
- search working properly
- summary count updating correctly
- neat UI design
- use of localStorage

---

## Final Submission
Submit:
- `index.html`
- `style.css`
- `script.js`

Your project must be fully working.

---

## Final Assignment Version
Build a To-Do App using HTML, CSS, and JavaScript. The app must allow users to add tasks with a title, details, password, and number of minutes to complete each task. The details must be entered in a textarea and validated so that they are not empty, not less than 10 words, and not more than 250 words. Add a live character counter for the textarea and a show/hide toggle for the password field.

Each task must have its own countdown timer based on the number of minutes entered by the user. The timer should start immediately after the task is added. If the timer reaches zero before the task is completed, the task should be marked as expired.

The app must allow users to update, delete, and mark tasks as completed, but before performing any of these actions, the user must enter the correct password for that specific task. If the password is incorrect, the action must not be allowed.

Add a search field to search tasks by title or details. Display tasks with different styles based on status: pending tasks should have a green background, expired tasks should have a red background, and completed tasks should have a cleaner better style. Also display the total number of pending, completed, and expired tasks, and make sure these numbers update automatically whenever task data changes.

Store tasks in an array of objects, render them dynamically with JavaScript, and save them in localStorage so they remain after page refresh.

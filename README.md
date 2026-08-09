# 🚀 TaskFlow

A small project management application built from scratch with React.

But this project is about more than building a task manager.

The main goal is to **learn React properly by building something real** — understanding the decisions behind the code instead of simply following tutorials or copying AI-generated solutions.

---

## 🎯 Why am I building this?

React has a lot of concepts:

* Components
* Props
* State
* Hooks
* Context
* Reducers
* Routing
* Forms
* API calls
* Performance
* Custom hooks

Learning each concept separately is useful, but it can be difficult to understand **when and why** you would actually use them.

TaskFlow is my attempt to solve that.

I'll gradually build one application and introduce React concepts when the application actually needs them.

> **The goal is not to use every React feature. The goal is to understand why a feature is useful.**

---

# 🧠 Learning Philosophy

The most important rule for this project:

> **I write the code. AI helps me understand and debug it.**

AI can be used for:

* Explaining concepts
* Reviewing my approach
* Debugging
* Suggesting alternatives
* Explaining errors
* Reviewing architecture
* Helping me understand unfamiliar code

AI should **not** simply build the entire feature for me.

### Preferred workflow

```text
Understand the requirement
        ↓
Think about the solution
        ↓
Design the UI
        ↓
Try implementing it
        ↓
Get stuck
        ↓
Ask AI for help
        ↓
Understand the explanation
        ↓
Implement it myself
        ↓
Test it
        ↓
Commit
```

If I cannot explain the code, I don't consider the feature finished.

---

# 🛠️ Project Workflow

This project uses a simple development workflow.

```text
Requirement
    ↓
Linear
    ↓
Figma
    ↓
React
    ↓
Git
    ↓
GitHub PR
```

Each tool has a different purpose.

### 📋 Linear

Used for:

* Breaking the project into tasks
* Tracking progress
* Writing requirements
* Defining acceptance criteria
* Keeping track of future work

Linear answers:

> **"What needs to be built?"**

---

### 🎨 Figma

Used for:

* UI design
* Layouts
* Components
* Responsive designs
* Empty states
* Loading states
* Error states

Figma answers:

> **"What should it look like?"**

The design does not have to be perfect.

The goal is to have enough design information to confidently implement the UI.

---

### 💻 React

Used for actually building the application.

React answers:

> **"How do I turn the requirement and design into a working application?"**

---

### 🌿 Git & GitHub

Used for:

* Version control
* Feature branches
* Commits
* Pull requests
* Code review

GitHub answers:

> **"What changed, and how was it reviewed?"**

---

# 🏗️ What are we building?

TaskFlow is a simple task/project management application.

The initial application will allow users to:

* Create tasks
* Edit tasks
* Delete tasks
* Complete tasks
* Change task status
* Set priorities
* Add tags
* Set due dates
* Search tasks
* Filter tasks
* Sort tasks
* View task details
* Switch between light and dark themes

Eventually, the application will have a backend and database.

---

# 🖥️ Main Pages

The application will eventually contain:

```text
TaskFlow
│
├── Dashboard
├── Tasks
├── Task Details
├── Settings
└── About
```

### Dashboard

A quick overview of the user's tasks.

```text
┌──────────────────────────────────────────────┐
│ TaskFlow                         Search  ⚙️  │
├───────────┬──────────────────────────────────┤
│ Dashboard │                                  │
│ Tasks     │  Dashboard                       │
│ Settings  │                                  │
│           │  [12 Tasks] [4 Todo] [3 Done]   │
│           │                                  │
│           │  Recent Tasks                    │
│           │                                  │
│           │  Todo    In Progress    Done     │
│           │  ────    ───────────    ────     │
└───────────┴──────────────────────────────────┘
```

### Tasks

A complete list of tasks with:

* Search
* Filters
* Sorting

### Task Details

Displays:

* Title
* Description
* Status
* Priority
* Due date
* Tags
* Created date
* Updated date

### Settings

Initially this will mainly contain application preferences such as theme.

---

# ⚛️ React Learning Roadmap

The application will be built gradually.

## Phase 1 — React Fundamentals

Learn through:

* JSX
* Components
* Props
* State
* Events
* Lists
* Conditional rendering
* Forms

Build:

* Layout
* Sidebar
* TaskCard
* TaskList
* Create task
* Edit task
* Delete task
* Complete task

---

## Phase 2 — Effects and Persistence

Introduce:

```text
useEffect
```

Build:

* localStorage persistence
* Load tasks when the application starts
* Save tasks when tasks change

Then extract the logic into:

```text
useLocalStorage()
```

This introduces custom hooks naturally.

---

## Phase 3 — Routing

Introduce React Router.

Routes:

```text
/
/tasks
/tasks/:taskId
/settings
/about
```

Learn:

* Routes
* Links
* Navigation
* URL parameters

---

## Phase 4 — Application State

As the application becomes more complex, introduce:

```text
useContext
useReducer
```

These should be introduced because the application has a real state-management problem.

Not simply because they're React features that need to be checked off.

---

## Phase 5 — Performance

Later investigate:

```text
useMemo
useCallback
React.memo
```

Only after there is something worth optimizing.

The goal is to understand:

> **What problem does this solve?**

rather than:

> **Where can I use this hook?**

---

## Phase 6 — More Advanced React

Introduce:

```text
useRef
Custom hooks
Debouncing
Error handling
Loading states
Empty states
Accessibility
Responsive design
```

---

# 🗄️ Backend — Later

The first version will intentionally **not have a backend**.

Initially:

```text
React
  ↓
localStorage
```

This keeps the focus on learning React.

Once the frontend is comfortable, the backend will be introduced.

Eventually:

```text
React
  ↓
REST API
  ↓
Node.js
  ↓
PostgreSQL
```

The backend will introduce:

* CRUD APIs
* HTTP
* Database operations
* Validation
* Authentication
* Authorization
* API error handling

---

# 📅 Development Approach

The project will be built incrementally.

A rough progression:

```text
Week 1
React fundamentals
        ↓
Week 2
Effects + localStorage + routing
        ↓
Week 3
Search + filters + Context
        ↓
Week 4
Reducer + refs + performance + custom hooks
        ↓
Backend
        ↓
Database
        ↓
Authentication
        ↓
Testing
        ↓
Deployment
```

The schedule is flexible.

Understanding a concept is more important than finishing a feature on a specific day.

---

# 🎨 Design Process

Before implementing a major feature:

### 1. Define the requirement

Example:

> Users should be able to create a task.

### 2. Create a Linear issue

Example:

```text
TASK-12: Create task form
```

Define:

* What needs to be built
* Acceptance criteria
* Edge cases
* Design reference

### 3. Design it in Figma

Create:

```text
Task Form
Task Form - Empty
Task Form - Validation Error
Task Form - Loading
Task Form - Mobile
```

### 4. Implement it in React

Use the Linear issue and Figma design as the source of truth.

### 5. Test it

Check:

* Happy path
* Invalid input
* Empty states
* Mobile
* Keyboard navigation

### 6. Commit and create a PR

Keep commits small and meaningful.

---

# 🌱 Git Strategy

Features should be developed on separate branches.

Example:

```text
feature/task-card
feature/create-task
feature/edit-task
feature/task-filtering
feature/local-storage
feature/theme
```

Prefer small commits such as:

```text
feat: add task card
feat: add task creation form
feat: add task deletion
feat: persist tasks to local storage
```

Avoid one giant commit containing the entire project.

---

# 🤖 How AI Will Be Used

AI is part of the learning process, but it should not replace the learning process.

### Good question

> "I'm trying to update a task in an array without mutating the original array. Here's what I tried. Why isn't it working?"

### Better than

> "Build task editing for me."

---

### When debugging

Provide:

```text
1. What I wanted to happen
2. What actually happened
3. The relevant code
4. The error message
```

Then understand the explanation before changing the code.

---

# ✅ Definition of Done

A feature is considered complete when:

### Functionality

* [ ] Happy path works
* [ ] Invalid input is handled
* [ ] Empty state is handled
* [ ] Error state is handled
* [ ] Loading state is handled where appropriate

### UI

* [ ] Desktop works
* [ ] Mobile works
* [ ] Layout is consistent
* [ ] Design matches Figma reasonably well

### Accessibility

* [ ] Inputs have labels
* [ ] Buttons are keyboard accessible
* [ ] Focus states are visible
* [ ] Semantic HTML is used

### Code

* [ ] Components have clear responsibilities
* [ ] State lives in the appropriate place
* [ ] No unnecessary duplication
* [ ] No unnecessary hooks
* [ ] No unexplained AI-generated code

### Git

* [ ] Changes are committed
* [ ] Commit message is meaningful
* [ ] PR describes the change
* [ ] PR references the Linear issue

---

# 🚫 Things I Don't Want To Do

I don't want this project to become:

```text
AI generates code
        ↓
I copy code
        ↓
It works
        ↓
I move on
```

Instead:

```text
Problem
   ↓
Think
   ↓
Design
   ↓
Code
   ↓
Debug
   ↓
Understand
   ↓
Improve
```

I also don't want to add libraries just because they are popular.

Every dependency should solve an actual problem.

---

# 🎯 Final Goal

By the end of TaskFlow, I should be able to take a requirement like:

> "Users should be able to create, organize, search, filter, edit, and complete tasks."

and independently work through:

```text
Requirement
     ↓
Break into tasks
     ↓
Design
     ↓
Component architecture
     ↓
State design
     ↓
React implementation
     ↓
Persistence
     ↓
API
     ↓
Database
     ↓
Testing
     ↓
Deployment
```

The final application is useful, but the **real product is the knowledge gained while building it.**

---

## 🚀 Start Small

The first goal is intentionally simple:

```text
Create React project
        ↓
Build App layout
        ↓
Create TaskCard
        ↓
Display a few hard-coded tasks
        ↓
Then make them interactive
```

Don't worry about the backend.

Don't worry about optimization.

Don't worry about authentication.

Don't worry about making it perfect.

**Start with one component, understand it, and keep building.**

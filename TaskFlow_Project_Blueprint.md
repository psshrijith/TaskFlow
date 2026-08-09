# TaskFlow — React Learning Project Blueprint

## 1. Project Overview

**TaskFlow** is a project and task management application inspired by tools such as Linear, Trello, and Jira.

The primary goal is not to build a production-scale task manager immediately. The goal is to use one realistic project to learn and practice React from the fundamentals through more advanced concepts.

### Learning principle

> Write the implementation yourself. Use AI as a mentor/debugger, not as the person writing the application.

The project will be built in two major stages:

1. **Frontend-first:** React + TypeScript + localStorage
2. **Full-stack:** React + API + Node.js + database + authentication

The frontend should be reasonably complete before introducing the backend.

---

# 2. Project Goals

By the end of the project, you should be comfortable with:

### React fundamentals

- Components
- JSX
- Props
- State
- Events
- Conditional rendering
- Rendering lists
- Keys
- Forms
- Controlled inputs
- Component composition
- Lifting state up

### React hooks

- `useState`
- `useEffect`
- `useRef`
- `useContext`
- `useReducer`
- `useMemo`
- `useCallback`
- Custom hooks

### React ecosystem

- React Router
- TypeScript with React
- API requests
- Error/loading states
- Form validation
- Component organization

### Browser concepts

- localStorage
- DOM references
- URL parameters
- browser events

### Backend phase

- REST APIs
- CRUD
- HTTP methods
- Node.js
- Express/Fastify
- PostgreSQL
- Database relationships
- Authentication
- Authorization
- API validation
- Error handling

### Engineering practices

- Git
- Branching
- Pull requests
- Reusable components
- Separation of concerns
- Accessibility
- Responsive design
- Testing
- Production builds

---

# 3. Scope

## MVP

The first usable version should contain:

- Dashboard
- Task list
- Task creation
- Task editing
- Task deletion
- Task completion
- Task status
- Priority
- Due date
- Tags
- Search
- Filtering
- Sorting
- Task details page
- Dark/light theme
- localStorage persistence
- Responsive layout

## Later features

These should NOT be implemented initially:

- Authentication
- Multiple users
- Team management
- Real-time updates
- Notifications
- File uploads
- Complex permissions
- Payments
- AI features

These belong to the full-stack expansion.

---

# 4. Recommended Technology

## Frontend

- React
- TypeScript
- Vite
- React Router
- CSS/Tailwind CSS
- Browser localStorage

## Backend — later

- Node.js
- Express or Fastify
- PostgreSQL
- REST API

## Testing — later

- Vitest
- React Testing Library
- Playwright

Do not add libraries just because they are popular. Introduce a dependency only when the project has a problem that the dependency solves.

---

# 5. Application Structure

The application will eventually look approximately like this:

```text
TaskFlow
│
├── Dashboard
│   ├── Header
│   ├── Sidebar
│   ├── Stats
│   ├── TaskFilters
│   └── TaskBoard
│       └── TaskCard
│
├── Tasks
│   ├── TaskToolbar
│   ├── SearchInput
│   ├── FilterControls
│   ├── SortControl
│   └── TaskList
│       └── TaskCard
│
├── Task Details
│   ├── TaskHeader
│   ├── TaskDescription
│   ├── TaskMetadata
│   ├── TaskTags
│   └── TaskActions
│
├── Settings
│   ├── ThemeSettings
│   └── ApplicationSettings
│
└── About
```

---

# 6. Pages

## 6.1 Dashboard

Route:

```text
/
```

Purpose:

Give the user a quick overview of their tasks.

### Sections

- Total tasks
- Todo count
- In-progress count
- Completed count
- Overdue count
- Recent tasks
- Task board

### Example layout

```text
-------------------------------------------------
| TaskFlow                         Search   👤   |
-------------------------------------------------
| Sidebar |                                     |
|         |  Dashboard                           |
| Home    |                                     |
| Tasks   |  [12 Tasks] [4 Todo] [3 Progress]  |
| Settings|                                     |
|         |  Recent Tasks                       |
|         |                                     |
|         |  Todo     In Progress     Done       |
|         |  ------   ------------     ----       |
|         |  Task A      Task B        Task C     |
-------------------------------------------------
```

### React concepts

- Components
- Props
- `useState`
- Lists
- Conditional rendering
- Derived data

---

# 7. Tasks Page

Route:

```text
/tasks
```

Purpose:

Display all tasks with search, filters, and sorting.

### Features

- Search by title
- Filter by status
- Filter by priority
- Filter by tags
- Sort by due date
- Sort by priority
- Sort by creation date
- Clear filters

### Example

```text
Tasks

[ Search tasks... ]

Status: [All ▼]
Priority: [All ▼]
Sort: [Newest ▼]

------------------------------------------------
| Task                     | Priority | Status |
------------------------------------------------
| Learn useEffect          | High     | Todo   |
| Build task form          | Medium   | Done   |
| Learn useReducer         | High     | Todo   |
------------------------------------------------
```

### React concepts

- Controlled inputs
- State
- Derived state
- Array methods
- `useMemo` later
- Component composition

---

# 8. Task Details Page

Route:

```text
/tasks/:taskId
```

Purpose:

Display a complete task.

### Information

- Title
- Description
- Status
- Priority
- Due date
- Tags
- Created date
- Updated date

### Actions

- Edit
- Delete
- Mark complete
- Change status

### React concepts

- React Router
- `useParams`
- Props
- State
- Conditional rendering

---

# 9. Task Creation

The user should be able to create a task from:

- Dashboard
- Tasks page

Use a modal initially.

### Form fields

```text
Title
Description
Status
Priority
Due date
Tags
```

### Validation

Required:

- Title

Optional:

- Description
- Due date
- Tags

Validation errors should appear next to the relevant field.

### React concepts

- Controlled components
- Form events
- State
- Validation
- Component composition

---

# 10. Task Editing

The same form used for creation should eventually support editing.

Avoid creating two completely separate forms if they have almost identical behavior.

Conceptually:

```text
TaskForm
├── Create mode
└── Edit mode
```

The form should receive the initial task data when editing.

---

# 11. Task Model

Initial frontend model:

```ts
type TaskStatus = "todo" | "in-progress" | "done";

type TaskPriority = "low" | "medium" | "high";

interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string | null;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}
```

Keep the model simple initially.

---

# 12. Component Plan

## Layout components

### `AppLayout`

Responsible for:

- Main application layout
- Sidebar
- Main content area

### `Sidebar`

Responsible for:

- Navigation
- Active route indication

### `Header`

Responsible for:

- Page title
- Search
- Theme control
- User area placeholder

---

## Task components

### `TaskCard`

Displays:

- Title
- Status
- Priority
- Due date
- Tags

Receives task information through props.

### `TaskList`

Responsible for rendering multiple `TaskCard` components.

### `TaskBoard`

Groups tasks by status.

```text
Todo
In Progress
Done
```

### `TaskForm`

Responsible for:

- Creating tasks
- Editing tasks
- Validation

### `TaskModal`

Responsible for:

- Opening/closing the form
- Modal UI
- Overlay behavior

### `TaskFilters`

Responsible for:

- Status
- Priority
- Tags

### `TaskSearch`

Responsible for search input.

---

# 13. State Ownership

This is an important part of the project.

Do not put every piece of state in `App`.

Initially, determine which component actually owns each piece of state.

Example:

```text
App
│
├── tasks
│
├── Dashboard
│
├── Tasks
│   ├── search
│   ├── filters
│   └── sort
│
└── TaskModal
    └── form state
```

Later, when state becomes more complex, experiment with:

```text
useReducer
Context
Custom hooks
```

The goal is to learn **why state belongs somewhere**, not simply where to put it.

---

# 14. Local Storage Architecture

During the frontend phase:

```text
React state
     ↓
localStorage
```

Tasks should survive a browser refresh.

The application should:

1. Load tasks when the application starts.
2. Keep tasks in React state.
3. Save tasks whenever they change.

Eventually extract this behavior into:

```text
useLocalStorage()
```

This becomes the first custom hook.

---

# 15. Theme System

Support:

```text
Light
Dark
```

Theme state should eventually be available across the application.

This gives a natural reason to learn:

```text
Context
```

Potential structure:

```text
ThemeProvider
     ↓
App
     ↓
all components
```

Do not introduce Context until you have experienced why passing theme information through multiple components is inconvenient.

---

# 16. Search and Filtering

Search should be client-side initially.

Example:

```text
User enters:
"react"

        ↓

tasks.filter(...)

        ↓

matching tasks
```

Filtering should support:

- Status
- Priority
- Tags

Sorting should support:

- Newest
- Oldest
- Due date
- Priority

---

# 17. `useMemo`

Do not introduce `useMemo` at the beginning.

First implement filtering normally.

Later:

```text
1000 tasks
   ↓
search
   ↓
filter
   ↓
sort
```

Then investigate whether memoization provides value.

The purpose is to learn:

> `useMemo` is an optimization tool, not a mandatory React feature.

---

# 18. `useCallback` and `React.memo`

Introduce these only after the application contains reusable task components.

For example:

```text
TaskList
   ↓
TaskCard
   ↓
TaskActions
```

Investigate:

- Function identity
- Re-renders
- `React.memo`
- `useCallback`

The goal is to understand the problem before using the optimization.

---

# 19. `useRef`

Add a useful feature:

When the task creation modal opens:

```text
Modal opens
     ↓
Title input receives focus
```

This provides a natural use case for:

```text
useRef
```

Later use a ref for:

- Input focus
- DOM measurements
- Scroll behavior

---

# 20. `useReducer`

Once task operations become numerous:

```text
ADD_TASK
UPDATE_TASK
DELETE_TASK
TOGGLE_TASK
CHANGE_STATUS
```

Experiment with moving task state management to:

```text
useReducer
```

Example action concepts:

```ts
type TaskAction =
  | { type: "ADD_TASK"; payload: Task }
  | { type: "UPDATE_TASK"; payload: Task }
  | { type: "DELETE_TASK"; payload: string }
  | { type: "CHANGE_STATUS"; payload: ... };
```

The goal is to understand when `useReducer` is easier to manage than many `setState` calls.

---

# 21. Custom Hooks

Create custom hooks only after you have repeated logic.

Potential hooks:

```text
useLocalStorage()
useDebounce()
useTasks()
useTheme()
```

Each hook should solve a real repeated problem.

---

# 22. React Router

Routes:

```text
/
├── /tasks
├── /tasks/:taskId
├── /settings
└── /about
```

Learn:

- `BrowserRouter`
- Routes
- Route
- Link
- NavLink
- `useNavigate`
- `useParams`

---

# 23. Error and Loading States

Even during the frontend phase, practice these states.

Every async-like operation should eventually consider:

```text
Loading
Success
Empty
Error
```

Example:

```text
Loading tasks...

No tasks found.

Failed to load tasks.

Tasks displayed.
```

This is important for production-quality UI.

---

# 24. Backend Phase

Only start this after the frontend version is reasonably complete.

Architecture:

```text
React
   ↓
HTTP
   ↓
REST API
   ↓
Node.js
   ↓
PostgreSQL
```

---

# 25. Backend API

Potential endpoints:

```text
GET    /api/tasks
GET    /api/tasks/:id
POST   /api/tasks
PATCH  /api/tasks/:id
DELETE /api/tasks/:id
```

Later:

```text
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout
GET    /api/me
```

---

# 26. Database Design

Initial tables:

```text
users
tasks
tags
task_tags
```

Possible relationships:

```text
User
 │
 └── many Tasks

Task
 │
 └── many Tags
```

Start with a simple schema.

Do not over-engineer the database.

---

# 27. Authentication

Only introduce authentication after the core application works.

Features:

- Register
- Login
- Logout
- Protected routes
- Current user
- User-owned tasks

Architecture:

```text
Browser
   ↓
Login
   ↓
API
   ↓
Authentication
   ↓
Session/token
```

Security should be treated seriously when implementing this phase.

---

# 28. Suggested 30-Day Learning Plan

## Week 1 — React Fundamentals

### Day 1

Project setup.

Build:

- Vite project
- Basic layout
- Header
- Sidebar

Learn:

- React entry point
- JSX
- Components
- Component imports/exports

---

### Day 2

Build:

- TaskCard
- TaskList

Learn:

- Props
- Lists
- `map`
- Keys

---

### Day 3

Add:

- Add task button
- Task creation form

Learn:

- `useState`
- Events
- Controlled inputs

---

### Day 4

Add:

- Delete task
- Complete task
- Change status

Learn:

- State updates
- Immutable updates
- Callback props

---

### Day 5

Add:

- Edit task

Learn:

- Reusing components
- Form state
- Conditional rendering

---

### Day 6

Improve:

- Empty states
- Error messages
- Validation

Learn:

- Conditional rendering
- Form validation

---

### Day 7

Refactor.

Review:

- Components
- Props
- State
- Events
- Lists
- Forms

Do not add new features.

---

# Week 2 — Effects, Persistence, and Routing

## Day 8

Implement localStorage loading.

Learn:

- `useEffect`
- Side effects
- Initial effect

---

## Day 9

Implement localStorage saving.

Learn:

- Effect dependencies
- State synchronization

---

## Day 10

Create:

```text
useLocalStorage()
```

Learn:

- Custom hooks
- Reusable stateful logic

---

## Day 11

Add React Router.

Create:

```text
/
 /tasks
 /settings
 /about
```

---

## Day 12

Create:

```text
/tasks/:taskId
```

Learn:

- URL parameters
- `useParams`

---

## Day 13

Add navigation.

Learn:

- `Link`
- `NavLink`
- `useNavigate`

---

## Day 14

Refactor and review.

---

# Week 3 — Real Application State

## Day 15

Add:

- Search

Learn:

- Derived values
- Controlled inputs

---

## Day 16

Add:

- Status filters
- Priority filters

---

## Day 17

Add:

- Sorting

---

## Day 18

Improve the filtering architecture.

Then investigate:

```text
useMemo
```

---

## Day 19

Build the theme system.

Learn:

- Context
- Provider
- Consumer

---

## Day 20

Add dark/light theme.

Persist the theme.

---

## Day 21

Review:

- `useState`
- `useEffect`
- `useContext`
- `useMemo`
- Custom hooks

---

# Week 4 — Advanced React

## Day 22

Refactor task state with:

```text
useReducer
```

---

## Day 23

Complete reducer-based task actions.

---

## Day 24

Add `useRef`.

Implement:

- Automatic form focus
- Scroll to task

---

## Day 25

Investigate:

```text
React.memo
useCallback
```

Use them only where appropriate.

---

## Day 26

Create:

```text
useDebounce()
```

Use it for search.

---

## Day 27

Accessibility review.

Check:

- Keyboard navigation
- Focus states
- Labels
- Buttons
- Semantic HTML

---

## Day 28

Responsive design.

Test:

```text
Mobile
Tablet
Desktop
```

---

## Day 29

Refactoring day.

Look for:

- Duplicate code
- Huge components
- Poor state ownership
- Unclear names
- Unnecessary effects

---

## Day 30

Final frontend review.

The application should now be a reasonably complete frontend application.

---

# 29. Backend Learning Plan

After the 30-day frontend phase, start the backend.

## Phase 1

Learn:

- Node.js
- HTTP
- REST
- Express/Fastify

Build:

```text
GET /api/tasks
POST /api/tasks
```

---

## Phase 2

Add:

```text
GET /api/tasks/:id
PATCH /api/tasks/:id
DELETE /api/tasks/:id
```

Learn CRUD.

---

## Phase 3

Add PostgreSQL.

Move from:

```text
localStorage
```

to:

```text
PostgreSQL
```

---

## Phase 4

Connect React to the API.

Replace:

```text
React → localStorage
```

with:

```text
React → API → Database
```

---

## Phase 5

Add authentication.

---

# 30. Testing Plan

Do not wait until the very end to learn testing.

Start with simple tests after the core UI exists.

### Unit/component tests

Test:

- TaskCard
- TaskForm
- TaskList
- Filters

Examples:

```text
Task renders correctly
Task can be completed
Task can be deleted
Form validates title
Filter returns correct tasks
```

### End-to-end tests

Later test:

```text
Create task
 → task appears

Edit task
 → updated task appears

Delete task
 → task disappears
```

---

# 31. Git Workflow

Use Git from Day 1.

Suggested branch naming:

```text
feature/project-setup
feature/task-list
feature/create-task
feature/edit-task
feature/local-storage
feature/task-filtering
feature/theme
feature/task-reducer
feature/api-integration
```

Make small commits.

Example:

```text
feat: add task card
feat: add task creation form
feat: persist tasks to local storage
feat: add task filtering
```

Avoid one giant commit containing the entire project.

---

# 32. Definition of Done

A feature is not finished merely because it works once.

For each feature, check:

### Functionality

- Does it work?
- Does it work with empty data?
- Does it work with multiple items?
- Does it handle invalid input?

### UI

- Loading state
- Empty state
- Error state
- Success state
- Mobile layout

### Code

- Clear naming
- No unnecessary duplication
- Reasonable component size
- Correct state ownership
- No unnecessary hooks

### Accessibility

- Keyboard usable
- Buttons are actual buttons
- Inputs have labels
- Focus is visible

### Git

- Small logical commit
- Clear commit message

---

# 33. AI Usage Rules

AI is allowed and encouraged as a learning assistant.

However:

## Rule 1

Do not ask AI to build the feature completely.

Instead:

```text
I need to implement X.
Here is my approach.
What am I missing?
```

## Rule 2

When debugging:

Give AI:

- Error
- Relevant code
- What you expected
- What actually happened

Ask for an explanation first.

## Rule 3

If AI provides code, understand every important line before using it.

## Rule 4

Try solving the problem yourself first.

Recommended workflow:

```text
Understand problem
      ↓
Design solution
      ↓
Try implementation
      ↓
Get stuck
      ↓
Ask AI
      ↓
Understand explanation
      ↓
Implement yourself
      ↓
Test
```

---

# 34. Things You Should NOT Do

Do not:

- Copy an entire AI-generated application
- Add every popular library
- Use every React hook just to say you used it
- Optimize before you have a performance problem
- Build authentication before understanding basic CRUD
- Build the backend before understanding the frontend
- Create huge components
- Put all state into Context
- Put everything into `useEffect`
- Ignore accessibility
- Ignore loading/error/empty states
- Build for 10 users before understanding the requirements

---

# 35. Final Architecture

When everything is complete:

```text
                         TaskFlow
                            │
             ┌──────────────┴──────────────┐
             │                             │
          Frontend                       Backend
             │                             │
           React                         Node.js
             │                             │
      React Router                      REST API
             │                             │
        Components                    Validation
             │                             │
           Hooks                       Auth
             │                             │
       State management                  │
             │                             │
             └──────── HTTP ───────────────┘
                                           │
                                      PostgreSQL
```

---

# 36. Learning Outcome

If you complete this project yourself, you should be able to explain:

### React

- What a component is
- What props are
- What state is
- Why React re-renders
- How state updates work
- Why functional state updates exist
- What `useEffect` is actually for
- When to use `useRef`
- When Context is useful
- When `useReducer` is useful
- When `useMemo` is useful
- When `useCallback` is useful
- How custom hooks work

### Application architecture

- Where state should live
- How components communicate
- How to avoid unnecessary prop drilling
- How to structure a React application
- How frontend talks to a backend
- How CRUD APIs work
- How authentication works

### Engineering

- Git workflow
- Testing
- Accessibility
- Responsive UI
- Error handling
- Production builds
- Basic performance optimization

---

# 37. The Most Important Rule

Do not measure your progress by:

> "How many features did I finish?"

Measure it by:

> "Can I explain why this code exists?"

For example, don't just know:

```text
useEffect
```

Be able to explain:

> Why is this effect needed here? What would happen without it? What causes it to run? What is its cleanup doing?

Don't just know:

```text
useMemo
```

Be able to explain:

> What problem does memoization solve here? Is this computation expensive enough to justify it?

That is the difference between **writing React code** and **understanding React**.

---

# 38. Project Completion Checklist

## Frontend

- [ ] Vite + React + TypeScript setup
- [ ] Layout
- [ ] Sidebar
- [ ] Dashboard
- [ ] Task list
- [ ] Task card
- [ ] Create task
- [ ] Edit task
- [ ] Delete task
- [ ] Complete task
- [ ] Search
- [ ] Filtering
- [ ] Sorting
- [ ] Task details
- [ ] React Router
- [ ] localStorage
- [ ] `useState`
- [ ] `useEffect`
- [ ] `useRef`
- [ ] `useContext`
- [ ] `useReducer`
- [ ] `useMemo`
- [ ] `useCallback`
- [ ] Custom hooks
- [ ] Theme
- [ ] Responsive UI
- [ ] Accessibility
- [ ] Tests

## Backend

- [ ] Node.js server
- [ ] REST API
- [ ] CRUD
- [ ] PostgreSQL
- [ ] Database schema
- [ ] API validation
- [ ] Error handling
- [ ] Authentication
- [ ] Authorization
- [ ] React API integration

## Engineering

- [ ] Git branches
- [ ] Small commits
- [ ] Code review
- [ ] Unit tests
- [ ] E2E tests
- [ ] Production build
- [ ] Deployment

---

# 39. Final Target

The finished project should be more than a tutorial project.

It should demonstrate that you can take a requirement such as:

> "Users should be able to create, organize, search, filter, edit, and complete tasks."

and independently turn it into:

```text
Requirements
     ↓
UI design
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

That is the actual skill this project is intended to develop.

📝 Express TO-DO List App — Overview

A simple yet functional Express.js-based TO-DO app using EJS templating.
Users can add, edit, delete tasks, and assign priority levels (low, medium, high).
The app supports PUT and DELETE HTTP methods using method-override and is deployed on Render.

Live App: https://express-deployment-2.onrender.com

📦 Tech Stack:
• Backend: Node.js, Express.js
• Frontend: EJS, HTML/CSS
• Middleware: body-parser, method-override

✅ Features
-> ➕ Add new tasks  
-> ✏️ Edit existing tasks  
-> ❌ Delete tasks  
-> 🚦 Set priority: `Low`, `Medium`, `High`  
-> 🔍 Filter tasks by priority  
-> 🔁 Auto-sort by priority  
-> 🖼 Templating with EJS  
-> 🎨 Static assets from `/public`

Folder Structure:
express-deployment/
├── assets/       → Flowchart
├── public/       → CSS / JS
├── views/        → EJS templates
├── index.js      → Main app
├── package.json  → Dependencies
└── README.md     → Docs

Task Format:

. Tasks are stored in an in-memory array task[]. 

{
  task: "Task title",
  priority: "low" | "medium" | "high",
  date: Date
}

📦 Dependencies:

"dependencies": {
  "body-parser": "^1.20.x",
  "ejs": "^3.1.x",
  "express": "^4.18.x",
  "method-override": "^3.0.x"
}

## 🌐 Routes Overview

| Method | Route        | Description             |
|--------|--------------|-------------------------|
| GET    | `/`          | Home - View tasks       |
| POST   | `/add`       | Add a new task          |
| PUT    | `/edit`      | Edit an existing task   |
| DELETE | `/delete`    | Delete a task           |
| GET    | `/about`     | About page              |
| GET    | `/contact`   | Contact page            |

## ▶️ Run Locally

```bash
. git clone https://github.com/your-username/express-deployment.git
. cd express-deployment
. npm install
. node index.js

Visit http://localhost:7000





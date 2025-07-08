Express TO-DO List Website:
A simple Express.js based To-DO app
. EJS views
. functionality (add,edit,delete)
. PUT/DELETE support via method override
. Deployed with Render

Live app → https://express-deployment-2.onrender.com

Folder Structure:
express-deployment/
├── public/         # Static assets (CSS, JS)
├── views/          # EJS templates: list.ejs, about.ejs, contact.ejs
├── index.js        # Main Express app
├── package.json    # Project metadata
└── README.md       # Project instructions

Features:
. Add, edit, delete tasks
. Priority level: low,medium,high
. Templating with EJS
. Static assets served via public/

Task Stack:
1. Backend: Node.js , Express.js
2. Frontend: EJS templating, HTML/CSS (in public folder)
3. Middleware: body-parser, method-override

Task Roadmap Explained:
. Task are stored in a simple in-memory task[] array
. Each task include:
    . task: the task content
    . priority: low|medium|high
    . date: timestamp when the task was added

Flowchart:
---
config:
  theme: base
  layout: dagre
---
flowchart TD
 subgraph Middleware["Middleware"]
        P["bodyParser / express.urlencoded"]
        Q["method-override"]
        R["public static files"]
  end
    A["Client Request"] --> B["Express Server"]
    B --> C{"Route"} & P & Q & R
    C --> D[/"GET /"/] & E[/"POST /add"/] & F[/"PUT /edit"/] & G[/"DELETE /delete"/] & H[/"GET /about"/] & I[/"GET /contact"/]
    D --> J["Render list.ejs with task or filtered task"]
    E --> K["Push task to array and redirect /"]
    F --> L["Update task, sort by priority, redirect /"]
    G --> M["Filter and remove task, redirect /"]
    H --> N["Render about.ejs"]
    I --> O["Render contact.ejs"]




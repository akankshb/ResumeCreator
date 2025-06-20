# ResumeCreator

├── backend/
│   ├── app/
│   │   ├── api/              # API routes
│   │   │   ├── v1/
│   │   │   │   ├── endpoints/
│   │   │   │   │   └── users.py
│   │   │   │   └── __init__.py
│   │   │   └── __init__.py
│   │   ├── core/             # Settings, configs
│   │   │   └── config.py
│   │   ├── models/           # SQLAlchemy models
│   │   ├── schemas/          # Pydantic models
│   │   ├── services/         # Business logic
│   │   ├── db/               # Database session and init
│   │   ├── main.py           # Entry point (FastAPI instance)
│   │   └── __init__.py
│   ├── tests/                # Backend tests
│   ├── requirements.txt
│   └── alembic/              # DB migrations if using Alembic
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/         # API calls
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js        # or webpack.config.js
│   └── index.html
│
├── .gitignore
├── README.md
└── docker-compose.yml        # Optional if containerized


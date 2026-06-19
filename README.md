# Zerodha Clone

An educational **MERN-stack** clone of [Zerodha](https://zerodha.com) — India's largest stock broker. The repo is split into three independent apps: a Node/Express + MongoDB **backend API**, a React **marketing/landing site** (the public zerodha.com pages), and a React + Material UI **trading dashboard** (a Kite-style portfolio UI) that is currently scaffolded but not yet built out.

> **Disclaimer:** This is an unofficial, non-commercial project built for learning full-stack web development. It is **not affiliated with, endorsed by, or connected to Zerodha Broking Ltd.** in any way. It has no real trading, payment, or brokerage functionality — all data is dummy/seeded. Do not use it to make actual financial decisions.

## Table of Contents

- [Repository Structure](#repository-structure)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Reference](#api-reference)
- [Known Issues](#known-issues)
- [Suggested Roadmap](#suggested-roadmap)
- [License](#license)

## Repository Structure

This is **not** a workspace/monorepo (no Lerna, Turborepo, or npm workspaces) — it's three sibling apps, each with its own `package.json` and dependency tree.

```
zerodha-/
├── backend/                 # Express REST API + MongoDB (Mongoose)
│   ├── index.js              # App entry point, routes
│   ├── model/                 # Mongoose models
│   │   ├── HoldingsModel.js
│   │   ├── OrdersModel.js
│   │   └── PositionsModel.js
│   ├── schemas/                # Mongoose schemas
│   │   ├── HoldingsSchema.js
│   │   ├── OrdersSchema.js
│   │   └── PositionsSchema.js
│   └── package.json
│
├── frontend/                # React marketing site (public zerodha.com clone)
│   ├── public/
│   │   ├── index.html         # Loads Bootstrap 5 + Font Awesome via CDN
│   │   └── images/             # Zerodha brand assets used for the clone
│   ├── src/
│   │   ├── index.js            # Router setup
│   │   └── landing_page/
│   │       ├── Navbar.js, Footer.js, NotFound.js, OpenAccount.js
│   │       ├── home/             # "/" — Hero, Awards, Stats, Pricing, Education
│   │       ├── about/             # "/about" — Hero, Team
│   │       ├── product/            # "/product" — Hero, LeftSection, RightSection, Universe
│   │       ├── pricing/             # "/pricing" — Hero, Brokerage
│   │       ├── signup/               # "/signup"
│   │       └── support/               # "/support" — CreateTicket
│   └── package.json
│
└── dashboard/                # React + MUI trading dashboard (Kite-style UI)
    └── package.json          # Dependencies only — no src/ committed yet
```

## Tech Stack

| App | Stack |
|---|---|
| **backend** | Node.js, Express 5, MongoDB via Mongoose 9, CORS, body-parser, dotenv, nodemon (dev) |
| **frontend** | React 19, React Router 7, Create React App (react-scripts 5), Bootstrap 5 + Font Awesome 4 (via CDN, not npm) |
| **dashboard** | React 18, React Router 6, Material UI 5 (`@mui/material`, `@mui/icons-material`), Chart.js 4 + `react-chartjs-2`, Axios |

> Note: `frontend` and `dashboard` are separate Create React App projects with **different React majors** (19 vs 18) — they don't share components or a build pipeline.

## Features

### Backend (implemented)
A small REST API backed by three Mongoose collections — `holding`, `position`, and `order`:
- Fetch all holdings and all positions
- Create a new order

### Frontend — marketing site (implemented)
A static, content-driven clone of the public Zerodha website, routed with React Router:

| Route | Page |
|---|---|
| `/` | Home — hero, "largest broker" awards section, trust stats, pricing teaser, free education (Varsity) callout |
| `/about` | About — company hero + founder/team section |
| `/product` | Product — Kite, Console, Coin, Kite Connect API, Varsity overview |
| `/pricing` | Pricing — hero, brokerage breakdown |
| `/signup` | Signup / open-account CTA |
| `/support` | Support — ticket-creation categories |
| `*` | 404 / Not Found |

This app is purely presentational — it does not currently call the backend API (see [Known Issues](#known-issues)).

### Dashboard — trading UI (planned, not yet built)
Based on its dependencies (MUI + Chart.js + Axios), this app is intended to be a Kite-style dashboard that fetches holdings/positions/orders from the backend and renders them with tables and charts. **No source code has been committed for this app yet** — only `package.json`.

## Getting Started

### Prerequisites
- Node.js (LTS recommended) and npm
- A MongoDB instance — local (`mongod`) or a cloud cluster (e.g. MongoDB Atlas)

### 1. Clone the repo
```bash
git clone https://github.com/ralon-1/zerodha-.git
cd zerodha-
```

### 2. Backend
```bash
cd backend
npm install
```
Create a `.env` file in `backend/` (see [Environment Variables](#environment-variables)), then:
```bash
npm start          # runs `nodemon index.js`, API on http://localhost:3002
```

### 3. Frontend (marketing site)
```bash
cd frontend
npm install
npm start           # http://localhost:3000
```
⚠️ As committed, this will fail to compile — see [Known Issues](#known-issues) #1 and #2 for the two fixes needed first.

### 4. Dashboard
```bash
cd dashboard
npm install
npm start
```
⚠️ This app has no `src/` yet, so there is nothing for `react-scripts` to run until the source files (e.g. `src/index.js`, `src/App.js`, `public/index.html`) are added.

## Environment Variables

Set these in `backend/.env` (no `.env.example` is currently committed):

| Variable | Required | Default | Description |
|---|---|---|---|
| `MONGO_URL` | Yes | — | MongoDB connection string |
| `PORT` | No | `3002` | Read from env, but the server currently hardcodes `app.listen(3002, ...)` — see Known Issues |

## API Reference

Base URL: `http://localhost:3002`

| Method | Endpoint | Description | Body |
|---|---|---|---|
| `GET` | `/allholdings` | Returns all documents in the `holding` collection | – |
| `GET` | `/allpositions` | Returns all documents in the `position` collection | – |
| `POST` | `/newOrder` | Creates a new order document | `{ "name": string, "qty": number, "price": number, "mode": string }` |

**Holding** fields: `name`, `qty`, `avg`, `price`, `net`, `day`
**Position** fields: `product`, `name`, `qty`, `avg`, `price`, `net`, `day`, `isLoss`
**Order** fields: `name`, `qty`, `price`, `mode`



## License

No license file is currently included in this repository. Until one is added, all rights are reserved by the repository owner.

## Acknowledgments

UI text, layout, and brand assets are modeled on the public [zerodha.com](https://zerodha.com) website, used here strictly for educational, non-commercial purposes.

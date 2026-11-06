# GameZone — React + Vite

This version migrates the supplied Gaming Tournament Portal into a React single-page app while reusing the original CSS theme and image assets.

## Run locally

```bash
npm install
npm run dev
```

Open the localhost URL printed by Vite (normally http://localhost:5173/).

## Demo accounts

- Admin: `admin@gamezone.com` / `admin123`
- Organizer: `organizer@gamezone.com` / `organizer123`

Players can create an account from Sign Up. Select Player or Organizer.

## Implemented modules

- Home page with the original GameZone dark esports theme and game artwork.
- Login and signup with role selection and Local Storage persistence.
- Player dashboard, tournament discovery, registration, My Tournaments and profile.
- Organizer dashboard, tournament create/edit/delete and registration list.
- Admin dashboard, tournament management and user ban/unban controls.
- Search and tournament capacity checks.

## Storage

Uses `gz_users`, `gz_session`, `gz_tournaments`, and `gz_registrations` in browser Local Storage. This is suitable for a classroom demonstration only. It is not secure production authentication: passwords and role data are stored client-side. A real deployment should use a backend, hashed passwords, server-side authorization and a database.

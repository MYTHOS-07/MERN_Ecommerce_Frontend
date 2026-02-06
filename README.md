# Next.js Notes

## Overview
- Next.js is a **React Framework**
- Used for building **Web Applications**
- Full-stack framework
- Opinionated framework

---

## Features

### UI Building
- Component-based UI using React

### Rendering
- Server Side Rendering (SSR)
- Client Side Rendering (CSR)
- Static Site Generation (SSG)

### Optimization
- Automatic performance optimization
- Code splitting
- Image optimization
- Font optimization

### Routing
- File-based routing
- App Router (`/app` directory)

### API Routes
- Backend APIs can be created inside Next.js

### Data Fetching
- Server-side data fetching
- Client-side data fetching

### Styling
- Global CSS
- CSS Modules
- Tailwind CSS
- Styled Components

---

## Component Types

### Server Components (Default)
- Runs on the server
- Used for:
  - Data fetching
  - Reading files
  - Database queries
  - Async tasks
- Cannot use:
  - React hooks
  - Browser APIs

### Client Components
- Same as React components
- Used for:
  - React hooks
  - Events
  - User interactions
- Must include `"use client"`

---

## Next.js Routing

### Routing Rules
- All routes must be inside the `/app` directory
- Every route must have `page.js` or `page.tsx`
- `page.js / page.tsx` must export a **default component**

---

### Simple Route
Steps:
1. Create a folder inside `/app`
2. Create a `page.js` file inside the folder
3. Export a default React component

---

### Nested Routes
Examples:
- `/courses/frontend/react`
- `/courses/frontend/vue`
- `/courses/backend/laravel`
- `/courses/backend/node-express`

---

### Dynamic Routes
- Folder name wrapped with `[]`

Example:
- Folder: `/products/[id]`
- Route: `/products/:id`

---

### Nested Dynamic Routes
Route:
- `/products/:id/reviews/:reviewId`

Folder structure:
- `/products/[id]/reviews/[reviewId]`

---

### Catch-All Segments
Example routes:
- `/news/general/political/congress`
- `/news/general/education/universities/tu/ioe/bct`
- `/news/general/education/board/see`
- `/news/weather`
- `/news/sports/football/men`
- `/news/sports/tennis/women`
- `/news/sports/cricket/t20/men`

Folder structure:
- `/news/[...slug]`

---

### Route Groups
- Used to organize routes without affecting the URL

Example:
- Routes: `/login`, `/register`
- Folder name: `(auth)`

---

### Private Folders
- Prefix folder with `_`
- Not accessible as a route

Example:
- `/_components`

---

### Not Found Page
- File location:
  - `app/not-found.js`

---

## Special Next.js Files
> File names must be exactly the same

- `page.js` → Routing
- `layout.js / layout.tsx` → Layout
- `not-found.js` → 404 Page
- `loading.js` → Loading UI
- `error.js` → Error Handling

---

### Nested Layouts
- Place `layout.js` inside a route folder
- Layout applies only to that route and its child routes

---

## Params and Search Params

### params
- Used for dynamic routes
- Available in:
  - `page.js`
  - `layout.js`
- Example:
  - `/products/[id]`

### searchParams
- Used for query parameters
- Example:
  - `?q=test`
- Available only in `page.js`

---

## Metadata
- Used to define page metadata
- Helps with SEO
- Can be used in:
  - `page.js`
  - `layout.js`

### Metadata Types
- Static metadata
- Dynamic metadata using `generateMetadata`

---

## Authentication Flow
1. User logs in
2. API returns a token
3. Token stored in browser
4. If token exists → user is logged in
5. Token used in API requests
6. If no token → user is not logged in

---

## Storage Types

### Local Storage
- Size: 5MB
- Available only in browser
- Data stored permanently

### Session Storage
- Size: 5MB
- Available only in browser
- Data cleared when tab is closed

### Cookie Storage
- Size: 4KB
- Available on browser and server
- Data stored with expiry date

---

## HTTP Requests
- Hypertext transfer protocol
- **GET** → Fetch data (Read)
- **POST** → Create data
- **PUT** → Update data
- **DELETE** → Delete data
- **PATCH** → Partial update

---

## Global State Management (Redux)

### Core Concepts

#### Store
- Stores application state
- Single source of truth
- Only one store

#### Action
- Triggered by:
  - User interaction
  - Events
  - API calls
- Used to update state

#### Reducer
- Connects store and actions
- Updates state
- Controls UI changes

### Thunk
- Used for async redux actions
- Commonly used for API calls

---

## Additional Topics
- File hierarchy
- Rendering strategies
- Dashboard
- Other pages (Home, Contact, About)
- Deployment
- Merchant

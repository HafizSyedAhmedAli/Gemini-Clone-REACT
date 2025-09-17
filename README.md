# Gemini Clone 

A responsive replication of a Google Gemini–style conversational interface built with **React + Vite** and plain CSS. This project demonstrates a modern conversational layout with a sidebar for recent prompts, an animated streaming/typing response renderer, suggestion cards, and a mobile-first responsive design.

🔗 **Live Demo:** *(Add your deployed URL here, e.g. Netlify / Vercel)*

## Features

* **Responsive Design:** Mobile-first layout that adapts to small and large screens.
* **Sidebar / Navigation:** Toggleable sidebar with recent prompts, new chat action and utility links.
* **Animated Responses:** Word-by-word streaming typewriter effect to display AI responses.
* **Recent Prompts & History:** Saves previously sent prompts and allows quick reloading.
* **Suggestion Cards:** Example prompts to help users get started.
* **Search / Input Box:** Text input, send actions and simple UI feedback.
* **Loading Skeleton:** Animated loader while awaiting AI response.
* **Gemini Integration:** `@google/genai` wrapper shown in `src/config/gemini.js` for demo purposes.

## Tech Stack

* React (JSX)
* Vite
* JavaScript 
* Context API for state management
* `@google/genai` (Gemini) — demo integration

## Getting Started

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Add your Gemini API key:**

   * Create a `.env` file and add your Gemini API key as an env variable. Example for Vite:

     ```env
     VITE_GEMINI_API_KEY=your_api_key_here
     ```

3. **Start the development server:**

   ```sh
   npm run dev
   ```

4. **Build for production:**

   ```sh
   npm run build
   ```

## Project Structure

* `index.html` — main HTML entry
* `src/main.jsx` — React entry point
* `src/App.jsx` — top-level layout (Sidebar + Main)
* `src/context/Context.jsx` — ContextProvider that manages prompts, loading, and API calls
* `src/config/gemini.js` — wrapper for `@google/genai` usage 
* `src/components/Sidebar/Sidebar.jsx` — sidebar UI and recent prompts
* `src/components/Main/Main.jsx` — main UI, greeting, cards, and results area
* `src/assets/*` — icons and images used across the UI
* `index.css` / `src/components/*/*.css` — styling and responsive rules
* `package.json` — project metadata and scripts
* `vite.config.js` — Vite configuration

## License

This project is licensed under the **ISC License**.

---

**Author:** Ahmed — for the Gemini clone project

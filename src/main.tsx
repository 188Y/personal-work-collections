import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"

// Reset to top on a full page load, ignoring any stale anchor hash
if (window.location.hash) {
  history.replaceState(null, "", window.location.pathname + window.location.search)
}
window.scrollTo({ top: 0, behavior: "instant" })

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)

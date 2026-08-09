import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import "./styles.css"
import "./chrome-overrides.css"
import "./fab.css"
import "./docs-launch.css"

createRoot(document.getElementById("root")!).render(<StrictMode><App /></StrictMode>)

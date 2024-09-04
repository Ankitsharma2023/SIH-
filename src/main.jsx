
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
// import store from "./Redux/Store.js"
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
    
<BrowserRouter>
    <App />
    </BrowserRouter>
 
)

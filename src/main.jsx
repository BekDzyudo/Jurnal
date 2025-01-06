import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { JurnalProvider } from './context/Context.jsx'

createRoot(document.getElementById('root')).render(
    <JurnalProvider>
        <App />
    </JurnalProvider>
)

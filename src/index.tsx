import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <StrictMode>
        <App message='Hello World! with typescript' />
    </StrictMode>
)
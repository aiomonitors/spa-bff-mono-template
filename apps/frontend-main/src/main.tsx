import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import './index.css'

// eslint-disable-next-line import/no-named-as-default-member, @typescript-eslint/no-non-null-assertion -- Correct usage
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

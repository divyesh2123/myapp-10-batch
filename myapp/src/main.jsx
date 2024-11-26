import React from 'react'
import ReactDOM from 'react-dom/client'


import { ErrorBoundary } from 'react-error-boundary'
import fallbackRender from './fallbackRender.jsx'
import FallbackRender from './fallbackRender.jsx'
import MyInput from './MyInput.jsx'
import DisplayDataM from './DisplayDataM.jsx'
import ParentNew from '../ParentNew.jsx'

const MarkdownPreview = React.lazy(() => import('./CounterWithClass.jsx'));
const Login = React.lazy(() => import('./Login.jsx'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParentNew/> 
  </React.StrictMode>,
)

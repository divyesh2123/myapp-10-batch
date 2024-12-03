import React from 'react'
import ReactDOM from 'react-dom/client'


import { ErrorBoundary } from 'react-error-boundary'
import fallbackRender from './fallbackRender.jsx'
import FallbackRender from './fallbackRender.jsx'
import MyInput from './MyInput.jsx'
import DisplayDataM from './DisplayDataM.jsx'
import ParentNew from '../ParentNew.jsx'
import MyForm from './MyForm.jsx'
import MyParent from './MyParent.jsx'

const MarkdownPreview = React.lazy(() => import('./CounterWithClass.jsx'));
const Login = React.lazy(() => import('./Login.jsx'));

import App from './App.jsx';
import MyDataD from './MyDataD.jsx'
import Co from './Co.jsx'
import NormalForm from './NormalForm.jsx'
import TestNew from './TestNew.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TestNew/> 
  </React.StrictMode>,
)

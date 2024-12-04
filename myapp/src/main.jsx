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

import App from './App.jsx';
import MyDataD from './MyDataD.jsx'
import Co from './Co.jsx'
import NormalForm from './NormalForm.jsx'
import TestNew from './TestNew.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../Login.jsx'
import Account from './Account.jsx'
// import './axiosbase/global.js';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path='/'  element={<Login></Login>}/>
        <Route path='/account' element={<Account></Account>}/>
   
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

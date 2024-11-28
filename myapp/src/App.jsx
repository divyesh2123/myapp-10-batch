import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LanguageContext from './mydata/LanguageContext';
import MyHeader from './MyHeader';
import MyLangForm from './MyLangForm';

export default function App() 
{
  const [lan, setlan] = useState('en');

  return (
    <LanguageContext.Provider value={{lan:lan,setlan:setlan}}>
      
      
      <MyHeader/>
      
      <MyLangForm/>
    </LanguageContext.Provider>
  )
}



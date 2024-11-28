import React, { useContext } from 'react'
import LanguageContext from './mydata/LanguageContext';

export default function MyHeader() {

    const d = useContext(LanguageContext);

    const handleChange = (e)=>{
    
        d.setlan(e.target.value);

    }
  return (
    <div>
            <select onChange={handleChange}>

                <option value="en">English</option>
                <option value="hi">Hindi</option>
               

            </select>

    </div>
  )
}

import React, { useContext } from 'react'
import LanguageContext from './mydata/LanguageContext'

export default function MyLangForm() {

   const d=  useContext(LanguageContext);

   console.log(d);

   const objlan = {
    "hi": {

      firstName : "prathm name",
      lastName : "antim name"

    },
    "en": {

      firstName : "firstName",
      lastName : "lastName"
    }
   }
  return (
    <div>
        <form>

          <label>
            {
              objlan[d.lan].firstName
            }
          </label>

            <input type='text' />

        </form>


    </div>
  )
}

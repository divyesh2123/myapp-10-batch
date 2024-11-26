import React from 'react'

 function MyChild(props) {

    console.log(props);

    console.log("child has been changed");
  return (
    <div>MyChild</div>
  )
}

export default React.memo(MyChild,(pre,next)=>{
    return false
});

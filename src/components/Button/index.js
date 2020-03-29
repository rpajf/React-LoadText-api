import React, {useState, useEffect } from 'react';

import { MyButton } from './styles';

export default function Button({...props}) {



  const [didClickButton, setDidClickButton] = useState(false)

  useEffect(() => {
    // if (didClickButton) {
      document.addEventListener("click", mouseClickHandler)
    //   return () => {
    //     document.removeEventListener("click", mouseClickHandler)
    //   }
    // } else {
    //   document.removeEventListener("click", mouseClickHandler)
    // }
  }, [didClickButton])

  const buttonClickHandler = () => {
    setDidClickButton(true)
    console.log('asd');
  }

  const mouseClickHandler = (event) => {
    console.log(event.target)
    setDidClickButton(false) // If you want to reset the behavior again
    console.log('asd');
  }

  return <MyButton {...props}type="button" onClick={buttonClickHandler} ></MyButton>;
}

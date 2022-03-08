
import { Component, useEffect } from "react";

type HamProps = {
  csState: string;
    
};

const HamMenu = (stateX: HamProps) => {

  const hideMenuOver = (e: React.MouseEvent ) => {
    e.preventDefault();
    
    // console.log('sad');
    document.body.classList.remove('is-menu-visible');

    // useEffect(() => {

    // }, []);
  };

  return (
    <div id="nav-icon" className={stateX.csState}  onClick={(e) => hideMenuOver(e)}><span></span><span></span><span></span></div>
  )

}




export default HamMenu
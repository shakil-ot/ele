import React,{useRef, useLayoutEffect} from "react";
import Header from "../layout/Header";
import  Footer  from "../layout/Footer";


const Layout = props =>{

  const componentRef = useRef()
    useLayoutEffect(()=> {
        console.log(componentRef.current.clientHeight)
        const fheight = componentRef.current.clientHeight;
        const maincontent = document.querySelector('.main_content');
        maincontent.style.marginBottom = `${fheight}px`;
    })
  return(
    <>
  <Header/>
  <div className="zindex-11 main_content" >
  {props.children}
  </div>
  <Footer componentRef ={componentRef}/>
  </>
  )
  
}

export default Layout;
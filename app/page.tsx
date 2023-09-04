import Link from "next/link";
import { useState } from "react";


export default function AppComponent(){
  
  return <>
  <div className="nav">
    <Link href="/use-ref">useRef</Link>
    <Link href="/suspended-component">Supended Component</Link>
  </div>
  landing page
  
  </>


}
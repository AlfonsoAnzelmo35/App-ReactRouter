import { Outlet } from "react-router";
import { Footer } from "../Footer";
import { HeaderHost } from "./HeaderHost";

/**
 * Shared UI tra le pagine con route :
 *  /host/vans/vansDetail/:id/HostDetail 
 *  /host/vans/vansDetail/:id/pricing 
 *  /host/vans/vansDetail/:id/details 
 *  /host/vans/vansDetail/:id/photos 
 * 
 *  */


function LayoutHeaderOptionsVans(){
    return( 
    <>
        <HeaderHost/>
        <Outlet/> 
      
    </>       
    );    
}

export {LayoutHeaderOptionsVans} ;
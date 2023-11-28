import { Outlet } from "react-router";
import { Footer } from "./Footer";
import { Header } from "./Header";


/**
 * Shared UI tra le pagine con route :
 * TUTTE LE ROUTE
 *  */

function LayoutHeader(){
    return( 
    <>
        <Header/>
        <Outlet/> 
        <Footer/>
    </>       
    );    
}

export {LayoutHeader} ;
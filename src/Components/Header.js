import { Link, NavLink } from "react-router-dom";
import "./../css/Header.css" ;


function Header() {
    //i link fanno riferimento ai Route definiti in App.js

    const style = {
        fontWeight: "bold",
        color:"red",
        textDecoration:"underline"    
    };

    /**perchè Header è stato renderizzato all'interno di / root path
     * quindi possiamo anche evitare di usare /
     */
    return (
        <div className="header">
            <h1>#VANLIFE</h1>

            <div className="links">
                <NavLink to='host' style={(obj)=>obj.isActive ? style : null}>
                    host
                </NavLink>
                <NavLink to="." style={(obj)=> obj.isActive ? style : null}>
                    home
                 </NavLink>
                <NavLink to='about' style={(obj)=>obj.isActive ? style : null}>
                    about
                </NavLink>
                <NavLink to='vans' style={(obj)=>obj.isActive ? style : null}>
                    vans
                </NavLink>
            </div>
        </div>
    );

}

export { Header };
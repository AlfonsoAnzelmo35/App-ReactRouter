import { Link, NavLink} from "react-router-dom" ;
import "../../css/Header.css";


function HeaderHost(){
        //i link fanno riferimento ai Route definiti in App.js
        const style = {
            fontWeight: "bold",
            color:"red",
            textDecoration:"underline"    
        };

        /**perchè HeaderOptionVans è stato renderizzato all'interno di 
         * /host
         * quindi possiamo anche evitare di usare /host davanti a /pagina
         * quella col punto indica proprio la root /host */

        return( 
        <div className="header">
           <div className="links">
          
                <NavLink to="."  style={(obj)=> obj.isActive ? style : null} end>
                    DashBoard
                </NavLink>     
                <NavLink to='income' style={(obj)=> obj.isActive ? style : null}>
                    Income
                    </NavLink>
                <NavLink to='vans' style={(obj)=> obj.isActive ? style : null}>
                    Vans
                    </NavLink>
                <NavLink to='reviews' style={(obj)=> obj.isActive ? style : null}>
                    Rewies
                    </NavLink>
            </div>
        </div>       
    );    

}

export {HeaderHost} ;
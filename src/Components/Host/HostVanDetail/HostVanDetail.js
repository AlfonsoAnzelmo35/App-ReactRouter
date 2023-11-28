import {useParams, Link, Outlet, useLocation} from "react-router-dom"
import "../../../css/Header.css";
import "../../../css/HostVanDetail.css";

import { NavLink } from "react-router-dom";

export default function HostVanDetail() {

    let localStorage = window.localStorage;
    let location = useLocation()
    const urlParams = useParams();
    var vans = localStorage.getItem("vans");

    vans = JSON.parse(vans).slice(0, 3)

    let css;
    if (vans[urlParams.id - 1].categoria == "luxury") {
        css = { backgroundColor: "yellow" }
    } else if (vans[urlParams.id - 1].categoria == "rugged") {
        css = { backgroundColor: "green" }
    } else {
        css = { backgroundColor: "blue" }
    }

    const style = {
        fontWeight: "bold",
        color: "red",
        textDecoration: "underline"
    };

    const s = location.state ? `?categoria=${location.state}` : ""

    return (

        <div className='contenitore-hostVanDetail'>
            <Link to={`../..${s}`}
                relative="path"
                className="backTo"
            >  Torna alla lista vans</Link>
            <div className="hostVanDetail">
                <img src={"http://localhost:8080/VanApp/" + vans[urlParams.id - 1].percorsoImmagine} />

                <div className='info'>
                    <p style={css} id="categoria">{vans[urlParams.id - 1].categoria}</p>
                    <p id="modello">{vans[urlParams.id - 1].modello}</p>
                    <p id="prezzo">{vans[urlParams.id - 1].prezzo}€<span>/day</span></p>

                </div>
            </div>

            <div className="header">
                <div className="links">
                    <NavLink to='.' end style={(obj) => obj.isActive ? style : null}>Details</NavLink>
                    <NavLink to='pricing' style={(obj) => obj.isActive ? style : null}>Pricing</NavLink>
                    <NavLink to='photos' style={(obj) => obj.isActive ? style : null}>Photos</NavLink>
                </div>

                <Outlet context={{van : vans[urlParams.id -1]}}/>
            </div>

        </div>
    );
}
import {json, Link, useLocation, useParams} from "react-router-dom"
import { Van } from "./Van";

function VanDetail(){
    let localStorage = window.localStorage;
    const urlParams = useParams() ;
    const location = useLocation() ;
    var vans = localStorage.getItem("vans");
   
    vans = JSON.parse(vans)
   
    let css ;
    if(vans[urlParams.id].categoria == "luxury"){
       css = {backgroundColor:"yellow"}
    }else if(vans[urlParams.id].categoria == "rugged"){
        css =  {backgroundColor:"green"}
    }else{
        css = {backgroundColor:"blue"}
    }

    const s = location.state ? `?categoria=${location.state}` : ""
    return (
        <div>
            <Link
                to={`../..${s}`}
                relative='path'>
                {s.length > 0
                    ? `torna a ${s.substring(11)} Vans`
                    : "torna a lista Vans"}
            </Link>
            <Van
                immagine={"http://localhost:8080/Endpoint_Vans-1.0-SNAPSHOT/" + vans[urlParams.id - 1].percorsoImmagine}
                descrizione={vans[urlParams.id - 1].descrizione}
                id={vans[urlParams.id - 1].id}
                prezzo={vans[urlParams.id - 1].prezzo}
                categoria={vans[urlParams.id - 1].categoria}
            />
        </div>
    );
}

export {VanDetail}
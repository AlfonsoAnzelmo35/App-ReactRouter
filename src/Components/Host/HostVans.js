import { useEffect, useState } from "react"
import { HostVan } from "./HostVan";
import "../../css/hostVans.css";

export default function HostVans() {
    /**
     * facciamo finta che l'utente sia loggato e che abbia 3 Vans collegati
     * per simulare questo, prendendo dal localstorage i primi 3 van
     * il localstorage è stato precedemente inizializzato in ListVans, 
     * SOLO A SCOPO DI IMPARARE è NECESSARIO PRIMA CLICCARE SU VANS(quindi invocare ListVans.js) PER RIEMPIRE IL LOCALSTORAGE
     * tutto ciò per evitare di fare nuove richieste.
     */
    const localstorage = window.localStorage;
    const [treStateVans, setTreStateVans] = useState([]);

    let vansOBJ = JSON.parse(localstorage.getItem("vans")) ;
    
    //useEffect(()=>{
    if(treStateVans.length == 0)
        setTreStateVans((prev)=> prev = vansOBJ.slice(0,3))
    //},[])
    let arrVansObj = treStateVans.map((elem, index, array) => { //al primo render e' 0
        return <HostVan
            linkDetail={"/host/vans/" + elem.id}
            datavantuoi={true}
            key={elem.id}
            immagine={"http://localhost:8080/VanApp/" + elem.percorsoImmagine}
            descrizione={elem.descrizione}
            id={elem.id}
            prezzo={elem.prezzo}
        />
    });

    //mostra i van
    if (treStateVans.length > 0){
        return (


            <div className="hostVansContainer">
                <h1>Your listed Vans</h1>
                {
                    arrVansObj
                }

            </div>
        )
    }else{
        return(<h1 id='caricando'> loading ... </h1>)
    }
}
import { useEffect, useState } from "react"
import { HostVan } from "./HostVan";
import "../../css/hostVans.css";
import {Link, useParams, useSearchParams} from "react-router-dom";

export default function HostVans() {

    const localstorage = window.localStorage;
    let [treStateVans, setTreStateVans] = useState([]);
    const [queryParams, setVanParams] = useSearchParams() ;//query params ?categoria=.. & ....
    const queryParamCategoria = queryParams.get('categoria')

    let vansOBJ = JSON.parse(localstorage.getItem("vans")) ;

    //prende dal localStorage i primi 3 van
    if(treStateVans.length == 0)
        setTreStateVans((prev)=> prev = vansOBJ.slice(0,3))

    //se queryParamCategoria != null allora applichiamo il filtro altrimenti ritorniamo l'intera lista
    let displayedTreStateVans = queryParamCategoria
        ? treStateVans.filter( item => {
            return item.categoria == queryParamCategoria
        })
        : treStateVans



    let arrVansObj = displayedTreStateVans.map((elem, index, array) => { //al primo render e' 0
        return(
            <Link
                to= {"/host/vans/vansDetail/" + elem.id}
                state={queryParamCategoria}
            >
                <HostVan
                    linkDetail={"/host/vans/" + elem.id}
                    datavantuoi={true}
                    key={elem.id}
                    immagine={"http://localhost:8080/VanApp/" + elem.percorsoImmagine}
                    descrizione={elem.descrizione}
                    id={elem.id}
                    prezzo={elem.prezzo}
                    categoria = {elem.categoria}
                />
            </Link>
        )
    });

    //mostra i van
    if (treStateVans.length > 0){
        return (


            <div className="hostVansContainer">
                <h1>Your listed Vans</h1>
                <button className="categoria"
                        style={queryParamCategoria == 'rugged' ? {background:'red'} : null}
                        onClick={()=>{setVanParams({categoria:'rugged'})}}> rugged </button>
                <button className="categoria"
                        style={queryParamCategoria == 'luxury' ? {background:'red'} : null}
                        onClick={()=>{setVanParams({categoria:'luxury'})}}> luxury </button>
                <button className="categoria"
                        style={queryParamCategoria == 'simple' ? {background:'red'} : null}
                        onClick={()=>{setVanParams({categoria:'simple'})}}> simple</button>
                {queryParamCategoria
                    ?  <button className="categoria"
                               onClick={()=>{setVanParams({})}}> rimuovi filtri</button>
                    : <></>}
                <div>
                    {arrVansObj}
                </div>
            </div>
        )
    }else{
        return(<h1 id='caricando'> loading ... </h1>)
    }
}
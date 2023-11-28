import { useEffect, useState } from "react";
import { Van } from "./Van";
import "../../css/vans.css"
import { Link, useSearchParams } from "react-router-dom";


function ListVans() {
    let localStorage = window.localStorage ;
    let [vanStateOBJ,setVanStateOBJ] = useState([]);
    let [vanParams, setVanParams] = useSearchParams() ;//queryParams
    const queryParamCategoria = vanParams.get('categoria') ;

    useEffect(() => {
        if(vanStateOBJ.length==0){
            //fetch request
            console.log("RICHIESTA!!") ;
            const responsePromise = fetch("http://localhost:8080/VanApp/listaVans");

            responsePromise.then((dati) => {
            
                const vansPromise = dati.json();
                vansPromise.then((vans) => {
                
                    //salva anche nel localStorage, supporta solo stringhe però
                    localStorage.setItem("vans", JSON.stringify(vans)) ;
                    //salva anche nello stato della componente
                    setVanStateOBJ(()=>vans);
                })
            })
        }else{

            //prendiamo i valori dallo storage e li inseriamo nello state
            let vansOBJ = JSON.parse(localStorage.getItem("vans")) ;
            setVanStateOBJ(()=> vansOBJ);
        }
    }, [])//solo al primo render
 

    
    // filtro sul queryParamCategoria
    vanStateOBJ = queryParamCategoria //se queryParamCategoria ha effettivament un valore
        ? vanStateOBJ.filter((item, index, array)=>item.categoria.toLowerCase() == queryParamCategoria )
        : vanStateOBJ ;

    //inserisci in arrVanObj una lista di Van
    let arrVansObj = vanStateOBJ.map((elem, index, array)=>{ //al primo render e' 0
        return(
            <Link
                to={`vansDetail/${elem.id}`}
                state = {queryParamCategoria}>
                <Van
                    key = {elem.id}
                    immagine={"http://localhost:8080/VanApp/" + elem.percorsoImmagine}
                    descrizione={elem.descrizione}
                    id={elem.id}
                    prezzo={elem.prezzo}
                    categoria={elem.categoria}
                />
            </Link>
        )
    });
    
    //mostra i van
    if(vanStateOBJ.length > 0){
        
        return (
            <div className="contenitoreListVans">
               <h1>Explore our van option</h1>
               <div className="filtri">
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
                       : <></>
                       }
               </div>
                <div className="vans">
                    {arrVansObj}
                </div>     
               
            </div>
        )
    }else{
        return(<h1 id='caricando'> loading ... </h1>)
    }
}
export { ListVans };

/* modo standard per inviare query params
*  <Link to='.?categoria=rugged' className="categoria">rugged</Link>
   <Link to='.?categoria=luxury' className="categoria">luxury</Link>
   <Link to='.?categoria=simple' className="categoria">simple</Link>
   * {queryParamCategoria
                   ? <Link to='.' className="categoria togliFiltri">togli filtri</Link>
                   : <></>
                   }
* */
import { useOutletContext } from "react-router"

export default function HostVanDetailPricing(){
    const {van} = useOutletContext() ;
    return(
        <h1>
            <p id="prezzo">{van.prezzo} € <span>/day</span></p>

            
        </h1>
    )

}
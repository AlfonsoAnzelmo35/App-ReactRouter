import { useOutletContext, useParams } from "react-router";

export default function HostVanDetailDetails(){
    
    const {van} = useOutletContext() ;
    
    
    return(
        <div>
            <p><b>Name:</b>  {van.modello}</p>
            <p><b>Category:</b>  {van.categoria}</p>
            <p><b>Description:</b>  {van.descrizione}</p>

        </div>
    )

}
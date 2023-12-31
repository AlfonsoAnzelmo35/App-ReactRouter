import { Link, useParams } from 'react-router-dom';
import '../../css/hostVan.css';


function HostVan(props){

    let css ;
   
        if(props.categoria == "luxury"){
        css = {backgroundColor:"yellow"}
        }else if(props.categoria == "rugged"){
            css =  {backgroundColor:"green"}
        }else{
            css = {backgroundColor:"blue"}
        }
    
   
   
    return(
        <div className='hostVan' >
            <img src = {props.immagine}/>
            <div className='info'>
                <div >    
                    <p>{props.descrizione}</p>
                    <p>{props.prezzo}€</p>
                </div>
                <div>
                    <p>{props.categoria}</p>
                </div>
            </div>
        </div>
    )

}
export {HostVan}
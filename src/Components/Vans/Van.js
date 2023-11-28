import { Link, useParams } from 'react-router-dom';
import '../../css/van.css';



function Van(props) {

    let css;

    if (props.categoria == "luxury") {
        css = { backgroundColor: "yellow" }
    } else if (props.categoria == "rugged") {
        css = { backgroundColor: "green" }
    } else {
        css = { backgroundColor: "blue" }
    }

    return (
        <div className='van' >

                <img src={props.immagine} />
                <div className='info'>
                    <div >
                        <p>{props.descrizione}</p>
                        <p>{props.prezzo}€</p>
                    </div>
                    <p style={css}>{props.categoria}</p>
                </div>
        </div>
    )

}
export { Van }
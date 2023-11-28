import montagneImmagine from '../../images/montagne.jpeg';
import "../../css/Home.css" ;

function Home(){
    return (
        <div className="contenitore_vanLife">
            <div className="vanLife">
                <div className="intitolata">
                    <h1>You got the travel plans,
                    we've got the travel vans</h1>
                    <h4>Add adventure to your life by joining the #movement.<br/>
                    Rent the perfect van to make your perfect road trip</h4>
                    <button>Find your van</button>
                </div>
                <img src={montagneImmagine}/>
            </div>
        </div>
    ) ;


}

export {Home}
import "../../css/about.css";
import van from "../../images/van.jpg"

function About(){
    return (
        <div className="contenitoreAbout">
             
             <div className="about">
                <div className="immagine">
                    <img src={van} />
                </div>
                <h1>Don't squeeze in a sedan when you could relax in a van</h1>
                <p>si bello molto bello anzi no bellissimo
                si bello molto bello anzi no bellissimo
                si bello molto bello anzi no bellissimo
                si bello molto bello anzi no bellissimo
                si bello molto bello anzi no bellissimo
                si bello molto bello anzi no bellissimo</p>
                <p> bello molto bello anzi no bellissimo
                </p>
                <div className="contenitoreExploreVans">
                    <h1>Your destination is waiting.</h1>
                    <h1>Your van is ready</h1>
                    <button>Esplore our Vans</button>
                </div>
                
             </div>
            
        </div>
    );

}

export {About};
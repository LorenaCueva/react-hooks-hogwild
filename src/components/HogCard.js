import {useState} from "react";
import HogDetails from "./HogDetails";

function HogCard({hog}){
    const [showDetails, setShowDetails] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    function handleCardClick(){
        setShowDetails((showDetails) => !showDetails);
    }

    function handleHideClick(){
        setIsHidden(!isHidden)
    }

    if (isHidden) return null;

    return (
        <div className="ui link card eight wide column" style={{padding: "10px"}}>
            <div className="image" onClick={handleCardClick}>
                <img src={hog.image} alt={hog.name}/>
            </div>
            <div className="content">
                <div className="header">{hog.name}</div>
            </div>
            <div className="extra content">
                {showDetails ? <HogDetails hog={hog}/> : null}
            </div>
            <button className="ui button" onClick={handleHideClick}>Hide Me!</button>
        </div>
    );
}

export default HogCard;

import HogCard from "./HogCard";

function CardList({hogs}){

    const hoglist = hogs.map(hog => <HogCard key={hog.name} hog={hog}/>)

    return (
        <div className= "ui three stackable cards">
            {hoglist}
        </div>
    );
}

export default CardList;
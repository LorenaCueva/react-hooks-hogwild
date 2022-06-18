function HogDetails({hog}){
    return (
        <div className="description">
            <p>{hog.greased? "Greased" : "Not greased"}</p>
            <p><b>Specialty: </b>{hog.specialty}</p>
            <p><b>Weight: </b>{hog.weight}</p>
            <p><b>Highest Medal: </b>{hog["highest medal achieved"]}</p>
        </div>
    );
}

export default HogDetails;
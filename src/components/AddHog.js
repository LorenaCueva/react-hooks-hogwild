
import {useState} from "react";


function AddHog({onAddHog}){

    const [hogData, setHogData] = useState({
        name:"",
        weight:"",
        specialty: "",
        image: "",
        greased: "",
        "highest medal achieved": "",
    })
    function handleFormSubmit(e){
        e.preventDefault();
        setHogData({
            name:"",
            weight:"",
            specialty: "",
            image: "",
            greased: "",
            "highest medal achieved": "",
        });
        onAddHog(hogData);
    }

    function handleFormChange(e){
        const name= e.target.name;
        let value = e.target.value;

        setHogData({...hogData, [name]:value})
    }


    return(
        <div>
            <form onSubmit={handleFormSubmit}>
                <label>Name: </label>
                <input type="text" name="name" onChange={handleFormChange} value={hogData.name}></input>
                <label>Image: </label>
                <input type="text" name="image" onChange={handleFormChange} value={hogData.image}></input>
                <label>Specialty: </label>
                <input type="text" name="specialty" onChange={handleFormChange} value={hogData.specialty}></input>
                <label>Weight: </label>
                <input type="text" name="weight" onChange={handleFormChange} value={hogData.weight}></input>
                <label>Highest Medal Achieved: </label>
                <select className="ui dropdown" name="highest medal achieved" onChange={handleFormChange}>
                    <option >Medal</option>
                    <option value="gold">Gold</option>
                    <option value="silver">Silver</option>
                    <option value="bronze">Bronze</option>
                </select>
                <label>Greased: </label>
                <input type="radio" name="greased" value="true" onChange={handleFormChange}></input>
                <label >Yes</label>
                <input type="radio" name="greased" value="false" onChange={handleFormChange}></input>
                <label >No</label>
                <input type="submit" className="ui button " value="Add Hog"/>
            </form>

        </div>
    );
}

export default AddHog;
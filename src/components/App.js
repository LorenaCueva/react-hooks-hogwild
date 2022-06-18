import React, {useState} from "react";
import Nav from "./Nav";
import CardList from "./CardList";
import Filter from "./Filter";
import AddHog from "./AddHog";

import hogs from "../porkers_data";

function App() {

	const [showGreasedOnly, setGreasedOnly] = useState(false);
	const [sortBy, setSortBy] = useState("");
	const [hogData, setHogData] = useState(hogs);

	function handleOnGreasedOnly(){
		setGreasedOnly((showGreasedOnly) => !showGreasedOnly);
	}

	function handleOnSort(e){
		setSortBy(e.target.value);
	}

	function handleAddHog(newHog){
		setHogData([...hogData, newHog]);
		console.log(newHog);
	}

	let hogsToShow = showGreasedOnly ? hogData.filter(hog => hog.greased === true) : hogData;

	switch(sortBy){
		case "weight": 
			hogsToShow = hogsToShow.sort((a,b) => parseInt(a.weight) - parseInt(b.weight)); 
			break;
		case "name": 
			hogsToShow = hogsToShow.sort((a,b)=> a.name.localeCompare(b.name));
			break;
		default: 
			break;
	}

	return (
		<div className="App">
			<Nav />
			<AddHog onAddHog={handleAddHog}/>
			<Filter onOnlyGreased={handleOnGreasedOnly} showGreasedOnly={showGreasedOnly} onSort={handleOnSort}/>
			<CardList hogs={hogsToShow}/>
		</div>
	);
}

export default App;

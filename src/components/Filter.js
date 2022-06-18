function Filter({onOnlyGreased, showGreasedOnly, onSort}){

    return (
        <div className="filter">
            <button className="ui button greased" onClick={onOnlyGreased}>
                {showGreasedOnly? "Show All" : "Show Greased Only"}</button>
            <select className="ui dropdown" onChange={onSort}>
                <option value="">Sort by:</option>
                <option value="name">Name</option>
                <option value="weight">Weight</option>
            </select>
        </div>
    );
}

export default Filter;
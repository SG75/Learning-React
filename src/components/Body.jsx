import RestaurantCard from "./RestaurantCard"

const Body = () =>{
    return (
        <>
        <div className="filter">
            <button className="filter-btn" onClick={()=>{
                console.log("clicked!!");
                
            }}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
            <RestaurantCard resName="Paakashala" cuisine="south Indian" stars="4.4" eta="38mins"/>           
            <RestaurantCard resName="Asha Food Camp" cuisine="south Indian" stars="4.8" eta="45mins"/>           
            
        </div>
        </>
    )
}

export default Body
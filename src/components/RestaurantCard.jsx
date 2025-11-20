import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    console.log(props);
    
    return(
        <div className="res-card" style={{ backgroundColor: "#f0f0f0"}} >
            <img className="res-logo" alt="res-logo" src={CDN_URL}></img>
            <h3>{props.resName}</h3>
            <h4>{props.cusine}</h4>
            <h4>{props.stars}</h4>
            <h4>{props.eta}</h4>


        </div>

    );
}

export default RestaurantCard
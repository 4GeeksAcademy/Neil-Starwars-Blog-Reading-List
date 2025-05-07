import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";



export const StarshipCard = (props) => {
  const { store, dispatch } = useGlobalReducer()
  
  const handleFav = () => {
    dispatch({type: "toggle_favorites", payload: props.name})
  }

  
  
  
  return (
    <div className="card mx-2" style={{ "minwidth": "18rem" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <button className="btn btn-primary" onClick={()=>handleFav()}>🤩</button>
        <Link to={`/starships/${props.uid}`} className="btn btn-primary">Learn More</Link>
      </div>
    </div>
  );
};
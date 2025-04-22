// import PropTypes from "prop-types";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const CharacterCard = (props) => {
  const { store, dispatch } = useGlobalReducer()

  return (
    <div className="card mx-2" style={{ "minwidth": "18rem" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.Name}</h5>
        <a href="#" className="btn btn-primary">Learn More</a>
      </div>
    </div>
  );
};
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {
  const { store, dispatch } = useGlobalReducer();

  const handleDelete = (name) => {
    dispatch({ type: "toggle_favorites", payload: name });
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Home</span>
        </Link>
        <div className="ml-auto dropdown">
          <button
            className="btn btn-light dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favs
          </button>
          <ul className="dropdown-menu">
            {store.favorites.length > 0 ? (
              store.favorites.map((favorite, index) => (
                <li className="text-primary" key={index}>
                  {favorite}
                  <button
                    className="btn btn-danger"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(favorite);
                    }}
                  >
                    X
                  </button>
                </li>
              ))
            ) : (
              <li>Add a Fav</li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

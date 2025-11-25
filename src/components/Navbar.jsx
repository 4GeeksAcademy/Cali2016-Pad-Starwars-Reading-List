import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export default function Navbar() {
    const { store, dispatch, actions } = useGlobalReducer();

    return (
        <nav className="navbar navbar-dark bg-dark px-3">
            <Link className="navbar-brand" to="/">
                StarWars Blog
            </Link>

            <div className="dropdown">
                <button
                    className="btn btn-warning dropdown-toggle"
                    data-bs-toggle="dropdown"
                >
                    Favorites {store.favorites.length}
                </button>

                <ul className="dropdown-menu dropdown-menu-end">
                    {store.favorites.length === 0 ? (
                        <li className="dropdown-item text-muted">Empty</li>
                    ) : (
                        store.favorites.map(fav => (
                            <li
                                key={fav.uid}
                                className="dropdown-item d-flex justify-content-between align-items-center"
                            >
                                {fav.name}

                                <button
                                    className="btn btn-sm btn-danger"
                                    onClick={() =>
                                        actions.removeFavorite(
                                            { store, dispatch },
                                            fav.uid
                                        )
                                    }
                                >
                                    ❌
                                </button>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </nav>
    );
}

import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export default function Card({ item, type }) {
    const { store, dispatch, actions } = useGlobalReducer();
    const imgUrl = `https://placehold.co/400x600/000000/EEE?text=${encodeURIComponent(
        item.name
    )}`;

    return (
        <div className="card" style={{ minWidth: "18rem" }}>
            <img
                src={imgUrl}
                alt={item.name}
                className="card-img-top"
                style={{ height: "250px", objectFit: "cover" }}
            />

            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>

                <div className="d-flex justify-content-between mt-3">
                    <Link
                        className="btn btn-outline-primary"
                        to={`/${type}/${item.uid}`}
                    >
                        Learn More
                    </Link>

                    <button
                        className="btn btn-outline-warning"
                        onClick={() =>
                            actions.addFavorite(
                                { store, dispatch },
                                { name: item.name, uid: item.uid }
                            )
                        }
                    >
                        ❤️
                    </button>
                </div>
            </div>
        </div>
    );
}

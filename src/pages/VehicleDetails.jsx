import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function VehicleDetails() {
    const { uid } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await fetch(`https://www.swapi.tech/api/vehicles/${uid}`);
                const json = await response.json();
                setData(json.result);
            } catch (error) {
                console.error("Error loading vehicle:", error);
            }
        };

        loadData();
    }, [uid]);

    if (!data) return <h2 className="text-center mt-5">Loading...</h2>;

    const imgUrl = `https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`;

    return (
        <div className="container mt-5">
            <div className="row">

                <div className="col-md-4">
                    <img
                        src={imgUrl}
                        className="img-fluid rounded"
                        alt={data.properties.name}
                        onError={(e) => {
                            e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                        }}
                    />
                </div>

                <div className="col-md-8">
                    <h1 className="mb-3">{data.properties.name}</h1>

                    <p className="lead">
                        {data.description || "No description available."}
                    </p>

                    <ul className="list-group">
                        <li className="list-group-item">
                            <strong>Model:</strong> {data.properties.model}
                        </li>
                        <li className="list-group-item">
                            <strong>Manufacturer:</strong> {data.properties.manufacturer}
                        </li>
                        <li className="list-group-item">
                            <strong>Cost:</strong> {data.properties.cost_in_credits}
                        </li>
                        <li className="list-group-item">
                            <strong>Crew:</strong> {data.properties.crew}
                        </li>
                        <li className="list-group-item">
                            <strong>Passengers:</strong> {data.properties.passengers}
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

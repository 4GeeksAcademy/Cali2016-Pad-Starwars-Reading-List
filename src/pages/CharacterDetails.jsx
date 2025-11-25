import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CharacterDetails() {
    const { uid } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            const response = await fetch(`https://www.swapi.tech/api/people/${uid}`);
            const json = await response.json();
            setData(json.result);
        };
        loadData();
    }, [uid]);

    if (!data) return <h2 className="text-center mt-5">Loading...</h2>;

    const imgUrl = `https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`;

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

                    <p className="lead">{data.description}</p>

                    <ul className="list-group">
                        <li className="list-group-item"><strong>Gender:</strong> {data.properties.gender}</li>
                        <li className="list-group-item"><strong>Height:</strong> {data.properties.height}</li>
                        <li className="list-group-item"><strong>Mass:</strong> {data.properties.mass}</li>
                        <li className="list-group-item"><strong>Hair Color:</strong> {data.properties.hair_color}</li>
                        <li className="list-group-item"><strong>Skin Color:</strong> {data.properties.skin_color}</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

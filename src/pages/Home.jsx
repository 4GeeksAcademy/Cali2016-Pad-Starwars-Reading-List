import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import Card from "../components/Card";

export default function Home() {
    const { store, dispatch, actions } = useGlobalReducer();

    useEffect(() => {
        actions.loadPeople({ dispatch });
        actions.loadPlanets({ dispatch });
        actions.loadVehicles({ dispatch });
    }, []);

    return (
        <div className="container mt-4">

            <h2 className="text-danger fw-bold">Characters</h2>
            <div className="d-flex overflow-auto gap-3 pb-3">
                {store.people.map((item, index) => (
                    <Card key={index} item={item} type="characters" />
                ))}
            </div>

            <h2 className="text-danger fw-bold mt-4">Planets</h2>
            <div className="d-flex overflow-auto gap-3 pb-3">
                {store.planets.map((item, index) => (
                    <Card key={index} item={item} type="planets" />
                ))}
            </div>

            <h2 className="text-danger fw-bold mt-4">Vehicles</h2>
            <div className="d-flex overflow-auto gap-3 pb-3">
                {store.vehicles.map((item, index) => (
                    <Card key={index} item={item} type="vehicles" />
                ))}
            </div>

        </div>
    );
}

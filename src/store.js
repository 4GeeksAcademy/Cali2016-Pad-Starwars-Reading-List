// ================================
//  INITIAL GLOBAL STATE
// ================================
export const initialStore = () => ({
    people: [],
    planets: [],
    vehicles: [],
    favorites: []
});

// ================================
//  ACTIONS
// ================================
export const actions = {
    loadPeople: async ({ dispatch }) => {
        try {
            const res = await fetch("https://www.swapi.tech/api/people");
            const data = await res.json();
            dispatch({ type: "SET_PEOPLE", payload: data.results });
        } catch (err) {
            console.error("Error loading people:", err);
        }
    },

    loadPlanets: async ({ dispatch }) => {
        try {
            const res = await fetch("https://www.swapi.tech/api/planets");
            const data = await res.json();
            dispatch({ type: "SET_PLANETS", payload: data.results });
        } catch (err) {
            console.error("Error loading planets:", err);
        }
    },

    loadVehicles: async ({ dispatch }) => {
        try {
            const res = await fetch("https://www.swapi.tech/api/vehicles");
            const data = await res.json();
            dispatch({ type: "SET_VEHICLES", payload: data.results });
        } catch (err) {
            console.error("Error loading vehicles:", err);
        }
    },

    // ⭐ Prevent duplicates
    addFavorite: ({ store, dispatch }, item) => {
        const exists = store.favorites.some(f => f.uid === item.uid);

        if (!exists) {
            dispatch({
                type: "SET_FAVORITES",
                payload: [...store.favorites, item]
            });
        }
    },

    // ⭐ Remove by UID
    removeFavorite: ({ store, dispatch }, uid) => {
        dispatch({
            type: "SET_FAVORITES",
            payload: store.favorites.filter(f => f.uid !== uid)
        });
    }
};

// ================================
//  REDUCER (THIS MUST BE DEFAULT EXPORT)
// ================================
export default function reducer(state, action) {
    switch (action.type) {
        case "SET_PEOPLE":
            return { ...state, people: action.payload };

        case "SET_PLANETS":
            return { ...state, planets: action.payload };

        case "SET_VEHICLES":
            return { ...state, vehicles: action.payload };

        case "SET_FAVORITES":
            return { ...state, favorites: action.payload };

        default:
            return state;
    }
}
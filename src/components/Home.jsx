import { useLoaderData } from "react-router-dom";
import Coffee from "./Coffee";
import { useState } from "react";

const Home = () => {
    const loadedCoffes = useLoaderData();
    const [coffees,setCoffes] = useState(loadedCoffes)
    return (
        <div>
            <h2 className="text-blue-300 font-bold text-5xl">Hot Cold Coffee {coffees.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {
                    coffees.map(coffee => <Coffee key={coffee._id} coffees={coffees} setCoffes={setCoffes} coffee={coffee}></Coffee>)
                }
            </div>
        </div>
    );
};

export default Home;
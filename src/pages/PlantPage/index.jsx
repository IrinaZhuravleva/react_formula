import { useEffect, useState } from 'react';
import * as plantService from 'services/plant';
import PlantItem from './PlantItem';
import NavBar from '../shared-components/NavBar';
import RedirectToHomeIfSignedOut from '../shared-components/RedirectToHomeIfSignedOut';
import LoadingSpinner from "../shared-components/LoadingSpinner";


const PlantPage = () => {
    const [plants, setPlants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
    (async () => {
        setIsLoading(true);
        const response = await plantService.getPlants();
        const data = await response.json();
        setPlants(data);
        setIsLoading(false);

    })();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
        // console.log(plants);

    return (
        <RedirectToHomeIfSignedOut>
            <div>
                <NavBar />
                {isLoading ? <LoadingSpinner /> :
                    <div className="flex justify-center py-24 items-center">
                        <div className="w-full max-w-5xl border border-red-400">
                            <div className="text-4xl font-playfair text-emerald-800 px-5">
                                Plants In Stock
                            </div>
                            <div className="flex flex-wrap gap-5 justify-center" >
                            {
                                plants.map((plant) => <PlantItem key={plant.name} plant={plant}/>)
                            }
                            </div>      
                         </div>
                    </div>}
            </div>
        </RedirectToHomeIfSignedOut>
    );
};

export default PlantPage;
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as plantService from 'services/plant';
import PlantInfoSection from "./PlantInfoSection";
import NavBar from '../shared-components/NavBar';
import LoadingSpinner from "../shared-components/LoadingSpinner";

const PlantShowPage = () => {
    const [plant, setPlant] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { plantId } = useParams();

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const response = await plantService.getPlantById(plantId);
            const data = await response.json();
            console.log("Plant Data:", data);
            setPlant(data);
            setIsLoading(false);   
        })();
    }, [plantId]);

    return  <>
                <NavBar />
                <div className="flex justify-center min-h-screen bg-green-5">
                    <div className="w-full max-w-5xl px-8 py-10">
                        {isLoading ? <LoadingSpinner /> : <PlantInfoSection plant={plant} />}
                    </div>
                </div>;
            </>
};

export default PlantShowPage;
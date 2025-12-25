import { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

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
    }, []);
    // console.log(plants);

    return (
        <RedirectToHomeIfSignedOut>
            <div>
                <NavBar />
                {isLoading ? <LoadingSpinner /> :
                    <div className="flex justify-center py-10 items-center">
                        <div className="w-full max-w-5xl">
                            <div className="text-4xl font-playfair text-emerald-800 px-5">
                                Plants In Stock
                            </div>
                            <div className="flex flex-wrap gap-5 justify-center" >
                            {
                                plants.map((plant, index) => {
                                    return (
                                    <motion.div
                                        initial={{ opacity: 0, y: "20px" }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{once: true}}
                                        transition={{ delay: 0.3 + (index % 3) * 0.2, duration: 0.4 }}>
                                            <PlantItem key={plant.name} plant={plant}/>
                                    </motion.div>)
                            })
                            }
                            </div>      
                         </div>
                    </div>
                }
            </div>
        </RedirectToHomeIfSignedOut>
    );
};

export default PlantPage;
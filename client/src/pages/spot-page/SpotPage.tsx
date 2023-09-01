import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "storage/hookTypes";
import s from "./styles.module.scss";
import { handleSpots } from "modules/card-list/store/spotsActions";
import { SpotItem } from "modules/spot-item";
import { localSpots, TLocalRoute } from "utils/localRoutes";

export const SpotPage = () => {

    const dispatch = useAppDispatch();
    const spots = localSpots;
    const { spotId } = useParams();
    const [spotItem, setSpotItem] = useState<TLocalRoute | null>(null);

    useEffect(() => {
        if (spotId) {
            dispatch(handleSpots(spots));
            getSpotById(spotId);
        }
    }, [spotId, spots])

    const getSpotById = (spotId: string) => {
        if (spots) {
            const foundSpot: TLocalRoute | undefined = spots.find((spot: TLocalRoute) => {
                return spot.id === Number(spotId);
            })
            setSpotItem(foundSpot);
        }
    }

    return (
        <>
            {spotItem && (
                <div className="wrapper">
                    <div className="content container">
                        <SpotItem spotItem={spotItem} />
                    </div>
                </div>)
            }
        </>
    );
}
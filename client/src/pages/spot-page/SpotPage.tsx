import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "storage/hookTypes";
import s from "./styles.module.scss";
import { getLocalSpotsAction } from "modules/card-list/store/spotsActions";
import { SpotItem } from "modules/spot-item";
import { localSpots, TLocalRoute } from "utils/localRoutes";
import { TMarker } from "components/ymap/constants/markers";
import { useAdaptedSpotType } from "hooks/useAdaptedSpotType";

export const SpotPage = () => {

    const dispatch = useAppDispatch();
    const spots = localSpots;
    const { spotId } = useParams();
    const [spotItem, setSpotItem] = useState<TMarker | null>(null);

    const getSpotById = (spotId: string) => {
        if (spots) {
            const foundSpot: TLocalRoute | undefined = spots.find(spot => {
                return spot.id === Number(spotId);
            })
            setSpotItem(useAdaptedSpotType(foundSpot));
        }
    }

    useEffect(() => {
        if (spotId) {
            dispatch(getLocalSpotsAction(spots));
            getSpotById(spotId);
        }
    }, [spotId, spots])

    return (
        <>
            {spotItem && (
                <div className={s.wrapper}>
                    <div className="content container">
                        <SpotItem spotItem={spotItem} />
                    </div>
                </div>)
            }
        </>
    );
}
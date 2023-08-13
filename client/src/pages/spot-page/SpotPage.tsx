import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "storage/hook-types";
import s from "./styles.module.scss"
import { getLocalSpotsAction } from "modules/card-list/store/spots-actions";
import { TMarker, markers } from "modules/ymap/constants/markers";
import { ContentHeader } from "ui/content-header/ContentHeader";
import { SpotItem } from "modules/spot-item";

const SpotPage = () => {

    const { spotId } = useParams();
    const spots = useAppSelector(state => state?.spots?.data);
    const [spotItem, setSpotItem] = useState<TMarker[]>(null);

    const dispatch = useAppDispatch();

    const getSpotById = (spotId: string) => {

        if (spots) {
            setSpotItem(spots?.filter(spot => spot.id === Number(spotId)));
        }
    }

    useEffect(() => {

        if (spotId) {
            dispatch(getLocalSpotsAction(markers));
            getSpotById(spotId);
        }

    }, [spotId, spots])

    if (spotItem) {

        const spot = { ...spotItem[0] }

        return (
            <div className={s.wrapper}>
                <div className="content container">
                    <ContentHeader textButton="назад" title={spot.name} />
                    <SpotItem spotItem={spotItem} />                    
                </div>
            </div>
        );
    }
}

export default SpotPage;
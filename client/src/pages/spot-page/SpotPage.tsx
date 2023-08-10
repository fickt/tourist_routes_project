import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "storage/hook-types";
import s from "./styles.module.scss"
import { getLocalSpotsAction } from "modules/card-list/store/spots-actions";
import { TMarker, markers } from "modules/ymap/constants/markers";
import { YMapComponent } from "modules/ymap";
import Card from "components/card/Card";

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

    if (spotItem)

        return (
            <div className={s.wrapper}>
                <h2>Страница места</h2>
                <Card {...spotItem[0]}>
                    <YMapComponent markers={spotItem} />
                </Card>
            </div>
        );
}

export default SpotPage;
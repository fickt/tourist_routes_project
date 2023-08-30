import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "storage/hookTypes";
import s from "./styles.module.scss";
import { getLocalSpotsAction } from "modules/card-list/store/spotsActions";
import { ContentHeader } from "ui/content-header/ContentHeader";
import { SpotItem } from "modules/spot-item";
import { TMarker, markers } from "components/ymap/constants/markers";
import {setSpotItemId} from "modules/spot-item/components/store/spotItemActions";

export const SpotPage = () => {

    const { spotId } = useParams();
    const spots = useAppSelector(state => state?.spots?.data);
    const [spotItem, setSpotItem] = useState<TMarker>(null);
    const dispatch = useAppDispatch();
    const getSpotById = (spotId: string) => {

        if (spots) {
            setSpotItem(spots.find(spot => {
                return spot.id === Number(spotId)
            }))
        }
    }

    useEffect(() => {

        if (spotId) {
            dispatch(setSpotItemId(spotId))
            dispatch(getLocalSpotsAction(markers));
            getSpotById(spotId);
        }

    }, [spotId, spots, spotItem])

    return (
        <>
            {spotItem &&
                <div className={s.wrapper}>
                    <div className="content container">
                        <ContentHeader title={spotItem.name} />
                        <SpotItem spotItem={spotItem} />
                    </div>
                </div>}
        </>
    );


}
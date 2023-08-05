import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "storage/hook-types";
import s from "./styles.module.scss"
import { useEffect, useState } from "react";
import { getLocalSpotsAction } from "storage/actions/spots-actions";
import { TMarker, markers } from "components/ymap/markers";
import YMapComponent from "components/ymap";
import Card from "components/card";

function SpotPage() {
    const { spotId } = useParams();
    const spots = useAppSelector(state => state?.spots?.data)
    const [spotItem, setSpotItem] = useState<TMarker[]>(null);

    const dispatch = useAppDispatch();

    const getSpotById = (spotId: string) => {

        if (spots) {
            setSpotItem(spots?.filter(spot => spot.id === Number(spotId)))
        }
    }

    useEffect(() => {

        if (spotId) {
            dispatch(getLocalSpotsAction(markers))
            getSpotById(spotId)
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
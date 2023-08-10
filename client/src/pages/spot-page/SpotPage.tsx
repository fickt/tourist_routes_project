import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "storage/hook-types";
import s from "./styles.module.scss"
import { useEffect, useState } from "react";
import { getLocalSpotsAction } from "modules/card-list/store/spots-actions";
import { TMarker, markers } from "modules/ymap/constants/markers";
import { YMapComponent } from "modules/ymap";
import Card from "components/card/Card";
import { ContentHeader } from "ui/content-header/ContentHeader";
import { ReviewBlock } from "modules/review-block/components/review-block/ReviewBlock";

const SpotPage = () => {
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

    if (spotItem) {

        const spot = {...spotItem[0]}

        return (
            <div className={s.wrapper}>
                <ContentHeader textButton="назад" title={spot.name} />
                <Card {...spotItem[0]}>
                    <YMapComponent markers={spotItem} />
                    <ReviewBlock id={spot.id}/>
                </Card>
                
            </div>
        );
    }

        
}

export default SpotPage;
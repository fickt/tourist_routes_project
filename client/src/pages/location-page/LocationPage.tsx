import { LocalSpotsMap } from "modules/local-spots-map";
import { ContentHeader } from "ui/content-header/ContentHeader";

export const LocationPage = () => {

    return (
        <>
            <ContentHeader title="Ближайшие места"/>
            <LocalSpotsMap />
        </>
    )
}
import {FormEvent, useMemo, useState} from "react";
import s from "./styles.module.scss";
import { SearchForm } from "components/search/SearchForm";
import { CardList } from "modules/card-list";
import backImage from "./assets/bg.jpg";
import classNames from "classnames";
import { useAppSelector } from "storage/hookTypes";
import ImageRecommendIcon from "./assets/imageReccomendIcon.svg";
import { ImageRecommendPopup } from "modules/image-recommend-popup/ImageRecommendPopup";
import { spotRoutesSelector } from "modules/card-list/store/spotsSelectors";

export const MainContent = () => {

    const [searchValue, setSearchValue] = useState("");
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const spots = useAppSelector(spotRoutesSelector)

    const filteredSpots = useMemo(() => {
        return spots?.filter(spot =>
            spot.name.toLowerCase().includes(searchValue.toLowerCase())
        );
    }, [searchValue, spots]);

    const handleInputChange = (value: string) => {
        setSearchValue(value);
    };

    const handleSearchClick = (e: FormEvent) => {
        e.preventDefault();
        setSearchValue("");
    };

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <>
            {isPopupOpen && (
                <>
                    <div className={s.overlay} />
                    <ImageRecommendPopup isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} closePopup={closePopup} />
                </>)
            }
            <section className={classNames("content-section", s.section)} style={{backgroundImage: `url(${backImage})`}}>
                <SearchForm
                    placeholder={"Поиск лучшего маршрута"}
                    searchValue={searchValue}
                    handleFormSubmit={handleSearchClick}
                    handleInputChange={handleInputChange}
                />
                <button className={s.imageRecommend} onClick={openPopup}><ImageRecommendIcon /></button>
            </section>
            <section className={classNames("content-section", s.routes)}>
                <div className="container content"><CardList
                    spots={filteredSpots ?? spots}
                /></div>
            </section>
        </>
    )
}
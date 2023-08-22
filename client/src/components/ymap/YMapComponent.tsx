import React, { useEffect } from "react";
import s from "./styles.module.scss";
import ymaps from "ymaps";
import { removeControls } from "./helpers/ymap-options";
import { mapControls, mapState } from "./constants/constants";
import { TMarker } from "./constants/markers";
import { TYMapProps } from "./types";
import { useNavigate, useParams } from "react-router-dom";

export const YMapComponent = ({ markers }: TYMapProps) => {    

    const navigate = useNavigate();
    const { spotId } = useParams(); //проверяем на какой странице мы находимся, если есть spotId, то на странице места, иначе на страницу общей карты

    const init = () => {

        let myMap = new ymaps.Map("mapId", mapState);
        //задаем пустой объект маршрута, нужен для перерисовки
        let multiRoute = new ymaps.multiRouter.MultiRoute({
            referencePoints: [],
            params: {}
        });

        removeControls(myMap, mapControls);

        const setMarkers = (markers: TMarker[]) => {

            markers.forEach(marker => {
                //параметры для внутренности баллуна
                const balloonInner = {}
                //параметры для картинки на карте
                const iconSets = {
                    iconLayout: "default#image",
                    iconImageHref: marker.picture,
                    iconImageSize: marker.iconImageSize,
                    iconImageOffset: marker.iconImageOffset,
                }

                let newMarker = new ymaps.Placemark(marker.coordinates, balloonInner, iconSets);

                const buildRouteInSpot = () => { //функция для прокладывания маршрута
                    const options = {
                        enableHighAccuracy: true,
                        timeout: 5000,
                        maximumAge: 0,
                    };
                    //Определение геолокации
                    function success(pos: GeolocationPosition) {

                        myMap.geoObjects.remove(multiRoute) //очищаем маршрут перед созданием нового
                        const crd = pos.coords; //получаем объект с координатами
                        multiRoute = new ymaps.multiRouter.MultiRoute({
                            // Описание опорных точек мультимаршрута.
                            referencePoints: [
                                [crd.latitude, crd.longitude],
                                marker.coordinates
                            ],
                            // Параметры маршрутизации.
                            params: {
                                // Ограничение на максимальное количество маршрутов, возвращаемое маршрутизатором.
                                results: 2
                            },
                        }, {
                            // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
                            boundsAutoApply: true
                        });

                        myMap.geoObjects.add(multiRoute); //прокладываем новый созданный маршрут
                    }

                    function error(err: GeolocationPositionError) {
                        console.warn(`ERROR(${err.code}): ${err.message}`);
                    }
                    navigator.geolocation.getCurrentPosition(success, error, options);
                }
                //действия при клике на маркет
                newMarker.events.add("click", () => {
                    spotId ? buildRouteInSpot() : navigate(`/spots/${marker.id}/`)                                
                })
                //добавление маркера на карту
                myMap.geoObjects.add(newMarker);
            })
        }
        setMarkers(markers);
    }

    useEffect(() => {
        ymaps.ready(init);
    }, [])

    return (
        <div id="mapId" className={s.map} />
    );
}


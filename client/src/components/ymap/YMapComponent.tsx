import React, { useEffect, useState } from "react";
import s from "./styles.module.scss";
import ymaps from "ymaps";
import { removeControls } from "./helpers/ymap-options";
import { mapControls, mapState } from "./constants/constants";
import { TMarker } from "./constants/markers";
import { TYMapProps } from "./types";
import { useNavigate, useParams } from "react-router-dom";
import { getLocation } from "./helpers/location";
import locationIcon from "./img/location.png"

export const YMapComponent = ({ markers }: TYMapProps) => {

    const navigate = useNavigate();
    const { spotId } = useParams(); //проверяем на какой странице мы находимся, если есть spotId, то на странице места, иначе на страницу общей карты    
    const init = () => {
        //создание компонентов карты
        const mapInition = (pos: GeolocationPosition, err?: GeolocationPositionError ) => {
            if (err) {
                console.log('er');                
            }
            const geoPosition = pos && [pos.coords.latitude, pos.coords.longitude];
            console.log(111, geoPosition);
            

            let myMap = new ymaps.Map("mapId", { ...mapState, center: geoPosition || mapState.center }); //если есть геолокация меняем центр карты на него
            //задаем пустой объект маршрута, нужен для перерисовки
            let multiRoute = new ymaps.multiRouter.MultiRoute({
                referencePoints: [],
                params: {}
            });

            removeControls(myMap, mapControls); //удаляем лишние виджеты управления на карте

            const setLocationMarker = () => {

                const iconSets = {
                    iconLayout: "default#image",
                    iconImageHref: locationIcon,
                }

                let locationMarker = new ymaps.Placemark(geoPosition, {}, iconSets);
                myMap.geoObjects.add(locationMarker);
            };

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

                        myMap.geoObjects.remove(multiRoute) //очищаем маршрут перед созданием нового
                        multiRoute = new ymaps.multiRouter.MultiRoute({
                            // Описание опорных точек мультимаршрута.
                            referencePoints: [
                                geoPosition, //точка А
                                marker.coordinates //точка Б
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
                    //действия при клике на маркет
                    newMarker.events.add("click", () => {
                        spotId ? buildRouteInSpot() : navigate(`/spots/${marker.id}/`)
                    })
                    //добавление маркера на карту
                    myMap.geoObjects.add(newMarker);
                })
            };

            setLocationMarker(); //устанавливаем иконку геопозиции
            setMarkers(markers); //устанавливаем маркеры мест
        }
        getLocation((pos) => mapInition(pos), (err) => mapInition(null, err)) //определяем геопозицию зачем выполняем mapInition
    }

    useEffect(() => {
        ymaps.ready(init);
    }, [])

    return (
        <div id="mapId" className={s.map} />
    );
}


//Экскиз вариант 2гис с бесплатным обслуживанием
// для ознакомления

import DG from '2gis-maps';
import { useEffect, useRef } from 'react';
import { TMarker, markers } from './markers';


const DGisMap = () => {
    const refMap2gis = useRef();
    let map: typeof DG; 

    DG.then( () => {
        map = new DG.map('2gisMapId', {
            center: [56.489814, 84.943555],
            zoom: 13
        });     

        const setMarkers = (markers: TMarker[]) => {
            markers.forEach((marker) => {
                let markerIcon = DG.icon({
                    iconUrl: marker.icon,
                    iconSize: [80, 80],
                    className: 'mapIcon',
                    pane: 'markerPane'
                });
        
                DG.marker(marker.coordinates, {
                    title: marker.hintContent, 
                    icon: markerIcon, 
                    riseOnHover: true
                }).addTo(map);
                
            })
        }        
        setMarkers(markers)       

    });

    useEffect(() => {
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        };

        function success(pos: any) {
            const crd = pos.coords;                     
            console.log(crd.latitude, crd.longitude);
            
        }

        function error(err: any) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }

        navigator.geolocation.getCurrentPosition(success, error, options);
    }, [])


    return (
        <>
            <div ref={refMap2gis} id="2gisMapId" className='dgis-map' />
        </>
    );
}

export default DGisMap;




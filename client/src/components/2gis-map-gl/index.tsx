//Экскиз вариант 2гис с платным обслуживанием
// для ознакомления

import { load } from '@2gis/mapgl';

const DGisMapGL = () => {
    
    load().then((mapglAPI) => {
        const map = new mapglAPI.Map('2gisMapGL', {
            center: [55.31878, 25.23584],
            zoom: 13,
            key: 'Your API access key',
        });
    });

    return (
        <div id="2gisMapGL" className='dgis-map' />
    );
}

export default DGisMapGL;




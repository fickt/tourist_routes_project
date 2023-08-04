//список управлений 'geolocationControl', 'searchControl', 'searchControl', 'trafficControl', 'typeSelector', 'fullscreenControl', 'zoomControl', 'rulerControl', 'routePanelControl', 'routePanelControl', 'scrollZoom'
export const mapControls = ['geolocationControl', 'searchControl', 'searchControl', 'trafficControl', 'typeSelector', 'rulerControl', 'routePanelControl']


export const removeControls = (myMap:ymaps.Map, controls:string[]) => {
    controls.forEach(control => {
        myMap.controls.remove(control)
    });
}

export const mapState = {
    center: [56.484645, 84.947649],
    zoom: 12,
    controls: ['fullscreenControl']
}
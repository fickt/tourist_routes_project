export type TLocationSuccess = (pos: GeolocationPosition) => void;
export type TLocationFail = (err: GeolocationPositionError) => void;

export const getLocation = (success: TLocationSuccess, onFail?: TLocationFail) => {

    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    };

    function error(err: GeolocationPositionError) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, onFail || error, options);
}
import ymaps from "yandex-maps";

export const removeControls = (myMap: ymaps.Map, controls: string[]) => {
    controls.forEach(control => {
        myMap.controls.remove(control);
    });
};

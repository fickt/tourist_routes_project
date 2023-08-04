import icon1 from './img/125-2.jpg';
import icon2 from './img/128-2.jpg';
import icon3 from './img/133-2.jpg';
import icon4 from './img/135-2.jpg';
import icon5 from './img/136-2.jpg';
import icon6 from './img/137-2.jpg';

export type TMarker = 
    {
        id: number,
        coordinates: [number, number],
        hintContent: string,
        balloonContent: string,
        iconImageHref: string,
        iconImageSize: [number, number],
        iconImageOffset: [number, number],
        icon: string;
    }


export const markers:TMarker[] = [
    {
        id: 1,
        coordinates: [56.489814, 84.943555],
        hintContent: "Набережная реки Томи",
        balloonContent: "Набережная по которой любят гулять томичи и гости города. На ней Вы можете встретиться со знаменитым русским поэтом А.П. Чеховым.",
        iconImageHref: "assets/riverEmbankment.jpg",
        iconImageSize: [100, 110],
        iconImageOffset: [-120, -90],
        icon: icon1
    },
    {
        id: 2,
        coordinates: [56.466258, 84.946469],
        hintContent: "Сибирский ботанический сад",
        balloonContent: "Вечное лето в Сибири.",
        iconImageHref: "assets/botanicalGarden.jpg",
        iconImageSize: [100, 120],
        iconImageOffset: [-40, -80],
        icon: icon2
    },
    {
        id: 3,
        coordinates: [56.464640, 84.906368],
        hintContent: "Северный парк",
        balloonContent: "Микрорайон нового типа на левом берегу реки Томи в 2 километрах от Томска.",
        iconImageHref: "assets/northPark.jpg",
        iconImageSize: [150, 100],
        iconImageOffset: [-100, -50],
        icon: icon3
    },
    {
        id: 4,
        coordinates: [56.487886, 84.950766],
        hintContent: "Каменный мост",
        balloonContent: "Мост через реку Ушайку в историческом центре города Томска.",
        iconImageHref: "assets/stoneBridge.jpg",
        iconImageSize: [150, 100],
        iconImageOffset: [0, -140],
        icon: icon4
    },
    {
        id: 5,
        coordinates: [56.447697, 84.972409],
        hintContent: "Башня Лунева",
        balloonContent: "Водонапорная башня в центре города, в которой живёт настоящий человек.",
        iconImageHref: "assets/lunevTower.jpg",
        iconImageSize: [100, 120],
        iconImageOffset: [10, -140],
        icon: icon5
    },
];



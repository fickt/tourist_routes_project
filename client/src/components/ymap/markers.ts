import icon1 from './img/riverEmbankment.jpg';
import icon2 from './img/botanicalGarden.jpg';
import icon3 from './img/northPark.jpg';
import icon4 from './img/stoneBridge.jpg';
import icon5 from './img/lunevTower.jpg';

export type TMarker = {
        id: number,
        coordinates: [number, number],
        name: string,
        description: string,
        iconImageSize: [number, number],
        iconImageOffset: [number, number],
        picture: string;
}

export const markers:TMarker[] = [
    {
        id: 1,
        coordinates: [56.489814, 84.943555],
        name: "Набережная реки Томи",
        description: "Набережная по которой любят гулять томичи и гости города. На ней Вы можете встретиться со знаменитым русским поэтом А.П. Чеховым.",
        iconImageSize: [80, 80],
        iconImageOffset: [-120, -90],
        picture: icon1
    },
    {
        id: 2,
        coordinates: [56.466258, 84.946469],
        name: "Сибирский ботанический сад",
        description: "Вечное лето в Сибири.",
        iconImageSize: [80, 80],
        iconImageOffset: [-40, -80],
        picture: icon2
    },
    {
        id: 3,
        coordinates: [56.464640, 84.906368],
        name: "Северный парк",
        description: "Микрорайон нового типа на левом берегу реки Томи в 2 километрах от Томска.",
        iconImageSize: [80, 80],
        iconImageOffset: [-100, -50],
        picture: icon3
    },
    {
        id: 4,
        coordinates: [56.487886, 84.950766],
        name: "Каменный мост",
        description: "Мост через реку Ушайку в историческом центре города Томска.",
        iconImageSize: [80, 80],
        iconImageOffset: [0, -140],
        picture: icon4
    },
    {
        id: 5,
        coordinates: [56.447697, 84.972409],
        name: "Башня Лунева",
        description: "Водонапорная башня в центре города, в которой живёт настоящий человек.",
        iconImageSize: [80, 80],
        iconImageOffset: [10, -140],
        picture: icon5
    },
];



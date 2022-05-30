import React from "react";
import { GameItem } from "../components/GameItem";
import GTAV from "../components/assets/img/gta_v.jpeg";
import Battlefield from "../components/assets/img/battlefield_2042.jpg";
import Forza from "../components/assets/img/forza_5.jpeg";
import LISTC from "../components/assets/img/life_is_strange_true_colors.jpeg";
import TCRSS from "../components/assets/img/rainbow_siege.jpeg";
import Assasins from "../components/assets/img/assassins_creed_valhalla.png";
import CSGO from "../components/assets/img/csgo.jpg";


const GAMES = [
  {
    image: Forza,
    title: "Forza Horizon 5",
    genres: ["Гонки", "Симулятор", "Открытый мир"],
    price: 32999,
    video: "https://www.youtube.com/embed/FYH9n37B7Yw",
    id: 1,
    description:
      "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
  },
  {
    image: Battlefield,
    title: "Battlefield 2042",
    genres: ["Экшен", "Шутер", "Война"],
    video: "https://www.youtube.com/embed/ASzOzrB-a9E",
    price: 12999,
    id: 2,
    description:
      "Battlefield™ 2042 — это шутер от первого лица, в котором серия возвращается к легендарным масштабным сражениям. В будущем, где царит хаос, адаптируйтесь и процветайте на постоянно меняющихся полях боя благодаря своему отряду и арсеналу новейших технологий.",
  },
  {
    image: LISTC,
    title: "Life is Strange True Colors",
    genres: ["Глубокий сюжет", "Протагонистка"],
    video: "https://www.youtube.com/embed/b6CkzwVAr0M",
    price: 18999,
    id: 3,
    description:
      "Алекс Чэнь от всех скрывает своё «проклятие» — сверхъестественную способность считывать сильные эмоции других и влиять на них. Но когда её брат погибает — якобы в результате несчастного случая, — Алекс использует её, чтобы узнать правду.",
  },
  {
    image: GTAV,
    title: "Grand Theft Auto V",
    genres: ["Открытый мир", "Экшен"],
    video: "https://www.yout",
    price: 8999,
    id: 4,
    description:
      "Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир Лос-Сантоса и округа Блэйн в разрешении до 4k и выше с частотой 60 кадров в секунду.",
  },
  {
    image: TCRSS,
    title: "Tom Clancy's Rainbow Six® Siege",
    video: "https://www.youtube.com/embed/6wlvYh0h63k",
    genres: ["Тактика", "Шутер"],
    price: 22999,
    id: 5,
    description:
      "Tom Clancy's Rainbow Six Осада – это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal.",
  },
  {
    image: Assasins,
    title: "Assassin’s Creed Valhalla",
    genres: ["Паркур", "РПГ", "Открытый мир"],
    video: "https://www.youtube.com/embed/ssrNcwxALS4",
    price: 17999,
    id: 6,
    description:
      "Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.",
  },
  {
    image: CSGO,
    title: "Counter Strike Global Offensive",
    genres: ["Шутер", "Тактика", "Командная игра"],
    video: "https://www.youtube.com/embed/ssrNcwxALS4",
    price: 6999,
    id: 7,
    description:
      "Как и в остальных играх серии, в Counter-Strike: Global Offensive игроки делятся на две команды: террористов и подразделений специального назначения, после чего сражаются друг с другом несколько раундов, по результатам которых определяется команда-победитель.",
  },
];

export const Main = () => {
  return (
    <div className="container grid grid-cols-4 mx-auto gap-3 my-10">
      {GAMES.map((obj) => (
        <GameItem obj={obj} key={obj.id} />
      ))}
    </div>
  );
};

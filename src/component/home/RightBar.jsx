/* eslint-disable no-undef */
import { useState } from "react";

/* eslint-disable react/prop-types */
let newsArr = [
  {
    heading: "Startup exit policies",
    reader: "9,505",
  },
  {
    heading: "Zen G and brands",
    reader: "7,541",
  },
  {
    heading: "DTH industry in India",
    reader: "9,505",
  },
  {
    heading: "Indian law firms",
    reader: "6,585",
  },
  {
    heading: "Career breaks",
    reader: "4,857",
  },
  {
    heading: "Career breaks",
    reader: "4,857",
  },
  {
    heading: "Career breaks",
    reader: "4,857",
  },
  {
    heading: "Career breaks",
    reader: "4,857",
  },
];

const games = [
  {
    gameImg: "./images/game-0.png",
    gameName: "Queens",
    gameDesp: "Crown each region",
  },
  {
    gameImg: "./images/game-1.png",
    gameName: "Tango",
    gameDesp: "Harmonize the grid",
  },
  {
    gameImg: "./images/game-2.png",
    gameName: "Pinpoint",
    gameDesp: "guess the category",
  },
  {
    gameImg: "./images/game-3.png",
    gameName: "Crossclimb",
    gameDesp: "unlock the trivia ladder",
  },
];
export default function RightBar() {
  const [showAllNews, setShowAllNews] = useState(true);
  const handleShowNews = () => {
    setShowAllNews(!showAllNews);
  };
  return (
    <div className="flex flex-col gap-1 rounded-lg col-span-12 lg:col-end-13 md:col-end-10 md:col-start-4 lg:col-start-10">
      <div className=" bg-white flex flex-col gap-2 h-fit rounded-lg items-start">
        <div className="flex justify-between w-full items-center">
          <h1 className="text-xl font-semibold ">Trending Now</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="signal-notice-medium"
            aria-hidden="true"
            role="none"
            data-supported-dps="24x24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M18 3H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3zm-4 15h-1a3 3 0 01-3-3 3.22 3.22 0 01.1-.75L11.2 10h2.07L12 14.75A1 1 0 0013 16h1zm-1-9.75A1.25 1.25 0 1114.25 7 1.25 1.25 0 0113 8.25z"></path>
          </svg>
        </div>
        <h1 className="text-gray-400 font-medium">curated by LinkedIn News</h1>

        {newsArr.map((item, index) => {
          if (showAllNews || index < 4) {
            return (
              <NewsContainer
                key={index}
                heading={item.heading}
                reader={item.reader}
              />
            );
          }
        })}

        <ShowNews handleShowNews={handleShowNews} showAllNews={showAllNews} />
        <Games />
      </div>
    </div>
  );
}
function Games() {
  return (
    <div className="w-full flex flex-col gap-3 mt-4 w-full ">
      {games.map((item, index) => {
        return <GameContainer key={index} game={item} />;
      })}
    </div>
  );
}
function GameContainer({ game }) {
  return (
    <div className="flex gap-2 justify-between items-center w-full hover:bg-gray-200 px-2 hover:cursor-pointer ">
      <div className="flex gap-2 items-center">
      <img className="w-8 h-8" src={game.gameImg} alt="" />
      <div className="flex flex-col">
        <h1 className="font-semibold text-sm">{game.gameName}</h1>
        <p className="text-gray-500 text-xs">{game.gameDesp}</p>
      </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        className="rtl-flip w-4 h-4 text-gray-500 justify-self-end"
        id="chevron-right-small"
        aria-hidden="true"
        role="none"
        data-supported-dps="16x16"
        fill="currentColor"
      >
        <path d="M5 15l4.61-7L5 1h2.39L12 8l-4.61 7z"></path>
      </svg>
    </div>
  );
}

function ShowNews({ handleShowNews, showAllNews }) {
  return (
    <>
      <button
        onClick={handleShowNews}
        className="text-gray-600 flex justify-between items-center gap-2 px-2"
      >
        {!showAllNews ? "Show more" : "Show less"}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            id="chevron-down-small"
            aria-hidden="true"
            role="none"
            data-supported-dps="16x16"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"></path>
          </svg>
        </span>
      </button>
    </>
  );
}

function NewsContainer({ heading, reader }) {
  return (
    <div className="flex flex-col w-full hover:bg-gray-200 px-4 py-1 hover:cursor-pointer ">
      <h1 className="font-semibold text-sm">{heading}</h1>
      <p className="text-gray-500 text-xs flex items-center gap-1">
        <span>5d ago</span>
        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
        <span>{reader} reader</span>
      </p>
    </div>
  );
}

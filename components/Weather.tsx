"use client";

import Image from "next/image";
import { useState } from "react";

export default function WeatherApp() {
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState<any>({});

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`;
      const resWeather = await fetch(apiUrl);
      const data = await resWeather.json();

      if (data?.cod === "400") throw data;
      setWeather(data);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <h1 className="text-2xl font-bold text-blue-500 mt-12">Weather app</h1>
      <form onSubmit={handleSubmit}>
        <div className="search-box flex items-center">
          <input
            className="bg-transparent border-b-2 outline-none"
            placeholder="Search your city..."
            type="text"
            onChange={(e) => setInput(e.target.value)}
          />
          <button>
            <Image
              alt="serach"
              src="/search.svg"
              width={20}
              height={20}
              priority
            />
          </button>
        </div>
      </form>
      {Object.keys(weather).length !== 0 ? (
        <div className="weather-box dark:text-white text-2xl font-bold dark:bg-[#1F1B24] border-2 border-purple-500 p-2 rounded-md">
          <div className="flex gap-16 items-center justify-between">
            <p className="mx-2">{weather.main.temp} &deg;C</p>
            <img
              width={70}
              height={70}
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="weather-icon"
            />
          </div>
          <div className="flex gap-2 mb-4 text-sm items-center justify-evenly">
            <p className="info-box">
              <Image
                src="/humidity.svg"
                height={15}
                width={15}
                alt="humidity"
              />{" "}
              {weather.main.humidity}
            </p>
            <p className="info-box">
              <Image src="/clouds.svg" height={15} width={15} alt="rain" />{" "}
              {weather.clouds.all}
            </p>
            <p className="info-box">
              <Image src="/windspeed.svg" height={15} width={15} alt="speed" />{" "}
              {weather.wind.speed}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

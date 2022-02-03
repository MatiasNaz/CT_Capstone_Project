import React from "react";
import { getWeatherTypeByCode, getMusicByWeatherType } from "./../constants";

const MusicPlayer = ({ weatherCode }) => {
  const weather = getWeatherTypeByCode(weatherCode);
  const musicType = getMusicByWeatherType(weather);
  const { src, titleUrl, title, descriptionUrl, description } = musicType;

  return (
    <>
      <iframe
        width="100%"
        height="300"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={src}
        title="music player"
      ></iframe>
      <div
        style={{
          fontSize: "10",
          color: "#cccccc",
          lineBreak: "anywhere",
          wordBreak: "normal",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          fontWeight: 100,
        }}
      >
        <a
          href={titleUrl}
          title={title}
          target="_blank"
          rel="noreferrer"
          style={{ color: "#cccccc", textDecoration: "none" }}
        >
          {title}
        </a>{" "}
        ·{" "}
        <a
          href={descriptionUrl}
          title={description}
          target="_blank"
          rel="noreferrer"
          style={{ color: "#cccccc", textDecoration: "none" }}
        >
          {description}
        </a>
      </div>
    </>
  );
};

export default MusicPlayer;

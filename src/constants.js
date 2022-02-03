export const getWeatherTypeByCode = (code) => {
  if (code === 1000) {
    return "sunny";
  } else if (code <= 1009) {
    return "cloudy";
  } else if (code <= 1072) {
    return "small_rain";
  } else if (code <= 1117) {
    return "large_rain";
  } else if (code == 1200) {
    return "blizzard";
  }
  return "default";
};

export const getMusicByWeatherType = (type) => {
  switch (type) {
    case "blizzard":
      return {
        src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/39956737&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        titleUrl: "https://soundcloud.com/maxmusiccloud",
        title: "MaxMusicCloud",
        descriptionUrl:
          "https://soundcloud.com/maxmusiccloud/riders-on-the-storm-snoop-dog",
        description: "Riders On The Storm - Snoop Dog feat. The Doors",
      };
    case "sunny":
      return {
        src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/508250694&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        titleUrl: "https://soundcloud.com/twisterium",
        title: "Background Music For Videos",
        descriptionUrl:
          "https://soundcloud.com/twisterium/happy-sunny-mood-background-music-free-download-free-youtube-music",
        description:
          "Happy Sunny Mood - Background Music Free Download | Free Youtube Music",
      };
    case "cloudy":
      return {
        src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/62576046&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        titleUrl: "https://soundcloud.com/relaxdaily",
        title: "relaxdaily",
        descriptionUrl:
          "https://soundcloud.com/relaxdaily/relaxing-music-calm-studying-yoga",
        description:
          "Relaxing Music – e.g. for studying, yoga or to calm and slow down – relaxdaily N°056",
      };
    case "small_rain":
      return {
        src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/44827202&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        titleUrl: "https://soundcloud.com/hoangnguyen241",
        title: "Thanh Hoang Nguyen",
        descriptionUrl:
          "https://soundcloud.com/hoangnguyen241/kiss-the-rain-rainy-mood",
        description: "Kiss The Rain (Rainy Mood)",
      };
    case "large_rain":
      return {
        src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/949316917&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        titleUrl: "https://soundcloud.com/goodmoodloungemusiczone-music",
        title: "Good Mood Lounge Music Zone",
        descriptionUrl:
          "https://soundcloud.com/goodmoodloungemusiczone-music/snowstorm-outside-the-window",
        description: "Snowstorm Outside the Window",
      };
    default:
      return {
        src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/95872522&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        titleUrl: "https://soundcloud.com/relaxdaily",
        title: "relaxdaily",
        descriptionUrl:
          "https://soundcloud.com/relaxdaily/instrumental-background-music-france-vid",
        description:
          "Instrumental Background Music - relax, ambient, beautiful music",
      };
  }
};

export const WEATHER_CODE_MAP = {
  1000: {
    code: 1000,
    day: "Sunny",
    night: "Clear",
    icon: 113,
  },
  1003: {
    code: 1003,
    day: "Partly cloudy",
    night: "Partly cloudy",
    icon: 116,
  },
  1006: {
    code: 1006,
    day: "Cloudy",
    night: "Cloudy",
    icon: 119,
  },
  1009: {
    code: 1009,
    day: "Overcast",
    night: "Overcast",
    icon: 122,
  },
  1030: {
    code: 1030,
    day: "Mist",
    night: "Mist",
    icon: 143,
  },
  // {
  // 	"code" : 1063,
  // 	"day" : "Patchy rain possible",
  // 	"night" : "Patchy rain possible",
  // 	"icon" : 176
  // },
  // {
  // 	"code" : 1066,
  // 	"day" : "Patchy snow possible",
  // 	"night" : "Patchy snow possible",
  // 	"icon" : 179
  // },
  // {
  // 	"code" : 1069,
  // 	"day" : "Patchy sleet possible",
  // 	"night" : "Patchy sleet possible",
  // 	"icon" : 182
  // },
  // {
  // 	"code" : 1072,
  // 	"day" : "Patchy freezing drizzle possible",
  // 	"night" : "Patchy freezing drizzle possible",
  // 	"icon" : 185
  // },
  // {
  // 	"code" : 1087,
  // 	"day" : "Thundery outbreaks possible",
  // 	"night" : "Thundery outbreaks possible",
  // 	"icon" : 200
  // },
  // {
  // 	"code" : 1114,
  // 	"day" : "Blowing snow",
  // 	"night" : "Blowing snow",
  // 	"icon" : 227
  // },
  // {
  // 	"code" : 1117,
  // 	"day" : "Blizzard",
  // 	"night" : "Blizzard",
  // 	"icon" : 230
  // },
  // {
  // 	"code" : 1135,
  // 	"day" : "Fog",
  // 	"night" : "Fog",
  // 	"icon" : 248
  // },
  // {
  // 	"code" : 1147,
  // 	"day" : "Freezing fog",
  // 	"night" : "Freezing fog",
  // 	"icon" : 260
  // },
  // {
  // 	"code" : 1150,
  // 	"day" : "Patchy light drizzle",
  // 	"night" : "Patchy light drizzle",
  // 	"icon" : 263
  // },
  // {
  // 	"code" : 1153,
  // 	"day" : "Light drizzle",
  // 	"night" : "Light drizzle",
  // 	"icon" : 266
  // },
  // {
  // 	"code" : 1168,
  // 	"day" : "Freezing drizzle",
  // 	"night" : "Freezing drizzle",
  // 	"icon" : 281
  // },
  // {
  // 	"code" : 1171,
  // 	"day" : "Heavy freezing drizzle",
  // 	"night" : "Heavy freezing drizzle",
  // 	"icon" : 284
  // },
  // {
  // 	"code" : 1180,
  // 	"day" : "Patchy light rain",
  // 	"night" : "Patchy light rain",
  // 	"icon" : 293
  // },
  // {
  // 	"code" : 1183,
  // 	"day" : "Light rain",
  // 	"night" : "Light rain",
  // 	"icon" : 296
  // },
  // {
  // 	"code" : 1186,
  // 	"day" : "Moderate rain at times",
  // 	"night" : "Moderate rain at times",
  // 	"icon" : 299
  // },
  // {
  // 	"code" : 1189,
  // 	"day" : "Moderate rain",
  // 	"night" : "Moderate rain",
  // 	"icon" : 302
  // },
  // {
  // 	"code" : 1192,
  // 	"day" : "Heavy rain at times",
  // 	"night" : "Heavy rain at times",
  // 	"icon" : 305
  // },
  // {
  // 	"code" : 1195,
  // 	"day" : "Heavy rain",
  // 	"night" : "Heavy rain",
  // 	"icon" : 308
  // },
  // {
  // 	"code" : 1198,
  // 	"day" : "Light freezing rain",
  // 	"night" : "Light freezing rain",
  // 	"icon" : 311
  // },
  // {
  // 	"code" : 1201,
  // 	"day" : "Moderate or heavy freezing rain",
  // 	"night" : "Moderate or heavy freezing rain",
  // 	"icon" : 314
  // },
  // {
  // 	"code" : 1204,
  // 	"day" : "Light sleet",
  // 	"night" : "Light sleet",
  // 	"icon" : 317
  // },
  // {
  // 	"code" : 1207,
  // 	"day" : "Moderate or heavy sleet",
  // 	"night" : "Moderate or heavy sleet",
  // 	"icon" : 320
  // },
  // {
  // 	"code" : 1210,
  // 	"day" : "Patchy light snow",
  // 	"night" : "Patchy light snow",
  // 	"icon" : 323
  // },
  // {
  // 	"code" : 1213,
  // 	"day" : "Light snow",
  // 	"night" : "Light snow",
  // 	"icon" : 326
  // },
  // {
  // 	"code" : 1216,
  // 	"day" : "Patchy moderate snow",
  // 	"night" : "Patchy moderate snow",
  // 	"icon" : 329
  // },
  // {
  // 	"code" : 1219,
  // 	"day" : "Moderate snow",
  // 	"night" : "Moderate snow",
  // 	"icon" : 332
  // },
  // {
  // 	"code" : 1222,
  // 	"day" : "Patchy heavy snow",
  // 	"night" : "Patchy heavy snow",
  // 	"icon" : 335
  // },
  // {
  // 	"code" : 1225,
  // 	"day" : "Heavy snow",
  // 	"night" : "Heavy snow",
  // 	"icon" : 338
  // },
  // {
  // 	"code" : 1237,
  // 	"day" : "Ice pellets",
  // 	"night" : "Ice pellets",
  // 	"icon" : 350
  // },
  // {
  // 	"code" : 1240,
  // 	"day" : "Light rain shower",
  // 	"night" : "Light rain shower",
  // 	"icon" : 353
  // },
  // {
  // 	"code" : 1243,
  // 	"day" : "Moderate or heavy rain shower",
  // 	"night" : "Moderate or heavy rain shower",
  // 	"icon" : 356
  // },
  // {
  // 	"code" : 1246,
  // 	"day" : "Torrential rain shower",
  // 	"night" : "Torrential rain shower",
  // 	"icon" : 359
  // },
  // {
  // 	"code" : 1249,
  // 	"day" : "Light sleet showers",
  // 	"night" : "Light sleet showers",
  // 	"icon" : 362
  // },
  // {
  // 	"code" : 1252,
  // 	"day" : "Moderate or heavy sleet showers",
  // 	"night" : "Moderate or heavy sleet showers",
  // 	"icon" : 365
  // },
  // {
  // 	"code" : 1255,
  // 	"day" : "Light snow showers",
  // 	"night" : "Light snow showers",
  // 	"icon" : 368
  // },
  // {
  // 	"code" : 1258,
  // 	"day" : "Moderate or heavy snow showers",
  // 	"night" : "Moderate or heavy snow showers",
  // 	"icon" : 371
  // },
  // {
  // 	"code" : 1261,
  // 	"day" : "Light showers of ice pellets",
  // 	"night" : "Light showers of ice pellets",
  // 	"icon" : 374
  // },
  // {
  // 	"code" : 1264,
  // 	"day" : "Moderate or heavy showers of ice pellets",
  // 	"night" : "Moderate or heavy showers of ice pellets",
  // 	"icon" : 377
  // },
  // {
  // 	"code" : 1273,
  // 	"day" : "Patchy light rain with thunder",
  // 	"night" : "Patchy light rain with thunder",
  // 	"icon" : 386
  // },
  // {
  // 	"code" : 1276,
  // 	"day" : "Moderate or heavy rain with thunder",
  // 	"night" : "Moderate or heavy rain with thunder",
  // 	"icon" : 389
  // },
  // {
  // 	"code" : 1279,
  // 	"day" : "Patchy light snow with thunder",
  // 	"night" : "Patchy light snow with thunder",
  // 	"icon" : 392
  // },
  // {
  // 	"code" : 1282,
  // 	"day" : "Moderate or heavy snow with thunder",
  // 	"night" : "Moderate or heavy snow with thunder",
  // 	"icon" : 395
  // }
};

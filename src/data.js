import { v4 as uuidv4 } from "uuid";
function chillHop() {
  return [
    {
      name: "Aftersome",
      cover:
        "https://cms.chillhop.com/media/20386/squarel732128e1da8fd5f6292ffc1926a2ea840a54f4d0.jpg",
      artist: "Toonorth",
      audio: "https://chill-assets.b-cdn.net/mp3/192/17940-toonorth-aftersome.mp3",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "After Hours",
      cover:
        "https://cms.chillhop.com/media/35631/squarel36fcc61f2d1c707e99f36706700d73229e2e8dff.jpg",
      artist: "Poldoore",
      audio: "https://chill-assets.b-cdn.net/mp3/192/36941-poldoore-after-hours.mp3",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Flushing the Stairs",
      cover:
        "https://cms.chillhop.com/media/9975/squarel6defa6c89a6902fdd84bccd720c2b8fd29c40990.jpg",
      artist: "Leavv",
      audio: "https://chill-assets.b-cdn.net/mp3/192/9916-leavv-flushing-the-stairs.mp3",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Goodbye",
      cover:
        "https://cms.chillhop.com/media/73677/squarelb1f13b18de0af32a1bf083bc7fd4fd3a2033406d.jpg",
      artist: "Ian Ewing",
      audio: "https://stream.chillhop.com/mp3/71671",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Cruisin'",
      cover:
        "https://cms.chillhop.com/media/63530/squarel6f0daa06bb93143d1b7660298eabe1d95b9eb983.jpg",
      artist: "Aves",
      audio: "https://chill-assets.b-cdn.net/mp3/192/65376-aves-cruisin.mp3",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    //ADD MORE HERE
  ];
}

export default chillHop;

import { TimelineCharacter } from "../models/timelineCharacter.type";

/* For reference 
Room
1 - Outside
2 - Biggest room (mostly mine)
3 - Other room
4 - Smallest
*/

export const characters: TimelineCharacter[] = [
  {
    name: "Felix",
    arrival: "01/01/2017",
    departure: "21/05/2021",
    img: "felix.png",
    room: 1,
  },
  {
    name: "Daz",
    arrival: "30/05/2017",
    departure: "15/05/2022",
    img: "daz.png",
    room: 2,
  },
  {
    name: "Nick",
    arrival: "01/01/2017",
    departure: "18/08/2019",
    img: "nick.png",
    room: 3,
  },
  {
    name: "George",
    arrival: "17/10/2017",
    departure: "01/01/2018",
    img: "george.png",
    room: 4,
  },
  {
    name: "Xin",
    arrival: "02/01/2018",
    departure: "12/12/2018",
    img: "xin.png",
    room: 4,
  },
  {
    name: "Stymo",
    arrival: "01/01/2019",
    departure: "27/08/2019",
    img: "stymo.png",
    room: 4,
  },
  {
    name: "Jono",
    arrival: "29/09/2019",
    departure: "19/12/2021",
    img: "jono.png",
    room: 3,
  },
  {
    name: "Brendo",
    arrival: "22/05/2022",
    departure: "17/01/2023",
    img: "brendo.png",
    room: 1,
  },
  {
    name: "Ash",
    arrival: "28/08/2019",
    img: "ash.png",
    room: 4,
    departure: "09/07/2023",
  },
  {
    name: "Leeroy",
    arrival: "02/02/2022",
    room: 3,
    img: "liam.png",
    departure: "09/07/2023",
  },
  {
    name: "Will",
    arrival: "06/08/2022",
    room: 2,
    img: "will.png",
    departure: "09/07/2023",
  },
];

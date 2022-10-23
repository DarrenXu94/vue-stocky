export interface TimelineCharacter {
  name: string;
  arrival: string;
  departure?: string;
  img: string;
  room: number;
}
export interface CharacterNodeType extends TimelineCharacter {
  date: string;
  status?: string;
}

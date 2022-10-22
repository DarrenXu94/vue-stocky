export interface TimelineCharacter {
  name: string;
  arrival: string;
  departure?: string;
  img: string;
}

export interface CharacterNode extends TimelineCharacter {
  date: string;
  status?: string;
}

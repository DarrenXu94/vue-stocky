import { defineStore } from "pinia";
import { CharacterNodeType } from "../models/timelineCharacter.type";

export const useCharacterStore = defineStore("characters", {
  state: () => ({ characters: [] as CharacterNodeType[] }),

  actions: {
    setCharacter(char: CharacterNodeType) {
      const existingRoom = this.characters.findIndex(
        (character) => character.room === char.room
      );

      if (existingRoom !== -1) {
        this.characters[existingRoom] = char;
      } else {
        this.characters.push(char);
      }
    },
  },
});

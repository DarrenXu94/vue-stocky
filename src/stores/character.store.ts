import { defineStore } from "pinia";
import { CharacterNodeType } from "../models/timelineCharacter.type";

// Make into stack

export const useCharacterStore = defineStore("characters", {
  state: () => ({ characters: [] as CharacterNodeType[] }),

  actions: {
    setCharacter(char: CharacterNodeType) {
      // this.characters[char.room - 1].push(char);

      const existingRoom = this.characters.findIndex(
        (character) => character.room === char.room
      );

      if (existingRoom !== -1) {
        this.characters[existingRoom] = char;
      } else {
        this.characters.push(char);
      }
    },
    removeCharacter(char: CharacterNodeType) {
      // this.characters[char.room - 1].pop();
      const existingRoom = this.characters.findIndex(
        (character) => character.room === char.room
      );

      this.characters.splice(existingRoom, 1);
    },
  },
});

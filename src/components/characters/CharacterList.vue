<template>
  <div class="character-list">
    <div class="character-container">
      <Character v-for="char of characters" :key="char.name" :char="char" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCharacterStore } from "../../stores/character.store";
import Character from "./Character.vue";
import { characters } from "../../consts/characters";

export default defineComponent({
  name: "CharacterList",
  components: {
    Character,
  },
  setup() {
    const characterStore = useCharacterStore();
    return { characterStore };
  },
  data() {
    return {
      characters,
    };
  },
});
</script>
<style lang="scss">
.character-list {
  position: fixed;
  top: 30%;
  right: 0;
  transform: translate(0%, -50%);
  height: calc(100px * 4);
  width: 75px;

  .character-container {
    position: relative;
  }
}
</style>

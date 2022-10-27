<template>
  <div class="character-list">
    <div v-for="(char, idx) in characterStore.characters" :key="idx">
      <Character v-if="char" :char="char" />

    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCharacterStore } from '../../stores/character.store';
import Character from './Character.vue';

export default defineComponent({
  name: 'CharacterList',
  components: {
    Character
  },
  setup() {
    const characterStore = useCharacterStore()

    return { characterStore }
  },
  data() {
    return {
    };
  },
});
</script>
<style lang="scss">
.character-list {
  position: fixed;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);

}
</style>
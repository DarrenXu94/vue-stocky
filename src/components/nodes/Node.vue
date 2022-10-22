<template>
  <div>
    <div v-if="instanceOfCharacter(nodeData)">
      Character
      {{nodeData.name}}
    </div>
    <div v-else>
      Event
      {{nodeData.title}}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { CharacterNode, TimelineCharacter } from '../../models/timelineCharacter.type';
import { TimelineEvent } from '../../models/timelineEvent.type';

function instanceOfCharacter(object: any): object is CharacterNode {
  return 'name' in object;
}

export default defineComponent({
  name: 'Node',
  props: {
    nodeData: {
      type: Object as PropType<CharacterNode | TimelineEvent>,
      required: true,
    }
  },
  components: {
  },

  methods: {
    instanceOfCharacter(object: any): object is CharacterNode {
      return 'name' in object;
    }
  },
  data() {
    return {
    };
  },
});
</script>

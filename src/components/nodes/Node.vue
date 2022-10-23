<template>
  <div class="timeline-node">
    <CharacterNode v-if="instanceOfCharacter(nodeData)" :node-data="nodeData" />
    <Year v-else-if="instanceOfYear(nodeData)" :node-data="nodeData" />
    <EventNode v-else :node-data="nodeData" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { CharacterNodeType } from '../../models/timelineCharacter.type';
import { TimelineEvent } from '../../models/timelineEvent.type';
import { NodeTimelineYearType } from '../../models/timelineYear.type';
import CharacterNode from './variants/CharacterNode.vue';
import EventNode from './variants/EventNode.vue';
import Year from './variants/Year.vue';

export default defineComponent({
  name: 'Node',
  props: {
    nodeData: {
      type: Object as PropType<CharacterNodeType | TimelineEvent | NodeTimelineYearType>,
      required: true,
    }
  },
  components: {
    CharacterNode,
    EventNode,
    Year
  },

  methods: {
    instanceOfCharacter(object: any): object is CharacterNodeType {
      return 'name' in object;
    },
    instanceOfYear(object: any): object is NodeTimelineYearType {
      return 'year' in object;
    }
  },
  data() {
    return {
    };
  },
});
</script>

<style lang="scss">
.timeline-node {
  // display: flex;
  // justify-content: center;

  img {
    max-width: 700px;
    height: 300px;
    margin: 8px;
    border-radius: 15px;
  }
}
</style>
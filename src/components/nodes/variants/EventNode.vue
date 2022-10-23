<template>
  <div class="event-node">

    <div class="event-node-img-container">
      <div v-for="pic of nodeData.pics" :key="pic">
        <img :src="'/events/' + pic" :alt="nodeData.title">
      </div>
    </div>

    <div class="event-node-text">
      <h3>{{nodeData.title}}</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { TimelineEvent } from '../../../models/timelineEvent.type';

export default defineComponent({
  name: 'EventNode',
  components: {
  },
  props: {
    nodeData: {
      type: Object as PropType<TimelineEvent>,
      required: true,
    }
  },
  data() {
    return {
    };
  },
});
</script>
<style lang="scss">
@import '../../../styles/mixins';

.event-node {
  width: 80%;
  margin: auto;
  display: flex;

  &-text,
  &-img-container {
    width: 50%;
  }

  &-text {
    @include border-line;
    position: relative;

    &::before {
      @include timeline-dot;
    }
  }

  &-img-container {
    padding-right: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
}
</style>
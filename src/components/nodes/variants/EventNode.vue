<template>
  <div class="event-node">

    <div class="event-node-img-container">
      <div class="event-node-img-container-content">
        <div v-for="pic of nodeData.pics" :key="pic">
          <img :src="'/events/' + pic" :alt="nodeData.title">
        </div>
      </div>
    </div>

    <div class="event-node-text">
      <div class="event-node-text-content">
        <h3>{{nodeData.title}}</h3>
      </div>
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

  &:after {
    @include border-line;
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    height: 100%;
    left: 50%;
    transform: translate(-50%);
  }

  &-text,
  &-img-container {
    width: 50%;
  }

  &-text {
    position: relative;

    &-content {
      padding-left: var(--timeline-spacing);

    }

    &::before {
      @include timeline-dot;

    }
  }

  &-img-container {
    &-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      padding-right: var(--timeline-spacing);
    }
  }
}
</style>
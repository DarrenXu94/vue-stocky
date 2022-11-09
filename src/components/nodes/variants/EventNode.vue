<template>
  <div class="event-node">
    <div class="event-node-img-container">
      <div class="event-node-img-container-content">
        <div v-for="pic of nodeData.pics" :key="pic" class="event-node-img-container-img">
          <img :src="'/events/' + pic" :alt="nodeData.title">
        </div>
      </div>
    </div>
    <div class="event-node-padding" v-if="!nodeData.pics"></div>

    <div class="event-node-text" :class="{               noSpacing: nodeData.pics               }">
      <div class="event-node-text-content">
        <h3>{{ nodeData.title }}</h3>
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
  display: flex;
  align-items: center;

  &-text {
    padding-left: var(--timeline-spacing);

    &.noSpacing {
      padding-left: 15px;
      @include for-tablet-portrait-up {
        padding-left: 40px;
      }
    }
  }

  &-padding {
    width: 20%;
    position: relative;

    &::after {
      content: "";
      width: 30px;
      height: 30px;
      background: white;
      border: 2px solid var(--primary-color);
      box-shadow: 3px 3px 0px var(--secondary-color);
      box-shadow: 3px 3px 0px var(--secondary-color);
      border-radius: 50%;
      position: absolute;
      right: 5px;
      top: -15px;
    }
  }

  &:after {
    @include border-line;
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    height: 100%;
    transform: translate(-50%);
  }

  &-img-container-img {
    &:not(:first-child) {
      display: none;
    }
  }

  @include for-tablet-portrait-up {
    .event-node-padding {
      display: none;
    }

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
      transform: translate(-50%);
    }

    &-text,
    &-img-container,
    &-padding {
      width: 50%;
    }

    &-text {
      position: relative;

      &-content {
        padding-left: calc(var(--timeline-spacing)/2.5);
      }

      &::before {
        @include timeline-dot;
        left: 5px;

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
}
</style>
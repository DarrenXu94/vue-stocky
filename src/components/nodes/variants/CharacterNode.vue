<template>
  <!-- <div class="character-node" v-intersection-observer="[onIntersectionObserver, {
    rootMargin: '-50% 0% -50% 0%',
    threshold: 0
  }]"> -->
  <div class="character-node" :id="computedId()">
    <div class="character-node-padding"></div>
    <div class="character-node-text">
      <div class="character-node-text-content">

        <h3>{{ nodeData.name }}</h3>
        <p v-if="nodeData.status === 'leaving'">Farewell</p>
        <p v-else>Welcome</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { CharacterNodeType } from '../../../models/timelineCharacter.type';
import { useCharacterStore } from '../../../stores/character.store';
import { gsap } from 'gsap';

import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const isLocalHost =
  location.hostname === "localhost" ||
  location.hostname === "127.0.0.1" ||
  location.hostname === "";

export default defineComponent({
  name: 'CharacterNode',
  mounted() {
    if (this.nodeData.status == 'leaving') return

    const arrivalDiv = '#' + this.nodeData.name
    const departureDiv = '#' + this.nodeData.name + '_leaving'

    let triggerOpts = {
      trigger: arrivalDiv,
      markers: isLocalHost,
      start: "top center",
      end: "top center",
      // endTrigger: departureDiv,
      toggleActions: "play reverse play reverse",
    } as any;

    if (this.nodeData.departure) {
      triggerOpts.endTrigger = departureDiv;
    } else {
      triggerOpts.endTrigger = "body";
      triggerOpts.end = "bottom bottom";
    }

    const projectShrinkTimeline = gsap.timeline({
      scrollTrigger: triggerOpts,
    });

    const renderId = '#' + this.nodeData.name + '_render'
    const shrinkTween = gsap.fromTo(
      renderId,
      { xPercent: 0, opacity: 0 },
      {

        opacity: 1,
      }
    );
    projectShrinkTimeline.add(shrinkTween);

  },
  props: {
    nodeData: {
      type: Object as PropType<CharacterNodeType>,
      required: true,
    }
  },
  setup() {
    const characterStore = useCharacterStore()
    return { characterStore }
  },
  methods: {
    computedId(): string {
      return `${this.nodeData.name}${this.nodeData.status == 'leaving' ? '_leaving' : ''}`
    },
    onIntersectionObserver([{ isIntersecting }]: any) {
      if (isIntersecting && this.nodeData.status !== 'leaving') {
        console.log(this.nodeData.name, 'is on screen')
        this.characterStore.setCharacter(this.nodeData)
      }

      if (isIntersecting && this.nodeData.status == 'leaving') {
        this.characterStore.removeCharacter(this.nodeData)

      }
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

.character-node {
  display: flex;
  align-items: center;

  &-text {
    padding-left: var(--timeline-spacing);

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
}

@include for-tablet-portrait-up {

  .character-node {
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
    &-padding {
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
  }
}
</style>
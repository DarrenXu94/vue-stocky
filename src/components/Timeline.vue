<template>
  <div class="timeline">
    <h1>24 Stocky Timeline</h1>
  </div>
  <div class="main-content">
    <Intro />
    <Node :node-data="node" v-for="(node, idx) of sortedList" :key="idx" />
  </div>
  <CharacterList />
  <div class="bg"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { events } from "../consts/events";
import { characters } from "../consts/characters";
import { years } from "../consts/years";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import {
  CharacterNodeType,
  TimelineCharacter,
} from "../models/timelineCharacter.type";
import { TimelineEvent } from "../models/timelineEvent.type";
import Node from "./nodes/Node.vue";
import { NodeTimelineYearType } from "../models/timelineYear.type";
import Intro from "./Intro.vue";
import CharacterList from "./characters/CharacterList.vue";

dayjs.extend(customParseFormat);

export default defineComponent({
  name: "Timeline",
  components: {
    Node,
    Intro,
    CharacterList,
  },
  beforeMount() {
    const fullCharEvents = characters.reduce(
      (acc: CharacterNodeType[], character: TimelineCharacter) => {
        const toReturn = [...acc];

        const characterStart: any = { ...character };
        characterStart.date = character.arrival;
        toReturn.push(characterStart);

        const characterEnd = { ...character } as CharacterNodeType;
        if (character.departure) {
          characterEnd.date = character.departure;
          characterEnd.status = "leaving";
          toReturn.push(characterEnd);
        }

        return toReturn;
      },
      []
    );

    const timelineYears: NodeTimelineYearType[] = years.map((year) => ({
      ...year,
      date: `01/01/${year.year}`,
    }));

    const fullEventList = [...events, ...fullCharEvents, ...timelineYears];
    // console.log(fullEventList)
    const sortedList = fullEventList.sort(function (a, b) {
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return (
        ((dayjs(b.date, "DD/MM/YYYY") as any) -
          (dayjs(a.date, "DD/MM/YYYY") as any)) *
        -1
      );
    });

    // console.log(sortedList)
    this.sortedList = sortedList;
  },
  data() {
    return {
      sortedList: [] as (
        | CharacterNodeType
        | TimelineEvent
        | NodeTimelineYearType
      )[],
    };
  },
});
</script>

<style lang="scss">
@import "../styles/mixins";

.timeline {
  height: var(--intro-padding);

  h1 {
    @include for-phone-only {
      display: none;
    }

    padding: 50px;

    word-spacing: 100vw;
  }
}

.main-content {
  margin-bottom: 500px;
}

.bg {
  position: fixed;
  top: 0;
  width: 100vw;
  background-image: url("./bg.jpeg");

  /* Set a specific height */
  height: 100vh;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.6;
  z-index: -2;
}
</style>

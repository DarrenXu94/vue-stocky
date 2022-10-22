<template>
  <div>
    <Node :node-data="node" v-for="(node, idx) of sortedList" :key="idx" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { events } from '../consts/events'
import { characters } from '../consts/characters'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { CharacterNode, TimelineCharacter } from '../models/timelineCharacter.type';
import { TimelineEvent } from '../models/timelineEvent.type';
import Node from './nodes/Node.vue';

dayjs.extend(customParseFormat)

export default defineComponent({
  name: 'Timeline',
  components: {
    Node
  },
  beforeMount() {

    const fullCharEvents = characters.reduce((acc: CharacterNode[], character: TimelineCharacter) => {

      const toReturn = [...acc]

      const characterStart: any = { ...character };
      characterStart.date = character.arrival;
      toReturn.push(characterStart)

      const characterEnd = { ...character } as CharacterNode;
      if (character.departure) {
        characterEnd.date = character.departure;
        characterEnd.status = "leaving";
        toReturn.push(characterEnd)
      }

      return toReturn;
    }, [])


    const fullEventList = [
      ...events,
      ...fullCharEvents
    ];
    // console.log(fullEventList)
    const sortedList = fullEventList.sort(function (a, b) {
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return (dayjs(b.date, "DD/MM/YYYY") as any - (dayjs(a.date, "DD/MM/YYYY") as any)) * -1;
    });

    // console.log(sortedList)
    this.sortedList = sortedList;
  },
  data() {
    return {
      sortedList: [] as (CharacterNode | TimelineEvent)[]
    };
  },
});
</script>

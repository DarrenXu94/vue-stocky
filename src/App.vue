<template>
  <Timeline />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Timeline from './components/Timeline.vue';

export default defineComponent({
  name: 'App',
  components: {
    Timeline
  },
  data() {
    return {
    };
  },
});
</script>

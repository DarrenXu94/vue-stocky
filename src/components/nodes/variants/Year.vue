<template>
  <div class="year-node">
    <h2>
      {{ nodeData.year }}
    </h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { NodeTimelineYearType } from '../../../models/timelineYear.type';

export default defineComponent({
  name: 'Year',
  props: {
    nodeData: {
      type: Object as PropType<NodeTimelineYearType>,
      required: true,
    }
  },
  components: {
  },
  data() {
    return {
    };
  },
});
</script>
<style lang="scss">
@import '../../../styles/mixins';

.year-node {
  @include for-phone-only {
    text-align: left;
    @include mobile-timeline-margin;
  }

  text-align: center;

  h2 {
    font-size: 2rem;
  }
}
</style>
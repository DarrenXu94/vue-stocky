<template>
  <div class="intro">
    <h2>
      Stocky
    </h2>
    <h4>
      A sharehouse in time
    </h4>
    <p>
      Welcome to the interactive Stockdale timeline. Stockdale isn't just a household, it is a way of life. The house of
      Stockdale comprises plenty of history which hath been documented below. Scroll down to see the timeline and
      explore the various events and characters.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Intro',
  components: {
  },
  data() {
    return {
    };
  },
});
</script>
<style lang="scss">
@import '../styles/mixins';

.intro {
  text-align: center;
  width: 400px;
  margin: auto;

  :before {
    @include border-line;
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    height: 150px;
    left: 50%;
    transform: translate(-50%);
  }

  h2 {
    font-size: 3rem;
  }

  h4 {
    font-size: 1.5rem;
  }
}
</style>
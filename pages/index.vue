<template>
  <events/>
</template>

<script lang="ts">
import Vue from 'vue'
import Events from '@/components/Events.vue'

export default Vue.extend({

  components: {
    Events
  },
  async fetch({ store, error }) {
      try {
        await store.dispatch('events/fetchEvents')
      } catch (e) {
        error({
          statusCode: 503,
          message: 'Failed to load data. Please try again.'
        })
      }
  },
})
</script>

<template>
  <event-item/>
</template>

<script lang="ts">
import Vue from 'vue'
import EventItem from '@/components/EventItem.vue'

export default Vue.extend({

  components: {
    EventItem
  },
  async fetch({ store, error, params}) {
      try {
        await store.dispatch('events/fetchEvent',params.id)
      } catch (e) {
        error({
          statusCode: 503,
          message: 'Cannot load data.'
        })
      }
  },
})
</script>

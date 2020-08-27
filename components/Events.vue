<template>
  <div class="container mx-auto px-8 py-4">
    <div class="text-3xl text-blue-700">Events</div>
    <table class="table-auto m-4">
      <thead>
        <tr>
          <th class="px-4 py-2">Title</th>
          <th class="px-4 py-2">Locaton</th>
          <th class="px-4 py-2">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(event,index) in events">
          <td class="border px-4 py-2 hover:bg-blue-200 cursor-pointer"><a :href="'/event/' + event.Title.replace(/\s+/g, '-').toLowerCase()">{{ event.Title }}</a></td>
          <td class="border px-4 py-2">{{ event.Location.City}}, {{ event.Location.State}}, {{ event.Location.Country}}  </td>
          <td class="border px-4 py-2">{{ $moment(event.Time).format('DD/MM/YYYY') }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'Events',
  head: {
    title: 'Events'
  },


  data: () => ({

  }),

  computed: {
    ...mapGetters({
         eventsStore: 'events/events',
    }),

    events: {
      get(){
        return this.eventsStore
      },
      set(newValue){
        this.$store.dispatch('events/setEvents', newValue)
      }
    },

  },

  methods: {
      openEvent(title) {
        return redirect('/event/' + title)
        console.log(title);
      }
  }
}
</script>

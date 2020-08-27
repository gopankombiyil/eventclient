<template>
  <div class="container mx-auto px-8 py-4">
    <div class="text-3xl text-blue-700 pb-8">Events</div>
    <div class=""></div>

    <div class="flex mb-12 bg-gray-300 p-2 rounded-md">
      <div class="w-2/5 py-4">
          <label for="given_name">Keyword</label>
          <input name="keyword" type="text" class="p-1 border-solid border-2 border-gray-200" v-model="keyword"/>
      </div>
      <div class="w-1/5 py-4">
          <label for="given_name">City</label>
          <input name="keyword" type="text" class="p-1 border-solid border-2 border-gray-200" v-model="city"/>
      </div>
      <div class="w-1/5 py-4">
          <label for="given_name">Date</label>
          <input name="keyword" type="text" class="p-1 border-solid border-2 border-gray-200" v-model="date"/>
      </div>
      <div class="w-1/5 py-4 text-right">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm" @click="applyFilter()">
          Filter
        </button>
      </div>

    </div>
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
    keyword: null,
    date: null,
    city: null
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
      async applyFilter() {
        let formData = {
          keyword: this.keyword,
          date: this.date,
          city: this.city
        }
        try {
          let res = await this.$store.dispatch("events/fetchEvents", formData);
        } catch (error) {
          console.log(error)
        }
      }
  }
}
</script>

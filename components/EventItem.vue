<template>
  <div class="container mx-auto px-8 py-4">
    <div class="text-3xl text-blue-700">{{ eventitem.Title }}</div>
    <table class="table-auto m-4">
      <tbody>
        <tr>
          <td class="border px-4 py-2 font-bold">Time</td>
          <td class="border px-4 py-2">{{ $moment(eventitem.Time).format('DD/MM/YYYY') }}</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-bold">Location</td>
          <td class="border px-4 py-2">{{ eventitem.Location.City}}, {{ eventitem.Location.State}}, {{ eventitem.Location.Country}}</td>
        </tr>
      </tbody>
    </table>

    <div class="text-xl text-blue-600">Available Seats</div>

    <div class="flex flex-row">
      <div class="av" v-for="seat in eventitem.AvailableSeats">
        {{seat.id}}
      </div>
    </div>

    <div class=""><a href="/">Back</a></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'EventItem',
  head: {
    title: 'Event'
  },


  data: () => ({

  }),

  computed: {
    ...mapGetters({
         eventStore: 'events/eventitem',
    }),

    eventitem: {
      get(){
        return this.eventStore
      },
      set(newValue){
        this.$store.dispatch('events/setEventitem', newValue)
      }
    },

  },

  methods: {

  }
}
</script>
<style scoped>
  .av {
    display: block;
    height: 30px;
    width: 40px;
    margin: 1em;
    padding: .25rem;
    background-color:rgb(0 128 0 / 25%);
  }

</style>

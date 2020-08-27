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

    <div class="text-xl text-blue-600" v-if="eventitem.AvailableSeats">Available Seats</div>

    <div class="flex flex-row">
      <div class="av" v-for="seat in eventitem.AvailableSeats">
        {{seat.id}}
      </div>
    </div>

    <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true"
             data-projection="EPSG:4326" style="height: 400px">
      <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

      <vl-layer-tile id="osm">
          <vl-source-osm></vl-source-osm>
      </vl-layer-tile>
      <vl-feature>
         <vl-geom-point :coordinates="eventPosition"></vl-geom-point>
         <vl-style-box>
              <vl-style-icon src="/media/marker.png" :scale="0.4" :anchor="[0.5, 1]"></vl-style-icon>
         </vl-style-box>
     </vl-feature>

    </vl-map>

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
    zoom: 7.3,
    center: [151.35170, -27.93865],
    rotation: 0,
    eventPosition: [152.72244,-27.93563],
    latlong:[
      {city:'Gold Coast', cord: [153.398158, -28.002449]},
      {city:'Brisbane', cord:[153.023366,-27.453786]},
      {city:'Cairns', cord:[145.734641,-16.881256]} ]
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

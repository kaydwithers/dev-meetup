<template lang="pug">
.meetups
  v-container
    v-layout.mb-2(row wrap v-for='meetup in meetups' :key='meetup.id')
      v-flex(xs12 sm10 md8 offset-sm1 offset-md2)
        v-card.info

          v-container(fluid)
            v-layout(row)
              v-flex(xs5 sm4 md3)
                v-card-media(
                  :src='meetup.imageUrl' 
                  height='130px' 
                )

              v-flex(xs7 sm8 md9)
                v-card-title(primary-title)
                  div
                    h5.white--text.mb-1 {{ meetup.title }}
                    p {{ meetup.date | date }}
                
                v-card-actions
                  v-btn(flat :to='"/meetups/" + meetup.id') 
                    v-icon(left light) arrow_forward
                    | View Meetup
</template>

<script>
export default {
  name: 'meetups',
  data () {
    return {

    }
  },
  computed: {
    meetups () {
      return this.$store.getters.loadedMeetups
    }
  }
}
</script>

<style>

</style>

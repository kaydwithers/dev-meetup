<template lang="pug">
.meetup
  v-container
    v-layout(row wrap)
      v-flex(xs12)
        v-card
          v-card-title
            h6.primary--text {{ meetup.title }}

          v-card-media(
            :src='meetup.imageUrl' 
            height='400px' 
          )

          v-card-text
            .info--text.mb-1 {{ meetup.date | date }} — {{ meetup.location }}
            p {{ meetup.description }}

          v-card-actions
            v-spacer
            v-btn.primary Register

</template>

<script>
export default {
  props: ['id'],
  name: 'meetup',
  data () {
    return {

    }
  },
  computed: {
    meetup () {
      return this.$store.getters.loadedMeetup(this.id)
    }
  }
}
</script>

<style>

</style>

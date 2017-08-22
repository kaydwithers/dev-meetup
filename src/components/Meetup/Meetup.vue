<template lang="pug">
.meetup
  v-container
    v-layout(row wrap)
      v-flex(xs12)
        v-card
          v-card-title
            h6.primary--text My Meetup

          v-card-media(
            src='https://unsplash.it/1440/500?random' 
            height='400px' 
          )

          v-card-text
            .info--text 17th July 2017 - Where it takes place
            | Lorem ipsum

          v-card-actions
            v-spacer
            v-btn.primary Register

</template>

<script>
export default {
  name: 'meetup',
  data () {
    return {

    }
  }
}
</script>

<style>

</style>

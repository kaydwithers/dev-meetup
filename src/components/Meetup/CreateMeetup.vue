<template lang="pug">
.create-meetups
  v-container

    v-layout(row)
      v-flex(xs12 sm6 offset-sm3)
        h4.secondary--text Create a new Meetup

    v-layout(row)
      v-flex(xs12)
        form(@submit.prevent='onCreateMeetup')
          v-layout(row)
            v-flex(xs12 sm6 offset-sm3)
              v-text-field(
                name='title'
                label='Title'
                id='title'
                v-model='title'
                required
              )

          v-layout(row)
            v-flex(xs12 sm6 offset-sm3)
              v-text-field(
                name='location'
                label='Location'
                id='location'
                v-model='location'
                required
              )

          v-layout(row)
            v-flex(xs12 sm6 offset-sm3)
              v-text-field(
                name='imageUrl'
                label='Image URL'
                id='image-url'
                v-model='imageUrl'
                required
              )

          v-layout(row)
            v-flex(xs12 sm6 offset-sm3)
              img.w-100(:src='imageUrl' alt='')

          v-layout(row)
            v-flex(xs12 sm6 offset-sm3)
              v-text-field(
                name='description'
                label='Description'
                id='description'
                v-model='description'
                multi-line
                required
              )

          v-layout(row)
            v-flex(xs12 sm6 offset-sm3)
              h4 Choose a Date &amp; Time

          v-layout.mb-2(row)
            v-flex(xs12 sm6 offset-sm3)
              v-date-picker(v-model='date')

          v-layout(row)
            v-flex(xs12 sm6 offset-sm3)
              v-time-picker(v-model='time' format='24hr')

          v-layout(row)
            v-flex(xs12 sm6 offset-sm3)
              v-btn.primary(
                :disabled='!formIsValid'
                type='submit'
              ) Create Meetup

</template>

<script>
export default {
  name: 'create-meetups',
  data () {
    return {
      date: new Date(),
      description: '',
      imageUrl: '',
      location: '',
      time: new Date(),
      title: ''
    }
  },

  computed: {
    formIsValid () {
      return this.description !== '' &&
        this.imageUrl !== '' &&
        this.location !== '' &&
        this.title !== ''
    },
    submittableDateTime () {
      const date = new Date(this.date)
      if (typeof this.time === 'string') {
        const hours = this.time.match(/^(\d+)/)[1]
        const minutes = this.time.match(/:(\d+)/)[1]
        date.setHours(hours)
        date.setMinutes(minutes)
      } else {
        date.setHours(this.time.getHours())
        date.setHours(this.minutes.getMinutes())
      }
      return date
    }
  },

  methods: {
    onCreateMeetup () {
      const meetupData = {
        date: this.submittableDateTime,
        description: this.description,
        imageUrl: this.imageUrl,
        location: this.location,
        title: this.title
      }
      this.$store.dispatch('createMeetup', meetupData)
      this.$router.push('/meetups')
    }
  }
}
</script>

<style>

</style>

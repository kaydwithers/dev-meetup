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
      description: '',
      imageUrl: '',
      location: '',
      title: ''
    }
  },

  computed: {
    formIsValid () {
      return this.title !== '' &&
        this.location !== '' &&
        this.imageUrl !== '' &&
        this.description !== ''
    }
  },

  methods: {
    onCreateMeetup () {
      const meetupData = {
        date: new Date(),
        description: this.description,
        imageUrl: this.imageUrl,
        location: this.location,
        title: this.title
      }
      this.$store.dispatch('createMeetup', meetupData)
    }
  }
}
</script>

<style>

</style>

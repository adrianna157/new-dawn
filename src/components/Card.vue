<template>
    <v-card
      class="mx-auto"
      max-width="344"
    >
      <v-card-text>
        <div>Hello {{name}} this is the Word of the Day</div>
        <p class="text-h4 text--primary">
          be•nev•o•lent
        </p>
        <p>adjective</p>
        <div class="text--primary">
          well meaning and kindly.<br>
          "a benevolent smile"
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn
          text
          color="deep-purple accent-4"
        >
          Learn More
        </v-btn>
      </v-card-actions>
    </v-card>
  </template>
<script>
export default {
    name: 'Card',
    props: {
        name: {
            type: String,
        }
    }
}
</script>
<style>
    
</style>
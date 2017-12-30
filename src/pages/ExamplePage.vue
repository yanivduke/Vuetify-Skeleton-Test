<template>
    <v-container>
        <h3 class="my-3">Examples</h3>
        <h4>Cards</h4>
        <v-card>
            <v-card-row class="blue-grey darken-1">
                <v-card-title>
                    <span class="white--text">Card title</span>
                </v-card-title>
            </v-card-row>
            <v-card-row img="https://i.pinimg.com/236x/3f/1b/14/3f1b14135751f592b8aa8b89ce0eae54--green-river-rivers.jpg" height="300px"></v-card-row>
            <v-card-text>
                <p>
                    Vuetify test
                </p>
            </v-card-text>
            <v-card-row actions class="blue-grey darken-1">
                <v-btn flat class="white--text">button</v-btn>
                <v-spacer></v-spacer>
                <v-icon class="white--text">explore</v-icon>
            </v-card-row>
        </v-card>
        <br>
        
     
    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },

    mounted () {
    }
  }
</script>

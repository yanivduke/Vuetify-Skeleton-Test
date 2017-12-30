
<template>
  <v-card class="grey lighten-4 elevation-0">
    <v-card-text>
      <v-container fluid>
        <v-layout row>
          <v-flex xs8>
            <v-text-field
              name="username"
              label="username"
              id="username"
              hint="At least 6 characters"
            ></v-text-field>
            <v-text-field
              name="password"
              label="password"
              hint="At least 8 characters"
              min="8"
              :append-icon="'visibility_off'"
              :append-icon-cb="() => true"
              :type="'password'"
            ></v-text-field>
          </v-flex>
         
        </v-layout>
         <v-btn
            light
            class="blue-grey"
            @click.native.stop="login"
            >
            Login
          </v-btn>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script type="text/babel">

  import Vue from 'vue';
  export default {
    data () {
      return {
        isAuth: false,
      }
    },

    methods: {
      login() {
        this.isAuth = true;
        this.$emit('contextIsAuth', true);
      }
      
    },

    events: {
        contextIsAuth: function () {
            
        },
    },
  }
</script>

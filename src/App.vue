<template>
    <v-app id="mainframe">
        <v-navigation-drawer persistent v-model="drawer" v-if="isLoggedin">
            <v-list>
                <v-list-tile>
                    <v-list-tile-content>
                        <v-list-tile-title >
                            <span>Menu</span>
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-divider></v-divider>
                <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-tile :href="item.href" :router="item.router">
                        <v-list-tile-action>
                            <v-icon light v-html="item.icon"></v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title v-html="item.title"></v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar>
            <v-toolbar-side-icon light @click.native.stop="drawer = !drawer" v-if="isLoggedin"></v-toolbar-side-icon>
            <v-toolbar-title>VueBuilder</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn light icon @click.native.stop="logout">
                <v-icon>person</v-icon>
            </v-btn>
        </v-toolbar>
        <main v-if="isLoggedin">
            <v-fade-transition mode="out-in">
                <router-view></router-view>
            </v-fade-transition>
        </main>
        <LoginPage v-on:contextIsAuth=SetAuth($event) v-if="!isLoggedin"></LoginPage>
        <v-footer class="indigo">
            <span>© 2017 - VueBuilder</span>
        </v-footer>
    </v-app>
</template>

<script type="text/babel">
  import Vue from 'vue';
  Vue.component('LoginPage', require('./LoginPage.vue'));

  export default {
    data () {
      return {
        isLoggedin: false,
        drawer: true,
        items: [{
          href: 'home',
          router: true,
          title: 'Home',
          icon: 'home',
        },{
          href: 'Test1',
          router: true,
          title: 'Test1',
          icon: 'home',
        }, {
          href: 'SDesign',
          router: true,
          title: 'SDesign',
          icon: 'home',
        }, {
          href: 'examples',
          router: true,
          title: 'Example',
          icon: 'extension',
        }, {
          href: 'about',
          router: true,
          title: 'About',
          icon: 'domain',
        }]
      }
    },
    methods: {
      

      logout() {
        this.isLoggedin = false;
      },

      SetAuth(sts) {
        this.isLoggedin = sts;
      },
      computed:
      {
        openSidebar() {
            this.sidebar = !this.sidebar;
        }
      }
      
    }

  
  }
</script>

<style lang="stylus">
    @import '../node_modules/vuetify/src/stylus/main';
    @import 'css/main.css';
</style>

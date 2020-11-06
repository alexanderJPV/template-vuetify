<template>
<v-container>
    <v-navigation-drawer
      color="indigo"
      v-model="mini"
      app
      dark
    >
    <v-layout column align-center>
      <v-flex class="mt-5">
        <v-avatar
          size="70"
          color="red"
        >
            <img src="https://randomuser.me/api/portraits/men/81.jpg">
        </v-avatar>
      </v-flex>
      <v-flex>
        <p class="white--text mt-1">Alexander ray</p>
      </v-flex>
    </v-layout>
    <v-list
        dense
        nav
        class="py-0"
      >
        <!-- <v-list-item two-line :class="'px-0'">
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/men/81.jpg">
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>AdminSystem</v-list-item-title>
            <v-list-item-subtitle>Ray</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item> -->
        <v-divider></v-divider>
        <template v-for="item in computedMenu">
          <template v-if="item.children">
              <v-list-group
                :prepend-icon="item.meta.icon"
                no-action
                style="color: white !important"
              >
                <template v-slot:activator>
                  <v-list-item-title>{{item.meta.title}}</v-list-item-title>
                </template>
                 <v-list-item
                    v-for="subItem in item.children"
                    :key="subItem.meta.title"
                    :to="subItem.path"
                  >
                  <template>
                    <v-list-item-content>
                      <v-list-item-title>{{subItem.meta.title}}</v-list-item-title>
                    </v-list-item-content>
                  </template>
                </v-list-item>
            </v-list-group>
          </template>
          <template v-else>
            <v-list-item
              :key="item.title"
              link
              :to='item.path'
            >
              <v-list-item-icon>
                <v-icon>{{ item.meta.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.meta.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </template>
      </v-list>
</v-navigation-drawer>
</v-container>
</template>
<script>
import vuetify from 'vuetify/lib'
// Utilities
import { mapState, mapMutations } from 'vuex'
import { routes } from '@/router'
export default{
    data() {
    return {
      items: [
        { title: 'Dashboard', icon: 'mdi-monitor', to:'/dashboard', children:false },
        { title: 'Profile', icon: 'mdi-account', to:'/profile',children:true },
        { title: 'Tables', icon: 'mdi-clipboard-outline',children:true },
        { title: 'Forms', icon: 'mdi-book-open',children:true },
        { title: 'Modals', icon: 'mdi-receipt',children:true },
        { title: 'UI Components', icon: 'mdi-tools',children:true },
        { title: 'Photos', icon: 'mdi-image',children:true },
        { title: 'Icons', icon: 'mdi-grease-pencil',children:true},
        { title: 'Notifications', icon: 'mdi-bell',children:false},
        { title: 'About', icon: 'mdi-help-box',children:false },
      ],
      admins: [
        ['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-cog-outline'],
      ],
    }
  },
  computed: {
    ...mapState(['drawer']),
    mini: {
      get: function() {
        return this.$store.state.drawer
        // :mini-variant="mini"
        // :expand-on-hover="mini"
        // permanent
        // hide-overlay
        // var aux = this.$vuetify.breakpoint.mdAndDown
        // return aux;
      },
      set: function(val) {
        this.$store.commit('SET_DRAWER', val)
      }
    },
    computedMenu(){
      return routes[4].children;
    }
  },
  // created: function(){
  //   console.log(routes[2].children);
  // },
  methods:{
    mostrarestado(){
      alert(routes)
    },
  },
}
</script>

    <template>
  <!-- Navbar head-->
    <v-app-bar
        absolute
        app
        color="indigo lighten-5"
        flat
        height="65"
    >
        <!--XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxx Boton repliegue -->
        <v-btn
            class="mr-3 indigo--text"
            elevation="1"
            fab
            small
            @click="setDrawer(!drawer)"
        >
            <v-icon v-if="!drawer">mdi-menu</v-icon>
            <v-icon v-else>mdi-view-quilt</v-icon>
        </v-btn>
        <!--Titulo-->
        <v-toolbar-title
            class="hidden-sm-and-down font-weight-light indigo--text"
        />
        <v-spacer />
        <v-text-field
            label="Search"
            color="secondary"
            hide-details
            style="max-width: 165px;"
        >
            <template
                v-slot:append-outer
            >
                <v-btn
                    class="mt-n2 indigo--text"
                    elevation="1"
                    fab
                    small
                >
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
            </template>
        </v-text-field>
        <div class="mx-3" />
        <v-btn
            class="ml-2 indigo--text"
            min-width="0"
            text
            fab
            to="/"
        >
            <v-icon>mdi-view-dashboard</v-icon>
        </v-btn>
        <!-- DropDown Icon -->
        <v-menu
            bottom
            left
            offset-y
            origin="top right"
            transition="scale-transition"
        >
          <template v-slot:activator="{on}">
            <v-btn
                class="ml-2 indigo--text"
                min-width="0"
                text
                fab
                v-on="on"
            >
                <v-icon>mdi-account</v-icon>
            </v-btn>
            </template>
            <v-list
                :tile="false"
                nav
            >
                <div>
                    <app-bar-item>
                        <v-list-item-title @click="method" v-text="`Alexander Perez`"/>
                    </app-bar-item>
                    <app-bar-item>
                        <v-list-item-title v-text="`Mi cuenta`"/>
                    </app-bar-item>
                    <app-bar-item>
                        <v-list-item-title v-text="`Cambiar de sesion`"/>
                    </app-bar-item>
                    <app-bar-item>
                        <v-list-item-title  v-text="`Salir`"/>
                    </app-bar-item>
                </div>
            </v-list>
        </v-menu>
        <!-- View route system start-->
        <v-toolbar-items v-if="drawer" dense slot="extension">
            <v-icon class="indigo--text ml-1">mdi-home</v-icon>
                <v-breadcrumbs :items="rutasText" class="pa-3"></v-breadcrumbs>
        </v-toolbar-items>
        <!-- View route system end-->
    </v-app-bar>
</template>
<script>
// Components
import { VHover, VListItem } from 'vuetify/lib'
import { mapState, mapMutations } from 'vuex'
export default {
     components: {
      AppBarItem: {
        render (h) {
          return h(VHover, {
            scopedSlots: {
              default: ({ hover }) => {
                return h(VListItem, {
                  class: {
                    'black--text': !hover,
                    'white--text indigo elevation-5': hover,
                  },
                  props: {
                    dark: hover,
                  },
                }, this.$slots.default)
              },
            },
          })
        },
      },
    },
    data: () => ({
       nombre: 'Home',
       notifications: [
        'Alexander perez',
        'Cambiar de Cuenta',
        'Mas informacion',
        'Salir',
      ],
    }),
    computed:{
        ...mapState(['drawer']),
        rutasText() {
             const { matched } = this.$route
                return matched.map((route, index) => {
                    const to = index === matched.length - 1? this.$route.path: route.path || route.redirect
                    const text = this.$route.matched[index].name
                    // console.log('index :',index);
                    // console.log('matched :',matched.length-1);
                    // console.log('==>',this.$route.path,'++++>',route.path);
                    return {
                        text: text,
                        to: to,
                        exact: true,
                        disabled: false
                    }
                })
        },
    },
    methods:{
        ...mapMutations({
            setDrawer: 'SET_DRAWER',
        }),
        method(){
            alert(this.drawer);
        },
    },
    created: function(){
        // const { matched } = this.$route
        // return matched.map((route, index) => {
        //     const to = index === matched.length - 1? this.$route.path: route.path || route.redirect
        //     console.log(text);
        //     return {
        //         text: text,
        //         to: to,
        //         exact: true,
        //         disabled: false
        //     }
        // })
        // console.log('hola mundo carajo');
        // console.log(this.$route);
    }
}
</script>

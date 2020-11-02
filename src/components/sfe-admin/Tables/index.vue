<template>
<v-container fluid>
    <!-- Sample Table start -->
    <v-row>
        <v-col cols="12">
            <v-card>
                <v-card-title>
                    Simple Table<code>v-simple-table</code>
                </v-card-title>
                <v-simple-table>
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th class="text-left">
                            Id
                        </th>
                        <th class="text-left">
                            Value
                        </th>
                        <th class="text-left">
                            Name
                        </th>
                        <th class="text-left">
                            Calories
                        </th>
                        <th class="text-left">
                            Fat
                        </th>
                        <th class="text-left">
                            Carbs
                        </th>
                        <th class="text-left">
                            Protein
                        </th>
                        <th class="text-left">
                            Iron%
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                        v-for="(item,index) in basic.items"
                        :key="item.name"
                        >
                            <td>{{ index }}</td>
                            <td>{{ item.value }}</td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.calories }}</td>
                            <td>{{ item.fat }}</td>
                            <td>{{ item.carbs }}</td>
                            <td>{{ item.protein }}</td>
                            <td>{{ item.iron }}</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
            </v-card>
        </v-col>
    </v-row>
    <!-- Sample Table start -->
    <!-- Data Table start -->
    <v-row>
        <v-col cols="12">
            <v-card>
                <v-card-title>
                    Data Table <code>v-data-table</code>
                </v-card-title>
                <v-card-text>
                    <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                    ></v-text-field>
                </v-card-text>
                <v-data-table
                    :headers="basic.headers"
                    :items="basic.items"
                    :search="search"
                    class="elevation-1"
                >
                </v-data-table>
            </v-card>
        </v-col>
    </v-row>
    <!-- Data Table end -->
    <v-row>
        <v-col cols="12">
            <v-card>
                <v-card-title>
                    Complex Data Table <code>v-data-table</code>
                </v-card-title>
                <v-card-text class="layout">
                    <v-text-field
                        prepend-icon="search"
                        placeholder="Type something"
                        v-model="search"
                        hide-details
                    ></v-text-field>
                    <v-btn icon> <v-icon>filter_list</v-icon> </v-btn>
                </v-card-text>
                <v-data-table
                    :headers="complex.headers"
                    :items="complex.items"
                    :search="search"
                    show-select
                    class="elevation-1"
                    :footer-props="{
                        itemsPerPageOptions: [5,10,20,50]
                    }"
                >
                  <template v-slot:item.avatar="{ item }">
                    <v-avatar class="ma-3">
                      <img :src="item.avatar" alt="avatar" />
                    </v-avatar>
                  </template>
                  <template v-slot:item.action="{ item }">
                      <v-menu>
                          <template v-slot:activator="{ on: menu }">
                              <v-tooltip bottom>
                                  <template v-slot:activator="{ on: tooltip }">
                                      <v-btn icon v-on="{ ...menu }">
                                          <v-icon>mdi-dots-vertical</v-icon>
                                      </v-btn>
                                  </template>
                              </v-tooltip>
                          </template>
                          <v-list class="pa-0" dense>
                              <v-list-item
                                  v-for="action in actions"
                                  :key="action.text"
                                  @click="action.click(item)"
                              >
                                  <v-list-item-icon class="mr-2">
                                  <v-icon small>{{ action.icon }}</v-icon>
                                  </v-list-item-icon>
                                  <v-list-item-title>{{ action.text }}</v-list-item-title>
                              </v-list-item>
                          </v-list>
                      </v-menu>
                  </template>
                </v-data-table>
            </v-card>
        </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            Crud Date table <code>v-data-table</code> using a <code>v-dialog</code>
          </v-card-title>
          <v-card-text>
            <v-data-table
              :headers="basic.headers"
              :items="basic.items"
              sort-by="calories"
              class="elevation-1"
            >
              <template v-slot:top>
                <v-toolbar flat>
                  <v-toolbar-title>My CRUD</v-toolbar-title>
                  <v-divider
                    class="mx-4"
                    inset
                    vertical
                  ></v-divider>
                  <v-spacer></v-spacer>
                  <v-dialog
                    v-model="basic.dialog"
                    max-width="500px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        color="primary"
                        dark
                        class="mb-2"
                        v-bind="attrs"
                        v-on="on"
                      >
                        NEW ITEM
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="headline">{{formTitle}}</span>
                      </v-card-title>
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                v-model="basic.editedItem.name"
                                label="Name"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                v-model="basic.editedItem.calories"
                                label="Calories"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                               <v-text-field
                                  v-model="basic.editedItem.fat"
                                  label="Fat (g)"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                v-model="basic.editedItem.carbs"
                                label="Carbs (g)"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                v-model="basic.editedItem.protein"
                                label="Protein (g)"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                v-model="basic.editedItem.iron"
                                label="Iron (%)"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="red darken-1"
                          text
                          @click="close">Cancel</v-btn>
                        <v-btn
                          color="blue darken-1"
                          text
                          @click="save">Save</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  <v-dialog v-model="basic.dialogDelete" max-width="500px">
                    <v-card>
                      <v-card-title class="headline">
                        Are you sure you want to delete this item?
                      </v-card-title>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="red darken-1"
                          text
                          @click="closeDelete"
                        >Cancel
                        </v-btn>
                        <v-btn
                          color="indigo darken-1"
                          text
                          @click="deleteItemConfirm"
                        >Ok</v-btn>
                        <v-spacer></v-spacer>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-toolbar>
              </template>
              <template v-slot:item.calories="{ item }">
                <v-chip
                  :color="getColor(item.calories)"
                  dark
                >
                  {{ item.calories }}
                </v-chip>
              </template>
              <template  v-slot:item.actions="{ item }">
                <v-icon
                  small
                  class="mr-2"
                  @click="editItem(item)"
                >mdi-pencil</v-icon>
                <v-icon
                  small
                  @click="deleteItem(item)"
                >mdi-delete</v-icon>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
</v-container>
</template>
<script>
import { Items } from '@/apidata/user'
export default {
    data() {
    return {
      search: '',
      complex: {
        selected: [],
        headers: [
          {
            text: 'Avatar',
            value: 'avatar'
          },
          {
            text: 'Name',
            value: 'name'
          },
          {
            text: 'Email',
            value: 'email'
          },
          {
            text: 'Phone',
            value: 'phone'
          },
          {
            text: 'Action',
            value: 'action'
          }
        ],
        items: Items
      },
      basic: {
        dialog: false,
        dialogDelete: false,
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
        editedIndex: -1,
        editedItem: {
          name: '',
          calories: 0,
          fat: 0,
          carbs: 0,
          protein: 0,
          iron:'',
        },
        defaultItem: {
          name: '',
          calories: 0,
          fat: 0,
          carbs: 0,
          protein: 0,
          iron:'',
        },
        items: [
          {
            value: false,
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%'
          },
          {
            value: false,
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%'
          },
          {
            value: false,
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%'
          },
          {
            value: false,
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%'
          },
          {
            value: false,
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%'
          },
          {
            value: false,
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%'
          },
          {
            value: false,
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%'
          },
          {
            value: false,
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%'
          },
          {
            value: false,
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%'
          },
          {
            value: false,
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%'
          }
        ]
      },
      actions: [
        {
          text: 'View Item',
          icon: 'mdi-eye',
        },
        {
          text: 'Edit Item',
          icon: 'mdi-pencil',
        },
        {
          text: 'Delete Item',
          icon: 'mdi-close',
        }
      ]
    }
  },
  methods:{
    close(){
      this.basic.dialog = false
      this.$nextTick(() => {
        this.basic.editedItem = Object.assign({}, this.basic.defaultItem)
        this.basic.editedIndex = -1
      })
    },
    closeDelete(){
      this.basic.dialogDelete = false
      this.$nextTick(() => {
          this.basic.editedItem = Object.assign({}, this.defaultItem)
          this.basic.editedIndex = -1
      })
    },
    save () {
      if (this.basic.editedIndex > -1) {
        Object.assign(this.basic.items[this.basic.editedIndex],this.basic.editedItem)
      } else {
        this.basic.items.push(this.basic.editedItem);
      }
      this.close()
    },
    editItem (item) {
      this.basic.editedIndex = this.basic.items.indexOf(item)
      this.basic.editedItem = Object.assign({}, item)
      this.basic.dialog = true
    },
    deleteItem(item){
      this.basic.editedIndex = this.basic.items.indexOf(item)
      this.basic.editedItem = Object.assign({}, item)
      this.basic.dialogDelete = true
    },
    deleteItemConfirm () {
      this.basic.items.splice(this.basic.editedIndex,1)
      this.closeDelete()
    },
    getColor (calories) {
        if (calories > 400) return 'red'
        else if (calories > 200) return 'orange'
        else return 'green'
    },
  },
  // created: function(){
  //   console.log(this.basic.dialog);
  // },
  computed: {
    formTitle () {
      return this.basic.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },
}
</script>

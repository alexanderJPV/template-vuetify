<template>
    <v-container>
        Use <code>v-img</code>
        <v-row>
            <v-col cols="12" md="6" align="center">
                <v-img
                    max-height="205"
                    max-width="250"
                    src="https://picsum.photos/id/11/500/300"
                ></v-img>
            </v-col>
            <v-col cols="12" md="6" align="center">
                <v-slider
                    v-model="width"
                    class="align-self-stretch"
                    step="1"
                    min="100"
                    max="200"
                >
                </v-slider>
                <v-img
                    :aspect-ratio="16/9"
                    :width="width"
                    src="@/assets/static/creative_process/01.jpeg"
                >
                </v-img>
            </v-col>
        </v-row>
        Use <code>v-img</code> with <code>gradient</code>
        <v-row>
            <v-col
                cols="6"
                sm="4"
                >
                <v-img
                    src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
                    gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
                ></v-img>
            </v-col>
            <v-col
                cols="6"
                sm="4"
            >
                <v-img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
                    <div class="fill-height bottom-gradient"></div>
                </v-img>
            </v-col>
            <v-col
                cols="6"
                sm="4"
            >
                <v-img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
                    <div class="fill-height repeating-gradient"></div>
                </v-img>
            </v-col>
        </v-row>
        Use <code>v-img</code> with <code>rating</code>
        <v-row>
            <v-col>
               <v-card
                    class="elevation-16 mx-auto"
                    width="300"
                >
                    <v-img
                        max-height="205"
                        max-width="100%"
                        src="https://picsum.photos/id/11/500/300"
                    >
                    </v-img>
                   <v-card-text>
                       If you enjoy using Vuetify, please take a few seconds
                       <div>
                           <v-rating
                                v-model="rating"
                                color="yellow darken-3"
                                background-color="grey darken-1"
                           >
                           </v-rating>
                       </div>
                   </v-card-text>
                   <v-card-actions>
                       <v-btn text>NO THANKS</v-btn>
                       <v-spacer></v-spacer>
                       <v-btn color="primary" text>NEXT</v-btn>
                   </v-card-actions>
               </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    data: () => ({
      width: 300,
      rating: 4.5,
    }),
}
</script>
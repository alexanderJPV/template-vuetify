<template>
    <v-row>
        <v-col cols="12" md="4" align="center">
            <v-dialog
                v-model="dialog"
                max-width="500px"
                transition="dialog-transition"
            >
                <template v-slot:activator="{ on }">
                    <v-btn
                        color="success"
                        v-on="on"
                    >Open Dialog</v-btn>
                </template>
                <v-card
                >
                    <v-card-title>
                        Preference
                    </v-card-title>
                    <v-tabs
                        class="ml-2"
                        v-model="onboarding"
                    >
                        <v-tab
                            style="font-size: 0.7rem;"
                        >
                            GENERAL
                        </v-tab>
                        <v-tab
                            style="font-size: 0.7rem;"
                        >
                            ACTIVITY
                        </v-tab>
                        <v-tab
                            style="font-size: 0.7rem;"
                        >
                            ACCOUNT
                        </v-tab>
                        <v-tabs-slider color="primary"></v-tabs-slider>
                    </v-tabs>
                    <v-window
                        v-model="onboarding"
                        reverse
                    >
                        <v-window-item
                            v-for="(item,n) in valmsg" :key="n"
                        >
                            <v-card
                                height="200"
                            >
                                <v-card-text>
                                    {{item.text}}
                                </v-card-text>
                            </v-card>
                        </v-window-item>
                    </v-window>
                    <v-card-actions class="justify-end">
                        <v-btn text color="primary" @click="dialog = false">Close</v-btn>
                        <v-btn text color="primary" @click="dialog = false">Save</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-col>
    </v-row>
</template>
<script>
export default {
    data() {
        return {
            dialog: false,
            onboarding: 0,
            valmsg:[
                {text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.'},
                {text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.'},
                {text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.'}
            ],
        }
    },
}
</script>

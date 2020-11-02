<template>
    <v-row>
        <v-col
            cols="12" md="4"
            align="center"
        >
            <v-dialog
                v-model="dialog"
                persistent
                max-width="290px"
                transition="dialog-transition"
            >
                <template v-slot:activator="{ on }">
                    <v-btn
                        color="primary"
                        dark
                        v-on="on"
                    >Open Dialog</v-btn>
                </template>
                <v-card>
                    <v-card-title class="headline">
                        Use Google's location service?
                    </v-card-title>
                    <v-card-text>
                        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>
                        <v-btn color="success" text @click="dialog = false">Agree</v-btn>
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
            dialog: false
        }
    },
}
</script>

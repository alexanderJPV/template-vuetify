<template>
<v-row>
    <v-col cols="12" md="6" align="center">
        <v-btn
            color="success"
            class="ma-2"
            dark
            @click="dialog = true">Open Modal 2
        </v-btn>
        <v-dialog
            v-model="dialog"
            max-width="500px"
            transition="dialog-transition"
        >
            <v-card>
                <v-card-title>
                    <span>Dialog 2</span>
                    <v-spacer></v-spacer>
                    <v-btn color="red lighten-2" icon @click="dialog = false">
                        <v-icon>mdi-close-circle</v-icon>
                    </v-btn>
                </v-card-title>
                <v-card-text>
                    <v-select
                        :items="select"
                        label="Select List"
                    ></v-select>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="red" text @click="dialog=false">Cancel</v-btn>
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
            select: [
                { text: 'State 1' },
                { text: 'State 2' },
                { text: 'State 3' },
                { text: 'State 4' },
                { text: 'State 5' },
                { text: 'State 6' },
                { text: 'State 7' },
            ]
        }
    },
}
</script>

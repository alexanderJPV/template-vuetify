<template>
    <v-row>
        <v-col cols="12" md="6" align="center">
                <v-btn color="grey" @click="dialog = true">Open Form 2</v-btn>
                <v-dialog
                    v-model="dialog"
                    max-width="500px"
                    transition="dialog-transition"
                >
                    <v-card>
                        <v-card-title class="grey lighten-2 indigo--text">
                            Add Information User
                            <v-spacer></v-spacer>
                            <v-btn color="red lighten-2" icon>
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                        </v-card-title>
                        <v-card-text class="mt-5">
                            <v-text-field
                                outlined
                                label="Email"
                                placeholder="codemoon@gmail.com"
                                type="email"
                            ></v-text-field>
                            <v-text-field
                                outlined
                                label="Address"
                                placeholder="Av. siempre viva 1234"
                            ></v-text-field>
                            <v-text-field
                                outlined
                                label="Address altenative"
                                placeholder="Av. siempre viva 1234"
                            ></v-text-field>
                            <v-row class="mt-0 pt-0">
                                <v-col cols="12" md="4">
                                    <v-text-field
                                        outlined
                                        label="City"
                                        placeholder="La paz"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="4">
                                    <v-select
                                        outlined
                                        :items="['chuquisaca','potosi','oruro','cochabamba']"
                                        label="State"
                                    ></v-select>
                                </v-col>
                                <v-col cols="12" md="4">
                                    <v-text-field
                                        outlined
                                        label="Zip"
                                        type="number"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-checkbox
                                class="mt-0 pt-0"
                                label="Check me out"
                            >
                            </v-checkbox>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="indigo" text @click="dialog = false">Cancel</v-btn>
                            <v-btn color="success" text>Update</v-btn>
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

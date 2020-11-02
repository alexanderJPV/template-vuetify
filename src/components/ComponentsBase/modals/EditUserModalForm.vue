<template>
    <v-row>
        <v-col cols="12" md="6" align="center">
            <v-btn color="secondary ma-2" @click="dialog = true">Open Modal 3</v-btn>
            <v-dialog
                v-model="dialog"
                max-width="500px"
                transition="dialog-transition"
            >
                <v-card>
                    <v-form>
                        <v-card-title>
                            Edit User
                            <v-spacer></v-spacer>
                            <v-btn color="red lighten-1" icon @click="dialog = false">
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-ro>
                                    <v-col>
                                        <v-text-field
                                            outlined
                                            label="name"
                                            placeholder="alexander"
                                        ></v-text-field>
                                    </v-col>
                                </v-ro>
                            </v-container>
                        </v-card-text>
                    </v-form>
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
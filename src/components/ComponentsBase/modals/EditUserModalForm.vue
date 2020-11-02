<template>
    <v-row>
        <v-col cols="12" md="6" align="center">
            <v-btn color="secondary mt-2" @click="dialog = true">Open Modal 3</v-btn>
            <v-dialog
                v-model="dialog"
                max-width="500px"
                transition="dialog-transition"
                scrollable
            >
                <v-card>
                    <v-form>
                        <v-card-title class="indigo white--text">
                            Edit User
                            <v-spacer></v-spacer>
                            <v-btn color="white" icon @click="dialog = false">
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text>
                            <v-text-field
                                outlined
                                label="name"
                                placeholder="alexander"
                            ></v-text-field>
                            <v-row>
                                <v-col cols="12" md="4">
                                    <v-radio
                                        class="d-flex justify-center"
                                        label="a"
                                    ></v-radio>
                                </v-col>
                                <v-col>
                                    <v-radio
                                        class="d-flex justify-center"
                                        label="b"
                                    ></v-radio>
                                </v-col>
                                <v-col>
                                    <v-radio
                                        class="d-flex justify-center"
                                        label="c"
                                    ></v-radio>
                                </v-col>
                            </v-row>
                            <v-file-input
                                outlined
                                multiple
                                label="File input"
                            ></v-file-input>
                            <v-textarea
                                outlined
                                label="Text area"
                                auto-grow
                                full-width
                                rows="4"
                                >
                            </v-textarea>
                            <v-checkbox
                                class="mt-0 pt-0"
                                label="ChekBox"
                            ></v-checkbox>
                            <v-select
                                outlined
                                :items="items"
                                label="Select"
                            ></v-select>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="secondary" text @click="dialog = false">Cancel</v-btn>
                            <v-btn color="indigo" dark  class="mr-2">Save</v-btn>
                        </v-card-actions>
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
            dialog: false,
            items:[
                'option 1',
                'option 2'
            ]
        }
    },
}
</script>
<template>
    <v-row>
        <v-col cols="12" md="6" align="center">
            <v-btn color="red mt-2" dark @click="dialog = true">Open Form 1</v-btn>
            <v-dialog
                v-model="dialog"
                max-width="700px"
                transition="dialog-transition"
            >
                <v-card>
                    <v-card-title class="indigo lighten-1 white--text">
                        <span class="headline"> User create</span>
                        <v-spacer></v-spacer>
                        <v-btn color="white" icon @click="dialog = false">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <v-row>
                            <v-col cols="12" md="4">
                                <v-text-field
                                    label="Legal first name*"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-text-field
                                    label="Legal middle name"
                                    hint="example of helper text only on focus"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-text-field
                                    label="Legal last name*"
                                    hint="example of persistent helper text"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    label="Email*"
                                    type="email"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    label="Password*"
                                    type="password"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-select
                                    :items="ages"
                                    label="Age*"
                                ></v-select>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-autocomplete
                                    :items="['Skking','Ice Hokey','Soccer','Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                                    label="Interest"
                                    multiple
                                    >
                                </v-autocomplete>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog=false">Save</v-btn>
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
            ages:[
                '0-17',
                '18-29',
                '30-54',
                '54+'
            ]
        }
    },
}
</script>
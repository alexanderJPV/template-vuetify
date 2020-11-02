<template>
    <v-container fluid>
        <v-row>
            <v-col lg="8" cols="12">
                <v-card
                    class="overflow-hidden"
                    color="grey lighten-5"
                >
                <v-toolbar
                    color="light-green"
                    flat
                    dark
                >
                    <v-icon>mdi-account</v-icon>
                    <v-toolbar-title class="mt-1 ml-2">
                        User Profile
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="indigo darken-1"
                        fab
                        @click="isEditing=!isEditing"
                        small
                    >
                        <v-icon v-if="isEditing">mdi-close</v-icon>
                        <v-icon v-else>mdi-pencil</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-form>
                    <v-card-text>
                        <v-row>
                             <v-col md="4" cols="12">
                                <v-text-field
                                    color="light-green darken-2"
                                    :disabled="!isEditing"
                                    name="Role"
                                    label="Role(Alternative)"
                                ></v-text-field>
                            </v-col>
                            <v-col md="4" cols="12">
                                <v-text-field
                                    color="light-green darken-2"
                                    :disabled="!isEditing"
                                    name="User Name"
                                    label="User Name"
                                ></v-text-field>
                            </v-col>
                            <v-col md="4" cols="12">
                                <v-text-field
                                    color="light-green darken-2"
                                    :disabled="!isEditing"
                                    name="Email Address"
                                    label="Email Address"
                                />
                            </v-col>
                            <v-col
                                cols="12"
                                md="6"
                            >
                                <v-text-field
                                    color="light-green darken-2"
                                    :disabled="!isEditing"
                                    label="First Name"
                                />
                            </v-col>
                            <v-col
                                cols="12"
                                md="6"
                            >
                                <v-text-field
                                    color="light-green darken-2"
                                    :disabled="!isEditing"
                                    label="Last Name"
                                />
                            </v-col>
                             <v-col cols="12">
                                <v-text-field
                                    color="light-green darken-2"
                                    :disabled="!isEditing"
                                    label="Adress"
                                />
                            </v-col>
                            <v-col
                                cols="12"
                                md="4"
                            >
                                <v-text-field
                                    color="light-green darken-2"
                                    :disabled="!isEditing"
                                    label="City"
                                />
                            </v-col>
                            <v-col
                                cols="12"
                                md="4"
                            >
                                <v-text-field
                                    color="light-green darken-2"
                                    :disabled="!isEditing"
                                    label="Country"
                                />
                            </v-col>
                            <v-col
                                cols="12"
                                md="4"
                            >
                                <v-text-field
                                    color="light-green darken-2"
                                    :disabled="!isEditing"
                                    label="Postal Code"
                                    type="number"
                                />
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            :disabled="!isEditing"
                            class="white--text"
                            color="indigo darken-1"
                            @click="save"
                        >
                        UPDATE
                        </v-btn>
                    </v-card-actions>
                </v-form>
                 <v-snackbar
                    v-model="hasSaved"
                    :timeout="2000"
                    absolute
                    bottom
                    left
                    >
                        Your profile has been updated
                </v-snackbar>
                </v-card>
            </v-col>
            <v-col lg="4" cols="12">
                <v-card class="text-center">
                    <v-avatar
                    size="70%">
                        <img src="@/assets/static/avatar/man_1.jpg" alt="alt">
                    </v-avatar>
                    <v-card-text class="text-center">
                        <h4 class="headline font-weight-light mb-3 black--text">
                            Alec Thompson
                        </h4>
                        <h4 class="mb-1 grey--text">
                            CEO / CO-FOUNDER
                        </h4>
                        <p class="font-weight-light grey--text">
                            Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
                        </p>

                        <v-btn
                            dark
                            color="light-green"
                            rounded
                            class="mr-0"
                        >
                            Follow
                        </v-btn>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            hasSaved: false,
            isEditing: null,
            model: null,
        }
    },
    methods:{
        save () {
            this.isEditing = !this.isEditing
            this.hasSaved = true
        },
    }
}
</script>

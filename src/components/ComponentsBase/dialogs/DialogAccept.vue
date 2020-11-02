<template>
    <!-- <v-container fill-height align-start> -->
        <!-- <v-row align="center" justify="center" style="height:100vh" no-gutters dense>
            <v-col cols="12" md="6" class="grey lighten-2 fill-height d-flex  justify-center align-center">
                    <v-card flat tile>
                        <v-card-text>Card #1</v-card-text>
                    </v-card>
            </v-col>
            <v-col cols="12" md="6">
                <v-card flat tile>
                    <v-card-text>#2</v-card-text>
                </v-card>
            </v-col>
        </v-row> -->
        <!-- <v-row justify="center" align="end" class="red" style="height:100vh">
            <v-col cols="12" md="2" class="yellow">
                <p class="white--text">hola</p>
            </v-col>
        </v-row> -->
        <!-- <v-layout column class="red" align-center>
            <v-flex class="yellow">
                hola
            </v-flex>
        </v-layout> -->
        <v-row>
        <v-col
            cols="12" md="4"
            align="center"
        >
            <v-dialog
                v-model="dialog"
                :overlay="false"
                max-width="500px"
                transition="dialog-transition"
            >
                <template v-slot:activator="{ on }">
                    <v-btn
                        color="red lighten-1"
                        v-on="on"
                        dark
                    >Open Dialog</v-btn>
                </template>
                <v-card>
                    <v-card-title class="dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </v-card-text>headline grey lighten-2">
                        Privacy Policy
                    </v-card-title>
                    <v-card-text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="success"
                            text
                            @click="dialog = false">I accept</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-col>
        </v-row>
    <!-- </v-container> -->
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

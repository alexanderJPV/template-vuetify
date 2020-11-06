<template>
    <v-row>
        <v-col>
            <v-card>
                <v-card-title>
                    <v-toolbar class="transparent media-toolbar">
                        <v-btn-toggle>
                            <v-btn text>
                                <v-icon color="indigo"> mdi-cloud-upload</v-icon>
                                Upload
                            </v-btn>
                            <v-btn text>
                                <v-icon color="indigo">folder</v-icon>
                                Add Folder
                            </v-btn>
                        </v-btn-toggle>
                        <v-spacer></v-spacer>
                        <v-btn-toggle>
                            <v-btn text>
                                <v-icon color="indigo">mdi-view-headline</v-icon>
                            </v-btn>
                            <v-btn text>
                                <v-icon color="indigo">mdi-view-list</v-icon>
                            </v-btn>
                        </v-btn-toggle>
                    </v-toolbar>
                </v-card-title>
            </v-card>
        </v-col>
    </v-row>
</template>
<script>
export default {

}
</script>

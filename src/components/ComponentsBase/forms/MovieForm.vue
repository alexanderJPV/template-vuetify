<template>
    <v-card>
        <v-card-title>
            Movie Form
        </v-card-title>
        <v-card-text>
            <v-form>
                <v-row>
                    <v-col>
                        <v-text-field
                            label="Movie Title"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-textarea
                            label="Description"
                            value="Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan."
                            counter
                        ></v-textarea>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <span>Genres</span>
                         <v-checkbox
                            label="Action"
                            class="mx-0 mb-0 bt-3 pa-0"
                        ></v-checkbox>
                        <v-checkbox
                            label="Comedy"
                            class="ma-0 pa-0"
                        ></v-checkbox>
                        <v-checkbox
                            label="Drama"
                            class="ma-0 pa-0"
                        ></v-checkbox>
                        <v-checkbox
                            label="Fantasy"
                            class="ma-0 pa-0"
                        ></v-checkbox>
                        <v-checkbox
                            label="Horror"
                            class="ma-0 pa-0"
                        ></v-checkbox>
                    </v-col>
                    <v-col cols="12">
                        <v-select
                            v-model="select"
                            label="Original language"
                            required
                            :items="language"
                        ></v-select>
                    </v-col>
                    <v-btn class="ml-3 mt-4" color="success">Save</v-btn>
                </v-row>
            </v-form>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    data: () => ({
        select: null,
        language: [
            'English',
            'Spanish',
            'Korean',
            'Chinese',
            'French',
            'Hindi',
            'German'
        ],
        checkbox: false
    }),
}
</script>

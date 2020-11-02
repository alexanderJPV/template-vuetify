<template>
    <v-row>
        <v-col cols="12" md="6" align="center">
            <v-btn
                color="primary"
                class="ma-2"
                dark
                @click="dialog1 = true"
            >
                Open Modal 1
            </v-btn>
            <v-dialog
                v-model="dialog1"
                max-width="500px"
            >
                <v-card>
                    <v-card-title>
                        <span>Form Dialog 1</span>
                        <v-spacer></v-spacer>
                        <v-menu
                            bottom
                            left
                        >
                            <template v-slot:activator="{ on }">
                                <v-btn
                                    icon
                                    v-on="on"
                                >
                                <v-icon>mdi-dots-vertical</v-icon>
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item
                                    v-for="(item, i) in items" :key="i"
                                    @click="() => {}"
                                >
                                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn
                            color="primary"
                            text
                            @click="dialog1 = false"
                        >
                        Close
                        </v-btn>
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
            dialog1: false,
            items: [
                {
                    title: 'Option 1',
                },
                {
                    title: 'Option 2',
                },
                {
                    title: 'Option 3',
                }
            ],
        }
    },
}
</script>

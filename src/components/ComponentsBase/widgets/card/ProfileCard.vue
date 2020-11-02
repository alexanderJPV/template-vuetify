<template>
    <v-card>
        <v-img src="@/assets/static/people/woman/w1.jpg" height="390">
            <v-layout column class="media ma-0">
                <v-card-title>
                    <v-btn dark icon>
                        <v-icon>mdi-chevron-left</v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn dark icon>
                        <v-icon class="mr-3">mdi-grease-pencil</v-icon>
                    </v-btn>
                    <v-btn dark icon>
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </v-card-title>
                <v-spacer></v-spacer>
                <v-card-title class="white--text">
                    <div class="display-1 pl-5 pt-5">Byllie Heilish</div>
                </v-card-title>
            </v-layout>
        </v-img>
        <v-list>
            <v-list-item href="#">
                <v-list-item-action>
                    <v-icon color="indigo">mdi-phone</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>(571) 788-55720</v-list-item-title>
                    <v-list-item-subtitle>Mobile</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-icon>
                    <v-icon>mdi-chat</v-icon>
                </v-list-item-icon>
            </v-list-item>
            <v-list-item href="#">
                <v-list-item-action>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>(571) 220-45321</v-list-item-title>
                    <v-list-item-subtitle>Work</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-icon>
                    <v-icon>mdi-chat</v-icon>
                </v-list-item-icon>
            </v-list-item>
            <v-divider inset></v-divider>
            <v-list-item href="#">
                <v-list-item-action>
                    <v-icon color="indigo">mdi-mail</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>codemoon@example.com</v-list-item-title>
                    <v-list-item-subtitle>Personal</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-list-item href="#">
                <v-list-item-action>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>codemars@example.com</v-list-item-title>
                    <v-list-item-subtitle>Work</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-divider inset></v-divider>
             <v-list-item href="#">
                <v-list-item-action>
                    <v-icon color="indigo">mdi-google-maps</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Av. Villazon #350</v-list-item-title>
                    <v-list-item-subtitle>La paz city, 3700 msm</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-card>
</template>
<script>
export default {
}
</script>

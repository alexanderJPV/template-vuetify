<template>
    <v-card>
        <v-card-title>
            <div class="layout ma-0 pb-1">
                <div class="subheading">{{title}}</div>
                <v-spacer></v-spacer>
                <div>
                    <v-icon :color="color">{{icon}}</v-icon>
                </div>
            </div>
        </v-card-title>
        <v-card-text class="pt-2">
            <h3 class="headline">Incremento</h3>
            <v-progress-linear
                :value="value"
                height="5"
                :color="color"
                >
            </v-progress-linear>
            <span>{{caption}}</span>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    props:{
        title: String,
        subTitle: String,
        color: String,
        icon: String,
        value: Number,
    },
    computed: {
        caption(){
            return this.value + '% ' + this.subTitle
        }
    }
}
</script>

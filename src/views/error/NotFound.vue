<template>
    <v-app class="exception">
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <div class="mr-3 hidden-sm-and-down">
                    <img src="@/assets/static/error/404.svg" alt="img" />
                </div>
                <div class="text-md-center">
                    <h1>404</h1>
                    <h2 class="headline my-3">Sorry, page not found</h2>
                    <v-btn color="indigo my-1" dark @click="goHome">Go Home</v-btn>
                </div>
            </v-layout>
        </v-container>
    </v-app>
</template>
<script>
export default {
    methods: {
        goHome(){
          this.$router.push({ path: '/' })
        }
    },
}
</script>
<style lang="css" scoped>
h1{
    font-size: 150px;
    line-height: 150px;
    font-weight: 700;
    color: #252932;
    text-shadow: rgba(61, 61, 61, 0.3) 1px 1px, rgba(61, 61, 61, 0.2) 2px 2px, rgba(61, 61, 61, 0.3) 3px 3px
}
</style>
<template>
    <v-main>
        <router-view></router-view>
        <dash-board-footer></dash-board-footer>
    </v-main>
</template>
<script>
export default{
    components:{
        DashBoardFooter: () => import('./SfeAdminFooter'),
    }
}
</script>
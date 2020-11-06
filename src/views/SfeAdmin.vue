<template>
    <v-app>
        <dashboard-nav-bar></dashboard-nav-bar>
        <dashboard-side-bar></dashboard-side-bar>
        <dashboard-view></dashboard-view>
    </v-app>
</template>
<script>
    export default{
        name:'AdminDashboard',
        components:{
            DashboardSideBar: () => import('./AdminLayout/SfeAdminSIdebar.vue'),
            DashboardNavBar: () => import('./AdminLayout/SfeAdmiNavbar.vue'),
            DashboardView: () => import('./AdminLayout/SfeAdminView.vue')
        }
    }
</script>

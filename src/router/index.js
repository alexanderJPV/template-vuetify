import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routes = [
    {
        path: '*',
        component: () => import('@/views/error/NotFound.vue')
    },
    // Login
    {
        path:'/login',
        name:'login',
        component: () => import('../views/SfeLogin.vue'),
    },
    // Page 404 and 500
    {
        path: '/404',
        name: '404',
        meta: {
          title: 'Not Found'
        },
        component: () => import('@/views/error/NotFound.vue')
    },
    {
        path: '/500',
        name: '500',
        meta: {
          title: 'Server Error'
        },
        component: () => import('@/views/error/Error.vue')
    },
    // Admin interface
    {
        path:'/',
        name:'',
        redirect:'dashboard',
        component: () => import('@/views/SfeAdmin.vue'),
        children: [
            // Dashboard
            {
                path:'/dashboard',
                name:'dashboard',
                meta: {
                    title: 'Dashboard',
                    icon: 'mdi-monitor'
                },
                component: () => import('@/components/sfe-admin/Dashboard'),
            },
            // Profile
            {
                path:'/profile',
                name:'profile',
                meta: {
                    title: 'Profile',
                    icon: 'mdi-account'
                },
                redirect:'/profile/userprofile',
                component: () => import('@/components/sfe-admin/Profile'),
                children:[
                    // UserProfile
                    {
                        path: '/profile/userprofile',
                        name: 'userprofile',
                        meta: {
                            title: 'User Profile'
                        },
                        component: () => import('@/components/sfe-admin/Profile/User'),
                    }
                ],
            },
            // Tables
            {
                path:'/tables',
                name:'tables',
                meta: {
                    title: 'Tables',
                    icon: 'mdi-clipboard-outline'
                },
                component: () => import('@/components/sfe-admin/Tables'),
            },
            // Form
            {
                path:'/forms',
                name:'forms',
                meta: {
                    title: 'Forms',
                    icon: 'mdi-book-open'
                },
                component: () => import('@/components/sfe-admin/Forms'),
                children:[
                    // Basic Forms
                    {
                        path:'/basicforms',
                        name:'basicforms',
                        meta: {
                            title: 'Basic Forms'
                        },
                        component: () => import('@/components/sfe-admin/Forms/BasicForms'),
                    },
                    // Complex Forms
                    {
                        path:'/complexforms',
                        name:'complexforms',
                        meta: {
                            title: 'Complex Forms'
                        },
                        component: () => import('@/components/sfe-admin/Forms/ComplexForms'),
                    },
                    // Wizard Forms
                    {
                        path:'/wizardforms',
                        name:'wizardforms',
                        meta: {
                            title: 'Wizard Forms'
                        },
                        component: () => import('@/components/sfe-admin/Forms/WizardForms'),
                    },
                ],
            },
            // Modals
            {
                path:'/modals',
                name:'modals',
                meta: {
                    title: 'Modals',
                    icon: 'mdi-receipt'
                },
                component: () => import('@/components/sfe-admin/Modals'),
                children:[
                    // Dialogs
                    {
                        path:'/dialogs',
                        name:'dialogs',
                        meta: {
                            title: 'Dialogs',
                            icon: 'mdi-receipt'
                        },
                        component: () => import('@/components/sfe-admin/Modals/dialogs'),
                    },
                    // Forms Modal
                    {
                        path:'/formModal',
                        name:'formModal',
                        meta: {
                            title: 'FormModal',
                            icon: 'mdi-receipt'
                        },
                        component: () => import('@/components/sfe-admin/Modals/modals'),
                    }
                ]
            },
            // UI Utils
            {
                path: '/uiutils',
                name: 'uiutils',
                meta: {
                    title: 'Ui Utils',
                    icon: 'mdi-tools'
                },
            },
            // Media
            {
                path: '/media',
                name: 'media',
                meta:{
                    title: 'Media',
                    icon: 'mdi-image'
                },
                component: () => import('@/components/sfe-admin/Media'),
                children:[
                    {
                        path: '/photos',
                        name: 'photos',
                        meta: {
                            title: 'Photos',
                        },
                        component: () => import('@/components/sfe-admin/Media/Photos')
                    },
                    {
                        path: '/multimedia',
                        name: 'multimedia',
                        meta: {
                            title: 'Multimedia',
                        },
                        component: () => import('@/components/sfe-admin/Media/Multimedia')
                    }
                ]
            },
            // Icons
            {
                path: '/icons',
                name: 'icons',
                meta:{
                    title:'Icons',
                    icon:'mdi-grease-pencil'
                },
                component: () => import('@/components/sfe-admin/Icons')
            },
            // Notifications
            {
                path: '/notifications',
                name: 'notifications',
                meta:{
                    title:'Notifications',
                    icon:'mdi-bell'
                }
            },
            // Settings/About
            {
                path: '/about',
                name: 'about',
                meta:{
                    title:'About',
                    icon:'mdi-help-box'
                },
                component: () => import('@/components/sfe-admin/About')
            },
        ],
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router
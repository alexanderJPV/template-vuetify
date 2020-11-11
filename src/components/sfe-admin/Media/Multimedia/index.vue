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
                        <v-btn-toggle v-model="view">
                            <v-btn text value="list">
                                <v-icon color="indigo">mdi-view-headline</v-icon>
                            </v-btn>
                            <v-btn text value="grid">
                                <v-icon color="indigo">mdi-view-list</v-icon>
                            </v-btn>
                        </v-btn-toggle>
                    </v-toolbar>
                </v-card-title>
                <v-card-text>
                    <div class="layout row media-layout">
                        <div class="media-content flex transparent">
                            <vue-perfect-scrollbar class="media-content--warp">
                                <v-container fluid v-if="view === 'grid'">
                                    <v-layout row wrap class="x-grid-lg">
                                        <v-flex
                                            lg4
                                            sm12
                                            xs12
                                            class="pa-2"
                                            v-for="(item, index) in folders" :key="'index' + index">
                                            <v-card>
                                                <v-responsive height="150px">
                                                    <v-icon
                                                        size="135"
                                                        color="indigo"
                                                    >mdi-folder</v-icon>
                                                </v-responsive>
                                                <v-divider></v-divider>
                                                <v-card-title text tile>
                                                    {{ item.name}}
                                                </v-card-title>
                                            </v-card>
                                        </v-flex>
                                        <v-flex
                                            lg4
                                            sm12
                                            xs12
                                            class="pa-2"
                                            v-for="(item, index) in files"
                                            :key="index"
                                        >
                                            <v-card text tile @click="showDetail(item)">
                                                <v-responsive height="150px" class="card-media">
                                                    <v-img :src="item.path" alt="img" v-if="isImage(item)"></v-img>
                                                    <v-icon v-else class="mx-auto" size="135">insert_drive_file</v-icon>
                                                </v-responsive>
                                                <v-divider></v-divider>
                                                <v-card-title> {{ item.fileName }} </v-card-title>
                                            </v-card>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                                <v-layout column v-else>
                                    <v-list dense class="transparent">
                                        <v-list-item
                                            @click="showDetail(item)"
                                            v-for="(item, index) in files" :key="'list-file'+index"
                                        >
                                            <v-list-item-avatar>
                                                <v-icon>{{mimeIcons(item)}}</v-icon>
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <div class="container pl-3">
                                                    <div class="layout row">
                                                        <div class="flex">{{ item.fileName }}</div>
                                                    </div>
                                                    <v-spacer></v-spacer>
                                                    <div class="caption">
                                                        {{item? formateDate(item.ctime) : ''}}
                                                    </div>
                                                </div>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list>
                                </v-layout>
                            </vue-perfect-scrollbar>
                        </div>
                    </div>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>
<script>
import { getFileMenu, getFile } from '@/apidata/file'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
export default {
    components:{
        VuePerfectScrollbar
    },
    data() {
        return {
            size: 'lg',
            view: 'grid',
            selectedFile: {
                path: '/static/icon/empty_file.svg'
            },
            imageMime: ['image/jpeg','image/svg+xml'],
            folders: [
                {
                    name: 'bg',
                    lastModified: '2018-03-03'
                },
                {
                    name: 'cards',
                    lastModified: '2018-03-03'
                },
                {
                    name: 'avatar',
                    lastModified: '2018-03-03'
                }
            ]
        }
    },
    computed:{
        files(){
            return getFile()
        }
    },
    methods:{
        isImage(file) {
            return this.imageMime.includes(file.fileType)
        },
        mimeIcons(file) {
        return this.imageMime.includes(file.fileType)? 'image': 'insert_drive_file'
        },
        showDetail(file) {
            this.selectedFile = file
        },
        formateDate(string) {
            return string ? new Date(string).toLocaleDateString() : ''
        },
    },
    // created: function(){
    //     console.log(getFile()[8].path);
    // }
}
</script>

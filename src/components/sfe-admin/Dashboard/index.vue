<template>
    <v-container fluid>
        <!-- mini statistic start -->
        <v-row>
            <v-col lg="3" cols="sm" class="pb-2">
                <mini-statistic
                    icon="mdi-facebook"
                    title="100+"
                    sub-title="Likes"
                    color="indigo"
                ></mini-statistic>
            </v-col>
            <v-col lg="3" cols="sm" class="pb-2">
                <mini-statistic
                    icon="mdi-google"
                    title="100+"
                    sub-title="Conexiones"
                    color="red"
                ></mini-statistic>
            </v-col>
            <v-col lg="3" cols="sm" class="pb-2">
                <mini-statistic
                    icon="mdi-twitter"
                    title="200+"
                    sub-title="Seguidores"
                    color="light-blue"
                ></mini-statistic>
            </v-col>
            <v-col lg="3" cols="sm" class="pb-2">
                <mini-statistic
                    icon="mdi-instagram"
                    title="100+"
                    sub-title="Capturas"
                    color="purple"
                ></mini-statistic>
            </v-col>
        </v-row>
        <!-- mini statistic end-->
        <!-- graph statistic start-->
        <v-row>
            <v-col lg="8" cols="12">
                <v-widget title="Site Traffic" content-bg="white">
                    <v-btn icon slot="widget-header-action">
                    <v-icon class="text--secondary">refresh</v-icon>
                    </v-btn>
                    <div slot="widget-content">
                    <e-chart
                        :path-option="[
                        ['dataset.source', siteTrafficData],
                        ['color', [color.lightBlue.base, color.green.lighten1]],
                        ['legend.show', true],
                        ['xAxis.axisLabel.show', true],
                        ['yAxis.axisLabel.show', true],
                        ['grid.left', '2%'],
                        ['grid.bottom', '5%'],
                        ['grid.right', '3%'],
                        ['series[0].type', 'bar'],
                        ['series[0].areaStyle', {}],
                        ['series[0].smooth', true],
                        ['series[1].smooth', true],
                        ['series[1].type', 'bar'],
                        ['series[1].areaStyle', {}]
                        ]"
                        height="400px"
                        width="100%"
                    />
                    </div>
                </v-widget>
            </v-col>
            <v-col lg="4" cols="12">
                <v-widget title="Top Location" content-bg="white">
                    <div slot="widget-content">
                    <e-chart
                        :path-option="[
                            ['dataset.source', locationData],
                            ['legend.bottom', '0'],
                            [
                                'color',
                                [
                                color.lightBlue.base,
                                color.indigo.base,
                                color.pink.base,
                                color.green.base,
                                color.cyan.base,
                                color.teal.base
                                ]
                            ],
                            ['xAxis.show', false],
                            ['yAxis.show', false],
                            ['series[0].type', 'pie'],
                            ['series[0].avoidLabelOverlap', true],
                            ['series[0].radius', ['50%', '70%']]
                        ]"
                        height="400px"
                        width="100%"
                    />
                    </div>
                </v-widget>
            </v-col>
            <v-col lg="4" cols="12">

            </v-col>
        </v-row>
        <!-- graph statistic end-->
        <!-- social/weather card start -->
        <v-row>
            <v-col lg="4" cols="12">
                <profile-card></profile-card>
            </v-col>
            <v-col lg="4" cols="12">
                <box-chart
                    title="Tendencias"
                    card-color="deep-purple deep-purple darken-4"
                    sub-title="10%"
                    icon="mdi-trending-up"
                    :data="siteTrafficData"
                    :chart-color="[color.indigo.lighten1]"
                    type="line"
                />
                <box-chart
                    class="mt-4"
                    title="Vistas Pagina"
                    card-color="pink"
                    sub-title="10%"
                    icon="mdi-trending-down"
                    :data="siteTrafficData"
                    :chart-color="[color.pink.darken1, 'rgba(255,255,255,0.3)']"
                    gradient
                    type="area"
                />
            </v-col>
            <v-col lg="4" cols="12">
                <linear-statistic
                    title="Ventas"
                    sub-title="Incremento ventas"
                    color="success"
                    icon="mdi-trending-up"
                    :value=15
                />
                <linear-statistic
                    class="mt-2"
                    title="Ordenes"
                    sub-title="Incrementos"
                    color="pink"
                    icon="mdi-trending-up"
                    :value=30
                />
                <linear-statistic
                    class="mt-2"
                    title="Ingresos"
                    sub-title="Incrementos Ingresos"
                    color="primary"
                    icon="mdi-trending-up"
                    :value=50
                />
                <linear-statistic
                    class="mt-2"
                    title="Costis"
                    sub-title="Reduccion Costos"
                    color="orange"
                    icon="mdi-trending-down"
                    :value=25
                />
            </v-col>
        </v-row>
        <!-- social/weather card end -->
        <!-- Circle statistic start-->
        <v-row>
            <v-col lg="4" cols="12" v-for="(item, index) in trending" :key="'c-trending' + index">
                <circle-statistic
                    :title="item.subheading"
                    :sub-title="item.headline"
                    :caption="item.caption"
                    :icon="item.icon.label"
                    :color="item.linear.color"
                    :value="item.linear.value"
                />
            </v-col>
        </v-row>
        <!-- Circle statistic end-->
        <!-- acitivity/chat widget start-->
        <v-row>
            <v-col lg="6" cols="12">
                <chat-window height="308px" />
            </v-col>
            <v-col lg="6" cols="12">
                <v-widget title="Activities" content-bg="white">
                    <div slot="widget-content">
                    <v-timeline align-top dense>
                        <v-timeline-item
                        :color="item.color"
                        small
                        v-for="(item, index) in activity"
                        :key="index"
                        >
                        <v-row class="pt-1">
                            <v-col cols="3">
                            <strong>{{ item.timeString }}</strong>
                            </v-col>
                            <v-col>
                            <strong>New Icon</strong>
                            <div>{{ item.text }}</div>
                            </v-col>
                        </v-row>
                        </v-timeline-item>
                    </v-timeline>
                    </div>
                </v-widget>
            </v-col>
        </v-row>
        <!-- acitivity/chat widget end-->
        <!-- Tables widgets start -->
        <v-row>
            <v-col cols="12">
                <plain-table/>
            </v-col>
            <v-col cols="12">
                <plain-table-order/>
            </v-col>
        </v-row>
        <!-- Tables widgets end -->
    </v-container>
</template>
<script>
import APIDATA from '@/apidata'
import Material from 'vuetify/es5/util/colors'
import VWidget from '@/components/ComponentsBase/VWidget.vue'
import EChart from '@/components/ComponentsBase/chart/echart'
import MiniStatistic from '../../ComponentsBase/widgets/stadistic/MiniStatistic'
import ProfileCard from '@/components/ComponentsBase/widgets/card/ProfileCard'
import BoxChart from '@/components/ComponentsBase/widgets/chart/BoxChart'
import LinearStatistic from '@/components/ComponentsBase/widgets/stadistic/LinearStatistic.vue'
import CircleStatistic from '@/components/ComponentsBase/widgets/stadistic/CircleStatistic.vue'
import ChatWindow from '@/components/ComponentsBase/chat/ChatWindow'
import PlainTable from '@/components/ComponentsBase/widgets/list/PlainTable'
import PlainTableOrder from '@/components/ComponentsBase/widgets/list/PlainTableOrder'
export default{
    components:{
        VWidget,
        EChart,
        MiniStatistic,
        ProfileCard,
        BoxChart,
        LinearStatistic,
        CircleStatistic,
        ChatWindow,
        PlainTable,
        PlainTableOrder,
    },
    data:() => ({
        color: Material,
        trending: [
            {
                subheading: 'Correo',
                headline: '15+',
                caption: 'Correos abiertos',
                percent: 15,
                icon: {
                    label: 'email',
                    color: 'info'
                },
                linear: {
                    value: 15,
                    color: 'info'
                }
            },
            {
                subheading: 'Tareas',
                headline: '90%',
                caption: 'Tareas completadas.',
                percent: 90,
                icon: {
                    label: 'list',
                    color: 'primary'
                },
                linear: {
                    value: 90,
                    color: 'success'
                }
            },
            {
                subheading: 'Issues',
                headline: '100%',
                caption: 'issues fixed.',
                percent: 100,
                icon: {
                    label: 'bug_report',
                    color: 'primary'
                },
                linear: {
                    value: 100,
                    color: 'error'
                }
            }
        ]
    }),
    // created: function(){
    //     console.log(APIDATA);
    // },
    computed:{
         activity() {
            return APIDATA.getActivity()
        },
        siteTrafficData() {
            return APIDATA.getMonthVisit
        },
        locationData(){
          return APIDATA.getLocation
        }
    }
}
</script>

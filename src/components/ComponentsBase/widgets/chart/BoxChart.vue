<template>
    <v-card :color="cardColor" :dark="computeCardDark" tile>
        <v-card-title>
            <div class="layout">
                <div class="subheading">{{title}}</div>
                <v-spacer></v-spacer>
                <div class="caption"><v-icon>{{icon}}</v-icon>{{subTitle}}</div>
            </div>
        </v-card-title>
        <v-responsive class="white--text">
        <e-chart
            :path-option="computeChartOption"
            height="285px"
            width="100%"
        />
        <!-- <e-chart
            :path-option="[
                ['dataset.source', siteTrafficData],
                ['xAxis.show', false],
                ['yAxis.show', false],
                ['grid.top', '15%'],
                ['grid.left', '0'],
                ['grid.bottom', '0'],
                ['grid.right', '0'],
                ['color', color.indigo.lighten1],
                ['series[0].smooth', true]
            ]"
            height="300px"
            width="100%"
        /> -->
        </v-responsive>
    </v-card>
</template>
<script>
import EChart from '@/components/ComponentsBase/chart/echart'
export default {
    components:{
        EChart,
    },
    props:{
        title: String,
        subTitle: String,
        cardColor: {
            type: String,
            default: 'white'
        },
        gradient: {
            type: Boolean,
            default: false
        },
        icon: String,
        type: String,
        chartColor: Array,
        data: Array,
    },
    data() {
        return {
            defaultOption:[
                ['dataset.source', this.data],
                ['xAxis.show', false],
                ['yAxis.show', false],
                ['grid.top', '15%'],
                ['grid.left', '0'],
                ['grid.bottom', '0'],
                ['grid.right', '0'],
                ['color', this.chartColor],
                // ['series[0].smooth', true],
                // ['xAxis.boundaryGap', false]
            ]
        }
    },
    computed:{
        computeCardDark(){
            return this.cardColor != 'white'
        },
        computeChartOption() {
            let options = this.defaultOption.slice()
            // console.log(this.type);
            switch(this.type){
                case 'bar':
                    options.push(['series[0].type', 'bar'])
                    options.push(['series[0].barWidth', '50%'])
                    // add shadow series
                    // options.push(['series[1].type', 'bar']);
                    break
                case 'stack-bar':
                    // set stacked bar
                    // options.push(['series[0].data', StackBarData]);
                    options.push(['series[0].type', 'bar'])
                    options.push(['series[0].itemStyle.normar.color', 'rgba(0,0,0,0.05)'])
                    options.push(['series[0].barGap', '-100%'])
                    // set main series
                    // options.push(['series[1].data', StackData]);
                    options.push(['series[1].type', 'bar'])
                    break
                case 'area':
                    options.push(['series[0].type', 'line'])
                    options.push(['series[0].smooth', true])
                    options.push(['xAxis.boundaryGap', false])
                    options.push(['series[0].areaStyle', {}])
                    if (this.gradient) {
                        options.push([
                        'series[0].areaStyle',
                        {
                            normal: {
                            color: new window.echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                offset: 0,
                                color: this.chartColor[0]
                                },
                                {
                                offset: 1,
                                color: this.chartColor[1]
                                }
                            ])
                            }
                        }
                        ])
                    }
                default:
                    // line
                    options.push(['series[0].smooth', true])
                    options.push(['xAxis.boundaryGap', false])
                break
            }
            return options
        }
    }
}
</script>

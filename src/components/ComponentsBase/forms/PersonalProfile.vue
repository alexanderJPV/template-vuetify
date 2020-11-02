<template>
    <v-card>
        <v-card-title>
            Personal Profile
        </v-card-title>
        <v-card-text>
            <v-form>
                <v-row>
                    <v-col>
                        <v-checkbox
                            label="Make your profile"
                            color="success"
                            hide-details
                        ></v-checkbox>
                        <v-text-field
                            label="Full Name"
                        ></v-text-field>
                        <v-card
                            class="mx-auto"
                        >
                        <v-card-title>
                            <span class="grey--text">Short bio</span>
                        </v-card-title>
                            <v-row
                                class="px-2 pb-2 ma-0"
                                justify="space-between"
                            >
                            <v-btn-toggle
                                multiple
                            >
                                <v-btn>
                                    <v-icon>mdi-format-italic</v-icon>
                                </v-btn>
                                <v-btn>
                                    <v-icon>mdi-format-bold</v-icon>
                                </v-btn>
                                <v-btn>
                                    <v-icon>mdi-format-underline</v-icon>
                                </v-btn>
                                <v-btn>
                                    <v-row
                                        align="center"
                                        class="flex-column"
                                        justify="center"
                                    >
                                        <v-icon class="cols 12">
                                            mdi-format-color-text
                                        </v-icon>
                                        <v-sheet
                                            tile
                                            style="margin-top: -4px;"
                                            height="4"
                                            width="26"
                                            color="purple"
                                        ></v-sheet>
                                    </v-row>
                                </v-btn>
                                <v-btn>
                                    <v-icon>mdi-format-align-center</v-icon>
                                </v-btn>
                                <v-btn>
                                    <v-icon>mdi-format-align-left</v-icon>
                                </v-btn>
                                <v-btn>
                                    <v-icon>mdi-format-align-right</v-icon>
                                </v-btn>
                            </v-btn-toggle>
                            </v-row>
                            <v-card-text>
                                        <v-textarea
                                            label="Text"
                                            auto-grow
                                            full-width
                                            rows="2"
                                            ></v-textarea>
                            </v-card-text>
                        </v-card>
                        <v-row>
                            <v-col cols="12">
                                <v-file-input
                                    label="Profile photo (not uploading in demo)"
                                    accept="image/png, image/jpeg, image/bmp"
                                    placeholder="Photo"
                                    prepend-icon="mdi-camera"
                                    :rules="rules"
                                    class="mt-4"
                                ></v-file-input>
                            </v-col>
                        </v-row>
                        <!-- Add milestone start -->
                        <template  v-for="item in molestoneArray">
                            <h2>Milestones</h2>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field
                                        v-model="item.title"
                                        label="Milestone title"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    lg="6"
                                >
                                    <v-menu
                                        v-model="item.menu1"
                                        :close-on-content-click="false"
                                        max-width="290"
                                    >
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-text-field
                                            :value="computedDateFormattedMomentjs"
                                            clearable
                                            label="Date"
                                            prepend-icon="mdi-calendar"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                            @click:clear="item.date = null"
                                            ></v-text-field>
                                        </template>
                                        <v-date-picker
                                            v-model="item.date"
                                            @input="item.menu1 = false"
                                        ></v-date-picker>
                                    </v-menu>
                                </v-col>
                                <v-col
                                    cols="12"
                                    lg="6"
                                >
                                    <v-menu
                                        ref="menu"
                                        v-model="item.menu2"
                                        :close-on-content-click="false"
                                        :nudge-right="40"
                                        :return-value.sync="item.time"
                                        transition="scale-transition"
                                        offset-y
                                        max-width="290px"
                                        min-width="290px"
                                    >
                                        <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                            v-model="item.time"
                                            label="Time"
                                            prepend-icon="mdi-clock-time-four-outline"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                        ></v-text-field>
                                        </template>
                                        <v-time-picker
                                            v-if="item.menu2"
                                            v-model="item.time"
                                            full-width
                                            @click:minute="$refs.menu.save(item.time)"
                                        ></v-time-picker>
                                    </v-menu>
                                </v-col>
                                <v-col cols="12">
                                    <v-slider
                                        v-model="item.valuepriority"
                                        :max="10"
                                        label="Priority(0 - 10)"
                                        class="align-center"
                                    >
                                        <template v-slot:append>
                                            <v-text-field
                                                v-model="item.valuepriority"
                                                class="mt-0 pt-0"
                                                type="number"
                                                style="width: 60px"
                                            ></v-text-field>
                                        </template>
                                    </v-slider>
                                </v-col>
                            </v-row>
                        </template>
                        <v-btn block outlined class="mt-1" color="success" @click="additem">+ Add a milestone</v-btn>
                        <h2 class="mt-5">Education</h2>
                         <v-col cols="12">
                            <span>Current status</span>
                             <v-radio-group>
                                <v-radio
                                    label="I'm studying"
                                ></v-radio>
                                <v-radio
                                    label="I'm employed"
                                ></v-radio>
                                <v-radio
                                    label="I'm a freelancer"
                                ></v-radio>
                            </v-radio-group>
                            <span>Highest level of education reached</span>
                            <v-select
                                v-model="select"
                                label="Select an option"
                                required
                                :items="selectitems"
                            ></v-select>
                            <span>Certificates</span>
                            <v-checkbox v-for="(item, index) in options" :key="index"
                                :label="item"
                                class="mx-0 mb-0 bt-3 pa-0"
                            ></v-checkbox>
                        </v-col>
                    </v-col>
                </v-row>
                <v-btn large color="success">Continue</v-btn>
            </v-form>
        </v-card-text>
    </v-card>
</template>
<script>
import moment from 'moment'
import { format, parseISO } from 'date-fns'
export default {
    data: () => ({
        letters: 'qwertyuiop'.split(''),
        rules: [
            value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
        ],
        select: null,
        selectitems: [
            "Early childhood education (‘less than primary’ for educational attainment)",
            "Primary education",
            "Lower secondary education",
            "Upper secondary education",
            "Post-secondary non-tertiary education",
            "Short-cycle tertiary education",
            "Bachelor’s or equivalent level",
            "Master’s or equivalent level",
            "Doctoral or equivalent level"
        ],
        options: [
            "Certified Information Security Manager (CISM)",
            "Certified Ethical Hacker (CEH)",
            "Certified Information Systems Security Professional (CISSP)",
            "Certified in Risk and Information Systems Control (CRISC)",
            "Certified Information Systems Auditor (CISA)",
            "Google Certified Professional Cloud Architect"
        ],
        milestone:{
            title:'my title',
            date: format(parseISO(new Date().toISOString()), 'yyyy-MM-dd'),
            menu1: false,
            time: '',
            menu2: false,
            valuepriority: 1,
        },
      molestoneArray:[],
    }),
    computed: {
      computedDateFormattedMomentjs(){
        return this.milestone.date ? moment(this.milestone.date).format('dddd, MMMM Do YYYY') : ''
      },
      computedTimeFormat(){
          return this.milestone.time ? moment(new Date).format('hh:mm a') : ''
      }
    },
    methods:{
        additem(){
            this.molestoneArray.push({
                                        title:'my title',
                                        date: format(parseISO(new Date().toISOString()), 'yyyy-MM-dd'),
                                        menu1: false,
                                        time: '',
                                        menu2: false,
                                        valuepriority: 1,
                                    })
        }
    }
}
</script>

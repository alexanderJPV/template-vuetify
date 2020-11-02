<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title>
                        Step Form/Account a Room
                    </v-card-title>
                    <v-card-text class="pa-0">
                        <v-stepper v-model="step" class="rounded-0">
                            <v-stepper-header>
                                <template v-for="item in steps">
                                    <v-stepper-step
                                        :step="item.step"
                                        :complete="item.complete"
                                        color="success"
                                        :key="'book' + item.step"
                                        :rules="item.rules"
                                    >
                                    {{item.text}}
                                    </v-stepper-step>
                                    <v-divider :key="'d_book' + item.step"></v-divider>
                                </template>
                            </v-stepper-header>
                            <v-stepper-items>
                                <v-stepper-content step="1">
                                    <form-account ref="formAccount" class="pa-1"></form-account>
                                </v-stepper-content>
                                <v-stepper-content step="2">
                                    <form-room ref="formRoom" class="pa-1"></form-room>
                                </v-stepper-content>
                                <v-stepper-content step="3">
                                    <v-list two-line>
                                        <v-list-item v-for="(item, key) in formValue" :key="key">
                                            <v-list-item-content>
                                            <v-list-item-title v-text="item.text" />
                                            <v-list-item-subtitle v-text="item.value" />
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list>
                                </v-stepper-content>
                            </v-stepper-items>
                        </v-stepper>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn tile text @click="backStep">Back</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn dark tile color="indigo" @click="nextStep">{{ step === 3? 'Confirm':'Next'}}</v-btn>
                    </v-card-actions>
                    </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import FormAccount from '@/components/ComponentsBase/forms/stepForm/FormAccount'
import FormRoom from '@/components/ComponentsBase/forms/stepForm/FormRoom'
export default {
    components:{
        FormAccount,
        FormRoom,
    },
    data() {
        return {
            step: 1, // current step
            steps: [
                {
                    step: 1,
                    complete: false,
                    text: 'Account',
                    rules: []
                },
                {
                    step: 2,
                    complete: false,
                    text: 'Choose Room',
                    rules: []
                },
                {
                    step: 3,
                    complete: false,
                    text: 'Remark & Confim',
                    rules: []
                }
            ],
            formValue: []
        }
    },
    methods:{
        confirm(){
            console.log('All Ready...');
        },
        backStep(){
            if(this.step > 1) this.step--
        },
        nextStep(){
            if(this.step <= this.steps.length){
                switch (this.step) {
                    case 1:
                        this.validateAccount()
                        break;
                    case 2:
                        this.validateRoom()
                        break;
                    case 3:
                        this.confirm()
                        break;
                    default:
                        break;
            }
                }
        },
        validateAccount(){
            const stepX = this.steps.find(item => item.step === 1);
            const formAccount = this.$refs.formAccount
            formAccount.$v.$touch()
            if(formAccount.$v.$invalid){
                stepX.complete = false
                stepX.rules = [
                    () => {
                        'error'
                    }
                ]
                return false
            }else{
                stepX.complete = true
                stepX.rules = []
                this.step++
                this.formValue = [...formAccount.formValue]
                return true
            }
        },
        validateRoom(){
            const stepY = this.steps.find(item => item.step == 2)
            const formRoom = this.$refs.formRoom
            formRoom.$v.$touch()
            if(formRoom.$v.$invalid){
                stepY.complete = false
                stepY.rules = [
                    ()=>{
                        'error'
                    }
                ]
            }else{
                stepY.complete = true
                stepY.rules = []
                this.step++
                for (let index = 0; index < formRoom.formValue.length; index++) {
                    this.formValue.push(formRoom.formValue[index])
                }
                return true
            }
        }
    },
}
</script>

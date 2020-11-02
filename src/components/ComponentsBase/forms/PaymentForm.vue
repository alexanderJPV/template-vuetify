<template>
    <v-card>
        <v-card-title>
            Payment Form
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
            <v-form ref="form">
                <v-subheader>Payment Method</v-subheader>
                <v-btn-toggle color="primary"
                    group
                    v-model="formModel.payment_method"
                >
                    <v-btn icon value="apple">
                        <v-icon >mdi-apple</v-icon>
                    </v-btn>
                    <v-btn icon value="credit">
                        <v-icon>mdi-credit-card</v-icon>
                    </v-btn>
                    <v-btn icon value="wechat">
                        <v-icon>mdi-wechat</v-icon>
                    </v-btn>
                </v-btn-toggle>
                <v-subheader>Payment Detail</v-subheader>
                <v-select
                    v-model="formModel.card_type"
                    :items="cardTypes"
                    :label="form.card_type.label"
                    :placeholder="form.card_type.placeholder"
                    :append-icon="form.card_type.icon"
                    :error-messages="cardTypetError"
                    @blur="$v.formModel.card_type.$touch()"
                    @input="$v.formModel.card_type.$touch()"
                    required
                ></v-select>
                <v-text-field
                    v-model="formModel.card_number"
                    :label="form.card_number.label"
                    :placeholder="form.card_number.placeholder"
                    :append-icon="form.card_number.icon"
                    :error-messages="cardNumberError"
                    @blur="$v.formModel.card_number.$touch()"
                    @input="$v.formModel.card_number.$touch()"
                    required
                    mask="credit-card"
                ></v-text-field>
                <v-text-field
                    v-model="formModel.card_name"
                    :label="form.card_name.label"
                    :placeholder="form.card_name.placeholder"
                    required
                    :error-messages="cardNameError"
                    @blur="$v.formModel.card_name.$touch()"
                    @input="$v.formModel.card_name.$touch()"
                ></v-text-field>
                <v-row>
                    <v-col md="6" cols="12">
                        <v-menu
                            ref="menu"
                            v-model="showMenu"
                            :close-on-content-click="false"
                            :return-value.sync="formModel.expire"
                            offset-y
                            min-width="290px"
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    class="mr-2"
                                    v-bind="attrs"
                                    v-on="on"
                                    :label="form.expire.label"
                                    :placeholder="form.expire.placeholder"
                                    v-model="formModel.expire"
                                    required
                                    :append-icon="form.expire.icon"
                                    :error-messages="expireError"
                                    @blur="$v.formModel.expire.$touch()"
                                />
                            </template>
                            <v-date-picker v-model="formModel.expire" no-title scrollable>
                                <v-spacer></v-spacer>
                                <v-btn text color="primary" @click="showMenu = false"
                                    >Cancel</v-btn
                                >
                                <v-btn
                                    text
                                    color="primary"
                                    @click="$refs.menu.save(formModel.expire)"
                                    >OK</v-btn
                                >
                            </v-date-picker>
                        </v-menu>
                    </v-col>
                    <v-col md="6" cols="12">
                        <v-text-field
                            v-model="formModel.cvv"
                            :label="form.cvv.label"
                            :placeholder="form.cvv.placeholder"
                            type="number"
                            :error-messages="cvvError"
                            @blur="$v.formModel.cvv.$touch()"
                            @input="$v.formModel.cvv.$touch()"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-switch label="Saved Card Detials" v-model="saveCard"></v-switch>
            </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <v-btn text tile @click="cancel">Cancel</v-btn>
            <v-spacer></v-spacer>
            <v-btn dark tile color="indigo" @click="submitForm">Submit</v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email, numeric } from 'vuelidate/lib/validators'
export default {
    mixins: [validationMixin],
    validations: {
        formModel:{
            card_type: {required},
            card_number: {required},
            card_name: {required},
            expire: {required},
            cvv: {required}
        }
    },
    computed:{
        cardTypetError(){
            const errors = []
            if(!this.$v.formModel.card_type.$dirty){
                return errors
            }else{
                !this.$v.formModel.card_type.required && errors.push('Card type is required')
                return errors
            }
        },
        cardNumberError(){
            const errors = []
            if(!this.$v.formModel.card_number.$dirty){
                return errors
            }else{
                !this.$v.formModel.card_number.required && errors.push('Card number is required')
                return errors
            }
        },
        cardNameError(){
            const errors = []
            if(!this.$v.formModel.card_name.$dirty){
                return errors
            }else{
                !this.$v.formModel.card_name.required && errors.push('Card name is required')
                return errors
            }
        },
        expireError(){
            const errors = []
            if(!this.$v.formModel.expire.$dirty){
                return errors
            }else{
                !this.$v.formModel.expire.required && errors.push('Expire is required')
                return errors
            }
        },
        cvvError(){
            const errors = []
            if(!this.$v.formModel.cvv.$dirty){
                return errors
            }else{
                !this.$v.formModel.cvv.required && errors.push('Cvv is required')
                return errors
            }
        },
    },
    data() {
        return {
            showMenu:false,
            saveCard: true,
            formModel: {
                payment_method: 'apple',
                card_type: null,
                card_number: null,
                card_name: null,
                expire: new Date().toISOString().substr(0, 10),
                cvv: null
            },
            form: {
                card_type: {
                    label: 'Card type',
                    placeholder: 'Master',
                    icon: 'mdi-credit-card'
                },
                card_number: {
                    label: 'Card number',
                    placeholder: 'xx-xx-xxxxx',
                    icon: 'mdi-credit-card'
                },
                card_name: {
                    label: 'Card name',
                    placeholder: 'Michael Wang',
                },
                expire: {
                    label: 'Expire date',
                    placeholder: new Date().toISOString().substr(0, 10),
                    icon: 'mdi-credit-card-clock'
                },
                cvv: {
                    label: 'CVV',
                    placeholder: 'CVV',
                }
            },
            cardTypes:[
                {
                    value:'visa',
                    text:'Visa Express'
                },{
                    value:'master',
                    text:'Mastard'
                }
            ]
        }
    },
    methods:{
        cancel(){
            this.saveCard = false
            this.$refs.form.reset()
            this.$v.$reset()
        },
        submitForm(){
            this.$v.$touch()
            console.log(this.$v.$invalid);
        }
    },
    // created: function(){
    //     console.log(this.formModel.payment_method);
    // }
}
</script>

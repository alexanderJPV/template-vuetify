<template>
    <v-form>
        <v-select
            outlined
            v-model="formModel.type"
            :items="types"
            :label="form.type.label"
            :placeholder="form.type.placeholder"
            :append-icon="form.type.icon"
            :error-messages="typeError"
            @blur="$v.formModel.type.$touch()"
            @input="$v.formModel.type.$touch()"
        ></v-select>
        <v-text-field
            outlined
            v-model="formModel.nights"
            :label="form.nights.label"
            :placeholder="form.nights.placeholder"
            :append-icon="form.nights.icon"
            :error-messages="nightsError"
            @blur="$v.formModel.nights.$touch()"
            @input="$v.formModel.nights.$touch()"
        ></v-text-field>
        <v-menu
            ref="menu"
            v-model="showMenu"
            :close-on-content-click="false"
            :return-value.sync="formModel.checkin"
            transition="scale-transition"
            min-width="290px"
        >
            <template v-slot:activator="{ on }">
                <v-text-field
                    outlined
                    required
                    v-model="formModel.checkin"
                    v-on="on"
                    :label="form.checkin.label"
                    :placeholder="form.checkin.placeholder"
                    :append-icon="form.checkin.icon"
                    :error-messages="checkinError"
                    @blur="$v.formModel.checkin.$touch()"
                    @input="$v.formModel.checkin.$touch()"
                ></v-text-field>
            </template>
            <v-date-picker
                no-title
                scrollable
                v-model="formModel.checkin"
                :landscape="true"
                :reactive="true"
                >
                <v-spacer></v-spacer>
                <v-btn color="indigo" text @click="showMenu = false">Cancel</v-btn>
                <v-btn color="indigo" text @click="$refs.menu.save(formModel.checkin)">Ok</v-btn>
            </v-date-picker>
        </v-menu>
    </v-form>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email, numeric } from 'vuelidate/lib/validators'
export default {
    mixins: [validationMixin],
    validations:{
        formModel: {
            type: {required},
            nights: {required},
            checkin: {required}
        },
    },
    computed:{
        typeError () {
            const errors = []
            if(!this.$v.formModel.type.$dirty){
                return errors
            }else{
                !this.$v.formModel.type.required && errors.push('Type is required')
                return errors
            }
        },
        nightsError () {
            const errors = []
            if(!this.$v.formModel.nights.$dirty){
                return errors
            }else{
                !this.$v.formModel.nights.required && errors.push('Nights is required')
                return errors
            }
        },
        checkinError () {
            const errors = []
            if(!this.$v.formModel.checkin.$dirty){
                return errors
            }else{
                !this.$v.formModel.checkin.required && errors.push('Checkin is required')
                return errors
            }
        },
        formValue(){
            return [
                {
                    text: this.form.type.label,
                    value: this.formModel.type
                },
                {
                    text: this.form.nights.label,
                    value: this.formModel.nights
                },
                {
                    text: this.form.checkin.label,
                    value: this.formModel.checkin
                }
            ]
        }
    },
    data() {
        return {
            showMenu: false,
            formModel: {
                type: 'business',
                nights: 1,
                checkin: null
            },
            types: ['Single Bed', 'Double Bed', 'Sweat'],
            form: {
                type: {
                    label: 'Room Type',
                    placeholder: 'Room type',
                    icon:'mdi-bed'
                },
                nights: {
                    label: 'Night(s)',
                    placeholder: 'How may nights?',
                    icon: 'mdi-numeric'
                },
                checkin: {
                    label: 'Checkin date',
                    placeholder: 'Checkin date',
                    icon: 'mdi-calendar'
                }
            },
        }
    },
}
</script>

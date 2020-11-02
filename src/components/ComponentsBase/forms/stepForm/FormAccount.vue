<template>
    <v-form ref="form" lazy-validation>
        <v-text-field
            outlined
            v-model="formModel.name"
            :label="form.name.label"
            :placeholder="form.name.placeholder"
            required
            :append-icon="form.name.icon"
            :error-messages="nameError"
            @blur="$v.formModel.name.$touch()"
            @input="$v.formModel.name.$touch()"
        ></v-text-field>
        <v-text-field
            outlined
            v-model="formModel.email"
            :label="form.email.label"
            :placeholder="form.email.placeholder"
            required
            :append-icon="form.email.icon"
            :error-messages="emailError"
            @blur="$v.formModel.email.$touch()"
            @input="$v.formModel.email.$touch()"
        ></v-text-field>
        <v-combobox
            outlined
            v-model="formModel.city"
            :items="cities"
            :label="form.city.label"
            :placeholder="form.city.placeholder"
            required
            :error-messages="cityError"
            @blur="$v.formModel.city.$touch()"
            @input="$v.formModel.city.$touch()"
        />
        <v-text-field
            outlined
            v-model="formModel.state"
            :label="form.state.label"
            :placeholder="form.state.placeholder"
            required
            :error-messages="stateError"
            @blur="$v.formModel.state.$touch()"
            @input="$v.formModel.state.$touch()"
        ></v-text-field>
    </v-form>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email, numeric } from 'vuelidate/lib/validators'
export default {
    mixins:[validationMixin],
    validations:{
        formModel:{
            name: {required, maxLength: maxLength(10)},
            email:{required, email},
            city: {required},
            state:{required}
        },
    },
    data() {
        return {
            formModel:{
                name:null,
                email:null,
                city: null,
                state:null
            },
            form:{
                name: {
                    label: 'Full Name',
                    placeholder: 'Tookit',
                    icon: 'mdi-account-check'
                },
                email: {
                    label: 'Email',
                    placeholder: 'codemoon@gmail.com',
                    icon: 'mdi-email'
                },
                city: {
                    label: 'City',
                    placeholder: 'Texas',
                },
                state: {
                    label: 'State/Provice/Region',
                    placeholder: 'Huston',
                }
            },
            cities: [
                'Lima',
                'La Paz',
                'Buenos Aires'
            ],
        }
    },
    computed:{
        nameError(){
            const errors = []
            if(!this.$v.formModel.name.$dirty){
                return errors
            }else{
                !this.$v.formModel.name.required && errors.push('Name is required')
                !this.$v.formModel.name.maxLength && errors.push('Name must be at most 10 character long')
                return errors
            }
        },
        emailError(){
            const errors = []
            if(!this.$v.formModel.email.$dirty){
                return errors
            }else{
                !this.$v.formModel.email.required && errors.push('Email is required')
                !this.$v.formModel.email.email && errors.push('Must be valid e-mail')
                return errors
            }
        },
        cityError(){
            const errors = []
            if(!this.$v.formModel.city.$dirty){
                return errors
            }else{
                !this.$v.formModel.city.required && errors.push('City is required')
                return errors
            }
        },
        stateError(){
            const errors = []
            if(!this.$v.formModel.state.$dirty){
                return errors
            }else{
                !this.$v.formModel.state.required && errors.push('State is required')
                return errors
            }
        },
        formValue(){
            return [
                {
                    text: this.form.name.label,
                    value: this.formModel.name
                },
                {
                    text: this.form.email.label,
                    value: this.formModel.email
                },
                {
                    text: this.form.city.label,
                    value: this.formModel.city
                },
                {
                    text: this.form.state.label,
                    value: this.formModel.state
                }
            ]
        }
    }
}
</script>

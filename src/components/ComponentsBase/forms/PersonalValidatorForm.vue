<template>
    <v-card>
        <v-card-title>
             Personal validate form
        </v-card-title>
        <v-card-text>
            <v-form>
                    <v-row>
                        <v-col
                            cols="12"
                            md="6"
                        >
                            <v-text-field
                                v-model="name"
                                label="Name"
                                required
                                :counter="10"
                                :error-messages="nameErrors"
                                @blur="$v.name.$touch()"
                                @input="$v.name.$touch()"
                            ></v-text-field>
                        </v-col>
                         <v-col
                            cols="12"
                            md="6"
                        >
                            <v-text-field
                                v-model="username"
                                label="User Name"
                                required
                                :counter="5"
                                :error-messages="usernameErrors"
                                @blur="$v.username.$touch()"
                                @input="$v.username.$touch()"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                            cols="12"
                            md="6"
                        >
                            <v-text-field
                                v-model="email"
                                label="E-mail"
                                required
                                :error-messages="emailError"
                                @blur="$v.email.$touch()"
                                @input="$v.email.$touch()"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            md="6"
                        >
                            <v-select
                                v-model="select"
                                label="Color"
                                required
                                :items="items"
                                :error-messages="selectErrors"
                                @blur="$v.select.$touch()"
                                @change="$v.select.$touch()"
                            ></v-select>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                            cols="12"
                            md="6"
                        >
                            <v-checkbox
                                v-model="checkbox"
                                label="Do you agree?"
                                required
                                :error-messages="checkboxErrors"
                                @blur="$v.checkbox.$touch()"
                                @input="$v.checkbox.$touch()"
                            >
                            </v-checkbox>
                        </v-col>
                        <v-col
                            cols="12"
                            md="6"
                        >
                            <v-file-input
                                multiple
                                label="File input"
                            ></v-file-input>
                        </v-col>
                    </v-row>
                    <v-divider class="mb-4"></v-divider>
                    <v-btn class="mr-4" @click="submit">Submit</v-btn>
                    <v-btn @click="clear">Clear</v-btn>
            </v-form>
        </v-card-text>
    </v-card>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'
export default {
    mixins: [validationMixin],
    validations:{
        name: { required, maxLength: maxLength(10) },
        username: { required, maxLength:maxLength(5) },
        email: { required, email},
        select: { required },
        checkbox: {
            checked(val){
                return val
            }
        }
    },
    data: () => ({
        name:'',
        username:'',
        email:'',
        select: null,
        items: [
            'Red',
            'Blue',
            'Yellow'
        ],
        checkbox: false
    }),
    computed:{
        nameErrors () {
            const errors = []
            if (!this.$v.name.$dirty){
                return errors
            }
            else{
                !this.$v.name.required && errors.push('Name is required.')
                !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
                return errors
            }
        },
        usernameErrors () {
            const errors = []
            if (!this.$v.username.$dirty){
                return errors
            }
            else{
                !this.$v.username.required && errors.push(' User Name is required.')
                !this.$v.username.maxLength && errors.push(' User Name must be at most 5 characters long')
                return errors
            }
        },
        emailError(){
            const errors = []
            if (!this.$v.email.$dirty){
                return errors
            }else{
                !this.$v.email.required && errors.push('Email is required')
                !this.$v.email.email && errors.push('Must be valid e-mail')
                return errors
            }
        },
        selectErrors () {
            const errors = []
            if(!this.$v.select.$dirty){
                return errors
            }else{
                !this.$v.select.required && errors.push('Color is required')
                return errors
            }
        },
        checkboxErrors () {
            const errors = []
            if(!this.$v.checkbox.$dirty){
                return errors
            }else{
                !this.$v.checkbox.checked && errors.push('You must agree to continue!')
                return errors
            }
        }
    },
    methods:{
        submit () {
            this.$v.$touch()
        },
        clear () {
            this.$v.$reset()
            this.name = ''
            this.username = ''
            this.email = ''
            this.select = null
            this.checkbox = false
        }
    }
    // created: function(){
    //     console.log(name);
    // },
}
</script>

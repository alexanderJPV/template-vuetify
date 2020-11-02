<template>
    <v-card tile>
        <v-card-title>
            Contact Form
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
            <v-form>
                <v-text-field
                    outlined
                    v-model="form.name.values"
                    :label="form.name.label"
                    :placeholder="form.name.placeholder"
                    :append-icon="form.name.icon"
                    :error-messages="fullNameError"
                    @blur="$v.form.name.values.$touch()"
                    @input="$v.form.name.values.$touch()"
                ></v-text-field>
                <v-text-field
                    outlined
                    v-model="form.email.values"
                    :label="form.email.label"
                    :placeholder="form.email.placeholder"
                    :append-icon="form.email.icon"
                    :error-messages="emailError"
                    @blur="$v.form.email.values.$touch()"
                    @input="$v.form.email.values.$touch()"
                ></v-text-field>
                <v-text-field
                    outlined
                    v-model="form.address.values"
                    :label="form.address.label"
                    :placeholder="form.address.placeholder"
                    :error-messages="addressError"
                    :append-icon="form.address.icon"
                    @blur="$v.form.address.values.$touch()"
                    @input="$v.form.address.values.$touch()"
                ></v-text-field>
                <v-text-field
                    outlined
                    v-model="form.city.values"
                    :label="form.city.label"
                    :placeholder="form.city.placeholder"
                    :error-messages="cityError"
                    @blur="$v.form.city.values.$touch()"
                    @input="$v.form.city.values.$touch()"
                ></v-text-field>
                <v-text-field
                    outlined
                    v-model="form.state.values"
                    :label="form.state.label"
                    :placeholder="form.state.placeholder"
                    :error-messages="stateError"
                    @blur="$v.form.state.values.$touch()"
                    @input="$v.form.state.values.$touch()"
                ></v-text-field>
                <v-text-field
                    outlined
                    v-model="form.zip.values"
                    :label="form.zip.label"
                    :placeholder="form.zip.placeholder"
                    :error-messages="zipError"
                    @blur="$v.form.zip.values.$touch()"
                    @input="$v.form.zip.values.$touch()"
                    type="number"
                ></v-text-field>
                <v-combobox
                    outlined
                    v-model="form.country.values"
                    :label="form.country.label"
                    :placeholder="form.country.placeholder"
                    :items="countries"
                    :error-messages="countryError"
                    @blur="$v.form.country.values.$touch()"
                    @input="$v.form.country.values.$touch()"
                />
            </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <v-btn text @click="clear">Cancel</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="indigo" dark tile @click="submit">Submit</v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email, numeric } from 'vuelidate/lib/validators'
export default {
    mixins: [validationMixin],
    validations: {
        form: {
            name: {
                values: {required}
            },
            email: {
                values:{required, email}
            },
            address: {
                values: {required}
            },
            city: {
                values: {required}
            },
            state:{
                values: {required}
            },
            zip:{
                values: {required, numeric}
            },
            country:{
                values: {required}
            }
        }
    },
    computed:{
        fullNameError(){
            const errors = []
            if (!this.$v.form.name.values.$dirty){
                return errors
            }
            else{
                !this.$v.form.name.values.required && errors.push('Full Name is required.')
                return errors
            }
        },
        emailError(){
            const errors = []
            if (!this.$v.form.email.values.$dirty){
                return errors
            }else{
                !this.$v.form.email.values.required && errors.push('Email is required.')
                !this.$v.form.email.values.email && errors.push('Must be valid E-mail.')
                return errors
            }
        },
        addressError(){
            const errors = []
             if (!this.$v.form.address.values.$dirty){
                return errors
            }else{
                !this.$v.form.address.values.required && errors.push('Address is required.')
                return errors
            }
        },
        cityError(){
            const errors = []
             if (!this.$v.form.city.values.$dirty){
                return errors
            }else{
                !this.$v.form.city.values.required && errors.push('City is required.')
                return errors
            }
        },
        stateError(){
            const errors = []
             if (!this.$v.form.state.values.$dirty){
                return errors
            }else{
                !this.$v.form.state.values.required && errors.push('Estate is required.')
                return errors
            }
        },
        zipError(){
            const errors = []
             if (!this.$v.form.zip.values.$dirty){
                return errors
            }else{
                !this.$v.form.zip.values.required && errors.push('Zip is required.')
                !this.$v.form.zip.values.numeric && errors.push('Must be valid number.')
                return errors
            }
        },
        countryError(){
            const errors = []
             if (!this.$v.form.country.values.$dirty){
                return errors
            }else{
                !this.$v.form.country.values.required && errors.push('Country is required.')
                return errors
            }
        }
    },
    methods:{
        submit(){
            this.$v.$touch()
        },
        clear(){
            this.$v.$reset()
            this.form.name.values = ''
            this.form.email.values = ''
            this.form.address.values = ''
            this.form.city.values = ''
            this.form.state.values = ''
            this.form.zip.values = ''
            this.form.country.values = ''
        }
    },
    data() {
        return {
            form: {
                name: {
                    values: '',
                    label: 'Full Name',
                    placeholder: 'Ray',
                    icon: 'mdi-account-check',
                },
                email: {
                    values:'',
                    label: 'Email',
                    placeholder: 'codemoon@gmail.com',
                    icon: 'mdi-email'
                },
                address: {
                    values:'',
                    label: 'Address Line',
                    placeholder: 'Address',
                    icon: 'mdi-map-marker'
                },
                city: {
                    values:'',
                    label: 'City',
                    placeholder: 'La Paz',
                },
                state: {
                    values:'',
                    label: 'State/Provice/Region',
                    placeholder: 'Murillo',
                },
                zip: {
                    values:'',
                    label: 'Zip',
                    placeholder: '528020',
                },
                country: {
                    values:'',
                    label: 'Country',
                    placeholder: 'Bolivia',
                }
            },
            countries: [
                'Afghanistan',
                'Albania',
                'Algeria',
                'Andorra',
                'Angola',
                'Anguilla',
                'Antigua &amp; Barbuda',
                'Argentina',
                'Armenia',
                'Aruba',
                'Australia',
                'Austria',
                'Azerbaijan',
                'Bahamas',
                'Bahrain',
                'Bangladesh',
                'Barbados',
                'Belarus',
                'Belgium',
                'Belize',
                'Benin',
                'Bermuda',
                'Bhutan',
                'Bolivia',
                'Bosnia &amp; Herzegovina',
                'Botswana',
                'Brazil',
                'British Virgin Islands',
                'Brunei',
                'Bulgaria',
                'Burkina Faso',
                'Burundi',
                'Cambodia',
                'Cameroon',
                'Cape Verde',
                'Cayman Islands',
                'Chad',
                'Chile',
                'China',
                'Colombia',
                'Congo',
                'Cook Islands',
                'Costa Rica',
                'Cote D Ivoire',
                'Croatia',
                'Cruise Ship',
                'Cuba',
                'Cyprus',
                'Czech Republic',
                'Denmark',
                'Djibouti',
                'Dominica',
                'Dominican Republic',
                'Ecuador',
                'Egypt',
                'El Salvador',
                'Equatorial Guinea',
                'Estonia',
                'Ethiopia',
                'Falkland Islands',
                'Faroe Islands',
                'Fiji',
                'Finland',
                'France',
                'French Polynesia',
                'French West Indies',
                'Gabon',
                'Gambia',
                'Georgia',
                'Germany',
                'Ghana',
                'Gibraltar',
                'Greece',
                'Greenland',
                'Grenada',
                'Guam',
                'Guatemala',
                'Guernsey',
                'Guinea',
                'Guinea Bissau',
                'Guyana',
                'Haiti',
                'Honduras',
                'Hong Kong',
                'Hungary',
                'Iceland',
                'India',
                'Indonesia',
                'Iran',
                'Iraq',
                'Ireland',
                'Isle of Man',
                'Israel',
                'Italy',
                'Jamaica',
                'Japan',
                'Jersey',
                'Jordan',
                'Kazakhstan',
                'Kenya',
                'Kuwait',
                'Kyrgyz Republic',
                'Laos',
                'Latvia',
                'Lebanon',
                'Lesotho',
                'Liberia',
                'Libya',
                'Liechtenstein',
                'Lithuania',
                'Luxembourg',
                'Macau',
                'Macedonia',
                'Madagascar',
                'Malawi',
                'Malaysia',
                'Maldives',
                'Mali',
                'Malta',
                'Mauritania',
                'Mauritius',
                'Mexico',
                'Moldova',
                'Monaco',
                'Mongolia',
                'Montenegro',
                'Montserrat',
                'Morocco',
                'Mozambique',
                'Namibia',
                'Nepal',
                'Netherlands',
                'Netherlands Antilles',
                'New Caledonia',
                'New Zealand',
                'Nicaragua',
                'Niger',
                'Nigeria',
                'Norway',
                'Oman',
                'Pakistan',
                'Palestine',
                'Panama',
                'Papua New Guinea',
                'Paraguay',
                'Peru',
                'Philippines',
                'Poland',
                'Portugal',
                'Puerto Rico',
                'Qatar',
                'Reunion',
                'Romania',
                'Russia',
                'Rwanda',
                'Saint Pierre &amp; Miquelon',
                'Samoa',
                'San Marino',
                'Satellite',
                'Saudi Arabia',
                'Senegal',
                'Serbia',
                'Seychelles',
                'Sierra Leone',
                'Singapore',
                'Slovakia',
                'Slovenia',
                'South Africa',
                'South Korea',
                'Spain',
                'Sri Lanka',
                'St Kitts &amp; Nevis',
                'St Lucia',
                'St Vincent',
                'St. Lucia',
                'Sudan',
                'Suriname',
                'Swaziland',
                'Sweden',
                'Switzerland',
                'Syria',
                'Taiwan',
                'Tajikistan',
                'Tanzania',
                'Thailand',
                "Timor L'Este",
                'Togo',
                'Tonga',
                'Trinidad &amp; Tobago',
                'Tunisia',
                'Turkey',
                'Turkmenistan',
                'Turks &amp; Caicos',
                'Uganda',
                'Ukraine',
                'United Arab Emirates',
                'United Kingdom',
                'United States',
                'Uruguay',
                'Uzbekistan',
                'Venezuela',
                'Vietnam',
                'Virgin Islands (US)',
                'Yemen',
                'Zambia',
                'Zimbabwe'
            ],
        }
    },
}
</script>

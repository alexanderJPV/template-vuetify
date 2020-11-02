<template>
<v-container fluid>
    <v-row>
        <v-col md="6" cols="12">
            <personal-validator-form class="mb-4"></personal-validator-form>
            <personal-validator-form></personal-validator-form>
        </v-col>
        <v-col md="6" cols="12">
            <movie-form></movie-form>
        </v-col>
    </v-row>
    <v-row>
        <v-col md="6" cols="12">
            <personal-profile></personal-profile>
        </v-col>
        <v-col md="6" cols="12">
            <user-dinamic-form></user-dinamic-form>
        </v-col>
    </v-row>
</v-container>
</template>
<script>
import PersonalValidatorForm from '@/components/ComponentsBase/forms/PersonalValidatorForm'
import MovieForm from '@/components/ComponentsBase/forms/MovieForm'
import PersonalProfile from '@/components/ComponentsBase/forms/PersonalProfile'
import UserDinamicForm from '@/components/ComponentsBase/forms/UserDinamicForm'

export default {
    components:{
        PersonalValidatorForm,
        MovieForm,
        PersonalProfile,
        UserDinamicForm,
    }
}
</script>

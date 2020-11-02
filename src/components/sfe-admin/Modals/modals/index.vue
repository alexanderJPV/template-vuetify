<template>
    <v-container style="background-color:skyblue" fluid>
        Using <code>v-dialog</code> for forms
        <v-row>
            <v-col class="d-flex" cols="12" >
                <simple-modal-form class="grey justify-center"></simple-modal-form>
                <select-modal-form class="orange justify-center"></select-modal-form>
                <edit-user-modal-form class="green justify-center"></edit-user-modal-form>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" class="d-flex">
                <create-user-modal-form  class="orange justify-center"></create-user-modal-form>
                <add-informtion-modal-form class="green justify-center"></add-informtion-modal-form>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import SimpleModalForm from '@/components/ComponentsBase/modals/SimpleModalForm'
import SelectModalForm from '@/components/ComponentsBase/modals/SelectModalForm'
import EditUserModalForm from '@/components/ComponentsBase/modals/EditUserModalForm'
import CreateUserModalForm from '@/components/ComponentsBase/modals/CreateUserModalForm'
import AddInformtionModalForm from '@/components/ComponentsBase/modals/AddInformtionModalForm'

export default {
    components:{
        SimpleModalForm,
        SelectModalForm,
        EditUserModalForm,
        CreateUserModalForm,
        AddInformtionModalForm
    }
}
</script>

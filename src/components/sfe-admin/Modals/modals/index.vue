<template>
    <v-container style="background-color:skyblue" fluid>
        Using <code>v-dialog</code> for forms
        <v-row class="red">
            <v-col class="primary d-flex" cols="12" >
                <simple-modal-form class="grey justify-center"></simple-modal-form>
                <select-modal-form class="orange justify-center"></select-modal-form>
                <edit-user-modal-form class="green justify-center"></edit-user-modal-form>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import SimpleModalForm from '@/components/ComponentsBase/modals/SimpleModalForm'
import SelectModalForm from '@/components/ComponentsBase/modals/SelectModalForm'
import EditUserModalForm from '@/components/ComponentsBase/modals/EditUserModalForm'

export default {
    components:{
        SimpleModalForm,
        SelectModalForm,
        EditUserModalForm
    }
}
</script>

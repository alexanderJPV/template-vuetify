<template>
    <v-container style="background-color:skyblue;" fluid>
        Using <code>v-dialog</code> with simple dialog/not dissmis/windows
        <v-row>
            <v-col cols="12" class="d-flex">
                <dialog-accept class="justify-center"></dialog-accept>
                <dialog-not-dissmis class="justify-center"></dialog-not-dissmis>
                <dialog-windows class="justify-center"></dialog-windows>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" class="d-flex">
                <dialog-loader class="justify-center"></dialog-loader>
                <dialog-circular-loader class="justify-center"></dialog-circular-loader>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import DialogAccept from '@/components/ComponentsBase/dialogs/DialogAccept'
import DialogNotDissmis from '@/components/ComponentsBase/dialogs/DialogNotDissmis'
import DialogWindows from '@/components/ComponentsBase/dialogs/DialogWindows'
import DialogLoader from '@/components/ComponentsBase/dialogs/DialogLoader'
import DialogCircularLoader from '@/components/ComponentsBase/dialogs/DialogCircularLoader'

export default {
    components:{
        DialogAccept,
        DialogNotDissmis,
        DialogWindows,
        DialogLoader,
        DialogCircularLoader
    }
}
</script>

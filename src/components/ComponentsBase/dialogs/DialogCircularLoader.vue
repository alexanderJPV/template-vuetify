<template>
    <v-row>
        <v-col cols="12" md="6" align="center">
            <v-btn
                :disabled="dialog"
                :loading="dialog"
                class="white--text"
                color="primary"
                @click="dialog = true"
            >
                Dialog Circle loading
            </v-btn>
            <v-dialog v-model="dialog" fullscreen transition="disabled">
                <v-container fluid fill-height style="background-color: rgba(000, 000, 000, 0.2);">
                    <v-layout justify-center align-center>
                    <v-progress-circular
                        indeterminate
                        :size="50"
                        color="primary">
                    </v-progress-circular>
                    </v-layout>
                </v-container>
            </v-dialog>
        </v-col>
    </v-row>
</template>
<script>
export default {
    data() {
        return {
            dialog: false,
        }
    },
    watch: {
      dialog (val) {
        if (!val) return

        setTimeout(() => (this.dialog = false), 4000)
      },
    },
}
</script>
<style scoped>
    .v-progress-circular {
        margin: 1rem;
    }
</style>

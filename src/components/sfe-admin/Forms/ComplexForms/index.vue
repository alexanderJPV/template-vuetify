<template>
<v-container fluid>
        <v-row>
              <v-col md="6" cols="12">
                        <contact-form></contact-form>
              </v-col>
              <v-col md="6" cols="12">
                      <payment-form></payment-form>
              </v-col>
        </v-row>
</v-container>
</template>
<script>
import ContactForm from '@/components/ComponentsBase/forms/ContactForm'
import PaymentForm   from '@/components/ComponentsBase/forms/PaymentForm'
export default {
        components:{
                ContactForm,
                PaymentForm,
        }
}
</script>

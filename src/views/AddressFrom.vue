<template>
  <v-container text-xs-center>
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <h1>Edit Information</h1>
      </v-flex>

      <v-flex xs5 mt-5>
        <v-card>
          <v-card-text>
            <v-form>
               <v-text-field v-model="address.name" label="Name"></v-text-field>
               <v-text-field v-model="address.tel" label="Phone Number"></v-text-field>
               <v-text-field v-model="address.email" label="Mail Address"></v-text-field>
               <v-text-field v-model="address.address" label="Street Address"></v-text-field>
               <v-btn @click="$router.push({ name: 'addresses' })">Cancel</v-btn>
               <v-btn color="info" @click="submit">Save</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  created() {
    if (!this.$route.params.address_id) return
    const address = this.$store.getters.getAddressById(this.$route.params.address_id)
    if (address) {
      this.address = address
    } else {
      this.$router.push({name: 'addresses'})
    }
  },

  data () {
    return {
      address: {}
    }
  },
  methods: {
     submit() {
       if (this.$route.params.address_id) {
         this.updateAddress({ id: this.$route.params.address_id, address: this.address})
         }else {
          this.addAddress(this.address)
         }
       
        this.addAddress(this.address)
        this.$router.push({name: 'addresses'})
        this.address = {}
     },
     ...mapActions(['addAddress', 'updateAddress'])
  }
}
</script>
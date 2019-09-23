import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'

Vue.config.productionTip = false




  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBYPo4a1KYEnutIfRlMUO2wZGmYoW9AR7o",
    authDomain: "my-address-pj-969c1.firebaseapp.com",
    databaseURL: "https://my-address-pj-969c1.firebaseio.com",
    projectId: "my-address-pj-969c1",
    storageBucket: "",
    messagingSenderId: "358965838788",
    appId: "1:358965838788:web:59409cde1987da03609a91"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);






new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

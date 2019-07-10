<template>
  <v-footer dark height="auto" class="pozadinaCrna">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 md6>
          <form>
            <h3>Contact us</h3>
            <v-text-field
              v-model="name"
              v-validate="'required|max:30'"
              :counter="30"
              :error-messages="errors.collect('name')"
              label="Name"
              data-vv-name="name"
              required
            ></v-text-field>
            <v-text-field
              v-model="email"
              v-validate="'required|email'"
              :error-messages="errors.collect('email')"
              label="E-mail"
              data-vv-name="email"
              required
            ></v-text-field>
            <v-text-field
              v-model="message"
              v-validate="'required'"
              :error-messages="errors.collect('message')"
              label="Message"
              data-vv-name="message"
              required
            ></v-text-field>

            <v-btn flat @click="submit">submit</v-btn>
            <v-btn flat @click="clear">clear</v-btn>
          </form>
        </v-flex>

        <v-flex d-flex justify-center xs12 md6 pa-3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2854.95035378994!2d20.53250585120005!3d44.31097111756242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47574d5e6cb7d77f%3A0xad5ff6f61e11ad9d!2z0JDQu9C10LrRgdC1INCo0LDQvdGC0LjRm9CwIDQyLCA1NDAxMzA!5e0!3m2!1ssr!2srs!4v1556463301146!5m2!1ssr!2srs"
            allowfullscreen
          ></iframe>
        </v-flex>

        <v-layout>
          <v-flex xs12>
            <v-card flat class="pozadinaCrna">
              <v-card-text class="headline">
                <p class="text-xs-center">Get connected with us on social networks!</p>
              </v-card-text>
              <v-card-title class="justify-center">
                
                <v-btn 
                v-for="network in socialnetworks" 
                :key="network.icon" 
                class="mx-3" 
                icon>
                <a v-bind:href="network.link" target="_blank" >
                  <v-icon size="24px">{{ network.icon }}</v-icon>
                  </a>
                </v-btn>
              </v-card-title>
              <v-card-actions class="pozadinaCrna aling-center justify-center">
                &copy;2019 —
                <strong>3G Mreža</strong>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-layout>
    </v-container>
  </v-footer>
</template>

<script>
import Vue from "vue";
import VeeValidate from "vee-validate";

Vue.use(VeeValidate);

export default {
  $_veeValidate: {
    validator: "new"
  },

  data: () => ({
    socialnetworks: [
      {icon: "fab fa-facebook", link: "https://www.facebook.com/branchecohostel/" },
      {icon: "fab fa-instagram", link: "https://www.instagram.com/hostelbranch/?hl=sr"}
      ],
    name: "",
    email: "",
    message: "",
    dictionary: {
      attributes: {
        email: "E-mail Address"
        // custom attributes
      },
      custom: {
        name: {
          required: () => "Name can not be empty",
          max: "The name field may not be greater than 30 characters"
          // custom messages
        },
        message: {
          required: "Select field is required"
        }
      }
    }
  }),

  mounted() {
    this.$validator.localize("en", this.dictionary);
  },

  methods: {
    submit() {
      this.$validator.validateAll();
    },
    clear() {
      this.name = "";
      this.email = "";
      this.message = "";
      this.$validator.reset();
    }
  }
};
</script>

<style scoped>
div.v-input.v-text-field.v-input--is-focused.theme--dark.primary--text {
  color: #f46036 !important;
  caret-color: #f46036 !important;

}

a{
  text-decoration: none;
  color: white;
 
}
</style>


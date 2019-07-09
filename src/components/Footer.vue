<template>
  <v-footer dark height="auto">
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

            <v-btn @click="submit">submit</v-btn>
            <v-btn @click="clear">clear</v-btn>
          </form>
        </v-flex>

        <v-flex d-flex justify-center xs12 md6 mdAndUP-pl-3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2854.95035378994!2d20.53250585120005!3d44.31097111756242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47574d5e6cb7d77f%3A0xad5ff6f61e11ad9d!2z0JDQu9C10LrRgdC1INCo0LDQvdGC0LjRm9CwIDQyLCA1NDAxMzA!5e0!3m2!1ssr!2srs!4v1556463301146!5m2!1ssr!2srs"
            allowfullscreen
          ></iframe>
        </v-flex>

        <v-flex xs12 md12>
          <v-card class="flex" flat tile>
            <v-card-title class="naslovNar justify-center">
              <strong class="subheading">Get connected with us on social networks!</strong>

              <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
                <v-icon size="24px">{{ icon }}</v-icon>
              </v-btn>
            </v-card-title>

            <v-card-actions class="naslovNar justify-center">
              &copy;2019 —
              <strong>3G Mreža</strong>
            </v-card-actions>
          </v-card>
        </v-flex>
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
    icons: ["fab fa-facebook", "fab fa-instagram"],
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
.main-container {
  grid-template-rows: 50px auto auto;
  grid-template-areas: "n n n n n n n n n" "m m m m m m m m m" "f f f f f f f f f";
}

body {
  color: #1f2421;
  background: #fff;
  line-height: 1.6;
}

main {
  grid-area: m;
}

.kontakt-container {
  max-width: 769px;
  margin-left: auto;
  margin-right: auto;
  padding: 1em;
}

ul {
  list-style: none;
  padding: 0;
}

.kontakt-branch {
  text-align: center;
}

.kontakt-branch span {
  color: #91d0aa;
}

.kontakt-wrapper {
  color: #fff;
  background: rgb(31, 36, 33, 0.7);
  box-shadow: 0 0 20px 0 rgba(31, 36, 33, 0.7);
}

.kontakt-wrapper > * {
  padding: 1em;
}

.kontakt-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #91d0aa;
  color: #1f2421;
}

.kontakt-info h3,
.kontakt-info ul {
  text-align: center;
  margin: 0 0 1rem 0;
}

/* stilizovanje forme */

.kontakt form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}

.kontak form label {
  display: block;
}

.kontak form p {
  margin: 0;
}

.kontakt form .kontakt-p {
  grid-column: 1/3;
}

.kontakt form button,
.kontakt form input,
.kontakt form textarea {
  width: 100%;
  padding: 1em;
  border: 1px solid #fff;
  background: none;
}

.kontakt form button {
  background: #f46036;
  border: 0;
  text-transform: uppercase;
}

.kontakt form button:hover,
.contact form button:focus {
  background: #91d0aa;
  color: #fff;
  outline: 0;
  transition: background-color 2s ease-out;
}

.porukaKorisnik {
  text-align: center;
  padding: 10px;
  background: #91d0aa;
  color: white;
  margin-bottom: 10px;
  display: none;
}

@media (min-width: 769px) {
  .kontakt-wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
  .kontakt-wraper > * {
    padding: 2em;
  }
  .kontakt-info h3,
  .kontakt-info ul,
  .kontakt-branch {
    text-align: left;
  }
}
</style>


<template>
  <select class="form-select language_select" @change="switchLocale($event)">
    <option
      v-for="locale in locales"
      :value="locale"
      :key="locale"
      :selected="locale == current_language"
      class="language_option"
    >
      {{ locale }}
    </option>
  </select>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: "LocaleSwitcher",
  mounted() {
    this.loadLanguageFromLocalStorage();
  },
  methods: {
    ...mapMutations(['SAVE_LANGUAGE']),
    switchLocale(event) {
      let locale = event.target.value;
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
        localStorage.setItem("current_language", locale);
        this.SAVE_LANGUAGE(locale);
      }
    },
    loadLanguageFromLocalStorage: function () {
      let language = localStorage.getItem("current_language");

      if (language != null && this.$i18n.locale !== language) {
        this.current_language = language;
        this.$i18n.locale = language;
      }
    },
  },
  data() {
    return {
      locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(","),
      current_language: "en",
    };
  },
};
</script>

<style scoped>
.language_select,
.language_option {
  text-transform: uppercase;
}

.language_select {
  background-color: rgba(255, 255, 255, 0.5) !important;
  border: none;
  color: #fff;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.language_option {
  color: black;
}
</style>


<template>
  <div class="about p-5 d-flex flex-column">

    <div class="container d-flex flex-column">
      <div class="card">
        <div class="card-body d-flex flex-column">
          <h1 class="text-center header-section">{{ $t("aboutROPP") }}</h1>
          <img src="Logo.png" class="flex-shrink-2" />
          <p class="py-5">{{ $t("aboutROPPText") }}</p>
          <a href="http://www.ragnarok.wiki/" class="btn btn-primary">Go to Ragnarok Wiki</a>
        </div>
      </div>
    </div>

    <div class="container container-about my-5 d-flex flex-column">
      <div class="p-5">
        <h1 class="text-center header-section">{{ $t("aboutProject") }}</h1>
        <p class="py-5">{{ $t("aboutText") }}</p>
      </div>

      <div class="p-5">
          <h1 class="text-center header-section">{{ $t("warning") }}</h1>
          <p>{{ $t("warningText") }}</p>
      </div>
      <div class="p-5">
        <h1 class="text-center header-section">{{ $t("team") }}</h1>
        <a href="https://github.com/rageycomma/vue-visual-simulator/graphs/contributors">
          <img v-lazy="{ src: 'https://contrib.rocks/image?repo=rageycomma/vue-visual-simulator', delay: 250 }" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
const props = defineProps(['appName']);

onMounted(() => {
  document.title = `${props.appName} About`
});
</script>

<style scoped>
.about {
  min-height: 85vh;
}
.container-about {
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}

.html5-icon {
  color: #e54d26;
}
.js-icon {
  color: #f7e018;
}
.css3-icon {
  color: #2163af;
}

.fa-icon {
  color: #5e94d9;
}

.vuejs-icon {
  color: #3fb27f;
}

.bootstrap-icon {
  color: #6b419a;
}

.header-section {
  padding: 2px 5px;
}
</style>

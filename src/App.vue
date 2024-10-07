<template>
  <div v-if="isLoading" class="spinner-container">
    <div class="loading-container">
      <div class="spinner">
        <svg
          width="70"
          height="66"
          viewBox="0 0 70 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="47.7033"
            height="47.3902"
            rx="15"
            transform="matrix(0.763685 -0.645589 0.692168 0.721737 0 31.2966)"
            fill="#DF8317"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34.9609 34.7255L41.7424 20.9707L43.9316 24.6969L39.4459 34.7261L34.9609 34.7255Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34.0977 31.6253L27.3162 45.3801L25.127 41.6539L29.6127 31.6248L34.0977 31.6253Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M37.2953 30.0973L36.0527 32.5613L40.8254 32.4365L40.9785 31.3288L41.5456 29.9485L37.2953 30.0973Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M28.7963 33.4429L27.748 35.7217L31.3976 36.8964L33.5622 32.562L28.7963 33.3617"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M49.1873 32.9951L48.6891 33.8531L45.5341 39.2297V39.2379L42.3791 44.6145L41.8727 45.4807H29.4025L30.9302 42.8741L34.9316 36.0511H38.9916L35.4962 42.0079H39.8468L42.4875 37.5056H42.4958L44.1231 34.7274H20.925L20.4186 33.8613L19.9121 32.9951L20.4186 32.129L23.5736 26.7609V26.7528L26.7203 21.3757L27.2346 20.5095H39.7057L37.6715 23.9823H37.6632L34.1678 29.9391H30.1078L33.6032 23.9823H29.2609L26.6119 28.4846L24.985 31.2628H48.1748L48.6896 32.129L49.1873 32.9951Z"
            fill="white"
          />
        </svg>
      </div>
      <div class="loader"></div>
    </div>
  </div>
  <div v-else :dir="isRTL ? 'rtl' : 'ltr'">
    <div id="app">
      <div class="">
        <NavBar />
      </div>
      <div class="row">
        <router-view></router-view>
      </div>
      <div class="row">
        <TheFooter ref="searchComponent"></TheFooter>
      </div>
      <a href="https://wa.me/1003022897" class="whatsapp-icon" target="_blank">
        <i class="fab fa-whatsapp"></i>
      </a>
    </div>
  </div>
</template>

<script>
import NavBar from './components/common/NavBar.vue'
import TheFooter from './components/common/TheFooter.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    TheFooter,
  },
  data() {
    return {
      isLoading: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false
    }, 200)
  },
  methods: {
    toggleMenu() {
      this.mobileMenu = !this.mobileMenu
    },
    toggleLanguage() {
      this.$i18n.locale = this.$i18n.locale === 'en' ? 'ar' : 'en'
      this.currentLanguage =
        this.currentLanguage === 'English' ? 'العربية' : 'English'
    },
  },
  computed: {
    isRTL() {
      return this.$i18n.locale === 'ar'
    },
  },
}
</script>

<style>
#app {
  font-family: 'Cairo', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow: hidden;
}
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #f0f0f0;
}

.spinner {
  position: relative;
  z-index: 2;
}

.loader {
  position: absolute;
  width: 100px;
  height: 100px;
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-top: 8px solid #df8317;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  z-index: 1;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-thumb {
  background-color: #df8317;
  border-radius: 6px;
}

::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #df8217da;
}
.whatsapp-icon {
  position: fixed;
  bottom: 20px;
  inset-inline-end: 20px; /* بدلاً من right */
  background-color: #df8317;
  color: white;
  font-size: 26px;
  padding: 0 8px;
  border-radius: 50%;
  z-index: 1000;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.whatsapp-icon:hover {
  background-color: #ffffff;
  color: #25d366;
}
</style>

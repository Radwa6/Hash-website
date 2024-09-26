<template>
  <nav
    :class="{
      scrolled: isScrolled,
      'contact-page': isContactPage,
      'default-page': !isContactPage,
    }"
    class="navbarr w-100"
  >
    <div id="app" :dir="isRTL ? 'rtl' : 'ltr'">
      <header class="header-area">
        <nav
          class="navigation d-flex justify-content-between align-content-center"
        >
          <router-link to="/ThePage" class="logo w-50">
            <div class="d-flex justify-content-start ml-5 mr-5">
              <div v-if="isScrolled">
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
              <div v-else>
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
            </div>
          </router-link>

          <button class="mobilebtn" @click="toggleMenu()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="27"
              viewbox="0 0 30 27"
            >
              <g fill="none" fill-rule="evenodd">
                <g fill="#fff" style="fill: #df8317">
                  <g>
                    <path
                      d="M0 17H30V19H0zM0 25H30V27H0z"
                      transform="translate(-1376 -48) translate(1376 48)"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </button>

          <div class="menu-area" :class="{ show: mobileMenu }">
            <ul class="">
              <router-link to="/ThePage" exact-active-class="active-link">
                <li class="text-dark">{{ $t('home') }}</li>
              </router-link>

              <router-link
                :to="{ path: '/ThePage', hash: '#system-section' }"
                exact-active-class="active-link"
              >
                <li class="text-dark">{{ $t('about') }}</li>
              </router-link>

              <router-link
                :to="{ path: '/ThePage', hash: '#servies-section' }"
                exact-active-class="active-link"
              >
                <li class="text-dark">{{ $t('services') }}</li>
              </router-link>

              <router-link
                :to="{ path: '/ThePage', hash: '#advantages-section' }"
                exact-active-class="active-link"
              >
                <li class="text-dark">{{ $t('projects') }}</li>
              </router-link>

              <router-link to="/Contact">
                <button class="">
                  {{ $t('contact') }}
                </button>
              </router-link>

              <a href="#" @click.prevent="toggleLanguage">{{
                currentLanguage
              }}</a>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  </nav>
</template>

<script>
import ScrollReveal from 'scrollreveal'

export default {
  name: 'ThePage',

  data() {
    return {
      isScrolled: false,
      mobileMenu: false,
      currentLanguage: 'English',
      imageUrl: require('@/assets/logo.png'),
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)

    const scrollReveal = ScrollReveal({
      reset: true,
      mobile: true,
      easing: 'ease-in-out',
      duration: 800,
      delay: 0,
    })
    scrollReveal.reveal('.hidden-section', {
      origin: 'bottom',
      distance: '50%',
      duration: 1000,
      opacity: 0,
    })
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 100
    },
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
    isContactPage() {
      return this.$route.name === 'Contact'
    },
    isRTL() {
      return this.$i18n.locale === 'ar'
    },
  },
}
</script>

<style scoped>
nav {
  font-family: 'Cairo', sans-serif;
}
.navbarr {
  transition: background-color 0.3s ease;
}

.default-page {
  padding: 0 !important;
  background-color: white;
  color: black !important;
}
.contact-page {
  background-color: #fff;
  color: black !important;
}
.contact-page a {
  color: black !important;
}
.navbarr {
  position: fixed;
  z-index: 1000;
  background-color: transparent;
  transition: background-color 0.3s ease;
}
.active-link {
  color: #df8317 !important;
}

li:hover {
  color: #df8317 !important;
}
.navbarr.scrolled {
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
}
.navbarr a {
  color: rgb(0, 0, 0) !important;
  transition: color 0.3s ease;
}
.navbarr.scrolled a {
  color: black !important;
}

a:hover {
  text-decoration: none;
}
ul,
li {
  margin: 0;
  padding: 0;
  padding-inline-start: 0;
}
a :hover {
  text-decoration: none;
}

.logo {
  font-size: 30px;
  font-weight: 600;
}
.logo {
  transition: all 0.3s ease;
}
.navigation {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.menu-area {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-preferred-size: auto;
  flex-basis: auto;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  position: relative;
}
.marginauto {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: end;
}
.menu-area ul {
  width: 100%;
}
.menu-area button {
  background-color: #df8317;
  padding: 10px;
  border-radius: 10px;
  border: none;
  transition: padding 0.3s, box-shadow 0.3s, font-size 0.3s;
  color: white;
}
.menu-area li {
  display: inline-block;
}
.menu-area li a {
  display: inline-block;
  padding: 10px 5px;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 500;
  color: #000;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.menu-area a {
  font-size: 18px;
}
.subIocn {
  position: relative;
  display: inline-block;
}
.subIocn::before {
  position: absolute;
  display: block;
  content: '';
  left: -12px;
  top: -10px;
  width: 6px;
  height: 6px;
  border: solid #000;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.sub li {
  display: block;
}
.sub li a {
  display: block;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  padding: 8px 15px;
}
.sub li a:hover {
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.sub {
  display: none;
  -webkit-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
  position: absolute;
  top: 100%;
  width: 100%;
  min-width: 10rem;
  max-width: 12rem;
  border-radius: 6px;
  -webkit-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}
.mega {
  display: none;
  -webkit-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
  position: absolute;
  top: 100%;
  width: auto;
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: 90%;
  border-radius: 6px;
  -webkit-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}
.menu-area li:hover .sub {
  display: block;
  -webkit-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}
.menu-area li:hover .mega {
  display: block;
  -webkit-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}
.mega-menu {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 15px;
}
.mega li {
  display: block;
}
.mega-item {
  width: 25%;
}
.mega-item h3 {
  font-size: 18px;
  line-height: 1.3;
  font-weight: 600;
}
.mega-menu li {
  display: block;
}

.mega-menu li a {
  display: inline-block;
  padding: 8px 0;
}
.mobilebtn {
  display: none;
  background-color: rgba(255, 255, 255, 0.472);
}
.navigation button {
  border: none;
}
@media (max-width: 1199.98px) {
  .logo {
    margin-right: -60px;
    width: auto;
    font-size: 20px;
    font-weight: 600;
  }
  .header-area {
    padding: 10px 40px;
  }
  .mobilebtn {
    display: block;
    background-color: rgba(255, 255, 255, 0);
  }

  .menu-area {
    background-color: #fff;
    display: none;
    -webkit-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }
  .menu-area.show button {
    width: 100%;
  }
  .menu-area.show a {
    width: 100%;
    color: #000 !important;
  }
  .menu-area.show {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
    -webkit-box-flex: 100% !important;
    -ms-flex-positive: 100% !important;
    flex-grow: 100% !important;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .marginauto {
    display: block;
  }
  .menu-area li {
    display: block;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    position: relative;
  }
  .sub,
  .mega {
    position: static;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    display: none !important;
  }

  .sub.active {
    display: block !important;
    -webkit-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }
  .mega.active {
    display: block !important;
    -webkit-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }
  .menu-area li a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 10px 0;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 500;
    color: #000;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    position: relative;
    border-top: 1px solid #ccc;
  }
  .menu-area li:first-child a {
    border-top: 1px solid transparent;
  }
  .sub li a {
    padding: 8px 15px !important;
  }
  .mega-menu li a {
    padding: 8px 0 !important;
  }
  .subIocn {
    position: absolute;
    top: 6px;
    right: 4px;
    z-index: 9;
    display: inline-block;
    border: 1px solid #ccc;
    padding: 5px;
    height: 22px;
    width: 22px;
  }
  .subIocn::before {
    left: 0;
    right: 0;
    top: 9px;
    margin: 1px auto;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  .subIocn.active::before {
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    top: 9px;
    -webkit-transform: rotate(225deg);
    -ms-transform: rotate(225deg);
    transform: rotate(225deg);
  }

  .mega-item {
    width: 33.33%;
  }
}
@media (max-width: 991.98px) {
  .header-area {
    padding: 10px 40px;
  }
  .mega-item {
    width: 50%;
  }
  .mega {
    height: 300px;
    overflow-y: scroll;
  }
}
@media (max-width: 767.98px) {
  .header-area {
    padding: 10px 40px;
  }
  .mega-item {
    width: 100%;
  }
}
a {
  color: white;
  padding: 10px 12px;
  border-radius: 5px;
  text-decoration: none;
  margin: 0 5px;
  cursor: pointer;
  width: 20%;
  color: #111c55;
}
.logo img {
  max-width: 100%;
  height: auto;
}
.overlay-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 60%;
  height: 80%;
  z-index: -10;
}
.navbarr.scrolled .mobilebtn svg path {
  fill: #df8317;
}
</style>

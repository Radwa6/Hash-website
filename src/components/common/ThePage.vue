<template>
  <div class="ThePage" :dir="isRTL ? 'rtl' : 'ltr'">
    <div class="navbarHeader pt-5">
      <section class="header">
        <div class="d-flex align-items-center m-5">
          <div
            class="animate__animated animate__fadeInDown w-50 m-5 p-3"
            data-il8n="task"
            style="background-color: #00000011"
          >
            <h1 class="w-100">{{ $t('headerTitle') }}</h1>
            <p class="text mt-4">
              {{ $t('headerText') }}
            </p>
            <div class="mt-5">
              <router-link to="/Contact">
                <button>{{ $t('SeeMore') }}</button>
              </router-link>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="about container" id="system-section">
      <div
        class="row pt-5 pb-5 position-relative d-flex justify-content-center align-items-center"
      >
        <div
          class="col-6 p-4 position-relative justify-content-center"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <p
            style="
              color: #df8317;
              background-color: #fee6c963;
              width: 20%;
              padding: 3px 20px;
              border-radius: 50px;
            "
          >
            {{ $t('about_us') }}
          </p>
          <h1 style="font-weight: bold" class="mt-4">
            {{ $t('abouth') }}
            <span style="color: #df8317">{{ $t('abouthh') }}</span>
          </h1>
          <p class="mt-4">{{ $t('aboutinfo') }}</p>
          <router-link to="/Contact">
            <button class="mt-4">{{ $t('SeeMore') }}</button>
          </router-link>
          <router-link to="/">
            <button
              class="mt-4"
              style="background-color: transparent; color: #404852"
            >
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 0C16.0116 0 20.5 4.48625 20.5 10.0058C20.5 15.5137 16.0116 20 10.5 20C4.98842 20 0.5 15.5137 0.5 10.0058C0.5 4.48625 4.98842 0 10.5 0ZM9.361 6.02991C9.14865 6.02991 8.94595 6.07815 8.7529 6.17463C8.51158 6.3097 8.31853 6.52195 8.21236 6.77279C8.14479 6.94645 8.03861 7.46744 8.03861 7.47709C7.93243 8.04631 7.87452 8.9725 7.87452 9.99518C7.87452 10.9706 7.93243 11.8572 8.01931 12.4361C8.02896 12.4457 8.13514 13.0921 8.25097 13.314C8.46332 13.7192 8.87838 13.9701 9.32239 13.9701H9.361C9.65058 13.9604 10.2587 13.7096 10.2587 13.7C11.2819 13.2754 13.2992 11.9537 14.11 11.0757L14.168 11.0178C14.2741 10.9117 14.4093 10.7477 14.4382 10.7091C14.5927 10.5065 14.6699 10.2557 14.6699 10.0058C14.6699 9.72504 14.583 9.46454 14.4189 9.25229C14.3803 9.2137 14.2355 9.04969 14.1004 8.91462C13.3089 8.06561 11.2432 6.67631 10.1622 6.25181C9.99807 6.18524 9.58301 6.03956 9.361 6.02991Z"
                  fill="#404852"
                />
              </svg>

              {{ $t('WatchVideo') }}
            </button>
          </router-link>
        </div>
        <div class="col-6" data-aos="fade-up" data-aos-duration="2000">
          <img :src="imageUrl1" alt="image" class="img-fluid" />
        </div>
      </div>
    </div>

    <SlickSlider id="servies-section" />

    <div class="data container hidden-section mt-5 mb-5" data-il8n="egyption">
      <div
        class="process text-center"
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        <h1 style="font-weight: bold">
          {{ $t('processinfo') }}
          <span style="color: #df8317">{{ $t('processinfoo') }} </span>
        </h1>
        <p>{{ $t('processdescription') }}</p>
      </div>
      <div class="row d-flex justify-content-center text-center mt-5">
        <div class="col-sm-3">
          <div
            class="svg text-center justify-content-center"
            style="
              background-color: #202020;
              color: #fff;
              padding: 10px;
              border-radius: 50%;
              width: 40px;
              height: 40px;
              z-index: 999;
              position: absolute;
              margin: 0 16%;
            "
          >
            1
          </div>
          <img
            :src="imageUrl2"
            alt=""
            style="margin: -6% 0 0; z-index: 0; position: relative"
          />

          <h3>{{ $t('process1') }}</h3>
          <p>
            {{ $t('processp1') }}
          </p>
        </div>
        <div class="col-sm-1">
          <svg
            width="71"
            height="19"
            viewBox="0 0 71 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style="margin-top: 100%"
          >
            <path
              d="M22.0625 4.28175C12.9384 7.43194 3.39493 13.0237 0.858418 17.4456C0.0936503 19.4298 3.50134 17.8834 4.8785 16.7109C10.821 11.6514 14.3515 9.8162 20.9231 7.30584C35.91 1.58081 51.5208 0.60491 62.0047 8.93766C62.8731 9.87872 62.5525 10.1256 60.2989 10.0903C58.3237 10.109 57.7399 10.3976 58.1394 11.2168C58.8053 12.5821 60.2694 12.7425 66.5006 12.3439C70.1425 12.0612 70.6385 11.7865 70.3961 10.2561C69.987 7.67337 65.4935 2.01152 64.3412 2.6843C63.8452 2.95897 63.6913 4.25806 63.976 5.48768C64.2606 6.71731 64.2922 7.48404 63.5742 6.92412C52.634 -0.266099 36.8599 -0.827188 22.0625 4.28175Z"
              fill="#DF8317"
            />
          </svg>
        </div>

        <div class="col-sm-3">
          <div
            class="svg text-center justify-content-center"
            style="
              background-color: #df8317;
              color: #fff;
              padding: 10px;
              border-radius: 50%;
              width: 40px;
              height: 40px;
              z-index: 999;
              position: absolute;
              margin: 0 16%;
            "
          >
            2
          </div>
          <img
            :src="imageUrl3"
            alt=""
            style="margin: -6% 0 0; z-index: 0; position: relative"
          />
          <h3>{{ $t('process2') }}</h3>
          <p>
            {{ $t('processp2') }}
          </p>
        </div>
        <div class="col-sm-1">
          <svg
            width="71"
            height="19"
            viewBox="0 0 71 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style="margin-top: 100%"
          >
            <path
              d="M22.0625 4.28175C12.9384 7.43194 3.39493 13.0237 0.858418 17.4456C0.0936503 19.4298 3.50134 17.8834 4.8785 16.7109C10.821 11.6514 14.3515 9.8162 20.9231 7.30584C35.91 1.58081 51.5208 0.60491 62.0047 8.93766C62.8731 9.87872 62.5525 10.1256 60.2989 10.0903C58.3237 10.109 57.7399 10.3976 58.1394 11.2168C58.8053 12.5821 60.2694 12.7425 66.5006 12.3439C70.1425 12.0612 70.6385 11.7865 70.3961 10.2561C69.987 7.67337 65.4935 2.01152 64.3412 2.6843C63.8452 2.95897 63.6913 4.25806 63.976 5.48768C64.2606 6.71731 64.2922 7.48404 63.5742 6.92412C52.634 -0.266099 36.8599 -0.827188 22.0625 4.28175Z"
              fill="#DF8317"
            />
          </svg>
        </div>

        <div class="col-sm-3">
          <div
            class="svg text-center justify-content-center"
            style="
              background-color: #202020;
              color: #fff;
              padding: 10px;
              border-radius: 50%;
              width: 40px;
              height: 40px;
              z-index: 999;
              position: absolute;
              margin: 0 16%;
            "
          >
            3
          </div>
          <img
            :src="imageUrl4"
            alt=""
            style="margin: -6% 0 0; z-index: 0; position: relative"
          />

          <h3>{{ $t('process3') }}</h3>
          <p>
            {{ $t('processp3') }}
          </p>
        </div>
      </div>
    </div>

    <div
      class="Portofolio p-5"
      data-aos="fade-up"
      data-aos-duration="3000"
      style="background-color: #202020"
    >
      <div class="container" id="Portofolio-section">
        <div
          class="aos-init aos-animate animate__animated animate__fadeInDown d-flex justify-content-between"
          data-il8n="Portofolio"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1 style="color: #fff">
            {{ $t('OurrPortofolio') }}
            <span style="color: #df8317">{{ $t('OurPortofolio') }}</span>
          </h1>
          <a href="/" style="color: #df8317; text-decoration: none"
            >{{ $t('ViewPortofolio') }}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4297 5.92999L20.4997 12L14.4297 18.07"
                stroke="#DF8317"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.5 12H20.33"
                stroke="#DF8317"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>

        <div class="row mt-5 mb-4">
          <div class="col-sm-4 col-4">
            <div
              class="card"
              style="border: none; background-color: #4d4e4e4d; color: #ffffff"
            >
              <img
                class="card-img-top img-fluid"
                :src="imageUrl5"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">
                  {{ $t('VPNMobile') }}
                </h5>
                <p class="card-text">{{ $t('MobileApp') }}</p>
              </div>
            </div>
          </div>

          <div class="col-sm-4 col-4">
            <div
              class="card"
              style="border: none; background-color: #4d4e4e4d; color: #ffffff"
            >
              <img
                class="card-img-top img-fluid"
                :src="imageUrl6"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">
                  {{ $t('StreamingMobile') }}
                </h5>
                <p class="card-text">{{ $t('MobileApp') }}</p>
              </div>
            </div>
          </div>

          <div class="col-sm-4 col-4">
            <div
              class="card"
              style="border: none; background-color: #4d4e4e4d; color: #ffffff"
            >
              <img
                class="card-img-top img-fluid"
                :src="imageUrl7"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">
                  {{ $t('CreativeDigitalAgency') }}
                </h5>
                <p class="card-text">{{ $t('LandingPage') }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-sm-4 col-4">
            <div
              class="card"
              style="border: none; background-color: #4d4e4e4d; color: #ffffff"
            >
              <img
                class="card-img-top img-fluid"
                :src="imageUrl8"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">
                  {{ $t('PodcastMobile') }}
                </h5>
                <p class="card-text">{{ $t('MobileApp') }}</p>
              </div>
            </div>
          </div>

          <div class="col-sm-4 col-4">
            <div
              class="card"
              style="border: none; background-color: #4d4e4e4d; color: #ffffff"
            >
              <img
                class="card-img-top img-fluid"
                :src="imageUrl9"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">
                  {{ $t('MultimediaDesign') }}
                </h5>
                <p class="card-text">{{ $t('WebDesign') }}</p>
              </div>
            </div>
          </div>

          <div class="col-sm-4 col-4">
            <div
              class="card"
              style="border: none; background-color: #4d4e4e4d; color: #ffffff"
            >
              <img
                class="card-img-top img-fluid"
                :src="imageUrl10"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">
                  {{ $t('ParkingMobile') }}
                </h5>
                <p class="card-text">{{ $t('MobileApp') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="Member container text-center pt-5 pb-5"
      id="members-section"
      data-aos="fade-right"
      data-aos-duration="2000"
    >
      <div
        style="font-weight: bold"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <svg
          width="164"
          height="2"
          viewBox="0 0 164 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.5"
            y1="1"
            x2="162.5"
            y2="1.00001"
            stroke="#D8D8D8"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        {{ $t('TeamMember') }}
        <svg
          width="164"
          height="2"
          viewBox="0 0 164 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.5"
            y1="1"
            x2="162.5"
            y2="1.00001"
            stroke="#D8D8D8"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        <h1 class="m-4" style="font-weight: bold">
          <span style="color: #df8317">{{ $t('View') }}</span>
          {{ $t('Our Creative Team Members') }}
        </h1>
      </div>

      <teamSlider />
    </div>

    <div class="text-center m-5" id="partners-section">
      <h1 style="font-weight: bold">
        <span style="color: #df8317">{{ $t('Our') }}</span>

        {{ $t('partners') }}
      </h1>
      <p style="color: #696984">{{ $t('partner') }}</p>
      <ImageSlider class="mt-5" />
    </div>

    <!-- <Feedback
      id="feedback-section"
      data-aos="fade-up"
      data-aos-duration="2000"
    /> -->
  </div>
</template>

<script>
import ScrollReveal from 'scrollreveal'
import ImageSlider from '../common/ImageSlider.vue'
import teamSlider from '../common/teamSlider.vue'

import Swiper from 'swiper'
import 'swiper/swiper-bundle.min.css'

import SlickSlider from './SlickSlider.vue'
// import Feedback from './TheFeedback.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted, nextTick } from 'vue'

export default {
  name: 'ThePage',
  components: { ImageSlider, SlickSlider, teamSlider },

  data() {
    return {
      mobileMenu: false,
      currentLanguage: 'English',
      imageUrl1: require('@/assets/Group 1261152760.png'),
      imageUrl2: require('@/assets/process3.png'),
      imageUrl3: require('@/assets/process2.png'),
      imageUrl4: require('@/assets/process1.png'),
      imageUrl5: require('@/assets/Portofolio1.png'),
      imageUrl6: require('@/assets/Portofolio2.png'),
      imageUrl7: require('@/assets/Portofolio3.png'),
      imageUrl8: require('@/assets/Portofolio4.png'),
      imageUrl9: require('@/assets/Portofolio5.png'),
      imageUrl10: require('@/assets/Portofolio6.png'),
    }
  },
  mounted() {
    AOS.init({
      once: true,
      duration: 800,
    })
    this.$nextTick(() => {
      AOS.refresh()
    })
    new Swiper('.swiper-container', {})
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
  watch: {
    $route() {
      nextTick(() => {
        AOS.refresh()
      })
    },
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

<style scoped>
@import 'aos/dist/aos.css';

.navbarHeader {
  height: 100vh;
  position: relative;
  background-image: url('/src/assets/header\ bg.png');
  background-size: cover;

  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
}

.header {
  position: relative;
  z-index: 2;
  color: white;
  padding: 80px 0;
  width: 100%;
  z-index: 1;
}

.ThePage {
  text-align: start;
  overflow: hidden;
  width: 100%;
}

.header .row {
  justify-content: center;
  padding: 80px 180px;
  align-items: center;
}
.header h1 {
  font-weight: bold;
  font-size: 52px;
  width: 70%;
  color: #ffffff;
}

.header .text {
  color: #ffffff;
  font-size: 22px;
  width: 70%;
  margin-top: 30px;
}

.header button,
.about button {
  background-color: #df8317;
  color: #e5e7f2;
  padding: 14px 15%;
  border-radius: 10px;
  border: none;
  transition: padding 0.3s, box-shadow 0.3s, font-size 0.3s,
    background-color 0.5s, color 0.5s;
}

button:hover {
  box-shadow: inset 0px 0px 15px rgba(49, 49, 49, 0.717);
  transform: scale(1.05);
  transition: box-shadow 0.5s, transform 0.3s;
}

@keyframes disappearDust {
  0% {
    box-shadow: inset 0px 0px 15px rgba(49, 49, 49, 0.717);
  }
  100% {
    box-shadow: inset 0px 0px 0px rgba(49, 49, 49, 0);
  }
}

button:hover {
  animation: disappearDust 1.5s forwards;
}

@media (max-width: 480px) {
  .header {
    height: auto;
    padding: 10px;
  }
  .header .row {
    justify-content: center;
    padding: 40px;
  }
  .header img {
    margin: 80px 0;
  }

  .header h1 {
    font-size: 18px;
    font-weight: bold;
  }

  .header p,
  .header .text {
    font-size: 12px;
  }

  button {
    padding: 8px 24px;
    font-size: 10px;
  }
}
@media (max-width: 768px) {
  .img-fluid {
    max-width: 100%;
    height: auto;
  }

  h1 {
    font-size: 16px;
  }

  p {
    font-size: 10px;
  }

  .btn {
    width: 100%;
    padding: 0.75rem;
  }
  .about svg {
    width: 30%;
  }
}

@media (max-width: 1368px) {
  .navbarHeader {
    height: 60vh;
    background-size: cover;
  }
}

.card-text {
  color: #858585;
}
.card-title {
  font-weight: bold;
}
</style>

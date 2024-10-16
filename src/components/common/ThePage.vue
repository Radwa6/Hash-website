<template>
  <div class="ThePage" :dir="isRTL ? 'rtl' : 'ltr'">
    <!-- ======= Header Section ======= -->
    <div class="row navbarHeader" :class="['navbarHeader', { rtl: isRTL }]">
      <div class="col-6" style="background-color: rgb(32, 32, 32)">
        <section
          class="header d-flex align-items-center justify-content-center ml-5 mr-5"
        >
          <div
            class="d-flex align-items-center justify-content-center"
            style="min-height: 60vh"
          >
            <div
              class="animate__animated animate__fadeInDown mt-5"
              data-il8n="task"
              style="
                background-color: #00000011;
                text-align: start;
                margin: 0 6%;
              "
            >
              <h1 class="w-100">{{ $t('headerTitle') }}</h1>
              <p class="text mt-4">
                {{ $t('headerText') }}
              </p>
              <div class="mt-5">
                <router-link to="/aboutUs">
                  <button class="button">{{ $t('SeeMore') }}</button>
                </router-link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="col-6">
        <div class="bgheader">
          <img
            src="../../assets/Main Picture.jpg"
            alt=""
            style="height: 80vh; margin: 10% -30%"
          />
        </div>
      </div>
    </div>
    <!-- End Header -->

    <!-- ======= about Section ======= -->
    <div class="about" id="system-section">
      <div
        class="row pt-5 pb-5 position-relative d-flex align-items-center justify-content-center"
      >
        <div
          class="col-6 p-4"
          data-aos="fade-right"
          data-aos-duration="2000"
          style="text-align: start"
        >
          <p
            style="
              color: #df8317;
              background-color: #fee6c963;
              display: inline-block;
              padding: 3px 20px;
              font-size: 24px;
              border-radius: 50px;
            "
          >
            {{ $t('about_us') }}
          </p>
          <h1 style="font-weight: bold" class="mt-2 mb-2">
            {{ $t('abouth') }}
            <span style="color: #df8317">{{ $t('abouthh') }}</span>
          </h1>
          <p>{{ $t('aboutinfo') }}</p>
          <router-link to="/aboutUs">
            <button class="button">{{ $t('SeeMore') }}</button>
          </router-link>
          <router-link
            to="/"
            style="
              background-color: transparent;
              color: #404852;
              text-decoration: none;
            "
          >
            <a class="mt-4 no-underline">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style="width: 5%; margin: 0 10px"
              >
                <path
                  d="M10.5 0C16.0116 0 20.5 4.48625 20.5 10.0058C20.5 15.5137 16.0116 20 10.5 20C4.98842 20 0.5 15.5137 0.5 10.0058C0.5 4.48625 4.98842 0 10.5 0ZM9.361 6.02991C9.14865 6.02991 8.94595 6.07815 8.7529 6.17463C8.51158 6.3097 8.31853 6.52195 8.21236 6.77279C8.14479 6.94645 8.03861 7.46744 8.03861 7.47709C7.93243 8.04631 7.87452 8.9725 7.87452 9.99518C7.87452 10.9706 7.93243 11.8572 8.01931 12.4361C8.02896 12.4457 8.13514 13.0921 8.25097 13.314C8.46332 13.7192 8.87838 13.9701 9.32239 13.9701H9.361C9.65058 13.9604 10.2587 13.7096 10.2587 13.7C11.2819 13.2754 13.2992 11.9537 14.11 11.0757L14.168 11.0178C14.2741 10.9117 14.4093 10.7477 14.4382 10.7091C14.5927 10.5065 14.6699 10.2557 14.6699 10.0058C14.6699 9.72504 14.583 9.46454 14.4189 9.25229C14.3803 9.2137 14.2355 9.04969 14.1004 8.91462C13.3089 8.06561 11.2432 6.67631 10.1622 6.25181C9.99807 6.18524 9.58301 6.03956 9.361 6.02991Z"
                  fill="#404852"
                />
              </svg>

              {{ $t('WatchVideo') }}
            </a>
          </router-link>
        </div>
        <div
          class="col-6 d-flex justify-content-end"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <img :src="imageUrl1" alt="image" class="img-fluid" />
        </div>
      </div>
    </div>
    <!-- End about -->

    <!-- ======= Services Section ======= -->
    <ServicesSection id="servies-section" />
    <!-- End Services -->

    <!-- ======= process Section ======= -->
    <div
      class="process text-center pt-5 pb-5"
      data-aos="fade-right"
      data-aos-duration="2000"
    >
      <div class="text-center" data-aos="fade-right" data-aos-duration="2000">
        <h1 style="font-weight: bold">
          Our process covers
          <span style="color: #df8317">everything!</span>
        </h1>
        <p>
          Each step of our process is on delivering high-quality results, with
          attention to every detail.
        </p>
      </div>
      <div
        class="row mt-5 d-flex justify-content-center align-content-center"
        data-aos="fade-up"
        data-aos-duration="2000"
        style="margin: 0 6%"
      >
        <div class="col-sm-3 mb-4">
          <div class="border-0 m-2">
            <div
              class="memberdesign"
              style="position: relative; display: inline-block"
            >
              <div
                class="p-3 pt-2 pb-2 d-flex justify-content-start"
                style="
                  background-color: #202020;
                  z-index: 3;
                  width: 40px;
                  height: 40px;
                  color: #fff;
                  border-radius: 50%;
                  position: absolute;
                  top: 10px;
                  left: 10px;
                "
              >
                1
              </div>
              <img
                src="../../assets/process1.png"
                alt="image"
                class="img-fluid"
                style="border-radius: 50%"
              />
            </div>

            <div class="card-body text-center mt-4">
              <h5 class="card-title">Analysis & Design</h5>
              <p class="card-text mt-1">
                Review this perception with the client and make the necessary
                adjustments
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-1 mb-4">
          <svg
            width="71"
            height="19"
            viewBox="0 0 71 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style="margin-top: 80%"
          >
            <path
              d="M22.0625 4.28175C12.9384 7.43194 3.39493 13.0237 0.858418 17.4456C0.0936503 19.4298 3.50134 17.8834 4.8785 16.7109C10.821 11.6514 14.3515 9.8162 20.9231 7.30584C35.91 1.58081 51.5208 0.60491 62.0047 8.93766C62.8731 9.87872 62.5525 10.1256 60.2989 10.0903C58.3237 10.109 57.7399 10.3976 58.1394 11.2168C58.8053 12.5821 60.2694 12.7425 66.5006 12.3439C70.1425 12.0612 70.6385 11.7865 70.3961 10.2561C69.987 7.67337 65.4935 2.01152 64.3412 2.6843C63.8452 2.95897 63.6913 4.25806 63.976 5.48768C64.2606 6.71731 64.2922 7.48404 63.5742 6.92412C52.634 -0.266099 36.8599 -0.827188 22.0625 4.28175Z"
              fill="#DF8317"
            />
          </svg>
        </div>

        <div class="col-sm-3 mb-4">
          <div class="border-0 m-2">
            <div
              class="memberdesign"
              style="position: relative; display: inline-block"
            >
              <div
                class="p-3 pt-2 pb-2 d-flex justify-content-start"
                style="
                  background-color: #df8317;
                  z-index: 3;
                  width: 40px;
                  height: 40px;
                  color: #fff;
                  border-radius: 50%;
                  position: absolute;
                  top: 10px;
                  left: 10px;
                "
              >
                2
              </div>
              <img
                src="../../assets/process2.png"
                alt="image"
                class="img-fluid"
                height="auto"
                style="border-radius: 50%"
              />
            </div>

            <div class="card-body text-center mt-4">
              <h5 class="card-title">Implementation</h5>
              <p class="card-text mt-1">
                Implementation phase and duration varies depending on the size
                of the project
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-1 mb-4">
          <svg
            width="71"
            height="19"
            viewBox="0 0 71 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style="margin-top: 80%"
          >
            <path
              d="M22.0625 4.28175C12.9384 7.43194 3.39493 13.0237 0.858418 17.4456C0.0936503 19.4298 3.50134 17.8834 4.8785 16.7109C10.821 11.6514 14.3515 9.8162 20.9231 7.30584C35.91 1.58081 51.5208 0.60491 62.0047 8.93766C62.8731 9.87872 62.5525 10.1256 60.2989 10.0903C58.3237 10.109 57.7399 10.3976 58.1394 11.2168C58.8053 12.5821 60.2694 12.7425 66.5006 12.3439C70.1425 12.0612 70.6385 11.7865 70.3961 10.2561C69.987 7.67337 65.4935 2.01152 64.3412 2.6843C63.8452 2.95897 63.6913 4.25806 63.976 5.48768C64.2606 6.71731 64.2922 7.48404 63.5742 6.92412C52.634 -0.266099 36.8599 -0.827188 22.0625 4.28175Z"
              fill="#DF8317"
            />
          </svg>
        </div>

        <div class="col-sm-3 mb-4">
          <div class="border-0 m-2">
            <div
              class="memberdesign"
              style="position: relative; display: inline-block"
            >
              <div
                class="p-3 pt-2 pb-2 d-flex justify-content-start"
                style="
                  background-color: #202020;
                  z-index: 3;
                  width: 40px;
                  height: 40px;
                  color: #fff;
                  border-radius: 50%;
                  position: absolute;
                  top: 10px;
                  left: 10px;
                "
              >
                3
              </div>
              <img
                src="../../assets/process3.png"
                alt="image"
                class="img-fluid"
                height="auto"
                style="border-radius: 50%"
              />
            </div>

            <div class="card-body text-center mt-4">
              <h5 class="card-title">Review and Closure</h5>
              <p class="card-text mt-1">
                The stage of delivering the final structure of the project and
                reviewing it
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ======= Portofolio Section ======= -->
    <div
      class="Portofolio p-2 pt-5 pb-5"
      data-aos="fade-up"
      data-aos-duration="3000"
      style="background-color: #202020"
    >
      <div style="margin: 0 6%" id="Portofolio-section">
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
          <router-link
            to="/allProjects"
            style="color: #df8317; text-decoration: none"
          >
            <button>
              {{ $t('ViewPortofolio') }}
              <div class="arrow-wrapper">
                <div class="arrow"></div>
              </div>
            </button>

            <!-- {{ $t('ViewPortofolio') }}
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
            </svg> -->
          </router-link>
        </div>

        <div class="row mt-5 mb-4" style="text-align: start">
          <div
            class="col-sm-4 col-6 mb-4"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div
              class="card"
              style="border: none; background-color: #4d4e4e4d; color: #ffffff"
            >
              <img
                class="card-img-top img-fluid fixed-height-image"
                :src="imageUrl5"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">
                  {{ $t('Gadawel') }}
                </h5>
                <p class="card-text">{{ $t('ERPSystem') }}</p>
              </div>
            </div>
          </div>

          <div
            class="col-sm-4 col-6 mb-4"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div
              class="card"
              style="border: none; background-color: #4d4e4e4d; color: #ffffff"
            >
              <img
                class="card-img-top img-fluid fixed-height-image"
                :src="imageUrl6"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">
                  {{ $t('Projectname6') }}
                </h5>
                <p class="card-text">{{ $t('MobileApp') }}</p>
              </div>
            </div>
          </div>

          <div
            class="col-sm-4 col-6 mb-4"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div
              class="card"
              style="border: none; background-color: #4d4e4e4d; color: #ffffff"
            >
              <img
                class="card-img-top img-fluid fixed-height-image"
                :src="imageUrl7"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">
                  {{ $t('Projectname5') }}
                </h5>
                <p class="card-text">{{ $t('LandingPage') }}</p>
              </div>
            </div>
          </div>

          <div
            class="col-sm-4 col-6 mb-4"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <div
              class="card"
              style="border: none; background-color: #4d4e4e4d; color: #ffffff"
            >
              <img
                class="card-img-top img-fluid fixed-height-image"
                :src="imageUrl8"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">
                  {{ $t('Projectname12') }}
                </h5>
                <p class="card-text">{{ $t('WebDesign') }}</p>
              </div>
            </div>
          </div>

          <div
            class="col-sm-4 col-6 mb-4"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <div
              class="card"
              style="border: none; background-color: #4d4e4e4d; color: #ffffff"
            >
              <img
                class="card-img-top img-fluid fixed-height-image"
                :src="imageUrl9"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">
                  {{ $t('Projectname2') }}
                </h5>
                <p class="card-text">{{ $t('WebDesign') }}</p>
              </div>
            </div>
          </div>

          <div
            class="col-sm-4 col-6 mb-4"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <div
              class="card"
              style="border: none; background-color: #4d4e4e4d; color: #ffffff"
            >
              <img
                class="card-img-top img-fluid fixed-height-image"
                :src="imageUrl10"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">
                  {{ $t('Projectname3') }}
                </h5>
                <p class="card-text">{{ $t('MobileApp') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Portofolio -->

    <!-- ======= Member Section ======= -->
    <div
      class="Member text-center pt-5 pb-5"
      id="members-section"
      data-aos="fade-right"
      data-aos-duration="2000"
    >
      <div
        style="font-weight: bold"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        {{ $t('TeamMember') }}

        <h1 class="m-4" style="font-weight: bold">
          <span style="color: #df8317">{{ $t('View') }}</span>
          {{ $t('Our Creative Team Members') }}
        </h1>
      </div>

      <teamSlider />
    </div>
    <!-- End Member -->

    <!-- ======= partners Section ======= -->
    <div class="text-center m-5" id="partners-section">
      <h1 style="font-weight: bold">
        <span style="color: #df8317">{{ $t('Our') }}</span>

        {{ $t('partners') }}
      </h1>
      <p style="color: #696984">{{ $t('partner') }}</p>
      <ImageSlider class="mt-5" />
    </div>
    <!-- End partners -->
  </div>
</template>

<script>
import ScrollReveal from 'scrollreveal'
import ImageSlider from '../common/ImageSlider.vue'
import teamSlider from '../common/teamSlider.vue'

import Swiper from 'swiper'
import 'swiper/swiper-bundle.min.css'

import ServicesSection from './ServicesSection.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted, nextTick } from 'vue'

export default {
  name: 'ThePage',
  components: { ImageSlider, ServicesSection, teamSlider },

  data() {
    return {
      mobileMenu: false,
      currentLanguage: 'English',
      imageUrl1: require('@/assets/about.png'),

      imageUrl5: require('@/assets/Gadawel.png'),
      imageUrl6: require('@/assets/Check.png'),
      imageUrl7: require('@/assets/Claimizer.png'),
      imageUrl8: require('@/assets/hrm.png'),
      imageUrl9: require('@/assets/RASAEL.png'),
      imageUrl10: require('@/assets/Itmain.png'),
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

/* .navbarHeader {
  min-height: 100vh;
  position: relative;
  background-image: url('/src/assets/Main\ Picture.jpg');
  background-size: cover;

  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
} */
h1 {
  font-weight: bold;
  font-size: 50px;
}
p {
  font-size: 26px;
}
h5 {
  font-weight: bold;
  font-size: 34px;
}
.navbarHeader {
  min-height: 50vh;
}
/* .bgheader {
  min-height: calc(
    100vh - 100px
  );
  background-image: url('/src/assets/Main Picture.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  padding-top: 150px;
  padding-bottom: 150px; 
} */

.header {
  position: relative;
  z-index: 2;
  color: white;
  padding: 80px 0;
  width: 100%;
  z-index: 1;
}

.ThePage {
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
  font-size: 56px;
  width: 70%;
  color: #ffffff;
}

.header .text {
  color: #ffffff;
  font-size: 30px;
  width: 70%;
  margin-top: 30px;
}
.about {
  margin: 0 6%;
}
/* From Uiverse.io by zjssun */
.button {
  position: relative;
  padding: 10px 46px;
  font-size: 26px;

  border-radius: 6px;
  border: none;
  color: #fff;
  cursor: pointer;
  background-color: #df8317;
  transition: all 0.2s ease;
}

.button:active {
  transform: scale(0.96);
}

.button:before,
.button:after {
  position: absolute;
  content: '';
  width: 150%;
  left: 50%;
  height: 100%;
  transform: translateX(-50%);
  z-index: -1000;
  background-repeat: no-repeat;
}

.button:hover:before {
  top: -70%;
  background-image: radial-gradient(circle, #df8317 20%, transparent 20%),
    radial-gradient(circle, transparent 20%, #df8317 20%, transparent 30%),
    radial-gradient(circle, #df8317 20%, transparent 20%),
    radial-gradient(circle, #df8317 20%, transparent 20%),
    radial-gradient(circle, transparent 10%, #df8317 15%, transparent 20%),
    radial-gradient(circle, #df8317 20%, transparent 20%),
    radial-gradient(circle, #df8317 20%, transparent 20%),
    radial-gradient(circle, #df8317 20%, transparent 20%),
    radial-gradient(circle, #df8317 20%, transparent 20%);
  background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%,
    10% 10%, 18% 18%;
  background-position: 50% 120%;
  animation: greentopBubbles 0.6s ease;
}

@keyframes greentopBubbles {
  0% {
    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%,
      40% 90%, 55% 90%, 70% 90%;
  }

  50% {
    background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%,
      50% 50%, 65% 20%, 90% 30%;
  }

  100% {
    background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%,
      50% 40%, 65% 10%, 90% 20%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
}

.button:hover::after {
  bottom: -70%;
  background-image: radial-gradient(circle, #df8317 20%, transparent 20%),
    radial-gradient(circle, #df8317 20%, transparent 20%),
    radial-gradient(circle, transparent 10%, #df8317 15%, transparent 20%),
    radial-gradient(circle, #df8317 20%, transparent 20%),
    radial-gradient(circle, #df8317 20%, transparent 20%),
    radial-gradient(circle, #df8317 20%, transparent 20%),
    radial-gradient(circle, #df8317 20%, transparent 20%);
  background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 20% 20%, 18% 18%;
  background-position: 50% 0%;
  animation: greenbottomBubbles 0.6s ease;
}

@keyframes greenbottomBubbles {
  0% {
    background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%,
      70% -10%, 70% 0%;
  }

  50% {
    background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%,
      105% 0%;
  }

  100% {
    background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%,
      110% 10%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
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

  .about a {
    display: block;
    font-size: 10px;
  }
  .header h1 {
    margin-top: 20%;
  }

  .header h1,
  h5 {
    font-size: 18px;
    font-weight: bold;
  }
  h5 {
    font-size: 14px;
    font-weight: bold;
  }
  .card-body {
    padding: 6px !important;
  }
  .header p,
  .header .text,
  p {
    font-size: 12px;
  }

  button {
    padding: 8px 24px;
    font-size: 10px;
  }
  .process svg {
    /* transform: rotate(90deg);
    margin: 0;
    display: flex;
    justify-content: center; */
    display: none;
  }
}
@media (max-width: 768px) {
  .header {
    height: auto;
    padding: 10px;
  }
  .img-fluid {
    max-width: 100%;
    height: auto;
  }

  .about a {
    display: block;
    font-size: 10px;
  }
  h1 {
    font-size: 16px;
  }

  p {
    font-size: 10px;
  }
  .header h1 {
    margin-top: 20%;
    font-size: 18px;
    font-weight: bold;
  }

  .header p,
  .header .text {
    font-size: 12px;
  }

  .btn {
    width: 100%;
    padding: 0.75rem;
  }
  .about svg {
    width: 30%;
  }
  .process svg {
    /* transform: rotate(90deg);
    margin: 0;
    display: flex;
    justify-content: center; */
    display: none;
  }
}

@media (max-width: 1368px) {
  .navbarHeader {
    min-height: 40vh;
  }
  .bgheader img {
    height: 48vh !important;
    margin: 30% -30% !important;
  }
}
@media (min-width: 600px) and (max-width: 1280px) {
  .navbarHeader {
    min-height: 30vh;
  }
  .bgheader img {
    height: 80vh !important;
    margin: 16% -16% !important;
  }
}
.card-text {
  color: #858585;
}
.card-title {
  font-weight: bold;
}
.card {
  min-height: 100%;
  border: none;
}

.card-body {
  display: flex;
  flex-direction: column;
}

.card img {
  height: auto;
  max-height: 200px;
  object-fit: cover;
}
.fixed-height-image {
  width: 100%;
  height: auto;
  min-height: 200px;
  max-height: 300px;
  object-fit: cover;
}

/* From Uiverse.io by thewizardofzen */
.Portofolio button {
  --primary-color: rgb(32, 32, 32);
  --secondary-color: #df8317;
  --arrow-width: 10px;
  --arrow-stroke: 2px;
  box-sizing: border-box;
  border: 0;
  border-radius: 50px;
  color: var(--secondary-color);
  padding: 1em 1.8em;
  background: var(--primary-color);
  display: flex;
  align-items: center;
  gap: 0.6em;
  font-weight: bold;
}

.Portofolio button .arrow-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.Portofolio button .arrow {
  margin-top: 1px;
  width: var(--arrow-width);
  background: var(--primary-color);
  height: var(--arrow-stroke);
  position: relative;
  transition: 0.2s;
}

.Portofolio button .arrow::before {
  content: '';
  box-sizing: border-box;
  position: absolute;
  border: solid var(--secondary-color);
  border-width: 0 var(--arrow-stroke) var(--arrow-stroke) 0;
  display: inline-block;
  top: -3px;
  right: 3px;
  transition: 0.2s;
  padding: 3px;
  transform: rotate(-45deg);
}

.Portofolio button:hover .arrow {
  background: var(--secondary-color);
}

.Portofolio button:hover .arrow:before {
  right: 0;
}
</style>

<template>
  <div v-if="isLoading" class="spinner-container">
    <div class="loading-container">
      <div class="spinner">
        <svg
          width="58"
          height="57"
          viewBox="0 0 58 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M57.5562 30.0371V30.2537C57.5592 33.2241 57.059 36.1736 56.077 38.977C55.948 39.3503 55.8097 39.7189 55.6577 40.083C54.0032 44.2049 51.3362 47.8431 47.9034 50.6613C44.4706 53.4796 40.3827 55.387 36.0175 56.2071H36.0037C34.7516 56.4408 33.484 56.5809 32.2112 56.6264C31.8655 56.6449 31.5153 56.6494 31.1651 56.6494H6.31308C6.0819 56.6494 5.85299 56.6039 5.6394 56.5155C5.42582 56.427 5.23173 56.2973 5.06827 56.1339C4.9048 55.9704 4.77513 55.7764 4.68668 55.5628C4.59822 55.3492 4.55271 55.1203 4.55273 54.8891V23.1202H25.8841V3.64136H31.1651C31.5153 3.64136 31.8655 3.64596 32.2112 3.66437C35.9204 3.80561 39.5577 4.73064 42.8837 6.3786C42.9206 6.39703 42.9528 6.41545 42.9851 6.42929C47.258 8.57883 50.8695 11.8447 53.4365 15.8807L53.4918 15.9636C53.5241 16.0097 53.5517 16.0558 53.5793 16.1019C53.5836 16.104 53.5871 16.1073 53.5896 16.1114C53.592 16.1155 53.5932 16.1201 53.5932 16.1249C54.6144 17.7685 55.452 19.5194 56.0908 21.3459C56.1046 21.3874 56.1185 21.4243 56.1323 21.4658C57.0775 24.2245 57.5587 27.1209 57.5562 30.0371Z"
            fill="#6B2F85"
          />
          <path
            opacity="0.5"
            d="M55.6577 40.083C54.0033 44.2049 51.3363 47.8431 47.9035 50.6614C44.4707 53.4797 40.3827 55.387 36.0176 56.2071H36.0038C34.7517 56.4408 33.4841 56.5809 32.2112 56.6264C31.8656 56.6449 31.5154 56.6494 31.1652 56.6494H25.7598V40.083H55.6577Z"
            fill="#A45591"
          />
          <path
            d="M57.5563 29.2352V30.2536C57.5593 33.2241 57.0592 36.1736 56.0771 38.977C55.9481 39.3502 55.8098 39.7189 55.6578 40.0829H25.7598V23.1201H25.8842V21.3459H56.1923C57.0941 23.8785 57.5555 26.5468 57.5563 29.2352Z"
            fill="#924C87"
          />
          <path
            opacity="0.5"
            d="M56.1928 21.346H25.8848V3.64136H31.1658C31.516 3.64136 31.8662 3.64596 32.2118 3.66437C35.9211 3.80561 39.5584 4.73064 42.8844 6.3786C42.9213 6.39703 42.9535 6.41545 42.9858 6.42929C44.8559 7.45831 46.6175 8.67332 48.2437 10.0559C50.2387 11.7451 51.9869 13.7058 53.4372 15.8807L53.4925 15.9636C53.5247 16.0097 53.5524 16.0558 53.58 16.1019C53.5843 16.104 53.5878 16.1073 53.5902 16.1114C53.5927 16.1155 53.5939 16.1201 53.5939 16.1249C54.662 17.7573 55.5343 19.5097 56.1928 21.346Z"
            fill="#A45591"
          />
          <path d="M19.139 0V17.549H0V10.696H11.358V0H19.139Z" fill="#4B4B50" />
        </svg>
      </div>
      <div class="loader"></div>
    </div>
  </div>
  <div v-else :dir="isRTL ? 'rtl' : 'ltr'" style="text-align: start">
    <div
      class="aboutUs text-center"
      :class="['menu-area', { allProjects: isProjectPage }]"
    >
      <h1 class="pt-5 pb-5" style="color: #fff">{{ $t('aboutus') }}</h1>
    </div>
    <div class="about container">
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
              display: inline-block;
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
        </div>
        <div class="col-6" data-aos="fade-up" data-aos-duration="2000">
          <img :src="imageUrl1" alt="image" class="img-fluid" />
        </div>
      </div>
    </div>

    <div class="Choose container hidden-section mt-5 mb-5" data-il8n="egyption">
      <div class="text-center" data-aos="fade-down" data-aos-duration="2000">
        <h1 style="font-weight: bold">
          {{ $t('Chooseinfo') }}
          <span style="color: #df8317">{{ $t('Chooseinfoo') }} </span>
        </h1>
        <p>{{ $t('Choosedescription') }}</p>
      </div>
      <div class="row d-flex justify-content-center mt-5">
        <div class="col-4">
          <div class="Us p-4">
            <svg
              width="116"
              height="117"
              viewBox="0 0 116 117"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M84.3739 44.7732C93.0015 61.3176 88.9914 80.4346 75.0952 87.6439C61.3733 94.754 33.5187 92.0248 24.8911 75.4804C16.2634 58.9361 37.3538 46.9444 45.2063 32.6772C56.1977 12.8197 75.7462 28.2288 84.3739 44.7732Z"
                fill="url(#paint0_linear_251_410)"
              />
              <path
                d="M46.1992 69.4363L46.2872 60.6263L48.9259 60.651C48.8492 64.515 53.4579 63.9723 53.4506 60.6997L55.6986 60.7203L55.6672 63.8417C58.4886 62.843 58.9679 67.4063 55.6419 66.4257L55.6106 69.531L46.1992 69.4363Z"
                fill="white"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M66.7055 70.053L57.8948 69.891L57.8928 67.4204C61.7568 67.455 61.1621 62.8524 57.8895 62.8957L57.8875 60.647L61.0088 60.6444C59.9801 57.8344 64.5381 57.3064 63.5935 60.6424L66.6981 60.6404L66.7055 70.053ZM70.0035 50.3157L65.3895 57.8217L63.1161 56.3597C65.1728 53.0877 60.9908 51.3404 59.3115 54.1497L57.3715 52.8924L59.0062 50.2337C56.0735 49.6357 58.0135 45.4777 60.3595 48.0317L61.9861 45.3864L70.0035 50.3157ZM46.7715 48.4764L55.5828 48.4764L55.5828 51.115C51.7182 51.077 52.3095 55.6804 55.5828 55.6397L55.5828 57.8884L52.4615 57.8884C53.4882 60.6997 48.9302 61.2244 49.8768 57.8884L46.7722 57.8884L46.7715 48.4764Z"
                fill="white"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_251_410"
                  x1="67.0728"
                  y1="25.1275"
                  x2="49.2227"
                  y2="90.8874"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#232220" />
                  <stop offset="1" stop-color="#202020" />
                </linearGradient>
              </defs>
            </svg>

            <h3>{{ $t('Ustitle') }}</h3>
            <p>{{ $t('Uspragraph') }}</p>
          </div>
        </div>

        <div class="col-4">
          <div class="Uss p-4">
            <svg
              width="116"
              height="117"
              viewBox="0 0 116 117"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M84.3739 44.7732C93.0015 61.3176 88.9914 80.4346 75.0952 87.6439C61.3733 94.754 33.5187 92.0248 24.8911 75.4804C16.2634 58.9361 37.3538 46.9444 45.2063 32.6772C56.1977 12.8197 75.7462 28.2288 84.3739 44.7732Z"
                fill="white"
              />
              <path
                d="M46.1992 69.4363L46.2872 60.6263L48.9259 60.651C48.8492 64.515 53.4579 63.9723 53.4506 60.6997L55.6986 60.7203L55.6672 63.8417C58.4886 62.843 58.9679 67.4063 55.6419 66.4257L55.6106 69.531L46.1992 69.4363Z"
                fill="url(#paint0_linear_221_732)"
                stroke="url(#paint1_linear_221_732)"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M66.7055 70.053L57.8948 69.891L57.8928 67.4204C61.7568 67.455 61.1621 62.8524 57.8895 62.8957L57.8875 60.647L61.0088 60.6444C59.9801 57.8344 64.5381 57.3064 63.5935 60.6424L66.6981 60.6404L66.7055 70.053ZM70.0035 50.3157L65.3895 57.8217L63.1161 56.3597C65.1728 53.0877 60.9908 51.3404 59.3115 54.1497L57.3715 52.8924L59.0062 50.2337C56.0735 49.6357 58.0135 45.4777 60.3595 48.0317L61.9861 45.3864L70.0035 50.3157ZM46.7715 48.4764L55.5828 48.4764L55.5828 51.115C51.7182 51.077 52.3095 55.6804 55.5828 55.6397L55.5828 57.8884L52.4615 57.8884C53.4882 60.6997 48.9302 61.2244 49.8768 57.8884L46.7722 57.8884L46.7715 48.4764Z"
                fill="url(#paint2_linear_221_732)"
                stroke="url(#paint3_linear_221_732)"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_221_732"
                  x1="52.0811"
                  y1="60.6263"
                  x2="52.0811"
                  y2="69.531"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#232220" />
                  <stop offset="1" stop-color="#202020" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_221_732"
                  x1="52.0811"
                  y1="60.6263"
                  x2="52.0811"
                  y2="69.531"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#232220" />
                  <stop offset="1" stop-color="#202020" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_221_732"
                  x1="58.3875"
                  y1="45.3864"
                  x2="58.3875"
                  y2="70.053"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#232220" />
                  <stop offset="1" stop-color="#202020" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_221_732"
                  x1="58.3875"
                  y1="45.3864"
                  x2="58.3875"
                  y2="70.053"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#232220" />
                  <stop offset="1" stop-color="#202020" />
                </linearGradient>
              </defs>
            </svg>

            <h3>{{ $t('Usstitle') }}</h3>
            <p>
              {{ $t('Usspragraph') }}
            </p>
          </div>
        </div>

        <div class="col-4">
          <div class="Us p-4">
            <svg
              width="116"
              height="117"
              viewBox="0 0 116 117"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M84.3739 44.7732C93.0015 61.3176 88.9914 80.4346 75.0952 87.6439C61.3733 94.754 33.5187 92.0248 24.8911 75.4804C16.2634 58.9361 37.3538 46.9444 45.2063 32.6772C56.1977 12.8197 75.7462 28.2288 84.3739 44.7732Z"
                fill="url(#paint0_linear_251_410)"
              />
              <path
                d="M46.1992 69.4363L46.2872 60.6263L48.9259 60.651C48.8492 64.515 53.4579 63.9723 53.4506 60.6997L55.6986 60.7203L55.6672 63.8417C58.4886 62.843 58.9679 67.4063 55.6419 66.4257L55.6106 69.531L46.1992 69.4363Z"
                fill="white"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M66.7055 70.053L57.8948 69.891L57.8928 67.4204C61.7568 67.455 61.1621 62.8524 57.8895 62.8957L57.8875 60.647L61.0088 60.6444C59.9801 57.8344 64.5381 57.3064 63.5935 60.6424L66.6981 60.6404L66.7055 70.053ZM70.0035 50.3157L65.3895 57.8217L63.1161 56.3597C65.1728 53.0877 60.9908 51.3404 59.3115 54.1497L57.3715 52.8924L59.0062 50.2337C56.0735 49.6357 58.0135 45.4777 60.3595 48.0317L61.9861 45.3864L70.0035 50.3157ZM46.7715 48.4764L55.5828 48.4764L55.5828 51.115C51.7182 51.077 52.3095 55.6804 55.5828 55.6397L55.5828 57.8884L52.4615 57.8884C53.4882 60.6997 48.9302 61.2244 49.8768 57.8884L46.7722 57.8884L46.7715 48.4764Z"
                fill="white"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_251_410"
                  x1="67.0728"
                  y1="25.1275"
                  x2="49.2227"
                  y2="90.8874"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#232220" />
                  <stop offset="1" stop-color="#202020" />
                </linearGradient>
              </defs>
            </svg>

            <h3>{{ $t('Ustitlee') }}Expert Support</h3>
            <p>{{ $t('Uspragraphh') }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="value container">
      <div
        class="row pt-5 pb-5 d-flex justify-content-center align-items-center"
      >
        <div class="col-6" data-aos="fade-up" data-aos-duration="2000">
          <img :src="imageUrl11" alt="image" class="img-fluid" />
        </div>

        <div
          class="col-6 p-4 justify-content-center"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <p
            style="
              color: #df8317;
              background-color: #fee6c963;
              display: inline-block;
              padding: 3px 20px;
              border-radius: 50px;
            "
          >
            {{ $t('OURVALUE') }}
          </p>
          <h1 style="font-weight: bold" class="mt-4">
            {{ $t('VALUE') }}
            <span style="color: #df8317">{{ $t('VALUEe') }}</span>
          </h1>
          <p class="mt-4">{{ $t('VALUEinfo') }}</p>
        </div>
      </div>
    </div>

    <Feedback
      id="feedback-section"
      data-aos="fade-up"
      data-aos-duration="2000"
    />

    <RecentEvents />
  </div>
</template>

<script>
import ScrollReveal from 'scrollreveal'
import Feedback from '../common/TheFeedback.vue'
import RecentEvents from './RecentEvents.vue'
import Swiper from 'swiper'
import 'swiper/swiper-bundle.min.css'
import { onMounted, nextTick } from 'vue'

import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: 'aboutUs',
  components: { Feedback, RecentEvents },

  data() {
    return {
      imageUrl1: require('@/assets/about.png'),
      imageUrl11: require('@/assets/Images.png'),
    }
  },
  computed: {
    isProjectPage() {
      return this.$route.name === 'allProjects'
    },
    isRTL() {
      return this.$i18n.locale === 'ar'
    },
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
}
</script>

<style scoped>
@import 'aos/dist/aos.css';

.aboutUs {
  background-image: url('@/assets/bg.png');
  padding: 80px 0;
}
.about button {
  background-color: #df8317;
  color: #e5e7f2;
  padding: 14px 15%;
  border-radius: 10px;
  border: none;
  transition: padding 0.3s, box-shadow 0.3s, font-size 0.3s,
    background-color 0.5s, color 0.5s;
}
.Us {
  box-shadow: 0px 0px 15px rgba(49, 49, 49, 0.2);
  border-radius: 10px;
}
.Uss {
  box-shadow: 0px 0px 15px rgba(49, 49, 49, 0.2);
  border-radius: 10px;
  background-color: #202020;
  color: #fff;
}
@media (max-width: 480px) {
  .Us,
  .Uss {
    padding: 5px !important;
  }
  .Us svg,
  .Uss svg {
    width: 50% !important;
    height: 50% !important;
  }
  h1 {
    font-size: 18px;
    font-weight: bold;
  }
  h3 {
    font-size: 14px;
  }
  p {
    font-size: 10px;
  }

  .about a {
    display: block;
    font-size: 10px;
  }
}
@media (max-width: 768px) {
  .Us,
  .Uss {
    padding: 5px !important;
  }
  .Us svg,
  .Uss svg {
    width: 50% !important;
    height: 50% !important;
  }
  h1 {
    font-size: 18px;
    font-weight: bold;
  }
  h3 {
    font-size: 14px;
  }
  p {
    font-size: 10px;
  }

  .about a {
    display: block;
    font-size: 10px;
  }
}
</style>

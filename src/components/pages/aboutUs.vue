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
  <div v-else>
    <div class="aboutUs" :class="['menu-area', { allProjects: isProjectPage }]">
      <h1 class="pt-5 pb-5" style="color: #fff">About Us</h1>
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
        <div class="col-sm-4">
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

        <div class="col-sm-4">
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

        <div class="col-sm-4">
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

    <Feedback
      id="feedback-section"
      data-aos="fade-up"
      data-aos-duration="2000"
    />
  </div>
</template>

<script>
import ScrollReveal from 'scrollreveal'
import Feedback from '../common/TheFeedback.vue'

export default {
  name: 'aboutUs',
  components: { Feedback },

  data() {
    return {
      imageUrl1: require('@/assets/Group 1261152760.png'),
    }
  },
  computed: {
    isProjectPage() {
      return this.$route.name === 'allProjects' // تحقق من اسم الصفحة (تأكد أن هذا يتوافق مع مسار صفحة البروجكت)
    },
  },
}
</script>

<style scoped>
.aboutUs {
  background-image: url('@/assets/Rectangle.png');
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
</style>

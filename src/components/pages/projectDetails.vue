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
    <div class="ThePage" :dir="isRTL ? 'rtl' : 'ltr'">
      <div
        class="project animate__animated animate__fadeInDown"
        data-il8n="task"
      >
        <div class="overlay"></div>
        <img
          src="../../assets/product1.png"
          alt=""
          height="400px"
          width="100%"
        />
      </div>

      <div
        class="projectinfo container"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div class="row">
          <div class="col-5 d-flex justify-content-end">
            <div class="ProductInfo p-3 m-5 w-80">
              <h2 style="font-weight: bold">{{ $t('projectInfo') }}</h2>
              <p>
                <span style="font-weight: bold">{{ $t('projectName') }} : </span
                >Gadawel
              </p>
              <p>
                <span style="font-weight: bold">{{ $t('client') }} : </span
                >Hashstudio
              </p>
              <p>
                <span style="font-weight: bold"
                  >{{ $t('finishingDate') }} : </span
                >2022-07-21
              </p>
              <p>
                <span style="font-weight: bold">{{ $t('duration') }} : </span>4
              </p>
              <p>
                <span style="font-weight: bold">{{ $t('category') }} : </span
                >{{ $t('webDevelopment') }}
              </p>
              <router-link
                :to="{ path: '/ThePage', hash: '#advantages-section' }"
                active-class="active-link"
              >
                <button class="View">
                  {{ $t('projectLink') }}
                </button>
              </router-link>
            </div>
          </div>

          <div _ngcontent-pbn-c75="" class="col-7 mt-5">
            <div
              _ngcontent-pbn-c75=""
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="700"
              class="my-4 project-data aos-init aos-animate mt-5"
            >
              <div
                _ngcontent-pbn-c75=""
                class="d-flex justify-content-between align-items-center mb-3"
              >
                <h1 _ngcontent-pbn-c75="" class="fs-sm-1-5 mb-0 mt-5">
                  {{ $t('Gadawel') }}
                </h1>
              </div>
              <p _ngcontent-pbn-c75="" class="fs-6 mb-4 project-desc">
                {{ $t('Gadawelinfo') }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="ProjectGallary container mt-5 mb-5"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h1>{{ $t('projectGallery') }}</h1>

        <div class="row mt-5">
          <div class="col-3">
            <img
              src="https://hashdash.hashstudio.dev/storage/projects/YLP4B2PMCUg7RoSMP8NSamWjKJEfZpKeCjXF4RFJ.png"
              alt=""
              width="100%"
              style="border-radius: 20px; margin: 10px 0"
            />
            <img
              src="https://hashdash.hashstudio.dev/storage/projects/sZVFwJLC1aZqzkR5AUmkwh7O57M5EV0GjPtkx75X.png"
              alt=""
              width="100%"
              style="border-radius: 20px; margin: 10px 0"
            />
          </div>
          <div class="col-3">
            <img
              src="https://hashdash.hashstudio.dev/storage/projects/hRJmowPKVJYFTpjCJwll1C7nsp726YjWTECa8BLI.png"
              alt=""
              width="100%"
              style="border-radius: 20px; margin: 10px 0"
            />
            <img
              src="https://hashdash.hashstudio.dev/storage/projects/Zb9zYf7vUocdjcSOadjIEJDt9QDFYkUchruLsyiu.png"
              alt=""
              width="100%"
              style="border-radius: 20px; margin: 10px 0"
            />
          </div>
          <div class="col-3">
            <img
              src="https://hashdash.hashstudio.dev/storage/projects/wb9RpF6UBE8b9byM4y6OFKHInIsA6zGcfHreZgCi.jpg"
              alt=""
              width="100%"
              style="border-radius: 20px; margin: 10px 0"
            />
          </div>
          <div class="col-3">
            <img
              src="https://hashdash.hashstudio.dev/storage/projects/VvAzZP32V4mgTslgN3lkWjWWiRyMTiLxqJ3AEFg8.png"
              alt=""
              width="100%"
              style="border-radius: 20px; margin: 10px 0"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted, nextTick } from 'vue'

export default {
  computed: {
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
.project {
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* لون شفاف، يمكنك تغييره */
  z-index: 1; /* لضمان ظهور overlay فوق الصورة */
}

.project img {
  z-index: 0; /* لجعل الصورة أسفل الطبقة */
}

.ProductInfo {
  background-color: #ffff;
  box-shadow: rgba(0, 0, 0, 0.16) 0 1px 4px !important;
  border-radius: 15px;
  text-align: start;
}
button {
  background-color: #df8317;
  color: #e5e7f2;
  padding: 14px 5%;
  border-radius: 10px !important;
  border: none;
  transition: padding 0.3s, box-shadow 0.3s, font-size 0.3s,
    background-color 0.5s, color 0.5s;
}
.projectinfo {
  margin-top: -6% !important;
  text-align: start;
}
@media (max-width: 768px) {
  .projectinfo .row {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -30% !important;
  }

  .projectinfo .col-5,
  .projectinfo .col-7 {
    width: 100% !important;
  }
  .projectinfo .col-7 {
    margin-top: -18% !important;
  }
  .ProductInfo {
    text-align: center;
    padding: 20px;
  }

  button {
    width: 100%;
    font-size: 16px;
  }

  .project-desc {
    text-align: justify;
  }
}
@media (max-width: 480px) {
  h2 {
    font-size: 1.4rem;
  }

  h1 {
    font-size: 1.6rem;
  }

  .project-desc {
    font-size: 0.9rem;
  }
}
.ProjectGallary {
  position: relative;
}
.ProjectGallary h1:after {
  content: '';
  position: absolute;
  width: 4rem;
  top: 3.5rem;
  left: 50%;
  transform: translate(-50%);
  height: 0.2rem;
  background-color: #df8317 !important;
  background-color: var(--second-color);
  border-radius: 0.5rem;
}
</style>

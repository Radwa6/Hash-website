<template>
  <div class="carousel-wrapper mb-5" :dir="isRTL ? 'rtl' : 'ltr'">
    <div class="carousel">
      <div class="carousel-inner">
        <div class="carousel-content">
          <div class="slide" v-for="(image, index) in images" :key="index">
            <img :src="image" alt="Image Slide" />
          </div>
          <div
            class="slide"
            v-for="(image, index) in images"
            :key="index + images.length"
          >
            <img :src="image" alt="Image Slide" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: [
        require('@/assets/Logo - Copy.png'),
        require('@/assets/Logo (1).png'),
        require('@/assets/Logo (2).png'),
        require('@/assets/Logo (3).png'),
        require('@/assets/Logo (4).png'),
        require('@/assets/Logo (5).png'),
        require('@/assets/Logo - Copy.png'),
        require('@/assets/Logo (1).png'),
        require('@/assets/Logo (2).png'),
        require('@/assets/Logo (3).png'),
        require('@/assets/Logo (4).png'),
        require('@/assets/Logo (5).png'),
        require('@/assets/Logo - Copy.png'),
        require('@/assets/Logo (1).png'),
        require('@/assets/Logo (2).png'),
        require('@/assets/Logo (3).png'),
        require('@/assets/Logo (4).png'),
        require('@/assets/Logo (5).png'),
        require('@/assets/Logo - Copy.png'),
        require('@/assets/Logo (1).png'),
        require('@/assets/Logo (2).png'),
        require('@/assets/Logo (3).png'),
        require('@/assets/Logo (4).png'),
        require('@/assets/Logo (5).png'),
        require('@/assets/Logo - Copy.png'),
        require('@/assets/Logo (1).png'),
        require('@/assets/Logo (2).png'),
        require('@/assets/Logo (3).png'),
        require('@/assets/Logo (4).png'),
        require('@/assets/Logo (5).png'),
        require('@/assets/Logo - Copy.png'),
        require('@/assets/Logo (1).png'),
        require('@/assets/Logo (2).png'),
        require('@/assets/Logo (3).png'),
        require('@/assets/Logo (4).png'),
        require('@/assets/Logo (5).png'),
        require('@/assets/Logo - Copy.png'),
        require('@/assets/Logo (1).png'),
        require('@/assets/Logo (2).png'),
        require('@/assets/Logo (3).png'),
        require('@/assets/Logo (4).png'),
        require('@/assets/Logo (5).png'),
      ],
    }
  },
  computed: {
    isRTL() {
      return this.$i18n.locale === 'en'
    },
  },
}
</script>
<style scoped>
.carousel-wrapper {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 120px;
}
.carousel {
  width: 100%;
  height: 100%;
}
.carousel-inner {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.carousel-content {
  display: flex;
  width: calc(100% * 2);
  height: 100%;
  animation: scroll 20s linear infinite;
}
.slide {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 100%;
  margin-right: 20px;
}
.slide img {
  width: 70%;
  height: auto;
}
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(60%);
  }
}
@media (max-width: 768px) {
  .carousel-wrapper {
    height: 100px;
  }
  .slide {
    width: 120px;
    margin-right: 10px;
  }
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-60%);
    }
  }
}
@media (max-width: 480px) {
  .carousel-wrapper {
    height: 80px;
  }
  .slide {
    width: 100px;
    margin-right: 25px;
  }
  @keyframes scroll {
    0% {
      transform: translateX(50%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
}
</style>

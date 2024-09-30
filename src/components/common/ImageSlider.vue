<template>
  <div class="carousel-wrapper" :dir="isRTL ? 'rtl' : 'ltr'">
    <div class="carousel">
      <div class="carousel-inner">
        <div class="carousel-content">
          <div class="slide" v-for="(image, index) in images" :key="index">
            <img :src="image" alt="Image Slide" />
          </div>
          <!-- تكرار الصور -->
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
        require('@/assets/nB83P.png'),
        require('@/assets/zkJ3j.png'),
        require('@/assets/lonSZ.png'),
        require('@/assets/JodXv.png'),
        require('@/assets/fTbIM.png'),
        require('@/assets/384fd.png'),
        require('@/assets/74hxb.png'),
      ],
    }
  },
}
</script>

<style scoped>
.carousel-wrapper {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 200px; /* يمكنك تعديل هذا لتناسب حجم السلايدر */
}

.carousel-inner {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.carousel-content {
  display: flex;
  width: calc(100% * 2); /* عرض مضاعف ليتناسب مع تكرار الصور */
  animation: scroll 20s linear infinite; /* تكرار الحركة */
}

.slide {
  flex: 0 0 auto; /* يجعل العناصر تأخذ المساحة اللازمة */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px; /* عرض الصورة */
  margin-right: 20px; /* مساحة بين الصور */
}

.slide img {
  width: 100%;
  height: auto; /* الحفاظ على النسبة الأصلية للصورة */
}

@keyframes scroll {
  0% {
    transform: translateX(0); /* بدء الحركة */
  }
  100% {
    transform: translateX(-50%); /* الانتقال لنصف العرض */
  }
}

@media (max-width: 768px) {
  .carousel-wrapper {
    height: 150px;
  }
  .slide {
    width: 120px;
  }
}

@media (max-width: 480px) {
  .carousel-wrapper {
    height: 100px;
  }
  .slide {
    width: 100px;
  }
}
</style>

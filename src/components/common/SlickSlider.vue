<template>
  <div>
    <div
      class="Services text-center"
      style="padding: 4% 10% 12%"
      data-aos="fade-right"
      data-aos-duration="2000"
    >
      <h1 style="font-weight: bold">
        {{ $t('servicesinfo') }}
        <span style="color: #df8317">{{ $t('servicesinfoo') }} </span>
      </h1>
      <p>{{ $t('description') }}</p>
    </div>
    <div class="col-12 mb-5" data-aos="fade-up" data-aos-duration="2000">
      <div class="" style="margin: -10% -10% 8%">
        <div
          id="carouselExampleControls"
          class="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div
              class="carousel-item"
              v-for="(slide, index) in slides"
              :key="index"
              :class="{ active: index === 0 }"
            >
              <div
                class="card-wrapper container-sm d-flex justify-content-around"
              >
                <div
                  v-for="(card, cardIndex) in slide.cards"
                  :key="cardIndex"
                  class="m-2 card"
                  style="width: 18rem"
                >
                  <img
                    :src="card.imgSrc"
                    alt="Card image"
                    class="card-img-top"
                    style="height: 200px; object-fit: cover"
                  />

                  <div class="card-body">
                    <h5 class="card-title">{{ $t(card.title) }}</h5>
                    <p class="card-text">{{ $t(card.text) }}</p>
                  </div>
                </div>
              </div>
            </div>
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
      slides: [
        {
          cards: [
            {
              imgSrc: require('@/assets/Frame 2147223649.png'),
              title: 'web_development',
              text: 'web_development_description',
            },
            {
              imgSrc: require('@/assets/Frame 2147223649 (1).png'),
              title: 'mobile_apps',
              text: 'mobile_apps_description',
            },
            {
              imgSrc: require('@/assets/Frame 2147223649 (2).png'),
              title: 'ui_ux_design',
              text: 'ui_ux_design_description',
            },
            {
              imgSrc: require('@/assets/Frame 2147223649 (3).png'),
              title: 'ui_ux_design',
              text: 'ui_ux_design_description',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style scoped>
.Services {
  background-image: url('@/assets/Frame 2147223656.png');
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.card:hover .card-body {
}
.image-container {
  flex: 1;
  overflow: hidden;
}

.card-img-top {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-control-prev:hover,
.carousel-control-next:hover {
  box-shadow: none;
}
.btn-prev:hover,
.btn-next:hover {
  box-shadow: none;
  border: none;
  width: auto;
  padding: 6px 12px;
}
@media (max-width: 768px) {
  .Offering {
    padding: 10px;
  }

  .image-container {
    width: 100%;
    height: auto;
  }

  .card-wrapper {
    display: flex;
    flex-direction: row;
  }

  .btn-prev,
  .btn-next {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
}

@media (max-width: 576px) {
  .card-wrapper {
    flex-direction: row;
    margin: 0 -20px;
  }
  .image-container {
    width: 8rem !important;
    height: 260px !important;
  }

  .Offering h1 {
    font-size: 18px;
    text-align: start;
  }
  h5 {
    font-size: 11px;
  }
  p {
    font-size: 8px !important;
  }

  .Offering p {
    font-size: 10px;
    text-align: start;
  }
}
</style>

<template>
  <div class="Services">
    <div class="row text-white">
      <div
        class="col-6 Offering p-5 container d-flex flex-column justify-content-center"
        style="background-color: #211b2a; border-radius: 6px"
      >
        <p>
          <svg
            width="53"
            height="2"
            viewBox="0 0 143 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1"
              y1="1"
              x2="142"
              y2="1.00001"
              stroke="#D8D8D8"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          {{ $t('offering') }}
          <span style="color: #8c3597"> {{ $t('Offering') }} </span>
        </p>
        <h1>{{ $t('servicesinfo') }}</h1>
        <p>{{ $t('description') }}</p>
        <div class="d-flex justify-content-start mt-3">
          <button
            class="btn btn-prev m-1"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
            style="background-color: #8c3597; border-radius: 50%; color: #fff"
          >
            <i class="fa-solid fa-angle-left"></i>
          </button>
          <button
            class="btn btn-next m-1"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
            style="background-color: #fff; border-radius: 50%; color: #8c3597"
          >
            <i class="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>

      <div class="col-6">
        <div class="pt-5 pb-5" style="margin: 0 -10%">
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
                    class="m-2"
                    style="width: 18rem"
                  >
                    <div
                      class="image-container"
                      style="
                        position: relative;
                        width: 18rem;
                        height: 350px;
                        background-size: cover;
                        background-position: center;
                        border-radius: 6px;
                      "
                      :style="{ backgroundImage: 'url(' + card.imgSrc + ')' }"
                    >
                      <div
                        class="card-title"
                        style="
                          position: absolute;
                          bottom: 0;
                          left: 0;
                          width: 100%;
                          padding: 10px;
                          color: white;
                          z-index: 1;
                        "
                      >
                        <h5 style="font-weight: bold">
                          {{ $t(card.title) }}
                        </h5>
                        <p style="font-size: 14px">{{ $t(card.text) }}</p>
                      </div>
                    </div>
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
              imgSrc: require('@/assets/uae.png'),
              title: 'web_development',
              text: 'web_development_description',
            },
            {
              imgSrc: require('@/assets/uae1.png'),
              title: 'mobile_apps',
              text: 'mobile_apps_description',
            },
            {
              imgSrc: require('@/assets/uae.png'),
              title: 'ui_ux_design',
              text: 'ui_ux_design_description',
            },
          ],
        },
        {
          cards: [
            {
              imgSrc: require('@/assets/uae.png'),
              title: 'web_development',
              text: 'web_development_description',
            },
            {
              imgSrc: require('@/assets/uae1.png'),
              title: 'mobile_apps',
              text: 'mobile_apps_description',
            },
            {
              imgSrc: require('@/assets/uae.png'),
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
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
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

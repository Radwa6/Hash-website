<template>
  <div class="Events-slider p-5 mb-5">
    <h1 class="mb-4" style="font-weight: bold">
      {{ $t('Recent') }}
      <span style="color: #df8317">{{ $t('Events') }}</span>
    </h1>

    <VueSlickCarousel
      :dots="true"
      :autoplay="true"
      :autoplaySpeed="2000"
      :slidesToShow="3"
      :slidesToScroll="1"
      :responsive="[
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ]"
    >
      <div
        v-for="event in translatedEvents"
        :key="event.id"
        class="d-flex justify-content-center align-items-center"
        style="flex-direction: column; text-align: center"
      >
        <div class="border-0 m-2">
          <div class="d-flex justify-content-center">
            <img :src="event.image" :alt="event.name" class="img-fluid" />
          </div>

          <div class="card-body text-center mt-4">
            <h5 class="card-title">{{ event.name }}</h5>
            <p class="card-text mt-1">{{ event.role }}</p>
          </div>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      events: [
        {
          id: 1,
          name: 'Saudi Flag Day',
          role: 'On March 11, 1937, King Abdulaziz issued his order approving Shura Council Resolution No. 354...',
          image: require('@/assets/event.png'),
        },
        {
          id: 2,
          name: 'Saudi National Day',
          role: 'The Kingdom of Saudi Arabia celebrates the National Day for the Unification of the Kingdom...',
          image: require('@/assets/event1.png'),
        },
        {
          id: 3,
          name: 'Anniversary of the pledge of allegiance',
          role: 'Prince Mohammed bin Salman was pledged as Crown Prince on June 21, 2017...',
          image: require('@/assets/event2.png'),
        },
        {
          id: 1,
          name: 'Saudi Flag Day',
          role: 'On March 11, 1937, King Abdulaziz issued his order approving Shura Council Resolution No. 354...',
          image: require('@/assets/event.png'),
        },
        {
          id: 2,
          name: 'Saudi National Day',
          role: 'The Kingdom of Saudi Arabia celebrates the National Day for the Unification of the Kingdom...',
          image: require('@/assets/event1.png'),
        },
        {
          id: 3,
          name: 'Anniversary of the pledge of allegiance',
          role: 'Prince Mohammed bin Salman was pledged as Crown Prince on June 21, 2017...',
          image: require('@/assets/event2.png'),
        },
      ],
    }
  },
  computed: {
    translatedEvents() {
      return this.events.map((event) => ({
        id: event.id,
        name: this.$t(event.name),
        role: this.$t(event.role),
        image: event.image,
      }))
    },
  },
}
</script>

<style scoped>
h1 {
  font-weight: bold;
  font-size: 50px;
}
p {
  font-size: 22px;
}
h5 {
  font-weight: bold;
  font-size: 26px;
}
.card-text {
  color: #858585;
}
.card-title {
  font-weight: bold;
}

.team-slider {
  width: 90%;
  margin: 0 auto;
}

@media (max-width: 540px) {
  h5 {
    font-size: 14px;
  }
  p {
    font-size: 8px;
  }
}
@media (max-width: 912px) {
  h5 {
    font-size: 14px;
  }
  p {
    font-size: 8px;
  }
}
@media (max-width: 1400px) {
  h5 {
    font-size: 14px;
  }
  p {
    font-size: 8px;
  }
}

.slick-prev,
.slick-next {
  color: black !important;
}

.slick-prev:hover,
.slick-next:hover {
  color: gray !important;
}
</style>

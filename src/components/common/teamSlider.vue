<template>
  <div class="team-slider">
    <VueSlickCarousel
      :dots="true"
      :autoplay="true"
      :autoplaySpeed="2000"
      :slidesToShow="5"
      :slidesToScroll="1"
      :arrows="true"
      prevArrow="<button class='slick-prev'>‹</button>"
      nextArrow="<button class='slick-next'>›</button>"
    >
      <div v-for="member in team" :key="member.id" class="team-member">
        <div class="border-0 m-2">
          <svg
            class="memberdesignsvg"
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="20.1749"
              cy="20.1966"
              rx="20.1749"
              ry="20.1966"
              :fill="member.fill"
            />
            <path
              d="M20.1739 19.0669C21.6703 19.0669 23.1054 19.662 24.1635 20.7212C25.2216 21.7805 25.816 23.2171 25.816 24.7151V31.493H23.5592V24.7151C23.5592 23.8507 23.2293 23.0189 22.6369 22.39C22.0446 21.7611 21.2345 21.3826 20.3725 21.3318L20.1739 21.3262C19.3104 21.3261 18.4796 21.6564 17.8513 22.2494C17.2231 22.8424 16.8449 23.6534 16.7943 24.5163L16.7886 24.7151V31.493H14.5318V24.7151C14.5318 23.2171 15.1262 21.7805 16.1843 20.7212C17.2424 19.662 18.6775 19.0669 20.1739 19.0669ZM12.8391 22.4558C13.154 22.4558 13.4598 22.4931 13.7532 22.562C13.5602 23.137 13.446 23.7355 13.4135 24.3412L13.4034 24.7151V24.8123C13.2736 24.7658 13.1387 24.7355 13.0016 24.7219L12.8391 24.7151C12.4184 24.7151 12.0127 24.872 11.7012 25.1552C11.3897 25.4384 11.1948 25.8276 11.1544 26.2469L11.1465 26.4096V31.493H8.88965V26.4096C8.88965 25.361 9.30575 24.3553 10.0464 23.6139C10.7871 22.8724 11.7917 22.4558 12.8391 22.4558ZM27.5087 22.4558C28.5561 22.4558 29.5607 22.8724 30.3014 23.6139C31.0421 24.3553 31.4582 25.361 31.4582 26.4096V31.493H29.2013V26.4096C29.2013 25.9884 29.0445 25.5822 28.7617 25.2704C28.4788 24.9586 28.09 24.7635 27.6712 24.723L27.5087 24.7151C27.3112 24.7151 27.1216 24.749 26.9445 24.8111V24.7151C26.9445 23.9628 26.8226 23.2398 26.5958 22.5643C26.8947 22.4918 27.2011 22.4554 27.5087 22.4558ZM12.8391 15.678C13.5873 15.678 14.3049 15.9755 14.8339 16.5052C15.363 17.0348 15.6602 17.7531 15.6602 18.5021C15.6602 19.2511 15.363 19.9694 14.8339 20.499C14.3049 21.0287 13.5873 21.3262 12.8391 21.3262C12.0909 21.3262 11.3734 21.0287 10.8443 20.499C10.3153 19.9694 10.0181 19.2511 10.0181 18.5021C10.0181 17.7531 10.3153 17.0348 10.8443 16.5052C11.3734 15.9755 12.0909 15.678 12.8391 15.678ZM27.5087 15.678C28.2569 15.678 28.9744 15.9755 29.5035 16.5052C30.0325 17.0348 30.3297 17.7531 30.3297 18.5021C30.3297 19.2511 30.0325 19.9694 29.5035 20.499C28.9744 21.0287 28.2569 21.3262 27.5087 21.3262C26.7605 21.3262 26.0429 21.0287 25.5139 20.499C24.9848 19.9694 24.6876 19.2511 24.6876 18.5021C24.6876 17.7531 24.9848 17.0348 25.5139 16.5052C26.0429 15.9755 26.7605 15.678 27.5087 15.678ZM12.8391 17.9373C12.6895 17.9373 12.546 17.9968 12.4402 18.1027C12.3344 18.2086 12.2749 18.3523 12.2749 18.5021C12.2749 18.6519 12.3344 18.7956 12.4402 18.9015C12.546 19.0074 12.6895 19.0669 12.8391 19.0669C12.9888 19.0669 13.1323 19.0074 13.2381 18.9015C13.3439 18.7956 13.4034 18.6519 13.4034 18.5021C13.4034 18.3523 13.3439 18.2086 13.2381 18.1027C13.1323 17.9968 12.9888 17.9373 12.8391 17.9373ZM27.5087 17.9373C27.359 17.9373 27.2155 17.9968 27.1097 18.1027C27.0039 18.2086 26.9445 18.3523 26.9445 18.5021C26.9445 18.6519 27.0039 18.7956 27.1097 18.9015C27.2155 19.0074 27.359 19.0669 27.5087 19.0669C27.6583 19.0669 27.8018 19.0074 27.9076 18.9015C28.0134 18.7956 28.0729 18.6519 28.0729 18.5021C28.0729 18.3523 28.0134 18.2086 27.9076 18.1027C27.8018 17.9968 27.6583 17.9373 27.5087 17.9373ZM20.1739 8.90015C21.371 8.90015 22.5191 9.37621 23.3656 10.2236C24.2121 11.071 24.6876 12.2203 24.6876 13.4187C24.6876 14.6171 24.2121 15.7664 23.3656 16.6138C22.5191 17.4612 21.371 17.9373 20.1739 17.9373C18.9768 17.9373 17.8287 17.4612 16.9822 16.6138C16.1358 15.7664 15.6602 14.6171 15.6602 13.4187C15.6602 12.2203 16.1358 11.071 16.9822 10.2236C17.8287 9.37621 18.9768 8.90015 20.1739 8.90015ZM20.1739 11.1594C19.5753 11.1594 19.0013 11.3975 18.5781 11.8212C18.1548 12.2449 17.9171 12.8195 17.9171 13.4187C17.9171 14.0179 18.1548 14.5926 18.5781 15.0163C19.0013 15.44 19.5753 15.678 20.1739 15.678C20.7725 15.678 21.3465 15.44 21.7697 15.0163C22.193 14.5926 22.4308 14.0179 22.4308 13.4187C22.4308 12.8195 22.193 12.2449 21.7697 11.8212C21.3465 11.3975 20.7725 11.1594 20.1739 11.1594Z"
              fill="white"
            />
          </svg>
          <div
            class="memberdesign"
            :style="{ backgroundColor: member.background }"
          >
            <img
              :src="member.image"
              :alt="member.name"
              class="img-fluid"
              width="94%"
              :style="{ width: '94%', height: '200px', borderRadius: '50%' }"
            />
          </div>

          <div class="card-body text-center mt-4">
            <h5 class="card-title">{{ member.name }}</h5>
            <p class="card-text mt-1">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'

import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      team: [
        {
          id: 1,
          name: 'Abdelalim Mohammed',
          role: 'Full Stack Developer',
          image: require('@/assets/bakend.jpg'),
          fill: '#D6D6D6',
          background: '#D6D6D6',
        },
        {
          id: 2,
          name: 'Aya Amer',
          role: 'Software Tester',
          image: require('@/assets/Group 19.png'),
          fill: '#DF8317',
          background: '#DF8317',
        },
        {
          id: 3,
          name: 'Amira AbdElhak',
          role: 'Graphic Designer',
          image: require('@/assets/WhatsApp Image 2024-09-29 at 4.44.31 PM.jpeg'),
          fill: '#D6D6D6',
          background: '#D6D6D6',
        },
        {
          id: 4,
          name: 'Mohamed Sultan',
          role: 'Full Stack Developer',
          image: require('@/assets/WhatsApp Image 2024-09-29 at 4.48.08 PM.jpeg'),
          fill: '#DF8317',
          background: '#DF8317',
        },
        {
          id: 5,
          name: 'Nada Nasr',
          role: 'Full Stack Developer',
          image: require('@/assets/Group 19.png'),
          fill: '#D6D6D6',
          background: '#D6D6D6',
        },
        {
          id: 6,
          name: 'Radwa Emam',
          role: 'Frontend Developer',
          image: require('@/assets/Group 19.png'),
          fill: '#DF8317',
          background: '#DF8317',
        },
        {
          id: 7,
          name: 'Yosra Allam ',
          role: 'Product Manger',
          image: require('@/assets/Group 19.png'),
          fill: '#DF8317',
          background: '#DF8317',
        },
      ],
    }
  },
}
</script>

<style scoped>
.card-text {
  color: #858585;
}
.card-title {
  font-weight: bold;
}
.memberdesign {
  border-radius: 50%;
  width: 100%;
  height: 100%;
  margin-top: -18%;
  position: relative;
  z-index: 1;
}
.memberdesignn {
  background-color: #df8317;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  position: relative;
}

.team-slider {
  width: 80%;
  margin: 0 auto;
}

.team-member {
  text-align: center;
  padding: 10px;
}

.team-member img {
  border-radius: 50%;
}

.team-member h3 {
  margin-top: 10px;
  font-size: 18px;
}

.team-member p {
  font-size: 14px;
  color: gray;
}

/* تخصيص الأسهم */
.slick-prev,
.slick-next {
  background-color: #ddd;
  border: none;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
}

.slick-prev:hover,
.slick-next:hover {
  background-color: #ccc;
}

.slick-prev {
  position: absolute;
  top: 50%;
  left: -30px;
  transform: translateY(-50%);
}

.slick-next {
  position: absolute;
  top: 50%;
  right: -30px;
  transform: translateY(-50%);
}

.memberdesignsvg {
  margin: 8% 70% 0;
  position: relative;

  z-index: 999;
}
</style>

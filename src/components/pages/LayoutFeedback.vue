<template>
  <div>
    <div class="LayoutFeedback text-center p-5">
      <div style="font-weight: bold">
        <h1 class="m-4" style="font-weight: bold">
          {{ $t('ClientSayaboutUs') }}
          <span style="color: #df8317">{{ $t('WhatOur') }}</span>
        </h1>
      </div>

      <!-- Carousel wrapper -->
      <div
        id="carouselExampleControlss"
        data-mdb-carousel-init
        class="carousel slide text-center carousel-dark"
        data-mdb-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row d-flex justify-content-center">
              <div class="feedback col-lg-8 mt-4 p-5 pb-2">
                <p class="text-muted text-center w-100 mb-5">
                  {{ $t('feedback1') }}
                </p>
                <h5>{{ $t('namemember1') }}</h5>
                <p style="color: #df8317">{{ $t('rolee1') }}</p>
              </div>
            </div>

            <img
              class="rounded-circle shadow-1-strong m-2"
              src="../../assets/Ellipse 12.png"
              alt="avatar"
              style="width: 40px"
            />
            <img
              class="rounded-circle shadow-1-strong m-2"
              src="../../assets/Ellipse 13.png"
              alt="avatar"
              style="width: 50px"
            />
            <img
              class="rounded-circle shadow-1-strong mb-4 mt-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
              alt="avatar"
              style="width: 80px"
            />
            <img
              class="rounded-circle shadow-1-strong m-2"
              src="../../assets/Ellipse 14.png"
              alt="avatar"
              style="width: 50px"
            />
            <img
              class="rounded-circle shadow-1-strong m-2"
              src="../../assets/Ellipse 15.png"
              alt="avatar"
              style="width: 40px"
            />
          </div>

          <div class="carousel-item">
            <div class="row d-flex justify-content-center">
              <div class="feedback col-lg-8 mt-4 p-5 pb-2">
                <p class="text-muted text-center w-100 mb-5">
                  {{ $t('feedback2') }}
                </p>
                <h5>{{ $t('namemember2') }}</h5>
                <p style="color: #df8317">{{ $t('rolee2') }}</p>
              </div>
            </div>
            <img
              class="rounded-circle shadow-1-strong m-2"
              src="../../assets/Ellipse 13.png"
              alt="avatar"
              style="width: 40px"
            />
            <img
              class="rounded-circle shadow-1-strong m-2"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
              alt="avatar"
              style="width: 50px"
            />
            <img
              class="rounded-circle shadow-1-strong mb-4 mt-4"
              src="../../assets/Ellipse 14.png"
              alt="avatar"
              style="width: 80px"
            />
            <img
              class="rounded-circle shadow-1-strong m-2"
              src="../../assets/Ellipse 15.png"
              alt="avatar"
              style="width: 50px"
            />
            <img
              class="rounded-circle shadow-1-strong m-2"
              src="../../assets/Ellipse 12.png"
              alt="avatar"
              style="width: 40px"
            />
          </div>

          <div class="carousel-item">
            <div class="row d-flex justify-content-center">
              <div class="feedback col-lg-8 mt-4 p-5 pb-2">
                <p class="text-muted text-center w-100 mb-5">
                  {{ $t('feedback3') }}
                </p>
                <h5>{{ $t('namemember3') }}</h5>
                <p style="color: #df8317">{{ $t('rolee3') }}</p>
              </div>
            </div>
            <img
              class="rounded-circle shadow-1-strong m-2"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
              alt="avatar"
              style="width: 40px"
            />
            <img
              class="rounded-circle shadow-1-strong m-2"
              src="../../assets/Ellipse 14.png"
              alt="avatar"
              style="width: 50px"
            />

            <img
              class="rounded-circle shadow-1-strong mb-4 mt-4"
              src="../../assets/Ellipse 15.png"
              alt="avatar"
              style="width: 80px"
            />
            <img
              class="rounded-circle shadow-1-strong m-2"
              src="../../assets/Ellipse 12.png"
              alt="avatar"
              style="width: 50px"
            />
            <img
              class="rounded-circle shadow-1-strong m-2"
              src="../../assets/Ellipse 13.png"
              alt="avatar"
              style="width: 40px"
            />
          </div>

          <div class="carousel-item">
            <div class="row d-flex justify-content-center">
              <div class="feedback col-lg-8 mt-4 p-5 pb-2">
                <p class="text-muted text-center w-100 mb-5">
                  {{ $t('feedback4') }}
                </p>
                <h5>{{ $t('namemember4') }}</h5>
                <p style="color: #df8317">{{ $t('rolee4') }}</p>
              </div>
            </div>
            <img
              class="rounded-circle shadow-1-strong m-2"
              src="../../assets/Ellipse 14.png"
              alt="avatar"
              style="width: 40px"
            />
            <img
              class="rounded-circle shadow-1-strong m-2"
              src="../../assets/Ellipse 15.png"
              alt="avatar"
              style="width: 50px"
            />
            <img
              class="rounded-circle shadow-1-strong mb-4 mt-4"
              src="../../assets/Ellipse 12.png"
              alt="avatar"
              style="width: 80px"
            />
            <img
              class="rounded-circle shadow-1-strong m-2"
              src="../../assets/Ellipse 13.png"
              alt="avatar"
              style="width: 50px"
            />
            <img
              class="rounded-circle shadow-1-strong m-2"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
              alt="avatar"
              style="width: 40px"
            />
          </div>

          <div class="carousel-item">
            <div class="row d-flex justify-content-center">
              <div class="feedback col-lg-8 mt-4 p-5 pb-2">
                <p class="text-muted text-center w-100 mb-5">
                  {{ $t('feedback4') }}
                </p>
                <h5>{{ $t('namemember4') }}</h5>
                <p style="color: #df8317">{{ $t('rolee4') }}</p>
              </div>
            </div>
            <img
              class="rounded-circle shadow-1-strong m-2"
              src="../../assets/Ellipse 15.png"
              alt="avatar"
              style="width: 40px"
            />
            <img
              class="rounded-circle shadow-1-strong m-2"
              src="../../assets/Ellipse 14.png"
              alt="avatar"
              style="width: 50px"
            />
            <img
              class="rounded-circle shadow-1-strong mb-4 mt-4"
              src="../../assets/Ellipse 12.png"
              alt="avatar"
              style="width: 80px"
            />
            <img
              class="rounded-circle shadow-1-strong m-2"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
              alt="avatar"
              style="width: 50px"
            />
            <img
              class="rounded-circle shadow-1-strong m-2"
              src="../../assets/Ellipse 13.png"
              alt="avatar"
              style="width: 40px"
            />
          </div>
        </div>

        <button
          data-mdb-button-init
          class="carousel-control-prev text-black"
          type="button"
          data-mdb-target="#carouselExampleControlss"
          data-mdb-slide="prev"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style="border: 1px solid black; border-radius: 50%; padding: 4px"
          >
            <path
              d="M15.8333 9.16657H5.94998L8.97498 5.53324C9.11643 5.36306 9.18448 5.14366 9.16416 4.9233C9.14385 4.70295 9.03683 4.49969 8.86665 4.35824C8.69647 4.21679 8.47706 4.14874 8.25671 4.16905C8.03635 4.18937 7.83309 4.29639 7.69165 4.46657L3.52498 9.46657C3.49695 9.50634 3.47188 9.54812 3.44998 9.59157C3.44998 9.63324 3.44998 9.65824 3.39165 9.6999C3.35387 9.79545 3.3341 9.89716 3.33331 9.9999C3.3341 10.1026 3.35387 10.2044 3.39165 10.2999C3.39165 10.3416 3.39165 10.3666 3.44998 10.4082C3.47188 10.4517 3.49695 10.4935 3.52498 10.5332L7.69165 15.5332C7.77 15.6273 7.86811 15.703 7.97902 15.7548C8.08992 15.8067 8.21089 15.8334 8.33331 15.8332C8.52802 15.8336 8.71672 15.7658 8.86665 15.6416C8.95103 15.5716 9.02078 15.4857 9.07191 15.3887C9.12303 15.2918 9.15453 15.1857 9.16459 15.0765C9.17466 14.9674 9.16309 14.8573 9.13055 14.7527C9.09801 14.648 9.04515 14.5508 8.97498 14.4666L5.94998 10.8332H15.8333C16.0543 10.8332 16.2663 10.7454 16.4226 10.5892C16.5788 10.4329 16.6666 10.2209 16.6666 9.9999C16.6666 9.77889 16.5788 9.56693 16.4226 9.41065C16.2663 9.25437 16.0543 9.16657 15.8333 9.16657Z"
              fill="#202020"
            />
          </svg>
        </button>
        <button
          data-mdb-button-init
          class="carousel-control-next text-black"
          type="button"
          data-mdb-target="#carouselExampleControlss"
          data-mdb-slide="next"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style="background-color: black; border-radius: 50%; padding: 4px"
          >
            <path
              d="M4.16669 9.16657H14.05L11.025 5.53324C10.8836 5.36306 10.8155 5.14366 10.8358 4.9233C10.8562 4.70295 10.9632 4.49969 11.1334 4.35824C11.3035 4.21679 11.5229 4.14874 11.7433 4.16905C11.9636 4.18937 12.1669 4.29639 12.3084 4.46657L16.475 9.46657C16.5031 9.50634 16.5281 9.54812 16.55 9.59157C16.55 9.63324 16.55 9.65824 16.6084 9.6999C16.6461 9.79545 16.6659 9.89716 16.6667 9.9999C16.6659 10.1026 16.6461 10.2044 16.6084 10.2999C16.6084 10.3416 16.6084 10.3666 16.55 10.4082C16.5281 10.4517 16.5031 10.4935 16.475 10.5332L12.3084 15.5332C12.23 15.6273 12.1319 15.703 12.021 15.7548C11.9101 15.8067 11.7891 15.8334 11.6667 15.8332C11.472 15.8336 11.2833 15.7658 11.1334 15.6416C11.049 15.5716 10.9792 15.4857 10.9281 15.3887C10.877 15.2918 10.8455 15.1857 10.8354 15.0765C10.8253 14.9674 10.8369 14.8573 10.8694 14.7527C10.902 14.648 10.9549 14.5508 11.025 14.4666L14.05 10.8332H4.16669C3.94567 10.8332 3.73371 10.7454 3.57743 10.5892C3.42115 10.4329 3.33335 10.2209 3.33335 9.9999C3.33335 9.77889 3.42115 9.56693 3.57743 9.41065C3.73371 9.25437 3.94567 9.16657 4.16669 9.16657Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.LayoutFeedback {
  background-image: url('../../assets/bg\ \(2\).png');
  background-size: cover;
}
.feedback {
  background-image: url('../../assets/Frame%202147223744.png');
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  border-radius: 12px;
  padding-bottom: 70px !important;
}

@media (max-width: 768px) {
  svg {
    width: 3rem;
  }
}

@media (max-width: 576px) {
  svg {
    width: 3rem;
  }
}
</style>

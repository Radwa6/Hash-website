<template>
  <div>
    <div class="Feedback text-center p-5">
      <div style="font-weight: bold">
        <h1 class="m-4" style="font-weight: bold">
          {{ $t('ClientSayaboutUs') }}
          <span style="color: #df8317">{{ $t('WhatOur') }}</span>
        </h1>
      </div>

      <div
        id="carouselExampleControlss"
        data-mdb-carousel-init
        class="carousel slide text-center carousel-dark"
        data-mdb-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row d-flex justify-content-center">
              <div class="col-lg-8 mt-4 d-flex">
                <svg
                  width="50"
                  height="39"
                  viewBox="0 0 50 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.5539 0.799996L15.0539 26.8L12.3539 16C15.6872 16 18.4206 16.9667 20.5539 18.9C22.6872 20.8333 23.7539 23.5 23.7539 26.9C23.7539 30.3 22.6539 33.0333 20.4539 35.1C18.3206 37.1 15.6206 38.1 12.3539 38.1C9.08724 38.1 6.35391 37.1 4.15391 35.1C2.02057 33.0333 0.953906 30.3 0.953906 26.9C0.953906 25.9667 1.02057 25.0333 1.15391 24.1C1.35391 23.1667 1.68724 22.0333 2.15391 20.7C2.62057 19.3667 3.32057 17.6333 4.25391 15.5L10.6539 0.799996H22.5539ZM48.7539 0.799996L41.2539 26.8L38.5539 16C41.8872 16 44.6206 16.9667 46.7539 18.9C48.8872 20.8333 49.9539 23.5 49.9539 26.9C49.9539 30.3 48.8539 33.0333 46.6539 35.1C44.5206 37.1 41.8206 38.1 38.5539 38.1C35.2872 38.1 32.5539 37.1 30.3539 35.1C28.2206 33.0333 27.1539 30.3 27.1539 26.9C27.1539 25.9667 27.2206 25.0333 27.3539 24.1C27.5539 23.1667 27.8872 22.0333 28.3539 20.7C28.8206 19.3667 29.5206 17.6333 30.4539 15.5L36.8539 0.799996H48.7539Z"
                    fill="#DF8317"
                  />
                </svg>

                <p class="text-muted text-center w-100">
                  {{ $t('feedback1') }}
                </p>

                <svg
                  width="50"
                  height="39"
                  viewBox="0 0 50 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.4461 38.2L34.9461 12.2L37.6461 23C34.3128 23 31.5794 22.0333 29.4461 20.1C27.3128 18.1667 26.2461 15.5 26.2461 12.1C26.2461 8.7 27.3461 5.96667 29.5461 3.9C31.6794 1.9 34.3794 0.9 37.6461 0.900001C40.9128 0.900001 43.6461 1.9 45.8461 3.9C47.9794 5.96667 49.0461 8.7 49.0461 12.1C49.0461 13.0333 48.9794 13.9667 48.8461 14.9C48.6461 15.8333 48.3128 16.9667 47.8461 18.3C47.3794 19.6333 46.6794 21.3667 45.7461 23.5L39.3461 38.2L27.4461 38.2ZM1.2461 38.2L8.7461 12.2L11.4461 23C8.11276 23 5.37943 22.0333 3.2461 20.1C1.11276 18.1667 0.0460958 15.5 0.0460961 12.1C0.0460964 8.7 1.1461 5.96666 3.3461 3.9C5.47943 1.9 8.17943 0.899998 11.4461 0.899998C14.7128 0.899999 17.4461 1.9 19.6461 3.9C21.7794 5.96667 22.8461 8.7 22.8461 12.1C22.8461 13.0333 22.7794 13.9667 22.6461 14.9C22.4461 15.8333 22.1128 16.9667 21.6461 18.3C21.1794 19.6333 20.4794 21.3667 19.5461 23.5L13.1461 38.2L1.2461 38.2Z"
                    fill="#DF8317"
                  />
                </svg>
              </div>
            </div>
            <img
              class="rounded-circle shadow-1-strong m-3"
              src="../../assets/Ellipse 12.png"
              alt="avatar"
              style="width: 40px"
            />
            <img
              class="rounded-circle shadow-1-strong m-3"
              src="../../assets/Ellipse 13.png"
              alt="avatar"
              style="width: 50px"
            />
            <img
              class="rounded-circle shadow-1-strong mb-4 mt-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
              alt="avatar"
              style="width: 80px; border: 4px solid #df8317"
            />
            <img
              class="rounded-circle shadow-1-strong m-3"
              src="../../assets/Ellipse 14.png"
              alt="avatar"
              style="width: 50px"
            />
            <img
              class="rounded-circle shadow-1-strong m-3"
              src="../../assets/Ellipse 15.png"
              alt="avatar"
              style="width: 40px"
            />

            <div class="row d-flex justify-content-center">
              <div class="col-lg-8">
                <h5>{{ $t('namemember1') }}</h5>
                <p>{{ $t('rolee1') }}</p>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="row d-flex justify-content-center">
              <div class="col-lg-8 mt-4 d-flex">
                <svg
                  width="50"
                  height="39"
                  viewBox="0 0 50 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.5539 0.799996L15.0539 26.8L12.3539 16C15.6872 16 18.4206 16.9667 20.5539 18.9C22.6872 20.8333 23.7539 23.5 23.7539 26.9C23.7539 30.3 22.6539 33.0333 20.4539 35.1C18.3206 37.1 15.6206 38.1 12.3539 38.1C9.08724 38.1 6.35391 37.1 4.15391 35.1C2.02057 33.0333 0.953906 30.3 0.953906 26.9C0.953906 25.9667 1.02057 25.0333 1.15391 24.1C1.35391 23.1667 1.68724 22.0333 2.15391 20.7C2.62057 19.3667 3.32057 17.6333 4.25391 15.5L10.6539 0.799996H22.5539ZM48.7539 0.799996L41.2539 26.8L38.5539 16C41.8872 16 44.6206 16.9667 46.7539 18.9C48.8872 20.8333 49.9539 23.5 49.9539 26.9C49.9539 30.3 48.8539 33.0333 46.6539 35.1C44.5206 37.1 41.8206 38.1 38.5539 38.1C35.2872 38.1 32.5539 37.1 30.3539 35.1C28.2206 33.0333 27.1539 30.3 27.1539 26.9C27.1539 25.9667 27.2206 25.0333 27.3539 24.1C27.5539 23.1667 27.8872 22.0333 28.3539 20.7C28.8206 19.3667 29.5206 17.6333 30.4539 15.5L36.8539 0.799996H48.7539Z"
                    fill="#DF8317"
                  />
                </svg>

                <p class="text-muted text-center w-100">
                  {{ $t('feedback2') }}
                </p>

                <svg
                  width="50"
                  height="39"
                  viewBox="0 0 50 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.4461 38.2L34.9461 12.2L37.6461 23C34.3128 23 31.5794 22.0333 29.4461 20.1C27.3128 18.1667 26.2461 15.5 26.2461 12.1C26.2461 8.7 27.3461 5.96667 29.5461 3.9C31.6794 1.9 34.3794 0.9 37.6461 0.900001C40.9128 0.900001 43.6461 1.9 45.8461 3.9C47.9794 5.96667 49.0461 8.7 49.0461 12.1C49.0461 13.0333 48.9794 13.9667 48.8461 14.9C48.6461 15.8333 48.3128 16.9667 47.8461 18.3C47.3794 19.6333 46.6794 21.3667 45.7461 23.5L39.3461 38.2L27.4461 38.2ZM1.2461 38.2L8.7461 12.2L11.4461 23C8.11276 23 5.37943 22.0333 3.2461 20.1C1.11276 18.1667 0.0460958 15.5 0.0460961 12.1C0.0460964 8.7 1.1461 5.96666 3.3461 3.9C5.47943 1.9 8.17943 0.899998 11.4461 0.899998C14.7128 0.899999 17.4461 1.9 19.6461 3.9C21.7794 5.96667 22.8461 8.7 22.8461 12.1C22.8461 13.0333 22.7794 13.9667 22.6461 14.9C22.4461 15.8333 22.1128 16.9667 21.6461 18.3C21.1794 19.6333 20.4794 21.3667 19.5461 23.5L13.1461 38.2L1.2461 38.2Z"
                    fill="#DF8317"
                  />
                </svg>
              </div>
            </div>
            <img
              class="rounded-circle shadow-1-strong m-3"
              src="../../assets/Ellipse 14.png"
              alt="avatar"
              style="width: 40px"
            />
            <img
              class="rounded-circle shadow-1-strong m-3"
              src="../../assets/Ellipse 15.png"
              alt="avatar"
              style="width: 50px"
            />
            <img
              class="rounded-circle shadow-1-strong mb-4 mt-4"
              src="../../assets/Ellipse 12.png"
              alt="avatar"
              style="width: 80px; border: 4px solid #df8317"
            />
            <img
              class="rounded-circle shadow-1-strong m-3"
              src="../../assets/Ellipse 13.png"
              alt="avatar"
              style="width: 50px"
            />
            <img
              class="rounded-circle shadow-1-strong m-3"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
              alt="avatar"
              style="width: 40px"
            />

            <div class="row d-flex justify-content-center">
              <div class="col-lg-8">
                <h5>{{ $t('namemember2') }}</h5>
                <p>{{ $t('rolee2') }}</p>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="row d-flex justify-content-center">
              <div class="col-lg-8 mt-4 d-flex">
                <svg
                  width="50"
                  height="39"
                  viewBox="0 0 50 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.5539 0.799996L15.0539 26.8L12.3539 16C15.6872 16 18.4206 16.9667 20.5539 18.9C22.6872 20.8333 23.7539 23.5 23.7539 26.9C23.7539 30.3 22.6539 33.0333 20.4539 35.1C18.3206 37.1 15.6206 38.1 12.3539 38.1C9.08724 38.1 6.35391 37.1 4.15391 35.1C2.02057 33.0333 0.953906 30.3 0.953906 26.9C0.953906 25.9667 1.02057 25.0333 1.15391 24.1C1.35391 23.1667 1.68724 22.0333 2.15391 20.7C2.62057 19.3667 3.32057 17.6333 4.25391 15.5L10.6539 0.799996H22.5539ZM48.7539 0.799996L41.2539 26.8L38.5539 16C41.8872 16 44.6206 16.9667 46.7539 18.9C48.8872 20.8333 49.9539 23.5 49.9539 26.9C49.9539 30.3 48.8539 33.0333 46.6539 35.1C44.5206 37.1 41.8206 38.1 38.5539 38.1C35.2872 38.1 32.5539 37.1 30.3539 35.1C28.2206 33.0333 27.1539 30.3 27.1539 26.9C27.1539 25.9667 27.2206 25.0333 27.3539 24.1C27.5539 23.1667 27.8872 22.0333 28.3539 20.7C28.8206 19.3667 29.5206 17.6333 30.4539 15.5L36.8539 0.799996H48.7539Z"
                    fill="#DF8317"
                  />
                </svg>

                <p class="text-muted text-center w-100">
                  {{ $t('feedback3') }}
                </p>

                <svg
                  width="50"
                  height="39"
                  viewBox="0 0 50 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.4461 38.2L34.9461 12.2L37.6461 23C34.3128 23 31.5794 22.0333 29.4461 20.1C27.3128 18.1667 26.2461 15.5 26.2461 12.1C26.2461 8.7 27.3461 5.96667 29.5461 3.9C31.6794 1.9 34.3794 0.9 37.6461 0.900001C40.9128 0.900001 43.6461 1.9 45.8461 3.9C47.9794 5.96667 49.0461 8.7 49.0461 12.1C49.0461 13.0333 48.9794 13.9667 48.8461 14.9C48.6461 15.8333 48.3128 16.9667 47.8461 18.3C47.3794 19.6333 46.6794 21.3667 45.7461 23.5L39.3461 38.2L27.4461 38.2ZM1.2461 38.2L8.7461 12.2L11.4461 23C8.11276 23 5.37943 22.0333 3.2461 20.1C1.11276 18.1667 0.0460958 15.5 0.0460961 12.1C0.0460964 8.7 1.1461 5.96666 3.3461 3.9C5.47943 1.9 8.17943 0.899998 11.4461 0.899998C14.7128 0.899999 17.4461 1.9 19.6461 3.9C21.7794 5.96667 22.8461 8.7 22.8461 12.1C22.8461 13.0333 22.7794 13.9667 22.6461 14.9C22.4461 15.8333 22.1128 16.9667 21.6461 18.3C21.1794 19.6333 20.4794 21.3667 19.5461 23.5L13.1461 38.2L1.2461 38.2Z"
                    fill="#DF8317"
                  />
                </svg>
              </div>
            </div>
            <img
              class="rounded-circle shadow-1-strong m-3"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
              alt="avatar"
              style="width: 40px"
            />
            <img
              class="rounded-circle shadow-1-strong m-3"
              src="../../assets/Ellipse 14.png"
              alt="avatar"
              style="width: 50px"
            />

            <img
              class="rounded-circle shadow-1-strong mb-4 mt-4"
              src="../../assets/Ellipse 15.png"
              alt="avatar"
              style="width: 80px; border: 4px solid #df8317"
            />
            <img
              class="rounded-circle shadow-1-strong m-3"
              src="../../assets/Ellipse 12.png"
              alt="avatar"
              style="width: 50px"
            />
            <img
              class="rounded-circle shadow-1-strong m-3"
              src="../../assets/Ellipse 13.png"
              alt="avatar"
              style="width: 40px"
            />

            <div class="row d-flex justify-content-center">
              <div class="col-lg-8">
                <h5>{{ $t('namemember3') }}</h5>
                <p>{{ $t('rolee3') }}</p>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="row d-flex justify-content-center">
              <div class="col-lg-8 mt-4 d-flex">
                <svg
                  width="50"
                  height="39"
                  viewBox="0 0 50 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.5539 0.799996L15.0539 26.8L12.3539 16C15.6872 16 18.4206 16.9667 20.5539 18.9C22.6872 20.8333 23.7539 23.5 23.7539 26.9C23.7539 30.3 22.6539 33.0333 20.4539 35.1C18.3206 37.1 15.6206 38.1 12.3539 38.1C9.08724 38.1 6.35391 37.1 4.15391 35.1C2.02057 33.0333 0.953906 30.3 0.953906 26.9C0.953906 25.9667 1.02057 25.0333 1.15391 24.1C1.35391 23.1667 1.68724 22.0333 2.15391 20.7C2.62057 19.3667 3.32057 17.6333 4.25391 15.5L10.6539 0.799996H22.5539ZM48.7539 0.799996L41.2539 26.8L38.5539 16C41.8872 16 44.6206 16.9667 46.7539 18.9C48.8872 20.8333 49.9539 23.5 49.9539 26.9C49.9539 30.3 48.8539 33.0333 46.6539 35.1C44.5206 37.1 41.8206 38.1 38.5539 38.1C35.2872 38.1 32.5539 37.1 30.3539 35.1C28.2206 33.0333 27.1539 30.3 27.1539 26.9C27.1539 25.9667 27.2206 25.0333 27.3539 24.1C27.5539 23.1667 27.8872 22.0333 28.3539 20.7C28.8206 19.3667 29.5206 17.6333 30.4539 15.5L36.8539 0.799996H48.7539Z"
                    fill="#DF8317"
                  />
                </svg>

                <p class="text-muted text-center w-100">
                  {{ $t('feedback4') }}
                </p>

                <svg
                  width="50"
                  height="39"
                  viewBox="0 0 50 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.4461 38.2L34.9461 12.2L37.6461 23C34.3128 23 31.5794 22.0333 29.4461 20.1C27.3128 18.1667 26.2461 15.5 26.2461 12.1C26.2461 8.7 27.3461 5.96667 29.5461 3.9C31.6794 1.9 34.3794 0.9 37.6461 0.900001C40.9128 0.900001 43.6461 1.9 45.8461 3.9C47.9794 5.96667 49.0461 8.7 49.0461 12.1C49.0461 13.0333 48.9794 13.9667 48.8461 14.9C48.6461 15.8333 48.3128 16.9667 47.8461 18.3C47.3794 19.6333 46.6794 21.3667 45.7461 23.5L39.3461 38.2L27.4461 38.2ZM1.2461 38.2L8.7461 12.2L11.4461 23C8.11276 23 5.37943 22.0333 3.2461 20.1C1.11276 18.1667 0.0460958 15.5 0.0460961 12.1C0.0460964 8.7 1.1461 5.96666 3.3461 3.9C5.47943 1.9 8.17943 0.899998 11.4461 0.899998C14.7128 0.899999 17.4461 1.9 19.6461 3.9C21.7794 5.96667 22.8461 8.7 22.8461 12.1C22.8461 13.0333 22.7794 13.9667 22.6461 14.9C22.4461 15.8333 22.1128 16.9667 21.6461 18.3C21.1794 19.6333 20.4794 21.3667 19.5461 23.5L13.1461 38.2L1.2461 38.2Z"
                    fill="#DF8317"
                  />
                </svg>
              </div>
            </div>

            <img
              class="rounded-circle shadow-1-strong m-3"
              src="../../assets/Ellipse 13.png"
              alt="avatar"
              style="width: 40px"
            />
            <img
              class="rounded-circle shadow-1-strong m-3"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
              alt="avatar"
              style="width: 50px"
            />
            <img
              class="rounded-circle shadow-1-strong mb-4 mt-4"
              src="../../assets/Ellipse 14.png"
              alt="avatar"
              style="width: 80px; border: 4px solid #df8317"
            />
            <img
              class="rounded-circle shadow-1-strong m-3"
              src="../../assets/Ellipse 15.png"
              alt="avatar"
              style="width: 50px"
            />
            <img
              class="rounded-circle shadow-1-strong m-3"
              src="../../assets/Ellipse 12.png"
              alt="avatar"
              style="width: 40px"
            />
            <div class="row d-flex justify-content-center">
              <div class="col-lg-8">
                <h5>{{ $t('namemember4') }}</h5>
                <p>{{ $t('rolee4') }}</p>
              </div>
            </div>
          </div>
        </div>
        <button
          data-mdb-button-init
          class="carousel-control-prev text-black"
          type="button"
          data-mdb-target="#carouselExampleControlss"
          data-mdb-slide="prev"
        >
          <i class="fa-solid fa-angle-left"></i>
        </button>
        <button
          data-mdb-button-init
          class="carousel-control-next text-black"
          type="button"
          data-mdb-target="#carouselExampleControlss"
          data-mdb-slide="next"
        >
          <i class="fa-solid fa-angle-right"> </i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.Feedback {
  background-color: #dfdfdf26;
}
p {
  font-size: 26px;
}
h5 {
  font-weight: bold;
  font-size: 34px;
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

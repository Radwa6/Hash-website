<template>
  <div>
    <div class="Feedback container text-center pt-5 pb-5">
      <div style="font-weight: bold">
        <h1 class="m-4" style="font-weight: bold">
          {{ $t('ClientSayaboutUs') }}
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
              <div class="col-lg-8 mt-4 d-flex">
                <svg
                  width="50"
                  height="39"
                  viewBox="0 0 50 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.4461 38.2L34.9461 12.2L37.6461 23C34.3128 23 31.5794 22.0333 29.4461 20.1C27.3128 18.1667 26.2461 15.5 26.2461 12.1C26.2461 8.7 27.3461 5.96667 29.5461 3.9C31.6794 1.9 34.3794 0.9 37.6461 0.900001C40.9128 0.900001 43.6461 1.9 45.8461 3.9C47.9794 5.96667 49.0461 8.7 49.0461 12.1C49.0461 13.0333 48.9794 13.9667 48.8461 14.9C48.6461 15.8333 48.3128 16.9667 47.8461 18.3C47.3794 19.6333 46.6794 21.3667 45.7461 23.5L39.3461 38.2L27.4461 38.2ZM1.2461 38.2L8.7461 12.2L11.4461 23C8.11276 23 5.37943 22.0333 3.2461 20.1C1.11276 18.1667 0.0460958 15.5 0.0460961 12.1C0.0460964 8.7 1.1461 5.96666 3.3461 3.9C5.47943 1.9 8.17943 0.899998 11.4461 0.899998C14.7128 0.899999 17.4461 1.9 19.6461 3.9C21.7794 5.96667 22.8461 8.7 22.8461 12.1C22.8461 13.0333 22.7794 13.9667 22.6461 14.9C22.4461 15.8333 22.1128 16.9667 21.6461 18.3C21.1794 19.6333 20.4794 21.3667 19.5461 23.5L13.1461 38.2L1.2461 38.2Z"
                    fill="#706FE5"
                  />
                </svg>

                <p class="text-muted">
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
                    fill="#706FE5"
                  />
                </svg>
              </div>
            </div>
            <img
              class="rounded-circle shadow-1-strong mb-4 mt-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
              alt="avatar"
              style="width: 70px; border: 4px solid #df8317; padding: 3px"
            />
            <div class="row d-flex justify-content-center">
              <div class="col-lg-8">
                <h5 class="mb-3">{{ $t('namemember1') }}</h5>
                <p>{{ $t('role1') }}</p>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="row d-flex justify-content-center">
              <div class="col-lg-8 mt-4">
                <p class="text-muted">
                  <i class="fas fa-quote-left pe-2"></i>
                  {{ $t('feedback1') }}
                </p>
                <h5 class="mb-3">{{ $t('namemember1') }}</h5>
                <p>{{ $t('role1') }}</p>
              </div>
            </div>
            <img
              class="rounded-circle shadow-1-strong mb-4 mt-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
              alt="avatar"
              style="width: 70px; border: 4px solid #df8317; padding: 3px"
            />
          </div>

          <div class="carousel-item">
            <div class="row d-flex justify-content-center">
              <div class="col-lg-8 mt-4">
                <svg
                  width="50"
                  height="39"
                  viewBox="0 0 50 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.4461 38.2L34.9461 12.2L37.6461 23C34.3128 23 31.5794 22.0333 29.4461 20.1C27.3128 18.1667 26.2461 15.5 26.2461 12.1C26.2461 8.7 27.3461 5.96667 29.5461 3.9C31.6794 1.9 34.3794 0.9 37.6461 0.900001C40.9128 0.900001 43.6461 1.9 45.8461 3.9C47.9794 5.96667 49.0461 8.7 49.0461 12.1C49.0461 13.0333 48.9794 13.9667 48.8461 14.9C48.6461 15.8333 48.3128 16.9667 47.8461 18.3C47.3794 19.6333 46.6794 21.3667 45.7461 23.5L39.3461 38.2L27.4461 38.2ZM1.2461 38.2L8.7461 12.2L11.4461 23C8.11276 23 5.37943 22.0333 3.2461 20.1C1.11276 18.1667 0.0460958 15.5 0.0460961 12.1C0.0460964 8.7 1.1461 5.96666 3.3461 3.9C5.47943 1.9 8.17943 0.899998 11.4461 0.899998C14.7128 0.899999 17.4461 1.9 19.6461 3.9C21.7794 5.96667 22.8461 8.7 22.8461 12.1C22.8461 13.0333 22.7794 13.9667 22.6461 14.9C22.4461 15.8333 22.1128 16.9667 21.6461 18.3C21.1794 19.6333 20.4794 21.3667 19.5461 23.5L13.1461 38.2L1.2461 38.2Z"
                    fill="#706FE5"
                  />
                </svg>

                <p class="text-muted">
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
                    fill="#706FE5"
                  />
                </svg>

                <h5 class="mb-3">{{ $t('namemember1') }}</h5>
                <p>{{ $t('role1') }}</p>
              </div>
            </div>
            <img
              class="rounded-circle shadow-1-strong mb-4 mt-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
              alt="avatar"
              style="width: 70px; border: 4px solid #df8317; padding: 3px"
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
@media (max-width: 1368px) {
  .carousel-control-prev,
  .carousel-control-next {
    margin-top: 200px !important;
  }
  .carousel-control-prev {
    margin-left: 30% !important;
  }
  .carousel-control-next {
    margin-right: 30% !important;
  }
}
@media (max-width: 768px) {
  svg {
    width: 3rem;
  }
  .carousel-control-prev,
  .carousel-control-next {
    margin-top: 260px !important;
  }
  .carousel-control-prev {
    margin-left: 20% !important;
  }
  .carousel-control-next {
    margin-right: 20% !important;
  }
}

@media (max-width: 576px) {
  svg {
    width: 3rem;
  }
  .carousel-control-prev,
  .carousel-control-next {
    margin-top: 260px !important;
  }
  .carousel-control-prev {
    margin-left: 20% !important;
  }
  .carousel-control-next {
    margin-right: 20% !important;
  }
}
</style>

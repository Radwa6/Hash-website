<template>
  <div>
    <div class="Feedback container text-center pt-5 pb-5">
      <div style="font-weight: bold">
        <svg
          width="164"
          height="2"
          viewBox="0 0 164 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.5"
            y1="1"
            x2="162.5"
            y2="1.00001"
            stroke="#D8D8D8"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        {{ $t('OurFeedback') }}
        <svg
          width="164"
          height="2"
          viewBox="0 0 164 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.5"
            y1="1"
            x2="162.5"
            y2="1.00001"
            stroke="#D8D8D8"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        <h1 class="m-4" style="font-weight: bold">
          <span style="color: #8c3597">{{ $t('WhatOur') }}</span>
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
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
              alt="avatar"
              style="width: 70px; border: 4px solid #8c3597; padding: 3px"
            />
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
              style="width: 70px; border: 4px solid #8c3597; padding: 3px"
            />
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
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
              alt="avatar"
              style="width: 70px; border: 4px solid #8c3597; padding: 3px"
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
          <i class="fa-solid fa-angle-left"></i> {{ $t('Prev') }}
        </button>
        <button
          data-mdb-button-init
          class="carousel-control-next text-black"
          type="button"
          data-mdb-target="#carouselExampleControlss"
          data-mdb-slide="next"
        >
          {{ $t('Next') }} <i class="fa-solid fa-angle-right"> </i>
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

.carousel-control-prev,
.carousel-control-next {
  margin-top: 160px;
}
.carousel-control-prev {
  margin-left: 36%;
}
.carousel-control-next {
  margin-right: 36%;
}
</style>

<template>
  <div>
    <!-- ======= nav ======= -->
    <nav
      :class="{
        scrolled: isScrolled,
        'contact-page': isContactPage,
        'default-page': !isContactPage,
      }"
      class="navbarr w-100"
    >
      <div id="app" :dir="isRTL ? 'rtl' : 'ltr'">
        <header class="header-area">
          <div class="containers">
            <nav class="navigation">
              <router-link to="/ThePage" class="logo">
                <div v-if="isScrolled">
                  <svg
                    width="70"
                    height="65"
                    viewBox="0 0 70 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="47.7033"
                      height="47.3902"
                      rx="15"
                      transform="matrix(0.763685 -0.645589 0.692168 0.721737 0 30.7968)"
                      fill="#D76D26"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M34.9609 34.2255L41.7423 20.4707L43.9316 24.1969L39.4458 34.2261L34.9609 34.2255Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M34.0974 31.1252L27.316 44.88L25.1267 41.1538L29.6125 31.1247L34.0974 31.1252Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M37.2952 29.5974L36.0527 32.0615L40.8253 31.9366L40.9785 30.829L41.5456 29.4486L37.2952 29.5974Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M28.7958 32.9429L27.7476 35.2217L31.3972 36.3964L33.5617 32.062L28.7958 32.8617"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M49.1871 32.4951L48.6889 33.3531L45.5339 38.7297V38.7379L42.3789 44.1145L41.8724 44.9807H29.4023L30.93 42.3741L34.9314 35.5511H38.9914L35.496 41.5079H39.8466L42.4873 37.0056H42.4956L44.1229 34.2274H20.9248L20.4183 33.3613L19.9119 32.4951L20.4183 31.629L23.5733 26.2609V26.2528L26.72 20.8757L27.2344 20.0095H39.7054L37.6713 23.4823H37.663L34.1675 29.4391H30.1075L33.603 23.4823H29.2607L26.6117 27.9846L24.9848 30.7628H48.1746L48.6894 31.629L49.1871 32.4951Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div v-else>
                  <svg
                    width="70"
                    height="65"
                    viewBox="0 0 70 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="47.7033"
                      height="47.3902"
                      rx="15"
                      transform="matrix(0.763685 -0.645589 0.692168 0.721737 0 30.7968)"
                      fill="#D76D26"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M34.9609 34.2255L41.7423 20.4707L43.9316 24.1969L39.4458 34.2261L34.9609 34.2255Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M34.0974 31.1252L27.316 44.88L25.1267 41.1538L29.6125 31.1247L34.0974 31.1252Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M37.2952 29.5974L36.0527 32.0615L40.8253 31.9366L40.9785 30.829L41.5456 29.4486L37.2952 29.5974Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M28.7958 32.9429L27.7476 35.2217L31.3972 36.3964L33.5617 32.062L28.7958 32.8617"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M49.1871 32.4951L48.6889 33.3531L45.5339 38.7297V38.7379L42.3789 44.1145L41.8724 44.9807H29.4023L30.93 42.3741L34.9314 35.5511H38.9914L35.496 41.5079H39.8466L42.4873 37.0056H42.4956L44.1229 34.2274H20.9248L20.4183 33.3613L19.9119 32.4951L20.4183 31.629L23.5733 26.2609V26.2528L26.72 20.8757L27.2344 20.0095H39.7054L37.6713 23.4823H37.663L34.1675 29.4391H30.1075L33.603 23.4823H29.2607L26.6117 27.9846L24.9848 30.7628H48.1746L48.6894 31.629L49.1871 32.4951Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </router-link>

              <button class="mobilebtn" @click="toggleMenu()">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="27"
                  viewbox="0 0 30 27"
                >
                  <g fill="none" fill-rule="evenodd">
                    <g fill="#fff" style="fill: #fff">
                      <g>
                        <path
                          d="M0 17H30V19H0zM0 25H30V27H0z"
                          transform="translate(-1376 -48) translate(1376 48)"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
              <div class="menu-area" :class="{ show: mobileMenu }">
                <ul class="m-0">
                  <router-link to="/ThePage" active-class="active-link">
                    <li>{{ $t('home') }}</li>
                  </router-link>

                  <router-link
                    :to="{ path: '/ThePage', hash: '#system-section' }"
                    active-class="active-link"
                  >
                    <li>{{ $t('about') }}</li>
                  </router-link>

                  <router-link
                    :to="{ path: '/ThePage', hash: '#servies-section' }"
                    active-class="active-link"
                  >
                    <li>{{ $t('services') }}</li>
                  </router-link>

                  <router-link
                    :to="{ path: '/ThePage', hash: '#advantages-section' }"
                    active-class="active-link"
                  >
                    <li>{{ $t('Solution') }}</li>
                  </router-link>

                  <router-link
                    :to="{ path: '/ThePage', hash: '#advantages-section' }"
                    active-class="active-link"
                  >
                    <li>{{ $t('Partners') }}</li>
                  </router-link>

                  <router-link
                    :to="{ path: '/ThePage', hash: '#advantages-section' }"
                    active-class="active-link"
                  >
                    <li>{{ $t('Reviews') }}</li>
                  </router-link>
                </ul>

                <router-link
                  to="/Contact"
                  class="d-inline-flex align-items-center m-5 mt-0 mb-0"
                >
                  <button class="btn-custom">
                    {{ $t('contact') }}
                  </button>
                </router-link>

                <a href="#" @click.prevent="toggleLanguage">{{
                  currentLanguage
                }}</a>
              </div>
            </nav>
          </div>
        </header>
      </div>
    </nav>
    <!-- End nav -->

    <!-- ======= Hero Section ======= -->
    <section
      id="hero"
      class="d-flex flex-column justify-content-end align-items-center m-0"
    >
      <div
        id="heroCarousel"
        data-bs-interval="5000"
        class="container carousel carousel-fade"
        data-bs-ride="carousel"
      >
        <!-- Slide 1 -->
        <div class="carousel-item active">
          <div class="carousel-container">
            <h2
              class="animate__animated animate__fadeInDown"
              data-il8n="company"
            >
              ALTIB Company
            </h2>
            <p class="animate__animated animate__fadeInUp" data-il8n="egyption">
              An Egyptian company founded in 2009, offering innovative and
              environmentally friendly building products and solutions. It
              utilizes sustainable solutions and keeps pace with scientific
              advancements in the construction industry, A Strong Foundation for
              a Secure Future.
            </p>
          </div>
        </div>
        <!-- Slide 2 -->
        <div class="carousel-item">
          <div class="carousel-container">
            <h2 class="animate__animated animate__fadeInDown">
              Vision of Company
            </h2>
            <p
              class="animate__animated animate__fadeInUp"
              data-il8n="altibvision"
            >
              ALTIB Group of Companies aspires to become a leader in the
              construction materials industry, providing high-quality products
              and services, aiming for excellence in performance and innovation,
              and ensuring the satisfaction of customers, shareholders, and
              employees alike.
            </p>
            <a
              href="#about"
              class="btn-get-started animate__animated animate__fadeInUp scrollto"
              data-il8n="readmore"
              >Read More</a
            >
          </div>
        </div>

        <!-- Slide 3 -->
        <div class="carousel-item">
          <div class="carousel-container">
            <h2
              class="animate__animated animate__fadeInDown"
              data-il8n="mission"
            >
              Mission of Company
            </h2>
            <p
              class="animate__animated animate__fadeInUp"
              data-il8n="altibmission"
            >
              ALTIB Group of Companies is dedicated to delivering high-quality
              construction products and exceptional services that meet our
              customers' needs with the highest international standards. We are
              committed to upholding the highest levels of safety, security,
              health, and environmental standards, while achieving outstanding
              performance through innovation, excellence in work, and social
              responsibility.
            </p>
            <a
              href="#about"
              class="btn-get-started animate__animated animate__fadeInUp scrollto"
              data-il8n="readmore"
              >Read More</a
            >
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#heroCarousel"
          role="button"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon bx bx-chevron-left"
            aria-hidden="true"
          ></span>
        </a>

        <a
          class="carousel-control-next"
          href="#heroCarousel"
          role="button"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon bx bx-chevron-right"
            aria-hidden="true"
          ></span>
        </a>
      </div>

      <svg
        class="hero-waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28 "
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g class="wave1">
          <use
            xlink:href="#wave-path"
            x="50"
            y="3"
            fill="rgba(255,255,255, .1)"
          />
        </g>
        <g class="wave2">
          <use
            xlink:href="#wave-path"
            x="50"
            y="0"
            fill="rgba(255,255,255, .2)"
          />
        </g>
        <g class="wave3">
          <use xlink:href="#wave-path" x="50" y="9" fill="#fff" />
        </g>
      </svg>
    </section>
    <!-- End Hero -->

    <!-- ======= about Section ======= -->
    <div class="about container" id="system-section">
      <div
        class="row pt-5 pb-5 position-relative d-flex justify-content-center align-items-center"
      >
        <div
          class="col-6 p-4 position-relative justify-content-center"
          data-aos="fade-right"
          data-aos-duration="2000"
          style="text-align: start"
        >
          <p
            style="
              color: #d76d26;
              background-color: #fee6c963;
              display: inline-block;
              padding: 3px 20px;
              border-radius: 50px;
            "
          >
            {{ $t('about_us') }}
          </p>
          <h1 style="font-weight: bold" class="mt-2 mb-2">
            {{ $t('abouth') }}
            <span style="color: #d76d26">{{ $t('abouthh') }}</span>
          </h1>
          <p>{{ $t('aboutinfo') }}</p>
          <router-link to="/aboutUs">
            <button class="button">{{ $t('SeeMore') }}</button>
          </router-link>
          <router-link
            to="/"
            style="
              background-color: transparent;
              color: #404852;
              text-decoration: none;
            "
          >
            <a class="mt-4 no-underline">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style="width: 5%; margin: 0 10px"
              >
                <path
                  d="M10.5 0C16.0116 0 20.5 4.48625 20.5 10.0058C20.5 15.5137 16.0116 20 10.5 20C4.98842 20 0.5 15.5137 0.5 10.0058C0.5 4.48625 4.98842 0 10.5 0ZM9.361 6.02991C9.14865 6.02991 8.94595 6.07815 8.7529 6.17463C8.51158 6.3097 8.31853 6.52195 8.21236 6.77279C8.14479 6.94645 8.03861 7.46744 8.03861 7.47709C7.93243 8.04631 7.87452 8.9725 7.87452 9.99518C7.87452 10.9706 7.93243 11.8572 8.01931 12.4361C8.02896 12.4457 8.13514 13.0921 8.25097 13.314C8.46332 13.7192 8.87838 13.9701 9.32239 13.9701H9.361C9.65058 13.9604 10.2587 13.7096 10.2587 13.7C11.2819 13.2754 13.2992 11.9537 14.11 11.0757L14.168 11.0178C14.2741 10.9117 14.4093 10.7477 14.4382 10.7091C14.5927 10.5065 14.6699 10.2557 14.6699 10.0058C14.6699 9.72504 14.583 9.46454 14.4189 9.25229C14.3803 9.2137 14.2355 9.04969 14.1004 8.91462C13.3089 8.06561 11.2432 6.67631 10.1622 6.25181C9.99807 6.18524 9.58301 6.03956 9.361 6.02991Z"
                  fill="#404852"
                />
              </svg>

              {{ $t('WatchVideo') }}
            </a>
          </router-link>
        </div>
        <div class="col-6" data-aos="fade-up" data-aos-duration="2000">
          <img :src="imageUrl1" alt="image" class="img-fluid" />
        </div>
      </div>
    </div>
    <!-- End about -->

    <!-- ======= Choose Section ======= -->
    <div class="Choose">
      <div class="container">
        <div
          class="row pt-5 pb-5 position-relative d-flex justify-content-center align-items-center"
        >
          <div
            class="col-lg-6 col-12"
            data-aos="fade-up"
            data-aos-duration="2000"
            style="text-align: start"
          >
            <p class="mb-2" style="color: #d76d26">Why Choose Us</p>
            <h5 style="font-weight: bold">Support & Maintenance</h5>
            <img :src="imageUrl2" alt="image" class="img-fluid" />
          </div>

          <div
            class="col-lg-6 col-12 p-4 position-relative justify-content-center"
            style="text-align: start"
          >
            <div class="row" data-aos="fade-right" data-aos-duration="2000">
              <div class="Support d-flex justify-content-between m-3 p-4">
                <svg
                  width="51"
                  height="50"
                  viewBox="0 0 51 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.9375"
                    width="50"
                    height="50"
                    rx="25"
                    fill="#D76D26"
                  />
                  <path
                    opacity="0.3"
                    d="M21.875 26.25C22.6209 26.25 23.3363 26.5463 23.8637 27.0738C24.3912 27.6012 24.6875 28.3166 24.6875 29.0625V33.4375C24.6875 34.1834 24.3912 34.8988 23.8637 35.4262C23.3363 35.9537 22.6209 36.25 21.875 36.25H17.5C16.7541 36.25 16.0387 35.9537 15.5113 35.4262C14.9838 34.8988 14.6875 34.1834 14.6875 33.4375V29.0625C14.6875 28.3166 14.9838 27.6012 15.5113 27.0738C16.0387 26.5463 16.7541 26.25 17.5 26.25H21.875ZM34.375 13.75C35.1209 13.75 35.8363 14.0463 36.3637 14.5738C36.8912 15.1012 37.1875 15.8166 37.1875 16.5625V20.9375C37.1875 21.6834 36.8912 22.3988 36.3637 22.9262C35.8363 23.4537 35.1209 23.75 34.375 23.75H30C29.2541 23.75 28.5387 23.4537 28.0113 22.9262C27.4838 22.3988 27.1875 21.6834 27.1875 20.9375V16.5625C27.1875 15.8166 27.4838 15.1012 28.0113 14.5738C28.5387 14.0463 29.2541 13.75 30 13.75H34.375Z"
                    fill="white"
                  />
                  <path
                    d="M21.875 13.75C22.6209 13.75 23.3363 14.0463 23.8637 14.5738C24.3912 15.1012 24.6875 15.8166 24.6875 16.5625V20.9375C24.6875 21.6834 24.3912 22.3988 23.8637 22.9262C23.3363 23.4537 22.6209 23.75 21.875 23.75H17.5C16.7541 23.75 16.0387 23.4537 15.5113 22.9262C14.9838 22.3988 14.6875 21.6834 14.6875 20.9375V16.5625C14.6875 15.8166 14.9838 15.1012 15.5113 14.5738C16.0387 14.0463 16.7541 13.75 17.5 13.75H21.875Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M34.375 26.25C35.1209 26.25 35.8363 26.5463 36.3637 27.0738C36.8912 27.6012 37.1875 28.3166 37.1875 29.0625V33.4375C37.1875 34.1834 36.8912 34.8988 36.3637 35.4262C35.8363 35.9537 35.1209 36.25 34.375 36.25H30C29.2541 36.25 28.5387 35.9537 28.0113 35.4262C27.4838 34.8988 27.1875 34.1834 27.1875 33.4375V29.0625C27.1875 28.3166 27.4838 27.6012 28.0113 27.0738C28.5387 26.5463 29.2541 26.25 30 26.25H34.375Z"
                    fill="white"
                  />
                </svg>
                <div class="">
                  <h5 style="font-weight: bold">Support & Maintenance</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div
              class="row"
              style="margin: 0 10% 0 -10%"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <div class="Support d-flex justify-content-between m-3 p-4">
                <svg
                  width="51"
                  height="50"
                  viewBox="0 0 51 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.9375"
                    width="50"
                    height="50"
                    rx="25"
                    fill="#D76D26"
                  />
                  <path
                    opacity="0.3"
                    d="M21.875 26.25C22.6209 26.25 23.3363 26.5463 23.8637 27.0738C24.3912 27.6012 24.6875 28.3166 24.6875 29.0625V33.4375C24.6875 34.1834 24.3912 34.8988 23.8637 35.4262C23.3363 35.9537 22.6209 36.25 21.875 36.25H17.5C16.7541 36.25 16.0387 35.9537 15.5113 35.4262C14.9838 34.8988 14.6875 34.1834 14.6875 33.4375V29.0625C14.6875 28.3166 14.9838 27.6012 15.5113 27.0738C16.0387 26.5463 16.7541 26.25 17.5 26.25H21.875ZM34.375 13.75C35.1209 13.75 35.8363 14.0463 36.3637 14.5738C36.8912 15.1012 37.1875 15.8166 37.1875 16.5625V20.9375C37.1875 21.6834 36.8912 22.3988 36.3637 22.9262C35.8363 23.4537 35.1209 23.75 34.375 23.75H30C29.2541 23.75 28.5387 23.4537 28.0113 22.9262C27.4838 22.3988 27.1875 21.6834 27.1875 20.9375V16.5625C27.1875 15.8166 27.4838 15.1012 28.0113 14.5738C28.5387 14.0463 29.2541 13.75 30 13.75H34.375Z"
                    fill="white"
                  />
                  <path
                    d="M21.875 13.75C22.6209 13.75 23.3363 14.0463 23.8637 14.5738C24.3912 15.1012 24.6875 15.8166 24.6875 16.5625V20.9375C24.6875 21.6834 24.3912 22.3988 23.8637 22.9262C23.3363 23.4537 22.6209 23.75 21.875 23.75H17.5C16.7541 23.75 16.0387 23.4537 15.5113 22.9262C14.9838 22.3988 14.6875 21.6834 14.6875 20.9375V16.5625C14.6875 15.8166 14.9838 15.1012 15.5113 14.5738C16.0387 14.0463 16.7541 13.75 17.5 13.75H21.875Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M34.375 26.25C35.1209 26.25 35.8363 26.5463 36.3637 27.0738C36.8912 27.6012 37.1875 28.3166 37.1875 29.0625V33.4375C37.1875 34.1834 36.8912 34.8988 36.3637 35.4262C35.8363 35.9537 35.1209 36.25 34.375 36.25H30C29.2541 36.25 28.5387 35.9537 28.0113 35.4262C27.4838 34.8988 27.1875 34.1834 27.1875 33.4375V29.0625C27.1875 28.3166 27.4838 27.6012 28.0113 27.0738C28.5387 26.5463 29.2541 26.25 30 26.25H34.375Z"
                    fill="white"
                  />
                </svg>
                <div class="">
                  <h5 style="font-weight: bold">Support & Maintenance</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div class="row" data-aos="fade-right" data-aos-duration="2000">
              <div class="Support d-flex justify-content-between m-3 p-4">
                <svg
                  width="51"
                  height="50"
                  viewBox="0 0 51 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.9375"
                    width="50"
                    height="50"
                    rx="25"
                    fill="#D76D26"
                  />
                  <path
                    opacity="0.3"
                    d="M21.875 26.25C22.6209 26.25 23.3363 26.5463 23.8637 27.0738C24.3912 27.6012 24.6875 28.3166 24.6875 29.0625V33.4375C24.6875 34.1834 24.3912 34.8988 23.8637 35.4262C23.3363 35.9537 22.6209 36.25 21.875 36.25H17.5C16.7541 36.25 16.0387 35.9537 15.5113 35.4262C14.9838 34.8988 14.6875 34.1834 14.6875 33.4375V29.0625C14.6875 28.3166 14.9838 27.6012 15.5113 27.0738C16.0387 26.5463 16.7541 26.25 17.5 26.25H21.875ZM34.375 13.75C35.1209 13.75 35.8363 14.0463 36.3637 14.5738C36.8912 15.1012 37.1875 15.8166 37.1875 16.5625V20.9375C37.1875 21.6834 36.8912 22.3988 36.3637 22.9262C35.8363 23.4537 35.1209 23.75 34.375 23.75H30C29.2541 23.75 28.5387 23.4537 28.0113 22.9262C27.4838 22.3988 27.1875 21.6834 27.1875 20.9375V16.5625C27.1875 15.8166 27.4838 15.1012 28.0113 14.5738C28.5387 14.0463 29.2541 13.75 30 13.75H34.375Z"
                    fill="white"
                  />
                  <path
                    d="M21.875 13.75C22.6209 13.75 23.3363 14.0463 23.8637 14.5738C24.3912 15.1012 24.6875 15.8166 24.6875 16.5625V20.9375C24.6875 21.6834 24.3912 22.3988 23.8637 22.9262C23.3363 23.4537 22.6209 23.75 21.875 23.75H17.5C16.7541 23.75 16.0387 23.4537 15.5113 22.9262C14.9838 22.3988 14.6875 21.6834 14.6875 20.9375V16.5625C14.6875 15.8166 14.9838 15.1012 15.5113 14.5738C16.0387 14.0463 16.7541 13.75 17.5 13.75H21.875Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M34.375 26.25C35.1209 26.25 35.8363 26.5463 36.3637 27.0738C36.8912 27.6012 37.1875 28.3166 37.1875 29.0625V33.4375C37.1875 34.1834 36.8912 34.8988 36.3637 35.4262C35.8363 35.9537 35.1209 36.25 34.375 36.25H30C29.2541 36.25 28.5387 35.9537 28.0113 35.4262C27.4838 34.8988 27.1875 34.1834 27.1875 33.4375V29.0625C27.1875 28.3166 27.4838 27.6012 28.0113 27.0738C28.5387 26.5463 29.2541 26.25 30 26.25H34.375Z"
                    fill="white"
                  />
                </svg>
                <div class="">
                  <h5 style="font-weight: bold">Support & Maintenance</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Choose -->

    <!-- ======= Reasons Section ======= -->
    <div class="Reasons container" id="system-section">
      <div
        class="row pb-5 pt-5 position-relative d-flex justify-content-center align-items-center"
      >
        <div data-aos="fade-down" data-aos-duration="2000">
          <h1 style="font-weight: bold">
            4 Reasons To Partner
            <span style="color: #d76d26">With Us!</span>
          </h1>
          <p>
            Unlock Success Together: Your Strategic Partner for Growth and
            Innovation With Us
          </p>
        </div>

        <div class="col-lg-3 col-6" data-aos="fade-up" data-aos-duration="2000">
          <div
            class="card pt-5 pb-5 text-center border-0"
            style="box-shadow: none"
          >
            <div class="big-dotted-border p-2 m-4" style="border-radius: 50%">
              <img
                src="../../assets/Reason1.png"
                alt=""
                width="100%"
                style="border-radius: 50%"
              />
            </div>

            <div class="card-body">
              <h4 class="card-title" style="font-weight: bold">
                8 Years Of Experience
              </h4>
              <p class="card-text">
                Lorem Ipsum is simply dummy text of the printing
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-6" data-aos="fade-up" data-aos-duration="2000">
          <div
            class="card pt-5 pb-5 text-center border-0"
            style="box-shadow: none"
          >
            <div class="big-dotted-border p-2 m-4" style="border-radius: 50%">
              <img
                src="../../assets/Reason2.png"
                alt=""
                width="100%"
                style="border-radius: 50%"
              />
            </div>

            <div class="card-body">
              <h4 class="card-title" style="font-weight: bold">
                Solutions from Scratch
              </h4>
              <p class="card-text">
                Lorem Ipsum is simply dummy text of the printing
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-6" data-aos="fade-up" data-aos-duration="2000">
          <div
            class="card pt-5 pb-5 text-center border-0"
            style="box-shadow: none"
          >
            <div class="big-dotted-border p-2 m-4" style="border-radius: 50%">
              <img
                src="../../assets/Reason3.png"
                alt=""
                width="100%"
                style="border-radius: 50%"
              />
            </div>

            <div class="card-body m-0 p-0">
              <h4 class="card-title" style="font-weight: bold">
                Customization Capabilities
              </h4>
              <p class="card-text">
                Lorem Ipsum is simply dummy text of the printing
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-6" data-aos="fade-up" data-aos-duration="2000">
          <div
            class="card pt-5 pb-5 text-center border-0"
            style="box-shadow: none"
          >
            <div class="big-dotted-border p-2 m-4" style="border-radius: 50%">
              <img
                src="../../assets/Reason4.png"
                alt=""
                width="100%"
                style="border-radius: 50%"
              />
            </div>

            <div class="card-body">
              <h4 class="card-title" style="font-weight: bold">
                Practical Application
              </h4>
              <p class="card-text">
                Lorem Ipsum is simply dummy text of the printing
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Reasons -->

    <!-- ======= Services Section ======= -->
    <div class="Services p-5">
      <div class="container">
        <div
          class="aos-init aos-animate animate__animated animate__fadeInDown d-flex justify-content-between p-5 mt-5"
          data-il8n="Portofolio"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1 style="color: #fff">
            <span style="color: #d76d26">Services </span>

            We Can Offer You !
          </h1>
          <router-link to="/allProjects">
            <button style="color: #ffffff; text-decoration: none">
              {{ $t('ViewPortofolio') }}
              <div class="arrow-wrapper">
                <div class="arrow"></div>
              </div>
            </button>
          </router-link>
        </div>

        <div class="row mt-3 mb-5">
          <div
            class="col-sm-3 col-12 mb-4"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div class="card pt-5 pb-5 text-center">
              <div>
                <svg
                  width="40"
                  height="40"
                  fill="#D76D26"
                  viewBox="0 0 128 128"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_497_929)">
                    <path
                      opacity="0.885"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.5 -0.5C35.1667 -0.5 59.8333 -0.5 84.5 -0.5C91.4641 6.9649 98.6308 14.2982 106 21.5C107.492 26.4107 107.826 31.4107 107 36.5C105.667 37.8333 104.333 37.8333 103 36.5C102.502 33.1832 102.335 29.8499 102.5 26.5C97.1563 26.666 91.8229 26.4994 86.5 26C84.5789 25.6397 82.9122 24.8064 81.5 23.5C80.5383 16.8923 80.2049 10.2257 80.5 3.5C58.1642 3.33337 35.8308 3.50004 13.5 4C12.6919 4.30762 12.0253 4.80762 11.5 5.5C10.3397 43.7918 10.173 82.1252 11 120.5C11.5 121.667 12.3333 122.5 13.5 123C42.1667 123.667 70.8333 123.667 99.5 123C101.915 121.535 102.915 119.368 102.5 116.5C105.261 115.915 106.927 116.915 107.5 119.5C107.29 123.195 105.623 125.862 102.5 127.5C71.8333 127.5 41.1667 127.5 10.5 127.5C8.85639 126.684 7.68972 125.35 7 123.5C6.33333 83.5 6.33333 43.5 7 3.5C7.68972 1.64977 8.85639 0.316435 10.5 -0.5ZM84.5 7.5C89.2979 11.7967 93.9645 16.2967 98.5 21C86.1664 24.5002 81.4998 20.0002 84.5 7.5ZM30.5 21.5C31.6291 23.6282 31.7958 25.9615 31 28.5C28.0139 26.4308 27.8472 24.0974 30.5 21.5Z"
                    />
                    <path
                      opacity="0.82"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M31.5 12.5C32.8333 12.5 34.1667 12.5 35.5 12.5C35.5 13.8333 35.5 15.1667 35.5 16.5C39.8063 16.3029 41.8063 18.3029 41.5 22.5C39.7376 22.6427 38.0709 22.3094 36.5 21.5C35.3452 24.4459 35.1786 27.4459 36 30.5C44.1673 34.179 46.0006 39.8457 41.5 47.5C39.9288 49.415 37.9288 50.415 35.5 50.5C36.2436 53.9496 34.9103 55.6162 31.5 55.5C31.5 53.8333 31.5 52.1667 31.5 50.5C26.4399 51.3316 23.7733 49.3316 23.5 44.5C26.1985 44.4661 28.6985 45.1328 31 46.5C31.6667 42.5 31.6667 38.5 31 34.5C21.607 28.7359 21.4403 22.7359 30.5 16.5C31.4287 15.3112 31.762 13.9778 31.5 12.5ZM30.5 21.5C27.8472 24.0974 28.0139 26.4308 31 28.5C31.7958 25.9615 31.6291 23.6282 30.5 21.5ZM35.5 36.5C40.6738 38.9485 40.8404 41.9485 36 45.5C35.502 42.5184 35.3354 39.5184 35.5 36.5Z"
                    />
                    <path
                      opacity="0.82"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M60.5 41.5C79.1696 41.3334 97.8363 41.5001 116.5 42C117.931 42.4652 119.097 43.2986 120 44.5C120.667 65.8333 120.667 87.1667 120 108.5C119.5 109.667 118.667 110.5 117.5 111C98.1667 111.667 78.8333 111.667 59.5 111C58.2986 110.097 57.4652 108.931 57 107.5C56.5001 92.1703 56.3334 76.837 56.5 61.5C58.1439 61.2865 59.6439 61.6198 61 62.5C61.1752 77.4078 61.6752 92.2412 62.5 107C79.8333 107.667 97.1667 107.667 114.5 107C115 106.5 115.5 106 116 105.5C116.667 86.1667 116.667 66.8333 116 47.5C98.2403 46.3416 80.407 46.175 62.5 47C61.7117 50.0757 61.2117 53.2423 61 56.5C59.6667 57.8333 58.3333 57.8333 57 56.5C56.3333 52.8333 56.3333 49.1667 57 45.5C57.6897 43.6498 58.8564 42.3164 60.5 41.5Z"
                    />
                    <path
                      opacity="0.827"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M68.4999 50.5C82.1706 50.3334 95.8373 50.5001 109.5 51C111.51 55.6089 112.01 60.4423 111 65.5C110.5 66 110 66.5 109.5 67C95.4999 67.6667 81.4999 67.6667 67.4999 67C65.9123 61.2881 66.2457 55.7881 68.4999 50.5ZM70.4999 55.5C82.4999 55.5 94.4999 55.5 106.5 55.5C106.5 58.1667 106.5 60.8333 106.5 63.5C94.4999 63.5 82.4999 63.5 70.4999 63.5C70.4999 60.8333 70.4999 58.1667 70.4999 55.5Z"
                    />
                    <path
                      opacity="0.904"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M20.5 63.5C30.1667 63.5 39.8333 63.5 49.5 63.5C49.5 64.8333 49.5 66.1667 49.5 67.5C39.8333 67.5 30.1667 67.5 20.5 67.5C20.5 66.1667 20.5 64.8333 20.5 63.5Z"
                    />
                    <path
                      opacity="0.674"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M66.5 73.5C69.1667 73.5 71.8333 73.5 74.5 73.5C75.2447 76.9304 73.9114 78.597 70.5 78.5C67.0886 78.597 65.7553 76.9304 66.5 73.5Z"
                    />
                    <path
                      opacity="0.657"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M78.5 73.5C81.9976 72.9547 84.9976 73.788 87.5 76C85.3156 78.3679 82.6489 79.0346 79.5 78C78.6198 76.6439 78.2865 75.1439 78.5 73.5Z"
                    />
                    <path
                      opacity="0.641"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M90.5001 73.5C93.1874 73.3359 95.8541 73.5026 98.5001 74C99.7271 75.5874 99.3938 76.9207 97.5001 78C92.801 79.7129 90.4677 78.2129 90.5001 73.5Z"
                    />
                    <path
                      opacity="0.64"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M103.5 73.5001C105.857 73.3368 108.19 73.5035 110.5 74.0001C111.925 75.7142 111.592 77.0476 109.5 78.0001C107.5 78.6668 105.5 78.6668 103.5 78.0001C102.272 76.5099 102.272 75.0099 103.5 73.5001Z"
                    />
                    <path
                      opacity="0.733"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M20.5 79.5C30.1667 79.5 39.8333 79.5 49.5 79.5C49.7135 81.1439 49.3802 82.6439 48.5 84C39.5 84.6667 30.5 84.6667 21.5 84C20.6198 82.6439 20.2865 81.1439 20.5 79.5Z"
                    />
                    <path
                      opacity="0.801"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M66.5 83.5C69.1667 83.5 71.8333 83.5 74.5 83.5C74.5 84.8333 74.5 86.1667 74.5 87.5C71.8333 87.5 69.1667 87.5 66.5 87.5C66.5 86.1667 66.5 84.8333 66.5 83.5Z"
                    />
                    <path
                      opacity="0.754"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M78.5 83.5C81.1873 83.3359 83.854 83.5026 86.5 84C87.8333 85 87.8333 86 86.5 87C83.854 87.4974 81.1873 87.6641 78.5 87.5C78.5 86.1667 78.5 84.8333 78.5 83.5Z"
                    />
                    <path
                      opacity="0.754"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M90.5 83.5C93.1873 83.3359 95.854 83.5026 98.5 84C99.8333 85 99.8333 86 98.5 87C95.854 87.4974 93.1873 87.6641 90.5 87.5C90.5 86.1667 90.5 84.8333 90.5 83.5Z"
                    />
                    <path
                      opacity="0.753"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M102.5 83.5C105.187 83.3359 107.854 83.5026 110.5 84C111.833 85 111.833 86 110.5 87C107.854 87.4974 105.187 87.6641 102.5 87.5C102.5 86.1667 102.5 84.8333 102.5 83.5Z"
                    />
                    <path
                      opacity="0.674"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M67.5 92.5C69.5273 92.3379 71.5273 92.5045 73.5 93C74.3802 94.3561 74.7135 95.8561 74.5 97.5C71.8333 97.5 69.1667 97.5 66.5 97.5C66.366 95.7085 66.6993 94.0418 67.5 92.5Z"
                    />
                    <path
                      opacity="0.657"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M79.5 92.5C82.6646 91.9635 85.3312 92.7969 87.5 95C84.9976 97.212 81.9976 98.0453 78.5 97.5C78.366 95.7085 78.6993 94.0418 79.5 92.5Z"
                    />
                    <path
                      opacity="0.64"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M91.5 92.5C94.9079 91.828 97.5745 92.828 99.5 95.5C99.2907 96.086 98.9574 96.5861 98.5 97.0001C95.854 97.4974 93.1873 97.6642 90.5 97.5001C90.366 95.7085 90.6993 94.0418 91.5 92.5Z"
                    />
                    <path
                      opacity="0.64"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M103.5 92.5001C105.92 92.2925 108.253 92.6259 110.5 93.5001C111.583 94.3651 111.749 95.3651 111 96.5001C108.599 97.6024 106.099 97.7691 103.5 97.0001C102.272 95.5099 102.272 94.0099 103.5 92.5001Z"
                    />
                    <path
                      opacity="0.745"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M21.5 95.5C30.5062 95.3336 39.5062 95.5002 48.5 96C49.3802 97.3561 49.7135 98.8561 49.5 100.5C39.8333 100.5 30.1667 100.5 20.5 100.5C20.366 98.7085 20.6993 97.0418 21.5 95.5Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_497_929">
                      <rect width="128" height="128" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div class="card-body">
                <h3 class="card-title" style="font-weight: bold">Accounting</h3>
                <p class="card-text">
                  We initially make planning on the full project visualization.
                </p>
              </div>
            </div>
          </div>

          <div
            class="col-sm-3 col-12 mb-4"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div class="card pt-5 pb-5 text-center">
              <div>
                <svg
                  width="40"
                  height="40"
                  fill="#D76D26"
                  viewBox="0 0 128 128"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_497_979)">
                    <path
                      opacity="0.792"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M127.5 109.5C127.5 111.167 127.5 112.833 127.5 114.5C84.8333 114.5 42.1667 114.5 -0.5 114.5C-0.5 112.833 -0.5 111.167 -0.5 109.5C1.16667 109.5 2.83333 109.5 4.5 109.5C4.66662 89.1639 4.49996 68.8306 4 48.5C1.74902 46.9705 0.249016 44.9705 -0.5 42.5C-0.5 40.8333 -0.5 39.1667 -0.5 37.5C22.5239 28.2155 45.8572 20.0488 69.5 13C74.3128 17.601 74.3128 21.9343 69.5 26C79.0837 30.7567 89.0837 34.7567 99.5 38C101.5 38.6667 102.833 40 103.5 42C102.926 45.3137 101.426 48.1471 99 50.5C98.5006 55.8229 98.334 61.1563 98.5 66.5C107.085 66.1834 115.585 66.5168 124 67.5C123.997 74.5314 123.33 81.5314 122 88.5C120.951 90.1066 119.451 90.7733 117.5 90.5C117.5 86.5 117.5 82.5 117.5 78.5C101.5 78.5 85.5 78.5 69.5 78.5C69.5 88.8333 69.5 99.1667 69.5 109.5C71.5 109.5 73.5 109.5 75.5 109.5C75.1842 101.248 75.5175 93.081 76.5 85C88.1619 84.5001 99.8286 84.3335 111.5 84.5C112.407 92.7921 112.74 101.125 112.5 109.5C114.167 109.5 115.833 109.5 117.5 109.5C117.5 104.5 117.5 99.5 117.5 94.5C119.144 94.2865 120.644 94.6198 122 95.5C122.499 100.155 122.666 104.821 122.5 109.5C124.167 109.5 125.833 109.5 127.5 109.5ZM66.5 17.5C67.2674 18.172 67.9341 19.0053 68.5 20C48 27.5 27.5 35 7 42.5C5.94123 42.3699 5.1079 41.8699 4.5 41C25.3045 33.2363 45.9712 25.4029 66.5 17.5ZM63.5 26.5C64.4979 53.995 64.8313 81.6616 64.5 109.5C54.8333 109.5 45.1667 109.5 35.5 109.5C35.6664 100.827 35.4998 92.1603 35 83.5C34.5 83 34 82.5 33.5 82C27.8333 81.3333 22.1667 81.3333 16.5 82C16 82.5 15.5 83 15 83.5C14.5002 92.1603 14.3336 100.827 14.5 109.5C12.5 109.5 10.5 109.5 8.5 109.5C8.5 88.5 8.5 67.5 8.5 46.5C27.2025 40.6016 45.5358 33.9349 63.5 26.5ZM69.5 32.5C78.1048 35.7579 86.7714 38.9246 95.5 42C97.158 42.7253 97.658 43.892 97 45.5C88.594 42.1417 80.094 38.975 71.5 36C70.0267 35.2904 69.3601 34.1238 69.5 32.5ZM69.5 40.5C77.3781 43.3546 85.2114 46.3546 93 49.5C93.4994 55.1569 93.6661 60.8236 93.5 66.5C85.5 66.5 77.5 66.5 69.5 66.5C69.5 57.8333 69.5 49.1667 69.5 40.5ZM39.5 51.5C44.5 51.5 49.5 51.5 54.5 51.5C54.5 56.5 54.5 61.5 54.5 66.5C49.5 66.5 44.5 66.5 39.5 66.5C39.5 61.5 39.5 56.5 39.5 51.5ZM77.5 52.5C78.8333 52.5 80.1667 52.5 81.5 52.5C81.5 53.8333 81.5 55.1667 81.5 56.5C80.1667 56.5 78.8333 56.5 77.5 56.5C77.5 55.1667 77.5 53.8333 77.5 52.5ZM69.5 71.5C86.5131 71.1672 103.513 71.5005 120.5 72.5C112 72.8333 103.5 73.1667 95 73.5C86.1394 73.4981 77.6394 72.8314 69.5 71.5ZM18.5 86.5C22.5 86.5 26.5 86.5 30.5 86.5C30.5 94.1667 30.5 101.833 30.5 109.5C26.5 109.5 22.5 109.5 18.5 109.5C18.5 101.833 18.5 94.1667 18.5 86.5ZM45.5 86.5C48.5 86.5 51.5 86.5 54.5 86.5C54.5 89.5 54.5 92.5 54.5 95.5C51.5 95.5 48.5 95.5 45.5 95.5C45.5 92.5 45.5 89.5 45.5 86.5ZM79.5 88.5C88.8333 88.5 98.1667 88.5 107.5 88.5C107.5 89.8333 107.5 91.1667 107.5 92.5C98.1667 92.5 88.8333 92.5 79.5 92.5C79.5 91.1667 79.5 89.8333 79.5 88.5ZM79.5 97.5C88.8333 97.5 98.1667 97.5 107.5 97.5C107.5 98.8333 107.5 100.167 107.5 101.5C98.1667 101.5 88.8333 101.5 79.5 101.5C79.5 100.167 79.5 98.8333 79.5 97.5ZM79.5 105.5C88.8333 105.5 98.1667 105.5 107.5 105.5C107.5 106.833 107.5 108.167 107.5 109.5C98.1667 109.5 88.8333 109.5 79.5 109.5C79.5 108.167 79.5 106.833 79.5 105.5Z"
                    />
                    <path
                      opacity="0.804"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.5 46.5C30.5043 46.3334 43.5043 46.5001 56.5 47C57.3333 47.8333 58.1667 48.6667 59 49.5C59.6667 55.5 59.6667 61.5 59 67.5C58.6258 68.4162 58.1258 69.2496 57.5 70C48.5062 70.4998 39.5062 70.6664 30.5 70.5C30.5 69.1667 30.5 67.8333 30.5 66.5C31.8333 66.5 33.1667 66.5 34.5 66.5C34.5 61.5 34.5 56.5 34.5 51.5C29.2384 51.1953 24.0717 51.5286 19 52.5C18.3333 56.8333 18.3333 61.1667 19 65.5C21.3806 66.435 23.8806 66.7683 26.5 66.5C26.5 67.8333 26.5 69.1667 26.5 70.5C23.1501 70.665 19.8168 70.4983 16.5 70C16 69.5 15.5 69 15 68.5C14.3333 61.8333 14.3333 55.1667 15 48.5C15.9947 47.9341 16.828 47.2674 17.5 46.5ZM39.5 51.5C39.5 56.5 39.5 61.5 39.5 66.5C44.5 66.5 49.5 66.5 54.5 66.5C54.5 61.5 54.5 56.5 54.5 51.5C49.5 51.5 44.5 51.5 39.5 51.5Z"
                    />
                    <path
                      opacity="0.745"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M75.4999 47.5C85.5679 45.7352 89.0679 49.7352 85.9999 59.5C85.4999 60 84.9999 60.5 84.4999 61C74.5141 64.0107 70.6807 60.5107 72.9999 50.5C73.6978 49.3094 74.5312 48.3094 75.4999 47.5ZM77.4999 52.5C77.4999 53.8333 77.4999 55.1667 77.4999 56.5C78.8332 56.5 80.1666 56.5 81.4999 56.5C81.4999 55.1667 81.4999 53.8333 81.4999 52.5C80.1666 52.5 78.8332 52.5 77.4999 52.5Z"
                    />
                    <path
                      opacity="0.736"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M43.5 81.5C48.1785 81.3342 52.8452 81.5008 57.5 82C58 82.5 58.5 83 59 83.5C59.6667 88.5 59.6667 93.5 59 98.5C58.5 99 58 99.5 57.5 100C42.8485 104.346 37.3485 99.1794 41 84.5C41.6979 83.3094 42.5313 82.3094 43.5 81.5ZM45.5 86.5C45.5 89.5 45.5 92.5 45.5 95.5C48.5 95.5 51.5 95.5 54.5 95.5C54.5 92.5 54.5 89.5 54.5 86.5C51.5 86.5 48.5 86.5 45.5 86.5Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_497_979">
                      <rect width="128" height="128" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div class="card-body">
                <h3 class="card-title" style="font-weight: bold">
                  Construction
                </h3>
                <p class="card-text">
                  We initially make planning on the full project visualization.
                </p>
              </div>
            </div>
          </div>

          <div
            class="col-sm-3 col-12 mb-4"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div class="card pt-5 pb-5 text-center">
              <div>
                <svg
                  width="40"
                  height="40"
                  fill="#D76D26"
                  viewBox="0 0 128 128"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_497_1016)">
                    <path
                      opacity="0.794"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M91.5001 -0.5C96.8334 -0.5 102.167 -0.5 107.5 -0.5C108.011 1.19474 108.678 2.8614 109.5 4.5C111.191 2.74383 113.191 2.24383 115.5 3C118.333 5.83333 121.167 8.66667 124 11.5C124.756 13.8087 124.256 15.8087 122.5 17.5C124.139 18.3219 125.805 18.9886 127.5 19.5C127.5 24.8333 127.5 30.1667 127.5 35.5C125.833 35.5 124.167 35.5 122.5 35.5C123.826 38.001 124.326 40.6677 124 43.5C121.167 46.3333 118.333 49.1667 115.5 52C113.191 52.7562 111.191 52.2562 109.5 50.5C108.756 51.9905 108.09 53.4905 107.5 55C102.177 55.4994 96.8438 55.666 91.5001 55.5C91.8187 53.2495 91.3187 51.2495 90.0001 49.5C88.475 52.0867 86.3084 52.9201 83.5001 52C80.6668 49.1667 77.8334 46.3333 75.0001 43.5C74.6737 40.6677 75.1737 38.001 76.5001 35.5C74.8334 35.5 73.1668 35.5 71.5001 35.5C71.3341 30.1563 71.5007 24.8229 72.0001 19.5C73.5096 18.9103 75.0096 18.2436 76.5001 17.5C74.7439 15.8087 74.2439 13.8087 75.0001 11.5C77.8334 8.66667 80.6668 5.83333 83.5001 3C86.3324 2.67363 88.9991 3.17363 91.5001 4.5C91.5001 2.83333 91.5001 1.16667 91.5001 -0.5ZM95.5001 3.5C98.1668 3.5 100.833 3.5 103.5 3.5C103.5 5.16667 103.5 6.83333 103.5 8.5C105.787 8.7239 107.953 9.39057 110 10.5C113.739 7.95332 116.572 8.95332 118.5 13.5C117.617 14.548 116.95 15.7147 116.5 17C117.609 19.0466 118.276 21.2133 118.5 23.5C120.167 23.5 121.833 23.5 123.5 23.5C123.5 26.1667 123.5 28.8333 123.5 31.5C121.833 31.5 120.167 31.5 118.5 31.5C118.276 33.7867 117.609 35.9534 116.5 38C117.615 39.3932 118.115 40.8932 118 42.5C116.667 43.8333 115.333 45.1667 114 46.5C110.984 44.1816 107.818 44.1816 104.5 46.5C103.548 48.0453 103.215 49.712 103.5 51.5C100.833 51.5 98.1668 51.5 95.5001 51.5C95.1405 45.9676 92.1405 43.8009 86.5001 45C86.0001 45.5 85.5001 46 85.0001 46.5C83.315 44.9825 81.815 43.3159 80.5001 41.5C82.7989 38.6285 82.7989 35.6285 80.5001 32.5C78.9548 31.5481 77.2881 31.2148 75.5001 31.5C75.5001 28.8333 75.5001 26.1667 75.5001 23.5C80.2358 23.7558 82.5692 21.4224 82.5001 16.5C82.4713 14.9707 81.8046 13.804 80.5001 13C81.8334 11.6667 83.1668 10.3333 84.5001 9C86.1069 8.88486 87.6069 9.38486 89.0001 10.5C91.0467 9.39057 93.2134 8.7239 95.5001 8.5C95.5001 6.83333 95.5001 5.16667 95.5001 3.5Z"
                    />
                    <path
                      opacity="0.766"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M98.5 11.5C112.724 13.8813 117.558 21.8813 113 35.5C106.705 42.9145 99.2052 44.4145 90.5 40C84.8849 35.0317 83.0516 28.865 85 21.5C86.8407 18.9194 88.6741 18.9194 90.5 21.5C87.3705 30.2368 90.3705 35.9034 99.5 38.5C110.411 35.091 112.744 28.7576 106.5 19.5C102.411 16.0617 98.0773 15.7284 93.5 18.5C91.4294 17.2138 91.0961 15.5471 92.5 13.5C94.6568 12.9495 96.6568 12.2829 98.5 11.5Z"
                    />
                    <path
                      opacity="0.772"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M51.5 127.5C46.8333 127.5 42.1667 127.5 37.5 127.5C37.7564 125.208 37.4231 123.041 36.5 121C34.8988 120.727 33.3988 120.227 32 119.5C31.3937 122.093 29.8937 123.76 27.5 124.5C22.7026 123.451 19.0359 120.951 16.5 117C17.1557 115.091 17.6557 113.258 18 111.5C15.923 108.401 13.2563 108.068 10 110.5C5.31591 107.467 2.98258 103.134 3 97.5C4.41941 96.5399 5.91941 95.7065 7.5 95C6.71645 90.5576 4.04978 88.7242 -0.5 89.5C-0.5 84.8333 -0.5 80.1667 -0.5 75.5C1.41444 74.8153 3.41444 74.3153 5.5 74C6.16667 72.6667 6.83333 71.3333 7.5 70C5.33359 68.9976 3.66692 67.4976 2.5 65.5C3.74824 60.6603 6.24824 56.6603 10 53.5C11.6667 54.5 13.3333 55.5 15 56.5C15.6368 54.6969 16.8035 53.3636 18.5 52.5C16.661 50.4729 16.161 48.1396 17 45.5C20.833 42.6484 24.9996 41.1484 29.5 41C30.8777 44.4295 33.2111 45.2628 36.5 43.5C37.2208 41.314 37.8875 39.1474 38.5 37C42.5 36.3333 46.5 36.3333 50.5 37C51.991 39.0969 52.991 41.4303 53.5 44C54.8333 44.6667 56.1667 44.6667 57.5 44C58.4954 42.1658 59.9954 40.9991 62 40.5C65.3694 41.527 68.5361 43.027 71.5 45C72.3567 45.6891 73.0233 46.5224 73.5 47.5C70.393 50.9834 70.893 53.6501 75 55.5C76.7983 54.4962 78.6316 53.9962 80.5 54C84.3212 57.7795 86.1545 62.2795 86 67.5C82.7124 68.5363 81.8791 70.5363 83.5 73.5C85.4648 74.2922 87.4648 74.9588 89.5 75.5C90.6609 79.7953 90.8275 84.1287 90 88.5C87.3713 88.9278 85.038 89.9278 83 91.5C81.9252 94.5309 82.9252 96.5309 86 97.5C85.8969 101.752 84.5636 105.752 82 109.5C79.2886 110.926 76.7886 110.592 74.5 108.5C73.6364 110.197 72.3031 111.363 70.5 112C72.4545 114.168 73.1212 116.502 72.5 119C69.1766 121.244 65.6766 123.078 62 124.5C59.68 123.561 58.0134 121.895 57 119.5C55.6667 120.167 54.3333 120.833 53 121.5C52.6847 123.586 52.1847 125.586 51.5 127.5ZM41.5 41.5C43.5 41.5 45.5 41.5 47.5 41.5C47.0833 44.0792 47.75 46.2458 49.5 48C52.3926 48.6309 55.2259 49.4642 58 50.5C59.9638 49.536 61.6305 48.2026 63 46.5C64.7259 46.9459 66.2259 47.7792 67.5 49C65.6041 50.8083 65.1041 52.975 66 55.5C68.1667 57 70 58.8333 71.5 61C73.7135 61.6256 75.8801 61.4589 78 60.5C79.442 61.2125 80.2753 62.3791 80.5 64C78.7974 65.3695 77.464 67.0362 76.5 69C77.5785 72.1489 78.5785 75.3155 79.5 78.5C81.396 79.4656 83.396 79.7989 85.5 79.5C85.5 81.5 85.5 83.5 85.5 85.5C83.396 85.2011 81.396 85.5344 79.5 86.5C78.5785 89.6845 77.5785 92.8511 76.5 96C77.464 97.9638 78.7974 99.6305 80.5 101C79.1391 105.095 76.8058 105.595 73.5 102.5C70.8494 104.65 68.3494 106.983 66 109.5C65.1041 112.025 65.6041 114.192 67.5 116C66.3349 117.084 65.0016 117.917 63.5 118.5C61.8262 117.12 60.1596 115.787 58.5 114.5C55.2446 115.641 51.9112 116.474 48.5 117C47.5769 119.041 47.2436 121.208 47.5 123.5C45.5 123.5 43.5 123.5 41.5 123.5C41.7564 121.208 41.4231 119.041 40.5 117C37.2329 116.547 34.0662 115.713 31 114.5C29.0362 115.464 27.3695 116.797 26 118.5C24.3783 118.046 23.2116 117.046 22.5 115.5C23.6405 113.922 24.1405 112.256 24 110.5C21.5 108 19 105.5 16.5 103C14.7445 102.86 13.0778 103.36 11.5 104.5C9.95409 103.788 8.95409 102.622 8.5 101C10.2026 99.6305 11.536 97.9638 12.5 96C11.2867 92.9338 10.4534 89.7671 10 86.5C7.95917 85.5769 5.7925 85.2436 3.5 85.5C3.5 83.5 3.5 81.5 3.5 79.5C5.7925 79.7564 7.95917 79.4231 10 78.5C10.5261 75.0888 11.3594 71.7554 12.5 68.5C11.2134 66.8404 9.88006 65.1738 8.5 63.5C9.08308 61.9984 9.91641 60.6651 11 59.5C12.8083 61.3959 14.975 61.8959 17.5 61C19.6667 58.8333 21.8333 56.6667 24 54.5C24.0038 52.6316 23.5038 50.7983 22.5 49C23.2125 47.558 24.3791 46.7247 26 46.5C27.3695 48.2026 29.0362 49.536 31 50.5C34.0662 49.2867 37.2329 48.4534 40.5 48C41.4231 45.9592 41.7564 43.7925 41.5 41.5Z"
                    />
                    <path
                      opacity="0.76"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M37.4999 55.5C54.1214 53.328 65.2881 59.9946 70.9999 75.5C73.637 92.0666 67.137 103.233 51.4999 109C40.7061 111.18 31.5395 108.347 23.9999 100.5C23.5099 99.2068 23.3432 97.8734 23.4999 96.5C24.8733 96.3433 26.2067 96.51 27.4999 97C36.4763 105.363 46.4763 106.696 57.4999 101C70.8332 88.6667 70.8332 76.3333 57.4999 64C43.3432 56.5655 32.1766 59.7322 23.9999 73.5C22.3254 80.4381 22.1587 87.4381 23.4999 94.5C19.6481 94.5113 17.8148 92.5113 17.9999 88.5C15.7943 72.2316 22.2943 61.2316 37.4999 55.5Z"
                    />
                    <path
                      opacity="0.76"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M127.5 72.5C127.5 74.1667 127.5 75.8333 127.5 77.5C124.754 77.9276 123.087 79.5943 122.5 82.5C123.309 84.0709 123.643 85.7376 123.5 87.5C118.233 86.0944 114.067 87.761 111 92.5C107.933 87.761 103.767 86.0944 98.4999 87.5C98.2864 85.8561 98.6197 84.3561 99.4999 83C98.1386 81.4157 97.4719 79.5824 97.4999 77.5C93.8387 77.6499 92.8387 76.1499 94.4999 73C95.4479 72.5172 96.4479 72.3505 97.4999 72.5C97.4719 70.4176 98.1386 68.5843 99.4999 67C98.6197 65.6439 98.2864 64.1439 98.4999 62.5C100.144 62.2865 101.644 62.6198 103 63.5C104.584 62.1387 106.418 61.472 108.5 61.5C110.073 56.3063 112.073 56.3063 114.5 61.5C116.059 62.0736 117.559 62.7402 119 63.5C120.356 62.6198 121.856 62.2865 123.5 62.5C122.042 65.724 122.375 68.724 124.5 71.5C125.325 72.3857 126.325 72.719 127.5 72.5ZM110.5 65.5C118.85 67.5328 121.35 72.5328 118 80.5C114.077 84.5029 109.91 85.0029 105.5 82C99.7811 74.3202 101.448 68.8202 110.5 65.5ZM109.5 73.5C110.5 73.5 111.5 73.5 112.5 73.5C112.5 74.5 112.5 75.5 112.5 76.5C111.5 76.5 110.5 76.5 109.5 76.5C109.5 75.5 109.5 74.5 109.5 73.5Z"
                    />
                    <path
                      opacity="0.758"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M38.5 63.5C42.5138 63.3345 46.5138 63.5012 50.5 64C52.8839 66.1131 52.3839 67.6131 49 68.5C35.1948 67.3071 29.1948 73.6405 31 87.5C34.7808 95.3046 40.9475 98.138 49.5 96C55.3675 93.4519 58.7008 88.9519 59.5 82.5C57.8122 77.8012 56.1456 73.1345 54.5 68.5C59.3583 68.8542 62.1916 71.5209 63 76.5C65.0245 94.1418 57.1912 102.309 39.5 101C28.1218 96.7514 23.6218 88.5847 26 76.5C28.3792 70.2901 32.5459 65.9567 38.5 63.5Z"
                    />
                    <path
                      opacity="0.75"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M107.5 68.5C117.818 68.3224 120.151 72.489 114.5 81C104.102 81.4715 101.768 77.3048 107.5 68.5ZM109.5 73.5C109.5 74.5 109.5 75.5 109.5 76.5C110.5 76.5 111.5 76.5 112.5 76.5C112.5 75.5 112.5 74.5 112.5 73.5C111.5 73.5 110.5 73.5 109.5 73.5Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_497_1016">
                      <rect width="128" height="128" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div class="card-body">
                <h3 class="card-title" style="font-weight: bold">
                  Manufacturing
                </h3>
                <p class="card-text">
                  We initially make planning on the full project visualization.
                </p>
              </div>
            </div>
          </div>
          <div
            class="col-sm-3 col-12 mb-4"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div class="card pt-5 pb-5 text-center">
              <div>
                <svg
                  width="40"
                  height="40"
                  fill="#D76D26"
                  viewBox="0 0 128 128"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_497_895)">
                    <path
                      opacity="0.796"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.5 -0.5C6.5 -0.5 9.5 -0.5 12.5 -0.5C16.016 3.35401 17.516 8.02067 17 13.5C20.6881 15.9886 22.8548 19.3219 23.5 23.5C19.3219 22.8548 15.9886 20.6881 13.5 17C8.02067 17.516 3.35401 16.016 -0.5 12.5C-0.5 9.5 -0.5 6.5 -0.5 3.5C1.16667 2.5 2.5 1.16667 3.5 -0.5ZM6.5 3.5C13.678 5.51525 14.178 8.51525 8 12.5C2.73333 10.2171 2.23333 7.21714 6.5 3.5Z"
                    />
                    <path
                      opacity="0.797"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M114.5 -0.5C117.5 -0.5 120.5 -0.5 123.5 -0.5C124.5 1.16667 125.833 2.5 127.5 3.5C127.5 6.5 127.5 9.5 127.5 12.5C123.646 16.016 118.979 17.516 113.5 17C111.011 20.6881 107.678 22.8548 103.5 23.5C104.145 19.3219 106.312 15.9886 110 13.5C109.484 8.02067 110.984 3.35401 114.5 -0.5ZM117.5 3.5C124.678 5.51525 125.178 8.51525 119 12.5C113.733 10.2171 113.233 7.21714 117.5 3.5Z"
                    />
                    <path
                      opacity="0.752"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M52.5001 8.50004C54.8569 8.33673 57.1903 8.50339 59.5001 9.00004C61.3938 10.0793 61.7271 11.4126 60.5001 13C58.1903 13.4966 55.8569 13.6633 53.5001 13.5C53.6647 16.5184 53.4981 19.5184 53.0001 22.5C46.6138 29.4269 40.6138 29.0936 35.0001 21.5C30.5001 26 26.0001 30.5 21.5001 35C29.0937 40.6137 29.427 46.6137 22.5001 53C19.5185 53.498 16.5185 53.6646 13.5001 53.5C13.5001 60.1667 13.5001 66.8333 13.5001 73.5C16.5185 73.3354 19.5185 73.502 22.5001 74C29.427 80.3863 29.0937 86.3863 21.5001 92C26.0001 96.5 30.5001 101 35.0001 105.5C40.6138 97.9064 46.6138 97.5731 53.0001 104.5C53.4981 107.482 53.6647 110.482 53.5001 113.5C60.1668 113.5 66.8334 113.5 73.5001 113.5C73.3355 110.482 73.5021 107.482 74.0001 104.5C80.3864 97.5731 86.3864 97.9064 92.0001 105.5C96.5001 101 101 96.5 105.5 92C97.9065 86.3863 97.5732 80.3863 104.5 74C107.482 73.502 110.482 73.3354 113.5 73.5C113.5 66.8333 113.5 60.1667 113.5 53.5C110.482 53.6646 107.482 53.498 104.5 53C97.5732 46.6137 97.9065 40.6137 105.5 35C101 30.5 96.5001 26 92.0001 21.5C86.3864 29.0936 80.3864 29.4269 74.0001 22.5C73.5021 19.5184 73.3355 16.5184 73.5001 13.5C70.8334 13.5 68.1668 13.5 65.5001 13.5C65.2866 11.8561 65.6199 10.3561 66.5001 9.00004C76.0338 6.86423 80.2005 10.6975 79.0001 20.5C80.4412 21.2598 81.9412 21.9264 83.5001 22.5C85.65 20.8509 87.65 19.0176 89.5001 17C91.1668 16.3333 92.8334 16.3333 94.5001 17C99.6668 22.1667 104.833 27.3333 110 32.5C110.667 34.1667 110.667 35.8333 110 37.5C107.982 39.3501 106.149 41.3501 104.5 43.5C105.074 45.0589 105.74 46.5589 106.5 48C109.167 48.3333 111.833 48.6667 114.5 49C116.333 49.5 117.5 50.6667 118 52.5C118.667 59.8333 118.667 67.1667 118 74.5C117.5 76.3333 116.333 77.5 114.5 78C111.574 78.2178 108.74 78.7178 106 79.5C105.598 80.8721 105.098 82.2054 104.5 83.5C106.149 85.6499 107.982 87.6499 110 89.5C110.667 91.1667 110.667 92.8333 110 94.5C104.833 99.6667 99.6668 104.833 94.5001 110C92.8334 110.667 91.1668 110.667 89.5001 110C87.65 107.982 85.65 106.149 83.5001 104.5C81.9412 105.074 80.4412 105.74 79.0001 106.5C78.6668 109.167 78.3334 111.833 78.0001 114.5C77.5001 116.333 76.3334 117.5 74.5001 118C67.1668 118.667 59.8334 118.667 52.5001 118C50.6668 117.5 49.5001 116.333 49.0001 114.5C48.7823 111.574 48.2823 108.74 47.5001 106C46.128 105.598 44.7947 105.098 43.5001 104.5C41.3502 106.149 39.3502 107.982 37.5001 110C35.8334 110.667 34.1668 110.667 32.5001 110C27.3334 104.833 22.1668 99.6667 17.0001 94.5C16.3334 92.8333 16.3334 91.1667 17.0001 89.5C19.0177 87.6499 20.851 85.6499 22.5001 83.5C21.9265 81.9411 21.2599 80.4411 20.5001 79C9.74726 79.389 5.74726 74.2223 8.50012 63.5C5.74726 52.7777 9.74726 47.611 20.5001 48C21.2599 46.5589 21.9265 45.0589 22.5001 43.5C20.851 41.3501 19.0177 39.3501 17.0001 37.5C16.3334 35.8333 16.3334 34.1667 17.0001 32.5C22.1668 27.3333 27.3334 22.1667 32.5001 17C34.1668 16.3333 35.8334 16.3333 37.5001 17C39.3502 19.0176 41.3502 20.8509 43.5001 22.5C44.7947 21.9017 46.128 21.4017 47.5001 21C48.2823 18.2595 48.7823 15.4262 49.0001 12.5C49.6898 10.6498 50.8565 9.31647 52.5001 8.50004ZM59.5001 56.5C66.081 58.6089 66.081 60.2756 59.5001 61.5C59.5001 59.8333 59.5001 58.1667 59.5001 56.5ZM75.5001 56.5C77.9031 56.695 79.5697 57.8616 80.5001 60C79.3811 61.876 77.7145 62.7093 75.5001 62.5C75.5001 60.5 75.5001 58.5 75.5001 56.5Z"
                    />
                    <path
                      opacity="0.735"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M57.5001 32.5C85.1658 32.5113 96.9991 46.1779 93.0001 73.5C91.8 78.5918 89.1333 82.5918 85.0001 85.5C83.2677 85.2664 82.4343 84.2664 82.5001 82.5C93.7285 66.0241 91.3951 51.8574 75.5001 40C57.202 33.7539 44.702 39.5872 38.0001 57.5C36.8334 79.6667 47.3334 90.1667 69.5001 89C72.7201 87.4749 76.0534 86.8083 79.5001 87C80.7271 88.5874 80.3938 89.9207 78.5001 91C61.9215 97.8974 48.0881 94.3974 37.0001 80.5C28.4643 63.3294 31.631 48.8294 46.5001 37C50.1575 35.1776 53.8242 33.6776 57.5001 32.5ZM59.5001 56.5C59.5001 58.1667 59.5001 59.8333 59.5001 61.5C66.081 60.2756 66.081 58.6089 59.5001 56.5ZM75.5001 56.5C75.5001 58.5 75.5001 60.5 75.5001 62.5C77.7145 62.7093 79.3811 61.876 80.5001 60C79.5697 57.8616 77.9031 56.695 75.5001 56.5Z"
                    />
                    <path
                      opacity="0.765"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M41.5 52.5C45.5 52.5 49.5 52.5 53.5 52.5C53.2648 56.8035 50.9315 58.4702 46.5 57.5C46.5 58.8333 46.5 60.1667 46.5 61.5C48.5273 61.3379 50.5273 61.5045 52.5 62C53.8333 63 53.8333 64 52.5 65C50.5273 65.4955 48.5273 65.6621 46.5 65.5C46.5 66.8333 46.5 68.1667 46.5 69.5C50.9315 68.5298 53.2648 70.1965 53.5 74.5C49.5 74.5 45.5 74.5 41.5 74.5C41.5 67.1667 41.5 59.8333 41.5 52.5Z"
                    />
                    <path
                      opacity="0.823"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M55.5 52.5001C59.9113 52.0211 64.078 52.6877 68 54.5001C70.6011 59.5019 69.4344 63.3352 64.5 66.0001C67.4122 67.8579 68.9122 70.3579 69 73.5001C67.9505 74.5172 66.7839 74.6839 65.5 74.0001C63.6667 72.1668 61.8333 70.3334 60 68.5001C59.5045 70.4728 59.3379 72.4728 59.5 74.5001C58.1667 74.5001 56.8333 74.5001 55.5 74.5001C55.5 67.1668 55.5 59.8334 55.5 52.5001ZM59.5 56.5001C59.5 58.1668 59.5 59.8334 59.5 61.5001C66.0809 60.2757 66.0809 58.609 59.5 56.5001Z"
                    />
                    <path
                      opacity="0.77"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M71.5001 52.5C74.85 52.335 78.1833 52.5017 81.5001 53C86.416 56.866 86.7493 61.1993 82.5001 66C80.1903 66.4966 77.8569 66.6633 75.5001 66.5C75.5001 69.1667 75.5001 71.8333 75.5001 74.5C73.8562 74.7135 72.3562 74.3802 71.0001 73.5C70.2056 66.4197 70.3723 59.4197 71.5001 52.5ZM75.5001 56.5C75.5001 58.5 75.5001 60.5 75.5001 62.5C77.7145 62.7093 79.3811 61.876 80.5001 60C79.5697 57.8616 77.9031 56.695 75.5001 56.5Z"
                    />
                    <path
                      opacity="0.797"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.5 127.5C9.5 127.5 6.5 127.5 3.5 127.5C2.5 125.833 1.16667 124.5 -0.5 123.5C-0.5 120.5 -0.5 117.5 -0.5 114.5C3.35401 110.984 8.02067 109.484 13.5 110C15.9886 106.312 19.3219 104.145 23.5 103.5C22.8548 107.678 20.6881 111.011 17 113.5C17.516 118.979 16.016 123.646 12.5 127.5ZM6.5 114.5C13.678 116.515 14.178 119.515 8 123.5C2.73333 121.217 2.23333 118.217 6.5 114.5Z"
                    />
                    <path
                      opacity="0.797"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M127.5 114.5C127.5 117.5 127.5 120.5 127.5 123.5C125.833 124.5 124.5 125.833 123.5 127.5C120.5 127.5 117.5 127.5 114.5 127.5C110.984 123.646 109.484 118.979 110 113.5C106.312 111.011 104.145 107.678 103.5 103.5C107.678 104.145 111.011 106.312 113.5 110C118.979 109.484 123.646 110.984 127.5 114.5ZM117.5 114.5C124.678 116.515 125.178 119.515 119 123.5C113.733 121.217 113.233 118.217 117.5 114.5Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_497_895">
                      <rect width="128" height="128" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div class="card-body">
                <h3 class="card-title" style="font-weight: bold">
                  Commerce ERP
                </h3>
                <p class="card-text">
                  We initially make planning on the full project visualization.
                </p>
              </div>
            </div>
          </div>
          <div
            class="col-sm-3 col-12 mb-4"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div class="card pt-5 pb-5 text-center">
              <div>
                <svg
                  width="40"
                  height="40"
                  fill="#D76D26"
                  viewBox="0 0 128 128"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_497_914)">
                    <path
                      opacity="0.834"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M32.5 -0.5C47.8333 -0.5 63.1667 -0.5 78.5 -0.5C79.1534 0.806777 79.8201 2.14011 80.5 3.5C85.4671 4.32895 90.4671 4.82895 95.5 5C100.071 6.57289 102.904 9.73955 104 14.5C104.667 21.1667 104.667 27.8333 104 34.5C102.301 35.4061 100.467 35.7394 98.5 35.5C98.6663 28.825 98.4996 22.1583 98 15.5C97.2155 13.714 96.0488 12.214 94.5 11C89.798 10.1717 85.1313 10.3384 80.5 11.5C79.9598 12.7481 79.2931 13.9148 78.5 15C63.1667 15.6667 47.8333 15.6667 32.5 15C30.9632 13.8904 30.2965 12.3904 30.5 10.5C25.8215 10.3342 21.1548 10.5008 16.5 11C15 11.8333 13.8333 13 13 14.5C12.3333 46.8333 12.3333 79.1667 13 111.5C13.5 113.333 14.6667 114.5 16.5 115C36.8333 115.667 57.1667 115.667 77.5 115C73.9401 110.381 71.6068 105.214 70.5 99.5C54.8298 99.6666 39.1631 99.4999 23.5 99C22.1667 97.3333 22.1667 95.6667 23.5 94C39.1631 93.5001 54.8298 93.3334 70.5 93.5C70.5 90.5 70.5 87.5 70.5 84.5C55.4963 84.6666 40.4963 84.4999 25.5 84C23.4746 82.806 23.1413 81.306 24.5 79.5C40.156 78.6671 55.8227 78.1671 71.5 78C79.6123 77.2976 86.9457 74.6309 93.5 70C95.1124 69.2797 96.6124 69.4464 98 70.5C98.1691 63.8085 98.6691 57.1419 99.5 50.5C101.061 49.6527 102.561 49.9861 104 51.5C104.169 59.1883 104.669 66.8549 105.5 74.5C110.258 76.2304 115.091 77.5637 120 78.5C120.667 86.1667 120.667 93.8333 120 101.5C118.81 106.213 116.81 110.547 114 114.5C109.568 119.44 104.735 123.773 99.5 127.5C96.8333 127.5 94.1667 127.5 91.5 127.5C89.3533 125.53 87.02 123.697 84.5 122C61.1667 121.667 37.8333 121.333 14.5 121C11.8293 119.75 9.66263 117.917 8.00002 115.5C6.35418 81.5605 6.02085 47.5605 7.00002 13.5C8.07216 9.42668 10.5721 6.59335 14.5 5C19.8229 4.50065 25.1563 4.33398 30.5 4.5C30.3915 2.4862 31.0582 0.819534 32.5 -0.5ZM36.5 4.5C49.1667 4.5 61.8333 4.5 74.5 4.5C74.5 6.16667 74.5 7.83333 74.5 9.5C61.8333 9.5 49.1667 9.5 36.5 9.5C36.5 7.83333 36.5 6.16667 36.5 4.5ZM94.5 76.5C100.476 79.6478 106.809 81.9812 113.5 83.5C117.176 100.812 111.176 113.479 95.5 121.5C79.6293 113.26 73.6293 100.426 77.5 83C83.7818 82.0787 89.4485 79.912 94.5 76.5Z"
                    />
                    <path
                      opacity="0.819"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M32.5 23.5C36.6372 23.1463 40.6372 23.6463 44.5 25C45.4231 27.0408 45.7564 29.2075 45.5 31.5C51.5212 30.358 54.1879 32.858 53.5 39C54.0687 44.9304 51.402 47.7637 45.5 47.5C46.0912 53.0743 43.5912 55.4076 38 54.5C32.6013 55.2672 29.768 52.9339 29.5 47.5C24.0661 47.232 21.7328 44.3987 22.5 39C21.5924 33.4088 23.9257 30.9088 29.5 31.5C29.3939 28.3855 30.3939 25.7188 32.5 23.5ZM35.5 29.5C36.8333 29.5 38.1667 29.5 39.5 29.5C38.5 35.8333 41.1667 38.5 47.5 37.5C47.5 38.8333 47.5 40.1667 47.5 41.5C41.0729 39.7618 38.4062 42.0951 39.5 48.5C38.1667 48.5 36.8333 48.5 35.5 48.5C35.5 46.1667 35.5 43.8333 35.5 41.5C33.1667 41.5 30.8333 41.5 28.5 41.5C28.5 40.1667 28.5 38.8333 28.5 37.5C34.3964 38.1518 36.7297 35.4852 35.5 29.5Z"
                    />
                    <path
                      opacity="0.793"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M61.4999 33.5C70.5061 33.3336 79.5061 33.5002 88.4999 34C89.8332 35.6667 89.8332 37.3333 88.4999 39C79.4999 39.6667 70.4999 39.6667 61.4999 39C60.2474 37.1722 60.2474 35.3388 61.4999 33.5Z"
                    />
                    <path
                      opacity="0.647"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M100.5 39.5C103.966 40.109 104.966 41.9423 103.5 45C101.866 45.4935 100.199 45.6602 98.5 45.5C98.2587 43.1137 98.9254 41.1137 100.5 39.5Z"
                    />
                    <path
                      opacity="0.788"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M61.4999 48.5C70.173 48.3336 78.8396 48.5002 87.4999 49C88.8332 50.6667 88.8332 52.3333 87.4999 54C78.8332 54.6667 70.1666 54.6667 61.4999 54C60.2474 52.1722 60.2474 50.3388 61.4999 48.5Z"
                    />
                    <path
                      opacity="0.817"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M25.5 63.5C45.8443 63.167 66.1776 63.5004 86.5 64.5C87.8333 65.8333 87.8333 67.1667 86.5 68.5C66.1749 69.6664 45.8415 69.8331 25.5 69C22.9824 67.1899 22.9824 65.3566 25.5 63.5Z"
                    />
                    <path
                      opacity="0.763"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M103.5 87.5C107.332 87.1902 108.832 88.8569 108 92.5C103.867 97.6344 99.3671 102.468 94.5 107C93.1667 107.667 91.8333 107.667 90.5 107C88.3333 104.833 86.1667 102.667 84 100.5C82.7458 96.8886 83.9124 95.3886 87.5 96C89.3049 96.972 90.9716 98.1387 92.5 99.5C96.6308 95.8885 100.297 91.8885 103.5 87.5Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_497_914">
                      <rect width="128" height="128" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div class="card-body">
                <h3 class="card-title" style="font-weight: bold">
                  Health Care
                </h3>
                <p class="card-text">
                  We initially make planning on the full project visualization.
                </p>
              </div>
            </div>
          </div>

          <div
            class="col-sm-3 col-12 mb-4"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div class="card pt-5 pb-5 text-center">
              <div>
                <svg
                  width="40"
                  height="40"
                  fill="#D76D26"
                  viewBox="0 0 128 128"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_497_968)">
                    <path
                      opacity="0.803"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M91.5 -0.5C94.8333 -0.5 98.1667 -0.5 101.5 -0.5C102.632 7.32224 105.799 8.32224 111 2.5C114.995 4.46236 117.328 7.46236 118 11.5C116.916 12.6651 116.083 13.9984 115.5 15.5C117.461 17.1128 119.794 18.1128 122.5 18.5C123.657 21.7844 123.824 25.1177 123 28.5C120.434 29.007 118.267 30.1737 116.5 32C120.848 37.9174 119.514 42.4174 112.5 45.5C110.513 43.6726 108.179 42.6726 105.5 42.5C107.271 47.3712 106.605 51.8712 103.5 56C111.159 56.4997 118.826 56.6664 126.5 56.5C126.667 68.8378 126.5 81.1712 126 93.5C123.5 96 121 98.5 118.5 101C113.833 101.333 109.167 101.667 104.5 102C105.451 105.057 105.784 108.223 105.5 111.5C103.304 111.565 101.304 112.232 99.5 113.5C101.211 115.24 102.044 117.24 102 119.5C100.281 121.557 98.2806 123.224 96 124.5C91.7405 121.194 89.5738 122.194 89.5 127.5C86.1667 127.5 82.8333 127.5 79.5 127.5C79.7135 125.856 79.3802 124.356 78.5 123C76.1667 123.333 73.8333 123.667 71.5 124C69.4429 122.281 67.7763 120.281 66.5 118C67.4841 116.343 68.4841 114.677 69.5 113C67.6547 111.872 65.6547 111.372 63.5 111.5C63.5 108.167 63.5 104.833 63.5 101.5C65.6547 101.628 67.6547 101.128 69.5 100C68.4841 98.3232 67.4841 96.6565 66.5 95C67.7763 92.7194 69.4429 90.7194 71.5 89C73.7597 88.9558 75.7597 89.7892 77.5 91.5C77.8333 91 78.1667 90.5 78.5 90C73.171 86.6688 67.5043 83.8355 61.5 81.5C60.5006 96.8189 60.1673 112.152 60.5 127.5C59.1667 127.5 57.8333 127.5 56.5 127.5C56.5 124.833 56.5 122.167 56.5 119.5C51.3909 120.077 47.2242 118.41 44 114.5C43.0023 109.544 42.169 104.544 41.5 99.5C39.8035 98.6364 38.6368 97.3031 38 95.5C37.8184 92.7737 37.3184 90.1071 36.5 87.5C19.247 75.2413 13.9137 59.0746 20.5 39C21.4491 38.3828 22.2825 38.5494 23 39.5C19.7729 55.1026 23.6062 68.6026 34.5 80C36.699 81.6971 39.0324 83.1971 41.5 84.5C42.2 88.041 42.8666 91.541 43.5 95C47.8206 95.499 52.1539 95.6657 56.5 95.5C56.5 69.1667 56.5 42.8333 56.5 16.5C49.6708 17.1654 43.3375 19.3321 37.5 23C33.6396 26.8604 29.8063 30.6937 26 34.5C24.8419 34.0019 24.0085 33.1685 23.5 32C30.7134 19.3239 41.7134 12.4906 56.5 11.5C56.5 8.16667 56.5 4.83333 56.5 1.5C57.8333 1.5 59.1667 1.5 60.5 1.5C60.3335 11.1724 60.5002 20.8391 61 30.5C63.1667 25.5 65.3333 20.5 67.5 15.5C68.1667 15.1667 68.8333 14.8333 69.5 14.5C72.7174 16.0779 76.0507 16.9112 79.5 17C77.1017 15.3644 75.935 13.1977 76 10.5C77.6196 8.75854 79.1196 6.92521 80.5 5C83.4973 4.24456 85.9973 5.07789 88 7.5C90.0285 5.26066 91.1951 2.59399 91.5 -0.5ZM95.5 3.5C96.4959 3.41423 97.3292 3.74756 98 4.5C98.8622 9.91173 102.029 12.0784 107.5 11C108.931 10.5348 110.097 9.70143 111 8.5C111.692 9.02527 112.192 9.69194 112.5 10.5C109.941 13.7603 109.941 17.0937 112.5 20.5C114.173 22.0863 116.173 22.7529 118.5 22.5C118.5 23.5 118.5 24.5 118.5 25.5C115.944 25.1322 113.944 25.9655 112.5 28C112.025 29.7633 111.358 31.43 110.5 33C114.621 39.5453 113.455 40.7119 107 36.5C104.914 39.0397 103.414 38.873 102.5 36C110.37 30.3228 111.37 23.6562 105.5 16C97.1422 11.3543 90.6422 13.1876 86 21.5C83.1945 20.5272 82.6945 18.8605 84.5 16.5C84.1243 14.6171 83.1243 13.1171 81.5 12C81.8333 11.6667 82.1667 11.3333 82.5 11C84.4896 11.1379 86.4896 11.6379 88.5 12.5C90.3254 11.3489 92.3254 10.6822 94.5 10.5C94.9926 8.19438 95.3259 5.86105 95.5 3.5ZM94.5 18.5C101.173 17.3824 104.34 20.0491 104 26.5C102.248 31.3282 100.414 31.4949 98.5 27C96.3496 25.5886 94.0163 24.7553 91.5 24.5C91.615 22.0532 92.615 20.0532 94.5 18.5ZM70.5 20.5C78.3174 23.4408 85.984 26.7742 93.5 30.5C91.3687 34.7308 89.8687 39.0641 89 43.5C93.1194 45.8093 97.2861 47.976 101.5 50C100.373 51.7533 99.373 53.5866 98.5 55.5C95.8929 56.3184 93.2263 56.8184 90.5 57C88 59.5 85.5 62 83 64.5C81.9086 71.0864 81.0753 77.7531 80.5 84.5C73.9248 81.6286 67.4248 78.6286 61 75.5C60.3333 64.5 60.3333 53.5 61 42.5C64.4542 35.2616 67.6209 27.9283 70.5 20.5ZM96.5 35.5C98.1887 37.8828 99.0221 40.5495 99 43.5C97.414 42.624 95.914 41.624 94.5 40.5C95.4565 38.9246 96.1231 37.258 96.5 35.5ZM92.5 61.5C101.173 61.3336 109.84 61.5002 118.5 62C117.833 62.6667 117.167 63.3333 116.5 64C107.833 64.6667 99.1667 64.6667 90.5 64C91.3805 63.2917 92.0472 62.4584 92.5 61.5ZM121.5 65.5C122.657 73.6563 122.823 81.9896 122 90.5C121 91.5 120 92.5 119 93.5C118.503 91.1902 118.337 88.8568 118.5 86.5C117.167 86.5 115.833 86.5 114.5 86.5C114.5 90.1667 114.5 93.8333 114.5 97.5C110.154 97.6657 105.821 97.499 101.5 97C101.937 93.0342 100.103 90.2008 96 88.5C94.3333 89.5 92.6667 90.5 91 91.5C87.0731 84.8807 85.5731 77.5474 86.5 69.5C95.8333 69.5 105.167 69.5 114.5 69.5C114.5 73.1667 114.5 76.8333 114.5 80.5C115.833 80.5 117.167 80.5 118.5 80.5C118.334 76.4862 118.501 72.4862 119 68.5C120.045 67.6266 120.878 66.6266 121.5 65.5ZM95.5 95.5C93.4606 101.593 95.4606 105.426 101.5 107C94.9289 108.474 93.2622 112.141 96.5 118C94.4062 116.906 92.0729 116.572 89.5 117C86.6243 118.142 84.9576 120.308 84.5 123.5C84.0424 120.308 82.3757 118.142 79.5 117C76.9271 116.572 74.5938 116.906 72.5 118C75.6715 112.169 74.0048 108.336 67.5 106.5C70.6918 106.042 72.8585 104.376 74 101.5C74.4277 98.9271 74.0943 96.5938 73 94.5C78.8593 97.7378 82.526 96.0711 84 89.5C85.5737 95.5394 89.4071 97.5394 95.5 95.5ZM47.5 100.5C50.5 100.5 53.5 100.5 56.5 100.5C56.5 105.167 56.5 109.833 56.5 114.5C53.1379 114.93 50.3046 113.93 48 111.5C47.5014 107.848 47.3347 104.182 47.5 100.5ZM82.5 102.5C88.4877 102.664 89.821 105.164 86.5 110C80.4034 110.147 79.0701 107.647 82.5 102.5Z"
                    />
                    <path
                      opacity="0.716"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.5001 10.5C21.3021 11.7786 24.4688 14.1119 27.0001 17.5C27.8334 20.6667 26.6668 21.8333 23.5001 21C21.3334 18.8333 19.1668 16.6667 17.0001 14.5C16.421 13.0715 16.5877 11.7382 17.5001 10.5Z"
                    />
                    <path
                      opacity="0.721"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.500022 50.5C4.83335 50.5 9.16669 50.5 13.5 50.5C13.7444 54.9488 11.5777 56.6154 7.00002 55.5C2.42231 56.6154 0.255647 54.9488 0.500022 50.5Z"
                    />
                    <path
                      opacity="0.696"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M24.5 83.5C26.3841 83.7118 27.7174 84.7118 28.5 86.5C25.8132 90.0205 22.6465 93.0205 19 95.5C17.9783 94.646 17.1449 93.646 16.5 92.5C19.189 89.4802 21.8556 86.4802 24.5 83.5Z"
                    />
                    <path
                      opacity="0.747"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M81.4999 97.5C89.9862 97.1514 93.8196 101.151 92.9999 109.5C90.5975 115.092 86.4308 116.925 80.4999 115C75.8467 112.058 74.3467 107.891 75.9999 102.5C77.4054 100.256 79.2388 98.5897 81.4999 97.5ZM82.4999 102.5C79.07 107.647 80.4033 110.147 86.4999 110C89.8209 105.164 88.4876 102.664 82.4999 102.5Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_497_968">
                      <rect width="128" height="128" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div class="card-body">
                <h3 class="card-title" style="font-weight: bold">
                  Retail Management
                </h3>
                <p class="card-text">
                  We initially make planning on the full project visualization.
                </p>
              </div>
            </div>
          </div>

          <div
            class="col-sm-3 col-12 mb-4"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div class="card pt-5 pb-5 text-center">
              <div>
                <svg
                  width="40"
                  height="40"
                  fill="#D76D26"
                  viewBox="0 0 128 128"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_497_1031)">
                    <path
                      opacity="0.832"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M30.5 -0.5C35.5 -0.5 40.5 -0.5 45.5 -0.5C45.5 0.833333 45.5 2.16667 45.5 3.5C41.2325 3.20299 37.0659 3.53632 33 4.5C32.5003 12.4931 32.3336 20.4931 32.5 28.5C53.1667 28.5 73.8333 28.5 94.5 28.5C94.8158 20.2476 94.4825 12.081 93.5 4C78.5037 3.50008 63.5037 3.33342 48.5 3.5C48.5 2.16667 48.5 0.833333 48.5 -0.5C64.5 -0.5 80.5 -0.5 96.5 -0.5C97.9307 1.18867 98.7641 3.18867 99 5.5C99.4997 13.1594 99.6664 20.8261 99.5 28.5C108.173 28.3336 116.84 28.5002 125.5 29C126.044 29.7172 126.711 30.2172 127.5 30.5C127.5 39.1667 127.5 47.8333 127.5 56.5C126.571 57.9361 125.405 59.2695 124 60.5C123.333 78.5 123.333 96.5 124 114.5C125.113 115.305 126.279 115.972 127.5 116.5C127.5 119.833 127.5 123.167 127.5 126.5C126.833 126.5 126.5 126.833 126.5 127.5C92.1667 127.5 57.8333 127.5 23.5 127.5C23.5 126.167 23.5 124.833 23.5 123.5C56.8333 123.5 90.1667 123.5 123.5 123.5C123.5 122.167 123.5 120.833 123.5 119.5C83.5 119.5 43.5 119.5 3.5 119.5C3.5 120.833 3.5 122.167 3.5 123.5C8.84372 123.334 14.1771 123.501 19.5 124C20.3366 125.011 20.67 126.178 20.5 127.5C13.8333 127.5 7.16667 127.5 0.5 127.5C0.5 126.833 0.166667 126.5 -0.5 126.5C-0.5 123.167 -0.5 119.833 -0.5 116.5C0.72065 115.972 1.88732 115.305 3 114.5C3.66667 96.5 3.66667 78.5 3 60.5C1.59524 59.2695 0.428572 57.9361 -0.5 56.5C-0.5 47.8333 -0.5 39.1667 -0.5 30.5C0.28913 30.2172 0.955796 29.7172 1.5 29C10.1603 28.5002 18.8269 28.3336 27.5 28.5C27.3336 20.8261 27.5003 13.1594 28 5.5C28.2359 3.18867 29.0693 1.18867 30.5 -0.5ZM41.5 12.5C56.1667 12.5 70.8333 12.5 85.5 12.5C85.5 14.8333 85.5 17.1667 85.5 19.5C70.8333 19.5 56.1667 19.5 41.5 19.5C41.5 17.1667 41.5 14.8333 41.5 12.5ZM4.5 32.5C9.5 32.5 14.5 32.5 19.5 32.5C19.5 37.8333 19.5 43.1667 19.5 48.5C14.1667 48.5 8.83333 48.5 3.5 48.5C3.21754 43.0735 3.55087 37.7401 4.5 32.5ZM24.5 32.5C29.8333 32.5 35.1667 32.5 40.5 32.5C40.5 37.8333 40.5 43.1667 40.5 48.5C35.1667 48.5 29.8333 48.5 24.5 48.5C24.5 43.1667 24.5 37.8333 24.5 32.5ZM45.5 32.5C50.8333 32.5 56.1667 32.5 61.5 32.5C61.5 37.8333 61.5 43.1667 61.5 48.5C56.1667 48.5 50.8333 48.5 45.5 48.5C45.5 43.1667 45.5 37.8333 45.5 32.5ZM65.5 32.5C70.8333 32.5 76.1667 32.5 81.5 32.5C81.5 37.8333 81.5 43.1667 81.5 48.5C76.1667 48.5 70.8333 48.5 65.5 48.5C65.5 43.1667 65.5 37.8333 65.5 32.5ZM86.5 32.5C91.8333 32.5 97.1667 32.5 102.5 32.5C102.5 37.8333 102.5 43.1667 102.5 48.5C97.1667 48.5 91.8333 48.5 86.5 48.5C86.5 43.1667 86.5 37.8333 86.5 32.5ZM107.5 32.5C112.511 32.3341 117.511 32.5007 122.5 33C123.471 38.0717 123.805 43.2384 123.5 48.5C118.167 48.5 112.833 48.5 107.5 48.5C107.5 43.1667 107.5 37.8333 107.5 32.5ZM4.5 53.5C9.51108 53.3341 14.5111 53.5007 19.5 54C14.1608 61.1158 9.16083 60.9492 4.5 53.5ZM25.5 53.5C30.2137 53.1734 34.8804 53.5067 39.5 54.5C34.1982 61.4853 29.5316 61.152 25.5 53.5ZM45.5 54.5C50.3158 53.3503 55.3158 53.1837 60.5 54C58.8421 56.9187 56.3421 58.7521 53 59.5C50.095 58.4261 47.595 56.7594 45.5 54.5ZM66.5 54.5C71.3158 53.3503 76.3158 53.1837 81.5 54C76.5712 61.1539 71.5712 61.3205 66.5 54.5ZM87.5 53.5C92.2137 53.1734 96.8804 53.5067 101.5 54.5C98.6999 58.8242 95.0333 59.9908 90.5 58C88.8588 56.871 87.8588 55.371 87.5 53.5ZM107.5 54.5C112.348 53.1863 117.348 53.1863 122.5 54.5C120.606 57.0334 118.106 58.7001 115 59.5C112.095 58.4261 109.595 56.7594 107.5 54.5ZM21.5 58.5C25.8243 63.1822 31.1576 64.6822 37.5 63C39.6238 61.8783 41.4571 60.3783 43 58.5C45.3346 62.0008 48.6679 63.6675 53 63.5C56.9784 63.4276 60.4784 62.0943 63.5 59.5C67.8864 63.1574 72.8864 64.3241 78.5 63C81.0573 62.3147 82.8906 60.8147 84 58.5C88.1396 63.2114 93.3062 64.7114 99.5 63C101.624 61.8783 103.457 60.3783 105 58.5C108.781 62.9898 113.614 64.6565 119.5 63.5C119.5 80.5 119.5 97.5 119.5 114.5C118.167 114.5 116.833 114.5 115.5 114.5C115.667 100.163 115.5 85.8295 115 71.5C114.5 71 114 70.5 113.5 70C103.5 69.3333 93.5 69.3333 83.5 70C82.8742 70.7504 82.3742 71.5838 82 72.5C81.5001 86.496 81.3334 100.496 81.5 114.5C56.8333 114.5 32.1667 114.5 7.5 114.5C7.5 97.5 7.5 80.5 7.5 63.5C13.3535 64.695 18.0202 63.0284 21.5 58.5ZM16.5 74.5C34.1667 74.5 51.8333 74.5 69.5 74.5C69.5 82.5 69.5 90.5 69.5 98.5C51.8333 98.5 34.1667 98.5 16.5 98.5C16.5 90.5 16.5 82.5 16.5 74.5ZM86.5 74.5C94.5 74.5 102.5 74.5 110.5 74.5C110.5 87.8333 110.5 101.167 110.5 114.5C102.5 114.5 94.5 114.5 86.5 114.5C86.5 101.167 86.5 87.8333 86.5 74.5ZM16.5 103.5C34.1667 103.5 51.8333 103.5 69.5 103.5C69.5 104.5 69.5 105.5 69.5 106.5C51.8333 106.5 34.1667 106.5 16.5 106.5C16.5 105.5 16.5 104.5 16.5 103.5Z"
                    />
                    <path
                      opacity="0.759"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M38.5 7.49996C55.17 7.33336 71.8367 7.50003 88.5 7.99996C89 8.49996 89.5 8.99996 90 9.49996C90.6667 13.8333 90.6667 18.1667 90 22.5C89.5 23 89 23.5 88.5 24C71.8333 24.6667 55.1667 24.6667 38.5 24C38 23.5 37.5 23 37 22.5C35.9548 17.2145 36.4548 12.2145 38.5 7.49996ZM41.5 12.5C41.5 14.8333 41.5 17.1667 41.5 19.5C56.1667 19.5 70.8333 19.5 85.5 19.5C85.5 17.1667 85.5 14.8333 85.5 12.5C70.8333 12.5 56.1667 12.5 41.5 12.5Z"
                    />
                    <path
                      opacity="0.754"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.5 69.5C33.1695 69.3334 52.8362 69.5 72.5 70C73.1258 70.7504 73.6258 71.5838 74 72.5C74.8131 84.8792 74.6464 97.2125 73.5 109.5C72.9747 110.192 72.3081 110.692 71.5 111C52.1667 111.667 32.8333 111.667 13.5 111C13 110.5 12.5 110 12 109.5C11.3333 96.8333 11.3333 84.1667 12 71.5C12.7172 70.9558 13.2172 70.2891 13.5 69.5ZM16.5 74.5C16.5 82.5 16.5 90.5 16.5 98.5C34.1667 98.5 51.8333 98.5 69.5 98.5C69.5 90.5 69.5 82.5 69.5 74.5C51.8333 74.5 34.1667 74.5 16.5 74.5ZM16.5 103.5C16.5 104.5 16.5 105.5 16.5 106.5C34.1667 106.5 51.8333 106.5 69.5 106.5C69.5 105.5 69.5 104.5 69.5 103.5C51.8333 103.5 34.1667 103.5 16.5 103.5Z"
                    />
                    <path
                      opacity="0.734"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M37.5 79.5C40.2436 80.0717 41.0769 81.7383 40 84.5C38.8333 86.8333 37.6667 89.1667 36.5 91.5C35.3112 92.4287 33.9778 92.762 32.5 92.5C32.7732 87.6219 34.4399 83.2886 37.5 79.5Z"
                    />
                    <path
                      opacity="0.689"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M49.5 79.5C52.6802 79.1762 53.8469 80.5096 53 83.5C51.6667 86.1667 50.3333 88.8333 49 91.5C47.6439 92.3802 46.1439 92.7135 44.5 92.5C45.3205 87.8561 46.9872 83.5227 49.5 79.5Z"
                    />
                    <path
                      opacity="0.597"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M103.5 91.5C107.473 92.0755 108.473 94.2421 106.5 98C105.216 98.6838 104.049 98.5171 103 97.5C102.322 95.4024 102.489 93.4024 103.5 91.5Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_497_1031">
                      <rect width="128" height="128" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div class="card-body">
                <h3 class="card-title" style="font-weight: bold">Ecommerce</h3>
                <p class="card-text">
                  We initially make planning on the full project visualization.
                </p>
              </div>
            </div>
          </div>
          <div
            class="col-sm-3 col-12 mb-4"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div class="card pt-5 pb-5 text-center">
              <div>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="#D76D26"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_451_1760)">
                    <path
                      opacity="0.831"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M39.8438 27.0312C39.8438 28.2812 39.8438 29.5312 39.8438 30.7812C39.1838 31.1231 38.5066 31.4356 37.8125 31.7187C38.5938 35.9375 36.875 37.6562 32.6562 36.875C32.4038 37.5275 32.0913 38.1525 31.7188 38.75C30.4688 38.9584 29.2188 38.9584 27.9688 38.75C27.4699 37.7975 26.7928 37.0162 25.9375 36.4062C25.1571 37.0243 24.2717 37.1806 23.2812 36.875C21.4749 35.7734 21.0583 34.3153 22.0312 32.5C21.9577 32.2271 21.8535 31.9665 21.7188 31.7187C19.3297 31.459 16.9338 31.3028 14.5312 31.25C14.1146 30.7291 14.1146 30.2083 14.5312 29.6875C16.1947 29.5314 17.8613 29.4793 19.5312 29.5312C19.1144 27.7573 19.7394 26.6115 21.4062 26.0937C21.6921 25.835 21.9004 25.5225 22.0312 25.1562C21.1038 23.4036 21.5204 21.9973 23.2812 20.9375C23.6277 20.7382 23.9923 20.5819 24.375 20.4687C26.0888 21.5138 27.1826 21.045 27.6562 19.0625C29.0104 18.4375 30.3646 18.4375 31.7188 19.0625C32.0906 19.7238 32.5072 20.3488 32.9688 20.9375C33.6466 21.0716 34.2716 20.9154 34.8438 20.4687C35.1556 17.9774 35.2597 15.4774 35.1562 12.9687C24.0104 12.9687 12.8646 12.9687 1.71875 12.9687C1.66669 18.0739 1.71877 23.1781 1.875 28.2812C2.03125 28.8541 2.39583 29.2187 2.96875 29.375C4.84375 29.4791 6.71875 29.5833 8.59375 29.6875C9.22669 30.0606 9.33084 30.5293 8.90625 31.0937C6.72616 31.4575 4.53866 31.5096 2.34375 31.25C1.14058 30.8271 0.30725 30.0458 -0.15625 28.9062C-0.15625 20.3646 -0.15625 11.8229 -0.15625 3.28121C0.287808 2.2632 1.01697 1.48195 2.03125 0.937461C13.2036 0.629186 24.3494 0.733352 35.4688 1.24996C36.1303 1.79087 36.5991 2.46796 36.875 3.28121C36.9791 9.42705 37.0834 15.5729 37.1875 21.7187C38.1562 22.77 38.2084 23.8637 37.3438 25C37.99 25.8975 38.8234 26.5746 39.8438 27.0312ZM2.65625 2.65621C13.1776 2.60413 23.6984 2.65622 34.2188 2.81246C34.5941 3.0945 34.8547 3.45909 35 3.90621C35.1562 6.29977 35.2081 8.69562 35.1562 11.0937C24.0104 11.0937 12.8646 11.0937 1.71875 11.0937C1.66677 8.69562 1.71885 6.29977 1.875 3.90621C2.08193 3.44249 2.34235 3.02582 2.65625 2.65621ZM7.03125 5.78121C8.15891 6.38246 8.211 7.00746 7.1875 7.65621C6.22228 7.12359 6.17019 6.49859 7.03125 5.78121ZM13.9062 5.78121C15.0339 6.38246 15.086 7.00746 14.0625 7.65621C13.0973 7.12359 13.0452 6.49859 13.9062 5.78121ZM23.2812 5.78121C25.6793 5.72921 28.0752 5.7813 30.4688 5.93746C31.1021 6.37362 31.2063 6.89446 30.7812 7.49996C28.0669 7.75993 25.3586 7.70784 22.6562 7.34371C22.2557 6.5939 22.464 6.07305 23.2812 5.78121ZM28.9062 20.4687C29.4271 20.4687 29.9479 20.4687 30.4688 20.4687C30.3939 21.0835 30.4981 21.6564 30.7812 22.1875C31.7575 22.5979 32.7472 22.9625 33.75 23.2812C34.3466 23.0763 34.9194 22.9201 35.4688 22.8125C35.6772 23.0208 35.8853 23.2291 36.0938 23.4375C35.665 23.8256 35.3525 24.2943 35.1562 24.8437C35.6069 25.6405 35.9712 26.4738 36.25 27.3437C36.6878 27.8725 37.2606 28.0808 37.9688 27.9687C37.9688 28.4896 37.9688 29.0104 37.9688 29.5312C37.2744 29.4306 36.7012 29.6389 36.25 30.1562C36.0566 30.9474 35.7441 31.6765 35.3125 32.3437C35.38 33.1296 35.5884 33.859 35.9375 34.5312C35.7222 34.799 35.4619 35.0071 35.1562 35.1562C34.7269 34.7778 34.2581 34.4653 33.75 34.2187C32.9256 34.7028 32.0403 35.0671 31.0938 35.3125C30.5764 35.7637 30.3681 36.3368 30.4688 37.0312C29.9479 37.0312 29.4271 37.0312 28.9062 37.0312C28.9954 36.4725 28.8912 35.9515 28.5938 35.4687C27.6194 35.1378 26.6819 34.7212 25.7812 34.2187C25.2318 34.415 24.7631 34.7275 24.375 35.1562C24.0557 34.8893 23.7953 34.5768 23.5938 34.2187C24.0125 33.8475 24.2208 33.3787 24.2188 32.8125C23.9001 31.8096 23.5355 30.8201 23.125 29.8437C22.5939 29.5606 22.021 29.4564 21.4062 29.5312C21.4062 29.0104 21.4062 28.4896 21.4062 27.9687C22.021 28.0435 22.5939 27.9394 23.125 27.6562C23.5207 26.7293 23.8853 25.7918 24.2188 24.8437C23.3024 23.9564 23.4066 23.2272 24.5312 22.6562C24.8785 23.0035 25.2952 23.2118 25.7812 23.2812C26.7293 22.9477 27.6668 22.5832 28.5938 22.1875C28.8769 21.6564 28.9811 21.0835 28.9062 20.4687ZM28.9062 25.7812C31.1559 25.6329 32.51 26.6746 32.9688 28.9062C32.6387 30.7465 31.545 31.7881 29.6875 32.0312C26.7892 31.1324 26.0601 29.3616 27.5 26.7187C28.0161 26.4376 28.4849 26.1251 28.9062 25.7812Z"
                    />
                    <path
                      opacity="0.812"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.40624 3.90625C9.07324 4.01906 10.167 5.37322 9.68749 7.96875C8.8933 9.39641 7.6954 9.86516 6.09374 9.375C4.5004 8.4675 4.03165 7.16541 4.68749 5.46875C5.10987 4.76594 5.68277 4.24513 6.40624 3.90625ZM7.03124 5.78125C6.17018 6.49863 6.22227 7.12363 7.18749 7.65625C8.21099 7.0075 8.1589 6.3825 7.03124 5.78125Z"
                    />
                    <path
                      opacity="0.802"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.2813 3.90625C15.9483 4.01906 17.042 5.37322 16.5625 7.96875C15.6573 9.42341 14.3552 9.89216 12.6563 9.375C10.4663 7.25581 10.6746 5.43288 13.2813 3.90625ZM13.9063 5.78125C13.0452 6.49863 13.0973 7.12363 14.0625 7.65625C15.086 7.0075 15.0339 6.3825 13.9063 5.78125Z"
                    />
                    <path
                      opacity="0.826"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22.6562 3.90621C25.7022 3.77484 28.7231 3.93109 31.7187 4.37496C32.8991 5.2983 33.2634 6.49621 32.8125 7.96871C32.5522 8.6458 32.0834 9.11455 31.4062 9.37496C28.2812 9.5833 25.1562 9.5833 22.0312 9.37496C20.4867 8.2919 20.1222 6.88565 20.9375 5.15621C21.4062 4.54099 21.9791 4.12434 22.6562 3.90621ZM23.2812 5.78121C22.464 6.07305 22.2557 6.5939 22.6562 7.34371C25.3586 7.70784 28.0669 7.75993 30.7812 7.49996C31.2063 6.89446 31.1021 6.37362 30.4687 5.93746C28.0752 5.7813 25.6793 5.72921 23.2812 5.78121Z"
                    />
                    <path
                      opacity="0.79"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.0312 17.0313C12.7851 16.9513 13.306 17.2638 13.5938 17.9688C13.0217 20.2572 12.4488 22.5488 11.875 24.8438C11.4651 25.518 10.9443 25.6222 10.3125 25.1563C10.3904 22.3443 10.9634 19.636 12.0312 17.0313Z"
                    />
                    <path
                      opacity="0.774"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.71875 17.6562C7.58141 17.4733 8.10225 17.7858 8.28125 18.5937C7.72772 19.5148 7.10272 20.4002 6.40625 21.25C6.86181 22.0187 7.43472 22.6958 8.125 23.2812C8.46244 24.1366 8.202 24.6574 7.34375 24.8437C6.64759 24.6192 6.07469 24.2025 5.625 23.5937C5.01297 22.8822 4.54422 22.101 4.21875 21.25C4.93278 19.9814 5.76609 18.7835 6.71875 17.6562Z"
                    />
                    <path
                      opacity="0.769"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.4688 17.6562C17.363 18.1434 18.613 19.3414 19.2188 21.25C18.6808 22.882 17.6391 24.0799 16.0938 24.8438C15.2355 24.6574 14.9751 24.1366 15.3125 23.2812C16.007 22.6923 16.5799 22.0152 17.0313 21.25C16.5799 20.4848 16.007 19.8077 15.3125 19.2188C15.1126 18.6672 15.1647 18.1463 15.4688 17.6562Z"
                    />
                    <path
                      opacity="0.808"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M28.2812 23.9063C33.17 23.74 35.2012 26.0317 34.375 30.7813C32.8812 33.4878 30.6417 34.3734 27.6562 33.4375C24.5871 31.2875 24.0663 28.6313 26.0937 25.4688C26.7888 24.8644 27.518 24.3436 28.2812 23.9063ZM28.9062 25.7813C28.4849 26.1252 28.0161 26.4377 27.5 26.7188C26.0601 29.3616 26.7892 31.1324 29.6875 32.0313C31.545 31.7881 32.6387 30.7466 32.9687 28.9063C32.51 26.6746 31.1559 25.6329 28.9062 25.7813Z"
                    />
                    <path
                      opacity="0.657"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.0938 29.5312C12.3391 29.5717 12.7557 30.1446 12.3438 31.25C10.8526 31.5031 10.4359 30.9303 11.0938 29.5312Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_451_1760">
                      <rect width="40" height="40" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div class="card-body">
                <h3 class="card-title" style="font-weight: bold">
                  Marketing Solutions
                </h3>
                <p class="card-text">
                  We initially make planning on the full project visualization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Services -->

    <!-- ======= partners Section ======= -->
    <div class="text-center m-5" id="partners-section">
      <h1 style="font-weight: bold">
        <span style="color: #df8317">{{ $t('Our') }}</span>

        {{ $t('partners') }}
      </h1>
      <p style="color: #696984">{{ $t('partner') }}</p>
      <ImageSlider class="mt-5" />
      <ImageSlider class="mt-5" />
    </div>
    <!-- End partners -->

    <!-- ======= TheFooter Section ======= -->
    <div class="TheFooter" id="hero" :dir="isRTL ? 'rtl' : 'ltr'">
      <svg
        class="hero-waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28 "
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g class="wave1">
          <use
            xlink:href="#wave-path"
            x="50"
            y="3"
            fill="rgba(255,255,255, .1)"
          />
        </g>
        <g class="wave2">
          <use
            xlink:href="#wave-path"
            x="50"
            y="0"
            fill="rgba(255,255,255, .2)"
          />
        </g>
        <g class="wave3">
          <use xlink:href="#wave-path" x="50" y="9" fill="#fff" />
        </g>
      </svg>

      <div class="row mb-5 ml-5 mr-5">
        <div class="col-sm-5 mb-4">
          <router-link to="/ThePage">
            <svg
              width="70"
              height="65"
              viewBox="0 0 70 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="47.7033"
                height="47.3902"
                rx="15"
                transform="matrix(0.763685 -0.645589 0.692168 0.721737 0.412292 30.7967)"
                fill="#D76D26"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M35.3732 34.2255L42.1546 20.4706L44.3438 24.1968L39.8581 34.226L35.3732 34.2255Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M34.5097 31.1252L27.7283 44.8801L25.539 41.1539L30.0248 31.1248L34.5097 31.1252Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M37.7075 29.5973L36.465 32.0614L41.2376 31.9366L41.3907 30.8289L41.9579 29.4485L37.7075 29.5973Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M29.2081 32.9429L28.1599 35.2217L31.8094 36.3964L33.974 32.062L29.2081 32.8617"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M49.5993 32.4951L49.1012 33.3531L45.9462 38.7297V38.7379L42.7912 44.1145L42.2847 44.9807H29.8146L31.3423 42.3741L35.3437 35.5511H39.4037L35.9083 41.5079H40.2588L42.8996 37.0056H42.9079L44.5352 34.2274H21.3371L20.8306 33.3613L20.3242 32.4951L20.8306 31.629L23.9856 26.2609V26.2528L27.1323 20.8757L27.6466 20.0095H40.1177L38.0836 23.4823H38.0753L34.5798 29.4391H30.5198L34.0152 23.4823H29.673L27.0239 27.9846L25.3971 30.7628H48.5869L49.1016 31.629L49.5993 32.4951Z"
                fill="white"
              />
            </svg>
          </router-link>
          <p style="margin: 40px 0">
            {{ $t('headerText') }}
          </p>
          <p style="color: #d76d26; text-align: start">{{ $t('Contact') }}</p>
          <a href=""
            ><svg
              style="
                background-color: #d76d26;
                border-radius: 50%;
                padding: 8px;
                margin: 2px;
              "
              width="29"
              height="29"
              viewBox="0 0 9 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.56003 9.36983V15.6494H2.52304V9.36983H0V6.8236H2.52304V5.89719C2.52304 2.45785 4.03569 0.649414 7.23621 0.649414C8.21739 0.649414 8.46269 0.799192 9 0.921234V3.43972C8.39844 3.33987 8.22907 3.2844 7.60415 3.2844C6.86243 3.2844 6.46528 3.4841 6.10318 3.87796C5.74108 4.27183 5.56003 4.95415 5.56003 5.93048V6.82915H9L8.07722 9.37538H5.56003V9.36983Z"
                fill="#ffff"
              />
            </svg>
          </a>
          <a href="">
            <svg
              style="
                background-color: #d76d26;
                border-radius: 50%;
                padding: 8px;
                margin: 2px;
              "
              width="29"
              height="29"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0959 15.1728H2.42753C1.09149 15.1728 0 14.0813 0 12.7453V3.07694C0 1.74091 1.09149 0.649414 2.42753 0.649414H12.0959C13.4319 0.649414 14.5234 1.74091 14.5234 3.07694V12.7453C14.5234 14.0873 13.4379 15.1728 12.0959 15.1728Z"
                fill="#ffff"
              />
              <path
                d="M7.26488 11.6421C6.26882 11.6421 5.3324 11.2544 4.6286 10.5506C3.9248 9.84678 3.53711 8.91036 3.53711 7.9143C3.53711 6.91824 3.9248 5.98182 4.6286 5.27802C5.3324 4.57421 6.26882 4.18652 7.26488 4.18652C8.26094 4.18652 9.19736 4.57421 9.90117 5.27802C10.605 5.98182 10.9927 6.91824 10.9927 7.9143C10.9927 8.91036 10.605 9.84678 9.90117 10.5506C9.1914 11.2544 8.26094 11.6421 7.26488 11.6421ZM7.26488 4.97979C5.64852 4.97979 4.33038 6.29197 4.33038 7.9143C4.33038 9.53066 5.64256 10.8488 7.26488 10.8488C8.88125 10.8488 10.1994 9.53662 10.1994 7.9143C10.1934 6.29793 8.88125 4.97979 7.26488 4.97979Z"
                fill="#D76D26"
              />
              <path
                d="M11.7187 4.06358C12.114 4.06358 12.4344 3.74313 12.4344 3.34783C12.4344 2.95253 12.114 2.63208 11.7187 2.63208C11.3234 2.63208 11.0029 2.95253 11.0029 3.34783C11.0029 3.74313 11.3234 4.06358 11.7187 4.06358Z"
                fill="#D76D26"
              />
            </svg>
          </a>
          <a href="">
            <svg
              style="
                background-color: #d76d26;
                border-radius: 50%;
                padding: 8px;
                margin: 2px;
              "
              width="29"
              height="29"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 13.4995C1.82992 13.6036 3.4301 13.1711 4.99068 12.0257C3.41426 11.7534 2.32107 11.0245 1.72694 9.51867C2.1864 9.4546 2.59041 9.57474 3.06571 9.38251C1.51305 8.69368 0.506992 7.66043 0.467383 5.87427C0.95853 5.91432 1.33085 6.24272 1.91706 6.19466C0.491152 4.78496 0.055452 3.2471 0.950606 1.38085C2.43989 3.11094 4.18267 4.28836 6.31361 4.84103C6.43244 4.87307 6.54334 4.9051 6.66216 4.92913C7.20876 5.05729 7.85834 5.32962 8.19106 5.28957C8.76142 5.21748 8.19106 4.55268 8.33365 3.68764C8.78519 0.996387 11.7162 -0.229092 13.8868 1.34881C14.5205 1.81337 15.0196 1.80536 15.6454 1.52503C15.9702 1.38085 16.3029 1.23668 16.6911 1.06847C16.6039 1.8374 16.0177 2.26191 15.5503 2.8306C16.0811 2.95075 16.5089 2.79856 17 2.63837C16.8336 3.19104 16.4217 3.50341 16.0494 3.80778C15.6612 4.12016 15.5107 4.44855 15.4949 4.96117C15.2572 12.7225 6.53542 18.7218 0.570369 13.948C-0.00791593 13.4835 0.55452 13.948 0 13.4995Z"
                fill="#ffff"
              />
            </svg>
          </a>
          <a href="">
            <svg
              style="
                background-color: #d76d26;
                border-radius: 50%;
                padding: 8px;
                margin: 2px;
              "
              width="29"
              height="29"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.47611 5.71094H0.259766V15.9677H3.47611V5.71094Z"
                fill="#ffff"
              />
              <path
                d="M12.1758 5.48888C12.0572 5.47406 11.9312 5.46665 11.8052 5.45924C10.0044 5.38513 8.98906 6.4523 8.63334 6.91178C8.537 7.03777 8.49253 7.11188 8.49253 7.11188V5.74085H5.41699V15.9976H8.49253H8.63334C8.63334 14.9526 8.63334 13.9151 8.63334 12.8702C8.63334 12.3069 8.63334 11.7437 8.63334 11.1805C8.63334 10.4838 8.58146 9.74276 8.92978 9.10542C9.22621 8.57183 9.7598 8.30504 10.3601 8.30504C12.1387 8.30504 12.1758 9.91321 12.1758 10.0614C12.1758 10.0688 12.1758 10.0762 12.1758 10.0762V16.042H15.3921V9.34998C15.3921 7.06 14.2286 5.71121 12.1758 5.48888Z"
                fill="#ffff"
              />
              <path
                d="M1.86755 4.38452C2.89897 4.38452 3.73511 3.54839 3.73511 2.51697C3.73511 1.48555 2.89897 0.649414 1.86755 0.649414C0.836129 0.649414 0 1.48555 0 2.51697C0 3.54839 0.836129 4.38452 1.86755 4.38452Z"
                fill="#ffff"
              />
            </svg>
          </a>
        </div>
        <div class="col-sm-2 mb-4">
          <h1>{{ $t('pages') }}</h1>
          <ul class="m-0 p-0">
            <router-link to="/ThePage" active-class="active-link">
              <li>{{ $t('home') }}</li>
            </router-link>
            <router-link
              :to="{ path: '/ThePage', hash: '#sucess-section' }"
              active-class="active-link"
            >
              <li>{{ $t('about_us') }}</li>
            </router-link>
            <router-link
              :to="{ path: '/ThePage', hash: '#servies-section' }"
              active-class="active-link"
            >
              <li>{{ $t('services') }}</li>
            </router-link>
            <router-link
              :to="{ path: '/ThePage', hash: '#Process-section' }"
              active-class="active-link"
            >
              <li>{{ $t('projects') }}</li>
            </router-link>
          </ul>
        </div>
        <div class="col-sm-2 mb-4">
          <h1>{{ $t('others') }}</h1>
          <ul class="m-0 p-0">
            <router-link
              :to="{ path: '/ThePage', hash: '#system-section' }"
              active-class="active-link"
            >
              <li>{{ $t('process') }}</li>
            </router-link>
            <router-link
              :to="{ path: '/ThePage', hash: '#partners-section' }"
              active-class="active-link"
            >
              <li>{{ $t('partners') }}</li>
            </router-link>
            <router-link
              :to="{ path: '/ThePage', hash: '#members-section' }"
              active-class="active-link"
            >
              <li>{{ $t('members') }}</li>
            </router-link>
            <router-link
              :to="{ path: '/ThePage', hash: '#feedback-section' }"
              active-class="active-link"
            >
              <li>{{ $t('feedback') }}</li>
            </router-link>
          </ul>
        </div>
        <div class="col-sm-3 mb-4">
          <h1>{{ $t('contact_info') }}</h1>
          <ul class="m-0 p-0">
            <li>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 21H7C4 21 2 19.5 2 16V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9V16C22 19.5 20 21 17 21Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17 9.5L13.87 12C12.84 12.82 11.15 12.82 10.12 12L7 9.5"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              hashstudioinc@gmail.com
            </li>
            <li>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.97 18.83C21.97 19.19 21.89 19.56 21.72 19.92C21.55 20.28 21.33 20.62 21.04 20.94C20.55 21.48 20.01 21.87 19.4 22.12C18.8 22.37 18.15 22.5 17.45 22.5C16.43 22.5 15.34 22.26 14.19 21.77C13.04 21.28 11.89 20.62 10.75 19.79C9.6 18.95 8.51 18.02 7.47 16.99C6.44 15.95 5.51 14.86 4.68 13.72C3.86 12.58 3.2 11.44 2.72 10.31C2.24 9.17 2 8.08 2 7.04C2 6.36 2.12 5.71 2.36 5.11C2.6 4.5 2.98 3.94 3.51 3.44C4.15 2.81 4.85 2.5 5.59 2.5C5.87 2.5 6.15 2.56 6.4 2.68C6.66 2.8 6.89 2.98 7.07 3.24L9.39 6.51C9.57 6.76 9.7 6.99 9.79 7.21C9.88 7.42 9.93 7.63 9.93 7.82C9.93 8.06 9.86 8.3 9.72 8.53C9.59 8.76 9.4 9 9.16 9.24L8.4 10.03C8.29 10.14 8.24 10.27 8.24 10.43C8.24 10.51 8.25 10.58 8.27 10.66C8.3 10.74 8.33 10.8 8.35 10.86C8.53 11.19 8.84 11.62 9.28 12.14C9.73 12.66 10.21 13.19 10.73 13.72C11.27 14.25 11.79 14.74 12.32 15.19C12.84 15.63 13.27 15.93 13.61 16.11C13.66 16.13 13.72 16.16 13.79 16.19C13.87 16.22 13.95 16.23 14.04 16.23C14.21 16.23 14.34 16.17 14.45 16.06L15.21 15.31C15.46 15.06 15.7 14.87 15.93 14.75C16.16 14.61 16.39 14.54 16.64 14.54C16.83 14.54 17.03 14.58 17.25 14.67C17.47 14.76 17.7 14.89 17.95 15.06L21.26 17.41C21.52 17.59 21.7 17.8 21.81 18.05C21.91 18.3 21.97 18.55 21.97 18.83Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                />
              </svg>

              +201003022897
            </li>
            <li>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9999 13.9299C13.723 13.9299 15.1199 12.5331 15.1199 10.8099C15.1199 9.08681 13.723 7.68994 11.9999 7.68994C10.2768 7.68994 8.87988 9.08681 8.87988 10.8099C8.87988 12.5331 10.2768 13.9299 11.9999 13.9299Z"
                  stroke="white"
                  stroke-width="1.5"
                />
                <path
                  d="M3.61971 8.99C5.58971 0.330002 18.4197 0.340003 20.3797 9C21.5297 14.08 18.3697 18.38 15.5997 21.04C13.5897 22.98 10.4097 22.98 8.38971 21.04C5.62971 18.38 2.46971 14.07 3.61971 8.99Z"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>

              Cairo-Egypt
            </li>
            <li>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9999 13.9299C13.723 13.9299 15.1199 12.5331 15.1199 10.8099C15.1199 9.08681 13.723 7.68994 11.9999 7.68994C10.2768 7.68994 8.87988 9.08681 8.87988 10.8099C8.87988 12.5331 10.2768 13.9299 11.9999 13.9299Z"
                  stroke="white"
                  stroke-width="1.5"
                />
                <path
                  d="M3.61971 8.99C5.58971 0.330002 18.4197 0.340003 20.3797 9C21.5297 14.08 18.3697 18.38 15.5997 21.04C13.5897 22.98 10.4097 22.98 8.38971 21.04C5.62971 18.38 2.46971 14.07 3.61971 8.99Z"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>
              Riyadh-KSA
            </li>
          </ul>
        </div>
      </div>
      <hr style="color: #ffffff" />

      <p style="text-align: center" class="TheFooterr mt-4">
        {{ $t('footer') }}
      </p>
    </div>
    <!-- End TheFooter -->
  </div>
</template>

<script>
import ScrollReveal from 'scrollreveal'
import Swiper from 'swiper'
import 'swiper/swiper-bundle.min.css'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted, nextTick } from 'vue'
import ImageSlider from '../common/ImageSlider.vue'

export default {
  name: 'layoutPage',
  components: { ImageSlider },

  data() {
    return {
      imageUrl1: require('@/assets/Image.png'),
      imageUrl2: require('@/assets/Group 1261152792.png'),
      isScrolled: false,
      mobileMenu: false,
      currentLanguage: 'English',
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)

    const scrollReveal = ScrollReveal({
      reset: true,
      mobile: true,
      easing: 'ease-in-out',
      duration: 800,
      delay: 0,
    })
    scrollReveal.reveal('.hidden-section', {
      origin: 'bottom',
      distance: '50%',
      duration: 1000,
      opacity: 0,
    })
    AOS.init({
      once: true,
      duration: 800,
    })
    this.$nextTick(() => {
      AOS.refresh()
    })
    new Swiper('.swiper-container', {})

    scrollReveal.reveal('.hidden-section', {
      origin: 'bottom',
      distance: '50%',
      duration: 1000,
      opacity: 0,
    })
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 100
    },
    toggleMenu() {
      this.mobileMenu = !this.mobileMenu
    },
    toggleLanguage() {
      this.$i18n.locale = this.$i18n.locale === 'en' ? 'ar' : 'en'
      this.currentLanguage =
        this.currentLanguage === 'English' ? 'العربية' : 'English'
    },
  },
  computed: {
    isContactPage() {
      return this.$route.name === 'Contact'
    },
    isRTL() {
      return this.$i18n.locale === 'ar'
    },
  },
}
</script>

<style scoped>
/*--------------------------------------------------------------
# nav Section
--------------------------------------------------------------*/
nav {
  font-family: 'Cairo', sans-serif;
}
.navbarr {
  transition: background-color 0.3s ease;
}

.default-page {
  padding: 0 !important;
  background-color: white;
  color: black !important;
}
.contact-page {
  background-color: #fff;
  color: black !important;
}
.contact-page a {
  color: black !important;
}
.navbarr {
  position: fixed;
  z-index: 1000;
  background-color: transparent;
  transition: background-color 0.3s ease;
}

.navbarr.scrolled {
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
}
.navbarr a {
  color: white !important;
  transition: color 0.3s ease;
}
.navbarr.scrolled a {
  color: black !important;
}

a:hover {
  text-decoration: none;
}
a {
  text-decoration: none;
  color: white;
}
.navbarr ul,
.navbarr li {
  margin: 0;
  padding: 0;
  padding-inline-start: 0;
}
a :hover {
  text-decoration: none;
}
.header-area {
  padding: 10px 60px 10px 100px;
}
.logo {
  font-size: 30px;
  font-weight: 600;
}
.logo {
  transition: all 0.3s ease;
}
.navigation {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.menu-area {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-preferred-size: auto;
  flex-basis: auto;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  position: relative;
}
.marginauto {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: end;
}
.menu-area ul {
  width: 100%;
}
.menu-area button {
  background-color: #d76d26;
  border-radius: 10px;
  border: none;
  transition: padding 0.3s, box-shadow 0.3s, font-size 0.3s;
  color: white;
}
.btn-custom {
  white-space: nowrap;
  padding: 10px 40px;
  font-size: 16px;
  max-width: 100%;
}

.menu-area li {
  display: inline-block;
  padding: 0 20px;
}
.menu-area li a {
  display: inline-block;
  padding: 10px 5px;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 500;
  color: #000;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.menu-area a {
  font-size: 18px;
}
.subIocn {
  position: relative;
  display: inline-block;
}
.subIocn::before {
  position: absolute;
  display: block;
  content: '';
  left: -12px;
  top: -10px;
  width: 6px;
  height: 6px;
  border: solid #000;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.sub li {
  display: block;
}
.sub li a {
  display: block;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  padding: 8px 15px;
}
.sub li a:hover {
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.sub {
  display: none;
  -webkit-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
  position: absolute;
  top: 100%;
  width: 100%;
  min-width: 10rem;
  max-width: 12rem;
  border-radius: 6px;
  -webkit-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}
.mega {
  display: none;
  -webkit-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
  position: absolute;
  top: 100%;
  width: auto;
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: 90%;
  border-radius: 6px;
  -webkit-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}
.menu-area li:hover .sub {
  display: block;
  -webkit-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}
.menu-area li:hover .mega {
  display: block;
  -webkit-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}
.mega-menu {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 15px;
}
.mega li {
  display: block;
}
.mega-item {
  width: 25%;
}
.mega-item h3 {
  font-size: 18px;
  line-height: 1.3;
  font-weight: 600;
}
.mega-menu li {
  display: block;
}
.mega-menu li a {
  display: inline-block;
  padding: 8px 0;
}
.mobilebtn {
  display: none;
  background-color: rgba(255, 255, 255, 0.472);
}
.navigation button {
  border: none;
}
@media (max-width: 1199.98px) {
  .logo {
    margin-right: -60px;
    width: auto;
    font-size: 20px;
    font-weight: 600;
  }
  .header-area {
    padding: 10px 40px;
  }
  .mobilebtn {
    display: block;
    background-color: rgba(255, 255, 255, 0);
  }

  .menu-area {
    background-color: #fff;
    display: none;
    -webkit-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }
  .menu-area.show button {
    width: 100%;
  }
  .menu-area.show a {
    width: 100%;
    color: #000 !important;
  }
  .menu-area.show {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
    -webkit-box-flex: 100% !important;
    -ms-flex-positive: 100% !important;
    flex-grow: 100% !important;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .marginauto {
    display: block;
  }
  .menu-area li {
    display: block;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    position: relative;
  }
  .sub,
  .mega {
    position: static;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    display: none !important;
  }

  .sub.active {
    display: block !important;
    -webkit-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }
  .mega.active {
    display: block !important;
    -webkit-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }
  .menu-area li a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 10px 0;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 500;
    color: #000;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    position: relative;
    border-top: 1px solid #ccc;
  }
  .menu-area li:first-child a {
    border-top: 1px solid transparent;
  }
  .sub li a {
    padding: 8px 15px !important;
  }
  .mega-menu li a {
    padding: 8px 0 !important;
  }
  .subIocn {
    position: absolute;
    top: 6px;
    right: 4px;
    z-index: 9;
    display: inline-block;
    border: 1px solid #ccc;
    padding: 5px;
    height: 22px;
    width: 22px;
  }
  .subIocn::before {
    left: 0;
    right: 0;
    top: 9px;
    margin: 1px auto;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  .subIocn.active::before {
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    top: 9px;
    -webkit-transform: rotate(225deg);
    -ms-transform: rotate(225deg);
    transform: rotate(225deg);
  }

  .mega-item {
    width: 33.33%;
  }
}
@media (max-width: 991.98px) {
  .header-area {
    padding: 10px 40px;
  }
  .mega-item {
    width: 50%;
  }
  .mega {
    height: 300px;
    overflow-y: scroll;
  }
}
@media (max-width: 767.98px) {
  .header-area {
    padding: 10px 40px;
  }
  .mega-item {
    width: 100%;
  }
}

.logo img {
  max-width: 100%;
  height: auto;
}
.overlay-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 60%;
  height: 80%;
  z-index: -10;
}
.navbarr.scrolled .mobilebtn svg path {
  fill: #d76d26;
}

/*--------------------------------------------------------------
# Hero Section
--------------------------------------------------------------*/
#hero {
  width: 100%;
  overflow: hidden;
  position: relative;
  background-image: url('../../assets/Picture.jpg');
  background-size: cover;
  /* background: linear-gradient(0deg, #D76D26, #D76D26 100%); */
  padding: 0;
  margin: 0;
}
#hero .carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  position: relative;
  height: 70vh;
  padding-top: 60px;
}
#hero h2 {
  color: #fff;
  margin-bottom: 30px;
  font-size: 48px;
  font-weight: 700;
}
#hero p {
  animation-delay: 0.4s;
  margin: 0 auto 30px auto;
  color: #fff;
}
#hero .carousel-control-prev,
#hero .carousel-control-next {
  width: 10%;
}
#hero .carousel-control-next-icon,
#hero .carousel-control-prev-icon {
  background: none;
  font-size: 48px;
  line-height: 1;
  width: auto;
  height: auto;
}
#hero .btn-get-started {
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 12px 32px;
  border-radius: 50px;
  transition: 0.5s;
  line-height: 1;
  margin: 10px;
  color: #fff;
  animation-delay: 0.8s;
  border: 2px solid var(--red);
}
#hero .btn-get-started:hover {
  background: var(--red);
  color: #fff;
  text-decoration: none;
}
@media (min-width: 1024px) {
  #hero .carousel-control-prev,
  #hero .carousel-control-next {
    width: 5%;
  }
}

@media (max-width: 768px) {
  #hero .carousel-container {
    height: 90vh;
  }

  #hero h2 {
    font-size: 28px;
  }
}
.hero-waves {
  display: block;
  width: 100%;
  height: 140px;
  position: relative;
}
.TheFooter {
  text-align: start;
  color: #fff;
}
.TheFooter li {
  padding: 10px 0;
}
.TheFooter h1 {
  font-size: 24px;
  font-weight: bold;
}
.TheFooter .hero-waves {
  display: block;
  width: 100%;
  height: 140px;
  position: relative;
  transform: rotate(180deg); /* لقلب الموجة */
}

.wave1 use {
  animation: move-forever1 10s linear infinite;
  animation-delay: -2s;
}

.wave2 use {
  animation: move-forever2 8s linear infinite;
  animation-delay: -2s;
}

.wave3 use {
  animation: move-forever3 6s linear infinite;
  animation-delay: -2s;
}

@keyframes move-forever1 {
  0% {
    transform: translate(85px, 0%);
  }

  100% {
    transform: translate(-90px, 0%);
  }
}

@keyframes move-forever2 {
  0% {
    transform: translate(-90px, 0%);
  }

  100% {
    transform: translate(85px, 0%);
  }
}

@keyframes move-forever3 {
  0% {
    transform: translate(-90px, 0%);
  }

  100% {
    transform: translate(85px, 0%);
  }
}
li {
  text-decoration: none;
  list-style: none;
}
li:hover {
  color: #d76d26;
}
/*--------------------------------------------------------------
# about Section
--------------------------------------------------------------*/
.about button {
  background-color: #d76d26;
  border-radius: 10px;
  border: none;
  transition: padding 0.3s, box-shadow 0.3s, font-size 0.3s;
  color: white;
  padding: 10px 40px;
}

/*--------------------------------------------------------------
# Choose Section
--------------------------------------------------------------*/
.Choose {
  padding: 60px 0;
  background-image: url('../../assets/Group 1261152795.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.Support {
  background-color: #fff;
  border-radius: 10px;
}
.Services {
  background-image: url('../../assets/Frame\ 2147223740.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.Services button {
  --secondary-color: rgb(255, 255, 255);
  --primary-color: #d76d26;
  --arrow-width: 10px;
  --arrow-stroke: 2px;
  box-sizing: border-box;
  border: 0;
  border-radius: 10px;
  color: var(--secondary-color);
  padding: 1em 1.8em;
  background: var(--primary-color);
  display: flex;
  align-items: center;
  gap: 0.6em;
  font-weight: bold;
}

.Services button .arrow-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.Services button .arrow {
  margin-top: 1px;
  width: var(--arrow-width);
  background: var(--primary-color);
  height: var(--arrow-stroke);
  position: relative;
  transition: 0.2s;
}

.Services button .arrow::before {
  content: '';
  box-sizing: border-box;
  position: absolute;
  border: solid var(--secondary-color);
  border-width: 0 var(--arrow-stroke) var(--arrow-stroke) 0;
  display: inline-block;
  top: -3px;
  right: 3px;
  transition: 0.2s;
  padding: 3px;
  transform: rotate(-45deg);
}

.Services button:hover .arrow {
  background: var(--secondary-color);
}

.Services button:hover .arrow:before {
  right: 0;
}
.Services .card {
  background-image: url('../../assets/cardServices.png');
}
.Services .card:hover {
  background-image: url('../../assets/cardServicess.png');
  color: #fff;
}
.Services .card:hover a {
  color: #fff !important;
}
.Services .card:hover svg {
  fill: #fff !important;
}

.big-dotted-border {
  border: 8px dashed #df8317;
  border-radius: 10px;
  box-sizing: border-box;
}

.big-dotted-border {
  border-style: dashed;
  border-width: 3px;
}
</style>

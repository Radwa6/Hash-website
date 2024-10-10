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
            class="col-6"
            data-aos="fade-up"
            data-aos-duration="2000"
            style="text-align: start"
          >
            <p class="mb-2" style="color: #d76d26">Why Choose Us</p>
            <h5 style="font-weight: bold">Support & Maintenance</h5>
            <img :src="imageUrl2" alt="image" class="img-fluid" />
          </div>

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
        </div>
      </div>
    </div>
    <!-- Choose about -->

    <div class="text-center m-5" id="partners-section">
      <h1 style="font-weight: bold">
        <span style="color: #df8317">{{ $t('Our') }}</span>

        {{ $t('partners') }}
      </h1>
      <p style="color: #696984">{{ $t('partner') }}</p>
      <ImageSlider class="mt-5" />
      <ImageSlider class="mt-5" />
    </div>

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
  margin-bottom: 200px;
  background-image: url('../../assets/Group 1261152795.png');
  background-size: cover; /* تغطي الحاوية بأكملها */
  background-repeat: no-repeat; /* تمنع تكرار الصورة */
}
</style>

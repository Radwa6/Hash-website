<template>
  <div v-if="isLoading" class="spinner-container">
    <div class="loading-container">
      <div class="spinner">
        <svg
          width="58"
          height="57"
          viewBox="0 0 58 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M57.5562 30.0371V30.2537C57.5592 33.2241 57.059 36.1736 56.077 38.977C55.948 39.3503 55.8097 39.7189 55.6577 40.083C54.0032 44.2049 51.3362 47.8431 47.9034 50.6613C44.4706 53.4796 40.3827 55.387 36.0175 56.2071H36.0037C34.7516 56.4408 33.484 56.5809 32.2112 56.6264C31.8655 56.6449 31.5153 56.6494 31.1651 56.6494H6.31308C6.0819 56.6494 5.85299 56.6039 5.6394 56.5155C5.42582 56.427 5.23173 56.2973 5.06827 56.1339C4.9048 55.9704 4.77513 55.7764 4.68668 55.5628C4.59822 55.3492 4.55271 55.1203 4.55273 54.8891V23.1202H25.8841V3.64136H31.1651C31.5153 3.64136 31.8655 3.64596 32.2112 3.66437C35.9204 3.80561 39.5577 4.73064 42.8837 6.3786C42.9206 6.39703 42.9528 6.41545 42.9851 6.42929C47.258 8.57883 50.8695 11.8447 53.4365 15.8807L53.4918 15.9636C53.5241 16.0097 53.5517 16.0558 53.5793 16.1019C53.5836 16.104 53.5871 16.1073 53.5896 16.1114C53.592 16.1155 53.5932 16.1201 53.5932 16.1249C54.6144 17.7685 55.452 19.5194 56.0908 21.3459C56.1046 21.3874 56.1185 21.4243 56.1323 21.4658C57.0775 24.2245 57.5587 27.1209 57.5562 30.0371Z"
            fill="#6B2F85"
          />
          <path
            opacity="0.5"
            d="M55.6577 40.083C54.0033 44.2049 51.3363 47.8431 47.9035 50.6614C44.4707 53.4797 40.3827 55.387 36.0176 56.2071H36.0038C34.7517 56.4408 33.4841 56.5809 32.2112 56.6264C31.8656 56.6449 31.5154 56.6494 31.1652 56.6494H25.7598V40.083H55.6577Z"
            fill="#A45591"
          />
          <path
            d="M57.5563 29.2352V30.2536C57.5593 33.2241 57.0592 36.1736 56.0771 38.977C55.9481 39.3502 55.8098 39.7189 55.6578 40.0829H25.7598V23.1201H25.8842V21.3459H56.1923C57.0941 23.8785 57.5555 26.5468 57.5563 29.2352Z"
            fill="#924C87"
          />
          <path
            opacity="0.5"
            d="M56.1928 21.346H25.8848V3.64136H31.1658C31.516 3.64136 31.8662 3.64596 32.2118 3.66437C35.9211 3.80561 39.5584 4.73064 42.8844 6.3786C42.9213 6.39703 42.9535 6.41545 42.9858 6.42929C44.8559 7.45831 46.6175 8.67332 48.2437 10.0559C50.2387 11.7451 51.9869 13.7058 53.4372 15.8807L53.4925 15.9636C53.5247 16.0097 53.5524 16.0558 53.58 16.1019C53.5843 16.104 53.5878 16.1073 53.5902 16.1114C53.5927 16.1155 53.5939 16.1201 53.5939 16.1249C54.662 17.7573 55.5343 19.5097 56.1928 21.346Z"
            fill="#A45591"
          />
          <path d="M19.139 0V17.549H0V10.696H11.358V0H19.139Z" fill="#4B4B50" />
        </svg>
      </div>
      <div class="loader"></div>
    </div>
  </div>
  <div v-else :dir="isRTL ? 'rtl' : 'ltr'" style="text-align: start">
    <div
      class="allProjects text-center"
      :class="['menu-area', { allProjects: isProjectPage }]"
    >
      <h1 class="pt-5 pb-5" style="color: #fff">{{ $t('Projects') }}</h1>
    </div>
    <div class="Projects p-5">
      <div class="Projects">
        <div class="container">
          <div class="row mt-5 mb-5">
            <div
              class="col-sm-4 col-6 mt-2 mb-2"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <router-link to="/" style="text-decoration: none">
                <div
                  class="Project1 d-flex justify-content-center text-center m-1 p-3 pt-5 pb-5"
                >
                  <div class="overlay"></div>

                  <div class="textBox">
                    <h2>{{ $t('Projectname1') }}</h2>
                    <p>
                      <svg
                        width="46"
                        height="43"
                        viewBox="0 0 46 43"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_d_214_297)">
                          <rect
                            x="6"
                            y="6"
                            width="34"
                            height="31"
                            rx="15.5"
                            fill="#E18C28"
                          />
                          <path
                            d="M16 21.5H30"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M23 14.5L30 21.5L23 28.5"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_214_297"
                            x="0"
                            y="0"
                            width="46"
                            height="43"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feMorphology
                              radius="6"
                              operator="dilate"
                              in="SourceAlpha"
                              result="effect1_dropShadow_214_297"
                            />
                            <feOffset />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0.498039 0 0 0 0 0.341176 0 0 0 0 0.945098 0 0 0 0.25 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_214_297"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_214_297"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </p>
                  </div>
                </div>
              </router-link>
            </div>

            <div
              class="col-sm-4 col-6 mt-2 mb-2"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <router-link to="/" style="text-decoration: none">
                <div
                  class="Project2 d-flex justify-content-center text-center m-1 p-3 pt-5 pb-5"
                >
                  <div class="overlay"></div>

                  <div class="textBox">
                    <h2>{{ $t('Projectname2') }}</h2>
                    <p>
                      <svg
                        width="46"
                        height="43"
                        viewBox="0 0 46 43"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_d_214_297)">
                          <rect
                            x="6"
                            y="6"
                            width="34"
                            height="31"
                            rx="15.5"
                            fill="#E18C28"
                          />
                          <path
                            d="M16 21.5H30"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M23 14.5L30 21.5L23 28.5"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_214_297"
                            x="0"
                            y="0"
                            width="46"
                            height="43"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feMorphology
                              radius="6"
                              operator="dilate"
                              in="SourceAlpha"
                              result="effect1_dropShadow_214_297"
                            />
                            <feOffset />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0.498039 0 0 0 0 0.341176 0 0 0 0 0.945098 0 0 0 0.25 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_214_297"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_214_297"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </p>
                  </div>
                </div>
              </router-link>
            </div>
            <div
              class="col-sm-4 col-6 mt-2 mb-2"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <router-link to="/" style="text-decoration: none">
                <div
                  class="Project3 d-flex justify-content-center text-center m-1 p-3 pt-5 pb-5"
                >
                  <div class="overlay"></div>

                  <div class="textBox">
                    <h2>{{ $t('Projectname3') }}</h2>
                    <p>
                      <svg
                        width="46"
                        height="43"
                        viewBox="0 0 46 43"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_d_214_297)">
                          <rect
                            x="6"
                            y="6"
                            width="34"
                            height="31"
                            rx="15.5"
                            fill="#E18C28"
                          />
                          <path
                            d="M16 21.5H30"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M23 14.5L30 21.5L23 28.5"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_214_297"
                            x="0"
                            y="0"
                            width="46"
                            height="43"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feMorphology
                              radius="6"
                              operator="dilate"
                              in="SourceAlpha"
                              result="effect1_dropShadow_214_297"
                            />
                            <feOffset />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0.498039 0 0 0 0 0.341176 0 0 0 0 0.945098 0 0 0 0.25 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_214_297"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_214_297"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </p>
                  </div>
                </div>
              </router-link>
            </div>

            <div
              class="col-sm-4 col-6 mt-2 mb-2"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <router-link to="/" style="text-decoration: none">
                <div
                  class="Project4 d-flex justify-content-center text-center m-1 p-3 pt-5 pb-5"
                >
                  <div class="overlay"></div>

                  <div class="textBox">
                    <h2>{{ $t('Projectname4') }}</h2>
                    <p>
                      <svg
                        width="46"
                        height="43"
                        viewBox="0 0 46 43"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_d_214_297)">
                          <rect
                            x="6"
                            y="6"
                            width="34"
                            height="31"
                            rx="15.5"
                            fill="#E18C28"
                          />
                          <path
                            d="M16 21.5H30"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M23 14.5L30 21.5L23 28.5"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_214_297"
                            x="0"
                            y="0"
                            width="46"
                            height="43"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feMorphology
                              radius="6"
                              operator="dilate"
                              in="SourceAlpha"
                              result="effect1_dropShadow_214_297"
                            />
                            <feOffset />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0.498039 0 0 0 0 0.341176 0 0 0 0 0.945098 0 0 0 0.25 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_214_297"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_214_297"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </p>
                  </div>
                </div>
              </router-link>
            </div>

            <div
              class="col-sm-4 col-6 mt-2 mb-2"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <router-link to="/" style="text-decoration: none">
                <div
                  class="Project5 d-flex justify-content-center text-center m-1 p-3 pt-5 pb-5"
                >
                  <div class="overlay"></div>

                  <div class="textBox">
                    <h2>{{ $t('Projectname5') }}</h2>
                    <p>
                      <svg
                        width="46"
                        height="43"
                        viewBox="0 0 46 43"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_d_214_297)">
                          <rect
                            x="6"
                            y="6"
                            width="34"
                            height="31"
                            rx="15.5"
                            fill="#E18C28"
                          />
                          <path
                            d="M16 21.5H30"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M23 14.5L30 21.5L23 28.5"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_214_297"
                            x="0"
                            y="0"
                            width="46"
                            height="43"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feMorphology
                              radius="6"
                              operator="dilate"
                              in="SourceAlpha"
                              result="effect1_dropShadow_214_297"
                            />
                            <feOffset />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0.498039 0 0 0 0 0.341176 0 0 0 0 0.945098 0 0 0 0.25 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_214_297"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_214_297"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </p>
                  </div>
                </div>
              </router-link>
            </div>

            <div
              class="col-sm-4 col-6 mt-2 mb-2"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <router-link to="/" style="text-decoration: none">
                <div
                  class="Project6 d-flex justify-content-center text-center m-1 p-3 pt-5 pb-5"
                >
                  <div class="overlay"></div>

                  <div class="textBox">
                    <h2>{{ $t('Projectname6') }}</h2>
                    <p>
                      <svg
                        width="46"
                        height="43"
                        viewBox="0 0 46 43"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_d_214_297)">
                          <rect
                            x="6"
                            y="6"
                            width="34"
                            height="31"
                            rx="15.5"
                            fill="#E18C28"
                          />
                          <path
                            d="M16 21.5H30"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M23 14.5L30 21.5L23 28.5"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_214_297"
                            x="0"
                            y="0"
                            width="46"
                            height="43"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feMorphology
                              radius="6"
                              operator="dilate"
                              in="SourceAlpha"
                              result="effect1_dropShadow_214_297"
                            />
                            <feOffset />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0.498039 0 0 0 0 0.341176 0 0 0 0 0.945098 0 0 0 0.25 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_214_297"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_214_297"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </p>
                  </div>
                </div>
              </router-link>
            </div>

            <div
              class="col-sm-4 col-6 mt-2 mb-2"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <router-link to="/" style="text-decoration: none">
                <div
                  class="Project7 d-flex justify-content-center text-center m-1 p-3 pt-5 pb-5"
                >
                  <div class="overlay"></div>

                  <div class="textBox">
                    <h2>{{ $t('Projectname7') }}</h2>
                    <p>
                      <svg
                        width="46"
                        height="43"
                        viewBox="0 0 46 43"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_d_214_297)">
                          <rect
                            x="6"
                            y="6"
                            width="34"
                            height="31"
                            rx="15.5"
                            fill="#E18C28"
                          />
                          <path
                            d="M16 21.5H30"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M23 14.5L30 21.5L23 28.5"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_214_297"
                            x="0"
                            y="0"
                            width="46"
                            height="43"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feMorphology
                              radius="6"
                              operator="dilate"
                              in="SourceAlpha"
                              result="effect1_dropShadow_214_297"
                            />
                            <feOffset />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0.498039 0 0 0 0 0.341176 0 0 0 0 0.945098 0 0 0 0.25 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_214_297"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_214_297"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </p>
                  </div>
                </div>
              </router-link>
            </div>

            <div
              class="col-sm-4 col-6 mt-2 mb-2"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <router-link to="/" style="text-decoration: none">
                <div
                  class="Project8 d-flex justify-content-center text-center m-1 p-3 pt-5 pb-5"
                >
                  <div class="overlay"></div>

                  <div class="textBox">
                    <h2>{{ $t('Projectname8') }}</h2>
                    <p>
                      <svg
                        width="46"
                        height="43"
                        viewBox="0 0 46 43"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_d_214_297)">
                          <rect
                            x="6"
                            y="6"
                            width="34"
                            height="31"
                            rx="15.5"
                            fill="#E18C28"
                          />
                          <path
                            d="M16 21.5H30"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M23 14.5L30 21.5L23 28.5"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_214_297"
                            x="0"
                            y="0"
                            width="46"
                            height="43"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feMorphology
                              radius="6"
                              operator="dilate"
                              in="SourceAlpha"
                              result="effect1_dropShadow_214_297"
                            />
                            <feOffset />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0.498039 0 0 0 0 0.341176 0 0 0 0 0.945098 0 0 0 0.25 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_214_297"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_214_297"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </p>
                  </div>
                </div>
              </router-link>
            </div>

            <div
              class="col-sm-4 col-6 mt-2 mb-2"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <router-link to="/" style="text-decoration: none">
                <div
                  class="Project9 d-flex justify-content-center text-center m-1 p-3 pt-5 pb-5"
                >
                  <div class="overlay"></div>

                  <div class="textBox">
                    <h2>{{ $t('Projectname9') }}</h2>
                    <p>
                      <svg
                        width="46"
                        height="43"
                        viewBox="0 0 46 43"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_d_214_297)">
                          <rect
                            x="6"
                            y="6"
                            width="34"
                            height="31"
                            rx="15.5"
                            fill="#E18C28"
                          />
                          <path
                            d="M16 21.5H30"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M23 14.5L30 21.5L23 28.5"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_214_297"
                            x="0"
                            y="0"
                            width="46"
                            height="43"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feMorphology
                              radius="6"
                              operator="dilate"
                              in="SourceAlpha"
                              result="effect1_dropShadow_214_297"
                            />
                            <feOffset />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0.498039 0 0 0 0 0.341176 0 0 0 0 0.945098 0 0 0 0.25 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_214_297"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_214_297"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </p>
                  </div>
                </div>
              </router-link>
            </div>

            <div
              class="col-sm-4 col-6 mt-2 mb-2"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <router-link to="/" style="text-decoration: none">
                <div
                  class="Project10 d-flex justify-content-center text-center m-1 p-3 pt-5 pb-5"
                >
                  <div class="overlay"></div>

                  <div class="textBox">
                    <h2>{{ $t('Projectname10') }}</h2>
                    <p>
                      <svg
                        width="46"
                        height="43"
                        viewBox="0 0 46 43"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_d_214_297)">
                          <rect
                            x="6"
                            y="6"
                            width="34"
                            height="31"
                            rx="15.5"
                            fill="#E18C28"
                          />
                          <path
                            d="M16 21.5H30"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M23 14.5L30 21.5L23 28.5"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_214_297"
                            x="0"
                            y="0"
                            width="46"
                            height="43"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feMorphology
                              radius="6"
                              operator="dilate"
                              in="SourceAlpha"
                              result="effect1_dropShadow_214_297"
                            />
                            <feOffset />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0.498039 0 0 0 0 0.341176 0 0 0 0 0.945098 0 0 0 0.25 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_214_297"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_214_297"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </p>
                  </div>
                </div>
              </router-link>
            </div>

            <div
              class="col-sm-4 col-6 mt-2 mb-2"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <router-link to="/" style="text-decoration: none">
                <div
                  class="Project11 d-flex justify-content-center text-center m-1 p-3 pt-5 pb-5"
                >
                  <div class="overlay"></div>

                  <div class="textBox">
                    <h2>{{ $t('Projectname11') }}</h2>
                    <p>
                      <svg
                        width="46"
                        height="43"
                        viewBox="0 0 46 43"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_d_214_297)">
                          <rect
                            x="6"
                            y="6"
                            width="34"
                            height="31"
                            rx="15.5"
                            fill="#E18C28"
                          />
                          <path
                            d="M16 21.5H30"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M23 14.5L30 21.5L23 28.5"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_214_297"
                            x="0"
                            y="0"
                            width="46"
                            height="43"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feMorphology
                              radius="6"
                              operator="dilate"
                              in="SourceAlpha"
                              result="effect1_dropShadow_214_297"
                            />
                            <feOffset />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0.498039 0 0 0 0 0.341176 0 0 0 0 0.945098 0 0 0 0.25 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_214_297"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_214_297"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </p>
                  </div>
                </div>
              </router-link>
            </div>
            <div
              class="col-sm-4 col-6 mt-2 mb-2"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <router-link to="/" style="text-decoration: none">
                <div
                  class="Project12 d-flex justify-content-center text-center m-1 p-3 pt-5 pb-5"
                >
                  <div class="overlay"></div>

                  <div class="textBox">
                    <h2>{{ $t('Projectname12') }}</h2>
                    <p>
                      <svg
                        width="46"
                        height="43"
                        viewBox="0 0 46 43"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_d_214_297)">
                          <rect
                            x="6"
                            y="6"
                            width="34"
                            height="31"
                            rx="15.5"
                            fill="#E18C28"
                          />
                          <path
                            d="M16 21.5H30"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M23 14.5L30 21.5L23 28.5"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_214_297"
                            x="0"
                            y="0"
                            width="46"
                            height="43"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feMorphology
                              radius="6"
                              operator="dilate"
                              in="SourceAlpha"
                              result="effect1_dropShadow_214_297"
                            />
                            <feOffset />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0.498039 0 0 0 0 0.341176 0 0 0 0 0.945098 0 0 0 0.25 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_214_297"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_214_297"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </p>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollReveal from 'scrollreveal'
import Swiper from 'swiper'
import 'swiper/swiper-bundle.min.css'
import { onMounted, nextTick } from 'vue'

import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: 'allProjects',

  computed: {
    isProjectPage() {
      return this.$route.name === 'allProjects'
    },
    isRTL() {
      return this.$i18n.locale === 'ar'
    },
  },
  mounted() {
    AOS.init({
      once: true,
      duration: 800,
    })
    this.$nextTick(() => {
      AOS.refresh()
    })
    new Swiper('.swiper-container', {})
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
  },
  watch: {
    $route() {
      nextTick(() => {
        AOS.refresh()
      })
    },
  },
}
</script>

<style scoped>
@import 'aos/dist/aos.css';

.allProjects {
  background-image: url('@/assets/bg.png');
  padding: 80px 0;
}
.Project1 {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  border: 1px solid #f6f3f383;
  background-image: url('../../assets/TADWEEN.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  transition: 0.2s ease-in-out;
  overflow: hidden;
}
.Project2 {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background-image: url('../../assets/RASAEL.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: 1px solid #f6f3f383;
  border-radius: 12px;
  transition: 0.2s ease-in-out;

  overflow: hidden;
}
.Project3 {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background-image: url('../../assets/Itmain.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: 1px solid #f6f3f383;
  border-radius: 12px;
  transition: 0.2s ease-in-out;

  overflow: hidden;
}
.Project4 {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background-image: url('../../assets/Feedbaky.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: 1px solid #f6f3f383;
  border-radius: 12px;
  transition: 0.2s ease-in-out;
  overflow: hidden;
}

.Project5 {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background-image: url('../../assets/Claimizer.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: 1px solid #f6f3f383;
  border-radius: 12px;
  transition: 0.2s ease-in-out;
  overflow: hidden;
}
.Project6 {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background-image: url('../../assets/Check.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: 1px solid #f6f3f383;
  border-radius: 12px;
  transition: 0.2s ease-in-out;
  overflow: hidden;
}
.Project7 {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background-image: url('../../assets/Gadawel.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: 1px solid #f6f3f383;
  border-radius: 12px;
  transition: 0.2s ease-in-out;
  overflow: hidden;
}
.Project8 {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background-image: url('../../assets/Market.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: 1px solid #f6f3f383;
  border-radius: 12px;
  transition: 0.2s ease-in-out;
  overflow: hidden;
}
.Project9 {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background-image: url('../../assets/Afaak.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: 1px solid #f6f3f383;
  border-radius: 12px;
  transition: 0.2s ease-in-out;
  overflow: hidden;
}
.Project10 {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background-image: url('../../assets/Nartaki.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: 1px solid #f6f3f383;
  border-radius: 12px;
  transition: 0.2s ease-in-out;
  overflow: hidden;
}
.Project11 {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background-image: url('../../assets/Transportation.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: 1px solid #f6f3f383;
  border-radius: 12px;
  transition: 0.2s ease-in-out;
  overflow: hidden;
}
.Project12 {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background-image: url('../../assets/hrm.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: 1px solid #f6f3f383;
  border-radius: 12px;
  transition: 0.2s ease-in-out;
  overflow: hidden;
}

.Project1 .textBox,
.Project2 .textBox,
.Project3 .textBox,
.Project4 .textBox,
.Project5 .textBox,
.Project6 .textBox,
.Project7 .textBox,
.Project8 .textBox,
.Project9 .textBox,
.Project10 .textBox,
.Project11 .textBox,
.Project12 .textBox {
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  transition: 0.2s ease-in-out;
  z-index: 2;
}

.Project1 .textBox > h2,
.Project2 .textBox > h2,
.Project3 .textBox > h2,
.Project4 .textBox > h2,
.Project5 .textBox > h2,
.Project6 .textBox > h2,
.Project7 .textBox > h2,
.Project8 .textBox > h2,
.Project9 .textBox > h2,
.Project10 .textBox > h2,
.Project11 .textBox > h2,
.Project12 .textBox > h2 {
  font-size: 24px;
  font-weight: bold;
}

.Project1 .textBox > p,
.Project2 .textBox > p,
.Project3 .textBox > p,
.Project4 .textBox > p,
.Project5 .textBox > p,
.Project6 .textBox > p,
.Project7 .textBox > p,
.Project8 .textBox > p,
.Project9 .textBox > p,
.Project10 .textBox > p,
.Project11 .textBox > p,
.Project12 .textBox > p {
  font-size: 16px;
  color: rgb(228, 228, 228);
}

.Project1:hover > .textBox,
.Project2:hover > .textBox,
.Project3:hover > .textBox,
.Project4:hover > .textBox,
.Project5:hover > .textBox,
.Project6:hover > .textBox,
.Project7:hover > .textBox,
.Project8:hover > .textBox,
.Project9:hover > .textBox,
.Project10:hover > .textBox,
.Project11:hover > .textBox,
.Project12:hover > .textBox {
  opacity: 1;
}

.Project1:hover,
.Project2:hover,
.Project3:hover,
.Project4:hover,
.Project5:hover,
.Project6:hover,
.Project7:hover,
.Project8:hover,
.Project9:hover,
.Project10:hover,
.Project11:hover,
.Project12:hover {
  transform: scale(1.04) rotate(-2deg);
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.563);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.Project1:hover .overlay,
.Project2:hover .overlay,
.Project3:hover .overlay,
.Project4:hover .overlay,
.Project5:hover .overlay,
.Project6:hover .overlay,
.Project7:hover .overlay,
.Project8:hover .overlay,
.Project9:hover .overlay,
.Project10:hover .overlay,
.Project11:hover .overlay,
.Project12:hover .overlay {
  opacity: 1; /* إظهار الـ overlay عند التحويم */
}
.textBox {
  position: relative;
  z-index: 2; /* التأكد من أن النص يبقى فوق الـ overlay */
  color: white; /* جعل النص أبيض ليتناسب مع الـ overlay */
}
</style>

<template>
  <div class="TheFooter" :dir="isRTL ? 'rtl' : 'ltr'">
    <div class="row TheFooterr mb-5">
      <div class="col-sm-5 mb-4">
        <router-link to="/ThePage">
          <svg
            width="70"
            height="66"
            viewBox="0 0 70 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="47.7033"
              height="47.3902"
              rx="15"
              transform="matrix(0.763685 -0.645589 0.692168 0.721737 0 31.2966)"
              fill="#DF8317"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M34.9609 34.7255L41.7424 20.9707L43.9316 24.6969L39.4459 34.7261L34.9609 34.7255Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M34.0977 31.6253L27.3162 45.3801L25.127 41.6539L29.6127 31.6248L34.0977 31.6253Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M37.2953 30.0973L36.0527 32.5613L40.8254 32.4365L40.9785 31.3288L41.5456 29.9485L37.2953 30.0973Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M28.7963 33.4429L27.748 35.7217L31.3976 36.8964L33.5622 32.562L28.7963 33.3617"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M49.1873 32.9951L48.6891 33.8531L45.5341 39.2297V39.2379L42.3791 44.6145L41.8727 45.4807H29.4025L30.9302 42.8741L34.9316 36.0511H38.9916L35.4962 42.0079H39.8468L42.4875 37.5056H42.4958L44.1231 34.7274H20.925L20.4186 33.8613L19.9121 32.9951L20.4186 32.129L23.5736 26.7609V26.7528L26.7203 21.3757L27.2346 20.5095H39.7057L37.6715 23.9823H37.6632L34.1678 29.9391H30.1078L33.6032 23.9823H29.2609L26.6119 28.4846L24.985 31.2628H48.1748L48.6896 32.129L49.1873 32.9951Z"
              fill="white"
            />
          </svg>
        </router-link>
        <p style="margin: 40px 0">
          {{ $t('headerText') }}
        </p>
        <p style="color: #df8317">{{ $t('Contact') }}</p>
        <a href=""
          ><svg
            style="
              background-color: #df8317;
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
              background-color: #df8317;
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
              fill="#df8317"
            />
            <path
              d="M11.7187 4.06358C12.114 4.06358 12.4344 3.74313 12.4344 3.34783C12.4344 2.95253 12.114 2.63208 11.7187 2.63208C11.3234 2.63208 11.0029 2.95253 11.0029 3.34783C11.0029 3.74313 11.3234 4.06358 11.7187 4.06358Z"
              fill="#df8317"
            />
          </svg>
        </a>
        <a href="">
          <svg
            style="
              background-color: #df8317;
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
              background-color: #df8317;
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
        <ul>
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
        <ul>
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
        <ul>
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
</template>

<script>
export default {
  name: 'TheFooter',
  data() {
    return {
      mobileMenu: false,
      currentLanguage: 'English',
      imageUrl: require('@/assets/logo.png'),
    }
  },
  methods: {
    toggleLanguage() {
      this.$i18n.locale = this.$i18n.locale === 'en' ? 'ar' : 'en'
      this.currentLanguage =
        this.currentLanguage === 'English' ? 'العربية' : 'English'
    },
  },
  computed: {
    isRTL() {
      return this.$i18n.locale === 'ar'
    },
  },
}
</script>
<style scoped>
.TheFooter {
  background-size: cover;
  background-repeat: no-repeat;
  padding: 80px 80px 30px;
  text-align: start;
  position: relative;
  background-color: #202020;
  background-position: center;
  overflow: hidden;
}

.background-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.TheFooterr {
  z-index: 2;
  position: relative;
}
a:hover {
  text-decoration: none;
}
.logo {
  width: 40%;
  margin-bottom: 20px;
}
p {
  font-size: 18px;
  color: #ffffff;
}
h1 {
  color: #ffffff;
  margin-bottom: 30px;
  font: Cairo;
  font-weight: bold;
  font-size: 24px;
}
ul {
  list-style: none;
  display: inline-block;
  margin: 0;
  padding: 0;
  font-size: 24px;
}
li {
  margin-right: 20px;
  color: #ffffff;
  font-size: 18px;
  line-height: 40px;
}
a {
  text-decoration: none;
}
</style>

<template>
  <div :dir="isRTL ? 'rtl' : 'ltr'">
    <!-- ======= TheFooter Section ======= -->
    <div class="TheFooter" :dir="isRTL ? 'rtl' : 'ltr'">
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

      <div class="row d-flex justify-content-center mb-5 ml-5 mr-5">
        <div class="col-sm-4 mb-4">
          <router-link to="/ThePage">
            <svg
              width="137"
              height="65"
              viewBox="0 0 117 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_697_1706)">
                <path
                  d="M16.3134 2.29239L2.79388 15.1561C-0.672426 18.4542 -0.952288 24.0974 2.16879 27.7603L14.3418 42.0469C17.4629 45.7099 22.803 46.0056 26.2693 42.7075L39.7888 29.8438C43.2551 26.5456 43.535 20.9025 40.4139 17.2395L28.2409 2.95295C25.1198 -0.710029 19.7797 -1.00577 16.3134 2.29239Z"
                  fill="#DF8317"
                />
                <path
                  d="M32.3602 22.5L31.6014 21.0277H26.791L30.0478 14.7768L28.3635 11.9656L23.6365 21.0277H14.1543L17.3589 14.8912H20.5243L18.0892 19.5646H21.2461L25.2105 11.9653H15.7246L10.2227 22.5L10.9794 23.9533H15.802L12.535 30.223L14.2195 33.0348L18.9568 23.9533H28.4388L25.224 30.1091H22.0586L24.5038 25.4164H21.3472L17.3726 33.035H26.8584L32.3602 22.5Z"
                  fill="white"
                />
                <path
                  d="M60.2074 8.45166V21.0731H58.0746V15.2853H50.3965V21.0731H48.2637V8.45166H50.3965V13.0314H58.0746V8.45166H60.2074Z"
                  fill="black"
                />
                <path
                  d="M73.4129 21.0731H71.0241L69.9321 18.8192L67.3217 13.41L64.7111 18.8192L63.6191 21.0731H61.2305L62.3225 18.8192L67.3217 8.45166L72.3209 18.8192L73.4129 21.0731Z"
                  fill="black"
                />
                <path
                  d="M82.6573 11.9496V11.8775C82.6553 11.5721 82.5396 11.2798 82.3353 11.0639C82.1309 10.8479 81.8543 10.7257 81.5654 10.7235H76.7196C76.4306 10.7257 76.154 10.8479 75.9496 11.0639C75.7453 11.2798 75.6296 11.5721 75.6276 11.8775V11.9496C75.6296 12.255 75.7453 12.5472 75.9496 12.7632C76.154 12.9792 76.4306 13.1014 76.7196 13.1035H81.0193C81.543 13.1025 82.0611 13.2175 82.5402 13.4411C83.0192 13.6647 83.4485 13.992 83.8005 14.4018C83.8516 14.4559 83.8857 14.5099 83.9369 14.564C84.3891 15.1477 84.6753 15.8551 84.762 16.6039C84.8488 17.3527 84.7326 18.1122 84.427 18.794C84.1214 19.4758 83.639 20.0519 83.0357 20.4554C82.4325 20.8588 81.7333 21.073 81.0194 21.0731H77.2826C76.2826 21.0727 75.3237 20.6528 74.6166 19.9056C73.9095 19.1584 73.5121 18.145 73.5118 17.0883H75.6446C75.6447 17.5473 75.8173 17.9875 76.1245 18.3121C76.4317 18.6367 76.8482 18.8191 77.2826 18.8192H81.0193C81.2359 18.8216 81.4507 18.7786 81.6514 18.6927C81.8522 18.6067 82.0347 18.4796 82.1887 18.3187C82.3426 18.1577 82.4648 17.9661 82.5482 17.7549C82.6316 17.5437 82.6745 17.3171 82.6745 17.0883C82.6745 16.8594 82.6316 16.6329 82.5482 16.4217C82.4648 16.2105 82.3426 16.0189 82.1887 15.8579C82.0347 15.6969 81.8522 15.5698 81.6514 15.4839C81.4507 15.398 81.2359 15.355 81.0193 15.3573H76.7196C75.8849 15.3601 75.0825 15.0171 74.4844 14.4018C74.3296 14.2379 74.1923 14.0565 74.0748 13.8609C73.7039 13.2942 73.5073 12.6205 73.5118 11.9315V11.8595C73.5102 10.9582 73.8471 10.0932 74.4485 9.45424C75.0499 8.8153 75.8668 8.45471 76.7196 8.45166H81.5654C82.4199 8.45405 83.2388 8.81386 83.8431 9.45243C84.4473 10.091 84.7878 10.9564 84.79 11.8595V11.9315L82.6573 11.9496Z"
                  fill="black"
                />
                <path
                  d="M98.4398 8.45166V21.0731H96.307V15.2853H88.6289V21.0731H86.4961V8.45166H88.6289V13.0314H96.307V8.45166H98.4398Z"
                  fill="black"
                />
                <path
                  d="M57.4093 27.4071V27.335C57.4073 27.0296 57.2916 26.7373 57.0872 26.5214C56.8829 26.3054 56.6063 26.1832 56.3173 26.181H51.4715C51.1825 26.1832 50.906 26.3054 50.7016 26.5214C50.4973 26.7373 50.3815 27.0296 50.3795 27.335V27.4071C50.3815 27.7125 50.4972 28.0048 50.7016 28.2207C50.9059 28.4367 51.1825 28.5589 51.4715 28.561H55.7713C56.295 28.56 56.8131 28.675 57.2921 28.8986C57.7711 29.1223 58.2005 29.4495 58.5524 29.8593C58.6036 29.9134 58.6377 29.9674 58.6888 30.0215C59.1411 30.6052 59.4272 31.3126 59.514 32.0614C59.6007 32.8103 59.4846 33.5697 59.179 34.2515C58.8734 34.9333 58.3909 35.5094 57.7877 35.9129C57.1844 36.3163 56.4852 36.5305 55.7713 36.5306H52.0346C51.0346 36.5303 50.0756 36.1103 49.3685 35.3631C48.6614 34.6159 48.264 33.6025 48.2637 32.5458H50.3966C50.3967 33.0048 50.5693 33.445 50.8764 33.7696C51.1836 34.0942 51.6002 34.2766 52.0346 34.2767H55.7713C55.9878 34.2791 56.2027 34.2361 56.4034 34.1501C56.6041 34.0642 56.7866 33.9371 56.9406 33.7761C57.0945 33.6152 57.2166 33.4236 57.3 33.2124C57.3834 33.0012 57.4263 32.7746 57.4263 32.5458C57.4263 32.317 57.3834 32.0904 57.3 31.8792C57.2166 31.668 57.0945 31.4764 56.9406 31.3155C56.7866 31.1545 56.6041 31.0274 56.4034 30.9414C56.2027 30.8555 55.9878 30.8125 55.7713 30.8149H51.4715C50.6369 30.8177 49.8344 30.4746 49.2364 29.8593C49.0816 29.6954 48.9442 29.514 48.8268 29.3184C48.4559 28.7517 48.2593 28.078 48.2637 27.389V27.317C48.2621 26.4158 48.599 25.5507 49.2004 24.9118C49.8019 24.2728 50.6187 23.9122 51.4715 23.9092H56.3173C57.1719 23.9116 57.9908 24.2714 58.595 24.91C59.1993 25.5485 59.5397 26.4139 59.5419 27.317V27.389L57.4093 27.4071Z"
                  fill="black"
                />
                <path
                  d="M72.6103 23.9272V26.1811H67.7134V36.5487H65.5805V26.1811H60.6836V23.9272H72.6103Z"
                  fill="black"
                />
                <path
                  d="M86.2758 23.9092V30.2199C86.2758 31.8936 85.6466 33.4987 84.5267 34.6822C83.4067 35.8657 81.8877 36.5306 80.3039 36.5306C78.7201 36.5306 77.2011 35.8657 76.0812 34.6822C74.9612 33.4987 74.332 31.8936 74.332 30.2199V23.9092H76.4649V30.2199C76.4649 30.7526 76.5642 31.2802 76.7571 31.7724C76.95 32.2646 77.2328 32.7118 77.5893 33.0885C77.9458 33.4652 78.369 33.764 78.8348 33.9679C79.3005 34.1718 79.7998 34.2767 80.3039 34.2767C80.8081 34.2767 81.3073 34.1718 81.773 33.9679C82.2388 33.764 82.662 33.4652 83.0185 33.0885C83.375 32.7118 83.6578 32.2646 83.8507 31.7724C84.0436 31.2802 84.1429 30.7526 84.1429 30.2199V23.9092H86.2758Z"
                  fill="black"
                />
                <path
                  d="M93.9333 23.9272C95.0714 23.9239 96.1865 24.2653 97.1467 24.9109C98.1069 25.5566 98.8719 26.4794 99.3512 27.5702C99.8305 28.6609 100.004 29.874 99.8513 31.0658C99.6985 32.2575 99.2258 33.3781 98.4891 34.2948C98.3866 34.4211 98.2672 34.5472 98.1477 34.6735C97.6004 35.263 96.9472 35.7309 96.2264 36.0498C95.5056 36.3688 94.7318 36.5322 93.9504 36.5306H87.9785V23.9092H93.9504L93.9333 23.9272ZM97.7724 30.2379C97.7708 29.1624 97.3659 28.1315 96.6463 27.371C95.9266 26.6106 94.951 26.1826 93.9333 26.181H90.0943V34.2948H93.9333C94.951 34.2932 95.9266 33.8652 96.6463 33.1048C97.3659 32.3443 97.7709 31.3133 97.7724 30.2379Z"
                  fill="black"
                />
                <path
                  d="M101.627 36.5306V23.9092H103.76V36.5306H101.627Z"
                  fill="black"
                />
                <path
                  d="M117 30.2199C117 31.468 116.65 32.6881 115.994 33.7258C115.338 34.7636 114.405 35.5724 113.314 36.05C112.222 36.5277 111.022 36.6526 109.863 36.4091C108.705 36.1656 107.641 35.5645 106.806 34.682C105.971 33.7994 105.402 32.6749 105.171 31.4508C104.941 30.2267 105.059 28.9578 105.511 27.8047C105.963 26.6516 106.729 25.666 107.711 24.9726C108.693 24.2792 109.847 23.9092 111.029 23.9092C112.612 23.911 114.13 24.5765 115.249 25.7596C116.369 26.9427 116.998 28.5468 117 30.2199ZM114.868 30.2199C114.868 29.4175 114.642 28.6331 114.221 27.9659C113.799 27.2987 113.199 26.7787 112.498 26.4717C111.796 26.1646 111.024 26.0842 110.279 26.2408C109.535 26.3973 108.851 26.7837 108.314 27.3511C107.777 27.9185 107.411 28.6413 107.263 29.4283C107.115 30.2153 107.191 31.031 107.482 31.7724C107.772 32.5137 108.264 33.1473 108.896 33.5931C109.527 34.0388 110.269 34.2767 111.029 34.2767C112.046 34.2751 113.022 33.8472 113.741 33.0867C114.461 32.3262 114.866 31.2953 114.868 30.2199Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_697_1706">
                  <rect width="117" height="45" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </router-link>
          <p style="margin: 40px 0">
            {{
              $t(
                'Manage your business—sales, invoicing, accounting, clients, workforce, inventory, and operations—all in one place'
              )
            }}
          </p>
        </div>
        <div class="col-sm-2 mb-4">
          <h1>{{ $t('pages') }}</h1>
          <ul class="m-0 p-0">
            <router-link
              to="/"
              active-class="active-link"
              style="text-decoration: none"
            >
              <li>{{ $t('home') }}</li>
            </router-link>
            <router-link
              :to="{ path: '/', hash: '#sucess-section' }"
              active-class="active-link"
              style="text-decoration: none"
            >
              <li>{{ $t('Business Modules') }}</li>
            </router-link>
            <router-link
              :to="{ path: '/', hash: '#servies-section' }"
              active-class="active-link"
              style="text-decoration: none"
            >
              <li>{{ $t('Odoo Integration') }}</li>
            </router-link>
            <router-link
              :to="{ path: '/', hash: '#Process-section' }"
              active-class="active-link"
              style="text-decoration: none"
            >
              <li>{{ $t('Client Feedback') }}</li>
            </router-link>
            <router-link
              :to="{ path: '/', hash: '#Process-section' }"
              active-class="active-link"
              style="text-decoration: none"
            >
              <li>{{ $t('Business Industries') }}</li>
            </router-link>
          </ul>
        </div>
        <div class="col-sm-2 mb-4">
          <h1>{{ $t('Modules') }}</h1>
          <ul class="m-0 p-0">
            <router-link
              :to="{ path: '/ThePage', hash: '#system-section' }"
              active-class="active-link"
              style="text-decoration: none"
            >
              <li>{{ $t('Sales & Purchase') }}</li>
            </router-link>
            <router-link
              :to="{ path: '/ThePage', hash: '#partners-section' }"
              active-class="active-link"
              style="text-decoration: none"
            >
              <li>{{ $t('Point Of Sale') }}</li>
            </router-link>
            <router-link
              :to="{ path: '/ThePage', hash: '#members-section' }"
              active-class="active-link"
              style="text-decoration: none"
            >
              <li>{{ $t('Human Resourse') }}</li>
            </router-link>
            <router-link
              :to="{ path: '/ThePage', hash: '#feedback-section' }"
              active-class="active-link"
              style="text-decoration: none"
            >
              <li>{{ $t('Order Mangement') }}</li>
            </router-link>
            <router-link
              :to="{ path: '/ThePage', hash: '#feedback-section' }"
              active-class="active-link"
              style="text-decoration: none"
            >
              <li>{{ $t('Projects & Tasks') }}</li>
            </router-link>
          </ul>
        </div>
        <div class="col-sm-2 mb-4">
          <h1>{{ $t('Modules') }}</h1>
          <ul class="m-0 p-0">
            <router-link to="/" active-class="active-link">
              <li>{{ $t('Inventory') }}</li>
            </router-link>
            <router-link
              :to="{ path: '/', hash: '#sucess-section' }"
              active-class="active-link"
              style="text-decoration: none"
            >
              <li>{{ $t('Accounting') }}</li>
            </router-link>
            <router-link
              :to="{ path: '/', hash: '#servies-section' }"
              active-class="active-link"
              style="text-decoration: none"
            >
              <li>{{ $t('Expenses') }}</li>
            </router-link>
            <router-link
              :to="{ path: '/', hash: '#Process-section' }"
              active-class="active-link"
              style="text-decoration: none"
            >
              <li>{{ $t('Subscriptions') }}</li>
            </router-link>
            <router-link
              :to="{ path: '/', hash: '#Process-section' }"
              active-class="active-link"
              style="text-decoration: none"
            >
              <li>{{ $t('Manufacturing') }}</li>
            </router-link>
          </ul>
        </div>
        <div class="col-sm-2 mb-4">
          <h1>{{ $t('Follow Us') }}</h1>
          <ul class="m-0 p-0">
            <a href="">
              <li>{{ $t('LinkedIn') }}</li>
            </a>
            <a href="">
              <li>{{ $t('Twitter') }}</li>
            </a>
            <a href="">
              <li>{{ $t('Instagram') }}</li>
            </a>
            <a href="">
              <li>{{ $t('Facebook') }}</li>
            </a>
            <a href="">
              <li>{{ $t('YouTube') }}</li>
            </a>
          </ul>
        </div>
      </div>
      <hr style="color: #ffffff" />

      <div class="TheFooterr d-flex justify-content-between p-5 ml-3 mr-3">
        <p style="font-weight: bold">
          {{ $t('Privacy Policcentery | Terms & Conditions | Cookie Policy') }}
        </p>
        <p style="color: #596780">{{ $t('©Hash Studio 2024') }}</p>
      </div>
    </div>
    <!-- End TheFooter -->
  </div>
</template>

<script>
import ScrollReveal from 'scrollreveal'
import Swiper from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
  name: 'odooPage',
  components: {},
  data() {
    return {
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
# TheFooter Section
--------------------------------------------------------------*/

.TheFooter {
  text-align: start;
  color: #1a202c;
}
.TheFooter li {
  padding: 10px 0;
  color: #596780;
}
.TheFooter h1 {
  font-size: 24px;
  font-weight: bold;
}
.TheFooter .hero-waves {
  display: block;
  width: 100%;
  height: 100px;
  position: relative;
  transform: rotate(180deg);
}
li {
  text-decoration: none;
  list-style: none;
}
a {
  text-decoration: none;
}
li:hover {
  color: #d76d26;
}
</style>

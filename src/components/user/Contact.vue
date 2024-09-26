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
  <div v-else>
    <div class="ThePage text-start">
      <div class="container p-5">
        <p style="color: #8c3597; margin-top: 90px; font-weight: bold">
          Request a Quote
        </p>
        <h2>
          We <span style="color: #8c3597">are always</span> ready to help
          you....
        </h2>
        <div class="form-container">
          <form>
            <div class="form-row">
              <div class="row">
                <div class="col-6">
                  <label for="name">
                    Full Name<span style="color: red"> * </span>
                  </label>
                  <div class="input-with-icon">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="company"
                    />
                    <svg
                      width="24"
                      height="28"
                      viewBox="0 0 24 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 14C13.8565 14 15.637 13.2625 16.9497 11.9497C18.2625 10.637 19 8.85652 19 7C19 5.14348 18.2625 3.36301 16.9497 2.05025C15.637 0.737498 13.8565 0 12 0C10.1435 0 8.36301 0.737498 7.05025 2.05025C5.7375 3.36301 5 5.14348 5 7C5 8.85652 5.7375 10.637 7.05025 11.9497C8.36301 13.2625 10.1435 14 12 14ZM3.5 16C2.57174 16 1.6815 16.3687 1.02513 17.0251C0.368749 17.6815 0 18.5717 0 19.5V20C0 22.393 1.523 24.417 3.685 25.793C5.859 27.177 8.802 28 12 28C15.198 28 18.14 27.177 20.315 25.793C22.477 24.417 24 22.393 24 20V19.5C24 18.5717 23.6313 17.6815 22.9749 17.0251C22.3185 16.3687 21.4283 16 20.5 16H3.5Z"
                        fill="#8C3597"
                      />
                    </svg>
                  </div>
                </div>
                <div class="col-6">
                  <label for="address"
                    >Email Address<span style="color: red"> * </span>
                  </label>
                  <div class="input-with-icon">
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      placeholder="company@gmail.com"
                    />
                    <svg
                      width="27"
                      height="18"
                      viewBox="0 0 27 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.4999 15.75V2.25C26.4999 1.005 25.4949 0 24.2499 0H3.23486C1.98986 0 0.984863 1.005 0.984863 2.25V15.75C0.984863 16.995 1.98986 18 3.23486 18H24.2499C25.4949 18 26.4999 16.995 26.4999 15.75ZM24.5349 2.085C25.0299 2.58 24.7599 3.09 24.4899 3.345L18.3999 8.925L24.2499 15.015C24.4299 15.225 24.5499 15.555 24.3399 15.78C24.1449 16.02 23.6949 16.005 23.4999 15.855L16.9449 10.26L13.7349 13.185L10.5399 10.26L3.98486 15.855C3.78986 16.005 3.33986 16.02 3.14486 15.78C2.93486 15.555 3.05486 15.225 3.23486 15.015L9.08486 8.925L2.99486 3.345C2.72486 3.09 2.45486 2.58 2.94986 2.085C3.44486 1.59 3.95486 1.83 4.37486 2.19L13.7349 9.75L23.1099 2.19C23.5299 1.83 24.0399 1.59 24.5349 2.085Z"
                        fill="#8C3597"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div class="form-row">
              <div class="row">
                <div class="col-6">
                  <label for="phone">
                    Phone<span style="color: red"> * </span>
                  </label>
                  <div class="input-with-icon">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="+2012340578"
                    />
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.275 10.4875C7.075 14.025 9.975 16.9125 13.5125 18.725L16.2625 15.975C16.6 15.6375 17.1 15.525 17.5375 15.675C18.9375 16.1375 20.45 16.3875 22 16.3875C22.6875 16.3875 23.25 16.95 23.25 17.6375V22C23.25 22.6875 22.6875 23.25 22 23.25C10.2625 23.25 0.75 13.7375 0.75 2C0.75 1.3125 1.3125 0.75 2 0.75H6.375C7.0625 0.75 7.625 1.3125 7.625 2C7.625 3.5625 7.875 5.0625 8.3375 6.4625C8.475 6.9 8.375 7.3875 8.025 7.7375L5.275 10.4875Z"
                        fill="#8C3597"
                      />
                    </svg>
                  </div>
                </div>
                <div class="col-6">
                  <label for="url"
                    >Website Url <span style="color: red"> * </span>
                  </label>
                  <div class="input-with-icon">
                    <input
                      type="url"
                      id="url"
                      name="url"
                      placeholder="https://www.com"
                    />
                    <svg
                      width="27"
                      height="30"
                      viewBox="0 0 27 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.15407 20.625C5.30112 20.625 6.23099 19.7855 6.23099 18.75C6.23099 17.7145 5.30112 16.875 4.15407 16.875C3.00702 16.875 2.07715 17.7145 2.07715 18.75C2.07715 19.7855 3.00702 20.625 4.15407 20.625Z"
                        fill="#8C3597"
                      />
                      <path
                        d="M4.15407 13.125C5.30112 13.125 6.23099 12.2855 6.23099 11.25C6.23099 10.2145 5.30112 9.375 4.15407 9.375C3.00702 9.375 2.07715 10.2145 2.07715 11.25C2.07715 12.2855 3.00702 13.125 4.15407 13.125Z"
                        fill="#8C3597"
                      />
                      <path
                        d="M9.34594 26.2501C9.22133 26.2501 9.11748 26.2501 8.99287 26.1938C8.73439 26.1088 8.52373 25.9348 8.40697 25.7099C8.2902 25.4851 8.27684 25.2276 8.36979 24.9938L16.6775 4.36885C16.784 4.15127 16.9781 3.9783 17.2204 3.88485C17.4627 3.79139 17.7353 3.78442 17.9831 3.86534C18.2309 3.94625 18.4354 4.10903 18.5555 4.3208C18.6755 4.53258 18.7021 4.77758 18.6298 5.00635L10.3221 25.6313C10.1767 26.0063 9.76133 26.2501 9.34594 26.2501ZM15.5767 26.2501C15.4521 26.2501 15.3483 26.2501 15.2236 26.1938C14.9652 26.1088 14.7545 25.9348 14.6377 25.7099C14.521 25.4851 14.5076 25.2276 14.6006 24.9938L22.9083 4.36885C23.0148 4.15127 23.2088 3.9783 23.4512 3.88485C23.6935 3.79139 23.9661 3.78442 24.2139 3.86534C24.4616 3.94625 24.6662 4.10903 24.7862 4.3208C24.9063 4.53258 24.9328 4.77758 24.8606 5.00635L16.5529 25.6313C16.4075 26.0063 15.9921 26.2501 15.5767 26.2501Z"
                        fill="#8C3597"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div class="form-row required">
              <div class="row">
                <div class="col-6">
                  <label for="social">
                    Did You Hear About Us? <span style="color: red"> * </span>
                  </label>
                  <select id="social" name="social" required class="pl-2">
                    <option value="">choose option</option>
                    <option value="facebook">facebook</option>
                    <option value="twitter">twitter</option>
                    <option value="instagram">instagram</option>
                    <option value="linkedin">linkedin</option>
                    <option value="other">other</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="form-row">
              <label class="text-start">
                What Services Would You Like Us to Quote For?
              </label>
              <div class="services-options">
                <div class="service-option m-3">
                  <input
                    type="radio"
                    id="service1"
                    name="service"
                    value="service1"
                  />
                  <label for="service1">Website Design</label>
                </div>
                <div class="service-option m-3">
                  <input
                    type="radio"
                    id="service2"
                    name="service"
                    value="service2"
                  />
                  <label for="service2">Mobile Application</label>
                </div>
                <div class="service-option m-3">
                  <input
                    type="radio"
                    id="service3"
                    name="service"
                    value="service3"
                  />
                  <label for="service3">Graphic Design</label>
                </div>
              </div>
              <div class="services-options">
                <div class="service-option m-3">
                  <input
                    type="radio"
                    id="service4"
                    name="service"
                    value="service4"
                  />
                  <label for="service4">SEO</label>
                </div>
                <div class="service-option m-3">
                  <input
                    type="radio"
                    id="service5"
                    name="service"
                    value="service5"
                  />
                  <label for="service5">PPC</label>
                </div>
                <div class="service-option m-3">
                  <input
                    type="radio"
                    id="service6"
                    name="service"
                    value="service6"
                  />
                  <label for="service6">Social</label>
                </div>
              </div>

              <div class="services-options">
                <div class="service-option m-3">
                  <input
                    type="radio"
                    id="service7"
                    name="service"
                    value="service7"
                  />
                  <label for="service7">Hosting & Emails</label>
                </div>
                <div class="service-option m-3">
                  <input
                    type="radio"
                    id="service8"
                    name="service"
                    value="service8"
                  />
                  <label for="service8">Support</label>
                </div>
                <div class="service-option m-3">
                  <input
                    type="radio"
                    id="service9"
                    name="service"
                    value="service9"
                  />
                  <label for="service9">UnSure</label>
                </div>
              </div>
            </div>

            <div class="form-row">
              <label class="text-start"
                >Do You Have any Other Questions or Notes?</label
              >
              <textarea
                name=""
                id=""
                rows="12"
                placeholder="write your message there...."
              ></textarea>
            </div>
            <div class="row">
              <button type="submit" class="p-3">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollReveal from 'scrollreveal'
export default {
  name: 'ContactUs',
  data() {
    return {
      isScrolled: false,
      mobileMenu: false,
      currentLanguage: 'English',
      imageUrl: require('@/assets/dataways (1) 1.png'),
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
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
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
    isRTL() {
      return this.$i18n.locale === 'ar'
    },
    isContactPage() {
      return this.$route.name === 'Contact'
    },
  },
}
</script>

<style scoped>
.form-container {
  margin: auto;
  padding: 20px;
  border-radius: 8px;
}
.form-row {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}
.form-row label {
  margin-bottom: 5px;
  text-align: right;
  color: #6d6d71;
}
.form-row input,
.form-row select,
textarea {
  width: 100%;
  padding: 14px 14px 14px 40px;
  border: 1px solid #e8e8e8;
  background-color: #f9f9f9;
  border-radius: 4px;
  color: #6d6d71;
}

button {
  background-color: #8c3597;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px !important;
  cursor: pointer;
  font-size: 16px;
}
button:hover {
  background-color: #6a2e6f;
}
.input-with-icon svg {
  height: 1.4rem !important;
  position: absolute;
  left: 20px;
  top: 66%;
  transform: translateY(-50%);
}

.services-options {
  display: flex;
  justify-content: space-between;
}
.service-option {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 10px;
  border: 1px dashed #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
}
.service-option input {
  position: absolute;
  opacity: 0;
}
.service-option input:checked + label {
  border-color: #8c3597;
  border-collapse: separate;
  color: #8c3597;
}
.service-option label {
  display: inline-block;
  padding: 5px 10px;
  margin-left: 30px;
}
.service-option:hover {
  background-color: #fbf6ff;
}
button {
  background-color: #8c3597;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}
button:hover {
  background-color: #6a2e6f;
}
.form-row {
  display: flex;
  flex-direction: column;
}

.services-options {
  display: flex;
  flex-wrap: wrap;

  justify-content: space-between;
}

.service-option {
  flex: 1 1 20%;
  display: flex;
  align-items: center;
}

label {
  margin-left: 8px;
}

@media (max-width: 768px) {
  .services-options {
    flex-direction: row;
  }
}
</style>

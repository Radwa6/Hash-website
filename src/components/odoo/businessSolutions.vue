<template>
  <div class="">
    <div
      class="titles-container d-flex gap-3 align-items-center justify-content-center pt-5"
    >
      <button
        v-for="(title, index) in titles"
        :key="index"
        @click="activeIndex = index"
        :class="{ active: activeIndex === index }"
      >
        {{ title }}
      </button>
    </div>

    <div class="content-container mt-4">
      <div v-if="activeIndex === 0">
        <div class="row p-5" style="margin: 0 6%">
          <div
            class="row pt-5 pb-5 d-flex align-items-center justify-content-center"
          >
            <div
              class="col-6 p-4"
              data-aos="fade-right"
              data-aos-duration="2000"
              style="text-align: start"
            >
              <p style="color: #df8317; display: inline-block; font-size: 24px">
                {{ $t('Employee Management') }}
              </p>
              <h1 style="font-weight: bold" class="mt-2 mb-2">
                {{ $t('Best System for superior client ') }}
                <span style="color: #df8317">{{ $t('care!') }}</span>
              </h1>
              <p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21C14.0822 21 16.1 20.278 17.7095 18.957C19.3191 17.6361 20.4208 15.7979 20.827 13.7557C21.2332 11.7136 20.9187 9.5937 19.9372 7.75737C18.9556 5.92104 17.3677 4.48187 15.444 3.68506C13.5203 2.88825 11.3798 2.78311 9.3873 3.38756C7.39477 3.992 5.67346 5.26863 4.51666 6.99992C3.35987 8.73121 2.83916 10.81 3.04327 12.8822C3.24737 14.9544 4.16366 16.8917 5.636 18.364"
                    stroke="#DF8317"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M16 10L12.402 14.318C11.747 15.104 11.419 15.498 10.978 15.518C10.538 15.538 10.175 15.175 9.451 14.451L8 13"
                    stroke="#DF8317"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                {{ $t('Oversee daily team task updates') }}
              </p>
              <p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21C14.0822 21 16.1 20.278 17.7095 18.957C19.3191 17.6361 20.4208 15.7979 20.827 13.7557C21.2332 11.7136 20.9187 9.5937 19.9372 7.75737C18.9556 5.92104 17.3677 4.48187 15.444 3.68506C13.5203 2.88825 11.3798 2.78311 9.3873 3.38756C7.39477 3.992 5.67346 5.26863 4.51666 6.99992C3.35987 8.73121 2.83916 10.81 3.04327 12.8822C3.24737 14.9544 4.16366 16.8917 5.636 18.364"
                    stroke="#DF8317"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M16 10L12.402 14.318C11.747 15.104 11.419 15.498 10.978 15.518C10.538 15.538 10.175 15.175 9.451 14.451L8 13"
                    stroke="#DF8317"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                {{ $t('Skillful resolution of employee cases') }}
              </p>
              <p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21C14.0822 21 16.1 20.278 17.7095 18.957C19.3191 17.6361 20.4208 15.7979 20.827 13.7557C21.2332 11.7136 20.9187 9.5937 19.9372 7.75737C18.9556 5.92104 17.3677 4.48187 15.444 3.68506C13.5203 2.88825 11.3798 2.78311 9.3873 3.38756C7.39477 3.992 5.67346 5.26863 4.51666 6.99992C3.35987 8.73121 2.83916 10.81 3.04327 12.8822C3.24737 14.9544 4.16366 16.8917 5.636 18.364"
                    stroke="#DF8317"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M16 10L12.402 14.318C11.747 15.104 11.419 15.498 10.978 15.518C10.538 15.538 10.175 15.175 9.451 14.451L8 13"
                    stroke="#DF8317"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                {{ $t('File requests for leave and approvals') }}
              </p>
              <router-link to="/" style="text-decoration: none">
                <button class="button">{{ $t('Get a Free Demo') }}</button>
              </router-link>
            </div>
            <div class="col-6" data-aos="fade-up" data-aos-duration="2000">
              <img :src="imageUrl1" alt="image" class="img-fluid" />
            </div>
          </div>

          <div
            class="row pt-5 pb-5 d-flex align-items-center justify-content-center"
          >
            <div class="col-6" data-aos="fade-up" data-aos-duration="2000">
              <img :src="imageUrl1" alt="image" class="img-fluid" />
            </div>
            <div
              class="col-6 p-4"
              data-aos="fade-right"
              data-aos-duration="2000"
              style="text-align: start"
            >
              <p style="color: #df8317; display: inline-block; font-size: 24px">
                {{ $t('Projects Management') }}
              </p>
              <h1 style="font-weight: bold" class="mt-2 mb-2">
                {{ $t('Oversee employee project') }}
                <span style="color: #df8317">{{ $t(' management!') }}</span>
              </h1>
              <p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21C14.0822 21 16.1 20.278 17.7095 18.957C19.3191 17.6361 20.4208 15.7979 20.827 13.7557C21.2332 11.7136 20.9187 9.5937 19.9372 7.75737C18.9556 5.92104 17.3677 4.48187 15.444 3.68506C13.5203 2.88825 11.3798 2.78311 9.3873 3.38756C7.39477 3.992 5.67346 5.26863 4.51666 6.99992C3.35987 8.73121 2.83916 10.81 3.04327 12.8822C3.24737 14.9544 4.16366 16.8917 5.636 18.364"
                    stroke="#DF8317"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M16 10L12.402 14.318C11.747 15.104 11.419 15.498 10.978 15.518C10.538 15.538 10.175 15.175 9.451 14.451L8 13"
                    stroke="#DF8317"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                {{ $t('Administer projects for employees') }}
              </p>
              <p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21C14.0822 21 16.1 20.278 17.7095 18.957C19.3191 17.6361 20.4208 15.7979 20.827 13.7557C21.2332 11.7136 20.9187 9.5937 19.9372 7.75737C18.9556 5.92104 17.3677 4.48187 15.444 3.68506C13.5203 2.88825 11.3798 2.78311 9.3873 3.38756C7.39477 3.992 5.67346 5.26863 4.51666 6.99992C3.35987 8.73121 2.83916 10.81 3.04327 12.8822C3.24737 14.9544 4.16366 16.8917 5.636 18.364"
                    stroke="#DF8317"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M16 10L12.402 14.318C11.747 15.104 11.419 15.498 10.978 15.518C10.538 15.538 10.175 15.175 9.451 14.451L8 13"
                    stroke="#DF8317"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                {{ $t('Attendance &Employees Management') }}
              </p>
              <p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21C14.0822 21 16.1 20.278 17.7095 18.957C19.3191 17.6361 20.4208 15.7979 20.827 13.7557C21.2332 11.7136 20.9187 9.5937 19.9372 7.75737C18.9556 5.92104 17.3677 4.48187 15.444 3.68506C13.5203 2.88825 11.3798 2.78311 9.3873 3.38756C7.39477 3.992 5.67346 5.26863 4.51666 6.99992C3.35987 8.73121 2.83916 10.81 3.04327 12.8822C3.24737 14.9544 4.16366 16.8917 5.636 18.364"
                    stroke="#DF8317"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M16 10L12.402 14.318C11.747 15.104 11.419 15.498 10.978 15.518C10.538 15.538 10.175 15.175 9.451 14.451L8 13"
                    stroke="#DF8317"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                {{ $t('Managing work hours and shift distribution') }}
              </p>
              <router-link to="/" style="text-decoration: none">
                <button class="button">{{ $t('Get a Free Demo') }}</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="activeIndex === 1">
        <div
          class="row pt-5 pb-5 d-flex align-items-center justify-content-center"
          style="margin: 0 6%"
        >
          <div
            class="col-6 p-4"
            data-aos="fade-right"
            data-aos-duration="2000"
            style="text-align: start"
          >
            <p style="color: #df8317; display: inline-block; font-size: 24px">
              {{ $t('Sale & Purchase Management') }}
            </p>
            <h1 style="font-weight: bold" class="mt-2 mb-2">
              {{ $t('Monitor your sales & purchases ') }}
              <span style="color: #df8317">{{ $t('instantly!') }}</span>
            </h1>

            <p>
              {{
                $t(
                  'Manage your Invoices with Hash Cloud ERP—track stock, issue invoices, manage payments, and get detailed reports on purchases , Sales and suppliers.'
                )
              }}
            </p>
            <router-link to="/" style="text-decoration: none">
              <button class="button">{{ $t('Start Now') }}</button>
            </router-link>
          </div>
          <div class="col-6" data-aos="fade-up" data-aos-duration="2000">
            <img :src="imageUrl3" alt="image" class="img-fluid" />
          </div>
        </div>
      </div>
      <div v-else-if="activeIndex === 2">
        <div
          class="row pt-5 pb-5 d-flex align-items-center justify-content-center"
          style="margin: 0 6%"
        >
          <div
            class="col-6 p-4"
            data-aos="fade-right"
            data-aos-duration="2000"
            style="text-align: start"
          >
            <p style="color: #df8317; display: inline-block; font-size: 24px">
              {{ $t('Manfacturing Management') }}
            </p>
            <h1 style="font-weight: bold" class="mt-2 mb-2">
              {{ $t('Keep your manufacturing data updated') }}
              <span style="color: #df8317">{{ $t(' live !') }}</span>
            </h1>

            <p>
              {{
                $t(
                  'Track manufacturing revenues, costs, and profits; manage production and inventory; and generate reports—all without needing an accountant.'
                )
              }}
            </p>
            <router-link to="/" style="text-decoration: none">
              <button class="button">{{ $t('Start  Now') }}</button>
            </router-link>
          </div>
          <div class="col-6" data-aos="fade-up" data-aos-duration="2000">
            <img :src="imageUrl4" alt="image" class="img-fluid" />
          </div>
        </div>
      </div>
      <div v-else-if="activeIndex === 3">
        <div
          class="row pt-5 pb-5 d-flex align-items-center justify-content-center"
          style="margin: 0 6%"
        >
          <div
            class="col-6 p-4"
            data-aos="fade-right"
            data-aos-duration="2000"
            style="text-align: start"
          >
            <p style="color: #df8317; display: inline-block; font-size: 24px">
              {{ $t('Accounting Management') }}
            </p>
            <h1 style="font-weight: bold" class="mt-2 mb-2">
              {{ $t('Get live visibility of your accounting ') }}
              <span style="color: #df8317">{{ $t(' records!') }}</span>
            </h1>

            <p>
              {{
                $t(
                  'Track revenues, expenses, and profits; manage payments and invoices; and generate reports—all without needing an accountant.'
                )
              }}
            </p>
            <router-link to="/" style="text-decoration: none">
              <button class="button">{{ $t('Start  Now') }}</button>
            </router-link>
          </div>
          <div class="col-6" data-aos="fade-up" data-aos-duration="2000">
            <img :src="imageUrl5" alt="image" class="img-fluid" />
          </div>
        </div>
      </div>
      <div v-else-if="activeIndex === 4">
        <div
          class="row pt-5 pb-5 d-flex align-items-center justify-content-center"
          style="margin: 0 6%"
        >
          <div
            class="col-6 p-4"
            data-aos="fade-right"
            data-aos-duration="2000"
            style="text-align: start"
          >
            <p style="color: #df8317; display: inline-block; font-size: 24px">
              {{ $t('Point Of Sale System') }}
            </p>
            <h1 style="font-weight: bold" class="mt-2 mb-2">
              {{ $t('Keep tabs on your POS in ') }}
              <span style="color: #df8317">{{ $t('real-time!') }}</span>
            </h1>
            <p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21C14.0822 21 16.1 20.278 17.7095 18.957C19.3191 17.6361 20.4208 15.7979 20.827 13.7557C21.2332 11.7136 20.9187 9.5937 19.9372 7.75737C18.9556 5.92104 17.3677 4.48187 15.444 3.68506C13.5203 2.88825 11.3798 2.78311 9.3873 3.38756C7.39477 3.992 5.67346 5.26863 4.51666 6.99992C3.35987 8.73121 2.83916 10.81 3.04327 12.8822C3.24737 14.9544 4.16366 16.8917 5.636 18.364"
                  stroke="#DF8317"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M16 10L12.402 14.318C11.747 15.104 11.419 15.498 10.978 15.518C10.538 15.538 10.175 15.175 9.451 14.451L8 13"
                  stroke="#DF8317"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              {{ $t('Supports units, barcode, and serial number') }}
            </p>
            <p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21C14.0822 21 16.1 20.278 17.7095 18.957C19.3191 17.6361 20.4208 15.7979 20.827 13.7557C21.2332 11.7136 20.9187 9.5937 19.9372 7.75737C18.9556 5.92104 17.3677 4.48187 15.444 3.68506C13.5203 2.88825 11.3798 2.78311 9.3873 3.38756C7.39477 3.992 5.67346 5.26863 4.51666 6.99992C3.35987 8.73121 2.83916 10.81 3.04327 12.8822C3.24737 14.9544 4.16366 16.8917 5.636 18.364"
                  stroke="#DF8317"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M16 10L12.402 14.318C11.747 15.104 11.419 15.498 10.978 15.518C10.538 15.538 10.175 15.175 9.451 14.451L8 13"
                  stroke="#DF8317"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              {{ $t('Printers, barcode , scales, and cash drawers') }}
            </p>
            <p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21C14.0822 21 16.1 20.278 17.7095 18.957C19.3191 17.6361 20.4208 15.7979 20.827 13.7557C21.2332 11.7136 20.9187 9.5937 19.9372 7.75737C18.9556 5.92104 17.3677 4.48187 15.444 3.68506C13.5203 2.88825 11.3798 2.78311 9.3873 3.38756C7.39477 3.992 5.67346 5.26863 4.51666 6.99992C3.35987 8.73121 2.83916 10.81 3.04327 12.8822C3.24737 14.9544 4.16366 16.8917 5.636 18.364"
                  stroke="#DF8317"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M16 10L12.402 14.318C11.747 15.104 11.419 15.498 10.978 15.518C10.538 15.538 10.175 15.175 9.451 14.451L8 13"
                  stroke="#DF8317"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              {{ $t('Compatible with all devices and operation systems') }}
            </p>
            <router-link to="/" style="text-decoration: none">
              <button class="button">{{ $t('Start  Now') }}</button>
            </router-link>
          </div>
          <div class="col-6" data-aos="fade-up" data-aos-duration="2000">
            <img :src="imageUrl6" alt="image" class="img-fluid" />
          </div>
        </div>
      </div>
      <div v-else-if="activeIndex === 5">
        <div
          class="row pt-5 pb-5 d-flex align-items-center justify-content-center"
          style="margin: 0 6%"
        >
          <div
            class="col-6 p-4"
            data-aos="fade-right"
            data-aos-duration="2000"
            style="text-align: start"
          >
            <p style="color: #df8317; display: inline-block; font-size: 24px">
              {{ $t('Inventory Management') }}
            </p>
            <h1 style="font-weight: bold" class="mt-2 mb-2">
              {{ $t('Stay updated on inventory levels ') }}
              <span style="color: #df8317">{{ $t('continuously!') }}</span>
            </h1>
            <p>
              {{
                $t(
                  ' Inventory Management helps you organize products, track stock in real-time, manage multiple warehouses, send purchase orders, and assign staff—all with easy, professional tools.'
                )
              }}
            </p>

            <router-link to="/" style="text-decoration: none">
              <button class="button">{{ $t('Start  Now') }}</button>
            </router-link>
          </div>
          <div class="col-6" data-aos="fade-up" data-aos-duration="2000">
            <img :src="imageUrl7" alt="image" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl1: require('@/assets/odoo/Frame 2147223630.png'),
      imageUrl2: require('@/assets/odoo/Frame 2147223789.png'),
      imageUrl3: require('@/assets/odoo/Sale.png'),
      imageUrl4: require('@/assets/odoo/Management.png'),
      imageUrl5: require('@/assets/odoo/Accounting.png'),
      imageUrl6: require('@/assets/odoo/Discover.png'),
      imageUrl7: require('@/assets/odoo/Inventory.png'),

      titles: [
        'Human Resource',
        'Sales & Purchases',
        'Manufacturing',
        'Accounting',
        'Point Of Sale',
        'Inventory Management',
      ],
      activeIndex: 0,
    }
  },
}
</script>

<style scoped>
.container {
  padding: 20px;
}

.titles-container button {
  cursor: pointer;
  color: #000;
  background-color: #f2f2f2;
  padding: 18px 3%;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s, color 0.3s;
}

button:hover,
button.active {
  color: #fff;
  background-color: #d76d26;
}
.button {
  font-weight: bold;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
  width: 160px;
  height: 50px;
  border: none;
  border-radius: 30px;
  background-color: #d76d26;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

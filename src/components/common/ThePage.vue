<template>
  <div class="ThePage" :dir="isRTL ? 'rtl' : 'ltr'">
    <div class="navbarHeader pt-5">
      <section class="header">
        <div class="d-flex align-items-center m-5">
          <svg
            width="17"
            height="236"
            viewBox="0 0 17 236"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="8.41016"
              y1="38"
              x2="8.41015"
              y2="2.18557e-08"
              stroke="#DF8317"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.28544 55.7968C0.910156 56.5192 0.910156 57.4684 0.910156 59.3667V64.6333C0.910156 66.5316 0.910156 67.4808 1.28544 68.2032C1.6017 68.8121 2.0981 69.3085 2.70691 69.6247C3.42937 70 4.37852 70 6.27682 70H11.5435C13.4418 70 14.3909 70 15.1134 69.6247C15.7222 69.3085 16.2186 68.8121 16.5349 68.2032C16.9102 67.4808 16.9102 66.5316 16.9102 64.6333V59.3667C16.9102 57.4684 16.9102 56.5192 16.5349 55.7968C16.2186 55.1879 15.7222 54.6915 15.1134 54.3753C14.3909 54 13.4418 54 11.5435 54H6.27682C4.37852 54 3.42937 54 2.70691 54.3753C2.0981 54.6915 1.6017 55.1879 1.28544 55.7968ZM12.3771 62L12.0216 64.2222H10.2438V70H7.57715V64.2222H5.57715V62H7.57715V60.2222C7.57715 58.2222 8.86604 57.1111 10.6883 57.1111C11.266 57.1111 11.8883 57.2 12.466 57.2889V59.3333H11.4438C10.466 59.3333 10.2438 59.8222 10.2438 60.4444V62H12.3771Z"
              fill="#DF8317"
            />
            <g clip-path="url(#clip0_123_392)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.29423 83.7968C0.918945 84.5192 0.918945 85.4684 0.918945 87.3667V92.6333C0.918945 94.5316 0.918945 95.4808 1.29423 96.2032C1.61049 96.8121 2.10689 97.3085 2.7157 97.6247C3.43816 98 4.38731 98 6.28561 98H11.5523C13.4506 98 14.3997 98 15.1222 97.6247C15.731 97.3085 16.2274 96.8121 16.5437 96.2032C16.9189 95.4808 16.9189 94.5316 16.9189 92.6333V87.3667C16.9189 85.4684 16.9189 84.5192 16.5437 83.7968C16.2274 83.1879 15.731 82.6915 15.1222 82.3753C14.3997 82 13.4506 82 11.5523 82H6.28561C4.38731 82 3.43816 82 2.7157 82.3753C2.10689 82.6915 1.61049 83.1879 1.29423 83.7968ZM6.51133 84.217C7.13192 84.1888 7.33021 84.1819 8.91029 84.1819H8.90847C10.489 84.1819 10.6866 84.1888 11.3072 84.217C11.9266 84.2454 12.3496 84.3435 12.7205 84.4873C13.1035 84.6358 13.4271 84.8346 13.7507 85.1582C14.0744 85.4816 14.2732 85.8062 14.4222 86.1889C14.5653 86.5589 14.6634 86.9816 14.6925 87.601C14.7204 88.2216 14.7277 88.4199 14.7277 90.0001C14.7277 91.5802 14.7204 91.778 14.6925 92.3986C14.6634 93.0178 14.5653 93.4407 14.4222 93.8107C14.2732 94.1933 14.0744 94.5179 13.7507 94.8413C13.4275 95.1649 13.1034 95.3642 12.7208 95.5128C12.3507 95.6567 11.9274 95.7547 11.308 95.7831C10.6874 95.8113 10.4898 95.8182 8.90956 95.8182C7.32961 95.8182 7.13143 95.8113 6.51084 95.7831C5.89159 95.7547 5.46869 95.6567 5.09852 95.5128C4.71611 95.3642 4.39152 95.1649 4.06825 94.8413C3.74475 94.5179 3.54596 94.1933 3.39724 93.8106C3.25349 93.4407 3.15543 93.0179 3.12695 92.3985C3.09883 91.7779 3.0918 91.5802 3.0918 90.0001C3.0918 88.4199 3.09907 88.2215 3.12683 87.6009C3.1547 86.9818 3.25288 86.5589 3.39712 86.1888C3.54621 85.8062 3.74499 85.4816 4.06862 85.1582C4.392 84.8347 4.7166 84.6359 5.09925 84.4873C5.46918 84.3435 5.89195 84.2454 6.51133 84.217ZM8.71638 85.2303C8.59873 85.2303 8.48971 85.2302 8.38836 85.2304V85.2289C7.30403 85.2301 7.09604 85.2374 6.55933 85.2616C5.99207 85.2877 5.68408 85.3822 5.479 85.4622C5.20749 85.5679 5.01356 85.694 4.80993 85.8976C4.6063 86.1013 4.48 86.2952 4.37455 86.5667C4.29491 86.7718 4.20013 87.0797 4.17419 87.647C4.14631 88.2603 4.14073 88.4436 4.14073 89.9973C4.14073 91.551 4.14631 91.7352 4.17419 92.3486C4.20001 92.9158 4.29491 93.2237 4.37455 93.4286C4.48024 93.7002 4.6063 93.8936 4.80993 94.0973C5.01356 94.3009 5.20749 94.427 5.479 94.5324C5.6842 94.6121 5.99207 94.7069 6.55933 94.733C7.17264 94.7609 7.35676 94.767 8.91029 94.767C10.4637 94.767 10.6479 94.7609 11.2612 94.733C11.8285 94.7071 12.1366 94.6126 12.3415 94.5326C12.6131 94.4271 12.8064 94.301 13.01 94.0974C13.2137 93.8939 13.34 93.7006 13.4454 93.429C13.5251 93.2242 13.6198 92.9163 13.6458 92.349C13.6737 91.7357 13.6797 91.5515 13.6797 89.9987C13.6797 88.446 13.6737 88.2618 13.6458 87.6484C13.62 87.0812 13.5251 86.7733 13.4454 86.5684C13.3397 86.2969 13.2137 86.103 13.01 85.8993C12.8065 85.6957 12.613 85.5696 12.3415 85.4642C12.1364 85.3846 11.8285 85.2898 11.2612 85.2638C10.6478 85.2359 10.4637 85.2304 8.91029 85.2304C8.84315 85.2304 8.77856 85.2303 8.71638 85.2303ZM11.3177 86.8944C11.3177 86.5088 11.6304 86.1964 12.0159 86.1964V86.1962C12.4013 86.1962 12.7141 86.5089 12.7141 86.8944C12.7141 87.2798 12.4013 87.5926 12.0159 87.5926C11.6304 87.5926 11.3177 87.2798 11.3177 86.8944ZM5.9225 90.0001C5.9225 88.35 7.26021 87.0123 8.91017 87.0122C10.5602 87.0122 11.8976 88.35 11.8976 90.0001C11.8976 91.6501 10.5603 92.9873 8.91029 92.9873C7.26028 92.9873 5.9225 91.6501 5.9225 90.0001ZM10.8496 90.0001C10.8496 88.9289 9.98129 88.0607 8.91029 88.0607C7.83917 88.0607 6.97095 88.9289 6.97095 90.0001C6.97095 91.0711 7.83917 91.9395 8.91029 91.9395C9.98129 91.9395 10.8496 91.0711 10.8496 90.0001Z"
                fill="url(#paint0_radial_123_392)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.29423 83.7968C0.918945 84.5192 0.918945 85.4684 0.918945 87.3667V92.6333C0.918945 94.5316 0.918945 95.4808 1.29423 96.2032C1.61049 96.8121 2.10689 97.3085 2.7157 97.6247C3.43816 98 4.38731 98 6.28561 98H11.5523C13.4506 98 14.3997 98 15.1222 97.6247C15.731 97.3085 16.2274 96.8121 16.5437 96.2032C16.9189 95.4808 16.9189 94.5316 16.9189 92.6333V87.3667C16.9189 85.4684 16.9189 84.5192 16.5437 83.7968C16.2274 83.1879 15.731 82.6915 15.1222 82.3753C14.3997 82 13.4506 82 11.5523 82H6.28561C4.38731 82 3.43816 82 2.7157 82.3753C2.10689 82.6915 1.61049 83.1879 1.29423 83.7968ZM6.51133 84.217C7.13192 84.1888 7.33021 84.1819 8.91029 84.1819H8.90847C10.489 84.1819 10.6866 84.1888 11.3072 84.217C11.9266 84.2454 12.3496 84.3435 12.7205 84.4873C13.1035 84.6358 13.4271 84.8346 13.7507 85.1582C14.0744 85.4816 14.2732 85.8062 14.4222 86.1889C14.5653 86.5589 14.6634 86.9816 14.6925 87.601C14.7204 88.2216 14.7277 88.4199 14.7277 90.0001C14.7277 91.5802 14.7204 91.778 14.6925 92.3986C14.6634 93.0178 14.5653 93.4407 14.4222 93.8107C14.2732 94.1933 14.0744 94.5179 13.7507 94.8413C13.4275 95.1649 13.1034 95.3642 12.7208 95.5128C12.3507 95.6567 11.9274 95.7547 11.308 95.7831C10.6874 95.8113 10.4898 95.8182 8.90956 95.8182C7.32961 95.8182 7.13143 95.8113 6.51084 95.7831C5.89159 95.7547 5.46869 95.6567 5.09852 95.5128C4.71611 95.3642 4.39152 95.1649 4.06825 94.8413C3.74475 94.5179 3.54596 94.1933 3.39724 93.8106C3.25349 93.4407 3.15543 93.0179 3.12695 92.3985C3.09883 91.7779 3.0918 91.5802 3.0918 90.0001C3.0918 88.4199 3.09907 88.2215 3.12683 87.6009C3.1547 86.9818 3.25288 86.5589 3.39712 86.1888C3.54621 85.8062 3.74499 85.4816 4.06862 85.1582C4.392 84.8347 4.7166 84.6359 5.09925 84.4873C5.46918 84.3435 5.89195 84.2454 6.51133 84.217ZM8.71638 85.2303C8.59873 85.2303 8.48971 85.2302 8.38836 85.2304V85.2289C7.30403 85.2301 7.09604 85.2374 6.55933 85.2616C5.99207 85.2877 5.68408 85.3822 5.479 85.4622C5.20749 85.5679 5.01356 85.694 4.80993 85.8976C4.6063 86.1013 4.48 86.2952 4.37455 86.5667C4.29491 86.7718 4.20013 87.0797 4.17419 87.647C4.14631 88.2603 4.14073 88.4436 4.14073 89.9973C4.14073 91.551 4.14631 91.7352 4.17419 92.3486C4.20001 92.9158 4.29491 93.2237 4.37455 93.4286C4.48024 93.7002 4.6063 93.8936 4.80993 94.0973C5.01356 94.3009 5.20749 94.427 5.479 94.5324C5.6842 94.6121 5.99207 94.7069 6.55933 94.733C7.17264 94.7609 7.35676 94.767 8.91029 94.767C10.4637 94.767 10.6479 94.7609 11.2612 94.733C11.8285 94.7071 12.1366 94.6126 12.3415 94.5326C12.6131 94.4271 12.8064 94.301 13.01 94.0974C13.2137 93.8939 13.34 93.7006 13.4454 93.429C13.5251 93.2242 13.6198 92.9163 13.6458 92.349C13.6737 91.7357 13.6797 91.5515 13.6797 89.9987C13.6797 88.446 13.6737 88.2618 13.6458 87.6484C13.62 87.0812 13.5251 86.7733 13.4454 86.5684C13.3397 86.2969 13.2137 86.103 13.01 85.8993C12.8065 85.6957 12.613 85.5696 12.3415 85.4642C12.1364 85.3846 11.8285 85.2898 11.2612 85.2638C10.6478 85.2359 10.4637 85.2304 8.91029 85.2304C8.84315 85.2304 8.77856 85.2303 8.71638 85.2303ZM11.3177 86.8944C11.3177 86.5088 11.6304 86.1964 12.0159 86.1964V86.1962C12.4013 86.1962 12.7141 86.5089 12.7141 86.8944C12.7141 87.2798 12.4013 87.5926 12.0159 87.5926C11.6304 87.5926 11.3177 87.2798 11.3177 86.8944ZM5.9225 90.0001C5.9225 88.35 7.26021 87.0123 8.91017 87.0122C10.5602 87.0122 11.8976 88.35 11.8976 90.0001C11.8976 91.6501 10.5603 92.9873 8.91029 92.9873C7.26028 92.9873 5.9225 91.6501 5.9225 90.0001ZM10.8496 90.0001C10.8496 88.9289 9.98129 88.0607 8.91029 88.0607C7.83917 88.0607 6.97095 88.9289 6.97095 90.0001C6.97095 91.0711 7.83917 91.9395 8.91029 91.9395C9.98129 91.9395 10.8496 91.0711 10.8496 90.0001Z"
                fill="#DF8317"
              />
            </g>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.28544 111.797C0.910156 112.519 0.910156 113.468 0.910156 115.367V120.633C0.910156 122.532 0.910156 123.481 1.28544 124.203C1.6017 124.812 2.0981 125.308 2.70691 125.625C3.42937 126 4.37852 126 6.27682 126H11.5435C13.4418 126 14.3909 126 15.1134 125.625C15.7222 125.308 16.2186 124.812 16.5349 124.203C16.9102 123.481 16.9102 122.532 16.9102 120.633V115.367C16.9102 113.468 16.9102 112.519 16.5349 111.797C16.2186 111.188 15.7222 110.692 15.1134 110.375C14.3909 110 13.4418 110 11.5435 110H6.27682C4.37852 110 3.42937 110 2.70691 110.375C2.0981 110.692 1.6017 111.188 1.28544 111.797ZM13.3563 116.351C13.3563 116.251 13.355 116.151 13.3511 116.051C13.765 115.728 14.1233 115.324 14.408 114.865C14.0286 115.047 13.6194 115.169 13.1905 115.224C13.6289 114.942 13.9644 114.493 14.1233 113.957C13.7133 114.22 13.2603 114.411 12.7766 114.511C12.3903 114.066 11.8399 113.789 11.2305 113.789C10.06 113.789 9.11127 114.815 9.11127 116.083C9.11127 116.26 9.1298 116.437 9.16597 116.605C7.405 116.51 5.84298 115.596 4.7982 114.206C4.61474 114.547 4.51052 114.942 4.51052 115.36C4.51052 116.155 4.88477 116.859 5.4541 117.273C5.10656 117.259 4.77926 117.155 4.4933 116.987V117.014C4.4933 118.127 5.22413 119.053 6.1944 119.262C6.01525 119.317 5.82834 119.344 5.63584 119.344C5.49932 119.344 5.36582 119.33 5.2362 119.303C5.50622 120.212 6.28916 120.879 7.21637 120.893C6.49114 121.511 5.57684 121.879 4.58417 121.879C4.4132 121.879 4.24481 121.865 4.07901 121.847C5.01698 122.497 6.13024 122.878 7.32748 122.878C11.225 122.878 13.3563 119.38 13.3563 116.351Z"
              fill="#DF8317"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.28544 139.797C0.910156 140.519 0.910156 141.468 0.910156 143.367V148.633C0.910156 150.532 0.910156 151.481 1.28544 152.203C1.6017 152.812 2.0981 153.308 2.70691 153.625C3.42937 154 4.37852 154 6.27682 154H11.5435C13.4418 154 14.3909 154 15.1134 153.625C15.7222 153.308 16.2186 152.812 16.5349 152.203C16.9102 151.481 16.9102 150.532 16.9102 148.633V143.367C16.9102 141.468 16.9102 140.519 16.5349 139.797C16.2186 139.188 15.7222 138.692 15.1134 138.375C14.3909 138 13.4418 138 11.5435 138H6.27682C4.37852 138 3.42937 138 2.70691 138.375C2.0981 138.692 1.6017 139.188 1.28544 139.797ZM13.1184 141.86C12.1105 140.851 10.7908 140.267 9.37455 140.197L9.09008 140.19C5.95127 140.19 3.39667 142.744 3.39541 145.882C3.39499 146.885 3.65722 147.864 4.15556 148.727L3.34766 151.677L6.36647 150.885C7.19824 151.339 8.13471 151.578 9.0878 151.578H9.09016C12.2286 151.578 14.7835 149.025 14.7847 145.886C14.7853 144.366 14.1935 142.936 13.1184 141.86ZM6.67918 149.957L6.50632 149.855L4.71494 150.325L5.19309 148.579L5.08055 148.4C4.60676 147.647 4.35653 146.776 4.35689 145.882C4.35793 143.274 6.48123 141.152 9.09202 141.152C10.3562 141.152 11.5446 141.645 12.4383 142.539C13.3319 143.433 13.8237 144.622 13.8232 145.886C13.8222 148.495 11.6989 150.617 9.09013 150.617H9.08821C8.23889 150.617 7.40589 150.388 6.67918 149.957ZM11.7641 147.112C11.8634 147.16 11.9304 147.192 11.959 147.24C11.9946 147.299 11.9946 147.584 11.8761 147.916C11.7575 148.248 11.189 148.552 10.9156 148.592C10.6705 148.629 10.3603 148.644 10.0194 148.536C9.81278 148.47 9.54774 148.383 9.20826 148.236C7.87437 147.661 6.97291 146.369 6.80251 146.124C6.79057 146.107 6.78222 146.095 6.77756 146.089L6.77631 146.087C6.70067 145.986 6.19654 145.314 6.19654 144.618C6.19654 143.963 6.51857 143.619 6.66675 143.461C6.67688 143.45 6.6862 143.44 6.69455 143.431C6.82498 143.289 6.97913 143.253 7.074 143.253C7.16884 143.253 7.26379 143.254 7.34669 143.258C7.35691 143.259 7.36755 143.259 7.37855 143.259C7.46147 143.258 7.56486 143.258 7.66685 143.503C7.70606 143.597 7.76342 143.736 7.82392 143.883C7.94639 144.181 8.08174 144.511 8.10556 144.559C8.14112 144.63 8.16484 144.713 8.11742 144.808C8.11028 144.822 8.10368 144.835 8.09738 144.848C8.06177 144.921 8.03557 144.974 7.97513 145.045C7.95142 145.073 7.92692 145.102 7.90241 145.132C7.85339 145.192 7.80435 145.252 7.76167 145.294C7.69044 145.365 7.61631 145.442 7.69929 145.584C7.7823 145.727 8.06786 146.192 8.49087 146.57C8.94563 146.975 9.34087 147.146 9.54116 147.233C9.58024 147.25 9.6119 147.264 9.63513 147.275C9.77739 147.347 9.8604 147.335 9.94338 147.24C10.0264 147.145 10.2991 146.825 10.3939 146.682C10.4888 146.54 10.5837 146.564 10.7141 146.611C10.8445 146.658 11.5441 147.003 11.6864 147.074C11.7141 147.088 11.7401 147.1 11.7641 147.112Z"
              fill="#DF8317"
            />
            <g clip-path="url(#clip1_123_392)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.28544 167.797C0.910156 168.519 0.910156 169.468 0.910156 171.367V176.633C0.910156 178.532 0.910156 179.481 1.28544 180.203C1.6017 180.812 2.0981 181.308 2.70691 181.625C3.42937 182 4.37852 182 6.27682 182H11.5435C13.4418 182 14.3909 182 15.1134 181.625C15.7222 181.308 16.2186 180.812 16.5349 180.203C16.9102 179.481 16.9102 178.532 16.9102 176.633V171.367C16.9102 169.468 16.9102 168.519 16.5349 167.797C16.2186 167.188 15.7222 166.692 15.1134 166.375C14.3909 166 13.4418 166 11.5435 166H6.27682C4.37852 166 3.42937 166 2.70691 166.375C2.0981 166.692 1.6017 167.188 1.28544 167.797ZM3.49399 173.457L13.1267 169.742C13.5667 169.542 13.9913 169.848 13.8234 170.521L12.183 178.251C12.0685 178.801 11.7365 178.932 11.2766 178.678L8.77763 176.832L8.72828 176.88C8.16148 177.431 7.66253 177.916 7.57649 178L7.56727 178.009C7.43228 178.141 7.32083 178.25 7.0764 178.25C6.82266 178.25 6.80149 178.175 6.75051 177.994C6.73641 177.944 6.72003 177.886 6.69582 177.819L5.77659 175.001L3.37416 174.251C2.84044 174.088 2.83654 173.721 3.49399 173.457ZM11.5687 171.412L6.15363 174.829L7.06613 177.626L7.24667 175.701L11.8834 171.517C12.0869 171.337 11.8391 171.249 11.5687 171.412Z"
                fill="#DF8317"
              />
            </g>
            <line
              x1="8.41016"
              y1="236"
              x2="8.41015"
              y2="198"
              stroke="#DF8317"
            />
            <defs>
              <radialGradient
                id="paint0_radial_123_392"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(5.16897 99.2323) rotate(-90) scale(15.8572 14.7484)"
              >
                <stop stop-color="#FFDD55" />
                <stop offset="0.1" stop-color="#FFDD55" />
                <stop offset="0.5" stop-color="#FF543E" />
                <stop offset="1" stop-color="#C837AB" />
              </radialGradient>
              <clipPath id="clip0_123_392">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(0.910156 82)"
                />
              </clipPath>
              <clipPath id="clip1_123_392">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(0.910156 166)"
                />
              </clipPath>
            </defs>
          </svg>

          <div
            class="animate__animated animate__fadeInDown w-50 m-5 p-3"
            data-il8n="task"
            style="background-color: #00000011"
          >
            <h1 class="w-100">{{ $t('headerTitle') }}</h1>
            <p class="text mt-4">
              {{ $t('headerText') }}
            </p>
            <div class="mt-5">
              <router-link to="/Contact">
                <button>{{ $t('SeeMore') }}</button>
              </router-link>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="about container" id="system-section">
      <div
        class="row pt-5 pb-5 position-relative d-flex justify-content-center align-items-center"
      >
        <div
          class="col-6 p-4 position-relative justify-content-center"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <p
            style="
              color: #df8317;
              background-color: #fee6c963;
              width: 20%;
              padding: 3px 20px;
              border-radius: 50px;
            "
          >
            {{ $t('about_us') }}
          </p>
          <h1 style="font-weight: bold" class="mt-4">
            {{ $t('abouth') }}
            <span style="color: #df8317">{{ $t('abouthh') }}</span>
          </h1>
          <p class="mt-4">{{ $t('aboutinfo') }}</p>
          <router-link to="/Contact">
            <button class="mt-4">{{ $t('SeeMore') }}</button>
          </router-link>
          <router-link to="/">
            <button
              class="mt-4"
              style="background-color: transparent; color: #404852"
            >
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 0C16.0116 0 20.5 4.48625 20.5 10.0058C20.5 15.5137 16.0116 20 10.5 20C4.98842 20 0.5 15.5137 0.5 10.0058C0.5 4.48625 4.98842 0 10.5 0ZM9.361 6.02991C9.14865 6.02991 8.94595 6.07815 8.7529 6.17463C8.51158 6.3097 8.31853 6.52195 8.21236 6.77279C8.14479 6.94645 8.03861 7.46744 8.03861 7.47709C7.93243 8.04631 7.87452 8.9725 7.87452 9.99518C7.87452 10.9706 7.93243 11.8572 8.01931 12.4361C8.02896 12.4457 8.13514 13.0921 8.25097 13.314C8.46332 13.7192 8.87838 13.9701 9.32239 13.9701H9.361C9.65058 13.9604 10.2587 13.7096 10.2587 13.7C11.2819 13.2754 13.2992 11.9537 14.11 11.0757L14.168 11.0178C14.2741 10.9117 14.4093 10.7477 14.4382 10.7091C14.5927 10.5065 14.6699 10.2557 14.6699 10.0058C14.6699 9.72504 14.583 9.46454 14.4189 9.25229C14.3803 9.2137 14.2355 9.04969 14.1004 8.91462C13.3089 8.06561 11.2432 6.67631 10.1622 6.25181C9.99807 6.18524 9.58301 6.03956 9.361 6.02991Z"
                  fill="#404852"
                />
              </svg>

              {{ $t('WatchVideo') }}
            </button>
          </router-link>
        </div>
        <div class="col-6" data-aos="fade-up" data-aos-duration="2000">
          <img :src="imageUrl1" alt="image" class="img-fluid" />
        </div>
      </div>
    </div>

    <SlickSlider id="servies-section" />

    <div class="data container hidden-section mt-5 mb-5" data-il8n="egyption">
      <div
        class="process text-center"
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        <h1 style="font-weight: bold">
          {{ $t('processinfo') }}
          <span style="color: #df8317">{{ $t('processinfoo') }} </span>
        </h1>
        <p>{{ $t('processdescription') }}</p>
      </div>
      <div class="row d-flex justify-content-center text-center mt-5">
        <div class="col-sm-3">
          <div
            class="svg text-center justify-content-center"
            style="
              background-color: #202020;
              color: #fff;
              padding: 10px;
              border-radius: 50%;
              width: 40px;
              height: 40px;
              z-index: 999;
              position: absolute;
              margin: 0 16%;
            "
          >
            1
          </div>
          <img
            :src="imageUrl2"
            alt=""
            style="margin: -6% 0 0; z-index: 0; position: relative"
          />

          <h3>{{ $t('process1') }}</h3>
          <p>
            {{ $t('processp1') }}
          </p>
        </div>
        <div class="col-sm-1">
          <svg
            width="71"
            height="19"
            viewBox="0 0 71 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style="margin-top: 100%"
          >
            <path
              d="M22.0625 4.28175C12.9384 7.43194 3.39493 13.0237 0.858418 17.4456C0.0936503 19.4298 3.50134 17.8834 4.8785 16.7109C10.821 11.6514 14.3515 9.8162 20.9231 7.30584C35.91 1.58081 51.5208 0.60491 62.0047 8.93766C62.8731 9.87872 62.5525 10.1256 60.2989 10.0903C58.3237 10.109 57.7399 10.3976 58.1394 11.2168C58.8053 12.5821 60.2694 12.7425 66.5006 12.3439C70.1425 12.0612 70.6385 11.7865 70.3961 10.2561C69.987 7.67337 65.4935 2.01152 64.3412 2.6843C63.8452 2.95897 63.6913 4.25806 63.976 5.48768C64.2606 6.71731 64.2922 7.48404 63.5742 6.92412C52.634 -0.266099 36.8599 -0.827188 22.0625 4.28175Z"
              fill="#DF8317"
            />
          </svg>
        </div>

        <div class="col-sm-3">
          <div
            class="svg text-center justify-content-center"
            style="
              background-color: #df8317;
              color: #fff;
              padding: 10px;
              border-radius: 50%;
              width: 40px;
              height: 40px;
              z-index: 999;
              position: absolute;
              margin: 0 16%;
            "
          >
            2
          </div>
          <img
            :src="imageUrl3"
            alt=""
            style="margin: -6% 0 0; z-index: 0; position: relative"
          />
          <h3>{{ $t('process2') }}</h3>
          <p>
            {{ $t('processp2') }}
          </p>
        </div>
        <div class="col-sm-1">
          <svg
            width="71"
            height="19"
            viewBox="0 0 71 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style="margin-top: 100%"
          >
            <path
              d="M22.0625 4.28175C12.9384 7.43194 3.39493 13.0237 0.858418 17.4456C0.0936503 19.4298 3.50134 17.8834 4.8785 16.7109C10.821 11.6514 14.3515 9.8162 20.9231 7.30584C35.91 1.58081 51.5208 0.60491 62.0047 8.93766C62.8731 9.87872 62.5525 10.1256 60.2989 10.0903C58.3237 10.109 57.7399 10.3976 58.1394 11.2168C58.8053 12.5821 60.2694 12.7425 66.5006 12.3439C70.1425 12.0612 70.6385 11.7865 70.3961 10.2561C69.987 7.67337 65.4935 2.01152 64.3412 2.6843C63.8452 2.95897 63.6913 4.25806 63.976 5.48768C64.2606 6.71731 64.2922 7.48404 63.5742 6.92412C52.634 -0.266099 36.8599 -0.827188 22.0625 4.28175Z"
              fill="#DF8317"
            />
          </svg>
        </div>

        <div class="col-sm-3">
          <div
            class="svg text-center justify-content-center"
            style="
              background-color: #202020;
              color: #fff;
              padding: 10px;
              border-radius: 50%;
              width: 40px;
              height: 40px;
              z-index: 999;
              position: absolute;
              margin: 0 16%;
            "
          >
            3
          </div>
          <img
            :src="imageUrl4"
            alt=""
            style="margin: -6% 0 0; z-index: 0; position: relative"
          />

          <h3>{{ $t('process3') }}</h3>
          <p>
            {{ $t('processp3') }}
          </p>
        </div>
      </div>
    </div>

    <div
      class="Portofolio p-5"
      data-aos="fade-up"
      data-aos-duration="3000"
      style="background-color: #202020"
    >
      <div class="container" id="Portofolio-section">
        <div
          class="aos-init aos-animate animate__animated animate__fadeInDown d-flex justify-content-between"
          data-il8n="Portofolio"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1 style="color: #fff">
            {{ $t('OurrPortofolio') }}
            <span style="color: #df8317">{{ $t('OurPortofolio') }}</span>
          </h1>
          <a href="/" style="color: #df8317; text-decoration: none"
            >{{ $t('ViewPortofolio') }}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4297 5.92999L20.4997 12L14.4297 18.07"
                stroke="#DF8317"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.5 12H20.33"
                stroke="#DF8317"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>

        <div class="row mt-5 mb-4">
          <div class="col-sm-4 col-4">
            <div
              class="card"
              style="border: none; background-color: #4d4e4e4d; color: #ffffff"
            >
              <img
                class="card-img-top img-fluid"
                :src="imageUrl5"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">
                  {{ $t('VPNMobile') }}
                </h5>
                <p class="card-text">{{ $t('MobileApp') }}</p>
              </div>
            </div>
          </div>

          <div class="col-sm-4 col-4">
            <div
              class="card"
              style="border: none; background-color: #4d4e4e4d; color: #ffffff"
            >
              <img
                class="card-img-top img-fluid"
                :src="imageUrl6"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">
                  {{ $t('StreamingMobile') }}
                </h5>
                <p class="card-text">{{ $t('MobileApp') }}</p>
              </div>
            </div>
          </div>

          <div class="col-sm-4 col-4">
            <div
              class="card"
              style="border: none; background-color: #4d4e4e4d; color: #ffffff"
            >
              <img
                class="card-img-top img-fluid"
                :src="imageUrl7"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">
                  {{ $t('CreativeDigitalAgency') }}
                </h5>
                <p class="card-text">{{ $t('LandingPage') }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-sm-4 col-4">
            <div
              class="card"
              style="border: none; background-color: #4d4e4e4d; color: #ffffff"
            >
              <img
                class="card-img-top img-fluid"
                :src="imageUrl8"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">
                  {{ $t('PodcastMobile') }}
                </h5>
                <p class="card-text">{{ $t('MobileApp') }}</p>
              </div>
            </div>
          </div>

          <div class="col-sm-4 col-4">
            <div
              class="card"
              style="border: none; background-color: #4d4e4e4d; color: #ffffff"
            >
              <img
                class="card-img-top img-fluid"
                :src="imageUrl9"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">
                  {{ $t('MultimediaDesign') }}
                </h5>
                <p class="card-text">{{ $t('WebDesign') }}</p>
              </div>
            </div>
          </div>

          <div class="col-sm-4 col-4">
            <div
              class="card"
              style="border: none; background-color: #4d4e4e4d; color: #ffffff"
            >
              <img
                class="card-img-top img-fluid"
                :src="imageUrl10"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">
                  {{ $t('ParkingMobile') }}
                </h5>
                <p class="card-text">{{ $t('MobileApp') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="Member container text-center pt-5 pb-5"
      id="members-section"
      data-aos="fade-right"
      data-aos-duration="2000"
    >
      <div
        style="font-weight: bold"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
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
        {{ $t('TeamMember') }}
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
          <span style="color: #df8317">{{ $t('View') }}</span>
          {{ $t('Our Creative Team Members') }}
        </h1>
      </div>

      <teamSlider />
    </div>

    <div class="text-center m-5" id="partners-section">
      <h1 style="font-weight: bold">
        <span style="color: #df8317">{{ $t('Our') }}</span>

        {{ $t('partners') }}
      </h1>
      <p style="color: #696984">Over 20 Companies Working with us..</p>
      <ImageSlider class="mt-5" />
    </div>

    <Feedback
      id="feedback-section"
      data-aos="fade-up"
      data-aos-duration="2000"
    />
  </div>
</template>

<script>
import ScrollReveal from 'scrollreveal'
import ImageSlider from '../common/ImageSlider.vue'
import teamSlider from '../common/teamSlider.vue'

import Swiper from 'swiper'
import 'swiper/swiper-bundle.min.css'

import SlickSlider from './SlickSlider.vue'
import Feedback from './TheFeedback.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted, nextTick } from 'vue'

export default {
  name: 'ThePage',
  components: { ImageSlider, SlickSlider, Feedback, teamSlider },

  data() {
    return {
      mobileMenu: false,
      currentLanguage: 'English',
      imageUrl: require('@/assets/logo.png'),
      imageUrl1: require('@/assets/Group 1261152760.png'),
      imageUrl2: require('@/assets/process3.png'),
      imageUrl3: require('@/assets/process2.png'),
      imageUrl4: require('@/assets/process1.png'),
      imageUrl5: require('@/assets/Portofolio1.png'),
      imageUrl6: require('@/assets/Portofolio2.png'),
      imageUrl7: require('@/assets/Portofolio3.png'),
      imageUrl8: require('@/assets/Portofolio4.png'),
      imageUrl9: require('@/assets/Portofolio5.png'),
      imageUrl10: require('@/assets/Portofolio6.png'),

      imageUrl12: require('@/assets/Group 19 (1).png'),
      imageUrl13: require('@/assets/Ellipse 5.png'),
      imageUrl14: require('@/assets/Group 19 (2).png'),
      imageUrl15: require('@/assets/Group 19.png'),
    }
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
  },
}
</script>

<style scoped>
@import 'aos/dist/aos.css';

.navbarHeader {
  height: 100vh;
  position: relative;
  background-image: url('/src/assets/header\ bg.png');
  background-size: cover;

  background-position: center;
  background-repeat: no-repeat;
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

.header {
  position: relative;
  z-index: 2;
  padding: 20px;
  color: white;
}

.ThePage {
  text-align: start;
  overflow: hidden;
  width: 100%;
}
.header {
  padding: 80px 0;
  width: 100%;
  z-index: 1;
}

.header .row {
  justify-content: center;
  padding: 80px 180px;
  align-items: center;
}
.header h1 {
  font-weight: bold;
  font-size: 52px;
  width: 70%;

  color: #ffffff;
}

.header .text {
  color: #ffffff;
  font-size: 22px;
  width: 70%;
  margin-top: 30px;
}
.header button,
.about button {
  background-color: #df8317;
  color: #e5e7f2;
  padding: 12px 5%;
  border-radius: 10px;
  border: none;
  transition: padding 0.3s, box-shadow 0.3s, font-size 0.3s;
}
.header button,
.about button {
  background-color: #df8317;
  color: #e5e7f2;
  padding: 14px 15%;
  border-radius: 10px;
  border: none;
  transition: padding 0.3s, box-shadow 0.3s, font-size 0.3s,
    background-color 0.5s, color 0.5s;
}

.header .View {
  color: #df8317;
  background-color: #ffffff;
  padding: 14px 5%;
  border-radius: 10px;
  border: none;
  transition: padding 0.3s, box-shadow 0.3s, font-size 0.3s,
    background-color 0.5s, color 0.5s;
}

button:hover {
  box-shadow: inset 0px 0px 15px rgba(49, 49, 49, 0.717);
  transform: scale(1.05);
  transition: box-shadow 0.5s, transform 0.3s;
}

@keyframes disappearDust {
  0% {
    box-shadow: inset 0px 0px 15px rgba(49, 49, 49, 0.717);
  }
  100% {
    box-shadow: inset 0px 0px 0px rgba(49, 49, 49, 0);
  }
}

button:hover {
  animation: disappearDust 1.5s forwards;
}

@media (max-width: 480px) {
  .header {
    height: auto;
    padding: 10px;
  }
  .header .row {
    justify-content: center;
    padding: 40px;
  }
  .header img {
    margin: 80px 0;
  }

  .header h1 {
    font-size: 18px;
    font-weight: bold;
  }

  .header p,
  .header .text {
    font-size: 12px;
  }

  button {
    padding: 8px 24px;
    font-size: 10px;
  }
  .View {
    padding: 8px 24px;
    font-size: 10px;
    margin-bottom: 40px;
  }
}
@media (max-width: 768px) {
  .img-fluid {
    max-width: 100%;
    height: auto;
  }

  h1 {
    font-size: 16px;
  }

  p {
    font-size: 10px;
  }

  .btn {
    width: 100%;
    padding: 0.75rem;
  }
  .about svg {
    width: 30%;
  }
}
.Process {
  background-repeat: no-repeat;
  background-size: cover;
  padding: 80px;
}
@media (max-width: 768px) {
  .text-center h1 {
    font-size: 1.5rem;
  }
  .Process {
    padding: 40px;
  }
  .Planing,
  .Analysis,
  .Devlopment,
  .Review {
    height: 26vh !important;
  }

  .Planing h2,
  .Analysis h2,
  .Devlopment h2,
  .Review h2 {
    font-size: 16px;
  }

  .Planing p,
  .Analysis p,
  .Devlopment p,
  .Review p {
    font-size: 10px !important;
  }
}

.Review {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background-image: url(../../assets/Review.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  transition: 0.2s ease-in-out;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.Devlopment {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background-image: url(../../assets/Devlopment.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  transition: 0.2s ease-in-out;
  height: 100%;
  height: 400px;
  overflow: hidden;
}
.Analysis {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background-image: url(../../assets/Analysis.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  transition: 0.2s ease-in-out;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
@media (max-width: 1368px) {
  .Portfolio span {
    padding: 0 10px !important;
    font-size: 12px !important;
    margin: 1px !important;
  }

  .navbarHeader {
    height: 60vh;
    background-size: cover;
  }
}
@media (max-width: 576px) {
  .Portfolio {
    padding: 0 40px;
  }
  .Portfolio svg {
    width: 20%;
  }
  .Portfolio p {
    font-size: 10px !important;
  }
  .Portfolio span {
    padding: 0 2px !important;
    font-size: 7px !important;
    margin: 1px !important;
  }
  .Portfolio h1 {
    font-size: 18px;
    margin: 5px !important;
  }
}

.card-text {
  color: #858585;
}
.card-title {
  font-weight: bold;
}

.image-container {
  position: relative;
}

.image-container img {
  width: 100%;
  height: auto;
  transition: opacity 0.3s ease-in-out;
}

.image-container:hover img {
  opacity: 0.3;
}

.image-container:hover .overlay {
  opacity: 1;
}
</style>

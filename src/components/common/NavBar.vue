<template>
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
        <nav
          class="navigation d-flex justify-content-between align-content-center"
        >
          <router-link to="/ThePage" class="logo w-50">
            <div class="d-flex justify-content-start ml-5 mr-5">
              <div v-if="isScrolled">
                <svg
                  width="155"
                  height="100"
                  viewBox="0 0 493 180"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_189_3130)">
                    <path
                      d="M68.7313 9.13951L11.7733 60.4247C-2.83036 73.5739 -4.00943 96.072 9.13975 110.676L60.425 167.634C73.5741 182.237 96.0722 183.416 110.676 170.267L167.634 118.982C182.238 105.833 183.417 83.3347 170.267 68.731L118.982 11.773C105.833 -2.8306 83.3349 -4.00967 68.7313 9.13951Z"
                      fill="#DF8317"
                    />
                    <path
                      d="M136.336 89.7029L133.139 83.8329H112.873L126.594 58.9119L119.498 47.7039L99.5833 83.8329H59.6343L73.1353 59.3679H86.4713L76.2123 77.9999H89.5123L106.214 47.7029H66.2503L43.0703 89.7029L46.2583 95.4969H66.5763L52.8123 120.493L59.9093 131.703L79.8673 95.4969H119.815L106.271 120.039H92.9353L103.237 101.33H89.9383L73.1933 131.704H113.157L136.336 89.7029Z"
                      fill="white"
                    />
                    <path
                      d="M253.657 33.6948V84.0141H244.671V60.9392H212.324V84.0141H203.338V33.6948H212.324V51.9536H244.671V33.6948H253.657Z"
                      fill="black"
                    />
                    <path
                      d="M309.287 84.0141H299.223L294.622 75.0284L283.624 53.4629L272.626 75.0284L268.025 84.0141H257.962L262.562 75.0284L283.624 33.6948L304.686 75.0284L309.287 84.0141Z"
                      fill="black"
                    />
                    <path
                      d="M348.242 47.6403V47.3529C348.233 46.1354 347.746 44.9702 346.885 44.1092C346.024 43.2483 344.859 42.7608 343.641 42.7523H323.226C322.008 42.7608 320.843 43.2483 319.982 44.1092C319.121 44.9702 318.634 46.1354 318.625 47.3529V47.6403C318.633 48.8579 319.121 50.0232 319.982 50.8842C320.843 51.7451 322.008 52.2325 323.226 52.2409H341.341C343.547 52.2368 345.73 52.6953 347.748 53.5869C349.766 54.4784 351.575 55.7832 353.058 57.417C353.273 57.6325 353.417 57.848 353.632 58.0634C355.538 60.3907 356.743 63.211 357.109 66.1964C357.474 69.1818 356.985 72.2096 355.697 74.9278C354.41 77.646 352.377 79.9429 349.836 81.5514C347.294 83.1599 344.349 84.0139 341.341 84.0141H325.598C321.385 84.0128 317.345 82.3386 314.366 79.3596C311.387 76.3805 309.713 72.3405 309.711 68.1275H318.697C318.697 69.9576 319.425 71.7126 320.719 73.0067C322.013 74.3008 323.768 75.028 325.598 75.0284H341.341C342.253 75.0379 343.158 74.8664 344.004 74.5239C344.849 74.1813 345.619 73.6745 346.267 73.0328C346.916 72.391 347.43 71.6271 347.782 70.7851C348.133 69.9431 348.314 69.0398 348.314 68.1275C348.314 67.2151 348.133 66.3118 347.782 65.4698C347.43 64.6279 346.916 63.8639 346.267 63.2222C345.619 62.5804 344.849 62.0736 344.004 61.7311C343.158 61.3885 342.253 61.2171 341.341 61.2266H323.226C319.709 61.2376 316.329 59.87 313.809 57.417C313.157 56.7633 312.578 56.0401 312.083 55.2603C310.521 53.0012 309.692 50.3153 309.711 47.5685V47.2811C309.704 43.6881 311.124 40.2393 313.658 37.6919C316.191 35.1446 319.633 33.707 323.226 33.6948H343.641C347.241 33.7044 350.692 35.1388 353.237 37.6847C355.783 40.2306 357.217 43.6808 357.227 47.2811V47.5685L348.242 47.6403Z"
                      fill="black"
                    />
                    <path
                      d="M414.726 33.6948V84.0141H405.74V60.9392H373.392V84.0141H364.406V33.6948H373.392V51.9536H405.74V33.6948H414.726Z"
                      fill="black"
                    />
                    <path
                      d="M241.869 109.266V108.979C241.86 107.762 241.373 106.596 240.512 105.735C239.651 104.874 238.486 104.387 237.268 104.379H216.853C215.635 104.387 214.47 104.874 213.609 105.735C212.748 106.596 212.261 107.762 212.252 108.979V109.266C212.26 110.484 212.748 111.649 213.609 112.51C214.47 113.371 215.635 113.859 216.853 113.867H234.968C237.174 113.863 239.357 114.322 241.375 115.213C243.393 116.105 245.202 117.409 246.685 119.043C246.9 119.259 247.044 119.474 247.259 119.69C249.165 122.017 250.37 124.837 250.736 127.823C251.101 130.808 250.612 133.836 249.324 136.554C248.037 139.272 246.004 141.569 243.463 143.178C240.921 144.786 237.975 145.64 234.968 145.64H219.225C215.012 145.639 210.972 143.965 207.993 140.986C205.014 138.007 203.339 133.967 203.338 129.754H212.324C212.324 131.584 213.052 133.339 214.346 134.633C215.64 135.927 217.395 136.654 219.225 136.655H234.968C235.88 136.664 236.785 136.493 237.631 136.15C238.476 135.807 239.245 135.301 239.894 134.659C240.542 134.017 241.057 133.253 241.408 132.411C241.76 131.569 241.94 130.666 241.94 129.754C241.94 128.841 241.76 127.938 241.408 127.096C241.057 126.254 240.542 125.49 239.894 124.849C239.245 124.207 238.476 123.7 237.631 123.357C236.785 123.015 235.88 122.843 234.968 122.853H216.853C213.336 122.864 209.956 121.496 207.436 119.043C206.784 118.39 206.205 117.666 205.71 116.887C204.148 114.627 203.319 111.942 203.338 109.195V108.907C203.331 105.314 204.751 101.866 207.285 99.3181C209.818 96.7708 213.26 95.3332 216.853 95.321H237.268C240.868 95.3306 244.318 96.7651 246.864 99.3109C249.41 101.857 250.844 105.307 250.853 108.907V109.195L241.869 109.266Z"
                      fill="black"
                    />
                    <path
                      d="M305.909 95.3928V104.379H285.278V145.712H276.292V104.379H255.661V95.3928H305.909Z"
                      fill="black"
                    />
                    <path
                      d="M363.479 95.321V120.481C363.479 127.153 360.829 133.553 356.11 138.271C351.392 142.99 344.993 145.64 338.32 145.64C331.647 145.64 325.248 142.99 320.529 138.271C315.811 133.553 313.16 127.153 313.16 120.481V95.321H322.146V120.481C322.146 122.605 322.564 124.708 323.377 126.67C324.19 128.632 325.381 130.415 326.883 131.917C328.385 133.419 330.168 134.611 332.13 135.423C334.093 136.236 336.196 136.655 338.32 136.655C340.444 136.655 342.547 136.236 344.509 135.423C346.472 134.611 348.255 133.419 349.756 131.917C351.258 130.415 352.45 128.632 353.263 126.67C354.075 124.708 354.494 122.605 354.494 120.481V95.321H363.479Z"
                      fill="black"
                    />
                    <path
                      d="M395.747 95.3929C400.542 95.3798 405.24 96.7409 409.285 99.3148C413.33 101.889 416.553 105.568 418.573 109.917C420.592 114.265 421.323 119.102 420.679 123.853C420.036 128.604 418.044 133.072 414.94 136.726C414.509 137.23 414.006 137.733 413.502 138.237C411.197 140.587 408.445 142.452 405.408 143.724C402.371 144.995 399.111 145.647 395.819 145.64H370.659V95.321H395.819L395.747 95.3929ZM411.921 120.552C411.915 116.265 410.208 112.155 407.177 109.123C404.145 106.091 400.035 104.385 395.747 104.379H379.573V136.726H395.747C400.035 136.72 404.145 135.014 407.177 131.982C410.208 128.95 411.915 124.84 411.921 120.552Z"
                      fill="black"
                    />
                    <path
                      d="M428.158 145.64V95.321H437.144V145.64H428.158Z"
                      fill="black"
                    />
                    <path
                      d="M492.924 120.481C492.924 125.457 491.448 130.321 488.684 134.458C485.919 138.596 481.99 141.82 477.392 143.724C472.795 145.629 467.736 146.127 462.856 145.156C457.976 144.185 453.493 141.789 449.974 138.27C446.456 134.752 444.059 130.269 443.089 125.388C442.118 120.508 442.616 115.449 444.521 110.852C446.425 106.255 449.65 102.325 453.787 99.5609C457.925 96.7964 462.789 95.321 467.765 95.321C474.436 95.3284 480.831 97.9816 485.547 102.698C490.264 107.415 492.917 113.81 492.924 120.481ZM483.939 120.481C483.939 117.282 482.991 114.154 481.213 111.495C479.436 108.835 476.91 106.761 473.955 105.537C470.999 104.313 467.747 103.993 464.609 104.617C461.472 105.241 458.59 106.781 456.328 109.043C454.066 111.305 452.525 114.187 451.901 117.325C451.277 120.462 451.597 123.715 452.822 126.67C454.046 129.626 456.119 132.152 458.779 133.929C461.439 135.706 464.566 136.655 467.765 136.655C472.053 136.648 476.163 134.942 479.195 131.91C482.226 128.878 483.933 124.768 483.939 120.481Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_189_3130">
                      <rect width="492.924" height="179.407" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div v-else>
                <svg
                  width="155"
                  height="100"
                  viewBox="0 0 493 180"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_189_3143)">
                    <path
                      d="M68.7313 9.13951L11.7733 60.4247C-2.83036 73.5739 -4.00943 96.072 9.13975 110.676L60.425 167.634C73.5741 182.237 96.0722 183.416 110.676 170.267L167.634 118.982C182.238 105.833 183.417 83.3347 170.267 68.731L118.982 11.773C105.833 -2.8306 83.3349 -4.00967 68.7313 9.13951Z"
                      fill="#DF8317"
                    />
                    <path
                      d="M136.336 89.7029L133.139 83.8329H112.873L126.594 58.9119L119.498 47.7039L99.5833 83.8329H59.6343L73.1353 59.3679H86.4713L76.2123 77.9999H89.5123L106.214 47.7029H66.2503L43.0703 89.7029L46.2583 95.4969H66.5763L52.8123 120.493L59.9093 131.703L79.8673 95.4969H119.815L106.271 120.039H92.9353L103.237 101.33H89.9383L73.1933 131.704H113.157L136.336 89.7029Z"
                      fill="white"
                    />
                    <path
                      d="M253.657 33.6948V84.0141H244.671V60.9392H212.324V84.0141H203.338V33.6948H212.324V51.9536H244.671V33.6948H253.657Z"
                      fill="white"
                    />
                    <path
                      d="M309.287 84.0141H299.223L294.622 75.0284L283.624 53.4629L272.626 75.0284L268.025 84.0141H257.962L262.562 75.0284L283.624 33.6948L304.686 75.0284L309.287 84.0141Z"
                      fill="white"
                    />
                    <path
                      d="M348.242 47.6403V47.3529C348.233 46.1354 347.746 44.9702 346.885 44.1092C346.024 43.2483 344.859 42.7608 343.641 42.7523H323.226C322.008 42.7608 320.843 43.2483 319.982 44.1092C319.121 44.9702 318.634 46.1354 318.625 47.3529V47.6403C318.633 48.8579 319.121 50.0232 319.982 50.8842C320.843 51.7451 322.008 52.2325 323.226 52.2409H341.341C343.547 52.2368 345.73 52.6953 347.748 53.5869C349.766 54.4784 351.575 55.7832 353.058 57.417C353.273 57.6325 353.417 57.848 353.632 58.0634C355.538 60.3907 356.743 63.211 357.109 66.1964C357.474 69.1818 356.985 72.2096 355.697 74.9278C354.41 77.646 352.377 79.9429 349.836 81.5514C347.294 83.1599 344.349 84.0139 341.341 84.0141H325.598C321.385 84.0128 317.345 82.3386 314.366 79.3596C311.387 76.3805 309.713 72.3405 309.711 68.1275H318.697C318.697 69.9576 319.425 71.7126 320.719 73.0067C322.013 74.3008 323.768 75.028 325.598 75.0284H341.341C342.253 75.0379 343.158 74.8664 344.004 74.5239C344.849 74.1813 345.619 73.6745 346.267 73.0328C346.916 72.391 347.43 71.6271 347.782 70.7851C348.133 69.9431 348.314 69.0398 348.314 68.1275C348.314 67.2151 348.133 66.3118 347.782 65.4698C347.43 64.6279 346.916 63.8639 346.267 63.2222C345.619 62.5804 344.849 62.0736 344.004 61.7311C343.158 61.3885 342.253 61.2171 341.341 61.2266H323.226C319.709 61.2376 316.329 59.87 313.809 57.417C313.157 56.7633 312.578 56.0401 312.083 55.2603C310.521 53.0012 309.692 50.3153 309.711 47.5685V47.2811C309.704 43.6881 311.124 40.2393 313.658 37.6919C316.191 35.1446 319.633 33.707 323.226 33.6948H343.641C347.241 33.7044 350.692 35.1388 353.237 37.6847C355.783 40.2306 357.217 43.6808 357.227 47.2811V47.5685L348.242 47.6403Z"
                      fill="white"
                    />
                    <path
                      d="M414.726 33.6948V84.0141H405.74V60.9392H373.392V84.0141H364.406V33.6948H373.392V51.9536H405.74V33.6948H414.726Z"
                      fill="white"
                    />
                    <path
                      d="M241.869 109.266V108.979C241.86 107.762 241.373 106.596 240.512 105.735C239.651 104.874 238.486 104.387 237.268 104.379H216.853C215.635 104.387 214.47 104.874 213.609 105.735C212.748 106.596 212.261 107.762 212.252 108.979V109.266C212.26 110.484 212.748 111.649 213.609 112.51C214.47 113.371 215.635 113.859 216.853 113.867H234.968C237.174 113.863 239.357 114.322 241.375 115.213C243.393 116.105 245.202 117.409 246.685 119.043C246.9 119.259 247.044 119.474 247.259 119.69C249.165 122.017 250.37 124.837 250.736 127.823C251.101 130.808 250.612 133.836 249.324 136.554C248.037 139.272 246.004 141.569 243.463 143.178C240.921 144.786 237.975 145.64 234.968 145.64H219.225C215.012 145.639 210.972 143.965 207.993 140.986C205.014 138.007 203.339 133.967 203.338 129.754H212.324C212.324 131.584 213.052 133.339 214.346 134.633C215.64 135.927 217.395 136.654 219.225 136.655H234.968C235.88 136.664 236.785 136.493 237.631 136.15C238.476 135.807 239.245 135.301 239.894 134.659C240.542 134.017 241.057 133.253 241.408 132.411C241.76 131.569 241.94 130.666 241.94 129.754C241.94 128.841 241.76 127.938 241.408 127.096C241.057 126.254 240.542 125.49 239.894 124.849C239.245 124.207 238.476 123.7 237.631 123.357C236.785 123.015 235.88 122.843 234.968 122.853H216.853C213.336 122.864 209.956 121.496 207.436 119.043C206.784 118.39 206.205 117.666 205.71 116.887C204.148 114.627 203.319 111.942 203.338 109.195V108.907C203.331 105.314 204.751 101.866 207.285 99.3181C209.818 96.7708 213.26 95.3332 216.853 95.321H237.268C240.868 95.3306 244.318 96.7651 246.864 99.3109C249.41 101.857 250.844 105.307 250.853 108.907V109.195L241.869 109.266Z"
                      fill="white"
                    />
                    <path
                      d="M305.909 95.3928V104.379H285.278V145.712H276.292V104.379H255.661V95.3928H305.909Z"
                      fill="white"
                    />
                    <path
                      d="M363.479 95.321V120.481C363.479 127.153 360.829 133.553 356.11 138.271C351.392 142.99 344.993 145.64 338.32 145.64C331.647 145.64 325.248 142.99 320.529 138.271C315.811 133.553 313.16 127.153 313.16 120.481V95.321H322.146V120.481C322.146 122.605 322.564 124.708 323.377 126.67C324.19 128.632 325.381 130.415 326.883 131.917C328.385 133.419 330.168 134.611 332.13 135.423C334.093 136.236 336.196 136.655 338.32 136.655C340.444 136.655 342.547 136.236 344.509 135.423C346.472 134.611 348.255 133.419 349.756 131.917C351.258 130.415 352.45 128.632 353.263 126.67C354.075 124.708 354.494 122.605 354.494 120.481V95.321H363.479Z"
                      fill="white"
                    />
                    <path
                      d="M395.747 95.3929C400.542 95.3798 405.24 96.7409 409.285 99.3148C413.33 101.889 416.553 105.568 418.573 109.917C420.592 114.265 421.323 119.102 420.679 123.853C420.036 128.604 418.044 133.072 414.94 136.726C414.509 137.23 414.006 137.733 413.502 138.237C411.197 140.587 408.445 142.452 405.408 143.724C402.371 144.995 399.111 145.647 395.819 145.64H370.659V95.321H395.819L395.747 95.3929ZM411.921 120.552C411.915 116.265 410.208 112.155 407.177 109.123C404.145 106.091 400.035 104.385 395.747 104.379H379.573V136.726H395.747C400.035 136.72 404.145 135.014 407.177 131.982C410.208 128.95 411.915 124.84 411.921 120.552Z"
                      fill="white"
                    />
                    <path
                      d="M428.158 145.64V95.321H437.144V145.64H428.158Z"
                      fill="white"
                    />
                    <path
                      d="M492.924 120.481C492.924 125.457 491.448 130.321 488.684 134.458C485.919 138.596 481.99 141.82 477.392 143.724C472.795 145.629 467.736 146.127 462.856 145.156C457.976 144.185 453.493 141.789 449.974 138.27C446.456 134.752 444.059 130.269 443.089 125.388C442.118 120.508 442.616 115.449 444.521 110.852C446.425 106.255 449.65 102.325 453.787 99.5609C457.925 96.7964 462.789 95.321 467.765 95.321C474.436 95.3284 480.831 97.9816 485.547 102.698C490.264 107.415 492.917 113.81 492.924 120.481ZM483.939 120.481C483.939 117.282 482.991 114.154 481.213 111.495C479.436 108.835 476.91 106.761 473.955 105.537C470.999 104.313 467.747 103.993 464.609 104.617C461.472 105.241 458.59 106.781 456.328 109.043C454.066 111.305 452.525 114.187 451.901 117.325C451.277 120.462 451.597 123.715 452.822 126.67C454.046 129.626 456.119 132.152 458.779 133.929C461.439 135.706 464.566 136.655 467.765 136.655C472.053 136.648 476.163 134.942 479.195 131.91C482.226 128.878 483.933 124.768 483.939 120.481Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_189_3143">
                      <rect width="492.924" height="179.407" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
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
                <g fill="#fff" style="fill: #df8317">
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

          <div
            class="menu-area"
            :class="{ show: mobileMenu, allProjects: isProjectPage }"
          >
            <ul class="">
              <router-link to="/ThePage" exact-active-class="active-link">
                <li>{{ $t('home') }}</li>
              </router-link>

              <router-link
                :to="{ path: '/aboutUs' }"
                exact-active-class="active-link"
              >
                <li>{{ $t('about') }}</li>
              </router-link>

              <router-link
                :to="{ path: '/ThePage', hash: '#servies-section' }"
                exact-active-class="active-link"
              >
                <li>{{ $t('services') }}</li>
              </router-link>

              <router-link
                :to="{ path: '/allProjects' }"
                active-class="active-link"
              >
                <li>{{ $t('projects') }}</li>
              </router-link>

              <router-link
                :to="{ path: '/odooPage' }"
                active-class="active-link"
              >
                <li>{{ $t('Odoo') }}</li>
              </router-link>

              <router-link to="/Contact">
                <button class="button">
                  {{ $t('contact') }}
                </button>
              </router-link>

              <a class="m-2" href="#" @click.prevent="toggleLanguage">{{
                currentLanguage
              }}</a>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  </nav>
</template>

<script>
import ScrollReveal from 'scrollreveal'

export default {
  name: 'ThePage',

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
    isProjectPage() {
      return (
        this.$route.path === '/allProjects' ||
        this.$route.path === '/aboutUs' ||
        this.$route.path === '/projectDetails'
      )
    },

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

li:hover {
  color: #df8317 !important;
}
.navbarr.scrolled {
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
}
.navbarr a {
  color: rgb(0, 0, 0) !important;
  transition: color 0.3s ease;
}
.navbarr.scrolled a {
  color: black !important;
}

a:hover {
  text-decoration: none;
}
ul,
li {
  margin: 0;
  padding: 0;
  padding-inline-start: 0;
}
a :hover {
  text-decoration: none;
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
  padding: 0 40px;
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
  background-color: #df8317;
  padding: 10px 5%;
  border-radius: 10px;
  border: none;
  transition: padding 0.3s, box-shadow 0.3s, font-size 0.3s;
  color: white;
}

.button {
  position: relative;
  padding: 10px 42px;
  border-radius: 6px;
  border: none;
  color: #fff;
  cursor: pointer;
  background-color: #df8317;
  transition: all 0.2s ease;
}

.button:active {
  transform: scale(0.96);
}

.button:before,
.button:after {
  position: absolute;
  content: '';
  width: 150%;
  left: 50%;
  height: 100%;
  transform: translateX(-50%);
  z-index: -1000;
  background-repeat: no-repeat;
}

.button:hover:before {
  top: -70%;
  background-image: radial-gradient(circle, #df8317 20%, transparent 20%),
    radial-gradient(circle, transparent 20%, #df8317 20%, transparent 30%),
    radial-gradient(circle, #df8317 20%, transparent 20%),
    radial-gradient(circle, #df8317 20%, transparent 20%),
    radial-gradient(circle, transparent 10%, #df8317 15%, transparent 20%),
    radial-gradient(circle, #df8317 20%, transparent 20%),
    radial-gradient(circle, #df8317 20%, transparent 20%),
    radial-gradient(circle, #df8317 20%, transparent 20%),
    radial-gradient(circle, #df8317 20%, transparent 20%);
  background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%,
    10% 10%, 18% 18%;
  background-position: 50% 120%;
  animation: greentopBubbles 0.6s ease;
}

@keyframes greentopBubbles {
  0% {
    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%,
      40% 90%, 55% 90%, 70% 90%;
  }

  50% {
    background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%,
      50% 50%, 65% 20%, 90% 30%;
  }

  100% {
    background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%,
      50% 40%, 65% 10%, 90% 20%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
}

.button:hover::after {
  bottom: -70%;
  background-image: radial-gradient(circle, #df8317 20%, transparent 20%),
    radial-gradient(circle, #df8317 20%, transparent 20%),
    radial-gradient(circle, transparent 10%, #df8317 15%, transparent 20%),
    radial-gradient(circle, #df8317 20%, transparent 20%),
    radial-gradient(circle, #df8317 20%, transparent 20%),
    radial-gradient(circle, #df8317 20%, transparent 20%),
    radial-gradient(circle, #df8317 20%, transparent 20%);
  background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 20% 20%, 18% 18%;
  background-position: 50% 0%;
  animation: greenbottomBubbles 0.6s ease;
}

@keyframes greenbottomBubbles {
  0% {
    background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%,
      70% -10%, 70% 0%;
  }

  50% {
    background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%,
      105% 0%;
  }

  100% {
    background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%,
      110% 10%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
}
button:hover {
  box-shadow: inset 0px 0px 15px rgba(49, 49, 49, 0.333);
  transform: scale(1.05);
  transition: box-shadow 0.5s, transform 0.3s;
}
.menu-area li {
  display: inline-block;
  color: #000 !important;
  padding: 0 10px;
  font-size: 22px !important;
}
.menu-area li a {
  color: #000;
  display: inline-block;
  padding: 10px 5px;
  line-height: 1.5;
  font-weight: 500;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.menu-area.allProjects li {
  color: #fff !important;
}
.menu-area.allProjects a {
  color: #fff !important;
}
.menu-area.projectDetails li {
  color: #fff !important;
}

.menu-area.projectDetails a {
  color: #fff !important;
}

.menu-area.aboutUs li {
  color: #fff !important;
}

.menu-area.aboutUs a {
  color: #fff !important;
}

.navbarr.scrolled li {
  color: black !important;
}
.navbarr.scrolled a {
  color: black !important;
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
    width: auto;
    font-size: 20px;
    font-weight: 600;
  }
  .logo svg {
    height: 90% !important;
    width: 100% !important;
  }
  .navigation {
    padding: 0 !important;
  }
  .header-area {
    padding: 0px;
  }
  .mobilebtn {
    display: block;
    background-color: rgba(255, 255, 255, 0);
  }

  .menu-area {
    padding: 30px 0;
    background-color: #fff;
    display: none;
    -webkit-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }
  .menu-area.show button {
    width: 90%;
    margin: 10px 0;
  }
  .menu-area.show a {
    width: 100%;
    color: #000 !important;
    display: block;
  }
  .menu-area.show li {
    width: 100%;
    color: #000 !important;
    padding: 10px 0;
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
    padding: 0px;
  }
  .navigation {
    padding: 0 !important;
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
    padding: 0px;
  }
  .navigation {
    padding: 0 !important;
  }
  .mega-item {
    width: 100%;
  }
}
a {
  color: white;
  padding: 0px;
  border-radius: 5px;
  text-decoration: none;
  margin: 0 2px;
  cursor: pointer;
  width: 20%;
  color: #111c55;
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
  fill: #df8317;
}
.active-link li {
  color: #df8317 !important;
}
</style>

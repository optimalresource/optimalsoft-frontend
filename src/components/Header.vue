<template>
  <header class="header">
    <!-- <div class="header-top bg-primary">
      <div class="container">
        <div class="row align-items-center">
          <div class="col col-lg-4 d-none d-lg-block">
            <ul class="header-social-links d-flex flex-wrap align-items-center">
              <li class="social-link-item">
                <a href="#" class="social-link"
                  ><i class="icofont-facebook"></i
                ></a>
              </li>
              <li class="social-link-item">
                <a href="#" class="social-link"
                  ><i class="icofont-twitter"></i
                ></a>
              </li>
              <li class="social-link-item">
                <a href="#" class="social-link"
                  ><i class="icofont-skype"></i
                ></a>
              </li>
              <li class="social-link-item">
                <a href="#" class="social-link"
                  ><i class="icofont-linkedin"></i
                ></a>
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-6 col-lg-4 d-none d-md-block">
            <p class="d-flex flex-wrap align-items-center text-gradient">
              <span class="hr-border d-none d-xl-block"></span>Let us grow your
              website traffic.
            </p>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <ul
              class="
                select-box
                d-flex
                flex-wrap
                align-items-center
                justify-content-center justify-content-md-end
              "
            >
              <li class="select-item">
                <a href="tel:0123456789">Cell: 0123456789</a>
              </li>
              <li class="select-item">
                <select class="form-select w-auto">
                  <option selected>English</option>
                  <option value="1">Français</option>
                  <option value="2">English</option>
                  <option value="3">Français</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div> -->
    <div id="active-sticky" class="header-bottom bg-primary pt-4 pb-4">
      <div class="container">
        <div class="row align-items-center">
          <div class="col">
            <a href="/" class="brand-logo">
              <img
                src="assets/images/logo/test-white.png"
                alt="brand logo"
                class="col-lg-3"
              />
            </a>
          </div>
          <div class="col-auto">
            <!-- <a
              class="
                btn btn-warning btn-hover-warning
                d-none d-sm-inline-block d-lg-none
              "
              href="#"
              >Analyze Your Site <i class="icofont-arrow-right"></i>
            </a> -->

            <button
              type="button"
              class="btn btn-warning offcanvas-toggler"
              data-bs-toggle="modal"
              data-bs-target="#offcanvas-modal"
            >
              <span class="line"></span>
              <span class="line"></span>
              <span class="line"></span>
            </button>
            <nav class="d-none d-lg-block">
              <ul class="main-menu text-end">
                <li class="main-menu-item">
                  <a class="main-menu-link text-white" href="service"
                    >Services</a
                  >
                </li>
                <li class="main-menu-item">
                  <a class="main-menu-link text-white" href="about">About us</a>
                </li>
                <li class="main-menu-item">
                  <a class="main-menu-link text-white" href="contact"
                    >Contacts Us</a
                  >
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  //991
};
</script>

<style>
@media only screen and (max-width: 991px) and (min-width: 389px) {
  img {
    max-width: 100%;
    width: 200px;
  }
}
</style>

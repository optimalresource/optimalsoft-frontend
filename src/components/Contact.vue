<template>
  <div>
    <!-- <TopHeader />
    <Header /> -->
    <section class="bread-crumb-section">
      <img
        class="shape shape1"
        src="assets/images/bread/1.png"
        alt="images_not_found"
      />
      <img
        class="shape shape2"
        src="assets/images/bread/2.png"
        alt="images_not_found"
      />
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="title text-center">Contact Us</h2>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb justify-content-center">
                <li class="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  <span>Contact</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>

    <!-- bread crumb section end -->

    <!-- contact section start -->
    <section class="contact-section-page section-pt-150 section-pb-150">
      <div class="container">
        <div class="row g-0">
          <div class="col-12">
            <div class="contact-form-card">
              <div class="row mb-n7">
                <div class="col-lg-6 mb-7">
                  <div class="section-title">
                    <h3 class="title">Get In Touch.</h3>
                    <span class="comment-hr mb-0"></span>
                  </div>
                  <!-- contact media -->
                  <div class="contact-media contact-media-list mt-xl-8">
                    <div class="icon">
                      <span class="icofont-ui-call"></span>
                    </div>
                    <div class="content">
                      <span class="text">Phone:</span>
                      <a href="tel:090536091527" class="number"
                        >090536091527</a
                      >
                    </div>
                  </div>
                  <!-- contact media end -->
                  <!-- contact media -->
                  <div class="contact-media contact-media-list">
                    <div class="icon">
                      <span class="icofont-send-mail"></span>
                    </div>
                    <div class="content">
                      <span class="text">Email:</span>
                      <a href="mailto:hello@optimalsoft.org" class="number"
                        >hello@optimalsoft.org</a
                      >
                    </div>
                  </div>
                  <!-- contact media end -->
                  <!-- contact media -->
                  <div class="contact-media contact-media-list">
                    <div class="icon">
                      <span class="icofont-map-pins"></span>
                    </div>
                    <div class="content">
                      <span class="text">Address:</span>
                      <h3 class="number">
                        No 6 GraceVille Estate Ogunlana, Lekki Expressway, Lagos
                      </h3>
                    </div>
                  </div>
                  <!-- contact media end -->
                </div>
                <div class="col-lg-6 mb-7">
                  <div class="section-title">
                    <h3 class="title">Send Us A Message</h3>
                    <span class="comment-hr mb-0"></span>
                  </div>

                  <div class="comment-form pt-xl-8">
                    <form
                      class="row gx-4"
                      id="contactForm"
                      action="https://htmlmail.hasthemes.com/saidul/seolly/contact.php"
                      method="POST"
                    >
                      <div class="col-12 col-sm-6">
                        <input
                          class="form-control"
                          placeholder="Enter Your Name"
                          type="text"
                          name="name"
                        />
                      </div>
                      <div class="col-12 col-sm-6">
                        <input
                          class="form-control"
                          placeholder="Enter Your Email"
                          type="text"
                          name="email"
                        />
                      </div>
                      <!-- <div class="col-12">
                        <select id="inputState" class="form-select">
                          <option selected>Choose Topic</option>
                          <option>Choose 1</option>
                          <option>Choose 2</option>
                          <option>Choose 3</option>
                        </select>
                      </div> -->
                      <div class="col-12">
                        <textarea
                          placeholder="Type your question"
                          class="form-control textarea-control"
                          name="message"
                          id="textarea"
                          cols="30"
                          rows="10"
                        ></textarea>
                      </div>
                      <div class="col-12">
                        <button type="submit" class="btn btn-warning">
                          Submit
                          <i class="icofont-rounded-double-right"></i>
                        </button>
                      </div>
                    </form>
                    <p class="form-message"></p>
                  </div>
                </div>
                <div class="col-12 mb-7">
                  <iframe
                    class="google-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65368563.61295087!2d-117.82461439612302!3d-0.2494932804537185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x65a81cae36eb8ff%3A0xa6342257f310534f!2sAtlantic%20Ocean!5e0!3m2!1sen!2sbd!4v1614241876365!5m2!1sen!2sbd"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="copy-right-section">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <p>
                Copyright &copy;
                <span id="currentYear"></span>
                Made With
                <i class="icofont-heart"></i>
                By
                <a href="/">Optimalsoft</a>
                All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- <Footer /> -->
  </div>
</template>

<script>
// import TopHeader from "@/components/TopHeader.vue";
// import Header from "@/components/Header.vue";

export default {
  components: {
    // Header,
    // TopHeader,
  },
};
</script>

<style scoped>
.contact-form-card {
  background-color: #c8dcff;
  padding: 30px;
  border-radius: 15px;
}
</style>
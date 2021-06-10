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
                      <a href="tel:090536091527" class="number">090536091527</a>
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
                          v-model="contact.name"
                        />
                      </div>
                      <div class="col-12 col-sm-6">
                        <input
                          class="form-control"
                          placeholder="Enter Your Email"
                          type="text"
                          name="email"
                          v-model="contact.email"
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
                          v-model="contact.message"
                        ></textarea>
                      </div>
                      <div class="col-12">
                        <button
                          @click.prevent="sendMessage"
                          type="submit"
                          class="btn btn-warning"
                        >
                          Submit
                          <i class="icofont-rounded-double-right"></i>
                        </button>
                      </div>
                    </form>
                    <p class="form-message"></p>
                  </div>
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
import axios from "axios";
import { useToast } from "vue-toastification";
export default {
  setup() {
    const toast = useToast();
    return { toast };
  },
  data() {
    return {
      contact: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  components: {
    // Header,
    // TopHeader,
  },
  methods: {
    validateEmail(email) {
      const re =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))*$/;
      return re.test(email);
    },
    sendMessage: function () {
      if (this.contact.name == "") {
        this.toast.error("Tell us your name", {
          position: "top-right",
          timeout: 2000,
          closeOnClick: false,
          pauseOnFocusLoss: true,
          pauseOnHover: false,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: false,
          icon: true,
          rtl: false,
        });
        return false;
      }
      if (this.contact.email == "") {
        this.toast.error("Tell us your email", {
          position: "top-right",
          timeout: 2000,
          closeOnClick: false,
          pauseOnFocusLoss: true,
          pauseOnHover: false,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: false,
          icon: true,
          rtl: false,
        });
        return false;
      }
      if (this.contact.message == "") {
        this.toast.error("Write something", {
          position: "top-right",
          timeout: 2000,
          closeOnClick: false,
          pauseOnFocusLoss: true,
          pauseOnHover: false,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: false,
          icon: true,
          rtl: false,
        });
        return false;
      }
      axios
        .post("https://api.optimalsoft.co/api/contact_info", this.contact)
        .then((response) => {
          console.log(response);
          if (response.status == "200") {
            this.toast.success(
              "We have recieved your message and will get back to you soon",
              {
                position: "top-right",
                timeout: 2000,
                closeOnClick: false,
                pauseOnFocusLoss: true,
                pauseOnHover: false,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: false,
                hideProgressBar: true,
                closeButton: true,
                icon: true,
                rtl: false,
              }
            );
          }
          // if (response.status == "201") {
          //   this.toast.success("Thank you. We'd get back to you");
          // } else {
          //   this.toast.error("oops.. an error occured");
          //   return false;
          // }
        })
        .catch((error) => {
          if (typeof error === "object" && error !== null) {
            for (const property in error) {
              this.toast.error(error[property]);
            }
          } else {
            this.toast.error(error);
          }
          this.spin = false;
          this.notSpin = true;
          return false;
        });
    },
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

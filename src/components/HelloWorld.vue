<template>
  <div>
    <TopHeader />
    <Header />

    <TopRanking />
    <!-- working process section start -->
    <WorkingProcess />
    <!-- working process section end -->
    <!-- service section start -->
    <!-- <OurOffer /> -->
    <!-- service section end -->
    <!-- testimonial section start -->
    <TestimonialSection />
    <!-- testimonial section end -->
    <!-- case studies section start -->
    <!-- <CaseStudy /> -->
    <!-- case studies section end -->
    <!-- faq section start -->
    <FaqSection />
    <!-- faq team section end -->

    <!-- about section start -->
    <!-- <AboutSection /> -->
    <!-- about section end -->


    <!-- team section start -->
    <!-- <TeamSection /> -->
    <!-- team section end -->


    <!-- brand section start -->
    <!-- <Brand /> -->
    <!-- brand section start -->

    <!-- blog section end -->
    <!-- <BlogSection /> -->
    <!-- blog section start -->

    <Footer />
  </div>
</template>

<script>
import TopHeader from "@/components/TopHeader.vue";
import Header from "@/components/Header.vue";
// import BlogSection from "@/components/BlogSection.vue";
import TopRanking from "@/components/TopRanking.vue";
// import Brand from "@/components/Brands.vue";
import WorkingProcess from "@/components/WorkingProcess.vue";
// import TeamSection from "@/components/TeamSection.vue";
// import OurOffer from "@/components/OurOffer.vue";
import FaqSection from "@/components/FaqSection.vue";
import TestimonialSection from "@/components/TestimonialSection.vue";
// import AboutSection from "@/components/AboutSection.vue";
// import CaseStudy from "@/components/CaseStudy.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "HelloWorld",
  components: {
    TopHeader,
    Header,
    TopRanking,
    WorkingProcess,
    // OurOffer,
    // Brand,
    // BlogSection,
    // TeamSection,
    FaqSection,
    TestimonialSection,
    // AboutSection,
    // CaseStudy,
    Footer,
  },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>

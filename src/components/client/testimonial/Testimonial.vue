<template>
  <section class="testimonial">
    <div class="mt-lg-5 pt-5 ps-lg-5 d-flex justify-content-end">
      <b-card no-body class="testimonial__card bg-gray-0">
        <b-row no-gutters class="testimonial__row">
          <b-col sm="12" md="7" class="testimonial__after">
            <h6 class="text-primary">
              {{
                $t('Client.Our restaurant becomes more popular after joining Choicie!')
              }}
            </h6>
            <p class="py-2">
              {{ $t('Client.We started using Choicie quite recently') }}
            </p>
            <p class="pt-2">
              <span class="fw-bolder">Nelly Spender</span> — Restaurant name
            </p>
          </b-col>
          <b-col class="testimonial__col">
            <h4 class="text-primary">+40%</h4>
            <p class="pt-2">
              {{ $t('Client.The restaurant’s revenue increased') }}
            </p>
          </b-col>
        </b-row>
        <b-img
          src="images/testimonial.png"
          :srcset="`${images.img_sm} 272w, ${images.img_lg} 390w`"
          sizes="(max-width: 900px) 272px, 390px"
          alt="Map Image"
          class="testimonial__absolute"
        ></b-img>
      </b-card>
    </div>
  </section>
</template>

<script setup lang="ts">
import smImage from '/images/testimonialMobile.png';
import lgImage from '/images/testimonial.png';

let images = {
  img_sm: smImage,
  img_lg: lgImage,
};

console.log(images);
</script>

<style scoped lang="scss">
.testimonial {
  padding-top: 10rem;
  padding-bottom: 10rem;

  @media (max-width: 600px) {
    padding-top: 12rem;
    padding-bottom: 6rem;
    padding: 12rem 2rem 6rem;
  }

  @media (max-width: 900px) and (min-width: 601px) {
    padding-bottom: 4.5rem;
  }

  &__card {
    width: 85%;
    position: relative;
    padding-top: 3rem;
    padding-left: 4rem;
    padding-right: 1.5rem;
    margin-top: 3rem;
    border: 0;

    @media (max-width: 900px) {
      width: 100%;
      padding-top: 10rem;
      padding-left: 1.3rem;
      padding-right: 1.3rem;
      margin: 0;
    }
  }

  &__row {
    padding: 0.5rem;
    padding-bottom: 2.5rem;
  }

  &__after {
    padding: 0.5rem 4rem;

    @media (max-width: 600px) {
      padding: 1rem;
      // border-top: 2px solid $gray-20;
    }

    @media (max-width: 900px) and (min-width: 601px) {
      padding-right: 2rem;
    }

    &::after {
      content: '';
      width: 0;
      height: 48%;
      position: absolute;
      border: 1px solid $gray-10;
      top: 20%;
      right: 40%;

      @media (max-width: 600px) {
        border: 0;
      }

      @media (max-width: 900px) and (min-width: 601px) {
        top: 40%;
      }
    }
  }

  &__col {
    padding: 0.5rem 3rem;

    @media (max-width: 600px) {
      padding: 2rem 6rem 1rem 1rem;
      border-top: 2px solid $gray-20;
    }
  }

  &__absolute {
    position: absolute;
    top: -5%;
    left: -5%;
    transform: translate(-50%, -50%);

    @media (max-width: 900px) {
      top: 0;
      left: 50%;
    }
  }
}
</style>

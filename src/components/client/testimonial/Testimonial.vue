<template>
  <section class="last">
    <div class="mt-5 pt-5 ps-5 d-flex justify-content-end">
      <b-card
        no-body
        class="w-75 bg-gray-0 border-0 ps-5 pt-4 pe-2 position-relative mt-5"
      >
        <b-row no-gutters class="p-3 ps-5">
          <b-col sm="12" md="7" class="py-3 px-5 last__after">
            <h6 class="text-primary">
              Our restaurant becomes more popular after joining Choicie!
            </h6>
            <p class="py-2">
              We started using Choicie quite recently. We adjusted our menu and increased
              the restaurant’s revenue thanks to live feedback.
            </p>
            <p class="pt-2">
              <span class="fw-bold">Nelly Spender</span> — Restaurant name
            </p>
          </b-col>
          <b-col class="py-3 px-4">
            <h4 class="text-primary">+ 40%</h4>
            <p class="pt-2">
              The restaurant’s revenue increased due to menu adjustments, as well as lower
              grocery costs.
            </p>
          </b-col>
        </b-row>
        <b-img
          src="images/testimonial.png"
          alt="Map Image"
          class="last__absolute"
        ></b-img>
      </b-card>
    </div>
  </section>
</template>

<style scoped lang="scss">
.last {
  padding-top: 10rem;
  padding-bottom: 10rem;
  &__after {
    &::after {
      content: "";
      width: 0;
      height: 50%;
      position: absolute;
      border: 1px solid $gray-10;
      top: 20%;
      right: 40%;
    }
  }

  &__absolute {
    position: absolute;
    top: -5%;
    left: -5%;
    transform: translate(-50%, -50%);
  }
}
</style>

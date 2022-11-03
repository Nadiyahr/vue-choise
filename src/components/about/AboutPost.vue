<template>
  <article class="testimonial">
    <div class="d-flex justify-content-end">
      <b-card no-body class="testimonial__card bg-gray-0">
        <b-row no-gutters class="testimonial__row">
          <b-col sm="12" md="7" class="testimonial__after">
            <h6 class="text-primary">
              {{ args.title1 }}
            </h6>
            <p class="py-2">
              {{ args.body }}
            </p>
            <p class="pt-2">
              <span class="fw-bold">{{
                args.title.split(" ").slice(0, 2).join(" ")
              }}</span>
              —
              {{ args.title.split(" ").slice(2).join(" ") }}
            </p>
          </b-col>
          <b-col class="testimonial__col">
            <h4 class="text-primary">+{{ randomNum(1, 5) }}0%</h4>
            <p class="pt-3">
              The restaurant’s revenue increased due to menu adjustments, as well as lower
              grocery costs.
            </p>
          </b-col>
        </b-row>
        <img
          :src="args.url"
          :srcset="`${args.thumbnailUrl} 150w, ${args.url} 600w`"
          alt="placeholder url"
          class="testimonial__absolute"
        />
        <!--  I can't understand why srcset doesn't work with api url
          <b-img
          :src="props.args.url"
          :srcset="`${props.args.thumbnailUrl} 150w, ${props.args.url} 600w`"
          sizes="(max-width: 900px) 200px, 300px"
          alt="Map Image"
          class="testimonial__absolute"
        ></b-img> -->
      </b-card>
    </div>
  </article>
</template>

<script setup lang="ts">
interface Props {
  args: List;
}

const { args } = defineProps<Props>();

console.log(args);

function randomNum(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
</script>

<style scoped lang="scss">
.testimonial {
  padding-top: 5rem;

  @media (max-width: 600px) {
    padding: 8rem 1rem 3rem;
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
    padding-bottom: 1.5rem;
    padding-right: 0;
  }

  &__after {
    padding: 0.5rem 4rem;

    @media (max-width: 600px) {
      padding: 1rem;
    }

    @media (max-width: 900px) and (min-width: 601px) {
      padding-right: 2rem;
    }

    &::after {
      content: "";
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
    width: 270px;
    height: 360px;
    position: absolute;
    top: 20%;
    left: -5%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
    box-shadow: 0 1rem 2rem 0 #837d7d33, 0 1rem 4rem 0 #837d7d33;

    @media (max-width: 900px) {
      width: 180px;
      height: 220px;
      top: 0;
      left: 50%;
    }
  }
}
</style>

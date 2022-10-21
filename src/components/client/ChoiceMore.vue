<template>
  <section :class="bgColor" class="more">
    <b-container fluid class="text-dark py-5 ">
      <b-row>
        <b-col md="6">
          <article class="sm-fs-7 text sm-flex">
            <div>
                <h1
                  class="fw-bold fs-1 lh-2 py-4 lg-pb-5 lg-mb-5 ls-2"
                >
                  Choicie:&nbsp;more<br/>client,&nbsp;esier<br/>comunication
                </h1>
                <p class="pb-3 lg-pb-0 lg-mb-5 lh-3">
                  Choicie is very familiar with the feeling of being an alien in another<br v-if="!isMobile" />country (he is actually an alien). So Choicie decided to help people<br v-if="!isMobile" />with the same problem to get rid of it and also improve cafes and<br v-if="!isMobile" />restaurants.
                </p>
                <div class="py-2 lg-py-5">
                  <b-button
                    variant="link"
                    size="md"
                    to="/"
                    class="px-0"
                  >
                    <span class="more_span">
                      Watch Choicie in action — 2 min
                    </span>
                  </b-button>
                </div>
              </div>
          </article>
        </b-col>
        <b-col></b-col>
        <b-col :class="bgColor" md="5" class="position-relative pt-5 md-pt-0">
          <div class="position-absolute bg-white rounded-3 more_comment">
            <p class="fst-italic">
              “We edited the menu after using this app. Now our sales are 30% higher“
            </p>
            <div class="d-flex gap-3 md-gap-4">
              <Like class="mt-2"/>
              <div>
                <h5 class="fs-4 text p-0">Anastasia Glorman,</h5>
                <span>co-fouder @syngenta</span>
              </div>
            </div>
          </div>
          <b-img fluid src="images/photo2.png" alt="Start Image"></b-img>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import Like from '../icons/Like.vue'

export interface Props {
  isMobile?: boolean
}

const route = useRoute()
const bgColor = route.meta.headerClass


const props = withDefaults(defineProps<Props>(), {
  isMobile: false
})
</script>

<style scoped lang="scss">
@import '@/assets/style/vars.scss';
  .more {
    padding-top: 2rem;
    padding-bottom: 4rem;
    @media (max-width: 600px) {
      padding-top: 0;
      padding-bottom: 8rem;
    }

    &_span {
      font-size: 16px;
      font-weight: 700;
      color: $my-dark;
    }

    &_comment {
      width: 19rem;
      padding: 2.3em;
      font-weight: 500;
      top: 75%;
      left: -25%;

      @media (max-width: 600px) {
        width: 17rem;
        padding: 2em;
        font-weight: 400;
        top: 90%;
        left: 8%;
      }
    }
  }
</style>

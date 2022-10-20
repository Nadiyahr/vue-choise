<template>
  <section :class="isMobile ? 'bg-light' : bgColor">
    <b-container fluid class="text-dark py-5 ">
      <b-row>
        <b-col md="6">
          <article class="sm-fs-7 text sm-flex">
            <div>
                <h1
                  class="fw-bold fs-1 lh-2 py-4 lg-pb-4 lg-mb-5 lg-p-2 ls-2"
                >
                  Choicie:&nbsp;more<br/>client,&nbsp;esier<br/>comunication
                </h1>
                <p class="pb-3 lg-pb-0 lg-mb-5">
                  Choicie is very familiar with the feeling of being an alien in another<br />country (he is actually an alien). So Choicie decided to help people<br />with the same problem to get rid of it and also improve cafes and restaurants.
                </p>
                <div class="p-2">
                  <b-link
                    size="md"
                    to="/"
                    class="link"
                  >
                    <span class="link_span">
                      Watch Choicie in action — 2 min
                    </span>
                  </b-link>
                </div>
              </div>
          </article>
        </b-col>
        <b-col></b-col>
        <b-col :class="bgColor" md="5">
          <b-img fluid src="images/photo2.png" alt="Start Image"></b-img>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

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
  .link {
    text-decoration: none;

    &_span {
      font-size: 16px;
      font-weight: 700;
      color: #3b2186;
    }
  }
</style>

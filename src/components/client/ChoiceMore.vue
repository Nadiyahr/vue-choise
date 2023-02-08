<template>
  <section class="bg-info more">
    <b-container fluid class="text-dark py-5">
      <b-row>
        <b-col md="6">
          <article class="sm-fs-7 text sm-flex pt-5">
            <div>
              <h1 class="fw-bold fs-1 lh-2 py-4 lg-pb-5 lg-mb-5 ls-2 more_title">
                {{ $t('Client.Choicie: more') }}<br />{{ $t('Client.client, esier')
                }}<br />{{ $t('Client.communication') }}
              </h1>
              <p class="pb-5 lg-pb-0 lg-mb-5 lh-3">
                {{
                  $t(
                    'Client.Choicie is very familiar with the feeling of being an alien in another'
                  )
                }}
                <br v-if="desktop" />
                {{ $t('Client.he is actually an alien') }}
                <br v-if="desktop" />
                {{
                  $t(
                    'Client.with the same problem to get rid of it and also improve cafes and'
                  )
                }}
                <br v-if="desktop" />
                {{ $t('Client.restaurants') }}
              </p>
              <div class="py-2 lg-py-5">
                <b-button variant="link" size="md" to="/" class="px-0">
                  <span class="more_span">
                    {{ $t('Client.Watch Choicie in action — 2 min') }}
                  </span>
                </b-button>
              </div>
            </div>
          </article>
        </b-col>
        <!-- <b-col lg="1"></b-col> -->
        <b-col md="5" class="bg-info position-relative pt-5 md-pt-0">
          <div class="position-absolute bg-white rounded-3 more_comment">
            <p class="fst-italic">
              “{{ $t('Client.We edited the menu after using this app') }}“
            </p>
            <div class="d-flex gap-3 md-gap-4">
              <svg class="icon icon--like">
                <use href="/src/assets/icons/icons_list.svg#like"></use>
              </svg>
              <div>
                <h5 class="fs-5 text p-0">Anastasia Glorman,</h5>
                <span>co-fouder @syngenta</span>
              </div>
            </div>
          </div>
          <b-img
            src="images/photo.png"
            :srcset="`${myImg.img_sm} 288w, ${myImg.img_lg} 470w`"
            sizes="(max-width: 900px) 288px, 470px"
            alt="Start Image"
            class="more_image"
          ></b-img>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import smImage from '/images/photoMobile.png';
import lgImage from '/images/photo.png';
import { computed } from 'vue';
import { breakpoints } from '@/plugins/breakpoints';
import { ref } from 'vue';

const desktop = breakpoints.isGreaterOrEqual('laptop');

const images = {
  img_sm: smImage,
  img_lg: lgImage,
};

const myImg = computed(() => images);
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

  &_title {
    letter-spacing: 0.1rem;
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
      width: 15rem;
      height: 10rem;
      padding: 2em;
      font-size: 12px;
      font-weight: 400;
      top: 90%;
      left: 17%;
    }

    @media (max-width: 900px) and (min-width: 601px) {
      width: 17rem;
      padding: 2em;
      font-weight: 400;
      top: 85%;
      left: 25%;
      transform: translate(-50%, -50%);
    }
  }

  &_image {
    @media (max-width: 600px) {
      margin-left: 2rem;
    }
  }

  .icon--like {
    width: 36px;
    height: 36px;
    margin-top: 12px;
  }
}
</style>

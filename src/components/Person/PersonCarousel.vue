<template>
  <section class="hero-section p-4">
    <div class="containe-fluid">
      <div class="row">
        <div class="col-lg-10 col-12" style="margin-left: auto;margin-right: auto;">
          <div class="text-center mb-2 pb-2">
            <div class="container-fluid">
              <div class="row">
                <div class="col-xl-3 col-lg-4 col-md-3 col-sm-2"></div>
                <div class="col-xl-3 col-lg-4 col-md-3 col-sm-2"></div>
              </div>
            </div>
          </div>
          <Carousel :items-to-show="carouselItemsToShow" :wrap-around="true" :autoplay="2000">
            <Slide v-for="person in persons" :key="person.first_name">
              <div class="carousel__item item" @click="openModal(person)">
                <div class="carousel__item-inner">
                  <img :src="person.image" class="owl-carousel-image img-fluid" alt="">
                </div>
              </div>
            </Slide>
            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>
      </div>
    </div>

    <div v-if="isOpenModal" class="modal" @click="closeModal">
      <div class="zoom-controls" v-if="isOpenModal">
        <button @click.stop="zoomIn">+</button>
        <button @click.stop="zoomOut">-</button>
      </div>
      <div class="modal-content">
        <div class="image-wrapper">
          <img :src="selectedPerson.image" :style="{ transform: 'scale(' + selectedPerson.zoomLevel + ')' }" class="modal-image" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide, Navigation } from 'vue3-carousel';

export default {
  name: "HomeCarousel",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      persons: [
        {
          last_name: 'last_name',
          first_name: 'first_name',
          middle_name: 'middle_name',
          image: 'https://images.wallpaperscraft.ru/image/single/voennyj_soldat_maska_220395_800x1200.jpg',
          zoomLevel: 1,
        },
        {
          last_name: 'last_name',
          first_name: 'first_name',
          middle_name: 'middle_name',
          image: 'https://searchthisweb.com/wallpaper/military-helicopter_3840x2160_dtwkl.jpg',
          zoomLevel: 1,
        },
        {
          last_name: 'last_name',
          first_name: 'first_name',
          middle_name: 'middle_name',
          image: 'https://e1.pxfuel.com/desktop-wallpaper/941/559/desktop-wallpaper-military-soldier-high-resolution-1920x1200-1600x1000-for-your-mobile-tablet-military-soldier-thumbnail.jpg',
          zoomLevel: 1,
        },
        {
          last_name: 'last_name',
          first_name: 'first_name',
          middle_name: 'middle_name',
          image: 'https://images.wallpaperscraft.ru/image/single/uzory_tsvety_formy_118512_5000x5000.jpg',
          zoomLevel: 1,
        }
      ],
      isOpenModal: false,
      selectedPerson: null,
      carouselItemsToShow: 2,
    };
  },
  mounted() {
    this.updateCarouselItemsToShow();
    window.addEventListener('resize', this.updateCarouselItemsToShow);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateCarouselItemsToShow);
  },
  methods: {
    openModal(person) {
      this.selectedPerson = person;
      this.isOpenModal = true;
    },
    closeModal() {
      this.isOpenModal = false;
      this.selectedPerson = null;
    },
    updateCarouselItemsToShow() {
      if (window.innerWidth < 768) {
        this.carouselItemsToShow = 1;
      } else {
        this.carouselItemsToShow = 3;
      }
    },
    zoomIn() {
      if (this.selectedPerson.zoomLevel < 1.5) {
        this.selectedPerson.zoomLevel += 0.1;
      }
    },
    zoomOut() {
      if (this.selectedPerson.zoomLevel > 0.5) {
        this.selectedPerson.zoomLevel -= 0.1;
      }
    },
  },
};
</script>

<style scoped>
.hero-section {
  background-color: #f8f8f8;
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.item {
  height: 100%;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
}

.owl-carousel-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  box-sizing: border-box;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  max-width: 80%;
  max-height: 80%;
  background-color: white;
  padding: 2rem;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.175);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.modal-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  object-position: center center;
  transition: transform 0.3s ease;
}

.modal-image.full-width {
  width: 100%;
  height: auto;
  max-height: none;
}

.modal-image.full-height {
  width: auto;
  height: 100%;
  max-width: none;
}

.zoom-controls {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 2;
}

.zoom-controls button {
  margin-right: 0.5rem;
}

@media (max-width: 767px) {
  .container-fluid {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
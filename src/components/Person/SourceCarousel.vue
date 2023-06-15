<template>
  <carousel :items-to-show="1.5">
    <slide v-for="person in persons" :key="person.first_name">
      <div class="image-container">
        <img :src="person.image" :alt="person.first_name" />
      </div>
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script>

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
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
          image: 'https://avatars.mds.yandex.net/i?id=bb7134b024ba8659249ac08a8cdf4a1583cfb514-9036108-images-thumbs&n=13',
          zoomLevel: 1,
        }
      ],
      isOpenModal: false,
      selectedPerson: null,
      carouselItemsToShow: 2,
    };
  },





};
</script>


<style scoped>

.image-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 400px; /* Замените на желаемую максимальную высоту */
}

.image-container img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

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
<template>
  <div class="carousel-wrapper">
    <carousel :items-to-show="carouselItemsToShow">
      <slide v-for="person in persons" :key="person.first_name">
        <div class="image-container">
          <img :src="person.image" :alt="person.first_name" @click="openModal(person)" />
        </div>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>

    <div v-if="isOpenModal" class="modal">
      <div class="modal-content">
        <span class="close-button" @click="closeModal">×</span>
        <img :src="selectedPerson.image" :alt="selectedPerson.first_name" class="modal-image" />
      </div>
    </div>
  </div>
</template>

<style>
.carousel-wrapper {
  max-width: 80%;
  margin: 0 auto;
}

.image-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
}

.image-container img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  cursor: pointer;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
}

.modal-content {
  position: relative;
  max-width: 50%;
  max-height: 50%;
  text-align: center;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 50px;
  color: white;
  cursor: pointer;
}

.modal-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>

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
      carouselItemsToShow: 1,
    };
  },
  methods: {
    openModal(person) {
      this.isOpenModal = true;
      this.selectedPerson = person;
    },
    closeModal() {
      this.isOpenModal = false;
      this.selectedPerson = null;
    },
  },
};
</script>
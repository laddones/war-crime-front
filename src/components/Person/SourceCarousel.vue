<template>
  <div id="slider">
    <transition-group tag="div" :name="transitionName" class="slides-group">
      <div v-if="show" :key="current" class="slide" @click="openModal(current)">
        <div class="image-container">
          <img :src="slides[current]" alt="Slide Image">
        </div>
      </div>
    </transition-group>
    <div class="btn btn-prev" aria-label="Previous slide" @click="slide(-1)">
      &#10094;
    </div>
    <div class="btn btn-next" aria-label="Next slide" @click="slide(1)">
      &#10095;
    </div>
    <div v-if="modalOpen" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">
          <img src="@/assets/images/lupa/krest.png" alt="Close Icon" class="close-icon">
        </span>
        <img :src="slides[selectedImageIndex]" alt="Modal Image">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      direction: 1,
      transitionName: "fade",
      show: false,
      slides: [
        'https://pbs.twimg.com/media/ES78auQX0Ac1qKo.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/AKM_automatkarbin_Ryssland_-_7%2C62x39mm_-_Arm%C3%A9museum_rightside_noBG.png/1200px-AKM_automatkarbin_Ryssland_-_7%2C62x39mm_-_Arm%C3%A9museum_rightside_noBG.png',
        'https://www.examen.ru/assets/images/2018/20181018-vodolaz.jpg',
        // Добавьте ссылки на остальные изображения
      ],
      modalOpen: false,
      selectedImageIndex: null
    };
  },
  methods: {
    slide(dir) {
      this.direction = dir;
      dir === 1
        ? (this.transitionName = "slide-next")
        : (this.transitionName = "slide-prev");
      var len = this.slides.length;
      this.current = (this.current + dir % len + len) % len;
    },
    openModal(index) {
      this.selectedImageIndex = index;
      this.modalOpen = true;
    },
    closeModal() {
      this.modalOpen = false;
      this.selectedImageIndex = null;
    }
  },
  mounted() {
    this.show = true;
  }
};
</script>

<style scoped>
/* Стили слайдера */
#slider {
  width: 100%;
  height: 100vh;
  position: relative;
}

.slide {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn {
  z-index: 10;
  cursor: pointer;
  border: 3px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  position: absolute;
  top: calc(50% - 35px);
  left: 1%;
  transition: transform 0.3s ease-in-out;
  user-select: none;
}

.btn-next {
  left: auto;
  right: 1%;
}

.btn:hover {
  transform: scale(1.1);
}

/* Стили модального окна */
.modal {
  display: block;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
}

.modal-content {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 80%;
  max-height: 80%;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
}


.close-icon {
  width: 30px;
  height: 30px;
}

</style>
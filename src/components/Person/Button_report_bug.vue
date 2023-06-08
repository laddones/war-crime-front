<template>
  <div>
    <button class="open-modal-btn" @click="openModal">Сообщить об ошибке</button>

    <!-- Сообщить об ошибке -->
    <div v-if="isModalOpen" class="modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h2>Сообщить об ошибке</h2>
            <button @click="closeModal" class="close">&times;</button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="errorTitle">Название ошибки:</label>
              <input type="text" id="errorTitle" class="form-control">
            </div>
            <div class="form-group">
              <label for="errorDescription">Описание ошибки:</label>
              <textarea id="errorDescription" class="form-control wider-input"></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button @click="submitForm" class="btn btn-primary">Отправить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalOpen: false
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    submitForm() {
      // Обработка отправки формы
      console.log('Форма отправлена');
    }
  }
};
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-dialog {
  width: 600px;
  background-color: #fff;
  padding: 20px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h2 {
  font-size: 20px;
}

.close {
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
}

.open-modal-btn {
  background-color: #0056b3;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.wider-input {
  width: 100%;
  max-width: 100%;
  height: 200%;
}
</style>
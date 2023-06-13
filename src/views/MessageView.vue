<template>
  <section>
      <div class="container-fluid">
          <form @submit.prevent="handleSubmit" class="needs-validation" novalidate>
              <div class="container-fluid">
                  <div class="row">
                      <div class="col">
                          <h3 class="text-center">Global info</h3>
                            <div class="mb-3">
                              <label for="name" class="form-label">last_name:</label>
                              <input type="text" id="name" v-model="last_name" class="form-control" required>
                              <div class="invalid-feedback">last_name.</div>
                            </div>
                            <div class="mb-3">
                              <label for="email" class="form-label">first_name:</label>
                              <input type="email" id="email" v-model="first_name" class="form-control" required>
                              <div class="invalid-feedback">first_name.</div>
                            </div>
                            <div class="mb-3">
                              <label for="name" class="form-label">middle_name:</label>
                              <input type="text" id="name" v-model="middle_name" class="form-control" required>
                              <div class="invalid-feedback">middle_name.</div>
                            </div>
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col">
                                        <div class="mb-3">
                                          <label for="day" class="form-label">selectedDay:</label>
                                          <select id="day" v-model="birthday_day" class="form-select">
                                            <option value="">-- Выберите --</option>
                                            <option v-for="day in days" :value="day" :key="day">{{ day }}</option>
                                          </select>
                                        </div>
                                    </div>
                                    <div class="col">

                                    </div>
                                    <div class="col">

                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                              <label for="email" class="form-label">Email:</label>
                              <input type="email" id="email" v-model="email" class="form-control" required>
                              <div class="invalid-feedback">Пожалуйста, введите корректный email.</div>
                            </div>
                                                      <div class="mb-3">
                              <label for="name" class="form-label">Имя:</label>
                              <input type="text" id="name" v-model="name" class="form-control" required>
                              <div class="invalid-feedback">Пожалуйста, введите ваше имя.</div>
                            </div>
                            <div class="mb-3">
                              <label for="email" class="form-label">Email:</label>
                              <input type="email" id="email" v-model="email" class="form-control" required>
                              <div class="invalid-feedback">Пожалуйста, введите корректный email.</div>
                            </div>
                                                      <div class="mb-3">
                              <label for="name" class="form-label">Имя:</label>
                              <input type="text" id="name" v-model="name" class="form-control" required>
                              <div class="invalid-feedback">Пожалуйста, введите ваше имя.</div>
                            </div>
                            <div class="mb-3">
                              <label for="email" class="form-label">Email:</label>
                              <input type="email" id="email" v-model="email" class="form-control" required>
                              <div class="invalid-feedback">Пожалуйста, введите корректный email.</div>
                            </div>
                                                      <div class="mb-3">
                              <label for="name" class="form-label">Имя:</label>
                              <input type="text" id="name" v-model="name" class="form-control" required>
                              <div class="invalid-feedback">Пожалуйста, введите ваше имя.</div>
                            </div>
                            <div class="mb-3">
                              <label for="email" class="form-label">Email:</label>
                              <input type="email" id="email" v-model="email" class="form-control" required>
                              <div class="invalid-feedback">Пожалуйста, введите корректный email.</div>
                            </div>
                            <div class="mb-3">
                              <label for="email" class="form-label">Email:</label>
                              <input type="email" id="email" v-model="email" class="form-control" required>
                              <div class="invalid-feedback">Пожалуйста, введите корректный email.</div>
                            </div>
                            <div class="mb-3">
                              <label for="photos" class="form-label">Фотографии (максимум 3, каждая не более 2 МБ):</label>
                              <input type="file" id="photos" ref="photosInput" accept="image/*" multiple @change="handleFileChange" class="form-control" required>
                              <div class="invalid-feedback">Пожалуйста, загрузите фотографии.</div>
                            </div>
                      </div>
                      <div class="col"></div>
                      <div class="col"></div>
                  </div>
              </div>

            <button type="submit" class="btn btn-primary">Отправить</button>
          </form>
      </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
    name: "MessageView",
    data() {
    return {
      days: Array.from({ length: 31 }, (_, i) => i + 1),

      last_name: "",
      first_name: "",
      middle_name: "",
      birthday_day: "",
      photos: [],
    };
  },
  methods: {
    handleSubmit() {
      // Выполните здесь отправку данных формы через axios

      // Создаем объект FormData для передачи файлов и других данных
      const formData = new FormData();
      formData.append("name", this.name);
      formData.append("email", this.email);
      // Добавляем каждую фотографию в FormData
      this.photos.forEach((photo) => {
        formData.append("photos", photo);
      });

      // Отправляем данные формы на сервер
      axios
        .post("http://example.com/api/form", formData)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    handleFileChange(event) {
      const files = event.target.files;
      // Проверяем ограничение на количество загружаемых файлов
      if (files.length > 3) {
        alert("Максимум 3 файла допустимо");
        // Очищаем выбранные файлы
        this.$refs.photosInput.value = "";
        return;
      }

      // Проверяем ограничение на размер файлов (2 МБ)
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.size > 2 * 1024 * 1024) {
          alert("Максимальный размер файла - 2 МБ");
          // Очищаем выбранные файлы
          this.$refs.photosInput.value = "";
          return;
        }
      }

      // Присваиваем выбранные файлы свойству photos
      this.photos = Array.from(files);
    },
  },
}
</script>

<style scoped>

</style>
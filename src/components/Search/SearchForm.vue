<template>
  <section>
      <div class="card-content shadow-none p-3 mb-5 bg-light rounded collapse show" id="collapseSearch">
          <form @submit="submitForm">
              <div class="row mb-3">
                  <div class="col"></div>
                  <div class="col-md-4 text-center mb-2">
                    <label for="search_pib"> {{ $t('search.form.title') }} </label>
                    <input
                            type="text"
                            class="form-control text-center"
                            id="search_pib"
                            name="search_pib"
                            :placeholder="$t('search.form.placeholder')"
                            v-model="form.search_pib"
                    >
                  </div>
                  <div class="col"></div>
                  <div class="col-12 text-center mb-2">
                      <button class="btn btn-primary" type="submit">{{ $t('search.titles.title')}}</button>
                  </div>
              </div>
          </form>
      </div>
  </section>
</template>

<script>
export default {
    name: "SearchForm",
    data() {
      return {
        form: {
          search_pib: '',
        }
      };
    },
    methods: {
      submitForm(event) {
        event.preventDefault();
        // Отправка данных формы
        // Вы можете выполнить здесь AJAX-запрос или другую обработку данных
        console.log(this.form);
      }
    }
}
</script>

<style scoped>

</style>
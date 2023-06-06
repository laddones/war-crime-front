<template>
    <div class="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6 mb-5 pb-4 pt-2" v-for="person in persons" :key="person.id">
      <div class="card h-100" style="position: relative">
          <div class="row">
              <div class="col-12">
                 <a :href="person.absolute_url">
                    <img class="card-img-top d-block" :src="person.image" alt="Card image cap" href="#">
                 </a>
               </div>
              <div class="col-12">
                  <div class="card-body p-0">
                    <a :href="person.absolute_url">
                        <h6 class="card-title text-center">
                          {{ person.last_name }} {{ person.first_name }} {{ person.middle_name }}
                        </h6>
                    </a>
                    <ul class="list-group list-group-flush text-center">
                        <li class="list-group-item">
                            <strong>{{ $t('person.birthday') }}</strong>
                            <br>
                                {{ person.birthday }}
                        </li>
                        <li class="list-group-item"> <strong>{{ $t('person.unit') }}</strong>
                            <br>
                                {{ person.military_unit }}
                        </li>
                    </ul>
                 </div>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
export default {
    name: "PersonCards",
    props: {
        persons: {
            type: Array,
            required: true
        },
    }
}
</script>

<style scoped>

</style>
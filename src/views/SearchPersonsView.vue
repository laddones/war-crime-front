<template>
    <section>
        <div class="container-fluid">
            <div class="row">
                <h2 class="text-center mt-2">
                    {{$t('search.form.title')}}
                </h2>
                <div class="card-title pl-0 pr-0 shadow-none" id="searcher">
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseSearch" role="button" aria-expanded="true" aria-controls="collapseSearch">
                        {{ $t('search.titles.title_filter')}}
                        <i class="fa-solid fa-magnifying-glass fa-lg" style="color: white"></i>
                    </a>
                </div>
                <SearchForm/>
                <hr class="my-5">
                <PersonCards v-bind:persons="persons"/>
            </div>
        </div>
    </section>
</template>

<script>
import { getTitleTranslation } from '@/i18n';
import SearchForm from "@/components/Search/SearchForm.vue";
import PersonCards from "@/components/UI/PersonCards.vue";
import axios from "axios";

export default {
    name: "SearchPersonsView",
    components: {PersonCards, SearchForm},
    created() {
        document.title = getTitleTranslation('base.navbar.search_people');
    },
    data(){
        return {
            persons: [],
            carouselItemsToShow: 2,
        }
    },
    created() {
      this.getCarouselItems();
    },
    data() {
        return{
            persons: [
                {
                    id: 1,
                    image: 'https://images.unsplash.com/photo-1548092693-585cfab34e01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXJteXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
                    absolute_url: '/person/1',
                    last_name: 'test-1',
                    first_name: 'test-1',
                    middle_name: 'test-1',
                    birthday: '10.10.2002',
                    military_unit: 'test-1'
                },
                {
                    id: 2,
                    image: 'https://images.unsplash.com/photo-1548092693-585cfab34e01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXJteXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
                    absolute_url: '/person/2',
                    last_name: 'test-1',
                    first_name: 'test-1',
                    middle_name: 'test-1',
                    birthday: '10.10.2002',
                    military_unit: 'test-1'
                },
                {
                    id: 3,
                    image: 'https://images.unsplash.com/photo-1548092693-585cfab34e01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXJteXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
                    absolute_url: '/person/3',
                    last_name: 'test-1',
                    first_name: 'test-1',
                    middle_name: 'test-1',
                    birthday: '10.10.2002',
                    military_unit: 'test-1'
                },
                {
                    id: 4,
                    image: 'https://images.unsplash.com/photo-1548092693-585cfab34e01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXJteXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
                    absolute_url: '/person/4',
                    last_name: 'test-1',
                    first_name: 'test-1',
                    middle_name: 'test-1',
                    birthday: '10.10.2002',
                    military_unit: 'test-1'
                },
                {
                    id: 5,
                    image: 'https://images.unsplash.com/photo-1548092693-585cfab34e01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXJteXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
                    absolute_url: '/person/5',
                    last_name: 'test-1',
                    first_name: 'test-1',
                    middle_name: 'test-1',
                    birthday: '10.10.2002',
                    military_unit: 'test-1'
                },
                {
                    id: 6,
                    image: 'https://images.unsplash.com/photo-1548092693-585cfab34e01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXJteXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
                    absolute_url: '/person/6',
                    last_name: 'test-1',
                    first_name: 'test-1',
                    middle_name: 'test-1',
                    birthday: '10.10.2002',
                    military_unit: 'test-1'
                },
            ]
        }
    },
    methods: {
    getCarouselItems(){
            axios.get("http://127.0.0.1:8000/api/v1/carouseldataview/")
            .then(response => {
                this.persons = response.data;
                console.log(this.persons);
            })
            .catch(error => {
              console.log(error);
            });
        },



    }
    }

</script>

<style scoped>
  #searcher {
      text-align: center;
      margin-bottom: 2rem;
      margin-top: 1rem;
  }
</style>
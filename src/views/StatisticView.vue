<template>
  <div class="container-fluid">
        <div class="text-center mb-4 pb-2 mt-4">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-3 col-lg-4 col-md-3 col-sm-2"></div>
                    <div class="col shadow">
                        <h1 class="text-dark">
                            {{ $t('base.navbar.statistic') }}
                        </h1>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-3 col-sm-2"></div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-3 col-lg-4 col-md-3 col-sm-2"></div>
                <div class="col">
                    <div class=" text-center" role="alert">
                      <p style="font-weight: bold">
                          {{ $t('statistic.description')}}
                      </p>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-3 col-sm-2"></div>
            </div>
        </div>
        <div class="row mb-2">
            <div class="col-md-12 col-lg-6">
                <div class="chart-container" style="border: thick double #32a1ce;">
                  <StatisticPie pie_title="Війскьове звання" pie_id="RankChartArmyChart" :data-pie=response.ranks[0] />
                </div>
            </div>
             <div class="col-md-12 col-lg-6">
                <div class="chart-container" style="border: thick double #32a1ce;">
                    <StatisticPie pie_title="Війскьове звання" pie_id="RankChartFleetChart" :data-pie=response.ranks[1] />
                </div>
            </div>
        </div>
        <div class="row mb-2">
            <div class="col-md-12 col-lg-3"></div>
            <div class="col-md-12 col-lg-6">
                <div class="chart-container" style="border: thick double #32a1ce;">
                    <StatisticPie pie_title="Військове формування" pie_id="TypeOfArmyChart" :data-pie=response.type_of_army />
                </div>
            </div>
            <div class="col-md-12 col-lg-3"></div>
        </div>
        <div class="row mb-2">
            <div class="col-md-12 col-lg-6">
                 <div class="chart-container" style="border: thick double #32a1ce;">
                    <StatisticBar bar_title="Вік" bar_id="BirthChart" :data-bar=response.birth :bar_reverse=false />
                </div>
            </div>
            <div class="col-md-12 col-lg-6">
                 <div class="chart-container" style="border: thick double #32a1ce;">
                     <StatisticBar bar_title="Рік смерті" bar_id="DeathChart" :data-bar=response.death :bar_reverse=true />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import StatisticPie from "@/components/Statistic/StatisticPie.vue";
import StatisticBar from "@/components/Statistic/StatisticBar.vue";
import {getTitleTranslation} from "@/i18n";
import axios from "axios";

export default {
    name: "StatisticView",
    components: {StatisticBar, StatisticPie},
    data(){
      return {
        response: {
            ranks: [],
            type_of_army: {},
            birth: {},
            death:{},
          // ranks: [
          //     {
          //         "РЯДОВОЙ": 2130,
          //         "ЕФРЕЙТОР": 729,
          //         "МЛАДШИЙ СЕРЖАНТ": 668,
          //         "СЕРЖАНТ": 926,
          //         "СТАРШИЙ СЕРЖАНТ": 506,
          //         "СТАРШИНА": 87,
          //         "ПРАПОРЩИК": 170,
          //         "СТАРШИЙ ПРАПОРЩИК": 122,
          //         "МЛАДШИЙ ЛЕЙТЕНАНТ": 34,
          //         "ЛЕЙТЕНАНТ": 432,
          //         "СТАРШИЙ ЛЕЙТЕНАНТ": 571,
          //         "КАПИТАН": 426,
          //         "МАЙОР": 287,
          //         "ПОДПОЛКОВНИК": 153,
          //         "ПОЛКОВНИК": 68,
          //         "ГЕНЕРАЛ-МАЙОР": 9,
          //         "ГЕНЕРАЛ-ЛЕЙТЕНАНТ": 4
          //     },
          //     {
          //         "МАТРОС": 47,
          //         "СТАРШИЙ МАТРОС": 47,
          //         "СТАРШИНА 1 СТАТЬИ": 1,
          //         "ГЛАВНЫЙ СТАРШИНА": 2,
          //         "ГЛАВНЫЙ КОРАБЕЛЬНЫЙ СТАРШИНА": 2,
          //         "МИЧМАН": 5,
          //         "СТАРШИЙ МИЧМАН": 5,
          //         "КАПИТАН-ЛЕЙТЕНАНТ": 5,
          //         "КАПИТАН 3 РАНГА": 8,
          //         "КАПИТАН 2 РАНГА": 3,
          //         "КАПИТАН 1 РАНГА": 1
          //     }
          // ],
          // type_of_army: {
          //     "Сухопутные войска": 4294,
          //     "Воздушно-космические силы": 122,
          //     "Военно-Морской Флот": 533,
          //     "Ракетные войска стратегического назначения": 42,
          //     "Воздушно-десантные войска": 966,
          //     "Другие подразделения МО РФ": 319,
          //     "МВД": 216,
          //     "ЧВК": 5119,
          //     "Незаконные вооружённые формирования": 2260
          // },
          // birth: {
          //     "55+": 633,
          //     "От 45 до 55": 3056,
          //     "От 35 до 45": 6471,
          //     "От 25 до 35": 7610,
          //     "От 18 до 25": 3183
          // },
          // death: {
          //     "2002": 1,
          //     "2013": 1,
          //     "2014": 915,
          //     "2015": 889,
          //     "2016": 347,
          //     "2017": 302,
          //     "2018": 236,
          //     "2019": 266,
          //     "2020": 197,
          //     "2021": 176,
          //     "2022": 13151,
          //     "2023": 8595
          // }
        }
      }
    },
    created() {
        document.title = getTitleTranslation('base.navbar.statistic');
        this.getChartsItems();
    },
    methods:{
       getChartsItems(){
            axios.get("http://127.0.0.1:8000/api/v1/chart_js_statistic/")
            .then(response => {
                this.response.ranks = response.data.ranks;
                this.response.death = response.data.death;
                this.response.birth = response.data.birth;
                this.response.type_of_army = response.data.type_of_army;
                console.log(this.response);
            })
            .catch(error => {
              console.log(error);
            });
        },
    },
}
</script>

<style scoped>

</style>
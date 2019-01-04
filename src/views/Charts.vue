<template>
    <div class='sounds'>

        <ion-header>
            <ion-toolbar>
                <ion-title>Bro do you even data?<ion-icon name='trending-up'></ion-icon></ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-grid padding-top>
            <ion-row align-items-center>
                <ion-col size='6'>
                    <line-chart :chart-data='lineData' :options='lineOptions'></line-chart>
                </ion-col>
                <ion-col size='6'>
                    <bar-chart :chart-data='barData' :options='barOptions'></bar-chart>
                </ion-col>
            </ion-row>
            <ion-row align-items-end>
                <ion-col size='6'>
                    <doughnut-chart :chart-data='doughnutData' :options='doughnutOptions'></doughnut-chart>
                </ion-col>
                <ion-col size='6'>
                    <bubble-chart :chart-data='bubbleData' :options='bubbleOptions'></bubble-chart>
                </ion-col>
            </ion-row>
            <ion-row align-items-center class='randomize'>
                <ion-col size='12'>
                    <ion-button color='dark' @click='fillData()'>Randomize</ion-button>
                </ion-col>
            </ion-row>
        </ion-grid>
    </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import LineChart from '../components/charts/LineChart.vue';
import BarChart from '../components/charts/BarChart.vue';
import DoughnutChart from '../components/charts/DoughnutChart.vue';
import BubbleChart from '../components/charts/BubbleChart.vue';

@Component({
    components: {
        LineChart,
        BarChart,
        DoughnutChart,
        BubbleChart,
    },
})

export default class Charts extends Vue {
    protected lineData: object = {};
    protected barData: object = {};
    protected doughnutData: object = {};
    protected bubbleData: object = {};

    protected lineOptions: object = { legend: {display: false }};
    protected barOptions: object = { legend: {display: false }};
    protected doughnutOptions: object = { legend: {display: false }};
    protected bubbleOptions: object = { legend: {display: false }};

    protected mounted(): void {
      this.fillData();
    }

    protected fillData(): void {
        this.lineData = {
            datasets: [
                {
                    backgroundColor: 'rgba(83, 192, 171, .7)',
                    data: [this.getRandomInt(), this.getRandomInt()],
                }, {
                    backgroundColor: 'rgba(29, 137, 158, .7)',
                    data: [this.getRandomInt(), this.getRandomInt()],
                },
            ],
        };

        this.barData = {
            labels: ['my', 'favorite', 'color', 'is', 'rainbow'],
            datasets: [
                {
                    label: '# of Votes',
                    data: [
                        this.getRandomInt(),
                        this.getRandomInt(),
                        this.getRandomInt(),
                        this.getRandomInt(),
                        this.getRandomInt(),
                    ],
                    backgroundColor: [
                        '#DF5A48',
                        '#F89E3E',
                        '#EFC94C',
                        '#53C0AB',
                        '#1D899E',
                    ],
                },
            ],
        };

        this.doughnutData = {
            datasets: [
                {
                    label: '# of Votes',
                    data: [
                        this.getRandomInt(),
                        this.getRandomInt(),
                        this.getRandomInt(),
                        this.getRandomInt(),
                        this.getRandomInt(),
                    ],
                    backgroundColor: [
                        '#DF5A48',
                        '#F89E3E',
                        '#EFC94C',
                        '#53C0AB',
                        '#1D899E',
                    ],
                },
            ],
        };

        this.bubbleData = {
            labels: ['Data'],
            datasets: [
                {
                    label: 'Data One',
                    data: [
                        {
                            x: this.getRandomInt(),
                            y: this.getRandomInt(),
                            r: this.getRandomInt(),
                        },
                        {
                            x: this.getRandomInt(),
                            y: this.getRandomInt(),
                            r: this.getRandomInt(),
                        },
                        {
                            x: this.getRandomInt(),
                            y: this.getRandomInt(),
                            r: this.getRandomInt(),
                        },
                        {
                            x: this.getRandomInt(),
                            y: this.getRandomInt(),
                            r: this.getRandomInt(),
                        },
                        {
                            x: this.getRandomInt(),
                            y: this.getRandomInt(),
                            r: this.getRandomInt(),
                        },
                        {
                            x: this.getRandomInt(),
                            y: this.getRandomInt(),
                            r: this.getRandomInt(),
                        },
                    ],
                    backgroundColor: '#F89E3E',
                },
            ],
        };

    }

    protected getRandomInt(): number {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    }
}
</script>

<style scoped lang='scss'>
    ion-grid {
        height: 80vh;
        padding-top: 5vh;
    }

    ion-row.randomize {
        height: 25vh;
    }
</style>

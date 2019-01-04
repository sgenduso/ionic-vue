<template>
    <div class="home" align-self-center>
        <ion-grid>
            <ion-row>
                <ion-col size="12" align-self-center>
                    <img class="spencil-logo" alt="logo" src="../assets/heart-spencil.png">
                    <h1>Vue + Ionic + Typescript</h1>
                </ion-col>
            </ion-row>
        </ion-grid>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class Home extends Vue {}
</script>

<style lang="scss" scoped>

    ion-grid, ion-row {
        height: 85vh;
    }

    @keyframes pound {
        50% { transform: scale(1.2); }
    }

    .spencil-logo {
        -webkit-animation: pound 1s infinite;
        -moz-animation: pound 1s infinite;
        animation: pound 1s infinite;
    }
</style>

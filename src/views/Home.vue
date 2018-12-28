<template>
    <div class="home" align-self-center>
        <!-- <ion-content fullScreen> -->
            <ion-grid>
                <ion-row>
                    <ion-col size="12" align-self-center>
                        <img class="spencil-logo" alt="logo" src="../assets/heart-spencil.png">
                        <HelloWorld msg="Vue + Ionic + Typescript"/>
                    </ion-col>
                </ion-row>
            </ion-grid>
            <!-- <tabs></tabs> -->
        <!-- </ion-content> -->
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
// import Tabs from '@/components/Tabs.vue';

@Component({
    components: {
        HelloWorld,
        // Tabs,
    },
})

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

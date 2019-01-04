<template>
    <div class="sounds">

        <ion-header>
            <ion-toolbar>
                <ion-title>Old MacDonald Had a Dragon<ion-icon name="musical-note"></ion-icon></ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-grid padding-top>
            <ion-row align-items-center>
                <ion-col>
                    <i class="fas fa-dragon fa-6x red animated" :class="{'rubberBand': shaking == 'dragon'}" @click="playSound('dragon')"></i>
                </ion-col>
                <ion-col>
                    <i class="fas fa-dog fa-6x orange animated" :class="{'swing': shaking == 'dog'}" @click="playSound('dog')"></i>
                </ion-col>
            </ion-row>
            <ion-row align-items-center>
                <ion-col>
                    <i class="fas fa-cat fa-6x yellow animated" :class="{'shake': shaking == 'cat'}" @click="playSound('cat')"></i>
                </ion-col>
                <ion-col>
                    <i class="fas fa-frog fa-6x green animated" :class="{'wobble': shaking == 'frog'}" @click="playSound('frog')"></i>
                </ion-col>
            </ion-row>
            <ion-row align-items-center>
                <ion-col>
                    <i class="fas fa-hippo fa-6x blue animated" :class="{'jello': shaking == 'hippo'}" @click="playSound('hippo')"></i>
                </ion-col>
                <ion-col>
                    <i class="fas fa-crow fa-6x black animated" :class="{'tada': shaking == 'crow'}" @click="playSound('crow')"></i>
                </ion-col>
            </ion-row>
        </ion-grid>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Sounds extends Vue {
    protected shaking: string = '';

    protected playSound(animal: string): void {
        this.shaking = animal;

        const sound = new Audio(require(`../assets/sounds/${animal}.mp3`));
        sound.play();

        // this.shaking = '';
    }
}
</script>

<style scoped lang="scss">
    ion-grid {
        height: 75vh;
    }
    ion-row {
        height: 25vh;
    }
</style>

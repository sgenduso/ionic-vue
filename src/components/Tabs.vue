<template>
    <ion-tabs>
        <ion-tab label="Home" icon="home">
            <!-- use (swipe) and https://beta.ionicframework.com/docs/native/native-page-transitions -->
            <transition name="fade" enter-active-class="animated fade">
                <Home/>
            </transition>
        </ion-tab>
        <ion-tab label="Gestures" icon="redo">
            <Gestures/>
        </ion-tab>
        <ion-tab label="API" icon="logo-reddit">
            <transition name="fade" enter-active-class="animated fade">
                <API/>
            </transition>
        </ion-tab>
        <ion-tab label="Sounds" icon="musical-notes">
            <transition name="fade" enter-active-class="animated fade">
                <Sounds/>
            </transition>
        </ion-tab>
        <ion-tab label="Photos" icon="camera">
            <transition name="fade" enter-active-class="animated fade">
                <Photos/>
            </transition>
        </ion-tab>
        <ion-tab label="Charts" icon="stats">
            <transition name="fade" enter-active-class="animated fade">
                <Charts/>
            </transition>
        </ion-tab>
    </ion-tabs>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Home from '@/views/Home.vue'; // @ is an alias to /src
import Gestures from '@/views/Gestures.vue';
import API from '@/views/API.vue';
import Sounds from '@/views/Sounds.vue';
import Photos from '@/views/Photos.vue';
import Charts from '@/views/Charts.vue';

@Component({
    components: {
        Home,
        Gestures,
        API,
        Sounds,
        Photos,
        Charts,
    },
})

export default class Tabs extends Vue {}
</script>

<style scoped lang="scss">

</style>


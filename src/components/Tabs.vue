<template>
    <ion-tabs>
        <ion-tab label="Home" icon="home">
            <Home/>
        </ion-tab>
        <ion-tab label="API" icon="logo-reddit">
            <API/>
        </ion-tab>
        <ion-tab label="Sounds" icon="musical-notes">
            <Sounds/>
        </ion-tab>
    </ion-tabs>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Home from '@/views/Home.vue'; // @ is an alias to /src
import API from '@/views/API.vue';
import Sounds from '@/views/Sounds.vue';

@Component({
    components: {
        Home,
        API,
        Sounds,
    },
})

export default class Tabs extends Vue {}
</script>

<style scoped lang="scss">

</style>


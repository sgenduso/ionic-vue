<template>
    <div class="sounds" align-self-center>
        <!-- <ion-content fullScreen> -->
            <ion-grid>
                <ion-row>
                    <ion-col size="12" align-self-center>
                        <h1>Sounds</h1>
                    </ion-col>
                </ion-row>
            </ion-grid>
        <!-- </ion-content> -->
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class Sounds extends Vue {

}
</script>

<style lang="scss" scoped>
    ion-grid, ion-row {
        height: 75vh;
    }
</style>

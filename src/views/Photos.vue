<template>
    <div class="photos">

        <ion-header>
            <ion-toolbar>
                <ion-title>Take a snapshot. What's a snapshot?</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-grid padding-top>
            <ion-row class="aww-btn" align-items-end>
                <ion-col size="12">
                    <ion-button color="secondary" size="large" @click="takePhoto">take a photo</ion-button>
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col size="12">
                    <div v-if="imgSrc" class = "photo" padding-top>
                        <img :src="imgSrc" alt="best photo eva">
                    </div>
                </ion-col>
            </ion-row>
        </ion-grid>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Plugins, CameraResultType } from '@capacitor/core';

const { Camera } = Plugins;

@Component
export default class Photos extends Vue {
    protected photo: string = '';
    protected imgSrc: string|undefined = '';

    protected async takePhoto(): Promise<void> {
        if (Camera) {
            const image = await Camera.getPhoto({
                quality: 90,
                resultType: CameraResultType.Uri
            });
            // image.webPath will contain a path that can be set as an image src. You can access
            // the original file using image.path, which can be passed to the Filesystem API to
            // read the raw data of the image, if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
            const imageUrl = image.webPath;
            // can be set to the src of an image now
            this.imgSrc = imageUrl;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    ion-grid {
        height: 75vh;
    }

</style>

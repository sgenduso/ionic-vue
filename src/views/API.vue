<template>
    <div class="api">

        <ion-header>
            <ion-toolbar>
                <ion-title>Go Fetch</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-grid padding-top>
            <ion-row class="aww-btn" align-items-end>
                <ion-col size="12">
                    <ion-button color="primary" size="large" @click="getRandomAww">awww</ion-button>
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col size="12">
                    <div v-if="randomAww" class = "aww" padding-top>
                        <img :src="randomAww" alt="random aww">
                        <p>{{ title }}</p>
                    </div>
                </ion-col>
            </ion-row>
        </ion-grid>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';
import _ from 'lodash';

@Component
export default class API extends Vue {
    protected randomAww: string | null = null;
    protected title: string | null = null;
    protected awws: Array<string|null> = [];
    protected titles: Array<string|null> = [];

    // shorthand for component methods
    protected async getRandomAww(): Promise<string> {
        if (this.awws.length) {
            this.randomAww = this.pickRandomFromList(this.awws);
        } else {
            const url = 'https://www.reddit.com/r/aww/top.json?t=day&limit=100';
            const response = await axios.get(url);
            const imageUrls = this.getImageUrlsFromResponse(response);
            this.randomAww = this.pickRandomFromList(imageUrls);
        }
    }

    protected getImageUrlsFromResponse(response: object): string[] {
        interface Post {
            data: {
                url: string,
                title: string,
            };
        }

        const posts = _.get(response, 'data.data.children');
        const postsWithImages = posts.filter((post: Post) => post.data.url.includes('i.redd.it'));
        const imageUrls = postsWithImages.map((post: Post) => post.data.url);
        const titles = postsWithImages.map((post: Post) => post.data.title);
        this.awws = imageUrls;

        return imageUrls;
    }

    protected pickRandomFromList(imageUrls: Array<string|null>): string | null {
        const numOptions = imageUrls.length;
        if (numOptions) {
            const randomInt = Math.floor(Math.random() * numOptions - 1);
            this.title = this.titles[randomInt];
            return imageUrls[randomInt];
        } else {
            return null;
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    ion-grid {
        height: 75vh;
    }
    .aww-btn {
        height: 15vh;
    }
    .aww, img {
        max-height: 55vh;
    }
</style>

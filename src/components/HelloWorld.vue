<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <ion-button color="primary" @click="getRandomAww">AWW</ion-button>
        <div class = "aww" padding-top>
            <img v-if="randomAww" :src="randomAww" alt="random aww">
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';
import _ from 'lodash';

@Component
export default class HelloWorld extends Vue {
    // shorthand for getting props passed to component
    @Prop() private msg!: string;
    randomAww: string | null = null;
    awws: string|null[] = [];

    // shorthand for component methods
    async getRandomAww(): Promise<string> {
        if (this.awws.length) {
            this.randomAww = this.pickRandomFromList(this.awws);
        } else {
            let url = 'https://www.reddit.com/r/aww/top.json?t=day&limit=100';
            let response = await axios.get(url);
            let imageUrls = this.getImageUrlsFromResponse(response);
            this.randomAww = this.pickRandomFromList(imageUrls);
        }
    }

    getImageUrlsFromResponse(response: object): string[] {
        let posts = _.get(response, 'data.data.children');
        let postsWithImages = posts.filter(post => post.data.url.includes('i.redd.it'));
        let imageUrls = postsWithImages.map(post => post.data.url);
        this.awws = imageUrls;

        return imageUrls;
    }

    pickRandomFromList(imageUrls: string[]): string | null {
        let numOptions = imageUrls.length;
        if (numOptions) {
            let randomInt = Math.floor(Math.random() * numOptions - 1);
            return imageUrls[randomInt];
        } else {
            return null;
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: var(--orange);
    }

    .aww, img {
        max-height: 35vh;
    }
</style>

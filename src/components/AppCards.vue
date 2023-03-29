<script>
    import {store} from "../store.js";
    import axios from "axios";
    import CardsItem from "./CardsItem.vue";
    import AppLoader from "./AppLoader.vue";
    import AppSearch from "./AppSearch.vue";

    export default {
        name: "AppCards",

        data() {
            return {
                store,
                viewCard: false,
            }
        },

        components: {
            CardsItem,
            AppLoader,
            AppSearch,
        },

        created() {
            this.viewCard = false;
            axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0").then((res)=>{
                this.store.cards = res.data.data;
                console.log(res.data.data);
                this.viewCard = true;
            })
        },

        methods: {
            searchCard() {
                let APIquestion = this.store.APIcall + this.store.APIquery + this.store.inputValue;
                console.log(APIquestion)

                axios.get(APIquestion).then((res)=>{
                    this.store.cards = res.data.data;
                })
            }
        }
    }
</script>

<template>

        <div class="card-container">
            <AppSearch @clickButton="searchCard()"></AppSearch>

            <CardsItem v-if="this.viewCard" v-for="card in store.cards"
                    :title="card.name" :image="card.card_images[0].image_url_cropped"
                    :description="card.desc"
                    :type="card.frameType"
                    :subtitle="card.type"
                    >
            </CardsItem>
            <AppLoader v-else></AppLoader>
        </div>
    
</template>

<style lang="scss" scoped>
    .card-container {
        background-image: url("public/images/bigwallpaper.jpg");
        background-size: contain;

        display: flex;
        flex-flow: row wrap;
        gap: 20px;
        justify-content: center;

        padding: 50px;

    }
</style>

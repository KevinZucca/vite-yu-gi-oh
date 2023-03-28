<script>
    import {store} from "../store.js";
    import axios from "axios";
    import CardsItem from "./CardsItem.vue";
    import AppLoader from "./AppLoader.vue";

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
        },

        created() {
            axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0").then((res)=>{
                this.store.cards = res.data.data;
                console.log(res.data.data);
            })
        },

        mounted() {
            setTimeout(() => {
                this.viewCard = true;
            }, 3000);
            this.viewCard = false
        }
    }
</script>

<template>
  <div class="card-container">
    <AppLoader v-if="!this.viewCard"></AppLoader>
    <CardsItem v-if="this.viewCard" v-for="card in store.cards"
               :title="card.name" :image="card.card_images[0].image_url_cropped"
               :description="card.desc"
               :type="card.frameType"
               :subtitle="card.type"
               >
    </CardsItem>
  </div>
</template>

<style lang="scss" scoped>
    .card-container {
        display: flex;
        flex-flow: row wrap;
        gap: 20px;
        justify-content: center;

        padding: 50px;
    }
</style>

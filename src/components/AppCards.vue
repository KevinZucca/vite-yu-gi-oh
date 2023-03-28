<script>
    import {store} from "../store.js";
    import axios from "axios";
    import CardsItem from "./CardsItem.vue";

    export default {
        name: "AppCards",

        data() {
            return {
                store,
            }
        },

        components: {
            CardsItem,
        },

        created() {
            axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0").then((res)=>{
                this.store.cards = res.data.data;
                console.log(res.data.data);
            })
        }
    }
</script>

<template>
  <div class="card-container">
    <CardsItem v-for="card in store.cards" :title="card.name" :image="card.card_images.image_url" :description="card.desc"></CardsItem>
  </div>
</template>

<style lang="scss" scoped>
    .card-container {
        display: flex;
        flex-flow: row wrap;
        gap: 10px;
        justify-content: center;

        padding: 50px;
    }
</style>

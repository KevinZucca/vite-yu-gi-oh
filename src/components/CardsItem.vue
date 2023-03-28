<script>
    import {store} from "../store.js";

    export default {
      name: "CardsItem",

        data() {
            return {
              store,
            }
        },

        props: {
          title: String,
          image: String,
          description: String,      
        }
    }
</script>

<template>
  <div class="card">
    <h2 class="title">{{ title }} </h2>
    <img :src="image" alt="card-img">
    <p class="description">{{ description }}</p>
  </div>
</template>




<style lang="scss" scoped>

.card {
        display: flex;
        flex-flow: column;

        width: 300px;
        height: 500px;
        border: 1px solid black;
        

        .title {
          text-align: center;
          font-size: 14px;
        }

        .description {
          font-size: .8em;
        }
    }
</style>

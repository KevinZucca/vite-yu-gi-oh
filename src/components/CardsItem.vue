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
          type: String,
          subtitle: String,
          image: String,
          description: String,      
        }
    }
</script>

<template>
  <div class="card">

    <div class="card-header">
      <h2 class="title">{{ title }} </h2>
      <p>{{ type }}</p>
    </div>

    <div class="subtitle">
      <p>[ {{ subtitle }} ]</p>
    </div>

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
        padding: 10px;
        border: 1px solid black;
        margin-bottom: 30px;

        &-header {
          display: flex;
          align-items: center;
          justify-content: space-between;

          height: 25px;
          border-style: outset;
          padding: 3px;
          margin-bottom: 10px;

          .title {
            text-align: center;
            font-size: 14px;
          }
        }

        .subtitle {
          display: flex;
          justify-content: flex-end;

          text-transform: uppercase;
          font-weight: bold;
        } 

        img {
          pointer-events: none;
          border-style: outset;
        }

        .description {
          font-size: .8em;
        }
    }
</style>

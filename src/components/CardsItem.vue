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

    <div class="card-main">
      <div class="subtitle">
        <p>[ {{ subtitle }} ]</p>
      </div>

      <div class="image-container">
       <img :src="image" alt="card-img">
      </div>
    </div>
  
    <div class="description-container">
      <p class="description">{{ description }}</p>
    </div>
  </div>
</template>




<style lang="scss" scoped>

.card {
        display: flex;
        flex-flow: column;

        width: 300px;
        height: 500px;
        padding: 10px;
        border: 10px solid black;
        margin-bottom: 30px;

        &-header {
          display: flex;
          align-items: center;
          justify-content: space-between;

          height: 25px;
          border-style: outset;
          padding: 3px;
          text-transform: uppercase;

          .title {
            text-align: center;
            font-size: 14px;
          }

        }



        .card-main {
          display: flex;
          flex-flow: column;

          margin: 0 8px;
          
          .subtitle {
            display: flex;
            justify-content: flex-end;

            text-transform: uppercase;
            font-weight: bold;
            line-height: 0.1;
          } 

          .image-container {
            display: flex;
            justify-content: center;

            max-width: 100%;
            height: 250px;
            overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            pointer-events: none;
            border-style: outset;
          }
        }
        }

       

        .description-container {
          display: flex;
          flex-flow: row wrap;

          min-height: 130px;
          border: 3px solid #ce994f82;
          font-size: .7em;
          margin-top: 10px;

          .description {
            padding: 5px;
          }
        }
    }
</style>

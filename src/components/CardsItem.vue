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
        },

        
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

@use "../variables.scss" as *;

.card {
        display: flex;
        flex-flow: column;

        width: 300px;
        height: 500px;
        padding: 10px;
        border: 10px solid $card-border-bg;
        margin-bottom: 30px;
        background-color: $card-bg;
        box-shadow: 5px 5px 10px rgba($color: #000000, $alpha: 1.0);
        
        

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
            height: 260px;
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

          height: 150px;
          border: 4px solid #ce994f82;
          margin-top: 5px;
          background-color: #f2e0d6;
          overflow: hidden;


          .description {
            font-size: .65em;
            padding: 2px;
            padding-top: 0;
          }

        }
    }
</style>

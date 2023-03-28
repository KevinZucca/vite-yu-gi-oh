<script>

export default {
    name: "AppLoader",
  data() {
    return {
      
  }
},
}


</script>

<template>
    <div id="container">
        <div id="container-centered">
            <h1>Loading...</h1>
            <img src="/public/images/logo.png" alt="">
        </div>
    </div>    
</template>

<style lang="scss">

#container {
    display: flex;
    justify-content: center;
    align-items: flex-start;

    width: 90%;
    height: 80vh;
    background-image: url("public/images/wallpaper.png");
    border: 2px solid;
    border-radius: 20px;
    box-shadow: 15px 15px 30px 20px rgba($color: #0000008f, $alpha: 1.0);

    
    &-centered {
        display: flex;
        flex-flow: column;
        justify-content: center;
        
        text-align: center;

        h1 {
            font-size: 70px;
            text-transform: uppercase;
        }

        img {
            width: 800px;
            pointer-events: none;
        }

        
    }
}

    
</style>

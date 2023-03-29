<script>

import {store} from "../store.js";

export default {
    name: "AppSearch",
  data() {
    return {
      store,
  }
},
}


</script>

<template>
    <div class="container">
        <input v-model="store.inputValue" @keyup.enter="$emit('clickButton')" type="text" placeholder="Search Card">
        <button @click="$emit('clickButton')" >Search</button>
    </div>
</template>

<style lang="scss">
    .container {
        width: 100%;

        display: flex;
        justify-content: center;
    }    
</style>

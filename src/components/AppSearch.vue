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
        height: 50px;

        display: flex;
        justify-content: center;

        input {
            width: 300px;
            margin-right: 10px;

            background-color: #7c5cf15f;
            color: white;
            border: none;
            border-radius: 12px;
        }

        button {
            border: none;
            border-radius: 10px;
            color: white;
            background-color: #3f38f27e;
        }
    }    
</style>

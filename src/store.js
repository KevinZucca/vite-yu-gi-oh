import {reactive} from 'vue';

export const store = reactive ({
    cards: [],

    inputValue: "",

    APIcall: "https://db.ygoprodeck.com/api/v7/cardinfo.php",

    APIquery: "?num=50&offset=0&fname=",
    
    ResultCounter: "",

});
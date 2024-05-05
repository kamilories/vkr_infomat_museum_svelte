<script>
    // Ваши переменные, функции и логика здесь
    import textData from '../data/data.json';
    import KartaUezdaBig from './karta_uezda_big.svelte';

    let page_json = textData.gorod_laishev;
    let karta=page_json.img_karta_uezda;
    let lupa=page_json.img_lupa_for_karta;
    let krestik=page_json.krestik;

    let if_smallkarta=true;
    let if_bigkarta=false;
    function gotosmallkarta(){
        if_smallkarta=true;
        if_bigkarta=false;
    }
    function gotobigkarta(){
        if_smallkarta=false;
        if_bigkarta=true;
    }
</script>

<style>
    /* Ваши стили здесь */
    
    .foto{
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        top:0%;
        height: 100vh;
        max-width: 100%;
    }
    .button_lupa{
        position: absolute;
        top: 0.5%;
        left: 0.5%;
        height: auto;
        padding: 0;
        border: none;
        background: transparent;
        max-width: 100%;
        width: 20%;
   }
   .button_lupa img{
        width: 100%; /* Ширина изображения 100% от родительскего элемента */
        height: auto;
   }
   .krestik_button{
        position: fixed;
        top: 0px;
        right: 0px;
        height: auto;
        padding: 0;
        border: none;
        background: transparent;
        max-width: 100%;
        width: 10%;
        z-index: 2;
   }
   .krestik_button img{
        width: 100%; /* Ширина изображения 100% от родительскего элемента */
        height: auto;
   }
</style>

<div>
    <!-- Ваш контент здесь -->
    {#if if_smallkarta}

    <img class="foto" src={karta} alt="home"> 
    <button on:click={gotobigkarta}  class="button_lupa">
        <img  src={lupa} alt="button_karta">  
    </button>
    {:else if if_bigkarta}
    <KartaUezdaBig />
    <button on:click={gotosmallkarta} class="krestik_button">
        <img src={krestik} alt="home">  
    </button>
    {/if}
</div>
<script>
    // импорт компонентов
    import textData from '../data/data.json';
    import Magazin from './magazin.svelte';
    // импорт джсон
    let page_json = textData.plan_goroda;
    let zagolovok=page_json.zagolovok;
    let pictures=page_json.img;
    let button_magazin=page_json.button_magazin;
    let spisok_text=page_json.spisok_text;
    let krestik=page_json.krestik;

    let if_plan_main=true;
    let if_magaz=false;

    function goplanmain(){
        if_plan_main=true;
        if_magaz=false;
        
    }
    function gomagaz(){
        if_plan_main = false;
        if_magaz=true;
    }
</script>

<style>
    /* Ваши стили здесь */
    .zagolovok{
        position: absolute;
        font-family:'KuzanyanC';
        top: 18%;
        left: 22.6%;
        max-width: 100%;
        color: #663300;
        font-size: 4vh;
    }
    .text_history{
        position: absolute;
        font-family: "PT Sans Caption";
        top:37%;
        left: 22%;
        width: 18%;
        max-width: 100%;
        word-wrap: break-word;
        white-space: pre-wrap;
        font-size: 1.5vh;
    }
    .foto{
        position: absolute;
        left: 0%;
        top: 18%;
        height: 81%;
        max-width: 100%;
        z-index: -1;
    }
    .button_1{
        position: absolute;
        top: 20%;
        left: 55%;
        width: 37%;
        height: auto;
        padding: 0;
        border: none;
        background: transparent;
        max-width: 100%;
    }
    .button_1 img{
        width: 100%; /* Ширина изображения 100% от родительскего элемента */
        height: auto;
    }

    .krestik_button{
        position: absolute;
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
    {#if if_plan_main}
    <h1 class="zagolovok">{zagolovok}</h1>
    <img class="foto" src={pictures} alt="img"> 
    <pre class="text_history">{spisok_text}</pre>
    <button on:click={gomagaz} class="button_1">
        <img  src={button_magazin} alt="img2">  
    </button>
    {:else if if_magaz}
    <Magazin />
    <button on:click={goplanmain} class="krestik_button">
        <img src={krestik} alt="home">  
    </button>
    {/if}


</div>
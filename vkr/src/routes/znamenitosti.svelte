<!-- App.svelte -->
<script>
    // импорт компонентов
    import textData from '../data/data.json';
    import Radishev from './radishev.svelte';
    import Derzavin from './derzavin.svelte';
    import Pushkin from './pushkin.svelte';
    import Fuks from './fuks.svelte'
    import Tolstoy from './tostoy.svelte'
    import Danchenko from './danchenko.svelte'
    import Aksakov from './aksakov.svelte'
    import Maksimov from './maksimov.svelte'

    // импорт джсон
    let page_json = textData.znamenitosti_o_laishevo;
    // создание переменных для условий переключения событий
    let zagolovok=page_json.zagolovok;
    let krestik=page_json.krestik;
    let inf=page_json.inf;
    let if_main_znamenit=true;
    let if_radishev=false;
    let if_derzavin=false;
    let if_pushkin=false;
    let if_fuks=false;
    let if_tolstoy=false;
    let if_danchenko=false;
    let if_aksakov=false;
    let if_maksimov=false;
    
    
    // события
    function gomainznam(){
        if_main_znamenit=true;
        if_radishev=false;
        if_derzavin=false;
        if_pushkin=false;
        if_fuks=false;
        if_tolstoy=false;
        if_danchenko=false;
        if_aksakov=false;
        if_maksimov=false;
    }
    function radishev(){
        if_main_znamenit = false;
        if_radishev=true;
    }
    function derzavin(){
        if_main_znamenit = false;
        if_derzavin=true;
    }
    function pushkin(){
        if_main_znamenit = false;
        if_pushkin=true;
    }
    function fuks(){
        if_main_znamenit = false;
        if_fuks=true;
    }
    function tolstoy(){
        if_main_znamenit = false;
        if_tolstoy=true;
    }
    function danchenko(){
        if_main_znamenit = false;
        if_danchenko=true;
    }
    function aksakov(){
        if_main_znamenit = false;
        if_aksakov=true;
    }
    function maksimov(){
        if_main_znamenit = false;
        if_maksimov=true;
    }
    
</script>
  
<style>
    .zagolovok{
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        top: 21%;
        font-family:'KuzanyanC';
        color: #663300;
        max-width: 100%;
        font-size: 5vh;
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
    .buttons{
        width: 20%;
        height: auto;
        padding: 0;
        border: none;
        background: transparent;
        max-width: 100%;
    }
    .buttons img{
        width: 100%; /* Ширина изображения 100% от родительскего элемента */
        height: auto;
    }
    .button_1{
        position: absolute;
        top: 30%;
        left: 5%;
    }
    .button_2{
        position: absolute;
        top: 30%;
        left: 28%;
    }
    .button_3{
        position: absolute;
        top: 30%;
        right: 28%;
    }
    .button_4{
        position: absolute;
        top: 30%;
        right: 5%;
    }
    .button_5{
        position: absolute;
        top: 65%;
        left: 5%;
    }
    .button_6{
        position: absolute;
        top: 65%;
        left: 28%;
    }
    .button_7{
        position: absolute;
        top: 65%;
        right: 28%;
    }
    .button_8{
        position: absolute;
        top: 65%;
        right: 5%;
    }
</style>
  
<div class="background">
    {#if if_main_znamenit}
    <h1 class="zagolovok">{zagolovok}</h1> 
    <button on:click={radishev} class="buttons button_1">
        <img  src={inf[0].img_mini} alt="img">  
    </button>
    <button on:click={derzavin} class="buttons button_2">
        <img  src={inf[1].img_mini} alt="img">  
    </button>
    <button on:click={pushkin} class="buttons button_3">
        <img  src={inf[2].img_mini} alt="img">  
    </button>
    <button on:click={fuks} class="buttons button_4">
        <img  src={inf[3].img_mini} alt="img">  
    </button>
    <button on:click={tolstoy} class="buttons button_5">
        <img  src={inf[4].img_mini} alt="img">  
    </button>
    <button on:click={danchenko} class="buttons button_6">
        <img  src={inf[5].img_mini} alt="img">  
    </button>
    <button on:click={aksakov} class="buttons button_7">
        <img  src={inf[6].img_mini} alt="img">  
    </button>
    <button on:click={maksimov} class="buttons button_8">
        <img  src={inf[7].img_mini} alt="img">  
    </button>

    {:else if if_radishev}
    <button on:click={gomainznam} class="krestik_button">
        <img src={krestik} alt="home">  
    </button>
    <Radishev />
    {:else if if_derzavin}
    <button on:click={gomainznam} class="krestik_button">
        <img src={krestik} alt="home">  
    </button>
    <Derzavin />
    {:else if if_pushkin}
    <button on:click={gomainznam} class="krestik_button">
        <img src={krestik} alt="home">  
    </button>
    <Pushkin />
    {:else if if_fuks}
    <button on:click={gomainznam} class="krestik_button">
        <img src={krestik} alt="home">  
    </button>
    <Fuks />
    {:else if if_tolstoy}
    <button on:click={gomainznam} class="krestik_button">
        <img src={krestik} alt="home">  
    </button>
    <Tolstoy />
    {:else if if_danchenko}
    <button on:click={gomainznam} class="krestik_button">
        <img src={krestik} alt="home">  
    </button>
    <Danchenko />
    {:else if if_aksakov}
    <button on:click={gomainznam} class="krestik_button">
        <img src={krestik} alt="home">  
    </button>
    <Aksakov />
    {:else if if_maksimov}
    <button on:click={gomainznam} class="krestik_button">
        <img src={krestik} alt="home">  
    </button>
    <Maksimov />
    {/if}
</div>
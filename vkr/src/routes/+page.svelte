<!-- App.svelte -->
<script>
    // импорт компонентов
    import textData from '../data/data.json';
    import HistoryOfCity from './history_of_city.svelte';
    import VehiRazvitia from './vehi_razvitia.svelte';
    import Znamenitosti from './znamenitosti.svelte';
    import PlanGoroda from './plan_goroda.svelte';
    import GorodLaishev from './gorod_laishev.svelte';
    // импорт джсон
    let main_page_json = textData.main_page;
    // создание переменных для условий переключения событий
    let if_main_page = true;
    let if_history=false;
    let if_vehi=false;
    let if_znamenitosti=false;
    let if_plan=false;
    let if_gorod=false;
    let if_today=false;
    // события
    function gohome(){
        if_main_page=true;
        if_history=false;
        if_vehi=false;
        if_znamenitosti=false;
        if_plan=false;
        if_gorod=false;
        if_today=false;
    }
    function history(){
        if_main_page = false;
        if_history=true;
    }
    function vehi(){
        if_main_page=false;
        if_vehi=true;
    }
    function znamenitosti(){
        if_main_page=false;
        if_znamenitosti=true;
    }
    function plan(){
        if_main_page=false;
        if_plan=true;
    }
    function gorod(){
        if_main_page=false;
        if_gorod=true;
    }
    function today(){
        if_main_page=false;
        if_today=true;
    }

    
</script>
  
<style>
    :global(body){
        background-image: url(images_new/fon.png);
        background-size: cover;
        height: 100vh;
        width: 100vw;
        background-attachment: fixed;
    }
    
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
    .buttons_1_3_main{
        width: 37%;
        height: auto;
        padding: 0;
        border: none;
        background: transparent;
        max-width: 100%;
        
    }
    .buttons_1_3_main img{
        width: 100%; /* Ширина изображения 100% от родительскего элемента */
        height: auto;
    }
    .button_1{
        
        position: absolute;
        top: 33%;
        left: 50%;
        right: 50%;
        transform: translate(-50%, -50%);
    }
    .button_2{
        position: absolute;
        top: 40%;
        left: 11%;
    }
    .button_3{
        position: absolute;
        top: 40%;
        right: 11%;
    }
   .home_button{
    position: fixed;
    top: 0;
    right: 0;
    height: auto;
    padding: 0;
    border: none;
    background: transparent;
    max-width: 100%;
    width: 10%;
   }
   .home_button img{
    width: 100%; /* Ширина изображения 100% от родительскего элемента */
    height: auto;
   }

   .buttons{
        width: 28%;
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
    .button_4{
        position: absolute;
        top: 55%;
        left: 5%;
    }
    .button_5{
        position: absolute;
        top: 55%;
        left: 50%;
        right: 50%;
        transform: translate(-50%);
    }
    .button_6{
        position: absolute;
        top: 55%;
        right: 5%;
    }
</style>
  
<div>
    {#if if_main_page}
    <h1 class="zagolovok">{main_page_json.zagolovok}</h1>
    <button on:click={history} class="button_1 buttons_1_3_main">
        <img  src={main_page_json['1_button']} alt="img1">  
    </button>
    <button on:click={vehi} class="button_2 buttons_1_3_main">
        <img  src={main_page_json['2_button']} alt="img2">  
    </button>
    <button on:click={znamenitosti} class="button_3 buttons_1_3_main">
        <img  src={main_page_json['3_button']} alt="img3">  
    </button>
    <button on:click={plan} class="button_4 buttons">
        <img  src={main_page_json['4_button']} alt="img3">  
    </button>
    <button on:click={gorod} class="button_5 buttons">
        <img  src={main_page_json['5_button']} alt="img3">  
    </button>
    <button on:click={today} class="button_6 buttons">
        <img  src={main_page_json['6_button']} alt="img3">  
    </button>

    {:else if if_history}
    <HistoryOfCity />
    <button on:click={gohome} class="home_button">
        <img src={main_page_json.home} alt="home">  
    </button>

    {:else if if_vehi}

    <VehiRazvitia />
    <button on:click={gohome} class="home_button">
        <img src={main_page_json.home} alt="home">  
    </button>

    {:else if if_znamenitosti}
    <Znamenitosti />
    <button on:click={gohome} class="home_button">
        <img src={main_page_json.home} alt="home">  
    </button>
    {:else if if_plan}
    <PlanGoroda />
    <button on:click={gohome} class="home_button">
        <img src={main_page_json.home} alt="home">  
    </button>
    {:else if if_gorod}
    <GorodLaishev />
    <button on:click={gohome} class="home_button">
        <img src={main_page_json.home} alt="home">  
    </button>
    {:else if if_today}
    <button on:click={gohome} class="home_button">
        <img src={main_page_json.home} alt="home">  
    </button>
    {/if}

</div>
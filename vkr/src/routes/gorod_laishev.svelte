<script>
    // JavaScript код здесь
    import textData from '../data/data.json';
    import KartaUezda from './karta_uezda.svelte';
    import GorodLaishev1 from './gorod_laishev_p1.svelte'
    import GorodLaishev3 from './gorod_laishev_p3.svelte'
    import GorodLaishev4 from './gorod_laishev_p4.svelte'
    import GorodLaishev6 from './gorod_laishev_p6.svelte'
    import GorodLaishev7 from './gorod_laishev_p7.svelte'
    import GorodLaishev8 from './gorod_laishev_p8.svelte'

    let page_json = textData.gorod_laishev;
    let zagolovok=page_json.zagolovok;
    let zagolovok_dop=page_json.zagolovok_dop;
    let touch_img=page_json.touch_img;
    let text=page_json.text;
    let button_karta_uezda=page_json.button_karta_uezda;
    let karta_sprava=page_json.img_karta_sprava;
    let punkt_button=page_json['1_punkt_img'];
    let krestik=page_json.krestik;

    // создание переменных для условий переключения событий
    let if_gorodlaish=true;
    let if_karta_uezda=false;
    let if_1=false;
    let if_3=false;
    let if_4=false;
    let if_6=false;
    let if_7=false;
    let if_8=false;

    // события
    function gogorodlaish(){
        if_gorodlaish=true;
        if_karta_uezda=false;
        if_1=false;
        if_3=false;
        if_4=false;
        if_6=false;
        if_7=false;
        if_8=false;
    }
    function gokartauezda(){
        if_gorodlaish=false;
        if_karta_uezda=true;
        
    }
    function go1(){
        if_gorodlaish=false;
        if_1=true;
    }
    function go3(){
        if_gorodlaish=false;
        if_3=true;
    }
    function go4(){
        if_gorodlaish=false;
        if_4=true;
    }
    function go6(){
        if_gorodlaish=false;
        if_6=true;
    }
    function go7(){
        if_gorodlaish=false;
        if_7=true;
    }
    function go8(){
        if_gorodlaish=false;
        if_8=true;
    }

</script>

<style>
    /* Стили здесь */
    .zagolovok{
        position: absolute;
        font-family:'KuzanyanC';
        top: 16%;
        left: 3.5%;
        max-width: 100%;
        color: #663300;
        font-size: 6vh;
    }
    .zagolovok2{
        position: absolute;
        font-family:'KuzanyanC';
        top: 23%;
        left: 7%;
        color: #663300;
        font-size: 4vh;
        
        max-width: 100%;
        word-wrap: break-word;
        white-space: pre-wrap;
    }
    .touchimg{
        position: absolute;
        left: 3%;
        top:28%;
        width: 2.4%;
        max-width: 100%;
    }
    .text_history{
        position: absolute;
        font-family: "PT Sans Caption";
        top:37%;
        left: 7%;
        width: 50%;
        max-width: 100%;
        word-wrap: break-word;
        white-space: pre-wrap;
        font-size: 1.5vh;
    }
    .button_karta{
        position: absolute;
        top: 57%;
        left: 7%;
        height: auto;
        padding: 0;
        border: none;
        background: transparent;
        max-width: 100%;
        width: 25%;
   }
   .button_karta img{
        width: 100%; /* Ширина изображения 100% от родительскего элемента */
        height: auto;
   }
   .foto{
        position: absolute;
        right: 0;
        top:18%;
        width: 64%;
        max-width: 100%;
    }
    .punkt_button{
        width: 3%;
        height: auto;
        padding: 0;
        border: none;
        background: transparent;
        max-width: 100%;
        position: relative;
    }
    .button_content {
    position: relative; /* Относительное позиционирование для контейнера кнопки */}

    .punkt_button img{
        width: 100%; /* Ширина изображения 100% от родительскего элемента */
        height: auto;
    }
    .badge {
        position: absolute;
        z-index: 5;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%); /* Смещаем на половину размеров элемента */
        font-family: "KuzanyanC";
        color: #663300;
        font-size: 3.7vh;
    }
    .punkt1{
        position: absolute;
        top: 45%;
        left: 56.5%;
    }
    .punkt2{
        position: absolute;
        top: 60%;
        left: 59%;
    }
    .punkt3{
        position: absolute;
        top: 44%;
        left: 65.5%;
    }
    .punkt4{
        position: absolute;
        top: 46%;
        left: 80.8%;
    }
    .punkt5{
        position: absolute;
        top: 40%;
        left: 82.2%;
    }
    .punkt6{
        position: absolute;
        top: 40%;
        left: 79%;
    }
    .punkt7{
        position: absolute;
        top: 42%;
        left: 40%;
    }
    .punkt8{
        position: absolute;
        top: 78%;
        left: 58%;
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

   .black-and-white {
    filter: grayscale(100%);
}

</style>

<div>
    <!-- Ваш контент здесь -->
    {#if if_gorodlaish}

    <h1 class="zagolovok">{zagolovok}</h1>
    <p class="zagolovok2">{zagolovok_dop}</p>
    <img class="touchimg" src={touch_img} alt="img"> 
    <pre class="text_history">{text}</pre>
    <button on:click={gokartauezda}  class="button_karta">
        <img  src={button_karta_uezda} alt="button_karta">  
    </button>
    <img class="foto" src={karta_sprava} alt="home"> 

    <button on:click={go1} class="punkt_button punkt1">
        <div class="button_content">
            <img src={punkt_button} alt="button_karta">  
            <span class="badge">1</span>
        </div>
    </button>
    <button  class="punkt_button punkt2 black-and-white">
        <div class="button_content">
            <img src={punkt_button} alt="button_karta">  
            <span class="badge">2</span>
        </div>
    </button>
    <button on:click={go3} class="punkt_button punkt3">
        <div class="button_content">
            <img src={punkt_button} alt="button_karta">  
            <span class="badge">3</span>
        </div>
    </button>
    <button on:click={go4} class="punkt_button punkt4">
        <div class="button_content">
            <img src={punkt_button} alt="button_karta">  
            <span class="badge">4</span>
        </div>
    </button>
    <button  class="punkt_button punkt5 black-and-white">
        <div class="button_content">
            <img src={punkt_button} alt="button_karta">  
            <span class="badge">5</span>
        </div>
    </button>
    <button on:click={go6} class="punkt_button punkt6">
        <div class="button_content">
            <img src={punkt_button} alt="button_karta">  
            <span class="badge">6</span>
        </div>
    </button>
    <button on:click={go7} class="punkt_button punkt7">
        <div class="button_content">
            <img src={punkt_button} alt="button_karta">  
            <span class="badge">7</span>
        </div>
    </button>
    <button on:click={go8} class="punkt_button punkt8">
        <div class="button_content">
            <img src={punkt_button} alt="button_karta">  
            <span class="badge">8</span>
        </div>
    </button>
    {:else if if_karta_uezda}
    <button on:click={gogorodlaish} class="krestik_button">
        <img src={krestik} alt="home">  
    </button>
    <KartaUezda />
    {:else if if_1}
    <button on:click={gogorodlaish} class="krestik_button">
        <img src={krestik} alt="home">  
    </button>
    <GorodLaishev1 />
    {:else if if_3}
    <button on:click={gogorodlaish} class="krestik_button">
        <img src={krestik} alt="home">  
    </button>
    <GorodLaishev3 />

    {:else if if_4}
    <button on:click={gogorodlaish} class="krestik_button">
        <img src={krestik} alt="home">  
    </button>
    <GorodLaishev4 />

    {:else if if_6}
    <button on:click={gogorodlaish} class="krestik_button">
        <img src={krestik} alt="home">  
    </button>
    <GorodLaishev6 />

    {:else if if_7}
    <button on:click={gogorodlaish} class="krestik_button">
        <img src={krestik} alt="home">  
    </button>
    <GorodLaishev7 />


    {:else if if_8}
    <button on:click={gogorodlaish} class="krestik_button">
        <img src={krestik} alt="home">  
    </button>
    <GorodLaishev8 />

{/if}
</div>






<script>
    // JavaScript код здесь
    import textData from '../data/data.json';
    import TodayOblastZat from './today_oblast_zat.svelte';
    import Today1 from './today1.svelte'
    import Today2 from './today2.svelte'
    import Today3 from './today3.svelte'
    import Today4 from './today4.svelte'
    import Today5 from './today5.svelte'
    import Today6 from './today6.svelte'
    import Today7 from './today7.svelte'
    import Today8 from './today8.svelte'
    import Today9 from './today9.svelte'
    import Today10 from './today10.svelte'
    import Today11 from './today11.svelte'
    import Today12 from './today12.svelte'
    import Today13 from './today13.svelte'
    import Today14 from './today14.svelte'

    let page_json = textData.laishevo_today;
    let zagolovok=page_json.zagolovok;
    let touch_img=page_json.touch_img;
    let text=page_json.text;
    let button_oblast_zatop=page_json.oblast_zatop_button;
    let karta_sprava=page_json.karta;
    let punkt_button=page_json['1_punkt_img'];
    let krestik=page_json.krestik;

    // создание переменных для условий переключения событий
    let if_gorodtoday=true;
    let if_oblast_zatop=false;
    let if_1=false;
    let if_2=false;
    let if_3=false;
    let if_4=false;
    let if_5=false;
    let if_6=false;
    let if_7=false;
    let if_8=false;
    let if_9=false;
    let if_10=false;
    let if_11=false;
    let if_12=false;
    let if_13=false;
    let if_14=false;

    // события
    function gogorodlaish(){
        if_gorodtoday=true;
        if_oblast_zatop=false;
        if_1=false;
        if_2=false;
        if_3=false;
        if_4=false;
        if_5=false;
        if_6=false;
        if_7=false;
        if_8=false;
        if_9=false;
        if_10=false;
        if_11=false;
        if_12=false;
        if_13=false;
        if_14=false;
    }
    function gooblastzatop(){
        if_gorodtoday=false;
        if_oblast_zatop=true;
        
    }
    function go1(){
        if_gorodtoday=false;
        if_1=true;
    }
    function go2(){
        if_gorodtoday=false;
        if_2=true;
    }
    function go3(){
        if_gorodtoday=false;
        if_3=true;
    }
    function go4(){
        if_gorodtoday=false;
        if_4=true;
    }
    function go5(){
        if_gorodtoday=false;
        if_5=true;
    }
    function go6(){
        if_gorodtoday=false;
        if_6=true;
    }
    function go7(){
        if_gorodtoday=false;
        if_7=true;
    }
    function go8(){
        if_gorodtoday=false;
        if_8=true;
    }
    function go9(){
        if_gorodtoday=false;
        if_9=true;
    }
    function go10(){
        if_gorodtoday=false;
        if_10=true;
    }
    function go11(){
        if_gorodtoday=false;
        if_11=true;
    }
    function go12(){
        if_gorodtoday=false;
        if_12=true;
    }
    function go13(){
        if_gorodtoday=false;
        if_13=true;
    }
    function go14(){
        if_gorodtoday=false;
        if_14=true;
    }

</script>

<style>
    /* Стили здесь */
    .zagolovok{
        position: absolute;
        font-family:'KuzanyanC';
        top: 18%;
        left: 3.5%;
        max-width: 100%;
        color: #663300;
        font-size: 4vh;
    }
  
    .touchimg{
        position: absolute;
        left: 1%;
        top:20%;
        width: 2.4%;
        max-width: 100%;
    }
    .text_history{
        position: absolute;
        font-family: "PT Sans Caption";
        top:37%;
        left: 1.5%;
        width: 22%;
        max-width: 100%;
        word-wrap: break-word;
        white-space: pre-wrap;
        font-size: 1.5vh;
    }
    .button_karta{
        position: absolute;
        top: 72%;
        left: 2%;
        height: auto;
        padding: 0;
        border: none;
        background: transparent;
        max-width: 100%;
        width: 20%;
   }
   .button_karta img{
        width: 100%; /* Ширина изображения 100% от родительскего элемента */
        height: auto;
   }
   .foto{
        position: absolute;
        left: 0;
        top:18%;
        width: 100%;
        max-width: 100%;
        z-index: -1;
    }
    .punkt_button{
        width: 2.7%;
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
        top: 50%;
        left: 59%;
    }
    .punkt2{
        position: absolute;
        top: 53.8%;
        left: 63%;
    }
    .punkt3{
        position: absolute;
        top: 49%;
        left: 63%;
    }
    .punkt4{
        position: absolute;
        top: 23%;
        left: 56.6%;
    }
    .punkt5{
        position: absolute;
        top: 34%;
        left: 71%;
        
    }
    .punkt6{
        position: absolute;
        top: 53%;
        left: 68%;
    }
    .punkt7{
        position: absolute;
        top: 68%;
        left: 62%;
    }
    .punkt8{
        position: absolute;
        top: 79%;
        left: 32.5%;
        
    }
    .punkt9{
        position: absolute;
        top: 56%;
        left: 71%;
    }
    .punkt10{
        position: absolute;
        top: 54.7%;
        left: 59.5%;
    }
    .punkt11{
        position: absolute;
        top: 44%;
        left: 58%;
    }
    .punkt12{
        position: absolute;
        top: 58%;
        left: 62%;
        
    }
    .punkt13{
        position: absolute;
        top: 58%;
        left: 64.5%;
        
    }
    .punkt14{
        position: absolute;
        top: 64%;
        left: 64.5%;
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
    {#if if_gorodtoday}

    <pre class="zagolovok">{zagolovok}</pre>
    <img class="touchimg" src={touch_img} alt="img"> 
    <pre class="text_history">{text}</pre>
    <button on:click={gooblastzatop}  class="button_karta">
        <img  src={button_oblast_zatop} alt="button_karta">  
    </button>
    <img class="foto" src={karta_sprava} alt="home"> 

    <button on:click={go1} class="punkt_button punkt1">
        <div class="button_content">
            <img src={punkt_button} alt="button_karta">  
            <span class="badge">1</span>
        </div>
    </button>
    <button  on:click={go2} class="punkt_button punkt2">
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
    <button on:click={go5} class="punkt_button punkt5">
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
    <button on:click={go9} class="punkt_button punkt9">
        <div class="button_content">
            <img src={punkt_button} alt="button_karta">  
            <span class="badge">9</span>
        </div>
    </button>
    <button on:click={go10} class="punkt_button punkt10">
        <div class="button_content">
            <img src={punkt_button} alt="button_karta">  
            <span class="badge">10</span>
        </div>
    </button>
    <button on:click={go11} class="punkt_button punkt11">
        <div class="button_content">
            <img src={punkt_button} alt="button_karta">  
            <span class="badge">11</span>
        </div>
    </button>
    <button on:click={go12} class="punkt_button punkt12">
        <div class="button_content">
            <img src={punkt_button} alt="button_karta">  
            <span class="badge">12</span>
        </div>
    </button>
    <button on:click={go13} class="punkt_button punkt13">
        <div class="button_content">
            <img src={punkt_button} alt="button_karta">  
            <span class="badge">13</span>
        </div>
    </button>
    <button on:click={go14} class="punkt_button punkt14">
        <div class="button_content">
            <img src={punkt_button} alt="button_karta">  
            <span class="badge">14</span>
        </div>
    </button>
    {:else if if_oblast_zatop}
    <TodayOblastZat />
    <button on:click={gogorodlaish} class="krestik_button">
        <img src={krestik} alt="home">  
    </button>
    {:else if if_1}
    <Today1 />
    <button on:click={gogorodlaish} class="krestik_button">
        <img src={krestik} alt="home">  
    </button>
    {:else if if_2}
    <Today2 />
    <button on:click={gogorodlaish} class="krestik_button">
        <img src={krestik} alt="home">  
    </button>
    {:else if if_3}
    <button on:click={gogorodlaish} class="krestik_button">
        <img src={krestik} alt="home">  
    </button>
    <Today3 />

    {:else if if_4}
    <button on:click={gogorodlaish} class="krestik_button">
        <img src={krestik} alt="home">  
    </button>
    <Today4 />

    {:else if if_5}
    <button on:click={gogorodlaish} class="krestik_button">
        <img src={krestik} alt="home">  
    </button>
    <Today5 />

    {:else if if_6}
    <button on:click={gogorodlaish} class="krestik_button">
        <img src={krestik} alt="home">  
    </button>
    <Today6 />

    {:else if if_7}
    <button on:click={gogorodlaish} class="krestik_button">
        <img src={krestik} alt="home">  
    </button>
    <Today7 />


    {:else if if_8}
    <button on:click={gogorodlaish} class="krestik_button">
        <img src={krestik} alt="home">  
    </button>
    <Today8 />

    {:else if if_9}
    <button on:click={gogorodlaish} class="krestik_button">
        <img src={krestik} alt="home">  
    </button>
    <Today9 />


    {:else if if_10}
    <button on:click={gogorodlaish} class="krestik_button">
        <img src={krestik} alt="home">  
    </button>
    <Today10 />


    {:else if if_11}
    <button on:click={gogorodlaish} class="krestik_button">
        <img src={krestik} alt="home">  
    </button>
    <Today11 />

    {:else if if_12}
    <button on:click={gogorodlaish} class="krestik_button">
        <img src={krestik} alt="home">  
    </button>
    <Today12 />

    {:else if if_13}
    <button on:click={gogorodlaish} class="krestik_button">
        <img src={krestik} alt="home">  
    </button>
    <Today13 />

    {:else if if_14}
    <button on:click={gogorodlaish} class="krestik_button">
        <img src={krestik} alt="home">  
    </button>
    <Today14 />
{/if}
</div>






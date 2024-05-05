<script>
    // импорт компонентов
    import textData from '../data/data.json';
    // импорт джсон
    let page_json = textData.plan_goroda;
    let zagolovok=page_json.zagolovok;
    let button_magazin=page_json.button_magazin;
    let card_right_img=page_json.card_right;
    let spisok_left_img=page_json.spisok_left;
    let spisok_text=page_json.spisok_text;
    let streets_text_img=page_json.streets_text_img;
</script>

<style>
    /* Ваши стили здесь */
    .zagolovok{
        position: absolute;
        font-family:'KuzanyanC';
        top: 21%;
        left: 40%;
        max-width: 100%;
        color: #663300;
        font-size: 4vh;
    }
    .text_history{
        position: absolute;
        font-family: "PT Sans Caption";
        top:23%;
        left: 40%;
        width: 50%;
        max-width: 100%;
        word-wrap: break-word;
        white-space: pre-wrap;
        font-size: 2.5vh;
    }
    .foto_left{
        position: absolute;
        left: 0%;
        bottom:0%;
        height: 80vh;
        max-width: 100%;
    }
</style>

<div>
    <!-- Ваш контент здесь -->
    <h1 class="zagolovok">{zagolovok}</h1>
    <img class="foto_left" src={spisok_left_img} alt="home"> 
    <!-- <pre class="text_history">{inf.text}</pre> -->

</div>
<script>
    // Ваши переменные, функции и логика здесь
    import textData from '../data/data.json';
    let page_json = textData.gorod_laishev;
    let inf=page_json.vnutri_punktov[1];
    let zagolovok=inf.zagolovok;
    let text=inf.text;
    let pict=inf.img;
</script>

<style>
    /* Ваши стили здесь */
    .zagolovok{
        position: absolute;
        font-family:'KuzanyanC';
        top: 22%;
        left: 50.5%;
        max-width: 100%;
        color: #663300;
        font-size: 3.6vh;
    }
    .text_history{
        position: absolute;
        font-family: "PT Sans Caption";
        top:28%;
        left: 51%;
        width: 32%;
        max-width: 100%;
        word-wrap: break-word;
        white-space: pre-wrap;
        font-size: 1.7vh;
    }
    .foto{
        position: absolute;
        left: 2%;
        top:25%;
        width: 95%;
        max-width: 100%;
    }
</style>

<div>
    <!-- Ваш контент здесь -->
    <img class="foto" src={pict} alt="home"> 
    <h1 class="zagolovok">{zagolovok}</h1>
    <pre class="text_history">{text}</pre>

</div>
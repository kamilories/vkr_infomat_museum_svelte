<script>
    // Ваши переменные, функции и логика здесь
    import textData from '../data/data.json';
    let page_json = textData.laishevo_today;
    let inf=page_json.vnutri_punktov[13];
    let zagolovok=inf.zagolovok;
    let text=inf.text;
    let pict=inf.img;
</script>

<style>
    /* Ваши стили здесь */
    /* Ваши стили здесь */
    .zagolovok{
        position: absolute;
        font-family:'KuzanyanC';
        top: 21%;
        left: 58%;
        max-width: 100%;
        color: #663300;
        font-size: 4vh;
    }
    .text_history{
        position: absolute;
        font-family: "PT Sans Caption";
        top:30%;
        left: 58%;
        width: 35%;
        max-width: 100%;
        word-wrap: break-word;
        white-space: pre-wrap;
        font-size: 2vh;
    }
    .foto{
        position: absolute;
        left: 18%;
        top:10%;
        width: 35%;
        max-width: 100%;
    }
</style>

<div>
    <!-- Ваш контент здесь -->
    <img class="foto" src={pict} alt="home"> 
    <h1 class="zagolovok">{zagolovok}</h1>
    <pre class="text_history">{text}</pre>

</div>
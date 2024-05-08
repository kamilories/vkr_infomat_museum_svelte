<script>
    // Ваши переменные, функции и логика здесь
    import textData from '../data/data.json';
    let page_json = textData.laishevo_today;
    let inf=page_json.vnutri_punktov[7];
    let zagolovok=inf.zagolovok;
    let text=inf.text;
    let pict=inf.img;
</script>

<style>
    /* Ваши стили здесь */
    .zagolovok{
        position: absolute;
        font-family:'KuzanyanC';
        top: 81%;
        left: 50%;
        right: 50%;
        transform: translate(-50%);
        width: 20%;
        word-wrap: break-word;
        white-space: pre-wrap;
        max-width: 100%;
        color: #663300;
        font-size: 4vh;
    }
    .text_history{
        position: absolute;
        font-family: "PT Sans Caption";
        top:87%;
        left: 50%;
        right: 50%;
        transform: translate(-50%);
        width: 60%;
        max-width: 100%;
        word-wrap: break-word;
        white-space: pre-wrap;
        font-size: 2vh;
    }
    .foto{
        position: absolute;
        left: 50%;
        right: 50%;
        transform: translate(-50%);
        top:2%;
        width: 70%;
        max-width: 100%;
    }
</style>

<div>
    <!-- Ваш контент здесь -->
    <img class="foto" src={pict} alt="home"> 
    <h1 class="zagolovok">{zagolovok}</h1>
    <pre class="text_history">{text}</pre>

</div>
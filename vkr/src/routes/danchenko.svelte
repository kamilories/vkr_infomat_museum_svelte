<script>
    // Ваши переменные, функции и логика здесь
    import textData from '../data/data.json';
    let page_json = textData.znamenitosti_o_laishevo;
    let inf=page_json.inf[5];
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
        width: 55%;
        max-width: 100%;
        word-wrap: break-word;
        white-space: pre-wrap;
        font-size: 2vh;
    }
    .foto{
        position: absolute;
        left: 7%;
        top:23%;
        width: 30%;
        max-width: 100%;
    }
</style>

<div>
    <!-- Ваш контент здесь -->
    <img class="foto" src={inf.img} alt="home"> 
    <h1 class="zagolovok">{inf.name}</h1>
    <pre class="text_history">{inf.text}</pre>

</div>
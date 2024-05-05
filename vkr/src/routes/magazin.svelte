<script>
    // Ваши переменные, функции и логика здесь
    import textData from '../data/data.json';
    let page_json = textData.plan_goroda;
    let magazin=page_json.magazin;
    let krestik=page_json.krestik;
</script>

<style>
    /* Ваши стили здесь */
    .zagolovok{
        position: absolute;
        font-family:'KuzanyanC';
        top: 17%;
        left: 40%;
        max-width: 100%;
        color: #663300;
        font-size: 4vh;
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
    <img class="foto" src={magazin} alt="home"> 
    <h1 class="zagolovok">Как выглядел магазин</h1>

</div>
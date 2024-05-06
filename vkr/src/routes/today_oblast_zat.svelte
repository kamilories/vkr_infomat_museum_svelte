<script>
    // Ваши переменные, функции и логика здесь
    import textData from '../data/data.json';
    let page_json = textData.laishevo_today;
    let oblast_zatop_karta=page_json.oblast_zatop_karta;
    let krestik=page_json.krestik;
</script>

<style>
    /* Ваши стили здесь */
    .foto{
        position: absolute;
        left: 10%;
        top: 3%;
        width: 80%;
        max-width: 100%;
    }
</style>

<div>
    <!-- Ваш контент здесь -->
    <img class="foto" src={oblast_zatop_karta} alt="home"> 

</div>
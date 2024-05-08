<script>
    // Ваши переменные, функции и логика здесь
    import textData from '../data/data.json';
    let page_json = textData.laishevo_today;
    let inf=page_json.vnutri_punktov[5];
    let pict=inf.img;
</script>

<style>
    /* Ваши стили здесь */
    .foto{
        position: absolute;
        left: 50%;
        right: 50%;
        transform: translate(-50%);
        top:10%;
        width: 80%;
        max-width: 100%;
    }
</style>

<div>
    <!-- Ваш контент здесь -->
    <img class="foto" src={pict} alt="home"> 
    

</div>
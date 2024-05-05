<!-- App.svelte -->
<script>
    import textData from '../data/data.json';
   
    let history_json=textData.vehi_razvitia;
    let zagolovok=history_json.zagolovok;
    let text=history_json.text;
    let currentIndex = 0;
    var lastIndex = text.length - 1;
  // @ts-ignore
  function switchData(direction) {
    if (direction === 'forward') {
      currentIndex = Math.min(currentIndex + 1, text.length - 1);
    } else if (direction === 'backward') {
      currentIndex = Math.max(currentIndex - 1, 0);
    }
  }
  // делим текст на разные кусочки чтобы даты были выделены
  // @ts-ignore
  function formatText(text) {
    // @ts-ignore
    return text.split('\n').map(line => {
      const parts = line.split('\t\t');
      return { firstPart: parts[0], secondPart: parts[1] };
    });
  }

</script>
  
<style>
    
    .zagolovok{
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        top:20%;
        text-align: center;
        font-family:'KuzanyanC';
        color: #663300;
        font-size: 6vh;
    }
    .container {
        position: absolute;
        top:30%;
        left: 10%;
        font-size: 2.5vh;
        width: 80%;
        max-width: 100%;
    }
    .text_history{
        font-family: "PT Sans Caption";
        font-size: 2.5vh;
        white-space: pre-wrap;
        word-wrap: break-word;
    }
    .left_strelka{
        position: absolute;
        top: 45%;
        left: 1px;
        height: auto;
        padding: 0;
        border: none;
        background: transparent;
        max-width: 100%;
        width: 11%;
    }
    .left_strelka img{
        width: 100%; /* Ширина изображения 100% от родительскего элемента */
        height: auto;
    }
    .right_strelka{
        position: absolute;
        top: 45%;
        right: 1px;
        height: auto;
        padding: 0;
        border: none;
        background: transparent;
        max-width: 100%;
        width: 11%;
    }
    .right_strelka img{
        width: 100%; /* Ширина изображения 100% от родительскего элемента */
        height: auto;
    }
    .date {
        font-weight: bold;
        font-family:'KuzanyanC';
        color: #663300;
        font-size: 3vh;
        }
</style>
  
<div class="background">
    
    <h1 class="zagolovok">{zagolovok}</h1>
    
    <div class="container">
    {#each formatText(text[currentIndex].text) as { firstPart, secondPart }}
    <div>
        <span class="date">{firstPart}  </span>
        <span class="text_history">{secondPart}</span>
    </div>
        {/each}
    </div>
   
    {#if currentIndex>0}
    <button on:click={() => switchData('backward')} class="left_strelka">
        <img src={history_json.strelka_left} alt="left">  
    </button>
    {/if}
    {#if currentIndex<lastIndex}
    <button on:click={() => switchData('forward')} class="right_strelka">
        <img src={history_json.strelka_right} alt="right">  
    </button>
    {/if}
    
  
</div>
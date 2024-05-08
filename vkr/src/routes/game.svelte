<script>
// @ts-nocheck

    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
  
    // @ts-ignore
    let treasureX;
    // @ts-ignore

    let treasureY;
    let mouseX = 0;
    let mouseY = 0;
    let feedback = 'Угадайте, где расположен клад! Нажмите в любое место на карте, появится подсказка которая скажет, насколько вы близки ';
    // @ts-ignore
    let trails = [];
    let victorymessage='';
  
    const MAX_TRAILS = 100; // Максимальное количество точек следа
  
    const treasureFound = writable(false);
  
    function updateFeedback() {
      // @ts-ignore
      const distance = Math.sqrt((mouseX - treasureX) ** 2 + (mouseY - treasureY) ** 2);
      if (distance < 50) {
        feedback = 'Горячо!';
        victorymessage='';
      } else if (distance < 90) {
        feedback = 'Тепло';
        victorymessage='';

      }else if (distance < 200) {
        feedback = 'Холодно';
        victorymessage='';

      }
      else {
        feedback = 'Очень холодно';
        victorymessage='';

      }
    }
    // @ts-ignore
    function handleClick(event) {
      const rect = event.target.getBoundingClientRect();
      mouseX = event.clientX - rect.left;
      mouseY = event.clientY - rect.top;
      
      if (trails.length >= MAX_TRAILS) {
        // @ts-ignore
        trails.shift(); // Удаляем первую точку, если превышен максимальный размер
      }
      // @ts-ignore
      trails = [...trails, { x: mouseX, y: mouseY }];
      
      updateFeedback();
      // @ts-ignore
      if (Math.abs(mouseX - treasureX) < 30 && Math.abs(mouseY - treasureY) < 30) {
        treasureFound.set(true);
        victorymessage='Поздравляю! Вы нашли клад!';
        feedback='';
      }
    }
  
    function resetGame() {
      trails = [];
      feedback = '';
      treasureFound.set(false);
      generateTreasureLocation();
      victorymessage='';
      feedback = 'Угадайте, где расположен клад! Нажмите в любое место на карте, появится подсказка которая скажет, насколько вы близки ';
    }
  
    function generateTreasureLocation() {
      treasureX = Math.random() * 500; // Ширина окна
      treasureY = Math.random() * 500; // Высота окна
    }
  
    onMount(() => {
      generateTreasureLocation();
    });
  </script>
  
  <style>
    #map {
      position: relative;
      width: 80vw;
      height: 80vh;
      background-image: url('/Users/kamilories/Desktop/svelt_vkr/vkr_infomat_museum_svelte/vkr/images_new/5_karta_sprava.png'); /* Путь к вашему изображению карты */
      background-size: cover;
      top: 10%;
      left: 10%;
    }
  
    .trail {
      position: absolute;
      width: 5px;
      height: 5px;
      background-color: red;
      border-radius: 50%;
      pointer-events: none;
    }
    p{
        position: absolute;
        font-family: 'KuzanyanC';
        color: #663300;
        top:80%;
        left: 10%;
        width: 80%;
        max-width: 100%;
        word-wrap: break-word;
        white-space: pre-wrap;
        font-size: 5vh;
        text-align: center;

    }
    
    .game_button{
        width: 20%;
        height: auto;
        padding: 0;
        border: none;
        background: transparent;
        max-width: 100%;
        position: absolute;
        top: 83%;
        left: 10%;

    }
    .game_button img{
        width: 100%; /* Ширина изображения 100% от родительскего элемента */
        height: auto;
    }
  </style>
  
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div id="map" on:click={handleClick}>
    {#if trails}
      {#each trails as point}
        <div class="trail" style="left: {point.x}px; top: {point.y}px;"></div>
      {/each}
    {/if}
  </div>
  
  <p>{feedback}</p>
  {#if $treasureFound}
 
    <p class="win">{victorymessage}</p>
    <button class="game_button" on:click={resetGame}>
      <img  src="/images_new/new_game_button.png" alt="img2">  
    </button>
  {/if}
  
<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
  
    let treasureX;
    let treasureY;
    let mouseX = 0;
    let mouseY = 0;
    let feedback = '';
    let trails = [];
  
    const MAX_TRAILS = 100; // Максимальное количество точек следа
  
    const treasureFound = writable(false);
  
    function updateFeedback() {
      const distance = Math.sqrt((mouseX - treasureX) ** 2 + (mouseY - treasureY) ** 2);
      if (distance < 20) {
        feedback = 'Горячо!';
      } else if (distance < 50) {
        feedback = 'Тепло';
      } else {
        feedback = 'Холодно';
      }
    }
  
    function handleClick(event) {
      const rect = event.target.getBoundingClientRect();
      mouseX = event.clientX - rect.left;
      mouseY = event.clientY - rect.top;
      
      if (trails.length >= MAX_TRAILS) {
        trails.shift(); // Удаляем первую точку, если превышен максимальный размер
      }
      
      trails = [...trails, { x: mouseX, y: mouseY }];
      
      updateFeedback();
      
      if (Math.abs(mouseX - treasureX) < 10 && Math.abs(mouseY - treasureY) < 10) {
        treasureFound.set(true);
      }
    }
  
    function resetGame() {
      trails = [];
      feedback = '';
      treasureFound.set(false);
      generateTreasureLocation();
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
      width: 500px;
      height: 500px;
      background-image: url('/Users/kamilories/Desktop/svelt_vkr/vkr_infomat_museum_svelte/vkr/images_new/5_karta_sprava.png'); /* Путь к вашему изображению карты */
      background-size: cover;
    }
  
    .trail {
      position: absolute;
      width: 5px;
      height: 5px;
      background-color: red;
      border-radius: 50%;
      pointer-events: none;
    }
  </style>
  
  <div id="map" on:click={handleClick}>
    {#if trails}
      {#each trails as point}
        <div class="trail" style="left: {point.x}px; top: {point.y}px;"></div>
      {/each}
    {/if}
  </div>
  
  <p>{feedback}</p>
  {#if $treasureFound}
    <p>Поздравляю! Вы нашли клад!</p>
    <button on:click={resetGame}>Начать заново</button>
  {/if}
  
<script>
    import textData from "../data/data.json";
    let page_json = textData.gorod_laishev;
    let bigkarta = page_json.img_karta_uezda_big;
    let strelka_left = page_json.strelka_left;
    let strelka_right = page_json.strelka_right;
    let strelka_up = page_json.strelka_up;
    let strelka_down = page_json.strelka_down;

    import { onMount } from 'svelte';

    // @ts-ignore
    let rootElement;

    onMount(() => {
        // Получаем ссылку на корневой элемент
        rootElement = document.documentElement;
    });

    function scrollUp() {
        // Прокрутка наверх
        // @ts-ignore
        rootElement.scrollBy({
            top: -500,
            behavior: "smooth"
        });
    }

    
        function scrollDown() {
            // Scroll to top logic
            // @ts-ignore
            rootElement.scrollBy({
            top: 500,
            behavior: "smooth"
            })
        }
        function scrollRight() {
            // Scroll to top logic
                        // @ts-ignore

            rootElement.scrollBy({
            left: 500,
            behavior: "smooth"
            })
        }
        function scrollLeft() {
            // Scroll to top logic
            // @ts-ignore

            rootElement.scrollBy({
            left: -500,
            behavior: "smooth"
            })
        }
</script>


<style>
    /* Стили здесь */
    button{
        border: none;
        background: transparent;
        max-width: 100%;
    }
    .bigkarta {
        margin: 0;
        padding: 0;
    }
    .right {
        z-index: 10;
        position: fixed;
        right: 1%;
        top: 50%;
    }
    .left {
        z-index: 10;
        position: fixed;
        left: 1%;
        top: 50%;
    }
    .up {
        z-index: 10;
        position: fixed;
        left: 50%;
        top: 1%;
    }
    .down {
        z-index: 10;
        position: fixed;
        left: 50%;
        bottom: 1%;
    }
</style>
<div>
    <!-- Ваш контент здесь -->
    <img class="bigkarta" src={bigkarta} alt="img" />
    <button on:click={scrollRight} class="right"><img src={strelka_right} alt="img"></button>
    <button on:click={scrollLeft} class="left"><img src={strelka_left} alt="img"></button>
    <button on:click={scrollUp} class="up"><img src={strelka_up} alt="img"></button>
    <button  on:click={scrollDown} class="down"><img src={strelka_down} alt="img"></button>
</div>
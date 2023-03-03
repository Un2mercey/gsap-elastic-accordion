<template>
    <section class="elastic-accordion">
        <h1 class="unselectable">
            Elastic accordion <br />
            with Vue & GSAP
        </h1>
        <div class="elastic-accordion-wrapper">
            <div
                v-for="(image, index) in images"
                :key="image.background"
                :ref="skipUnwrap.itemRefs"
                :style="`background-image: ${image.background}`"
                class="elastic-accordion-item"
                @click="expand(image, index)"
            ></div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { gsap } from 'gsap';
import { ref } from 'vue';

interface Image {
    background: string;
    clicked: boolean;
}

const itemRefs = ref([]);
const skipUnwrap = { itemRefs };

const images: Image[] = Array.from({ length: 12 }, (e: undefined, index: number) => ({
    background: `url('/gsap-elastic-accordion/assets/img/photo-${index + 1}.jpg')`,
    clicked: false,
}));

function expand(image: Image, index: number) {
    images.forEach((img: Image, idx: number) => {
        if (index === idx) return;
        img.clicked = false;
    });

    gsap.to(itemRefs.value, {
        width: image.clicked ? '15vw' : '8vw',
        duration: 2,
        ease: 'elastic(1, .6)',
    });

    image.clicked = !image.clicked;
    gsap.to(itemRefs.value[index], {
        width: image.clicked ? '42vw' : '15vw',
        duration: 2.5,
        ease: 'elastic(1, .3)',
    });
}
</script>

<style lang="scss" scoped>
.elastic-accordion {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;

    &-wrapper {
        display: grid;
        grid-template-columns: repeat(5, auto);
        margin: 0;
    }

    &-item {
        width: 15vw;
        height: 75vh;
        background-position: center;
        background-size: 75vh;
        margin: 1vw;
        border-radius: 3vw;
        display: inline-block;
        cursor: pointer;
        will-change: auto;
    }
}
</style>

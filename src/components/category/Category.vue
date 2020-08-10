<template>
    <div class="category category--size">
        <span class="category__title">{{ category.name }}</span>
        <songs :songs="category.songs" 
               :categoryId="category.id"
                class="category__songs"></songs>
    </div>
</template>

<script>

import Songs from '../songs/Songs';

export default {
    components: {
        songs: Songs
    },
    props: {
        category: {
            id: Number,
            name: String,
            songs: [],
        },
    },

    data() {
        return {
            song: {
                id: Number,
                name: String,
                singer: String,
                views: String,
                image: String,
            },
        }
    },
}
</script>

<style scoped>

.category{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 10px 0 50px 0;
}

.category__title{
    font-size: 40px;
    font-weight: 700;
    color: white;
}

.category__songs{
    margin: 20px 0;
    width: 100%;
}

</style>


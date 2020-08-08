<template>
    <ul class="song__list">
        <li class="song__item" v-for="song in songs" :key="song.id">
            <song :song="song"></song>
        </li>
    </ul>
</template>

<script>

import Song from '../songs/Song';

export default {
    components:{
        song: Song
    },
    props:{
        songs:Array
    },

    data() {
        return {
            song: {
                id: Number,
                name: String,
                singer: String,
                views: String,
                image: String
            }
        }
    },
}
</script>

<style scoped>

.song__list{
    list-style: none;
    display: flex;
    align-items: flex-start;
}

</style>
<template>
    <div class="songs songs--size">
        <div v-if="count > 0" 
            class="previous previous--size" 
            @click="scrollSongs">
            <IconifyIcon 
                :icon="icons.baselineExpandLess" 
                class="previous__icon"/>
        </div>
        <ul class="songs__list">
            <li class="songs__item" v-for="song in songs" :key="song.id">
                <song :song="song"></song>
            </li>
        </ul>
        <div v-if="true" 
            class="next next--size" 
            @click="scrollSongs">
            <IconifyIcon 
                :icon="icons.baselineExpandLess" 
                class="next__icon"/>
        </div>
    </div>
</template>

<script>

import Song from '../songs/Song';
import IconifyIcon from '@iconify/vue';
import baselineExpandLess from '@iconify/icons-ic/baseline-expand-less';

export default {
    components:{
        song: Song,
        IconifyIcon
    },
    props:{
        songs:Array,
        categoryId: Number
    },

    data() {
        return {
            icons: {
				baselineExpandLess,
			},
            song: {
                id: Number,
                name: String,
                singer: String,
                views: String,
                image: String
            },
            count: 0,
            totalSongs: 0
        }
    },

    methods: {
        scrollSongs(){
            // get ul element at index categoryId - 1
            // -1 because categoryId always  categoryId>=1 
            var songsListEle = document.getElementsByClassName('songs__list')[this.categoryId - 1];
            songsListEle.scrollLeft += 440;

            this.totalSongs = songsListEle.children.length;
            this.count ++;
        },
    },
}
</script>

<style scoped>

.songs{
    display: flex;
    align-items: center;
}

.songs--size{
    height: auto;
}

.songs__list{
    list-style: none;
    display: flex;
    align-items: flex-start;
    overflow: hidden;
    scroll-behavior: smooth;
}

.previous{
    cursor: pointer;
    background-color: white;
    position: absolute;
    left: 9%;
    margin-bottom: 70px;
    border-radius: 20px;
}

.previous--size{
    width: 40px;
    height: 40px;
}   

.previous__icon{
    margin-top: 10px;
    font-size: 20px;
    transform: rotate(-90deg);
}

.next{
    cursor: pointer;
    background-color: white;
    position: absolute;
    left: 88.6%;
    margin-bottom: 70px;
    border-radius: 20px;
}

.next--size{
    width: 40px;
    height: 40px;
}   

.next__icon{
    margin-top: 10px;
    font-size: 20px;
    transform: rotate(90deg);
}


</style>
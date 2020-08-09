<template>
    <div class="songs songs--size">
        <ul class="songs__list">
            <li class="songs__item" v-for="song in songs" :key="song.id">
                <song :song="song"></song>
            </li>
        </ul>
        <div class="next next--size">
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
        songs:Array
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
            }
        }
    },

    mounted() {
        var ul = document.getElementsByClassName('songs__list')[0];
        ul.scrollTop  = 1000
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
    overflow-x: scroll;
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
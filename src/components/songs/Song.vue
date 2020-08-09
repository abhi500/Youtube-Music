<template>
    <div class="song 
        song--size 
        song--theme"
        @click="openPlayer(song.id)">
        <img :src="song.image" class="song__image--size">
        <span class="song__name">{{ song.name }}</span>
        <p class="song__info">
            <a href="#" class="song__singer">{{ song.singer }}</a> . {{ song.views }} views
        </p>
    </div>
</template>

<script>

export default {
    props: {
        song:{
            id: Number,
            name: String,
            singer: String,
            views: String,
            image: String
        }
    },
    
    methods: {
        /**
         * open player when user click on song
         */
        openPlayer(id){
            this.$router.push({name: 'Watch', query: { v: id }})
        }
    },
}

</script>

<style scoped>

.song{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 10px 40px 20px 0;
}

.song--size{
    height: auto;
    width: auto;
}

.song__image--size{
    height: 220px;
    width: 400px;
}

.song__name{
    font-size: 16px;
    font-weight: 600;
    color: white;
    margin: 20px 0 7px 0;
}

.song__info{
    color: lightgray;
}

.song__singer{
    text-decoration: none;
    color: lightgray;
}


</style>
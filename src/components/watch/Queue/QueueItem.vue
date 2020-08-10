<template>
    <div class="queueitem queueitem--size">
        <img :src="queue.image" class="queueitem__image--size queueitem__image">
        <div class="queue__info">
            <span class="queue__song-name">{{ queue.name }}</span>
            <span class="queue__singer">{{ queue.singer }}</span>
        </div>
        <span class="queue__length">{{ queue.length }}</span>
    </div>
</template>

<script>
export default {
    props: {
        queue: {
            id: Number,
            name: String,
            singer: String,
            length: String,
            image: String
        }
    }
}
</script>

<style scoped>

.queueitem{
    display: flex;
    padding: 10px;
    align-items: center;
}

.queueitem--size{
    width: 100%;
    height: 50px;
}

.queueitem__image{
    cursor: pointer;
}

.queueitem__image--size{
    height: 30px;
    width: 30px;
}

.queue__info{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 10px;
}

.queue__song-name{
    font-weight: 600;
    color: white;
}

.queue__singer{
    color: gray;
    margin-top: 5px;
}

.queue__length{
    margin-left: auto;
    color: gray;
}

</style>
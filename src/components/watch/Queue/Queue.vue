<template>
    <div class="queue queue--size">
        <span class="queue__title">Queue</span>
        <hr class="line line--size">
        <ul class="queue__list 
            queue__list--size">
            <li v-for="(queue,index) in list" 
                :key="index" 
                class="queue__listitem">
                <queueitem :queue="queue"></queueitem>
            </li>
        </ul>
        
    </div>
</template>

<script>

import QueueList from '../../../apis/queuelist';
import QueueItem from './QueueItem';

export default {
    components: {
        queueitem: QueueItem
    },

    data() {
        return {
            list: QueueList
        }
    },
}
</script>

<style scoped>

.queue{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.queue--size{
    width: 600px;
}

.queue__title{
    font-weight: 600;
    color: lightgrey;
}

.line{
    border: 1px solid #37474f;
    border-top: none;
    border-right: none;
    border-left: none;
    margin-top: 5px;
}

.line--size{
    width: 100%;
    height: auto;
}

.queue__list{
    list-style: none;
    margin-top: 10px;
    overflow-y: scroll;
}

.queue__list--size{
    width: 100%;
    height: 75vh;
}

.queue__listitem{
    border: 1px solid #212121;
    border-top: none;
    border-left: none;
    border-right: none;
}

.queue__listitem:hover{
    cursor: pointer;
}


</style>
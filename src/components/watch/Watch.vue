<template>
    <div class="watch 
        watch--size 
        watch--theme">
        <div class="watch__player watch__player--size">
            <video-player></video-player>
        </div>
        <div class="watch__queue">
            <queue></queue>
        </div>
        
    </div>
</template>

<script>

import VideoPlayer from './VideoPlayer/VideoPlayer';
import Queue from './Queue/Queue';

export default {
    components: {
        'video-player': VideoPlayer,
        queue: Queue
    }
}
</script>

<style scoped>

.watch{
    display: flex;
    padding: 80px 100px;
    overflow: hidden;
}

.watch--size{
    width: 100%;
    min-height: calc(100vh - 60px);
    height: calc(100vh - 60px);
}

.watch--theme{
    background-color: black;
}

.watch__player{
    flex: 5;
}

.watch__queue{
    margin-left: 100px;
    flex: 3;
}

@media screen and (max-width: 935px) { 
    .watch{
        display: flex;
        flex-direction: column;
        padding: 50px;
        align-items: flex-start;
        
    }

    .watch__player{ 
        flex: 1;
    }

    .watch__player--size{
        width: 100%;
    }

    .watch__queue{
        margin-top: 50px;
        flex: 1;
    }
}


</style>
<template>
    <div class="watch 
        watch--size 
        watch--theme">
        <div class="watch__player">
            <video-player></video-player>
        </div>
        <div class="watch__queue">
            <queue></queue>
        </div>
        
    </div>
</template>

<script>

import VideoPlayer from './VideoPlayer';
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
    padding: 120px 100px;
}

.watch--size{
    width: 100%;
    height: calc(100vh - 60px);
}

.watch--theme{
    background-color: black;
}

.watch__queue{
    margin-left: 100px;
}


</style>
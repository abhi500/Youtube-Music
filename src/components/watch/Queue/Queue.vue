<template>
    <div class="queue queue--size">
        <span class="queue__title">Queue</span>
        <hr class="line line--size">
        <ul class="queue__list">
            <li></li>
        </ul>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            queueList: [
                {
                    
                }
            ]
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

.line{
    border: 1px solid white;
    margin-top: 5px;
}

.line--size{
    width: 100%;
}


</style>
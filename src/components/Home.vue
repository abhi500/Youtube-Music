<template>
    <div class="home home--size">
        <ul class="home__categories home__categories--size">
            <li class="home__category home__category--size" v-for="category in categories" :key="category.id">
                <category :category="category"></category>
            </li>
        </ul>
    </div>
</template>

<script>

import { categories } from '../apis/home';
import Category from './category/Category';

export default {
    components: {
        category: Category
    },
    data() {
        return {
            categories: categories
        }
    },
}
</script>

<style scoped>

.home__categories{
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 50px auto;
}

.home__categories--size{
    width: 80%;
}

.home__category--size{
    width: 100%;
}

</style>
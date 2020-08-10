<template>
    <div class="profile profile--size profile--theme" @click="onClick()">
        <div class="profile__user">
            <img :src="user.icon" 
                class="profile__image 
                profile__image--size">
            <div class="profile__info">
                <span class="profile__name">{{ user.name }}</span>
                <span class="profile__email">{{ user.email }}</span>
                <a href="#" class="profile__manage-account">Manage your Google Account</a>
            </div>
        </div>
        <hr class="line">
        <div class="profile__center">
            <ul class="options">
                <li v-for="option in options" 
                    :key="option.id" 
                    class="option option--size">
                    <a href="#" class="option__item option__item--size">
                        <IconifyIcon :icon="option.icon" class="option__icon option__icon--size"/>
                        <span class="option__name">{{ option.name }}</span>
                        <IconifyIcon v-if="option.id == 3" 
                                :icon="option.anotherIcon" 
                                class="option__icon--size 
                                option__more-icon"/>
                    </a>
                </li>
            </ul>
        </div>
        <hr class="line">
        <div class="profile__bottom">
            <ul class="options">
                <li v-for="option in otherOptions" 
                    :key="option.id"
                    class="option option--size">
                    <a href="#" class="option__item option__item--size">
                        <IconifyIcon :icon="option.icon" class="option__icon option__icon--size"/>
                        <span class="option__name">{{ option.name }}</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

import { options, otherOptions } from '../apis/profile';
import { user } from '../apis/profile';
import IconifyIcon from '@iconify/vue';

// import { EventBus } from '../event-bus';

export default {
    components: {
        IconifyIcon
    },

    data() {
        return {
            // datas
            user: user,
            options: options,
            otherOptions: otherOptions,

            profileBlock: Element,
            isVisible: Boolean
        }
    },

    methods: {
        /**
         * hide profile component
         */
        hide(){
            this.profileBlock.style.display = 'none';
            this.isVisible = false;
        },

        /**
         * show profile component
         */
        show(){
            this.profileBlock.style.display = 'flex';
            this.isVisible = true;
        },

        onClick(){
            // console.log(this.$parent.)
        }
    },

    mounted() {
        this.profileBlock = document.getElementsByClassName('profile')[0];
        // EventBus.$on('hideProfile', () => {
        //     if(this.isVisible)
        //         this.hide();
        //         console.log(this.isVisible)
        // })
    },
}
</script>

<style scoped>

.profile{
    border: 1px solid #546e7a;
}

.profile--theme{
    background-color: #303030;
}

.profile--size{
    width: 300px;
    height: auto;
}

.profile__user{
    display: flex;
    padding: 30px;
}

.profile__info{
    text-align: start;
    color: white;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
}

.profile__name{
    font-weight: 600;
}

.profile__email{
    font-size: 14px;
}

.profile__manage-account{
    text-decoration: none;
    font-size: 14px;
    margin-top: 15px;
    color: #065fd4;
}

.profile__image{
    border-radius: 20px;
}

.profile__image--size{
    height: 40px;
    width: 40px;
}

.options{
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 10px 0;
}

.option--size{
    width: 100%;
}

.option__item{
    display: flex;
    text-decoration: none;
    padding: 10px;
    color: white;
    cursor: pointer;
}

.option:hover{
    background-color: #37474f;
}

.option__item--size{
    height: 40px;
}

.option__icon{
    color: lightgrey;
}

.option__icon--size{
    height: 20px;
    width: 20px;
}

.option__name{
    margin-left: 20px;
    font-size: 14px;
}

.option__more-icon{
    transform: rotate(-90deg);
    margin-left: auto;
    margin-right: 10px;
}

</style>
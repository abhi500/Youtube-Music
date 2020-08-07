<template>
    <div class="navbar 
        navbar--size 
        navbar--theme">
        <div class="navbar__brand">
            <a href="#">
                <img src="https://s.ytimg.com/yts/img/music/web/on_platform_logo_dark-vfl_PUy2j.svg" 
                    class="navbar__brand-icon">
            </a>
        </div> 
        <ul class="navbar__menus">
            <li v-for="(menu, index) in menus" :key="index">
                <p class="navbar__menu">
                    <img :src="menu.icon" class="navbar__menu-icon">
                    <span class="navbar__menu-title">{{ menu.name }}</span>
                </p>
            </li>
        </ul>
        <div class="navbar__right">
            <img :src="profileIcon" 
                class="navbar__profile-icon 
                navbar__profile-icon--size"
                @click="showProfile">
            <div class="navbar__profile" v-if="profileComponentVisible">
                <profile v-bind:isVisible="true"></profile>
            </div>    
        </div>
    </div>
</template>

<script>

import Profile from './Profile';
import { menus, profileIcon } from '../apis/navbar';

export default {
    components: {
        profile: Profile,
    },

    data() {
        return {
           menus: menus,
           profileIcon: profileIcon,
           profileComponentVisible: false
        }
    },

    mounted() {
        //show only last menu icon
        document.getElementsByClassName('navbar__menu-icon')[3].style.display = 'flex';

        // set white color to first menu
        document.getElementsByClassName('navbar__menu')[0].style.color = 'white';
    },

    methods: {
        showProfile(){
            this.profileComponentVisible = true;
        }
    },
}
</script>

<style scoped>

.navbar{
    display: flex;
    align-items: center;
}

.navbar--theme{
    background-color: #303030;
}

.navbar--size{
    height: 60px;
    width: 100%;
}

.navbar__brand{
    margin: 5px 0 0 15px;
}

.navbar__brand-icon{
    height: 24px;
}

.navbar__menus{
    list-style: none;
    display: flex;
    color: white;
    position: relative;
    margin: auto;
}

.navbar__menu{
    font-size: 20px;
    font-weight: 600;
    margin-right: 40px;
    cursor: pointer;
    display: flex;
    color: gray;
}

.navbar__menu:hover{
    color: white;
}

.navbar__menu-icon{
    color: white;
    height: 20px;
    margin-right: 20px;
    display: none;
}

.navbar__right{
    position: absolute;
    right: 0;
    margin: 20px;
    cursor: pointer;
}

.navbar__profile-icon{
    border-radius: 12.5px;
}

.navbar__profile-icon--size{
    height: 25px;
    width: 25px;
}

.navbar__profile{
    position: fixed;
    right: 20px;
}

@media screen and (max-width: 800px) { 
    .navbar__menu-title{ 
        display: none;
        margin-right: 0px;
    }

    .navbar__menu-icon{
        display: flex;
        margin-right: 0px;
    }


}

</style>
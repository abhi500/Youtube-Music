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
            <li v-for="(menu, index) in menus" :key="index" @click="onNavClick(menu.name, index)">
                <p class="navbar__menu">
                    <IconifyIcon :icon="menu.icon" class="navbar__menu-icon"/>
                    <span class="navbar__menu-title">{{ menu.name }}</span>
                </p>
            </li>
        </ul>
        <div class="navbar__right">
            <IconifyIcon :icon="profileIcon" 
                class="navbar__profile-icon 
                navbar__profile-icon--size
                navbar__profile-icon--theme"
                @click="showProfile"/>
            <div class="navbar__profile" v-if="profileComponentVisible">
                <profile v-bind:isVisible="true"></profile>
            </div>    
        </div>
    </div>
</template>

<script>

import IconifyIcon from '@iconify/vue';
import Profile from './Profile';
import { menus, profileIcon } from '../apis/navbar';

export default {
    components: {
        profile: Profile,
        IconifyIcon
    },

    data() {
        return {
           menus: menus,
           profileIcon: profileIcon,
           profileComponentVisible: false,
           previousMenuIndex: Number,
           currentMenuIndex: 0
        }
    },

    mounted() {
        //show only last menu icon
        document.getElementsByClassName('navbar__menu-icon')[3].style.display = 'flex';

        // set white color to first menu
        document.getElementsByClassName('navbar__menu')[this.currentMenuIndex].style.color = 'white';
    },

    methods: {
        showProfile(){
            this.profileComponentVisible = true;
        },

        onNavClick(navItem, index){
            if(this.currentMenuIndex != index){
                this.previousMenuIndex = this.currentMenuIndex;
                this.currentMenuIndex = index;
                document.getElementsByClassName('navbar__menu')[this.currentMenuIndex].style.color = 'white';
                document.getElementsByClassName('navbar__menu')[this.previousMenuIndex].style.color = 'grey'
            }
            if(this.$route.name != navItem)
                this.$router.push({ name: navItem }) 
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
    color: white;
    padding-top: 5px;
}

.navbar__profile-icon--size{
    height: 25px;
    width: 25px;
}

.navbar__profile-icon--theme{
    background-color: #26a69a;
}

.navbar__profile{
    position: fixed;
    right: 20px;
    z-index: 2;
}

@media screen and (max-width: 935px) { 
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
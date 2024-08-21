<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <img src="./1350979-4M.jpeg" style="width: 220px" title="默认111" alt="">
        <img :src="ii" style="width: 128px" alt="">
        <button @click="handleClick">Say Hello</button>
    </div>
</template>

<script lang="ts" setup>
import {runContextMethod} from "@/utils";

const ii = require("./1350979-4M.jpeg")

const handleClick = () => {
    runContextMethod("tell", 1, 2, 3).then(res => {
        alert(`Your Platform is ${res} !`)
    })
}
</script>

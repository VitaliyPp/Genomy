<template>
  <div class="test" @click="test1">Test1</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Profile extends Vue {
  test1(){
    console.log('Hello');
  }
}
</script>

<style lang="scss" scoped>
.test {
  border: 1px solid red;
}
</style>
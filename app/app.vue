<template>
    <div>
        <v-title title="Vue组件化"></v-title>
        <v-button @click="handleClick">点击按钮</v-button>
    </div>
</template>
<script>
    import vButton from './button.vue'
    import vTitle from './title.vue'

    export default {
        components: {
            vButton,
            vTitle,
        },
        methods: {
            handleClick (e) {
                console.log(e)
            }
        }
    }
</script>

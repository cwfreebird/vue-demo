<template>
    <div>
        <v-title title="Vue组件化"></v-title>
        <v-button @click="handleClick">点击按钮</v-button>
        <input-number v-model="value" :max="10" :min="0"></input-number>
    </div>
</template>
<script>
    import vButton from './button.vue'
    import vTitle from './title.vue'
    import inputNumber from './input-number.vue'

    export default {
        components: {
            vButton,
            vTitle,
            inputNumber,
        },
        methods: {
            handleClick (e) {
                console.log(e)
            }
        },
        data: function () {
            return {
                value: 5
            }
        }
    }
</script>

<template>
    <div>
        <button @click="handleReduce"> - </button>
        <input type="text" :value="currentValue" @change="handleChange"/>
        <button @click="handleIncrease"> + </button>
    </div>
</template>
<script>
    export default {
        props:{
            value: {
                type: Number,
                default: 5
            },
            min : {
                type: Number
            },
            max : {
                type: Number
            }
        },
        data: function () {
            return {
                currentValue: this.value
            }
        },
        watch: {
            value: function (val) {
                this.currentValue = val
            },
            currentValue: function (val) {
                this.$emit('input', val)
            }
        },
        methods: {
            handleReduce (){
                this.currentValue --
            },
            handleIncrease (){
                this.currentValue ++
            },
            handleChange (event) {
                let value = event.target.value.trim();
                console.log(value)
            }
        }
    }
</script>
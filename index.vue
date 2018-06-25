<style scoped>

    .smart-image .inner {
        margin: auto;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
    }

</style>

<template>
    <div class="smart-image" :style="{ padding }">

        <div class="inner" :style="{ backgroundImage: 'url(' + _src + ')', width, height }" />

    </div>
</template>

<script>

    export default {

        name: 'smart-image',

        computed: {
            _src() {
                return this.src === null ? require('./no-image.jpg') : this.src
            }
        },

        props: {
            src: String,
            width: String,
            height: String,
            padding: String
        }

    }

</script>

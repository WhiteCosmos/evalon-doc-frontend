<template>
    <div :style="{'height': gutter + 'px'}">

    </div>
</template>

<script>
    export default {
        name: "ev-row-gutter",
        props: {
            gutter: {type: Number, default: 0}
        }
    }
</script>

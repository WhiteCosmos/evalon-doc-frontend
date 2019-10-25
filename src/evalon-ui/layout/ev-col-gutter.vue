<template>
    <div :style="{'width': gutter + 'px'}">

    </div>
</template>

<script>
    export default {
        name: "ev-col-gutter",
        props: {
            gutter: {type: Number, default: 0}
        }
    }
</script>

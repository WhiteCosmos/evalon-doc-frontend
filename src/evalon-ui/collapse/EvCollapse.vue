<template>
    <div class="ev-col ev-collapse ev-width-max">

        <!--   标题   -->

        <div class="ev-row ev-collapse-title ev-height-l ev-col-center" @click="toggleExpand">
            <EvAngle class="ev-collapse-icon" :flag="expand"></EvAngle>

            <h3 class="ev-blue">{{ title }}</h3>
        </div>

        <!--   内容  -->

        <div class="ev-collapse-slot-container" v-show="expand">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import EvCollapseMixin from "@/evalon-ui/collapse/EvCollapseMixin";
    import EvAngle from "@/evalon-ui/button/EvAngle";

    export default {
        name: "EvCollapse",
        components: {EvAngle},
        mixins: [
            EvCollapseMixin,
        ]
    }
</script>

<style lang="scss" scoped>
    @import "./ev-collapse";

    .ev-collapse {
        position: relative;
    }
</style>

<template>
    <div class="registered-module ev-row ev-col-center">
        <div class="icon-container">
            <ev-icon icon-name="check" icon-color="ev-green" v-if="success"></ev-icon>

            <ev-icon icon-name="times" icon-color="ev-red" v-else></ev-icon>
        </div>

        <div class="ev-col ev-row-center">
            <h5>{{ module.appName }}</h5>

            <h5 class="reference">{{ module.moduleName }}</h5>
        </div>

        <ev-flex-end-container>
            <h6>服务: {{ module.serviceCount }} 个</h6>

            <ev-col-gutter-16-px></ev-col-gutter-16-px>

            <h6>接口: {{ module.methodCount }} 个</h6>
        </ev-flex-end-container>
    </div>
</template>

<script>
    import EvIcon from "@/evalon-ui/other/ev-icon";
    import EvFlexEndContainer from "@/evalon-ui/layout/ev-flex-end-container";
    import EvColGutter16Px from "@/evalon-ui/layout/ev-col-gutter-16-px";

    export default {
        name: "RegisteredModule",
        props: {
            module: {type: Object}
        },
        computed: {
            success() {
                return this.module && this.module.serviceCount > 0
            }
        },
        components: {EvColGutter16Px, EvFlexEndContainer, EvIcon}
    }
</script>

<style lang="scss" scoped>
    @import "../../evalon-ui/evalon-ui";


    .registered-module {
        height: 56px;
    }

    .icon-container {
        @include ev-square(56px);

        @include ev-absolute-center;
    }
</style>

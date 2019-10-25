<template>
    <div class="ev-stacktrace ev-col">
        <h6 class="native-msg">{{ exceptionName }}</h6>
        <div class="ev-row" v-for="(msg, idx) in stacktraces" v-if="idx > 0">
            <h6 class="ev-red">at</h6>

            <ev-col-gutter-8-px></ev-col-gutter-8-px>

            <h6 :class="{'native-msg': isNativeTrace(msg), 'not-native-msg': !isNativeTrace(msg)}">{{ msg }}</h6>
        </div>
    </div>
</template>

<script>
    import EvColGutter8Px from "@/evalon-ui/layout/ev-col-gutter-8-px";

    export default {
        name: "ev-stacktrace",
        components: {EvColGutter8Px},
        props: {
            stacktraces: {
                type: Array, default: () => {
                    return []
                }
            }
        },
        computed: {
            exceptionName() {
                return this.stacktraces[0]
            },
        },
        methods: {
            isNativeTrace(msg) {
                return msg.startsWith("me.ele")
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

    .ev-stacktrace {
        background-color: $NEUTRAL_GREY_1;

        @include ev-padding-top-and-bottom(16px, 16px);

        @include ev-padding-left-and-right(24px, 24px);
    }

    h6 {
        line-height: 32px;
    }

    .native-msg {
        color: $EVALON_FONT_COLOR_LIGHT;
    }

    .not-native-msg {
        color: $NEUTRAL_GREY_5;
    }
</style>

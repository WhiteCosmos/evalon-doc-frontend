<template>
    <div class="ev-col ev-col-center">
        <ev-square-loading></ev-square-loading>

        <ev-row-gutter-48-px></ev-row-gutter-48-px>

        <span class="font-title">{{ title }}</span>

        <ev-row-gutter-32-px></ev-row-gutter-32-px>

        <span class="font-message">{{ message_ }}</span>
    </div>
</template>

<script>
    import EvSquareLoading from "@/evalon-ui/loading/ev-square-loading";
    import EvRowGutter32Px from "@/evalon-ui/layout/ev-row-gutter-32-px";
    import EvRowGutter48Px from "@/evalon-ui/layout/ev-row-gutter-48-px";

    export default {
        name: "ev-repeat",
        components: {EvRowGutter48Px, EvRowGutter32Px, EvSquareLoading},
        mounted() {
            let executor = () => {
                this.handler(this.payload).then(res => {
                    this.message_ = res.result
                })
            }

            this.handlerId = setInterval(executor, this.interval)
        },
        beforeDestroy() {
            clearInterval(this.handlerId)
        },
        props: {
            title: {type: String},

            message: {type: String},

            interval: {type: Number, default: 1000}, // ms

            payload: {type: Object},

            handler: {
                type: Function, default: () => {
                    return "message"
                }
            },

            cancel: {
                type: Boolean, default: false
            }
        },
        data() {
            return {
                handlerId: 0,

                message_: this.message
            }
        },
        watch: {
            cancel(newVal) {
                if (newVal) {
                    clearInterval(this.handlerId);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

    .font-title {
        font-size: 24px;

        font-weight: bolder;

        color: $EVALON_FONT_COLOR_LIGHT;
    }

    .font-message {
        font-size: 12px;

        font-weight: bolder;

        color: $EVALON_FONT_COLOR_LIGHT;
    }
</style>

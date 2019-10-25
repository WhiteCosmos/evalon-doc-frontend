<template>
    <div class="ev-text-button" @click="doCopy">{{ currentTitle }}</div>
</template>

<script>
    export default {
        name: "ev-copy-button",
        created() {
            this.currentTitle = this.beforeCopyTitle
        },
        props: {
            content: {type: String},

            beforeCopyTitle: {type: String, default: "复制"},

            afterCopyTitle: {type: String, default: "已复制"},
        },
        data() {
            return {
                currentTitle: ""
            }
        },
        methods: {
            doCopy() {
                this.$copyText(this.content).then(() => {
                    this.currentTitle = this.afterCopyTitle

                    setTimeout(() => {
                        this.currentTitle = this.beforeCopyTitle
                    }, 400)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

    .ev-text-button {
        width: fit-content;

        height: 24px;

        font-size: 12px;

        font-weight: bolder;

        line-height: 24px;

        color: $EVALON_FONT_COLOR_VERY_LIGHT;

        transition: all 120ms;
    }

    .ev-text-button:hover {
        color: $EVALON_BLUE;

        cursor: pointer;
    }
</style>

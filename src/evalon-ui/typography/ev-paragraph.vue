<template>
    <div class="ev-paragraph">
        <ev-copy-button :content="text" before-copy-title="copy" after-copy-title="copied"></ev-copy-button>

        <pre>{{ text }}</pre>
    </div>
</template>

<script>
    import EvCopyButton from "@/evalon-ui/button/ev-copy-button";
    export default {
        name: "ev-paragraph",
        components: {EvCopyButton},
        props: {
            text: {type: String}
        },
        computed: {
            lines() {
                return this.text.split("\n")
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

    .ev-paragraph {
        background-color: $EVALON_GREY_LEVEL_0;

        @include ev-padding-left-and-right(24px, 24px);

        @include ev-padding-top-and-bottom(16px, 16px);
    }

    p {
        font-family: "Source Code Pro", sans-serif;

        line-height: 24px;

        margin: 0;

        padding: 0;

        overflow-wrap: break-word;
    }

    pre {
        font-family: "Source Code Pro", sans-serif;

        font-size: 12px;

        line-height: 24px;

        color: $EVALON_FONT_COLOR_LIGHT;

        //overflow-wrap: break-word;

        //word-wrap: break-word;

        word-break: break-all;

        white-space: pre-wrap;

        //white-space: normal;

        //word-wrap: break-word;

        //white-space: pre-line;

        overflow-wrap: break-word;
    }
</style>

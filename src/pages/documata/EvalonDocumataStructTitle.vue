<template>
    <div class="ev-col evalon-documata-api-title">
        <div class="ev-row ev-col-center">
            <span class="api-service-comment">{{ commentTitle }}</span>
        </div>

        <div class="ev-row ev-col-center">
            <span class="api-service-and-method-name">{{ struct.fieldName }}</span>

            <ev-col-gutter-8-px></ev-col-gutter-8-px>

            <ev-icon icon-name="copy" icon-color="neutral-grey-4"></ev-icon>
        </div>

        <div class="ev-row ev-col-center">
            <span class="api-service-qualified-name">{{ struct.fieldQualifyName }}</span>

            <ev-col-gutter-8-px></ev-col-gutter-8-px>

            <ev-icon icon-name="copy" icon-color="neutral-grey-4"></ev-icon>
        </div>
    </div>
</template>

<script>
    import EvIcon from "@/evalon-ui/other/ev-icon";
    import EvColGutter8Px from "@/evalon-ui/layout/ev-col-gutter-8-px";
    import EvIconButtonSmall from "@/evalon-ui/button/ev-icon-button-small";
    import EvIconButton from "@/evalon-ui/button/ev-icon-button";
    import EvRowGutter8Px from "@/evalon-ui/layout/ev-row-gutter-8-px";
    import EvIconButtonOnlyIcon from "@/evalon-ui/button/ev-icon-button-only-icon";

    export default {
        name: "EvalonDocumataStructTitle",
        computed: {
            struct() {
                let fields = this.$store.state.documata.structContent

                return fields ? fields[0] : undefined
            },
            commentTitle() {
               let commentTitle = this.struct.fieldCommentTitle

                return commentTitle ? commentTitle : this.struct.fieldName
            }
        },
        components: {EvIconButtonOnlyIcon, EvRowGutter8Px, EvIconButton, EvIconButtonSmall, EvColGutter8Px, EvIcon}
    }
</script>

<style lang="scss" scoped>
    @import "../../evalon-ui/evalon-ui";

    .evalon-documata-api-title {

    }

    .api-service-comment {
        font-weight: bold;

        font-size: 24px;

        line-height: 48px;

        color: $EVALON_FONT_COLOR;
    }

    .api-service-and-method-name {
        font-weight: bold;

        font-size: 16px;

        line-height: 32px;

        color: $EVALON_FONT_COLOR_LIGHT;
    }

    .api-service-qualified-name {
        font-weight: bold;

        font-size: 16px;

        line-height: 32px;

        color: $EVALON_FONT_COLOR_LIGHT;
    }
</style>

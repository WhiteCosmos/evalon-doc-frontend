<template>
    <div class="ev-row ev-check-list-item ev-width-max ev-col-center ev-no-select">
        <EvCheckbox :handler="toggleCheck"></EvCheckbox>

        <ev-col-gutter-s></ev-col-gutter-s>

        <h5 :class="{'ev-blue': checked}">{{ item }}</h5>
    </div>
</template>

<script>
    import EvColGutterXs from "@/evalon-ui/layout/ev-col-gutter-xs";
    import EvCheckbox from "@/evalon-ui/form/EvCheckbox";
    import EvColGutterM from "@/evalon-ui/layout/ev-col-gutter-m";
    import EvColGutterS from "@/evalon-ui/layout/ev-col-gutter-s";

    export default {
        name: "EvCheckListItem",
        components: {EvColGutterS, EvColGutterM, EvColGutterXs, EvCheckbox},
        props: {
            idx: Number,

            module: String,
        },
        data() {
            return {
                checked: false
            }
        },
        methods: {
            toggleCheck(flag) {
                this.checked = flag

                if (flag) {
                    this.$emit("checked", this.idx);
                } else {
                    this.$emit("unchecked", this.idx);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

    .ev-check-list-item {
        height: 40px;

        @include ev-border-bottom($EVALON_GREY_BORDER);
    }
</style>

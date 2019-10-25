<template>
    <div class="playground">
        <div class="container">
            <ev-selector :options="options"></ev-selector>
        </div>

        <ev-row-gutter-m></ev-row-gutter-m>

        <div class="container">
<!--            <ev-selector :options="optionsCopy"></ev-selector>-->
        </div>
    </div>
</template>

<script>
    import EvSelector from "@/evalon-ui/form/selector/ev-selector";
    import EvRowGutterM from "@/evalon-ui/layout/ev-row-gutter-m";
    import EvSelectorGroup from "@/evalon-ui/form/selector/ev-selector-group";
    import EvSearch from "@/evalon-ui/form/search/ev-search";
    import EvFilter from "@/evalon-ui/form/search/ev-filter";

    export default {
        name: "Playground",
        data() {
            return {
                options: [
                    "选项1",
                    "选项2",
                    "选项3",
                    "选项4",
                    "选项5",
                    "aaa",
                    "bbb",
                    "ccc",
                    "ccc1",
                    "ccc2",
                    "ccc3",
                    "ccc4",
                ],
                optionsCopy: [
                    "aaa",
                    "bbb",
                    "ccc",
                    "ccc1",
                    "ccc2",
                    "ccc3",
                ],
            }
        },
        components: {EvFilter, EvSearch, EvSelectorGroup, EvRowGutterM, EvSelector}
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

    .playground {
        padding: 128px;
    }

    .container {
        width: 320px;
    }
</style>

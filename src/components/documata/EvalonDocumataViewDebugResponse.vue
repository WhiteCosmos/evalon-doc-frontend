<template>
    <div class="root">
        <ev-tab button-align="center">
            <ev-panel name="Info" label="info"></ev-panel>

            <ev-panel name="Request" label="Request"></ev-panel>

            <ev-panel name="Response" label="Response"></ev-panel>
        </ev-tab>
    </div>
</template>

<script>
    import EvTab from "@/evalon-ui/navigation/ev-tab";
    import EvPanel from "@/evalon-ui/navigation/ev-panel";

    export default {
        name: "EvalonDocumataViewDebugResponse",
        components: {EvPanel, EvTab}
    }
</script>

<style lang="scss" scoped>
    @import "../../evalon-ui/evalon-ui";


    .root {
        display: flex;

        flex: 1;
    }
</style>

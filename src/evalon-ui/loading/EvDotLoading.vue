<template>
    <div class="lds-default">
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<script>
    export default {
        name: "EvDotLoading"
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

    .lds-default {
        display: inline-block;
        position: relative;
        width: 32px;
        height: 32px;
    }

    .lds-default div {
        position: absolute;
        width: 5px;
        height: 5px;
        background: $EVALON_ROYAL_BLUE_5;
        border-radius: 50%;
        animation: lds-default 1.2s linear infinite;
    }

    .lds-default div:nth-child(1) {
        animation-delay: -0.4s;
        top: 14px;
        left: 0;
    }

    .lds-default div:nth-child(2) {
        animation-delay: -0.2s;
        top: 14px;
        left: 12px;
    }

    .lds-default div:nth-child(3) {
        animation-delay: 0s;
        top: 14px;
        left: 24px;
    }

    @keyframes lds-default {
        0%, 20%, 80%, 100% {
            transform: scale(1);
        }

        50% {
            transform: scale(1.3);
        }
    }
</style>

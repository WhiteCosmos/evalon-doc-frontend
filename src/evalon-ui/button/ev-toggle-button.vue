<template>
    <div class="ev-toggle-button ev-no-outline ev-no-select ev-cursor-pointer"
         :class="classGroup"
         @click="toggle">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "ev-toggle-button",
        props: {
            isActive: {
                type: Boolean,
                default: false,
            }
        },
        data() {
            return {
                active: false,
            }
        },
        computed: {
            classGroup() {
                return {
                    'ev-button-active': this.active,
                    'ev-button-inactive': !this.active
                }
            }
        },
        methods: {
            toggle() {
                this.active = !this.active

                this.$emit('click', this.active)
            }
        },
        watch: {
            isActive(newVal, oldVal) {
                this.active = newVal
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

    .ev-toggle-button {
        width: 72px;

        height: 32px;

        font-size: 12px;

        font-weight: normal;

        transition: color .2s;
    }

    .ev-toggle-button:hover {
        color: $EVALON_BLUE;

        transition: color .2s;
    }

    .ev-button-active {
        color: $EVALON_BLUE
    }

    .ev-button-inactive {
        color: $EVALON_FONT_COLOR
    }
</style>

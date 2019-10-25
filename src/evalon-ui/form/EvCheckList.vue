<template>
    <div class="ev-check-list ev-width-max">
        <div class="ev-check-list-title"><h5 class="ev-blue">{{title}}</h5></div>

        <EvCheckListItem v-for="(item, idx) in nodes" :item="item" :idx="idx"
                         v-on:checked="checked"
                         v-on:unchecked="unchecked"></EvCheckListItem>

        <ev-row-gutter-m></ev-row-gutter-m>

        <EvButton :status="confirmButtonStatus"
                  :label="confirmLabel"
                  label-color="red"
                  :show-label="showConfirmLabel">{{ confirmTitle }}
        </EvButton>
    </div>
</template>

<script>
    import EvCheckListItem from "@/evalon-ui/form/EvCheckListItem";
    import EvRowGutterM from "@/evalon-ui/layout/ev-row-gutter-m";
    import EvButton from "@/evalon-ui/button/EvButton";
    import {EV_BUTTON_DISABLE, EV_BUTTON_ENABLE} from "@/evalon-ui/button/EvButtonStatus";

    export default {
        name: "EvCheckList",
        components: {EvButton, EvRowGutterM, EvCheckListItem},
        props: {
            confirmHandler: {
                type: Function,
                default: () => {

                }
            },

            canBeEmpty: {
                type: Boolean,
                default: false,
            },

            title: {
                type: String,
                default: "城城城城城"
            },

            modules: {
                type: Array,
                default: () => {
                    return []
                }
            },

            confirmTitle: {type: String},

            confirmLabel: {type: String},

            //showConfirmLabel: {type: Boolean, default: false}
        },
        data() {
            return {
                checkedItems: [] // index
            }
        },
        computed: {
            showConfirmLabel() {
                return this.checkedItems.length === 0
            },
            confirmButtonStatus() {
                if (this.checkedItems.length === 0) {
                    return EV_BUTTON_DISABLE
                } else {
                    return EV_BUTTON_ENABLE
                }
            }
        },
        methods: {
            confirm() {
                if (!this.canBeEmpty && this.checkedItems.length === 0) {
                    //TODO 提示必须选择一项
                }

                let list = []

                this.checkedItems.forEach(idx => {
                    list.push(this.modules[idx])
                })

                this.confirmHandler(list);
            },
            checked(idx) {
                this.checkedItems.push(idx)
            },
            unchecked(idx) {
                this.checkedItems = this.checkedItems.filter(i => {
                    return i !== idx
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../evalon-ui";

    .ev-check-list {

    }

    .ev-check-list-title {
        @include ev-border-bottom($EVALON_BLUE_LIGHT)
    }
</style>

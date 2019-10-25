<script>
    import EvAbstractComponent from "@/evalon-ui/mixin/EvAbstractComponent";

    export default {
        name: "EvOptionsMixin",
        props: {
            // DATA

            options: {
                type: Array, default: () => {
                    return []
                }
            },

            optionHeadKey: {type: String},

            optionSubheadKey: {type: String},

            currentSelectedOption: {type: Object},

            hasDefaultOption: {type: Boolean, default: false},

            // ERROR

            showEmptyMessage: {type: Boolean, default: false},

            showErrorMessage: {type: Boolean, default: false},

            emptyMessage: {type: String, default: "没有搜索结果"},

            errorMessage: {type: String, default: "搜索发生异常"},

            // FILTER

            filterKey: {type: String},

            filterHandler: {
                type: Function,
                default: () => {
                    return true
                }
            },

            // HANDLER

            isHoveredHandler: { // check if option is hovered
                type: Function
            },


            isSelectedHandler: { // check if option is selected
                type: Function
            }
        },
        data() {
            return {
                currentHoveredOption: undefined,
            }
        },
        computed: {

        },
        methods: {
            doSelectOption(option) {
                if (option) {
                    this.$emit('select', option)

                    return
                }

                if (this.hasDefaultOption) {
                    this.$emit('select', this.options[0])

                    return
                }

                this.$emit('select', undefined)
            },
            isOptionVisible(option) {
                if (this.isEmptyString(this.filterKey)) {
                    return true
                }

                let value = this.optionHeadKey ? option[this.optionHeadKey] : option;

                return value.includes(this.filterKey)
            },
            isHovered(option) {
                console.log("is hovered")

                if (this.isHoveredHandler) {
                    return this.isHoveredHandler(option)
                } else {
                    return option === this.currentHoveredOption;
                }
            },
            isSelected(option) {
                if (this.isSelectedHandler) {
                    return this.isSelectedHandler(option)
                } else {
                    return option === this.currentSelectedOption;
                }
            },
            hoverHandler(option) {
                this.currentHoveredOption = option
            },
            shortKey(event) {
                switch (event.srcKey) {
                    case 'up':
                        this.keyup()
                        break
                    case 'down':
                        this.keydown()
                        break
                    case 'enter':
                        this.keyenter()
                        break
                }
            },
            keyup() {
                if (this.isEmptyArray(this.options)) {
                    return
                }

                if (this.currentHoveredOption) {
                    let idx = this.options.indexOf(this.currentHoveredOption);

                    if (idx === 0) { // 在第一个之后返回最后
                        this.currentHoveredOption = this.options[this.options.length - 1]
                    } else {
                        this.currentHoveredOption = this.options[--idx]
                    }
                }
            },
            keydown() {
                if (this.isEmptyArray(this.options)) {
                    return
                }

                if (!this.currentHoveredOption) {
                    this.currentHoveredOption = this.options[0]

                    return
                }

                let idx = this.options.indexOf(this.currentHoveredOption)

                if (Object.is(this.options.length - 1, idx)) { // 在最后一个之后返回第一个
                    this.currentHoveredOption = this.options[0]

                    return
                }

                this.currentHoveredOption = this.options[++idx]
            },
            keyenter() {
                if (this.isEmptyArray(this.options)) {
                    return
                }

                this.currentHoveredOption && this.trigger(this.SELECT, this.currentHoveredOption);
            }
        },
        mixins: [
            EvAbstractComponent
        ]
    }
</script>

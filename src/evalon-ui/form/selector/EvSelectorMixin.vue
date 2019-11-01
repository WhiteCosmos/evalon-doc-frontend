<script>
    import EvAbstractComponent from "@/evalon-ui/mixin/EvAbstractComponent";

    export default {
        name: "EvSelectorMixin",
        created() {
            this.registry([
                {
                    name: this.BEFORE_SELECT,

                    before: this.beforeSelect
                },
                {
                    name: this.SELECTING,
                },
                {
                    name: this.AFTER_SELECT,

                    after: this.afterSelect
                },
                {
                    name: this.SELECT_LOCKED,

                    before: this.beforeLocked
                }
            ])
        },
        mounted() {
            if (this.isLocked) {
                this.to(this.SELECT_LOCKED)
            }
        },
        props: {
            // Style

            isLocked: {type: Boolean, default: false}, // 是否处于锁定状态

            placeholder: {type: String, default: "请选择"},

            // Data

            options: { // 从外部接受固定的Options
                type: Array,
                default: () => {
                    return [
                        "选项一",
                        "选项二",
                        "选项三"
                    ]
                }
            },

            defaultOption: {
                type: Object
            },

            optionsProvider: { // 通过Http请求或者Promise获取Options
                type: Function,
            },

            optionHeadKey: {type: String}, // 选项主标题

            optionSubheadKey: {type: String}, // 选项副标题

            subOptionsKey: {type: String}, // 子选择项的Key

            hasDefaultOption: {type: Boolean, default: false}, // 是否使用默认选项，否则为『请选择』

            // Handlers

            selectCallback: {type: Function}, // 选中选项时的回调函数

        },
        data() {
            return {
                options_: [],

                optionsProvider_: undefined,

                currentSelectedOption: undefined,

                optionHandlerCallback: undefined,

                optionsProviderParameter: undefined,

                filterKeyword: "",

                SELECT_LOCKED: "SELECT_LOCKED", // 锁定中

                INPUTTING: "INPUTTING", // 输入中

                BEFORE_SELECT: "BEFORE_SELECT", // 选择前

                SELECTING: "SELECTING", // 选择中

                AFTER_SELECT: "AFTER_SELECT", // 选择后
            }
        },
        computed: {
            onlyOneOption() {
                return this.options_.length === 1
            },
            currentSelectedOptionValue() {
                if (this.currentSelectedOption) {
                    return this.optionHeadKey ? this.currentSelectedOption[this.optionHeadKey] : this.currentSelectedOption;
                }
            },
        },
        methods: {
            beforeSelect() {
                this.clear()

                // if (!this.options || this.options.length === 0) {
                //     this.options_ = []
                //
                //     this.currentSelectedOption = undefined
                //
                //     this.filterKeyword = ""
                //
                //     return;
                // }

                if (!this.optionsProvider) {
                    this.options_ = this.options;

                    this.setDefaultOption();

                    return;
                }

                this.optionsProvider(this.optionsProviderParameter).then(res => {
                    if (this.check(res)) {
                        return
                    }

                    this.options_ = this.responseExtractor(res)

                    this.setDefaultOption()
                }).catch(err => {
                    this.has_error = true

                    this.error_message = err.message
                });
            },
            beforeLocked() {
                if (!this.options || this.options.length === 0) {
                    this.options_ = []

                    this.currentSelectedOption = undefined

                    this.filterKeyword = ""
                }
            },
            afterSelect(option) {
                if (!option) {
                    return
                }

                this.currentSelectedOption = option; // 修改当前选择项

                this.filterKeyword = ""

                this.selectCallback && this.selectCallback(option)

                this.optionsProviderCallback && this.optionsProviderCallback(this.groupIndex, option); // 调用级联函数
            },
            toggle() {
                if (this.is(this.BEFORE_SELECT) || this.is(this.AFTER_SELECT)) {
                    this.to(this.SELECTING)

                    return
                }

                if (this.is(this.SELECTING)) {
                    if (this.currentSelectedOption) {
                        this.to(this.AFTER_SELECT)
                    } else {
                        this.to(this.BEFORE_SELECT)
                    }
                }
            },
            setDefaultOption() {
                if (!this.options_) {
                    this.currentSelectedOption = undefined

                    return;
                }

                if (!this.hasDefaultOption) {
                    return;
                }

                this.currentSelectedOption = this.options_[0]
            },
        },
        watch: {
            optionsProviderParameter(newVal) { // 参数变更后重新调用Provider函数
                if (!newVal) {
                    return
                }

                if (!this.optionsProvider) {
                    return
                }

                this.optionsProvider(newVal).then(res => {
                    this.options_ = this.responseExtractor(res)
                }).catch(err => {
                    console.log(`函数 ${this.optionsProvider.name} 调用失败`)
                })
            },
            isLocked(newVal) {
                if (newVal) {
                    this.to(this.SELECT_LOCKED)
                } else {
                    this.toPrevious()
                }
            },
            options(newVal) {
                if (!newVal || newVal.length === 0) {
                    if (this.isLocked) {
                        this.to(this.SELECT_LOCKED);
                    } else {
                        this.to(this.BEFORE_SELECT);
                    }

                    return
                }

                this.to(this.BEFORE_SELECT);

                this.options_ = newVal;

                this.setDefaultOption()
            },
            defaultOption(newVal) {
                if (!newVal) {
                    return
                }

                this.currentSelectedOption = newVal
            }
        },
        mixins: [
            EvAbstractComponent,
        ]
    }
</script>

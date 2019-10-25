<script>
    import EvAbstractComponent from "@/evalon-ui/mixin/EvAbstractComponent";
    import EvFiniteStatusMachineMixin from "@/evalon-ui/mixin/EvFSMixin";
    import EvDelay from "@/evalon-ui/utils/EvDelay";

    export default {
        name: "EvSearchMixin",
        created() {
            this.registry([
                {
                    name: this.BEFORE_SEARCH,

                    before: this.beforeSearch,
                },
                {
                    name: this.INPUTTING,
                },
                {
                    name: this.SEARCHING,

                    after: this.afterSearching,
                },
                {
                    name: this.SEARCH_ERROR, // 出现错误信息提示
                },
                {
                    name: this.EMPTY_OPTIONS, // 出现没有搜索结果提示
                },
                {
                    name: this.BEFORE_SELECT, // 出现下拉选择框
                },
                {
                    name: this.AFTER_SELECT,

                    after: this.afterSelect
                },
                {
                    name: this.SEARCH_LOCKED,
                },
            ])
        },
        mounted() {
            if (this.isLocked) {
                this.to(this.SEARCH_LOCKED)
            }
        },
        props: {
            // Style

            isLocked: {type: Boolean, default: false},

            // Data

            optionHeadKey: {type: String},

            optionSubheadKey: {type: String},

            placeholder: {type: String, default: "请输入..."},

            // Handlers

            optionsProvider: {type: Function},

            selectCallback: {type: Function}, // 在选择搜索项时调用

            changeCallback: {type: Function}, // 在输入完成时调用

            cleanCallback: {type: Function}, // 在清空搜索内容时调用

            // Messages

            emptyMessage: {type: String, default: "没有搜索结果"},

            errorMessage: {type: String, default: "搜索发生异常"}
        },
        data() {
            return {
                keyword: "",

                currentSelectedOption: undefined, // 当前选中的对象

                options: [], // 全部对象

                inputtingDelay: new EvDelay(240, () => {
                    this.to(this.SEARCHING)
                }),

                SEARCH_LOCKED: "SEARCH_LOCKED", // 锁定中

                BEFORE_SEARCH: "BEFORE_SEARCH", // 初始状态

                INPUTTING: "INPUTTING", // 输入中

                SEARCHING: "SEARCHING", // 调用API | 搜索中

                SEARCH_ERROR: "SEARCH_ERROR", // 调用API失败 | 服务器异常、超时

                EMPTY_OPTIONS: " EMPTY_OPTIONS", // 没有返回搜索结果

                BEFORE_SELECT: "BEFORE_SELECT", // 调用API成功

                AFTER_SELECT: "AFTER_SELECT" // 选择搜索项后
            }
        },
        computed: {
            showOptions() {
                return this.is(this.BEFORE_SELECT) ||
                    this.is(this.EMPTY_OPTIONS) ||
                    this.is(this.SEARCH_ERROR) ||
                    this.keepSearching
            },
            keepSearching() {
                return (this.is(this.INPUTTING) || this.is(this.SEARCHING)) && this.options.length !== 0
            },
            optionKeyword() {
                if (!this.currentSelectedOption) {
                    return undefined
                }

                return this.optionHeadKey ? this.currentSelectedOption[this.optionHeadKey] : this.currentSelectedOption;
            }
        },
        methods: {
            beforeSearch() {
                this.keyword = ""

                this.currentSelectedOption = undefined

                this.options = []
            },

            afterSearching() {
                if (!this.optionsProvider) {
                    this.to(this.EMPTY_OPTIONS)

                    return
                }

                this.optionsProvider(this.keyword).then(res => {
                    if (!this.responseChecker(res)) {
                        this.to(this.SEARCH_ERROR, res)
                    }

                    this.options = this.responseExtractor(res)

                    if (this.options.length === 0) {
                        this.to(this.EMPTY_OPTIONS)
                    } else {
                        this.to(this.BEFORE_SELECT);
                    }
                }).catch(err => {
                    this.to(this.SEARCH_ERROR, err)
                });
            },

            afterSelect(option) {
                this.currentSelectedOption = option

                this.keyword = this.optionKeyword

                this.selectCallback && this.selectCallback(option)
            },
        },
        watch: {
            keyword(newVal) {
                if (newVal === this.optionKeyword) {
                    return
                }

                if (this.isEmptyString(newVal)) {
                    this.to(this.BEFORE_SEARCH);

                    this.cleanCallback && this.cleanCallback()

                    return
                }

                this.to(this.INPUTTING)

                this.inputtingDelay.refresh() // keyword变化时重新刷新 delay
            },
            isLocked(newVal) {
                if (newVal) {
                    this.to(this.SEARCH_LOCKED)
                } else {
                    this.toPrevious()
                }
            }
        },
        mixins: [
            EvAbstractComponent
        ]
    }
</script>

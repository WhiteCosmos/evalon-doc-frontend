<script>
    import {camelWordsMatch, camelWordSplits} from "@/src/algorithm";

    export default {
        name: "EvCamelFilterMixin",
        created() {
            this.contentSplits = camelWordSplits(this.filterContent)
        },
        props: {
            filterContent: {type: String}, // title subtitle whatever

            filterKeyword: {type: String},

            defaultCamelMatch: { // default value when no filterKeyword is given
                type: Boolean,

                default: true
            }
        },
        data() {
            return {
                contentSplits: [], // split content you want search

                keywordSplits: [],
            }
        },
        computed: {
            isCamelMatch() {
                if (!this.filterKeyword) {
                    return this.defaultCamelMatch
                }

                let match = camelWordsMatch(this.contentSplits, this.keywordSplits);

                if (match) {
                    this.$emit('camel-match')
                }

                return match;
            },
            highlightContent() {
                let highlight = this.filterContent

                if (this.isCamelMatch) {

                    this.keywordSplits.forEach(k => {
                        highlight = highlight.replace(k, '<span class="highlight">' + k + '</span>')
                    })

                    return highlight
                }
            }
        },
        watch: {
            filterKeyword(newVal) {
                this.keywordSplits = camelWordSplits(newVal)
            }
        }
    }
</script>


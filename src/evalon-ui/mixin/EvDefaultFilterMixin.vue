<!-- Default filter using js includes method -->

<script>
    export default {
        name: "EvDefaultFilterMixin",
        props: {
            filterContent: "",

            filterKeyword: "",
        },
        computed: {
            isDefaultMatch() {
                if (!this.filterKeyword || !this.filterContent) {
                    return true
                }

                let flag = this.filterContent.includes(this.filterKeyword)

                if (flag) {
                    this.$emit('default-match')
                }

                return flag
            }
        },
    }
</script>

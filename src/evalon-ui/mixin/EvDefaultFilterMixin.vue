<!-- Default filter using js includes method -->

<script>
    export default {
        name: "EvDefaultFilterMixin",
        props: {
            filterContent: "",

            filterKeyword: ""
        },
        methods: {
            isDefaultMatch() {
                if (!this.filterKeyword || !this.filterContent) {
                    return true
                }

                return this.filterContent.includes(this.filterKeyword)
            }
        }
    }
</script>

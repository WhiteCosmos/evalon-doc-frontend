<script>
    export default {
        name: "ClassFieldMixin",
        created() {
            this.expand_ = this.expand
        },
        props: {
            javaField: {type: Object},

            indent: {type: Number, default: 0},

            layer: {type: Number, default: 0},

            isHover: {type: Boolean, default: false},

            isResponse: {type: Boolean, default: false},

            expand: {type: Boolean, default: false},
        },
        data() {
            return {
                hover_: false,

                expand_: false,
            }
        },
        computed: {
            fieldName() {
                return this.javaField.fieldName
            },
            fieldType() {
                return this.isResponse ? this.javaField.fieldName : this.javaField.fieldType
            },
            fieldComment() {
                return this.javaField.fieldCommentTitle
            },
            isRequiredField() {
                return this.javaField.isRequired
            },
            isContainerClass() {
                return this.javaField.fields.length !== 0
            },
            isListClass() {

            },
            isMapClass() {

            },
            isRecursiveClass() {
                return this.javaField.isRecursion
            },
            isCycleClass() {
                return this.javaField.isCycle
            },
            isEnumClass() {
                return this.javaField.fields.some((field) => {
                    return field.fieldType === "STRING"
                })
            },
            isContainerType() {
                return this.isContainer(this.javaField)
            },
            isStringType() {
                return [
                    "String",
                    "STRING",
                    "Character",
                    "char"
                ].includes(this.fieldType)
            },
            isNumberType() {
                return [
                    "Long",
                    "long",
                    "Integer",
                    "int",
                    "Short",
                    "short",
                    "Double",
                    "double",
                    "Float",
                    "float",
                    "BigDecimal"
                ].includes(this.fieldType)
            },
            isDateTimeType() {
                return [
                    "Date",
                    "LocalDateTime",
                    "LocalDate",
                    "LocalTime",
                    "Timestamp",
                ].includes(this.fieldType)
            },
            isBooleanType() {
                return [
                    "boolean",
                    "Boolean",
                ].includes(this.fieldType)
            },
            columnOnHoverClass() {
                return {
                    "column-on-hover": this.isHover
                }
            }
        },
        methods: {
            isContainer(javaField) {
                return javaField && javaField.fields && javaField.fields.length !== 0
            },
        },
        watch: {
            javaField() {
                this.expand_ = this.expand // reset expand
            },
            expand(newVal) {
                this.expand_ = newVal
            }
        }
    }
</script>

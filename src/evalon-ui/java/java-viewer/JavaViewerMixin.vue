<script>
    export default {
        name: "JavaViewerMixin",
        props: {
            classField: {type: Object},

            layer: {type: Number, default: 0}
        },
        computed: {
            fieldName() {
                return this.classField.fieldName
            },
            fieldType() {
                return this.classField.fieldType
            },

            isContainerClass() {
                return this.classField.childField.length !== 0
            },
            isListClass() {

            },
            isMapClass() {

            },
            isRecursiveClass() {
                return this.classField.isRecursion
            },
            isCycleClass() {
                return this.classField.isCycle
            },
            isEnumClass() {
                return this.classField.childField.some((field) => {
                    return field.fieldType === "STRING"
                })
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
            }

        },
        methods: {
            isContainer(javaField) {
                return javaField && javaField.fields && javaField.fields.length !== 0
            },
        }
    }
</script>


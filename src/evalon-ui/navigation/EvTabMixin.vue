<script>
    export default {
        name: "EvTabMixin",
        mounted() {
            this.$children.forEach(child => {
                if (!this.isEvPanel(child)) {
                    return
                }

                this.panels.push({
                    label: child.label,
                    panel: child
                });
            })

            this.setDefaultPanel()
        },
        props: {
            buttonAlign: {
                type: String, // left center right

                default: "left"
            },
            buttonPadding: {
                type: Number,

                default: 0
            },
            defaultPanel: {type: String}
        },
        data() {
            return {
                panels: [], // Vue Component

                currentLabel: undefined,

                currentPanel: undefined,
            }
        },
        computed: {
            buttonAlignClass() {
                let group = ["aaa"]

                switch (this.buttonAlign) {
                    case "left":
                        group.push("ev-row-align-left")
                        return
                    case "center":
                        group.push("ev-row-align-center")
                        return
                    case "right":
                        group.push("ev-row-align-right")
                        return
                }

                return group
            },
            buttonContainerStyles() {
                return {
                    'margin-left': this.buttonPadding + "px",

                    'margin-right': this.buttonPadding + "px",
                }
            }
        },
        methods: {
            isEvPanel(component) {
                return component.$options.name === "ev-panel"
            },
            setDefaultPanel() {
                let panel

                if (this.defaultPanel) {
                    panel = this.panels.find(p => {
                        return p.label === this.defaultPanel
                    })
                } else {
                    panel = this.panels[0];
                }

                this.currentLabel = panel.label

                this.currentPanel = panel.panel

                this.togglePanelVisible(panel.panel)
            },
            togglePanel(nextPanel) {
                let previousPanel = this.currentPanel

                this.togglePanelVisible(previousPanel)

                this.currentLabel = nextPanel.label

                this.currentPanel = nextPanel.panel

                this.togglePanelVisible(this.currentPanel)

                this.$emit('toggle-panel', this.currentLabel)
            },
            togglePanelVisible(panel) {
                panel.visible_ = !panel.visible_
            }
        },
        watch: {
            currentLabel(label) {
                this.panels.forEach(p => {
                    if (p.label === label) {
                        p.panel.visible_ = true
                    } else {
                        p.panel.visible_ = false
                    }
                })
            }
        }
    }
</script>

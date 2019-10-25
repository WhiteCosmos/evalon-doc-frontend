class EvDelay {
    delayId = 0

    delayTime = 200 // 毫秒

    delayCallback = () => {

    }

    constructor(delayTime, delayCallback) {
        this.delayTime = delayTime

        this.delayCallback = delayCallback
    }

    refresh() {
        if (this.delayId) {
            clearTimeout(this.delayId)

            this.delayId = 0
        }

        this.delayId = setTimeout(() => {
            this.delayCallback && this.delayCallback()
        }, this.delayTime);
    }

    stop() {
        clearTimeout(this.delayId)

        this.delayId = 0
    }
}

export default EvDelay

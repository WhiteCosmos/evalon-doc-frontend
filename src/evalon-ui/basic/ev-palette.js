export const EV_BLUE = "blue"

export const EV_RED = "red"

export const EV_GREEN = "green"

export const EV_YELLOW = "yellow"

export const choose_color = (color) => {
    let color_class = 'ev-' + color

    return {
        [color_class]: true
    }
}

export const choose_border_color = (color) => {
    let border_color_class = 'border-color'
}

export const choose_border_color_and_color = (color) => {
    
}

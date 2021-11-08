let Stored_Dice_5 = 0
let Dice_5 = 0
let Stored_Dice_1 = 0
let Dice_1 = 0
let Stored_Dice_3 = 0
let Dice_3 = 0
let Stored_Dice_2 = 0
let Dice_2 = 0
let Stored_Dice_4 = 0
let Dice_4 = 0
let Shake_Count = 0
input.onPinPressed(TouchPin.P0, function () {
    if (Stored_Dice_5 > 0) {
        Stored_Dice_5 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        Stored_Dice_5 = Dice_5
    }
})
input.onButtonPressed(Button.A, function () {
    if (Stored_Dice_1 > 0) {
        Stored_Dice_1 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        Stored_Dice_1 = Dice_1
    }
})
input.onPinPressed(TouchPin.P2, function () {
    if (Stored_Dice_3 > 0) {
        Stored_Dice_3 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        Stored_Dice_3 = Dice_3
    }
})
input.onButtonPressed(Button.B, function () {
    if (Stored_Dice_2 > 0) {
        Stored_Dice_2 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        Stored_Dice_2 = Dice_2
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (Stored_Dice_4 > 0) {
        Stored_Dice_4 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        Stored_Dice_4 = Dice_4
    }
})
input.onGesture(Gesture.Shake, function () {
    Shake_Count = Shake_Count + 1
    Dice_1 = randint(1, 6)
    Dice_2 = randint(1, 6)
    Dice_3 = randint(1, 6)
    Dice_4 = randint(1, 6)
    Dice_5 = randint(1, 6)
})
basic.forever(function () {
    if (Shake_Count > 2 || Stored_Dice_1 != 0 && (Stored_Dice_2 != 0 && (Stored_Dice_3 != 0 && (Stored_Dice_4 != 0 && Stored_Dice_5 != 0)))) {
        Shake_Count = 0
        basic.showString("Shake")
    } else {
        if (input.buttonIsPressed(Button.AB)) {
            if (Stored_Dice_1 > 0) {
                basic.showString("DS1-")
                basic.showNumber(Stored_Dice_1)
            } else {
                basic.showString("D1-")
                basic.showIcon(IconNames.No)
            }
            if (Stored_Dice_2 > 0) {
                basic.showString("DS2-")
                basic.showNumber(0)
            } else {
                basic.showString("D2-")
                basic.showIcon(IconNames.No)
            }
            if (Stored_Dice_3 > 0) {
                basic.showString("DS3-")
                basic.showNumber(Stored_Dice_3)
            } else {
                basic.showString("D3-")
                basic.showIcon(IconNames.No)
            }
            if (Stored_Dice_4 > 0) {
                basic.showString("DS4-")
                basic.showNumber(Stored_Dice_4)
            } else {
                basic.showString("D4-")
                basic.showIcon(IconNames.No)
            }
            if (Stored_Dice_5 > 0) {
                basic.showString("DS5-")
                basic.showNumber(Stored_Dice_5)
            } else {
                basic.showString("D5-")
                basic.showIcon(IconNames.No)
            }
        } else {
            if (Dice_1 == 0) {
                basic.showString("Shake")
            } else {
                if (Stored_Dice_1 > 0) {
                    basic.showString("DS1-")
                    basic.showNumber(Stored_Dice_1)
                } else {
                    basic.showString("DS1-")
                    basic.showNumber(Dice_1)
                }
                if (Stored_Dice_2 > 0) {
                    basic.showString("DS2-")
                    basic.showNumber(Stored_Dice_2)
                } else {
                    basic.showString("DS2-")
                    basic.showNumber(Dice_2)
                }
                if (Stored_Dice_3 > 0) {
                    basic.showString("DS3-")
                    basic.showNumber(Stored_Dice_3)
                } else {
                    basic.showString("DS3-")
                    basic.showNumber(Dice_3)
                }
                if (Stored_Dice_4 > 0) {
                    basic.showString("DS4-")
                    basic.showNumber(Stored_Dice_4)
                } else {
                    basic.showString("DS4-")
                    basic.showNumber(Dice_4)
                }
                if (Stored_Dice_5 > 0) {
                    basic.showString("DS5-")
                    basic.showNumber(Stored_Dice_5)
                } else {
                    basic.showString("DS5-")
                    basic.showNumber(Dice_5)
                }
            }
        }
    }
})

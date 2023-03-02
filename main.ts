let Fegyver = 0
input.onGesture(Gesture.Shake, function () {
    Fegyver = randint(0, 2)
    if (Fegyver == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (Fegyver == 1) {
        basic.showIcon(IconNames.Square)
    } else if (Fegyver == 2) {
        basic.showIcon(IconNames.Scissors)
    }
})

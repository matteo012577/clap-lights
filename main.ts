input.onSound(DetectedSound.Loud, function () {
    lichtaan = !(lichtaan)
    if (lichtaan) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
})
let lichtaan = false
input.setSoundThreshold(SoundThreshold.Loud, 150)

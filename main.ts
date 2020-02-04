sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    let pizza: Sprite = null
    info.changeScoreBy(1)
    pizza.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
    info.startCountdown(10)
})
scene.setBackgroundColor(7)

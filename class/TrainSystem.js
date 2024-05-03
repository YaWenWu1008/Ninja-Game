// 訓練系統(體術、手裏劍、忍術)
// 體術 : bodyMagic、手裏劍 Shuriken、忍術 magic
class TrainSystem {
    constructor () {
        // 制定分數
        this.abilityScore = {
            bodyMagic: 15,
            Shuriken: 10,
            magic: 20
        }
    }

    // 體術訓練
    bodyMagicTrain(player) {
        player.ability += this.abilityScore.bodyMagic
    }
    // 手裏劍訓練
    ShurikenTrain(player) {
        player.ability += this.abilityScore.Shuriken
    }
    // 忍術訓練
    magicTrain(player) {
        player.ability += this.abilityScore.magic
    }
}



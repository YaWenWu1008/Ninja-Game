// 任務類別
class MissionSystem{
    constructor(){
        this.luckyScore = {
            found: 10,
            convoy: 20,
            collect: 30
        }
    }

    // 遺失物
    foundMission(player) {
        player.lucky += this.luckyScore.found
    }
    // 護送任務
    convoyMission(player) {
        player.lucky += this.luckyScore.convoy
    }
    // 情報蒐集
    collectMission(player) {
        player.lucky += this.luckyScore.collect
    }
}
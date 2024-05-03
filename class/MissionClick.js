class MissionClick {
    constructor(missionSystem, player) {
        this.missionSystem = missionSystem
        this.player = player
        this.foundBtn = document.querySelector('.foundBtn')
        this.convoyBtn = document.querySelector('.convoyBtn')
        this.collectBtn = document.querySelector('.collectBtn')
        this.foundArea = document.querySelector('.missionFoundArea')
        this.missionArea = document.querySelector('.missionArea')
    }
    //點擊事件
    clickEvent() {
        this.foundBtn.addEventListener('click', () => {
            // this.missionSystem.foundMission(this.player)
            // this.player.showInfo()
            this.foundArea.classList.remove('hidden')
            this.missionArea.classList.add('hidden')
        })
        this.convoyBtn.addEventListener('click', () => {
            this.missionSystem.convoyMission(this.player)
            this.player.showInfo()
        })
        this.collectBtn.addEventListener('click', () => {
            this.missionSystem.collectMission(this.player)
            this.player.showInfo()
        })
    }
}

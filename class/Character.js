// 人物物件
class Character {
    constructor(hp, ability, badge, lucky) {
        this.hp = hp
        this.ability = ability
        this.badge = badge
        this.lucky = lucky
    }
    // 使用者資訊x
    showInfo() {
        // 獲取dom顯示在header
        const hp = document.querySelector('.hp')
        const ability = document.querySelector('.ability')
        const badge = document.querySelector('.badge')
        const lucky = document.querySelector('.lucky')
        hp.textContent = `血量:${this.hp}`
        ability.textContent = `能力值:${this.ability}`
        badge.textContent = `徽章:${this.badge}`
        lucky.textContent = `幸運值:${this.lucky}`
    }
    // 每分鐘增加 HP
    increaseHpPerMinute(amount) {
        setInterval(() => {
            this.hp += amount
            this.showInfo() // 更新顯示
        }, 60000) // 每分鐘執行一次
    }
}

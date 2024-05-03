class Boss {
    constructor(ability) {
        this.ability = ability
    }
}

class ChallengeBtn {
    constructor(container, numberOfBtn, startAbility, increment) {
        this.container = document.getElementById(container)
        this.numberOfBtn = numberOfBtn
        this.startAbility = startAbility
        this.increment = increment
    }
    createButton(ability) {
        const button = document.createElement('button')
        button.className = 'p-2 bg-[#78a471] rounded-md challengeBossBtn'
        button.setAttribute('data-ability', ability)
        button.innerHTML = `
                <i class="fa-solid fa-worm text-amber-800 fa-3x"></i>
            `
        return button
    }

    showButton() {
        for (let i = 1; i < this.numberOfBtn; i++) {
            const ability = this.startAbility + i * this.increment
            const button = this.createButton(ability)
            this.container.appendChild(button)
        }
    }
}

class Level {
    constructor(player) {
        this.player = player
        this.challengeBossBtns = document.querySelectorAll('.challengeBossBtn')
    }

    getBadge() {
        this.player.badge += 1
        this.player.ability += 50
        this.player.hp -= 50
    }

    // 挑戰成功條件
    isChallengeSuccess(bossAbility) {
        const luckyService = bossAbility - this.player.lucky
        console.log(this.player.ability)
        console.log(luckyService)
        // 玩家能力 > boss 能力 && 血量不歸零
        return this.player.ability > luckyService && this.player.hp > 0
    }

    bindEvents() {
        this.challengeBossBtns.forEach((button) => {
            button.addEventListener('click', () => {
                const bossAbility = parseInt(button.dataset.ability)
                const boss = new Boss(bossAbility)
                console.log(boss)

                if (this.player.hp > 0) {
                    if (this.isChallengeSuccess(bossAbility)) {
                        console.log(bossAbility)
                        this.getBadge()
                        this.player.showInfo()
                        Swal.fire({
                            title: '挑戰成功!',
                            text: '獲得忍者徽章1枚',
                            imageUrl: './imgae/challege.gif',
                            imageWidth: 400,
                            imageHeight: 300,
                        })
                        button.disabled = true
                    } else {
                        this.player.hp -= 50
                        this.player.showInfo()
                        Swal.fire({
                            title: '挑戰失敗!',
                            text: '再多修練!',
                            imageUrl: './imgae/loose.gif',
                            imageWidth: 400,
                            imageHeight: 300,
                        })
                    }
                } else {
                    Swal.fire('你沒有查克拉了!', '', 'error')
                }
            })
        })
    }

    challengeClick() {
        this.bindEvents()
    }
}

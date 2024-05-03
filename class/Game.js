// 遊戲物件
class Game{
    constructor(speed,time,player){
        this.speed = speed
        this.time = time
        this.player = player
        this.btnStart = document.getElementById('startGameBtn');
        this.gameContainer = document.getElementById('game-container');
        this.textScore = document.getElementById('text-score');
        this.textTime = document.getElementById('text-time');
        this.countdown = time; 
        this.btnStart.addEventListener('click', this.startGame.bind(this)); 
    }
    // 創建掉下來的元素
    createElement(){
        const gameWidth = this.gameContainer.offsetWidth;
        const cat = document.createElement('img');
        cat.src = '../imgae/cat.gif';
        cat.classList.add('cat');
        const random = Math.floor(Math.random() * 3);
        const lineLeft = Math.floor(gameWidth * (0.17 + (random * 0.33)));
        cat.style.left = lineLeft + 'px';
        this.gameContainer.appendChild(cat);

        cat.animate([
            { top: 0 },
            { top: this.gameContainer.offsetHeight + 'px' }
        ], {
            duration: this.speed,
            easing: 'linear',
        });

        cat.addEventListener('click', () => {
            cat.remove();
            this.score++;
            this.textScore.textContent = this.score;
        });
    }
    // 開始遊戲
    startGame(){
        this.btnStart.classList.add('hidden')
        this.score = 0;
        this.countdown = this.time
        this.textScore.textContent = this.score;
        this.textTime.textContent = this.countdown;
        const timer = setInterval(() => {
                    this.countdown--;
                    this.textTime.textContent = this.countdown;
                    this.createElement();
                    if (this.countdown === 0) {
                        clearInterval(timer);
                        this.gameContainer.innerHTML = '';
                        if (this.score >= 15) {
                            Swal.fire({ 
                                icon: 'success',
                                title: '任務成功!',
                                text: `你得了${this.score}分`,
                                showCancelButton: true,  
                                confirmButtonText: '再玩一次',  
                                cancelButtonText: '退出', 
                            }).then((result) => {
                        if (result.isConfirmed) {
                            this.startGame();
                        }
                        });
                            this.player.lucky += 10;
                            this.player.showInfo()
                        } else {
                            Swal.fire({
                                icon: 'info',
                                title: '任務失敗!',
                                text: `你得了${this.score}分`,
                                showCancelButton: true,
                                confirmButtonText: '再玩一次',
                                cancelButtonText: '退出',
                            }).then((result) => {       
                                if (result.isConfirmed) {
                                this.startGame();
                            }
                        });
                        }
                    }
                }, 1000);
    }
}
class UIController {
    constructor() {
        this.missionBtn = document.querySelector('.missionBtn');
        this.challengeBtn = document.querySelector('.challengeBtn');
        this.missionArea = document.querySelector('.missionArea');
        this.trainArea = document.querySelector('.trainArea');
        this.challengeArea = document.querySelector('.challengeArea');
        this.imgDiv = document.querySelector('#teacher');
        this.menu = document.querySelector('.menu');
        this.main = document.querySelector('.main');
        this.backBtn = document.querySelector('.backBtn');
        this.trainBtn = document.querySelector('.scoreBtn') 
        this.missionFoundArea = document.querySelector('.missionFoundArea')
    }
    // 修練中心點擊
    trainAreaClick(){
        this.trainBtn.addEventListener('click',()=>{
            this.showTrainArea()
        })
    }

    // 任務部點擊
    missionAreaClick() {
        this.missionBtn.addEventListener('click', () => {
            this.showMissionArea();
        });
    }

    // 挑戰點擊
    clickChallenge() {
        this.challengeBtn.addEventListener('click', () => {
            this.showChallengeArea();
        });
    }
    // 點擊返回
    clickBackBtn(){
        this.backBtn.addEventListener('click',()=>{
            this.menu.classList.remove('hidden')
            this.imgDiv.classList.remove('hidden')
            this.main.classList.add('hidden')
            this.missionFoundArea.classList.add('hidden')
        })
    }

    // 顯示修練中心
    showTrainArea(){
        this.main.classList.remove('hidden');
        this.trainArea.classList.remove('hidden');
        this.backBtn.classList.remove('hidden');
        this.imgDiv.classList.add('hidden');
        this.menu.classList.add('hidden');
        this.missionArea.classList.add('hidden');
        this.challengeArea.classList.add('hidden');
        this.missionFoundArea.classList.add('hidden')
        
    }

    // 顯示任務區域
    showMissionArea() {
        this.main.classList.remove('hidden');
        this.missionArea.classList.remove('hidden');
        this.backBtn.classList.remove('hidden');
        this.imgDiv.classList.add('hidden');
        this.menu.classList.add('hidden');
        this.trainArea.classList.add('hidden');
        this.challengeArea.classList.add('hidden');
        this.missionFoundArea.classList.add('hidden')
        
    }

    // 顯示挑戰區域
    showChallengeArea() {
        this.main.classList.remove('hidden');
        this.challengeArea.classList.remove('hidden');
        this.backBtn.classList.remove('hidden');
        this.imgDiv.classList.add('hidden');
        this.menu.classList.add('hidden');
        this.trainArea.classList.add('hidden');
        this.missionArea.classList.add('hidden');
        this.missionFoundArea.classList.add('hidden')
    }
}
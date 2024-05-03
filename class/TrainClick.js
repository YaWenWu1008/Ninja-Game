class TrainClick{
    constructor(trainSystem,player){
        this.trainSystem = trainSystem
        this.player = player
        // 修練dom
        this.bodyMagicTrainActive = document.querySelector('.bodyMagicTrainActive')
        this.ShurikenTrainActive = document.querySelector('.ShurikenTrainActive')
        this.MagicTrainActive = document.querySelector('.MagicTrainActive')
    }
    // 點擊事件
    clickEvent(){
        this.bodyMagicTrainActive.addEventListener('click',()=>{
            this.trainSystem.bodyMagicTrain(this.player)
            this.player.showInfo()
        })
        this.ShurikenTrainActive.addEventListener('click',()=>{
            this.trainSystem.ShurikenTrain(this.player)
            this.player.showInfo()
        })
        this.MagicTrainActive.addEventListener('click',()=>{
            this.trainSystem.magicTrain(this.player)
            this.player.showInfo()
        })
    }
}

class TrainClickDom{
    constructor(){
        // 三個btn
        this.bodyMagicTrainBtn = document.querySelector('.bodyMagicTrainBtn')
        this.ShurikenTrainBtn = document.querySelector('.ShurikenTrainBtn')
        this.magicBtn = document.querySelector('.magicBtn')
        // 圖片
        this.coverImg = document.querySelector('#coverImg')
        this.bodyMagicImg = document.querySelector('#bodyMagicImg')
        this.ShurikenImg = document.querySelector('#ShurikenImg')
        this.MagicImg = document.querySelector('#MagicImg')
    }

    setActiveButton(activeBtn){
        this.bodyMagicTrainBtn.classList.remove('active');
        this.ShurikenTrainBtn.classList.remove('active');
        this.magicBtn.classList.remove('active');
        activeBtn.classList.add('active');
    }
    setHiddenImg(activeImg) {
        this.bodyMagicImg.classList.add('hidden');
        this.ShurikenImg.classList.add('hidden');
        this.MagicImg.classList.add('hidden');
        this.coverImg.classList.add('hidden'); 
        activeImg.classList.remove('hidden');
    }
    // 點擊事件
    clickEvent(){
        const self = this
        this.bodyMagicTrainBtn.addEventListener('click',function (){
            self.setHiddenImg(self.bodyMagicImg);
            self.setActiveButton(self.bodyMagicTrainBtn);
        })
        this.ShurikenTrainBtn.addEventListener('click',function (){
            self.setHiddenImg(self.ShurikenImg);
            self.setActiveButton(self.ShurikenTrainBtn);
        })
        this.magicBtn.addEventListener('click',function (){
            self.setHiddenImg(self.MagicImg);
            self.setActiveButton(self.magicBtn);
        })
    }
}
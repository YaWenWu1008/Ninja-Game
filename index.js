// 人物實例(初始)
const player = new Character(1000, 0, 0,0)
// 創建按鈕實例，player使用裡面創建的腳色
const startButton = new Button('startBtn', 'teacher', player);

// 建立挑戰按鈕(父元素,數量,初始值,進化值)
const challegeBtn = new ChallengeBtn('levelArea',10,500,100)
challegeBtn.showButton()
// 修練
const trainSystem = new TrainSystem()
const trainClickEvent = new TrainClick(trainSystem, player); 
trainClickEvent.clickEvent()
const trainClickDOM = new TrainClickDom()
trainClickDOM.clickEvent()

// 任務處理
const missionSystem = new MissionSystem()
const missionClickEvent = new MissionClick(missionSystem,player)
missionClickEvent.clickEvent()

// 挑戰
const level = new Level(player) 
level.challengeClick()

// 創建 UIController 實例
const uiController = new UIController(); 
// 綁定點擊修練中心事件
uiController.trainAreaClick()

// 綁定任務部點擊事件
uiController.missionAreaClick();

// 綁定挑戰點擊事件
uiController.clickChallenge();

// 綁定點擊返回
uiController.clickBackBtn()
// 遊戲
const game = new Game(3000,20,player)
console.log(game)
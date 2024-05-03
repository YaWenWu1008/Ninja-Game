// 定義按鈕物件
class Button {
    constructor (elementId, imageId, player) {
        this.button = document.getElementById(elementId);
        this.image = document.getElementById(imageId);
        this.player = player
        // 綁定點擊事件
        this.button.addEventListener('click', () => this.hide());
    }

    // 隱藏按鈕
    hide() {
        this.button.classList.add('hidden');
        this.image.classList.remove('hidden');
        this.showDialog()
    }
    // 對話框
    showDialog() {
        Swal.fire({
            title: "安安你好，要開啟你的忍者之路嗎",
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: "好呀!",
            denyButtonText: `我不要!`
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: '請輸入你的名字',
                    input: 'text',
                    inputPlaceholder: '輸入你的名字',
                    showCancelButton: true,
                    confirmButtonText: '確定',
                    cancelButtonText: '取消',
                    inputValidator: (value) => {
                        if (!value) {
                            return '名字不能為空!';
                        }
                    }
                }).then((result) => {
                    if (result.isConfirmed) {
                        const name = result.value;
                        sessionStorage.setItem('UserName', result.value)
                        Swal.fire(`你好，${name}！`, '', 'success');
                        const userName = document.querySelector('.userName')
                        userName.textContent = `名字 ${name}`
                        // 每分鐘增加10hp
                        player.increaseHpPerMinute(10);

                        // 顯示角色資訊
                        this.player.showInfo()
                        // 顯示menu
                        const menu = document.querySelector('.menu')
                        menu.classList.remove('hidden')
                    }
                });
            } else if (result.isDenied) {
                Swal.fire("滾!", "給我變青蛙", "error");
                setInterval(() => {
                    location.reload()
                }, 2000)
            }
        });
    }
}
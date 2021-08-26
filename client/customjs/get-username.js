AFRAME.registerComponent('get-username', {
  init: function () {
    //ボタンのインスタンス取得
    const button = document.getElementById('namebutton');
    console.log(button);
    //クリックイベント
    button.addEventListener('click', function () {
      /* console.log(value); */
      //入力された内容取得
      const username = document.getElementById('username').value;
      //ネットワークのついたタグのインスタンス取得
      const player = document.getElementById('player');
      console.log(player);
      //インスタンス内部のa-textインスタンスを取得（attachTemplateToLocalをtrueにすることでネットワークのインスタンス内部にテンプレートのインスタンスが格納される）
      const myNametag = player.querySelector('.nametag');
      myNametag.setAttribute('text', 'value', username);
    });
  },
});

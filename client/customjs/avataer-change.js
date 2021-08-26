AFRAME.registerComponent('avatar-change', {
  init: function () {
    //ボタンのインスタンス取得
    const button = document.getElementById('changebutton');
    console.log(button);
    //ネットワークのついたタグのインスタンス取得
    const player = document.getElementById('player');
    console.log(NAF.schemas.schemaDict);
    //クリックイベント
    button.addEventListener('click', function () {
      console.log(NAF.entities.entities);
      //入力された内容取得
      const modelclass = './figurehead-of-hms-prince-of-wales-3d-model/scene.gltf';
      const robo = './robot/Robot_01.gltf';
      //インスタンス内部のa-textインスタンスを取得（attachTemplateToLocalをtrueにすることでネットワークのインスタンス内部にテンプレートのインスタンスが格納される）
      const useravatar = player.querySelector('.avatarmodel');
      useravatar.setAttribute('gltf-model', modelclass);
      useravatar.setAttribute('scale', '0.5 0.5 0.5');
      useravatar.setAttribute('position', '-0.5 0 1');
      useravatar.setAttribute('rotation', '0 120 0');
    });
    //クリックイベント
    button.addEventListener('click', function () {
      console.log(NAF.entities.entities);
      //入力された内容取得
      const modelclass = './figurehead-of-hms-prince-of-wales-3d-model/scene.gltf';
      const robo = './robot/Robot_01.gltf';
      //インスタンス内部のa-textインスタンスを取得（attachTemplateToLocalをtrueにすることでネットワークのインスタンス内部にテンプレートのインスタンスが格納される）
      const useravatar = player.querySelector('.avatarmodel');
      useravatar.setAttribute('gltf-model', modelclass);
      useravatar.setAttribute('scale', '0.5 0.5 0.5');
      useravatar.setAttribute('position', '-0.5 0 1');
      useravatar.setAttribute('rotation', '0 120 0');
    });
  },
});

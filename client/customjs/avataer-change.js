AFRAME.registerComponent('avatar-change', {
  schema: {
    toggle: { type: 'number', default: 0 },
    //クリックイベント用ボタンのid
    Buttonid: { type: 'string' },
    //テンプレートを呼び出したnetworkedentityのclass
    player: { type: 'string' },
    //audiodistancechangeをコンポーネントとして持つ3Dモデルのentityのclass
    avatar: { type: 'string' },
    bl1: { type: 'string' },
    bl2: { type: 'string' },
    bl3: { type: 'string' },
    robo: { type: 'string' },
  },
  init: function () {
    //ボタンのインスタンス取得
    const button = document.getElementById(this.data.Buttonid);
    const blavatar1 = document.getElementById(this.data.bl1);
    const blavatar2 = document.getElementById(this.data.bl2);
    const blavatar3 = document.getElementById(this.data.bl3);
    const robo = document.getElementById(this.data.robo);
    console.log(document.querySelector('.' + this.data.avatar).components);
    console.log(button);
    console.log(blavatar1);
    console.log(blavatar2);
    console.log(blavatar3);
    //ネットワークのついたタグのインスタンス取得
    const player = document.getElementById(this.data.player);
    const useravatar = player.querySelector('.' + this.data.avatar);
    console.log(NAF.schemas.schemaDict);
    //クリックイベント
    button.addEventListener('click', function () {
      console.log(NAF.entities.entities);
      //入力された内容取得
      const modelclass = './figurehead-of-hms-prince-of-wales-3d-model/scene.gltf';
      useravatar.setAttribute('gltf-model', modelclass);
      useravatar.setAttribute('scale', '0.5 0.5 0.5');
      useravatar.setAttribute('position', '-0.5 0 1');
      useravatar.setAttribute('rotation', '0 120 0');
    });
    //クリックイベント
    robo.addEventListener('click', function () {
      const modelclass = './robot/Robot_01.gltf';
      useravatar.setAttribute('gltf-model', modelclass);
      useravatar.setAttribute('scale', '0.1 0.1 0.1');
      useravatar.setAttribute('position', '0 -1.6 1');
      useravatar.setAttribute('rotation', '0 180 0');
    });
    blavatar1.addEventListener('click', function () {
      //入力された内容取得
      const modelclass = './blockvrockmodel/teat_Avatar.glb';
      useravatar.setAttribute('gltf-model', modelclass);
      useravatar.setAttribute('scale', '0.75 0.75 0.75');
      useravatar.setAttribute('position', '0 -2 1');
      /* useravatar.setAttribute('rotation', '0 120 0'); */
    });
    blavatar2.addEventListener('click', function () {
      //入力された内容取得
      const modelclass = './blockvrockmodel/teat_Avatar_ver2.glb';
      useravatar.setAttribute('gltf-model', modelclass);
      useravatar.setAttribute('scale', '0.75 0.75 0.75');
      useravatar.setAttribute('position', '0 -2 1');
      /* useravatar.setAttribute('rotation', '0 120 0'); */
    });
    blavatar3.addEventListener('click', function () {
      //入力された内容取得
      const modelclass = './blockvrockmodel/teat_Avatar_ver3.glb';
      useravatar.setAttribute('gltf-model', modelclass);
      useravatar.setAttribute('scale', '0.75 0.75 0.75');
      useravatar.setAttribute('position', '0 -2 1');
      /* useravatar.setAttribute('rotation', '0 120 0'); */
    });
  },
});

AFRAME.registerComponent('audiodistancechange', {
  schema: {
    toggle: { type: 'number', default: 0 },
    //クリックイベント用ボタンのid
    onButtonid: { type: 'string' },
    //テンプレートを呼び出したnetworkedentityのid
    player: { type: 'string' },
    //audiodistancechangeをコンポーネントとして持つ3Dモデルのentityのid
    avatar: { type: 'string' },
  },
  init: function () {
    //ボタンのインスタンス取得
    const button = document.getElementById(this.data.onButtonid);
    /* const audio = this.el; */
    const player = document.getElementById(this.data.player);
    const avatar = player.querySelector('.' + this.data.avatar);
    console.log(player);
    console.log(button);
    console.log('.' + this.data.avatar);
    console.log(player.querySelector('.avatarmodel'));
    //クリックイベント(クリックイベントはトグル操作のみ)
    button.addEventListener('click', function () {
      avatar.setAttribute('audiodistancechange', 'toggle', '1');
    });
  },
  update: function () {
    let comp = '';
    console.log(this.el);
    //トグル操作が行われたクライアントのID取得
    NAF.utils.getNetworkedEntity(this.el).then((el) => {
      const audio = document.getElementById('naf-' + el.components.networked.nextData['networkId']);
      console.log(el.components.networked.nextData['networkId']);
      comp = audio.querySelector('.' + this.data.avatar).components.audiodistancechange.data.toggle;
      console.log(comp);
      //外套のIDのモデルのdistanceModelを変更
      if (comp == 1) {
        //networked-audio-source→ネットワークオーディオの設定、distasModel,liner→音声モデルを線形に設定することで距離減衰をなくす、デフォルトはinverse
        audio.setAttribute('networked-audio-source', 'distanceModel', 'linear');
        //console.log(audio.getAttribute('networked-audio-source'));
      } else {
        audio.setAttribute('networked-audio-source', 'distanceModel', 'inverse');
        //console.log(audio.getAttribute('networked-audio-source'));
      }
    });
    //トグル操作が行われたクライアントが自身だった場合、ローカル上のdistanceモデルを変更
    const localaudio = document.querySelector('.' + this.data.avatar).components.audiodistancechange.data.toggle;
    if (localaudio == 1) {
      //networked-audio-source→ネットワークオーディオの設定、distasModel,liner→音声モデルを線形に設定することで距離減衰をなくす、デフォルトはinverse
      player.setAttribute('networked-audio-source', 'distanceModel', 'linear');
      console.log(player.getAttribute('networked-audio-source'));
    } else {
      //トグルが0の場合inverseに戻す
      player.setAttribute('networked-audio-source', 'distanceModel', 'inverse');
      console.log(player.getAttribute('networked-audio-source'));
    }
  },
});
AFRAME.registerComponent('audiodistancereset', {
  schema: {
    offButtonid: { type: 'string' },
    player: { type: 'string' },
    avatar: { type: 'string' },
  },
  init: function () {
    //ボタンのインスタンス取得
    const button = document.getElementById(this.data.offButtonid);
    const player = document.getElementById(this.data.player);
    const avatar = player.querySelector('.' + this.data.avatar);
    console.log(button);
    //クリックイベント(トグル操作)
    button.addEventListener('click', function () {
      avatar.setAttribute('audiodistancechange', 'toggle', '0');
    });
  },
});

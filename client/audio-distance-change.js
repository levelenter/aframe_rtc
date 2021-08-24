AFRAME.registerComponent('audiodistancechange', {
  schema: {
    toggle: { type: 'number', default: 0 },
  },
  init: function () {
    //ボタンのインスタンス取得
    const button = document.getElementById('audio-change');
    /* const audio = this.el; */
    const player = document.getElementById('player');
    const avater = document.querySelector('.avatar');
    console.log(player);
    console.log(button);
    //クリックイベント
    button.addEventListener('click', function () {
      if (player.querySelector('.avatarmodel').components.audiodistancechange.data.toggle == 0) {
        player.querySelector('.avatarmodel').setAttribute('audiodistancechange', 'toggle', '1');
        console.log(player);
      } else {
        /* player.setAttribute('audio-distance-change', 'toggle', '0');
        console.log(player);
        player.setAttribute('networked-audio-source', 'distanceModel', 'inverse');
        console.log(player.getAttribute('networked-audio-source')); */
      }
    });
  },
  update: function () {
    let comp = '';
    console.log(this.el);
    NAF.utils.getNetworkedEntity(this.el).then((el) => {
      const audio = document.getElementById('naf-' + el.components.networked.nextData['networkId']);
      console.log(el.components.networked.nextData['networkId']);
      comp = audio.querySelector('.avatarmodel').components.audiodistancechange.data.toggle;
      console.log(comp);
      if (comp == 1) {
        audio.setAttribute('networked-audio-source', 'distanceModel', 'linear');
        console.log(audio.getAttribute('networked-audio-source'));
      } else {
        audio.setAttribute('networked-audio-source', 'distanceModel', 'inverse');
        console.log(audio.getAttribute('networked-audio-source'));
      }
    });
    const localaudio = document.querySelector('.avatarmodel').components.audiodistancechange.data.toggle;
    if (localaudio == 1) {
      //networked-audio-source→ネットワークオーディオの設定、distasModel,liner→音声モデルを線形に設定することで距離減衰をなくす、デフォルトはinverse
      player.setAttribute('networked-audio-source', 'distanceModel', 'linear');
      console.log(player.getAttribute('networked-audio-source'));
    } else {
      //networked-audio-source→ネットワークオーディオの設定、distasModel,liner→音声モデルを線形に設定することで距離減衰をなくす、デフォルトはinverse
      player.setAttribute('networked-audio-source', 'distanceModel', 'inverse');
      console.log(player.getAttribute('networked-audio-source'));
    }
  },
});
AFRAME.registerComponent('audiodistancereset', {
  init: function () {
    //ボタンのインスタンス取得
    const button = document.getElementById('audio-inverse');
    const player = document.getElementById('player');
    const toggle = player.querySelector('.avatarmodel');
    const audio = document.querySelector('.avatarmodel');
    //console.log(button);
    button.addEventListener('click', function () {
      console.log(toggle);
      audio.setAttribute('audiodistancechange', 'toggle', '0');
    });
  },
});

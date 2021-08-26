AFRAME.registerComponent('autoplay', {
  init: function () {
    const v = document.querySelector('#astronaut');
    v.play();
  },
});

AFRAME.registerComponent('clickplay', {
  init: function () {
    this.el.addEventListener('click', async function (evt) {
      const v = document.querySelector('#sea');
      v.play();
    });
  },
});

AFRAME.registerComponent('muteplay', {
  schema: {
    toggle: { type: 'number' },
  },
  init: function () {
    //ボタンのインスタンス取得
    const button = document.getElementById('play-button');
    const videomodel = document.querySelector('.avatarmodel');

    /* console.log(videomodel.components.muteplay.data.toggle); */
    button.addEventListener('click', function () {
      videomodel.setAttribute('muteplay', 'toggle', '1');
      //これを実装したい…　document.getElementById("naf-cu6xj8n").querySelector(".videomodel").setAttribute('muteplay', 'toggle', '1');
    });
  },
  update: function () {
    const v = document.querySelector('.waterfallvideo');
    let comp = '';
    console.log(this.el);
    NAF.utils.getNetworkedEntity(this.el).then((el) => {
      const videomodel = document.getElementById('naf-' + el.components.networked.nextData['networkId']);
      comp = videomodel.querySelector('.avatarmodel').components.muteplay.data.toggle;
      if (comp == 1) {
        v.play();
        v.muted = false; // ミュート無効
        /* v.currentTime = 0;  */ // 開始秒数を戻す
      } else {
        v.pause();
        v.muted = true; // ミュート有効
        /* v.currentTime = 0;  */ // 開始秒数を戻す
      }
    });

    const localmodel = document.querySelector('.avatarmodel').components.muteplay.data.toggle;
    if (localmodel == 1) {
      v.play();
      v.muted = false; // ミュート無効
      /* v.currentTime = 0;  */ // 開始秒数を戻す
    } else {
      v.pause();
      v.muted = true; // ミュート有効
      /* v.currentTime = 0;  */ // 開始秒数を戻す
    }
  },
});

AFRAME.registerComponent('mutestop', {
  init: function () {
    //ボタンのインスタンス取得
    const button = document.getElementById('stop-button');
    const player = document.getElementById('player');
    const toggle = player.querySelector('.avatarmodel');
    const videomodel = document.querySelector('.avatarmodel');
    //console.log(button);
    button.addEventListener('click', function () {
      console.log(toggle);
      videomodel.setAttribute('muteplay', 'toggle', '0');
    });
  },
});

AFRAME.registerComponent('testplay', {
  schema: {
    toggle: { type: 'number' },
  },
  init: function () {
    const player = document.querySelector('.avatarmodel');
    /* console.log(player.components.testplay.data.toggle); */
    /* console.log(document.getElementById('videoset').components); */
  },
});

/* AFRAME.registerComponent('getid', {
  schema: {
    toggle: { type: 'number' },
  },
  init: function () {
    NAF.utils.getNetworkId(this.el);
  },
}); */

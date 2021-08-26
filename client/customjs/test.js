AFRAME.registerComponent('testcomponent', {
  schema: {
    id: { type: 'string' },
  },

  init: function () {
    const button = document.getElementById('test-button');
    console.log(this.id);
    const player = document.getElementById('player');
    const name = document.querySelector('.nametag');
    /* const putmodel = document.querySelector('avatarmodel1'); */
    console.log(document.getElementById('player').querySelector('.avatarmodel').components.testcomponent.data);
    button.addEventListener('click', function () {
      this.id = './figurehead-of-hms-prince-of-wales-3d-model/scene.gltf';
      /* console.log(Object.keys(NAF.entities.entities));
        console.log(Object.keys(NAF.entities.entities)[0]); */
      const data = player.querySelector('.avatarmodel');
      data.setAttribute('testcomponent', 'id', './figurehead-of-hms-prince-of-wales-3d-model/scene.gltf');
      console.log(document.getElementById('player').querySelector('.avatarmodel').components.testcomponent.data.id);
      /* console.log(data.components);
        console.log(document.getElementById('player').querySelector('.nametag').components); */
      data.setAttribute('gltf-model', player.querySelector('.avatarmodel').components.testcomponent.data.id);
      /* putmodel.setAttribute('src', player.querySelector('.avatarmodel').components.testcomponent.data.id); */
      console.log(document.querySelector('.avatarmodel').components.testcomponent.data.id);
    });
  },
  update: function () {
    const button = document.getElementById('test-button');
    console.log(this.id);
    const player = document.getElementById('player');
    const data = player.querySelector('.avatarmodel');
    console.log(document.querySelector('.avatarmodel').components.testcomponent.data.id);
    console.log(data.components.testcomponent.data.id);
    console.log(data.components);
    console.log(player.querySelector('.avatarmodel').components);
    console.log(player.querySelector('.nametag').components);
  },
});
/* AFRAME.registerComponent('avatarupdate', {
  init: function () {
    const target = document.getElementById('player').querySelector('.avatarmodel');
    const button = document.getElementById('test-button');
    const observer = new MutationObserver((records) => {
      console.log(this.id);
      const player = document.getElementById('player');
      const data = player.querySelector('.avatarmodel');
      console.log(document.getElementById('player').querySelector('.avatarmodel').components.testcomponent.data);
      data.setAttribute('gltf-model', document.getElementById('player').querySelector('.avatarmodel').components.testcomponent.data.id);
    });
    observer.observe(target, {
      attributes: true,
      childList: true,
      characterData: true,
    });
  },
});
 */

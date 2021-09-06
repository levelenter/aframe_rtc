window.onload = () => {
  // toggleボタンをセレクト
  let sidebarToggler = document.getElementById('sidebarToggler');
  // 全ページを囲む親要素をセレクト
  let page = document.getElementById('sidebar');
  // 表示状態用の変数
  let showSidebar = false;
  page.style.cssText = 'margin-left: -370px';
  console.log(sidebarToggler);
  // イベント追加
  window.onload = function setup() {
    console.log('sidebarOn');
    page.style.cssText = 'margin-left: -370px';
  };
  sidebarToggler.addEventListener('click', () => {
    // 表示状態判別
    if (showSidebar) {
      page.style.cssText = 'margin-left: -370px';
      showSidebar = false;
    } else {
      page.style.cssText = 'margin-left: 0px';
      showSidebar = true;
    }
  });
};

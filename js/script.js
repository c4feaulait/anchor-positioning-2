const btns = document.querySelectorAll('.js-tabBtn');
const tubHeader = document.querySelector('.tab__head');
const contents = document.querySelectorAll('.js_tabContent');

btns.forEach((btn, index) => {
    // console.log(index);
    btn.addEventListener('click', () => {
    
        // 全てのボタンとコンテンツから is_active を削除
        // btns.forEach(button => button.classList.remove('is_active'));
        contents.forEach(content => content.classList.remove('is_active'));

        tubHeader.style.setProperty('--active-anchor', `--tab-${index + 1}`);

        // 対象だけに is_active を付与
        btn.classList.add('is_active');
        contents[index].classList.add('is_active');
    });
});
// 値を取得する場合
// $(セレクタ).val();

// 値を変更する場合
// $(セレクタ).val(変更後の値);

$(function () {
   // id属性がcheckの要素がクリックされたら
   $('.btn').on('click', function () {
     // 名前(テキストボックス)を取得する
     console.log('クリック' + $('[class="text-box"]').val('クリックしました！'));
   });
 });

//スムーススクロール
$(function(){

    //hrefが#から始まる要素にクリックイベントを付与
    $('a[href^="#"]').click(function(){

        //aタグのリンク先（href）の中身をattr（取得）して変数hrefに代入
        //例：href="#welcome"ならhrefにwelcomeが代入される
        let href=$(this).attr("href");

        //変数targetに代入するのは#または空白のときはhtml、どちらでもなければhref
        let target=$(href=="#" || href=="" ? 'html' :href);
        //topからの距離を取得
        let position=target.offset().top;
        //ゆっくりスクロール
        let speed=800;

        $("html,body").animate({
            scrollTop:position
        },speed,"swing");

        //ページ遷移を止める
        return false;
    });
});

//.animatedのアニメーション実行タイミング
//画面50％の位置まで来たら実行
//.animated要素にwaypointを登録
$('.animated').waypoint({
    handler(direction) {
      // 要素が画面中央に来るとここが実行される
      if (direction === 'down') {
        /**
         * 下方向のスクロール
         * イベント発生元の要素にfadeInUpクラスを付けることで
         * アニメーションを開始
         */
        $(this.element).addClass('fadeInUp');
  
        /**
         * waypointを削除することで、この要素に対しては
         * これ以降handlerが呼ばれなくなる
         */
        this.destroy();
      }
    },
  
    // 要素が画面中央に来たらhandlerを実行
    offset: '50%',
  });
  
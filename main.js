
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
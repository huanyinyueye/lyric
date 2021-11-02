const mybutton = document.getElementById("toTopBtn");
const container = document.querySelector('.container');
const sidebar = document.getElementById('sidebar');


//Sidebar button
function btn_open() {
    document.getElementById("main").style.marginLeft = "10%";
    document.getElementById("sidebar").style.width = "10%";
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("openSB").style.display = 'none';
}
function btn_close() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("openSB").style.display = "inline-block";
}

//When scroll over 20px, show scroll to top button
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.documentElement.scrollTop = 0;
}

//Create post on content for infinite scroll
[0, 1, 2].map(x => createPost(x));
window.addEventListener('scroll', () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight > scrollHeight - 5) {
        [0, 1, 2].map(x => createPost(x));;
    }
});
function createPost(num) {
    const post = document.createElement('div');
    if (num == 0) {
        post.className = 'text';
        post.innerHTML = `<h1>Cry Baby<a name="Crybaby"></a></h1></br>
                <img src="./pic/CryBaby.jpg" alt=""></br>
                <p>
                胸ぐらを掴まれて</br>
                強烈なパンチを食らってよろけて</br>
                肩を並べうずくまった</br>
                予報通りの雨にお前はにやけて</br>
                「傷口が綺麗になる」なんて嘘をつく</br>
                </br>
                いつも口喧嘩さえうまく出来ないくせして</br>
                冴えない冗談言うなよ</br>
                あまりのつまらなさに目が潤んだ</br>
                </br>
                何度も青アザだらけで涙を 流して 流して</br>
                不安定な心を肩に預け合いながら</br>
                腐り切ったバッドエンドに抗う</br>
                なぜだろう 喜びよりも心地よい痛み ずっしりと響いて</br>
                濡れた服に舌打ちしながら</br>
                腫れ上がった顔を見合って笑う</br>
                土砂降りの夜に 誓ったリベンジ</br>
                胸ぐらを掴み返して</br>
                反撃のパンチを繰り出すくらいじゃなきゃ</br>
                お前の隣には立てないから</br>
                相手が何であれ日和らない</br>
                何度伸されても諦めない</br>
                忘れるな忘れるなと言い聞かせ続けたのに</br>
                </br>
                傘はいらないから言葉を一つくれないか</br>
                微温い優しさではなく</br>
                弱音に侵された胸の奥を抉るような言葉を</br>
                </br>
                何度も青アザだらけで涙を 流して 流して</br>
                不安定な心を肩に預け合いながら</br>
                腐り切ったバッドエンドに抗う</br>
                なぜだろう 喜びよりも心地よい痛み ずっしりと響いて</br>
                濡れた服に舌打ちしながら</br>
                腫れ上がった顔を見合って笑う</br>
                土砂降りの夜に 囚われの日々に 問いかけるように</br>
                光った瞳の中で 誓ったリベンジ
            </p>`;
    }
    else if (num == 1) {
        post.className = 'text';
        post.innerHTML = `<h1>Last StarDust<a name="LastStardust"></a></h1></br>
                <img src="./pic/LastStarDust.jpg" alt=""></br>
                <p>
                ふりしきる強い雨描いた夢の果て</br>
                震える肩濡らし歩き続けた</br>
                擦り切れた小さな手</br>
                隙間を埋めるまで
                色の消えた記憶拾い集めた</br>
                愛しさ 優しさ</br>
                すべて投げ出してもいい</br>
                失くしたもの見つけたなら</br>
                傷つくのが さだめだとしても</br>
                心はまだ色を放つ</br>
                最後の stardust 舞いあがれ</br>
                Dust to dust, ash to ash 彼方へ</br>
                願いの 破片よ 届け</br>
                </br>
                遠ざかる通り雨消えてく夜の風</br>
                孤独だけが傍にたたずんでいた</br>
                選んだ正しさ</br>
                すべて間違いでもいい</br>
                信じたもの 守れたなら</br>
                傷だらけの 硝子の心が</br>
                忘れかけた 熱を灯す</br>
                最後の stardust 舞いあがれ</br>
                Dust to dust, earth to earth 彼方へ</br>
                願いの破片よとわへ</br>
                </br>
                傷つくのがさだめだとしても</br>
                心はまだ 色を放つ</br>
                さよなら Judas 灰になれ</br>
                Dust to dust いつかの弱さへ</br>
                傷だらけの硝子の心が</br>
                忘れかけた 熱を灯す</br>
                最後の stardust 舞いあがれ</br>
                Dust to dust, ash to ash 彼方へ</br>
                願いの破片よとわへ
            </p>`;
    }
    else {
        post.className = 'text';
        post.innerHTML = `<h1>カワキヲアメク<a name="kawakiwoameku"></a></h1></br>
                <img src="./pic/kawakiwoameku.jpg" alt=""></br>
	            <p>
                未熟 無ジョウ されど 美しくあれ</br>
                No Destiny ふさわしく無い</br>
                こんなんじゃきっと物足りない</br>
                くらい語っとけばうまくいく</br>
                物 金 愛 言 もう自己顕示飽きた</br>
                </br>
                既視感 何がそんな不満なんだ？</br>
                散々ワガママ語っといて これ以上他に何がいる？</br>
                そんなところも割と嫌いじゃ無い</br>
                </br>
                もう「聞き飽きたんだよ そのセリフ」</br>
                中途半端だけは嫌</br>
                もういい</br>
                ああしてこうして言ってたって</br>
                愛して どうして？ 言われたって</br>
                遊びだけなら簡単で 真剣交渉無茶苦茶で</br>
                思いもしない軽い(おもい）言葉</br>
                何度使い古すのか？</br>
                </br>
                どうせ</br>
                期待してたんだ出来レースでも</br>
                引用だらけのフレーズも</br>
                踵持ち上がる言葉タブーにして</br>
                空気を読んだ雨降らないでよ</br>
                </br>
                まどろっこしい話は嫌</br>
                必要最低限でいい 2文字以内でどうぞ</br>
                紅の蝶は何のメールも送らない</br>
                脆い扇子広げる その方が魅力的でしょう</br>
                </br>
                迷で</br>
                応えられないなら ほっといてくれ</br>
                迷えるくらいなら 去っといてくれ</br>
                肝心なとこは筒抜けで 安心だけはさせられるような</br>
                甘いあめが降れば</br>
                傘もさしたくなるだろう？</br>
                このまま</br>
                期待したままでよかった 目を瞑った</br>
                変えたかった 大人ぶった</br>
                無くした 巻き戻せなかった</br>
                今雨 止まないで</br>
                </br>
                コピー ペースト デリート その繰り返し</br>
                吸って 吐いた</br>
                だから</br>
                それでもいいからさ 此処いたいよ</br>
                </br>
                もういい</br>
                ああしてこうして言ってたって</br>
                愛して どうして？ 言われたって</br>
                遊びだけなら簡単で 真剣交渉支離滅裂で</br>
                思いもしない重い真実（うそ）は</br>
                タブーにしなくちゃな？</br>
                きっと</br>
                期待してたんだ出来レースでも</br>
                公式通りのフレーズも</br>
                踵上がる癖もう終わりにして</br>
                空気を読んだ空晴れないでよ</br>
                </br>
                今日も 雨</br>
                傘を閉じて 濡れて帰ろうよ
            </p>`;
    }
    container.appendChild(post);
}
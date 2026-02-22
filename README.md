#アンカーポジショニング
anchor-nameと--active-anchorを使用して、選択したタブに背景が自動で吸着する

タブのボタンに**anchor-name: hoge-1**
ボタンを包む要素（以下tab__head）に **--active-anchor: hoge-1** を指定（初期状態）
jsで--active-anchorがクリックされたボタンのanchor-nameに変更されるように実装。

ボタンの背景は、tab__headの疑似要素を使用。
疑似要素に対して、
**position-anchor: var(--active-anchor)** を指定
これにより、クリックされたボタンを基準に背景のスタイルを変化させることが可能。

##使用できるプロパティ
- anchor()
- anchor-size()

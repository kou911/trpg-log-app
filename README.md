# TrpgLog

- TRPGというストーリー性を持つボードゲームにおいて、ストーリーのネタバレを避けつつ感想や出来事を共有するためのブログアプリ。
- 開発の背景・経緯
  - TRPGはネタバレを避ける必要があるため、起きた出来事などを大々的に話すのが難しい。そのため、ネタバレを避けられるブログアプリを作成しようと考えた。
  - システム、立場などによりTRPGへの参加方法は様々な形があるため、カテゴリという形でラベル付けを行うことでそれぞれを分離して見る事を可能にした。
- 実際のアプリ：https://kotaru8960-trpg.vercel.app/

## 特徴と機能の説明

- ラベルごとに絞り込んで類似の投稿のみを表示可能。
- 一覧では本文が秘匿されるためネタバレを気にする必要がない。
<div>
<iframe width="600" height="400" src="https://youtu.be/ZfhquCWNiJQ"></iframe>
</div>
- 開発者(投稿者)の画面では、一度投稿した内容を変更することが可能。また、ラベルはチェックボックス方式であり直感的にラベル付けが可能。
<div>
<iframe width="600" height="400" src="https://youtu.be/_d0-kcR78WE"></iframe>
</div>

## 使用技術 (技術スタック)

- 使用した言語やフレームワーク
  - Typescript
  - prisma
  - next.js
- 開発に使用したツールやウェブサービス
  - VSCode
  - Github
  - Supabase(投稿内容の保存に使用)
  - vercel(バックエンドを含めたウェブアプリの公開に使用)
    VSCodeやGithubなど基本的な開発環境を除き、ほぼ全ての技術についてこのアプリのために新規に学習を行った。

## 開発期間・体制

- 開発体制: 個人開発
- 開発期間: 2024.12 ~ 2025.2 (約30時間)

## 工夫した点・苦労した点

- ラベルごとに絞り込んで表示する機能を実装するにあたり、動的にURLやリンクを生成する必要があった。
- 投稿自体のリンクと、カテゴリのリンクが重なるため、使用にあたり不快感を感じないようにクリックの判定サイズにこだわった。

## 既知の課題と今後の展望

- 画像や、オンラインセッションの場合はそのサイトのURL、使用したキャラクターシートなども公開出来るようにすればよりプレイ時の感覚を鮮明に保存出来ると考える。

## 開発者について

- ポートフォリオ：https://kou911.github.io/portfolio
- 所属：公立大学工業高等専門学校　本科3年知能情報コース

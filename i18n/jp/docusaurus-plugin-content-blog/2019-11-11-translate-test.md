---
title: "マイホームハッカソン参加の振り返り"
description: "'マイホームハッカソン'を通じて個人ブログを作成するプロセスの紹介"
date: 2019-09-23T00:00:00+09:00
lastmod: 2019-09-21T00:00:00+09:00
slug: hackerton_myhome
authors: [minho]
tags: [hackerton]
image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: false
---

# マイホームハッカソン参加の振り返り

## **ハッカソン**

### ハッカソンの紹介

- 目的

[マイホームハッカソン](https://www.notion.so/be735a45ff444a48bd4a23a0a299e2e5)は、個人が自分のウェブサイトを作成し、サービスを提供できるようにするための個人ホーム（ブログ）を構築・改善することを目的としたハッカソンです。既存の[Naver Blog](https://section.blog.naver.com/BlogHome.nhn/)、[Tistory](https://www.tistory.com/)、[Egloos](http://www.egloos.com)などのブログプラットフォームから離れることを目指しています。

参加者はチームを組むこともでき、既存の個人ブログを持っている人は現在のブログを改善したり、ブログプラグインやCMSなどを開発することも選択できます。

- 場所と日程

マイホームハッカソンは、2019年9月21日（土）午前10時30分から午後8時まで、三成洞の[Hyperconnect](https://hyperconnect.com/)で開催されました。

- 主催者
  - [post-a-week](https://github.com/post-a-week/blog)の[GODORI](https://github.com/godori)

### ハッカソン参加の動機

ハッカソンに参加した動機は、もちろん自分のホーム（以下、ブログ）を作成することでした。

このハッカソンでブログを作成する前に、[Jekyll](https://jekyllrb-ko.github.io/)と[Github](https://github.com/)を使ってブログサイトを構築しようとしました。しかし、プロジェクトの締め切りや資格試験の勉強で、[Ruby](https://www.ruby-lang.org/)言語を学び、Jekyllの構造を理解するのが難しかったです。

そのため、RubyではなくJAVAベースで構築されたプラットフォームを探し始め、[Gatsby](http://gatsbyjs.org/)や[Vuepress](https://vuepress.vuejs.org/)に惹かれました。この検索中に、[AsciiDoc](https://asciidoctor.org/)というマークアップ言語を発見し、ファイル変換時にdocxやPDFなどの様々な形式をサポートするという利点に惹かれました。

AsciiDocをサポートするテンプレートエンジンを探していると、関連するブログ記事（[静的サイトへの移行 - 鄭尚赫](https://blog.benelog.net/migration-to-static-site.html)）を見つけ、その記事で使用されていた[JBake](https://jbake.org/)を最終的に選びました。

AsciiDocに関連するリンク:
- [Asciidocの基本的な使い方](https://narusas.github.io/2018/03/21/Asciidoc-basic.html)
- [Asciidocをベースにした書籍執筆テンプレート](http://honeymon.io/tech/2018/02/27/asiidoc-book-template.html)

### 個人ブログを作成する目的

ブログを設置する理由は主に3つあります。

- 学習内容の整理

以前は勉強してもどこにも記録を残さなかったため、学んだ当時はよく覚えていても、しばらくすると忘れてしまいました。そのため、学習した内容を整理することで、時間が経ってもすぐに復習し、学んだことを思い出せるようにしたいです。

- ポートフォリオの整理

時間が経つと、特定の時点で何をしたのかを知るのは簡単ではありませんでした。そのため、このブログに関連する内容を記録することで、何をいつ行ったのかを知ることを目指しています。

- 執筆の練習

修士課程の間、自分の文章力が不足していると感じました。自分の考えを他人に文章で伝えることや、論理的に文章を展開することは難しいです。もし将来、本を書く機会や博士課程に進む機会があれば、文章を書く能力がその機会をつかむ助けになると思います。

### ハッカソン参加の感想

このハッカソンのおかげで、忙しさのために先延ばしにしていた個人ブログの作成を完了できたことを嬉しく思います。

ハッカソンは土曜日の午前10時30分から始まり、午後8時に終了するという、忙しい社会人にとって負担の少ないハッカソンでした。

次回のマイホームハッカソンがいつになるかわかりませんが、開催されるなら再び参加し、ブログの改善したい部分に取り組みたいと思います。

## **私のホームを構築するプロセス**

このブログは、[開発瞑想ブログの鄭尚赫さんが書いた記事](https://blog.benelog.net/migration-to-static-site.html)に従って作成されました。

### サービス環境

- 静的サイト生成プラットフォーム: [JBake](https://jbake.org/)
- コンテンツリポジトリ: GitHub
- ビルドとデプロイ: [Netlify(Ubuntu 14.04)](https://www.netlify.com/)、[Travis CI(Ubuntu 14.04)](https://travis-ci.org/)
- 訪問者統計集計: [Google Analytics](https://analytics.google.com/analytics/web/)

### 構築手順

1. ブログリポジトリをフォークする
2. フォークしたリポジトリのソースを自分に合わせて修正する
3. Travisを作成しリンクする
4. Google Analyticsを作成しリンクする
5. Netlifyを作成し、gitのフォークしたリポジトリをリンクする

### 構築中の特記事項

最初はTravisやNetlifyでビルド時にエラーが発生したため、Ubuntuのバージョンを16.04から14.04にダウングレードしました。Travisの*.travis.yml*ファイルに'dist: trusty'コードを追加し、Netlifyの*Setting - Build & deploy*メニューで'Build image selection'を修正しました。（Netlifyは16.04バージョンで正常に動作したため、14.04から16.04に戻しました。）

ビルドとデプロイはNetlifyとTravis CIの両方で行われるため、このブログは以下の2つのアドレスでアクセスできます。

- https://anew0m.netlify.com - Netlify
- https://anew0m.github.io/blog/ - Travis CI

以上。

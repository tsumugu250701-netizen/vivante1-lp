# VIVANTE LP 完全版（画像表示修正版）

## そのままVercelで公開する方法
1. このZIPを解凍
2. GitHubリポジトリ直下に中身をすべてアップロード
3. Vercelが自動デプロイ
4. `index.html` がトップページになります

## ファイル構成
- `index.html`
- `styles.css`
- `script.js`
- `vercel.json`
- `assets/` 画像一式

## 画像について
画像はすべて `assets/` 内に固定ファイル名で配置し、HTML/CSSから `./assets/xxx.jpg` で参照しています。
文字入りのフルLPモック画像は使っていません。

## Googleフォーム連携
`index.html` 内の下記を差し替えてください。

```html
https://docs.google.com/forms/d/e/REPLACE_FORM_ID/formResponse
```

また、各入力項目の `entry.1111111111` などを実際のGoogleフォームのentry番号に差し替えると、回答がGoogleフォームへ直接送信されます。

## 注意
現在はフォームの見た目と送信構造まで実装済みです。
Googleフォーム側のID・entry番号だけ本番用に差し替えてください。

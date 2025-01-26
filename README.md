# lacode-lob

## 概要

このプロジェクトは、**Next.js 14** を使ったモダンなサンドボックスプロジェクトです。主に高度な TypeScript パターン、API 統合、UI フォームの実装を試しています。主な技術やパターンは以下の通りです：

- **Zod**: フォームやAPIデータのスキーマバリデーションと型推論。
- **react-hook-form**: 軽量で柔軟なフォーム状態管理ライブラリ。
- **Branded Types**: `ts-brand` を使用して TypeScript 型に意味的な制約を追加。
- **OpenAPI**: 型付きAPI通信のために `openapi-typescript` と `openapi-fetch` を使用。

---

## 使用技術

### フレームワークとライブラリ

- **Next.js 14**: サーバーサイドレンダリングとモダンアプリケーションアーキテクチャのためのReactベースのフレームワーク。
- **Zod**: スキーマ宣言とランタイムバリデーション。
- **react-hook-form**: 柔軟なフォーム管理ライブラリで、`@hookform/resolvers` を通じてZodと統合。
- **ts-brand**: Branded Types を使用して型安全性を強化。
- **OpenAPI**: 以下を使用して自動型生成とデータ取得を実現：
  - `openapi-typescript` (型生成)
  - `openapi-fetch` (API通信)

### リンティングとフォーマット

- **ESLint**: 一貫性のあるコード品質を維持。
- **Prettier**: 一貫性のあるコードフォーマットを提供。
- **eslint-config-prettier**: コンフリクトするESLintルールを無効化。

---

## インストール

### リポジトリをクローン

```bash
git clone https://github.com/your-username/lacode-lob.git
cd lacode-lob
```

### 依存関係をインストール

```bash
npm install
```

### OpenAPI 型のセットアップ

OpenAPI スキーマから TypeScript 型を生成するには以下を実行してください：

```bash
npm run generate:types
```

---

## スクリプト

### 開発サーバー起動

```bash
npm run dev
```

開発サーバーを起動します。

### ビルド

```bash
npm run build
```

本番環境用にアプリケーションをビルドします。

### サーバー起動

```bash
npm run start
```

本番環境用のサーバーを起動します。

### リント

```bash
npm run lint
```

ESLint を使用してコードベースをチェックします。

### フォーマット

```bash
npm run format
```

リンティングの問題を自動修正し、コードをフォーマットします。

### OpenAPI 型の生成

```bash
npm run generate:types
```

`./doc/openapi.yaml` にある OpenAPI YAML スキーマから TypeScript 型を生成します。

---

## 依存関係

### コア依存関係
| パッケージ             | バージョン  | 用途                                         |
|-----------------------|-----------|---------------------------------------------|
| next                  | ^14.2.21  | React ベースのフレームワーク                |
| react-hook-form       | ^7.54.2   | フォーム管理                                |
| zod                   | ^3.24.1   | スキーマバリデーション                      |
| ts-brand              | ^0.2.0    | 厳密な型付けのための Branded Types          |
| openapi-fetch         | ^0.13.4   | 型付き API 通信                             |
| @mui/material         | ^6.4.1    | Material UI コンポーネント                  |

### 開発依存関係
| パッケージ             | バージョン  | 用途                                         |
|-----------------------|-----------|---------------------------------------------|
| typescript            | ^5.7.3    | TypeScript コンパイラ                       |
| eslint                | ^8.57.1   | JavaScript/TypeScript のリンティング         |
| prettier              | ^3.4.2    | コードフォーマッタ                           |
| openapi-typescript    | ^7.6.0    | OpenAPI スキーマから TypeScript 型を生成     |

---



## my memo

npm

```
npm install zod @hookform/resolvers react-hook-form

npm install eslint eslint-config-next

# formatかけるため

npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev

npm i openapi-fetch
npm i -D openapi-typescript typescript
```


```
npx next lint --fix
```

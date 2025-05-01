# TrendMarket

TrendMarketは、LLM（大規模言語モデル）技術を活用して、人間の関与を最小限に抑えながら予測市場を作成・実行する革新的なプラットフォームです。LLMが人気のある市場を選択し、マルチLLM投票によって結果を自動的に判断することで、流動性の分散問題に対処しています。

このリポジトリは[maobushi/trend-market](https://github.com/maobushi/trend-market)をフォークし、いくつかの改善を加えたものです。

[![ETHGlobal Showcase](https://img.shields.io/badge/ETHGlobal-Showcase-blue)](https://ethglobal.com/showcase/trendmarket-kummv)

## 🌟 特徴

- **LLMによる市場作成**: AIを使用してトレンドのある予測市場を特定・作成
- **自動市場解決**: マルチLLM投票システムによる結果の判定
- **流動性の集中**: 最も人気のある市場に流動性を集中
- **スマートコントラクト統合**: ブロックチェーン上での安全で透明性の高い市場運営
- **ウォレット接続**: 暗号資産ウォレット接続による簡単な認証
- **ニュース統合**: 現在のイベントやニュースに基づいた市場作成

## 📊 仕組み

TrendMarketはブロックチェーン技術と高度な言語モデルを組み合わせて、新しいタイプの予測市場を創造します：

1. **市場作成**: LLMがニュースソースをスキャンし、トレンドのあるトピックに基づいて潜在的な予測市場を特定
2. **ユーザー参加**: ユーザーはウォレットを接続し、予測トークンを購入して市場に参加
3. **自動マーケットメイキング**: スマートコントラクトが定数積公式を使用して予測トークンの価格を管理
4. **市場解決**: 市場の期限が切れると、LLMが利用可能な情報を分析して結果を判断
5. **報酬分配**: 勝者は正しい結果に対する自分の持ち分に比例して報酬を受け取る

## 🔧 技術スタック

- **フロントエンド**: Next.js, React, TailwindCSS
- **認証**: Dynamic Labsによるウォレット接続
- **AI統合**: OpenAI API
- **ブロックチェーン**: Ethereum（Sepoliaテストネット、Blastテストネット）
- **スマートコントラクト**: Solidity, Foundry
- **データストレージ**: Supabase

## 🚀 最近の更新

元のリポジトリに対する最近の改善点：
- World ID認証からウォレット接続に変更し、ユーザビリティを向上
- より良いユーザー体験のためのUI/UX強化
- OpenAI API統合のための環境変数の最適化
- プロバイダーとオラクルのデフォルト値のバグ修正
- 依存パッケージの更新

## 🏗️ プロジェクト構造

```
trend-market/
├── contracts/          # Solidityスマートコントラクト
│   ├── src/            # コントラクトソースファイル
│   └── script/         # デプロイメントスクリプト
└── frontend/           # Next.jsフロントエンドアプリケーション
    ├── app/            # Next.jsアプリルーター
    ├── components/     # Reactコンポーネント
    └── lib/            # ユーティリティ関数とライブラリ
```

## 📋 前提条件

- Node.js (v16+)
- pnpm
- Foundry (スマートコントラクト開発用)
- Ethereumウォレット (MetaMask推奨)

## 🛠️ インストール

### リポジトリのクローン

```bash
git clone https://github.com/tkgshn/trend-market.git
cd trend-market
```

### フロントエンドのセットアップ

```bash
cd frontend
pnpm install
# 必要な環境変数を含む.env.localファイルを作成
```

必要な環境変数：
```
NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID=your_dynamic_environment_id
```

### スマートコントラクトのセットアップ

```bash
cd contracts
forge install
```

## 🚀 アプリケーションの実行

### フロントエンド

```bash
cd frontend
pnpm dev
```

アプリケーションは[http://localhost:3000](http://localhost:3000)で利用可能になります。

### スマートコントラクト

テストネットへのデプロイ：

```bash
cd contracts
forge script script/DeployPredictionMarket.s.sol --rpc-url $RPC_URL --private-key $PRIVATE_KEY
```

## 📚 詳細情報

予測市場とこのプロジェクトの背景にある哲学についての深い理解を得るには、[Medium記事](https://maobushi.medium.com/the-dawn-of-prediction-markets-598e39538b96)をお読みください。

## 👨‍💻 貢献者

- [maobushi](https://github.com/maobushi) - オリジナル作成者
- [tkgshn](https://github.com/tkgshn) - フォークメンテナー

## 📄 ライセンス

このプロジェクトはMITライセンスの下でライセンスされています - 詳細はLICENSEファイルをご覧ください。

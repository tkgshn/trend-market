# TrendMarket

TrendMarket is an innovative prediction market platform that uses LLM (Large Language Model) technology to create and execute markets with minimal human involvement. It addresses liquidity fragmentation by having LLMs select popular markets and automatically determine outcomes through multi-LLM voting.

This repository is a fork of [maobushi/trend-market](https://github.com/maobushi/trend-market) with several improvements.

[![ETHGlobal Showcase](https://img.shields.io/badge/ETHGlobal-Showcase-blue)](https://ethglobal.com/showcase/trendmarket-kummv)

## 🌟 Features

- **LLM-Powered Market Creation**: Uses AI to identify and create trending prediction markets
- **Automated Market Resolution**: Multi-LLM voting system to determine outcomes
- **Liquidity Concentration**: Focuses liquidity on the most popular markets
- **Smart Contract Integration**: Secure, transparent market operations on the blockchain
- **Wallet Connection**: Simple authentication via crypto wallet connection
- **News Integration**: Market creation based on current events and news

## 📊 How It Works

TrendMarket combines blockchain technology with advanced language models to create a new kind of prediction market:

1. **Market Creation**: LLMs scan news sources to identify potential prediction markets based on trending topics
2. **User Participation**: Users connect their wallets and participate in markets by purchasing prediction tokens
3. **Automated Market Making**: Smart contracts manage the pricing of prediction tokens using a constant product formula
4. **Market Resolution**: When a market expires, LLMs determine the outcome by analyzing available information
5. **Reward Distribution**: Winners receive rewards proportional to their stake in the correct outcome

## 🔧 Technology Stack

- **Frontend**: Next.js, React, TailwindCSS
- **Authentication**: Dynamic Labs for wallet connection
- **AI Integration**: OpenAI API
- **Blockchain**: Ethereum (Sepolia testnet, Blast testnet)
- **Smart Contracts**: Solidity, Foundry
- **Data Storage**: Supabase

## 🚀 Recent Updates

Recent improvements to the original repository include:
- Replaced World ID authentication with wallet connection for improved usability
- Enhanced UI/UX for better user experience
- Environment variable optimization for OpenAI API integration
- Bug fixes for providers and oracles default values
- Dependency package updates

## 🏗️ Project Structure

```
trend-market/
├── contracts/          # Solidity smart contracts
│   ├── src/            # Contract source files
│   └── script/         # Deployment scripts
└── frontend/           # Next.js frontend application
    ├── app/            # Next.js app router
    ├── components/     # React components
    └── lib/            # Utility functions and libraries
```

## 📋 Prerequisites

- Node.js (v16+)
- pnpm
- Foundry (for smart contract development)
- Ethereum wallet (MetaMask recommended)

## 🛠️ Installation

### Clone the repository

```bash
git clone https://github.com/tkgshn/trend-market.git
cd trend-market
```

### Setup Frontend

```bash
cd frontend
pnpm install
# Create a .env.local file with necessary environment variables
```

Required environment variables:
```
NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID=your_dynamic_environment_id
```

### Setup Smart Contracts

```bash
cd contracts
forge install
```

## 🚀 Running the Application

### Frontend

```bash
cd frontend
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Smart Contracts

Deploy to a testnet:

```bash
cd contracts
forge script script/DeployPredictionMarket.s.sol --rpc-url $RPC_URL --private-key $PRIVATE_KEY
```

## 📚 Learn More

For a deeper understanding of prediction markets and the philosophy behind this project, read our [Medium article](https://maobushi.medium.com/the-dawn-of-prediction-markets-598e39538b96).

## 👨‍💻 Contributors

- [maobushi](https://github.com/maobushi) - Original creator
- [tkgshn](https://github.com/tkgshn) - Fork maintainer

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

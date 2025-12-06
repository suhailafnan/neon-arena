# Neon Arena 🎮✨

A high-speed, reflex-based arcade shooter built for the Polkadot ecosystem. Compete for high scores, climb the on-chain leaderboard, and win real crypto rewards!

## 🌟 Features

- **Fast-Paced Gameplay**: Test your reflexes in "Target Blitz" mode.
- **On-Chain Leaderboard**: All high scores are verified and stored on the Moonbase Alpha testnet.
- **Weekly Prize Pools**: Top players win DEV tokens every week.
- **Gasless-like Experience**: Seamless wallet integration with Polkadot.js and MetaMask.
- **Cyberpunk Aesthetics**: Immersive neon visuals and dynamic sound effects.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [MetaMask](https://metamask.io/) or [Polkadot.js](https://polkadot.js.org/extension/) extension installed
- [Moonbase Alpha DEV tokens](https://faucet.moonbeam.network/) (for on-chain features)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/suhailafnan/neon-arena.git
   cd neon-arena
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install Contract Dependencies** (Optional, for smart contract development)
   ```bash
   cd ../contracts
   npm install
   ```

### Running the Game

1. Start the frontend development server:
   ```bash
   cd frontend
   npm run dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser.

## ⛓️ Smart Contract

The game's leaderboard is powered by the `GameLeaderboard` smart contract deployed on Moonbase Alpha.

- **Network**: Moonbase Alpha
- **Contract Address**: `Check frontend/.env.local`
- **Chain ID**: 1287

## � Team Members

- **Suhail Afnan** ([@suhailafnan](https://github.com/suhailafnan))
- **Hilmi KT**
- **Anandhu P**

## 🎥 Demo

[Link to Demo Video]

## �🛠️ Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS, Framer Motion, TypeScript
- **Blockchain**: Solidity, Hardhat, Ethers.js
- **Network**: Moonbase Alpha (Polkadot/Moonbeam Testnet)
- **State Management**: Zustand
- **Wallets**: Polkadot.js, MetaMask, SubWallet

## 🚀 Getting Started

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

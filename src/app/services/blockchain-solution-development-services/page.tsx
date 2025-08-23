import React from 'react';
import { StaticImageData } from "next/image";
import Blog1 from "../../../../public/assets/images/blog1.jpeg";
import Blog2 from "../../../../public/assets/images/blog2.png";
import AIIcon from "../../../../public/assets/images/aiIcon.png";
import ServicesCommonComponents from '@/components/common/servicesComponents';

export type ServiceDataType = {
  title: string;
  subtitle: string;
  points: string[];
  img1: string | StaticImageData;
  cardIcon: string | StaticImageData;
}

export type TechnologiesDataType = {
  title: string;
  technologies: string[];
}

const data: ServiceDataType[] = [
  {
    title: "Smart Contract Development & Audit",
    subtitle: "",
    points: [
      "ERC-20, ERC-721, ERC-1155 Token Standards",
      "DAO Governance Contracts, Staking, Vesting, Airdrops",
      "Solana, Ethereum, Polygon, BSC, Avalanche, Arbitrum Support",
      "Formal Verification, Security Audit (MythX, Slither, OpenZeppelin)"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752172004/Smarrt_contract_ekewow.jpg",
    cardIcon: AIIcon
  },
  {
    title: "Copy Trading Bot on Blockchain",
    subtitle: "",
    points: [
      "Copy trading platform with real-time Smart Money Wallet Monitoring",
      "Automated mirroring of buy/sell transactions from on-chain wallets",
      "Solana/Ethereum integration, private RPC, multi-threaded execution",
      "Trade parsing, token price validation, and bot balance sync logic",
      "VPS deployment near validator nodes for low latency"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752172009/Blockchain_vjp2ed.jpg",
    cardIcon: AIIcon
  },
  {
    title: "DeFi Platform Development",
    subtitle: "",
    points: [
      "Yield Farming, Token Swaps, Staking Pools",
      "Decentralized Lending & Liquidity Pool Development",
      "DeFi Dashboard for APY Tracking, Transaction History",
      "Multi-wallet login (MetaMask, Phantom, WalletConnect)"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752172011/DEFi_1_c7nzx5.jpg",
    cardIcon: AIIcon
  },
  {
    title: "NFT Marketplace Development",
    subtitle: "",
    points: [
      "NFT Minting, Buying, Auction Modules",
      "NFT Search, Ownership Transfer, and Metadata Handling",
      "Royalties and Secondary Market Tracking",
      "Cross-Chain NFT Transfers (LayerZero, Stargate)"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752172018/NFTs_t933ge.jpg",
    cardIcon: AIIcon
  },
  {
    title: "Web3 dApp Development",
    subtitle: "",
    points: [
      "Fully decentralized applications with responsive UI/UX",
      "Backend infrastructure using Node.js, MongoDB, IPFS, Arweave",
      "Blockchain indexing via The Graph, Subgraphs, or custom API",
      "Wallet login, balance sync, and on-chain data fetch in real time"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752172002/Web_3.0_Dev_fz5kyw.jpg",
    cardIcon: AIIcon
  },
  {
    title: "Tokenomics & Token Development",
    subtitle: "",
    points: [
      "Custom token creation for STO, ICO, IDO, IEO",
      "Governance Tokens, Utility Tokens, Stablecoins, Reward Tokens",
      "Airdrop Management, Vesting Contract Setup, Whitelisting Mechanisms"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752172001/TOKENss_xc8wt3.jpg",
    cardIcon: AIIcon
  },
  {
    title: "Private & Enterprise Blockchain Networks",
    subtitle: "",
    points: [
      "Hyperledger Fabric, Quorum, and Corda Development",
      "Permissioned Blockchain Network Configuration",
      "Node Setup, Chaincode Deployment, Enterprise Workflow Automation"
    ],
    img1: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752172014/DEFi_2_lmqwqe.jpg",
    cardIcon: AIIcon
  },
]

const technologiesData: TechnologiesDataType[] = [
  {
    title: "Protocols & Blockchains",
    technologies: [
      "Ethereum",
      "Solana",
      "BSC",
      "Avalanche",
      "Fantom",
      "Polygon",
      "Arbitrum",
      "Optimism",
      "Cardano",
      "Polkadot",
    ]
  },
  {
    title: "Frameworks & SDKs",
    technologies: [
      "Hardhat",
      "Truffle",
      "Anchor",
      "Remix IDE",
      "Brownie",
      "Web3.js",
      "Ethers.js",
      "Solana",
      "Web3 SDK",
    ]
  },
  {
    title: "Security & Auditing Tools",
    technologies: [
      "Slither",
      "MythX",
      "OpenZeppelin Defender",
      "Tenderly",
      "Certik APIs"
    ]
  },
  {
    title: "Infrastructure & Node Providers",
    technologies: [
      "Infura",
      "Alchemy",
      "QuickNode",
      "Moralis",
      "RunNode",
    ]
  },
  {
    title: "Wallet Integrations",
    technologies: [
      "MetaMask",
      "WalletConnect",
      "Trust Wallet",
      "Phantom",
      "Coinbase Wallet",
    ]
  },
  {
    title: "Web3 APIs & Indexing",
    technologies: [
      "The Graph Protocol",
      "Covalent",
      "Chainlink",
      "Subgraph",
      "IPFS",
      "Arweave"
    ]
  },
]

const industriesData = [
  {
    title: "Banking & Finance",
    points: ["Real-Time Settlements", "DeFi Lending", "CBDC Infrastructure"],
    img1: Blog1,
  },
  {
    title: "Insurance",
    points: ["Claims Automation", "Smart Underwriting", "Risk Scoring"],
    img1: Blog2,
  },
  {
    title: "Healthcare",
    points: ["Immutable Medical Records", "Consent Management", "Pharma Traceability"],
    img1: Blog1,
  },
  {
    title: "Supply Chain",
    points: ["Transparent Inventory Tracking", "Provenance Verification"],
    img1: Blog2,
  },
  {
    title: "Legal",
    points: ["Smart Legal Contracts", "Digital Escrow", "Arbitration Automation"],
    img1: Blog1,
  },
  {
    title: "E-Commerce & Retail",
    points: ["Loyalty Rewards", "Tokenized Offers", "Crypto Checkout"],
    img1: Blog2,
  },
  {
    title: "Real Estate",
    points: ["Tokenized Ownership", "Smart Contracts for Property Transfer"],
    img1: Blog1,
  },
  {
    title: "Gaming & Metaverse",
    points: ["NFT Utilities", "In-Game Tokenization", "Marketplace Systems"],
    img1: Blog2,
  },
  {
    title: "Education",
    points: ["On-Chain Certificates", "Skill Tokenization", "Digital Badging"],
    img1: Blog1,
  },
  {
    title: "Energy & Utilities",
    points: ["Peer-to-Peer Energy Trading", "Carbon Credit Tracking"],
    img1: Blog2,
  },
]

const whyPoints = [
  "End-to-End Blockchain Product Engineering",
  "Expertise in Ethereum, Solana, BSC, Polygon, Avalanche, and Layer-2 Solutions",
  "Custom Smart Contract Development, Audit & Security",
  "High-Performance dApp and Web3 Development",
  "Cross-Chain and Multi-Chain Integration (Wormhole, LayerZero)",
  "Crypto Wallet, Exchange, and Token Integration",
  "Token Launchpads, DeFi Staking, and Copy Trading Solutions",
  "Blockchain Consulting for Startups, Enterprises, and Investors"
]

const mainTitle = "Blockchain Development Company";
const mainDescription = "Transforming businesses by offering innovative Blockchain development services.";
const title = "Enterprise-Grade Blockchain Development Services to Build Decentralized, Secure, and Scalable Digital Ecosystems";
const description = `At MappOptimist Technologies, we provide full-spectrum, enterprise-level blockchain solution development services focused on decentralization, smart automation, token economy creation, and secure digital transaction ecosystems. As a globally trusted blockchain development company in India, USA, Europe, and the Middle East, we help startups, enterprises, and Web3 innovators adopt blockchain for real-world impact.\n\nOur blockchain software engineers are experts in building smart contracts, DeFi apps, dApps, NFT marketplaces, copy trading bots, Web3 platforms, and enterprise private blockchain networks across multiple protocols, including Ethereum, Solana, Binance Smart Chain, Avalanche, and Hyperledger Fabric.`;
const specificServiceSliderTitle = "Our Blockchain Development Services";
const technologyTitle = "Blockchain Technologies, Platforms & Tools We Use";
const serviceIndustriesSliderTitle = "Blockchain Use Cases & Industry Applications";
const whyTitle = "Why Choose MappOptimist for Blockchain Development?";
const quoteTitle = "Launch Your Blockchain Ecosystem with MappOptimist Technologies";
const quoteDescription = "From DeFi ecosystems to smart contract-based automation and real-time trading bots — MappOptimist Technologies helps you transform business processes with secure, scalable, and customized blockchain development services."
const quoteBtnText = "Connect Today"
const technologySubTitle = ""
const technologyDescription = "";

export const metadata = {
  title: "Blockchain Development Company",
  description: "Transforming businesses by offering innovative Blockchain development services. Enterprise-Grade Blockchain Development Services to Build Decentralized, Secure, and Scalable Digital Ecosystems. At MappOptimist Technologies, we provide full-spectrum, enterprise-level blockchain solution development services focused on decentralization, smart automation, token economy creation, and secure digital transaction ecosystems. As a globally trusted blockchain development company in India, USA, Europe, and the Middle East, we help startups, enterprises, and Web3 innovators adopt blockchain for real-world impact. Our blockchain software engineers are experts in building smart contracts, DeFi apps, dApps, NFT marketplaces, copy trading bots, Web3 platforms, and enterprise private blockchain networks across multiple protocols, including Ethereum, Solana, Binance Smart Chain, Avalanche, and Hyperledger Fabric.",
  openGraph: {
    title: "Blockchain Development Company",
    description: "Transforming businesses by offering innovative Blockchain development services. Enterprise-Grade Blockchain Development Services to Build Decentralized, Secure, and Scalable Digital Ecosystems. At MappOptimist Technologies, we provide full-spectrum, enterprise-level blockchain solution development services focused on decentralization, smart automation, token economy creation, and secure digital transaction ecosystems. As a globally trusted blockchain development company in India, USA, Europe, and the Middle East, we help startups, enterprises, and Web3 innovators adopt blockchain for real-world impact. Our blockchain software engineers are experts in building smart contracts, DeFi apps, dApps, NFT marketplaces, copy trading bots, Web3 platforms, and enterprise private blockchain networks across multiple protocols, including Ethereum, Solana, Binance Smart Chain, Avalanche, and Hyperledger Fabric.",
    url: `${process.env.NEXT_WEBSITE_BASE_URL}/services/blockchain-solution-development-services`,
    siteName: "MappOptimist Technologies",
    images: [
      {
        url: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752170928/Blockchain_Solution_Services_skqbj8.png",
        width: 1200,
        height: 630,
        alt: "Blockchain Development Company | MappOptimist Technologies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: `${process.env.NEXT_WEBSITE_BASE_URL}/services/blockchain-solution-development-services`,
  },
};

export default function BlockchainSolutionDevelopmentPage() {

  return (
    <ServicesCommonComponents
      coverImage="https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752170928/Blockchain_Solution_Services_skqbj8.png"
      specificServiceSlider={data}
      displayIndustriesSlider={false}
      technologiesData={technologiesData}
      industriesData={industriesData}
      whyPoints={whyPoints}
      mainTitle={mainTitle}
      mainDescription={mainDescription}
      title={title}
      description={description}
      specificServiceSliderTitle={specificServiceSliderTitle}
      technologyTitle={technologyTitle}
      technologySubTitle={technologySubTitle}
      technologyDescription={technologyDescription}
      serviceIndustriesSliderTitle={serviceIndustriesSliderTitle}
      whyTitle={whyTitle}
      quoteTitle={quoteTitle}
      quoteDescription={quoteDescription}
      quoteBtnText={quoteBtnText}
    />
  );
}

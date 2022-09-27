"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3906],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,s=e.mdxType,n=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),h=s,m=u["".concat(i,".").concat(h)]||u[h]||d[h]||n;return a?r.createElement(m,l(l({ref:t},c),{},{components:a})):r.createElement(m,l({ref:t},c))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=a.length,l=new Array(n);l[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:s,l[1]=o;for(var p=2;p<n;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6203:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>k,frontMatter:()=>p,metadata:()=>d,toc:()=>h});var r=a(7462),s=a(3366),n=(a(7294),a(3905)),l=a(4996),o=a(9960),i=["components"],p={id:"cryptowallet",title:"Crypto Wallet"},c=void 0,d={unversionedId:"basics/concepts/cryptowallet",id:"basics/concepts/cryptowallet",title:"Crypto Wallet",description:"What is a Crypto Wallet?",source:"@site/docs/basics/concepts/cryptowallet.md",sourceDirName:"basics/concepts",slug:"/basics/concepts/cryptowallet",permalink:"/docs/basics/concepts/cryptowallet",draft:!1,tags:[],version:"current",lastUpdatedBy:"Yonghui Lin",lastUpdatedAt:1664241369,formattedLastUpdatedAt:"9/27/2022",frontMatter:{id:"cryptowallet",title:"Crypto Wallet"},sidebar:"Basics",previous:{title:"CKB-VM",permalink:"/docs/basics/concepts/ckb-vm"},next:{title:"Run a CKB Dev Blockchain",permalink:"/docs/basics/guides/devchain"}},u={},h=[{value:"What is a Crypto Wallet?",id:"what-is-a-crypto-wallet",level:2},{value:"Types of Crypto Wallets",id:"types-of-crypto-wallets",level:2},{value:"Hot Wallets",id:"hot-wallets",level:3},{value:"Cold Wallets",id:"cold-wallets",level:3},{value:"Benefits of Using Crypto Wallets",id:"benefits-of-using-crypto-wallets",level:2},{value:"CKB Wallets",id:"ckb-wallets",level:2},{value:"CKB Addresses",id:"ckb-addresses",level:2},{value:"Minimum Requirements of a CKB Transfer",id:"minimum-requirements-of-a-ckb-transfer",level:2},{value:"References",id:"references",level:2}],m={toc:h};function k(e){var t=e.components,a=(0,s.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"what-is-a-crypto-wallet"},"What is a Crypto Wallet?"),(0,n.kt)("p",null,"A crypto wallet is a software program or physical device that keeps your private keys and gives you access to your cryptocurrencies. Simply put, a crypto wallet is a digital wallet that allows users to store and manage their cryptocurrencies."),(0,n.kt)("p",null,"A crypto wallet consists of a collection of key pairs. Each key pair consists of a private key and a public key corresponding to an address. The public key is similar to a bank account number and the private key is similar to the secret PIN that provides control over the account.\nThe public key is generated from the private key by a one-way cryptographic function. The wallet address is generated from the public key by a one-way cryptographic hash function. The wallet address is human-readable and is used for sending and receiving cryptocurrencies. The keys and addresses establish the ownership of cryptocurrencies. "),(0,n.kt)("h2",{id:"types-of-crypto-wallets"},"Types of Crypto Wallets"),(0,n.kt)("p",null,"There are two main categories of crypto wallets, hot and cold wallets, which are defined by the internet connectivity. Hot wallets are internet-connected, less secure, and pose more risk, but are user-friendly. Cold wallets, on the other hand, are stored offline, do not require an internet connection, with higher security and lower risk."),(0,n.kt)("h3",{id:"hot-wallets"},"Hot Wallets"),(0,n.kt)("p",null,"Hot wallets are basically internet-connected wallets that offer a higher level of user-friendliness. Hot wallets are easy to set up and have fast access to assets."),(0,n.kt)("p",null,"The three main types of hot wallets are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Web-based Wallets")),(0,n.kt)("p",{parentName:"li"},"Web-based wallets are the prominent crypto wallets in the hot wallet category. One can access a web wallet through a web browser without downloading any specific software or application. Web wallets, such as MetaMask, work as browser extensions allowing users to access cryptocurrency assets from anywhere by simply having a password, a device, and a web browser, enabling users to easily interact with dApps (decentralized applications) and DeFi (decentralized finance) protocols.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Desktop Wallets")),(0,n.kt)("p",{parentName:"li"},"Desktop Wallet requires the user to download an application onto the desktop or laptop. The application generates a data file that holds the user's privkeys. The user also needs to create a PIN to access these keys. Desktop wallets, such as the Electrum wallet, can be used on a desktop or laptop computer.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Mobile Wallets")),(0,n.kt)("p",{parentName:"li"},"Mobile wallets are also one of the crucial cryptocurrency wallet categories in hot wallets. Functioning similarly to desktop wallets, users must install a mobile application on their phone to serve as a wallet. Mobile wallets bring better flexibility for exchanging funds, but there are also some security risks. Mobile wallets, such as the ",(0,n.kt)("a",{parentName:"p",href:"http://blockchain.com/"},"Blockchain.com"),' wallet, allow users to store cryptocurrencies, send/receive transactions, and "scan" the privkey of an existing wallet into the app by scanning a QR code.'))),(0,n.kt)("h3",{id:"cold-wallets"},"Cold Wallets"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Cold wallets")," are types of crypto wallets used for cold storage. These wallets store the cryptos in an offline mode and offer better security. Cold wallets are always a secure option compared to other wallets, as these act as a vault for daily transactions."),(0,n.kt)("p",null,"There are two main types of cold wallets, paper wallets and hardware wallets:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Paper Wallets")),(0,n.kt)("p",{parentName:"li"},"Paper wallet is nothing but a physical piece of paper. This paper must contain all the data a user needs to access the cryptocurrency.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Hardware Wallets")),(0,n.kt)("p",{parentName:"li"},"Hardware wallets store private keys on a physical device in an offline environment. It can be connected to a computer or other device effortlessly by using a USB drive. When the device is connected to the internet, the private key remains on the device. The device will request transaction details and provide verification for the data to complete the transaction. The transaction details are sent to the network where the transaction is logged. Trezor and Ledger are among the popular hardware wallets available today."))),(0,n.kt)("h2",{id:"benefits-of-using-crypto-wallets"},"Benefits of Using Crypto Wallets"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Simplicity and ease of use. It\u2019s just like any other software or wallet that you use for your day-to-day transactions.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Highly secure. A highly secure sign-in procedure is usually implemented, requiring an encrypted login details ID to be entered. This can assist to guarantee that no one else can access the account unless an explicit permission is given.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Allows instant transactions across geographies. And these are barrierless, without intermediaries.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Low transaction fees. The cost of transferring funds is much lower than with traditional banks.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Access to multiple cryptocurrencies. One of the benefits of utilizing a well-known cryptocurrency wallet is having many cryptocurrency alternatives to choose from. It facilitates the ease of the crypto conversion whilst reducing risk and increasing the total profit potential."))),(0,n.kt)("h2",{id:"ckb-wallets"},"CKB Wallets"),(0,n.kt)("p",null,"There are many options for storing and securing CKB assets, either in hot or cold wallets. Given that CKB is available on several exchanges, users can choose to store assets on any exchange. But some alternatives may deserve attention as well for additional security."),(0,n.kt)("p",null,"Wallets that provide custody and security services to CKB include:"),(0,n.kt)("img",{src:(0,l.Z)("img/wallet/wallet_01.png")}),(0,n.kt)("p",null,"For more information, see the guides of ",(0,n.kt)(o.Z,{to:(0,l.Z)("/docs/basics/guides/crypto wallets/neuron"),mdxType:"Link"},"Neuron Wallet"),", ",(0,n.kt)(o.Z,{to:(0,l.Z)("/docs/basics/guides/crypto wallets/imtoken"),mdxType:"Link"},"imToken & imKey"),", ",(0,n.kt)(o.Z,{to:(0,l.Z)("/docs/basics/guides/crypto wallets/safepal"),mdxType:"Link"},"SafePal"),", ",(0,n.kt)(o.Z,{to:(0,l.Z)("/docs/basics/guides/crypto wallets/portalwallet"),mdxType:"Link"},"Portal Wallet"),", ",(0,n.kt)(o.Z,{to:(0,l.Z)("/docs/basics/guides/crypto wallets/bitpie"),mdxType:"Link"},"Bitpie"),"."),(0,n.kt)("h2",{id:"ckb-addresses"},"CKB Addresses"),(0,n.kt)("p",null,"Nervos CKB follows ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki"},"Bitcoin bech32 address format (BIP-173)")," or ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/sipa/bips/blob/bip-bech32m/bip-0350.mediawiki"},"Bitcoin bech32m address format (BIP-350)")," rules to generate addresses."),(0,n.kt)("p",null,"The following two address formats have been deprecated:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Short address"),(0,n.kt)("p",{parentName:"li"},"Example: ",(0,n.kt)("inlineCode",{parentName:"p"},"ckb1qyq5lv479ewscx3ms620sv34pgeuz6zagaaqklhtgg"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Full address"),(0,n.kt)("p",{parentName:"li"},"Example: ",(0,n.kt)("inlineCode",{parentName:"p"},"ckb1q3w9q60tppt7l3j7r09qcp7lxnp3vcanvgha8pmvsa3jplykxn32snajhch96rq68wrff7pjx59r8stgt4rh5g96ahs")))),(0,n.kt)("p",null,"A new full address format is supported now. Both the community and partners in the Nervos ecosystem are encouraged to migrate to the new full address format."),(0,n.kt)("p",null,"Example: ",(0,n.kt)("inlineCode",{parentName:"p"},"ckb1qzda0cr08m85hc8jlnfp3zer7xulejywt49kt2rr0vthywaa50xwsqdnnw7qkdnnclfkg59uzn8umtfd2kwxceqxwquc4")),(0,n.kt)("p",null,"For more information, see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0021-ckb-address-format/0021-ckb-address-format.md"},"RFC: CKB Address Format"),". "),(0,n.kt)("p",null,"Here are three solutions for CKB address generation and transformation:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ckb.tools/"},"CKB.tools"),": allow the parsing or generating of deprecated addresses for applications that do not yet support the new full address format, such as the faucet."),(0,n.kt)("li",{parentName:"ul"},"Lumos Page (",(0,n.kt)("a",{parentName:"li",href:"https://main--boring-euler-1b5fa4.netlify.app/tools/"},"CKB Lumos"),"): can be used to generate new full addresses."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://codesandbox.io/s/ckb-address-transformer-524gi"},"ckb-address-transformer"),": can be used to convert a deprecated address into a new full address and vice versa.")),(0,n.kt)("h2",{id:"minimum-requirements-of-a-ckb-transfer"},"Minimum Requirements of a CKB Transfer"),(0,n.kt)("p",null,"The minimum unit of a transfer is one CKB cell, and the basic data structure of a cell consists of ",(0,n.kt)("inlineCode",{parentName:"p"},"capacity"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"lock"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"args")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"hash_type"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"capacity")," requires 8 bytes of storage space."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"lock")," requires 32 bytes of storage space."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"args")," requires 20 bytes of storage space. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"hash_type")," requires 1 byte of storage space.")),(0,n.kt)("p",null,"The total minimum storage space of a cell is 61 bytes. 1 byte equals 1 CKByte (CKB), so one cell requires at least 61 CKBs. That is, ",(0,n.kt)("strong",{parentName:"p"},"each transfer requires at least 61 CKBs"),"."),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://everythingnervos.substack.com/p/lets-talk-about-storing-nfts-on-the"},"Let's Talk about Storing NFT's on the Neuron Wallet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://everythingnervos.substack.com/p/how-do-i-configure-my-opera-wallet"},"How do I Configure my Opera Wallet and Import into MetaMask?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://everythingnervos.substack.com/p/how-do-i-upgrade-the-firmware-of"},"How do I Upgrade the Firmware of my SafePal Hardware Wallet?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://everythingnervos.substack.com/p/how-do-i-run-the-neuron-wallet-with"},"How do I Run the Neuron Wallet with a Dedicated Full Node?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://everythingnervos.substack.com/p/how-do-i-use-the-math-app-wallet"},"How do I use the Math App Wallet to Store Nervos CKB?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://everythingnervos.substack.com/p/how-do-i-connect-the-safepal-hardware"},"How do I Connect the SafePal Hardware Wallet to my SafePal Account?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://everythingnervos.substack.com/p/how-do-i-create-a-safepal-hot-wallet"},"How do I Create a SafePal (Hot) Wallet and Store Nervos CKB?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://everythingnervos.substack.com/p/how-do-i-secure-my-nervos-ckb-with-8df"},"How Do I Secure my Nervos CKB with a Ledger Nano X Hardware Wallet?"))))}k.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1432],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=o,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8657:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>p,metadata:()=>d,toc:()=>m});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),l=a(4996),i=a(9960),s=["components"],p={id:"neuron",title:"Neuron Wallet"},c=void 0,d={unversionedId:"basics/guides/crypto wallets/neuron",id:"basics/guides/crypto wallets/neuron",title:"Neuron Wallet",description:"Neuron Wallet is a CKB wallet produced by Nervos Foundation. The wallet holds keys and is capable of creating and broadcasting transactions.",source:"@site/docs/basics/guides/crypto wallets/neuron.md",sourceDirName:"basics/guides/crypto wallets",slug:"/basics/guides/crypto wallets/neuron",permalink:"/docs/basics/guides/crypto wallets/neuron",draft:!1,tags:[],version:"current",lastUpdatedBy:"Yonghui Lin",lastUpdatedAt:1664241369,formattedLastUpdatedAt:"9/27/2022",frontMatter:{id:"neuron",title:"Neuron Wallet"},sidebar:"Basics",previous:{title:"Get CKB Binary on Windows",permalink:"/docs/basics/guides/ckb-on-windows"},next:{title:"imToken & imKey",permalink:"/docs/basics/guides/crypto wallets/imtoken"}},u={},m=[{value:"Install Neuron Wallet",id:"install-neuron-wallet",level:2},{value:"Set Up a Neuron Wallet",id:"set-up-a-neuron-wallet",level:2},{value:"Create a New Neuron Wallet",id:"create-a-new-neuron-wallet",level:3},{value:"Import a Wallet Seed of a Backed Up Wallet",id:"import-a-wallet-seed-of-a-backed-up-wallet",level:3},{value:"Import a Keystore File of a Backed Up Wallet",id:"import-a-keystore-file-of-a-backed-up-wallet",level:3},{value:"Await the Sync to Complete",id:"await-the-sync-to-complete",level:3},{value:"Transfer CKB from Neuron Wallet to Other Wallets or Exchanges",id:"transfer-ckb-from-neuron-wallet-to-other-wallets-or-exchanges",level:2},{value:"Deposit CKB into Nervos DAO",id:"deposit-ckb-into-nervos-dao",level:2},{value:"Withdraw CKB from Nervos DAO",id:"withdraw-ckb-from-nervos-dao",level:2},{value:"Claim Vested or Locked Tokens",id:"claim-vested-or-locked-tokens",level:2},{value:"Manage Asset Account",id:"manage-asset-account",level:2},{value:"Manage SUDT Accounts",id:"manage-sudt-accounts",level:3},{value:"Preparation",id:"preparation",level:4},{value:"Add an SUDT Account to Asset Accounts",id:"add-an-sudt-account-to-asset-accounts",level:4},{value:"Manage CKB Accounts",id:"manage-ckb-accounts",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],k={toc:m};function h(e){var t=e.components,a=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Neuron Wallet")," is a CKB wallet produced by Nervos Foundation. The wallet holds keys and is capable of creating and broadcasting transactions."),(0,r.kt)("p",null,"Neuron Wallet is bundled with a CKB Mainnet node and configured to connect to the CKB Mainnet. The bundled Mainnet node runs automatically when a Neuron wallet is set up and launched."),(0,r.kt)("h2",{id:"install-neuron-wallet"},"Install Neuron Wallet"),(0,r.kt)("p",null,"Download and install the latest version of Neuron Wallet from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/neuron/releases"},"Neuron Wallet releases page")," on Github. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": For Windows versions before Windows 10, the latest ",(0,r.kt)("a",{parentName:"p",href:"https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads"},"Microsoft Visual C++ Redistributable for Visual Studio 2015, 2017 and 2019")," must be installed before installing Neuron Wallet."),(0,r.kt)("h2",{id:"set-up-a-neuron-wallet"},"Set Up a Neuron Wallet"),(0,r.kt)("p",null,"Here are three options to set up a Neuron wallet."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create a new Neuron wallet.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Import a wallet seed of a backed up wallet.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Import a keystore file of a backed up wallet."))),(0,r.kt)("h3",{id:"create-a-new-neuron-wallet"},"Create a New Neuron Wallet"),(0,r.kt)("p",null,"To create a new wallet, select ",(0,r.kt)("strong",{parentName:"p"},"Create a New Wallet"),"."),(0,r.kt)("p",null,"A new wallet seed consisting of 12 mnemonic words is generated."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": Screenshots and copies of the mnemonic words may be read by third parties. Hand-copying is recommended for keeping the mnemonic words."),(0,r.kt)("img",{src:(0,l.Z)("img/wallet/neuron_01.png"),width:"80%"}),(0,r.kt)("h3",{id:"import-a-wallet-seed-of-a-backed-up-wallet"},"Import a Wallet Seed of a Backed Up Wallet"),(0,r.kt)("p",null,"To import a mnemonic seed:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Import Wallet Seed"),"."),(0,r.kt)("li",{parentName:"ol"},"Enter the password and wait for the sync to complete.")),(0,r.kt)("h3",{id:"import-a-keystore-file-of-a-backed-up-wallet"},"Import a Keystore File of a Backed Up Wallet"),(0,r.kt)("p",null,"To import a keystore file:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Import from Keystore"),"."),(0,r.kt)("li",{parentName:"ol"},"Enter the password, then wait for the sync to complete.")),(0,r.kt)("h3",{id:"await-the-sync-to-complete"},"Await the Sync to Complete"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Block Number")," can be cross-checked with the ",(0,r.kt)("strong",{parentName:"p"},"Latest Block")," on the ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.nervos.org/"},"CKB Explorer")," page to ensure that the sync is completed."),(0,r.kt)("img",{src:(0,l.Z)("img/wallet/neuron_02.png"),width:"70%"}),(0,r.kt)("p",null,"After the Neuron wallet is synced, full access to the tokens of the wallet is available. Sending, receiving CKBs, and depositing CKBs to Nervos DAO is possible."),(0,r.kt)("h2",{id:"transfer-ckb-from-neuron-wallet-to-other-wallets-or-exchanges"},"Transfer CKB from Neuron Wallet to Other Wallets or Exchanges"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": The wallet must have a minimum of ",(0,r.kt)("strong",{parentName:"p"},"61")," CKBs for a transfer operation."),(0,r.kt)("p",null,"To transfer CKB:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill in the ",(0,r.kt)("strong",{parentName:"p"},"Send to")," field with the address of the third party wallet or exchange on the ",(0,r.kt)("strong",{parentName:"p"},"Send")," page.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use the default fee settings or change the fee settings in ",(0,r.kt)("strong",{parentName:"p"},"Advanced fee settings"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the ",(0,r.kt)("strong",{parentName:"p"},"Send")," button.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Input the password and click ",(0,r.kt)("strong",{parentName:"p"},"Confirm")," to complete the transfer."),(0,r.kt)("img",{src:(0,l.Z)("img/wallet/neuron_03.png"),width:"70%"}))),(0,r.kt)("h2",{id:"deposit-ckb-into-nervos-dao"},"Deposit CKB into Nervos DAO"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": The wallet must have a minimum of ",(0,r.kt)("strong",{parentName:"p"},"102")," CKBs for a Nervos DAO deposit operation."),(0,r.kt)("p",null,"The economic model of Nervos CKB is designed to allow token holders to lock their tokens in Nervos DAO to mitigate the inflationary effect of the secondary issuance. In this case, the inflationary effect of the secondary issuance is expected to be nominal and equivalent to holding tokens with a hard cap."),(0,r.kt)("p",null,"To deposit CKB into Nervos DAO:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the ",(0,r.kt)("strong",{parentName:"p"},"Nervos DAO")," tab, then click ",(0,r.kt)("strong",{parentName:"p"},"Deposit"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Input the amount of CKB tokens for the deposit and then click ",(0,r.kt)("strong",{parentName:"p"},"Proceed"),"."),(0,r.kt)("img",{src:(0,l.Z)("img/wallet/neuron_04.png"),width:"70%"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Input the password and click ",(0,r.kt)("strong",{parentName:"p"},"Confirm")," to submit the deposit transaction."),(0,r.kt)("img",{src:(0,l.Z)("img/wallet/neuron_05.png"),width:"70%"}))),(0,r.kt)("h2",{id:"withdraw-ckb-from-nervos-dao"},"Withdraw CKB from Nervos DAO"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": The wallet must have a minimum of ",(0,r.kt)("strong",{parentName:"p"},"61")," CKBs for a Nervos DAO withdrawal operation."),(0,r.kt)("p",null,"To withdraw CKB from Nervos DAO:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose the deposit that you want to withdraw from the deposits list and click ",(0,r.kt)("strong",{parentName:"p"},"Withdraw"),"."),(0,r.kt)("img",{src:(0,l.Z)("img/wallet/neuron_06.png"),width:"70%"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Proceed")," on the pop-up window to complete the withdrawal operation."),(0,r.kt)("img",{src:(0,l.Z)("img/wallet/neuron_07.png"),width:"70%"}))),(0,r.kt)("h2",{id:"claim-vested-or-locked-tokens"},"Claim Vested or Locked Tokens"),(0,r.kt)("p",null,"Vested or locked tokens can be claimed by using the latest version of Neuron Wallet. When a Neuron wallet is fully synced, the vested or locked assets are visible on the ",(0,r.kt)("strong",{parentName:"p"},"Custom Assets")," page. "),(0,r.kt)("p",null,"After the customized assets are claimed, they can be transferred or deposited to Nervos DAO."),(0,r.kt)("p",null,"To claim vested or locked tokens:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"View details of ",(0,r.kt)("strong",{parentName:"p"},"Customized Assets"),"."),(0,r.kt)("img",{src:(0,l.Z)("img/wallet/neuron_08.png"),width:"70%"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Claim")," when the lock time is expired, and enter the password for the wallet."),(0,r.kt)("img",{src:(0,l.Z)("img/wallet/neuron_09.png"),width:"70%"}),(0,r.kt)("img",{src:(0,l.Z)("img/wallet/neuron_10.png"),width:"70%"}))),(0,r.kt)("h2",{id:"manage-asset-account"},"Manage Asset Account"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Asset Account")," is used for managing the accounts including anyone-can-pay (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0026-anyone-can-pay/0026-anyone-can-pay.md"},"RFC: Anyone-Can-Pay Lock"),") cells and sUDTs (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0025-simple-udt/0025-simple-udt.md"},"RFC: Simple UDT"),"). It's recommended to use ",(0,r.kt)("inlineCode",{parentName:"p"},"ckb-udt-cli")," to issue or transfer UDTs. For more information, see the GitHub repository of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ququzone/ckb-udt-cli"},"ckb-udt-cli"),". "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": The feature is experimental and only can be used on Testnet Aggron now."),(0,r.kt)("h3",{id:"manage-sudt-accounts"},"Manage SUDT Accounts"),(0,r.kt)("h4",{id:"preparation"},"Preparation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run a CKB Testnet node. For more information, see ",(0,r.kt)(i.Z,{to:(0,l.Z)("/docs/basics/guides/testnet"),mdxType:"Link"},"Run a CKB Testnet Node"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new account and export the privkey by using ",(0,r.kt)("strong",{parentName:"p"},"ckb-cli"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ckb-cli account new\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Click here to view response"),(0,r.kt)("p",null,(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Your new account is locked with a password. Please give a password. Do not forget this password.\nPassword: \nRepeat password: \naddress:\n  mainnet: ckb1qyqwuea9tpxr2equ75rskyn30r3wjans7fnq477mmm\n  testnet: ckt1qyqwuea9tpxr2equ75rskyn30r3wjans7fnqgmqyh8\nlock_arg: 0xee67a5584c35641cf5070b127178e2e97670f266\nlock_hash: 0x8b2595bb1c4720951a5363fbf0adb0ab1e2ff5acd7391f123837242712fc8490\n")))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ckb-cli account export --extended-privkey-path wallet --lock-arg `Your lock_arg`\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Click here to view response"),(0,r.kt)("p",null,(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'./ckb-cli account export --extended-privkey-path wallet --lock-arg 0xee67a5584c35641cf5070b127178e2e97670f266\nPassword: \nSuccess exported account as extended privkey to: "wallet", please use this file carefully\n')))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"cat wallet\n")),(0,r.kt)("p",{parentName:"li"},"   The first line of the result is the exported private key."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Click here to view response"),(0,r.kt)("p",null,(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"0a348a7cd1449ece26f1cede3916266793ce18beb280b75dda690057ebfcda3c  // It is the privkey\nc152037977043a11e7e6ef220ba050da12da16455a0ef303907865a15fa9c484\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Issue UDTs by using ",(0,r.kt)("strong",{parentName:"p"},"ckb-udt-cli"),"."),(0,r.kt)("p",{parentName:"li"},"To issue UDTs:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clone and build ",(0,r.kt)("strong",{parentName:"p"},"ckb-udt-cli"),". "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/ququzone/ckb-udt-cli.gitcd ckb-udt-cliexport GOPROXY=https://goproxy.iogo mod downloadgo build .\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Claim CKBs on Testnet by using ",(0,r.kt)("a",{parentName:"p",href:"https://faucet.nervos.org/"},"Nervos Aggron Faucet"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Issue UDTs and back up the ",(0,r.kt)("inlineCode",{parentName:"p"},"uuid"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"ckb-udt-cli issue -c config.yaml -k YOUR_PRIVATE_KEY -a AMOUNT // AMOUNT means the number of issued tokens\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Click here to view response"),(0,r.kt)("p",null,(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./ckb-udt-cli issue -c config.yaml -k 0a348a7cd1449ece26f1cede3916266793ce18beb280b75dda690057ebfcda3c -a 1000000\nIssued sUDT transaction hash: 0x6b4458143b25e8aa37d36c1035f15e63e5051144685a4da20cf92fd7af59e56e, uuid: 0x8b2595bb1c4720951a5363fbf0adb0ab1e2ff5acd7391f123837242712fc8490\n")))))))),(0,r.kt)("h4",{id:"add-an-sudt-account-to-asset-accounts"},"Add an SUDT Account to Asset Accounts"),(0,r.kt)("p",null,"To add the SUDT account into Asset Accounts:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the ",(0,r.kt)("strong",{parentName:"p"},"Asset Account")," page in Neuron Wallet, and click the ",(0,r.kt)("strong",{parentName:"p"},"+")," button to create an asset account."),(0,r.kt)("img",{src:(0,l.Z)("img/wallet/neuron_11.png"),width:"70%"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill the ",(0,r.kt)("inlineCode",{parentName:"p"},"uuid")," in the ",(0,r.kt)("strong",{parentName:"p"},"Token ID")," field."),(0,r.kt)("img",{src:(0,l.Z)("img/wallet/neuron_12.png"),width:"70%"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill in the other required fields and click ",(0,r.kt)("strong",{parentName:"p"},"Confirm"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Await until the transaction is successful. "))),(0,r.kt)("h3",{id:"manage-ckb-accounts"},"Manage CKB Accounts"),(0,r.kt)("p",null,"CKB accounts can be used for anyone-can-pay cells and support any amount of payment."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create two CKB accounts, ",(0,r.kt)("inlineCode",{parentName:"p"},"Anyone-can-pay1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Anyone-can-pay2"),".\nThe following figures show the steps of creating ",(0,r.kt)("inlineCode",{parentName:"p"},"Anyone-can-pay1"),". The steps of creating ",(0,r.kt)("inlineCode",{parentName:"p"},"Anyone-can-pay2")," are the same as creating ",(0,r.kt)("inlineCode",{parentName:"p"},"Anyone-can-pay1"),"."),(0,r.kt)("img",{src:(0,l.Z)("img/wallet/neuron_13.png"),width:"70%"}),(0,r.kt)("img",{src:(0,l.Z)("img/wallet/neuron_14.png"),width:"70%"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill the address of ",(0,r.kt)("inlineCode",{parentName:"p"},"Anyone-can-pay1")," in ",(0,r.kt)("a",{parentName:"p",href:"https://faucet.nervos.org/"},"Nervos Testnet Faucet")," to claim CKBs on Testnet for ",(0,r.kt)("inlineCode",{parentName:"p"},"Anyone-can-pay1"),"."),(0,r.kt)("img",{src:(0,l.Z)("img/wallet/neuron_15.png"),width:"70%"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Transfer 1 CKB from ",(0,r.kt)("inlineCode",{parentName:"p"},"Anyone-can-pay1")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"Anyone-can-pay2"),"."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click Send on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Anyone-can-pay1")," card."),(0,r.kt)("img",{src:(0,l.Z)("img/wallet/neuron_16.png"),width:"70%"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill the address of ",(0,r.kt)("inlineCode",{parentName:"p"},"Anyone-can-pay2"),"  and other required input on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Send")," page.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"Submit"),"."),(0,r.kt)("img",{src:(0,l.Z)("img/wallet/neuron_17.png"),width:"70%"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the balance on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Anyone-can-pay2")," card."),(0,r.kt)("img",{src:(0,l.Z)("img/wallet/neuron_18.png"),width:"70%"}))))),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,'Try the following process to solve the sync failure "Sync failed, please check network, or Sync is slow.":'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Quit and restart Neuron."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Note"),": Neuron is bundled with a CKB node that requires ",(0,r.kt)("a",{parentName:"p",href:"https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads"},"VC++ redistributable")," on Windows to work properly. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run a CKB Mainnet node of version v0.32.0 or later instead of running the Neuron bundled node. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If it still doesn't work out, please join the ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/TfC9rExfHh"},"Support")," channel and export the debug information, and send it to the support group for further investigation."),(0,r.kt)("img",{src:(0,l.Z)("img/wallet/neuron_19.png"),width:"70%"}))))}h.isMDXComponent=!0}}]);
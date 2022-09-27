"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7277],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(n),k=r,h=p["".concat(o,".").concat(k)]||p[k]||u[k]||l;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7574:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>k,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],c={id:"devchain",title:"Run a CKB Dev Blockchain"},o=void 0,s={unversionedId:"basics/guides/devchain",id:"basics/guides/devchain",title:"Run a CKB Dev Blockchain",description:"Nervos CKB supports a special development mode that is particularly useful for building and testing applications. This mode of operation is highly configurable, and allows the developer to speed up the block interval, adjust epochs lengths, create blocks without having to do Proof-of-Work (PoW) mining.",source:"@site/docs/basics/guides/devchain.md",sourceDirName:"basics/guides",slug:"/basics/guides/devchain",permalink:"/docs/basics/guides/devchain",draft:!1,tags:[],version:"current",lastUpdatedBy:"Yonghui Lin",lastUpdatedAt:1664241369,formattedLastUpdatedAt:"9/27/2022",frontMatter:{id:"devchain",title:"Run a CKB Dev Blockchain"},sidebar:"Basics",previous:{title:"Crypto Wallet",permalink:"/docs/basics/concepts/cryptowallet"},next:{title:"Run a CKB Mainnet Node",permalink:"/docs/basics/guides/mainnet"}},d={},u=[{value:"Setup a Dummy-Worker Blockchain",id:"setup-a-dummy-worker-blockchain",level:2},{value:"1. Download the Latest CKB Binary",id:"1-download-the-latest-ckb-binary",level:3},{value:"2. Initialize the Configuration",id:"2-initialize-the-configuration",level:3},{value:"3. Configure the Block Assembler",id:"3-configure-the-block-assembler",level:3},{value:"3a. Create a New Account",id:"3a-create-a-new-account",level:4},{value:"3b. Update the Configuration",id:"3b-update-the-configuration",level:4},{value:"4. Adjust the Parameters to Shorten the Block Interval (Optional)",id:"4-adjust-the-parameters-to-shorten-the-block-interval-optional",level:3},{value:"4a. Change the Number of Blocks in an Epoch",id:"4a-change-the-number-of-blocks-in-an-epoch",level:4},{value:"4b. Use Permanent Difficulty",id:"4b-use-permanent-difficulty",level:4},{value:"4c. Change the Mining Interval",id:"4c-change-the-mining-interval",level:4},{value:"5. Start the CKB Node",id:"5-start-the-ckb-node",level:3},{value:"6. Start the CKB Miner",id:"6-start-the-ckb-miner",level:3},{value:"Setup an Eaglesong-Worker Blockchain",id:"setup-an-eaglesong-worker-blockchain",level:2},{value:"1. Download the Latest CKB Binary",id:"1-download-the-latest-ckb-binary-1",level:3},{value:"2. Create a New Account",id:"2-create-a-new-account",level:4},{value:"3. Initialize the Configuration with the Miner Account",id:"3-initialize-the-configuration-with-the-miner-account",level:3},{value:"4. Change the PoW Function to Eaglesong",id:"4-change-the-pow-function-to-eaglesong",level:3},{value:"5. Start the CKB Node",id:"5-start-the-ckb-node-1",level:3},{value:"6. Start the CKB Miner",id:"6-start-the-ckb-miner-1",level:3},{value:"Transferring CKBytes Using <code>ckb-cli</code>",id:"transferring-ckbytes-using-ckb-cli",level:2},{value:"1. Enter the <code>ckb-cli</code> Interface",id:"1-enter-the-ckb-cli-interface",level:3},{value:"2. Create a New Account",id:"2-create-a-new-account-1",level:3},{value:"4. Transfer 10,000 CKBytes to the New Account",id:"4-transfer-10000-ckbytes-to-the-new-account",level:3},{value:"5. Check the New Account&#39;s Balance",id:"5-check-the-new-accounts-balance",level:3},{value:"Adding the Genesis Issued Cells",id:"adding-the-genesis-issued-cells",level:2},{value:"1. Create Private Key Files",id:"1-create-private-key-files",level:3},{value:"2. Import the Private Keys",id:"2-import-the-private-keys",level:3}],p={toc:u};function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Nervos CKB supports a special development mode that is particularly useful for building and testing applications. This mode of operation is highly configurable, and allows the developer to speed up the block interval, adjust epochs lengths, create blocks without having to do Proof-of-Work (PoW) mining."),(0,l.kt)("p",null,"When running a development blockchain you have the option of selecting between ",(0,l.kt)("inlineCode",{parentName:"p"},"Dummy-Worker")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Eaglesong-Worker"),". ",(0,l.kt)("inlineCode",{parentName:"p"},"Dummy-Worker")," allows the mining of blocks at a constant block interval without PoW. ",(0,l.kt)("inlineCode",{parentName:"p"},"Eaglesong-Worker")," uses real PoW to produce blocks."),(0,l.kt)("p",null,"Note: It is highly recommended that ",(0,l.kt)("inlineCode",{parentName:"p"},"Dummy-Worker")," be used for most development scenarios. ",(0,l.kt)("inlineCode",{parentName:"p"},"Eaglesong-Worker")," should only be used when validating the PoW function is necessary, because the block time can behave erratically with extremely low hashrates."),(0,l.kt)("h2",{id:"setup-a-dummy-worker-blockchain"},"Setup a Dummy-Worker Blockchain"),(0,l.kt)("h3",{id:"1-download-the-latest-ckb-binary"},"1. Download the Latest CKB Binary"),(0,l.kt)("p",null,"Download the latest ",(0,l.kt)("inlineCode",{parentName:"p"},"ckb")," binary file from the CKB releases page on ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb/releases"},"GitHub"),"."),(0,l.kt)("p",null,"The following commands can be used to verify the binaries are working and to check versions:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ckb --version\nckb-cli --version\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"(click here to view result)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ckb 0.32.1 (9ebc9ce 2020-05-29)\nckb-cli 0.32.0 (0fc435d 2020-05-22)\n"))),(0,l.kt)("h3",{id:"2-initialize-the-configuration"},"2. Initialize the Configuration"),(0,l.kt)("p",null,"Use the following command to initialize the development blockchain and generate the required configuration files:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ckb init --chain dev\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"(click here to view result)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"WARN: mining feature is disabled because of lacking the block assembler config options\nInitialized CKB directory in /PATH/ckb_v0.32.1_x86_64-apple-darwin\ncreate specs/dev.toml\ncreate ckb.toml\ncreate ckb-miner.toml\n"))),(0,l.kt)("h3",{id:"3-configure-the-block-assembler"},"3. Configure the Block Assembler"),(0,l.kt)("p",null,"The Block Assembler configuration specifies which address should be receive block rewards for mining."),(0,l.kt)("h4",{id:"3a-create-a-new-account"},"3a. Create a New Account"),(0,l.kt)("p",null,"An address to receive the block rewards must be created. We can do this using ",(0,l.kt)("inlineCode",{parentName:"p"},"ckb-cli"),"."),(0,l.kt)("p",null,"Note: Be sure to record the ",(0,l.kt)("inlineCode",{parentName:"p"},"lock_arg")," value in the response which we will use in the next step."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ckb-cli account new\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"(click here to view result)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Your new account is locked with a password. Please give a password. Do not forget this password.\nPassword: \nRepeat password: \naddress:\n  mainnet: ckb1qyqyrm8w0w8uq7puwhdp7s6xqzdjuknhf2tqzdztph\n  testnet: ckt1qyqyrm8w0w8uq7puwhdp7s6xqzdjuknhf2tqlgu5dt\nlock_arg: 0x41ecee7b8fc0783c75da1f4346009b2e5a774a96\nlock_hash: 0xeb31c5232b322905b9d52350c0d0cf55987f676d86704146ce67d92ddef05ed3\n"))),(0,l.kt)("h4",{id:"3b-update-the-configuration"},"3b. Update the Configuration"),(0,l.kt)("p",null,"Modify the ",(0,l.kt)("inlineCode",{parentName:"p"},"args")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"message")," parameters in the ",(0,l.kt)("inlineCode",{parentName:"p"},"ckb.toml")," file under the ",(0,l.kt)("inlineCode",{parentName:"p"},"block_assembler")," section:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'[block_assembler]\ncode_hash = "0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8" // Do not change this.\nargs = "0x8d627decece439977a3a0a97815b63debaff2874" // Change this to your lock_arg value. \nhash_type = "type" // Do not change this.\nmessage = "A 0x-prefixed hex string" // Change this to "0x" to supply an empty message.\n\n')),(0,l.kt)("h3",{id:"4-adjust-the-parameters-to-shorten-the-block-interval-optional"},"4. Adjust the Parameters to Shorten the Block Interval (Optional)"),(0,l.kt)("p",null,"For most development the default configuration should be sufficient, but sometimes it is beneficial to speed up certain operations so results can be viewed quickly."),(0,l.kt)("h4",{id:"4a-change-the-number-of-blocks-in-an-epoch"},"4a. Change the Number of Blocks in an Epoch"),(0,l.kt)("p",null,"The default epoch length is ",(0,l.kt)("inlineCode",{parentName:"p"},"1000")," blocks. Reducing this to ",(0,l.kt)("inlineCode",{parentName:"p"},"10")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"100")," can help with testin Nervos DAO operations."),(0,l.kt)("p",null,"Modify the ",(0,l.kt)("inlineCode",{parentName:"p"},"genesis_epoch_length")," parameter in the ",(0,l.kt)("inlineCode",{parentName:"p"},"specs/dev.toml")," file under the ",(0,l.kt)("inlineCode",{parentName:"p"},"params")," section:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'[params]\ngenesis_epoch_length = 1000  # The unit of meansurement is "block".\n')),(0,l.kt)("h4",{id:"4b-use-permanent-difficulty"},"4b. Use Permanent Difficulty"),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"permanent_difficulty_in_dummy")," is set to ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", all epochs will use the same length as the genesis epoch length, skipping the difficulty adjustment entirely. This param is typically used in conjunction with ",(0,l.kt)("inlineCode",{parentName:"p"},"genesis_epoch_length"),"."),(0,l.kt)("p",null,"Modify the ",(0,l.kt)("inlineCode",{parentName:"p"},"permanent_difficulty_in_dummy")," parameter in the ",(0,l.kt)("inlineCode",{parentName:"p"},"specs/dev.toml")," file under the ",(0,l.kt)("inlineCode",{parentName:"p"},"params")," section:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[params]\ngenesis_epoch_length = 10\npermanent_difficulty_in_dummy = true\n")),(0,l.kt)("h4",{id:"4c-change-the-mining-interval"},"4c. Change the Mining Interval"),(0,l.kt)("p",null,"The default mining interval is ",(0,l.kt)("inlineCode",{parentName:"p"},"5000"),", which is a value in milliseconds, meaning 5 seconds. Reducing this value will create blocks faster."),(0,l.kt)("p",null,"Modify the ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," parameter in the ",(0,l.kt)("inlineCode",{parentName:"p"},"ckb-miner.toml")," file under the ",(0,l.kt)("inlineCode",{parentName:"p"},"miner.workers")," section:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'[[miner.workers]]\nworker_type = "Dummy"\ndelay_type = "Constant"\nvalue = 5000  # The unit of measurement is "ms".\n')),(0,l.kt)("h3",{id:"5-start-the-ckb-node"},"5. Start the CKB Node"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ckb run\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"(click here to view result)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'2020-06-05 18:31:14.970 +08:00 main INFO sentry  sentry is disabled\n2020-06-05 18:31:15.058 +08:00 main INFO ckb-db  Initialize a new database\n2020-06-05 18:31:15.136 +08:00 main INFO ckb-db  Init database version 20191127135521\n2020-06-05 18:31:15.162 +08:00 main INFO ckb-memory-tracker  track current process: unsupported\n2020-06-05 18:31:15.164 +08:00 main INFO main  ckb version: 0.32.1 (9ebc9ce 2020-05-29)\n2020-06-05 18:31:15.164 +08:00 main INFO main  chain genesis hash: 0x823b2ff5785b12da8b1363cac9a5cbe566d8b715a4311441b119c39a0367488c\n2020-06-05 18:31:15.166 +08:00 main INFO ckb-network  Generate random key\n2020-06-05 18:31:15.166 +08:00 main INFO ckb-network  write random secret key to "/PATH/ckb_v0.32.1_x86_64-apple-darwin/data/network/secret_key"\n2020-06-05 18:31:15.177 +08:00 NetworkRuntime INFO ckb-network  p2p service event: ListenStarted { address: "/ip4/0.0.0.0/tcp/8115" }\n2020-06-05 18:31:15.179 +08:00 NetworkRuntime INFO ckb-network  Listen on address: /ip4/0.0.0.0/tcp/8115/p2p/QmSHk4EucevEuX76Q44hEdYpRxr3gyDmbKtnMQ4kxGaJ6m\n2020-06-05 18:31:15.185 +08:00 main INFO ckb-db  Initialize a new database\n2020-06-05 18:31:15.211 +08:00 main INFO ckb-db  Init database version 20191201091330\n2020-06-05 18:31:26.586 +08:00 ChainService INFO ckb-chain  block: 1, hash: 0x47995f78e95202d2c85ce11bce2ee16d131a57d871f7d93cd4c90ad2a8220bd1, epoch: 0(1/1000), total_diff: 0x200, txs: 1\n'))),(0,l.kt)("h3",{id:"6-start-the-ckb-miner"},"6. Start the CKB Miner"),(0,l.kt)("p",null,"This should be performed in a separate terminal."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ckb miner\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"(click here to view result)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"2020-06-05 18:31:21.558 +08:00 main INFO sentry  sentry is disabled\nDummy-Worker \u2801 [00:00:00] \nFound! #1 0x47995f78e95202d2c85ce11bce2ee16d131a57d871f7d93cd4c90ad2a8220bd1\nFound! #2 0x19978085abfa6204471d42bfb279eac0c20e3b81745b48c4dcaea85643e301f9\nFound! #3 0x625b230f84cb92bcd9cb0bf76d1397c1d948ab25c19df3c4edc246a765f94427\nFound! #4 0x4550fb3b62d9d5ba4d3926db6704b25b90438cfb67037d253ceceb2d86ffdbf7\n\n"))),(0,l.kt)("h2",{id:"setup-an-eaglesong-worker-blockchain"},"Setup an Eaglesong-Worker Blockchain"),(0,l.kt)("h3",{id:"1-download-the-latest-ckb-binary-1"},"1. Download the Latest CKB Binary"),(0,l.kt)("p",null,"Download the latest ckb binary file from the CKB releases page on ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb/releases"},"GitHub"),"."),(0,l.kt)("p",null,"The following commands can be used to verify the binaries are working and to check versions:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ckb --version\nckb-cli --version\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"(click here to view result)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ckb 0.32.1 (9ebc9ce 2020-05-29)\nckb-cli 0.32.0 (0fc435d 2020-05-22)\n"))),(0,l.kt)("h4",{id:"2-create-a-new-account"},"2. Create a New Account"),(0,l.kt)("p",null,"An address to receive the block rewards must be created. We can do this using ",(0,l.kt)("inlineCode",{parentName:"p"},"ckb-cli"),"."),(0,l.kt)("p",null,"Note: Be sure to record the ",(0,l.kt)("inlineCode",{parentName:"p"},"lock_arg")," value in the response which we will use in the next step."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ckb-cli account new\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"(click here to view result)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Your new account is locked with a password. Please give a password. Do not forget this password.\nPassword: \nRepeat password: \naddress:\n  mainnet: ckb1qyqyrm8w0w8uq7puwhdp7s6xqzdjuknhf2tqzdztph\n  testnet: ckt1qyqyrm8w0w8uq7puwhdp7s6xqzdjuknhf2tqlgu5dt\nlock_arg: 0x41ecee7b8fc0783c75da1f4346009b2e5a774a96\nlock_hash: 0xeb31c5232b322905b9d52350c0d0cf55987f676d86704146ce67d92ddef05ed3\n"))),(0,l.kt)("h3",{id:"3-initialize-the-configuration-with-the-miner-account"},"3. Initialize the Configuration with the Miner Account"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ckb init -c dev --ba-arg 0x41ecee7b8fc0783c75da1f4346009b2e5a774a96 // Change this to your lock_arg value. \n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"(click here to view result)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Initialized CKB directory in /PATH/ckb_v0.32.1_x86_64-apple-darwin\ncreate specs/dev.toml\ncreate ckb.toml\ncreate ckb-miner.toml\n"))),(0,l.kt)("h3",{id:"4-change-the-pow-function-to-eaglesong"},"4. Change the PoW Function to Eaglesong"),(0,l.kt)("p",null,"Modify the ",(0,l.kt)("inlineCode",{parentName:"p"},"func")," parameter in the ",(0,l.kt)("inlineCode",{parentName:"p"},"specs/dev.toml")," file under the ",(0,l.kt)("inlineCode",{parentName:"p"},"pow")," section:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'func = "Eaglesong"\n')),(0,l.kt)("p",null,"Replace the ",(0,l.kt)("inlineCode",{parentName:"p"},"miner.workers")," section in the ",(0,l.kt)("inlineCode",{parentName:"p"},"ckb-miner.toml")," file with the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'[[miner.workers]]\nworker_type = "EaglesongSimple"\nthreads = 1\n')),(0,l.kt)("h3",{id:"5-start-the-ckb-node-1"},"5. Start the CKB Node"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ckb run\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"(click here to view result)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'2020-06-05 11:25:31.433 +08:00 main INFO sentry  sentry is disabled\n2020-06-05 11:25:31.508 +08:00 main INFO ckb-db  Initialize a new database\n2020-06-05 11:25:31.590 +08:00 main INFO ckb-db  Init database version 20191127135521\n2020-06-05 11:25:31.604 +08:00 main INFO ckb-memory-tracker  track current process: unsupported\n2020-06-05 11:25:31.604 +08:00 main INFO main  ckb version: 0.32.1 (9ebc9ce 2020-05-29)\n2020-06-05 11:25:31.604 +08:00 main INFO main  chain genesis hash: 0x823b2ff5785b12da8b1363cac9a5cbe566d8b715a4311441b119c39a0367488c\n2020-06-05 11:25:31.604 +08:00 main INFO ckb-network  Generate random key\n2020-06-05 11:25:31.604 +08:00 main INFO ckb-network  write random secret key to "/PATH/ckb_v0.32.1_x86_64-apple-darwin/data/network/secret_key"\n2020-06-05 11:25:31.608 +08:00 NetworkRuntime INFO ckb-network  p2p service event: ListenStarted { address: "/ip4/0.0.0.0/tcp/8115" }\n2020-06-05 11:25:31.610 +08:00 NetworkRuntime INFO ckb-network  Listen on address: /ip4/0.0.0.0/tcp/8115/p2p/QmcCGH7VeXbpV4jj7VgSEM7NANuud6TmGHV2DXPsSVrRkR\n2020-06-05 11:25:31.612 +08:00 main INFO ckb-db  Initialize a new database\n2020-06-05 11:25:31.638 +08:00 main INFO ckb-db  Init database version 20191201091330\n'))),(0,l.kt)("h3",{id:"6-start-the-ckb-miner-1"},"6. Start the CKB Miner"),(0,l.kt)("p",null,"This should be performed in a separate terminal."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ckb miner\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"(click here to view result)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"2020-06-05 11:25:37.867 +08:00 main INFO sentry  sentry is disabled\nEaglesongSimple-Worker-0 \u2801 [00:00:00] \n2020-06-05 11:25:37.870 +08:00 main INFO ckb-memory-tracker  track current proceFound! #1 0x57e6ad0f15bacc4f30e53811d488d895e6619c17222981eca5484f0115f84acd\nFound! #2 0xe5831f39f928dca599a02e490c482a881ccdc47a2376371dec4e440e363fa5c0\nFound! #3 0x605b3e6449954c2daa996c06b2412bbf60b8231763149742119fb623f9de27b2\nFound! #4 0x64064e7257ea4589e8cb177cf119c68ab1b4559de005a20dc13ef3d42949e04b\n"))),(0,l.kt)("h2",{id:"transferring-ckbytes-using-ckb-cli"},"Transferring CKBytes Using ",(0,l.kt)("inlineCode",{parentName:"h2"},"ckb-cli")),(0,l.kt)("p",null,"Included in CKB releases is the ",(0,l.kt)("inlineCode",{parentName:"p"},"ckb-cli")," command line tool. This is can be used to directly invoke RPC calls to perform actions such as managing accounts, transferring CKBytes, and checking account balances. We will demonstrate a CKBytes transfer below. Please refer to ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb-cli"},"ckb-cli")," for full instructions."),(0,l.kt)("p",null,"Note: Using ",(0,l.kt)("inlineCode",{parentName:"p"},"ckb-cli")," to transfer CKBytes is recommended for developing and testing purposes only. For management of real funds and assets please use a wallet."),(0,l.kt)("h3",{id:"1-enter-the-ckb-cli-interface"},"1. Enter the ",(0,l.kt)("inlineCode",{parentName:"h3"},"ckb-cli")," Interface"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ckb-cli\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"(click here to view result)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"[  ckb-cli version ]: 0.31.0 (a531b3b 2020-04-17)\n[              url ]: http://127.0.0.1:8114 (network: Dev)\n[              pwd ]: /Users/zengbing/Documents/projects/ckb_v0.32.0-rc1_x86_64-apple-darwin-dev\n[            color ]: true\n[            debug ]: false\n[    output format ]: yaml\n[ completion style ]: List\n[       edit style ]: Emacs\n[   index db state ]: Waiting for first query\n"))),(0,l.kt)("h3",{id:"2-create-a-new-account-1"},"2. Create a New Account"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"account new\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"(click here to view result)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Your new account is locked with a password. Please give a password. Do not forget this password.\nPassword:\nRepeat password:\naddress:\nmainnet: ckb1qyq0g9p6nxf5cdy38fm35zech5f90jl5aueqw4c8mg\ntestnet: ckt1qyq0g9p6nxf5cdy38fm35zech5f90jl5aueqnsxch5\nlock_arg: 0xf4143a99934c34913a771a0b38bd1257cbf4ef32\nlock_hash: 0xea4db70029dd393789a6be0e4137a3e95cd8d20b2b028a0fc0eab07622a894f4\n"))),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Check the Balance of an Existing Account")),(0,l.kt)("p",null,"In the previous sections you created a miner account that collects all mining rewards. Using the following command with the correct address will show you the current CKByte balance:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'wallet get-capacity --address "miner\'s address" \n')),(0,l.kt)("details",null,(0,l.kt)("summary",null,"(click here to view result)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'CKB> wallet get-capacity --address "ckt1qyqg6cnaankwgwvh0gaq49uptd3aawhl9p6qpg5cus"\nimmature: 8027902.89083717 (CKB)\ntotal: 46253677.72927512 (CKB)\n'))),(0,l.kt)("h3",{id:"4-transfer-10000-ckbytes-to-the-new-account"},"4. Transfer 10,000 CKBytes to the New Account"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'wallet transfer --from-account "miner\'s address" --to-address "new account\'s address" --capacity 10000 --tx-fee 0.00001\n')),(0,l.kt)("details",null,(0,l.kt)("summary",null,"(click here to view result)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"CKB> wallet transfer --from-account ckt1qyqg6cnaankwgwvh0gaq49uptd3aawhl9p6qpg5cus --to-address ckt1qyq0g9p6nxf5cdy38fm35zech5f90jl5aueqnsxch5 --capacity 10000 --tx-fee 0.00001\nPassword: \n0x1b66aafaaba5ce34de494f60374ef78e8f536bb3af9cab4fa63c0f29374c3f89\n"))),(0,l.kt)("h3",{id:"5-check-the-new-accounts-balance"},"5. Check the New Account's Balance"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'wallet get-capacity --address "new account\'s address"\n')),(0,l.kt)("details",null,(0,l.kt)("summary",null,"(click here to view result)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"CKB> wallet get-capacity --address ckt1qyq0g9p6nxf5cdy38fm35zech5f90jl5aueqnsxch5\ntotal: 10000.0 (CKB)\n"))),(0,l.kt)("p",null,"The transfer is successful!"),(0,l.kt)("h2",{id:"adding-the-genesis-issued-cells"},"Adding the Genesis Issued Cells"),(0,l.kt)("p",null,"When the development blockchain configuration is generated with ",(0,l.kt)("inlineCode",{parentName:"p"},"ckb init --chain dev"),", a few Cells are created with large amounts of capacity. These are specified in ",(0,l.kt)("inlineCode",{parentName:"p"},"specs/dev.toml")," and exist only for your local development blockchain, and they can be useful for testing purposes."),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",{colspan:"2"},"Genesis Issued Cell #1")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Private Key"),(0,l.kt)("td",null,"0xd00c06bfd800d27397002dca6fb0993d5ba6399b4238b2f29ee9deb97593d2bc")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Lock Arg"),(0,l.kt)("td",null,"0xc8328aabcd9b9e8e64fbc566c4385c3bdeb219d7")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Testnet Address"),(0,l.kt)("td",null,"ckt1qyqvsv5240xeh85wvnau2eky8pwrhh4jr8ts8vyj37")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Capcity"),(0,l.kt)("td",null,"20,000,000,000 CKBytes"))),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",{colspan:"2"},"Genesis Issued Cell #2")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Private Key"),(0,l.kt)("td",null,"0x63d86723e08f0f813a36ce6aa123bb2289d90680ae1e99d4de8cdb334553f24d")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Lock Arg"),(0,l.kt)("td",null,"0x470dcdc5e44064909650113a274b3b36aecb6dc7")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Testnet Address"),(0,l.kt)("td",null,"ckt1qyqywrwdchjyqeysjegpzw38fvandtktdhrs0zaxl4")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Capcity"),(0,l.kt)("td",null,"5,198,735,037 CKBytes"))),(0,l.kt)("h3",{id:"1-create-private-key-files"},"1. Create Private Key Files"),(0,l.kt)("p",null,"Private keys must be added to a text file before they can be used."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"echo 0xd00c06bfd800d27397002dca6fb0993d5ba6399b4238b2f29ee9deb97593d2bc > pk1\necho 0x63d86723e08f0f813a36ce6aa123bb2289d90680ae1e99d4de8cdb334553f24d > pk2\n")),(0,l.kt)("h3",{id:"2-import-the-private-keys"},"2. Import the Private Keys"),(0,l.kt)("p",null,"Import the private key files using ",(0,l.kt)("inlineCode",{parentName:"p"},"ckb-cli"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"CKB> account import --privkey-path pk1\nCKB> account import --privkey-path pk2\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"(click here to view result)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Password:\naddress:\n  mainnet: ckb1qyqvsv5240xeh85wvnau2eky8pwrhh4jr8ts6f6daz\n  testnet: ckt1qyqvsv5240xeh85wvnau2eky8pwrhh4jr8ts8vyj37\nlock_arg: 0xc8328aabcd9b9e8e64fbc566c4385c3bdeb219d7\nPassword:\naddress:\n  mainnet: ckb1qyqywrwdchjyqeysjegpzw38fvandtktdhrsj8renf\n  testnet: ckt1qyqywrwdchjyqeysjegpzw38fvandtktdhrs0zaxl4\nlock_arg: 470dcdc5e44064909650113a274b3b36aecb6dc7\n"))))}k.isMDXComponent=!0}}]);
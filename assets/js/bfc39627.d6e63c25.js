"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6146],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=l(r),k=a,d=h["".concat(s,".").concat(k)]||h[k]||u[k]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4186:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>c,contentTitle:()=>s,metadata:()=>l,toc:()=>p,default:()=>h});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={id:"pw-lock",title:"Introduction of PW-lock"},s=void 0,l={unversionedId:"essays/pw-lock",id:"essays/pw-lock",title:"Introduction of PW-lock",description:"Overview",source:"@site/docs/essays/pw-lock.md",sourceDirName:"essays",slug:"/essays/pw-lock",permalink:"/docs/essays/pw-lock",tags:[],version:"current",lastUpdatedBy:"xy2101",lastUpdatedAt:1648173387,formattedLastUpdatedAt:"3/25/2022",frontMatter:{id:"pw-lock",title:"Introduction of PW-lock"},sidebar:"Essays",previous:{title:"Mint SUDT via Contract",permalink:"/docs/essays/mint-sudt-via-contract"}},p=[{value:"Overview",id:"overview",children:[],level:2},{value:"Quick Start",id:"quick-start",children:[],level:2},{value:"PW-lock Basic Structure",id:"pw-lock-basic-structure",children:[],level:2},{value:"Offchain",id:"offchain",children:[],level:2},{value:"Features In Development",id:"features-in-development",children:[],level:2},{value:"Reference",id:"reference",children:[],level:2}],u={toc:p};function h(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/lay2dev/pw-lock"},"PW-lock"),", developed by the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lay2dev/pw-lock"},"lay2")," Team, is a lock script which can make use of other blockchain wallets as CKB wallets. PW-lock is based on the concept of implementing the signature verification algorithms of other chains (e.g. ETH/TRON/EOS/BTC) so as to reuse others' facilities. Also, PW-lock is a lock with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb-production-scripts/blob/master/c/anyone_can_pay.c"},"ACP")," logic."),(0,o.kt)("p",null,"Current PW-lock supports the Ethereum ",(0,o.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-191"},"EIP-191")," signature verification standard. It is possible to communicate with MetaMask, an Ethereum wallet, through the RPC ",(0,o.kt)("a",{parentName:"p",href:"https://docs.metamask.io/guide/signing-data.html#signing-data-with-metamask"},"personal_sign"),", and sign the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb-system-scripts/wiki/How-to-sign-transaction#p2pkh"},"hash_all")," message, then verify the transaction in the PW-lock script before unlocking."),(0,o.kt)("h2",{id:"quick-start"},"Quick Start"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://github.com/lay2dev/pw-lock.git\ncd pw-lock\ngit submodule init\ngit submodule update\nmake install-tools\nmake all-via-docker\ncargo test --all\n")),(0,o.kt)("h2",{id:"pw-lock-basic-structure"},"PW-lock Basic Structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- pw-lock-script:\n  - code_hash: 32 bytes - pw-lock script code hash\n  - hash_type: 1 byte - pw-lock script hash_type\n  - args: 20 bytes - public key hash. e.g. ETH address\n  - witness(current version):\n    - lock: 65 bytes - secp256k1 signature_data\n")),(0,o.kt)("h2",{id:"offchain"},"Offchain"),(0,o.kt)("p",null,"The lay2 team has developed the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lay2dev/pw-core"},"PW-core"),", a front-end JS SDK based on Typescript, to interwork with PW-lock. Some additional supports may be required if working in a non-JavaScript environment. "),(0,o.kt)("p",null,"In addition to the ACP unlock method, PW-lock also supports the similar unlock of the CKB secp256k1 lock ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb-system-scripts/wiki/How-to-sign-transaction#p2pkh"},"P2PKH")," signature verification. The difference is that the current version of pw-lock uses a slightly different hash algorithm to that of secp256k1_blake160."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// pw-lock\nKeccak(Blake2b(Tx) | witness)\n\n// secp256k1-lock\nBlake2b(Blake2b(Tx) | witness)\n")),(0,o.kt)("h2",{id:"features-in-development"},"Features In Development"),(0,o.kt)("p",null,"Add support for chains other than ETH, such as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XuJiandong/pw-lock/blob/develop/c/pw_lock.h#L197-L230"},"EOS, TRON, BITCOIN, DOGECOIN"),", etc. in the upcoming pw-lock."),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/lay2dev/pw-lock"},"PW-lock")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/XuJiandong/pw-lock"},"Repository Reviewed & Enhanced Contract")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/lay2dev/pw-core/blob/master/src/constants.ts#L71-L84"},"Deployment Information On Lina, the mainnet")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/lay2dev/pw-core/blob/master/src/constants.ts#L157-L169"},"Deployment Information On Aggron, the testnet")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/lay2dev/pw-core/blob/master/src/signers/signer.ts"},"Available Codes for Signature"))))}h.isMDXComponent=!0}}]);
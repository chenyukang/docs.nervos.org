"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4793],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return n?o.createElement(m,s(s({ref:t},p),{},{components:n})):o.createElement(m,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5487:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),s=["components"],i={id:"nervos-blockchain",title:"Nervos Blockchain"},l=void 0,c={unversionedId:"basics/concepts/nervos-blockchain",id:"basics/concepts/nervos-blockchain",title:"Nervos Blockchain",description:"What is the Nervos Blockchain?",source:"@site/docs/basics/concepts/nervos-blockchain.md",sourceDirName:"basics/concepts",slug:"/basics/concepts/nervos-blockchain",permalink:"/docs/basics/concepts/nervos-blockchain",draft:!1,tags:[],version:"current",lastUpdatedBy:"Yonghui Lin",lastUpdatedAt:1664241369,formattedLastUpdatedAt:"9/27/2022",frontMatter:{id:"nervos-blockchain",title:"Nervos Blockchain"},sidebar:"Basics",previous:{title:"Introduction",permalink:"/docs/basics/introduction"},next:{title:"Cell Model",permalink:"/docs/basics/concepts/cell-model"}},p={},u=[{value:"What is the Nervos Blockchain?",id:"what-is-the-nervos-blockchain",level:2},{value:"Multi-Layer Architecture",id:"multi-layer-architecture",level:2},{value:"What is a CKByte?",id:"what-is-a-ckbyte",level:2},{value:"Programming on Nervos",id:"programming-on-nervos",level:2},{value:"Consensus",id:"consensus",level:2}],d={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-the-nervos-blockchain"},"What is the Nervos Blockchain?"),(0,a.kt)("p",null,"Nervos blockchain, also known as Common Knowledge Base, is the rock-bottom layer of the Nervos ecosystem. As the foundation, Nervos blockchain provides trust for all the layers built on top of it. It is designed to maximize decentralization while remaining minimal, flexible, and secure. Its primary objective is to reliably preserve any data and assets stored therein."),(0,a.kt)("h2",{id:"multi-layer-architecture"},"Multi-Layer Architecture"),(0,a.kt)("p",null,"Trade-offs are inevitable in designing any decentralized system. A common example of the trade-off concerns scalability, security, and decentralization. It is tough to achieve all three at the same high level on a single layer, but having different layers can solve different problems separately."),(0,a.kt)("p",null,"An example on how layering helps improve this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Layer 1 focuses on security and decentralization, providing trust to higher layers."),(0,a.kt)("li",{parentName:"ul"},"Layer 2 focuses on scalability, providing nearly instantaneous transactions for millions of users.")),(0,a.kt)("p",null,"These two layers function together to achieve higher levels of decentralization, security, and scalability."),(0,a.kt)("p",null,"The Nervos blockchain represents the layer 1 of a multi-layer architecture that prioritizes security and decentralization as core design principles. "),(0,a.kt)("h2",{id:"what-is-a-ckbyte"},"What is a CKByte?"),(0,a.kt)("p",null,"The native token of Nervos is known as the CKByte, or CKB for short. One CKByte token entitles the holder to one byte of data storage on Nervos. The CKByte is also used to pay fees associated with any transactions and computations."),(0,a.kt)("p",null,"To store 100 bytes of data in Nervos, it is mandatory to have 100 CKBytes. If your data occupies space on Nervos, your CKBytes will remain locked. If your data is no longer needed and is removed from Nervos, the 100 CKBytes will be available for other purposes."),(0,a.kt)("p",null,"CKBytes can also be deposited in the Nervos DAO\uff0cwhere they gain interests in a staking-like process."),(0,a.kt)("p",null,"Further information about CKByte will be presented in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/basics/concepts/cell-model"},"Cell Model")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/basics/concepts/economics"},"Economics")," sections."),(0,a.kt)("h2",{id:"programming-on-nervos"},"Programming on Nervos"),(0,a.kt)("p",null,"Nervos offers smart contract programmability using a growing number of well-known general-purpose programming languages, such as Javascript, Rust, and C."),(0,a.kt)("p",null,"All programs on Nervos can store data and state on-chain\uff0cwhich makes creating complex applications and customized tokens a simple and straightforward process."),(0,a.kt)("p",null,"All code runs in CKB-VM. CKB-VM is a high-performance RISC-V virtual machine that provides a secure, consistent and flexible environment for developers. Multiple instances of CKB-VM can execute different smart contracts concurrently, which enables substantial scaling improvements through massive parallelization."),(0,a.kt)("p",null,"More details about programming on Nervos will be covered in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/basics/concepts/cell-model"},"Cell Model")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/basics/concepts/ckb-vm"},"CKB-VM")," sections."),(0,a.kt)("h2",{id:"consensus"},"Consensus"),(0,a.kt)("p",null,"Nervos uses a Proof of Work (PoW) based consensus algorithm\uff0cknown as NC-MAX. PoW has been repeatedly proven to be the best in class solution for incentivize security."),(0,a.kt)("p",null,"Building on Bitcoin\u2019s Nakamoto Consensus, NC-MAX dramatically increases transactions per second and decreases confirmation time without compromising security or decentralization."),(0,a.kt)("p",null,"Nervos currently provides a 10x throughput boost compared to Ethereum, and is expected to grow exponentially as layer 2 solutions come to the table."),(0,a.kt)("p",null,"More details on the design of Nervos\u2019 consensus implementation will be discussed in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/basics/concepts/consensus"},"Consensus")," section."))}h.isMDXComponent=!0}}]);
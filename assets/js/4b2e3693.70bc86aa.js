"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2059],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),u=r,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7545:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"qa",title:"Q&A | For Wallets/Exchanges/Mining Pools"},l=void 0,p={unversionedId:"integrate/qa",id:"integrate/qa",title:"Q&A | For Wallets/Exchanges/Mining Pools",description:"External wallets, exchanges and mining pools typically face unique and different challenges when they integrate CKB into their system. This page will provide Q&A for wallets, exchanges and mining pools to integrate CKB. We are woking on detailed guides and helpful tips now, please be patient for a while.",source:"@site/docs/integrate/qa.md",sourceDirName:"integrate",slug:"/integrate/qa",permalink:"/docs/integrate/qa",draft:!1,tags:[],version:"current",lastUpdatedBy:"xy2101",lastUpdatedAt:1655101790,formattedLastUpdatedAt:"6/13/2022",frontMatter:{id:"qa",title:"Q&A | For Wallets/Exchanges/Mining Pools"},sidebar:"Integrate",previous:{title:"Nervos CKB Mainnet - Integration Guide",permalink:"/docs/integrate/introduction"},next:{title:"Nervos CKB SDK",permalink:"/docs/integrate/sdk"}},c={},d=[],h={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"External wallets, exchanges and mining pools typically face unique and different challenges when they integrate CKB into their system. This page will provide Q&A for wallets, exchanges and mining pools to integrate CKB. We are woking on detailed guides and helpful tips now, please be patient for a while."),(0,o.kt)("p",null,"The following three questions are related to transaction processing, you may refer to ",(0,o.kt)("a",{parentName:"p",href:"https://nervosnetwork.github.io/docs-new/docs/reference/transaction"},"Transaction")," for more details."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Q:"),"How do we use the two fields ",(0,o.kt)("inlineCode",{parentName:"p"},"code_hash")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"hash_type")," in the lock script of output cells ?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:")," When the output cells are unlocked, CKB-VM should load the corresponding contracts by using ",(0,o.kt)("inlineCode",{parentName:"p"},"code_hash")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"hash_type"),".It is recommended to refer to ",(0,o.kt)("a",{parentName:"p",href:"https://nervosnetwork.github.io/docs-new/docs/reference/script#data-structure"},"Script")," for more details."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"code_hash"),": A hash denoting which script in the transaction to execute. For space consideration, the actual script code is kept in the cell data part of a ",(0,o.kt)("a",{parentName:"li",href:"https://nervosnetwork.github.io/docs-new/docs/reference/cell#live-cell"},"live cell")," on CKB. The current transaction should reference the live cell using a ",(0,o.kt)("a",{parentName:"li",href:"https://nervosnetwork.github.io/docs-new/docs/reference/transaction"},"cell dep")," so as to locate and execute the script."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"hash_type"),": The interpretation of ",(0,o.kt)("inlineCode",{parentName:"li"},"code_hash")," when looking for script code to run from cell deps.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If ",(0,o.kt)("inlineCode",{parentName:"li"},"hash_type")," contains ",(0,o.kt)("inlineCode",{parentName:"li"},"data"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"code_hash")," should match the blake2b hash of data(which is also the actual script code) in a dep cell;"),(0,o.kt)("li",{parentName:"ul"},"If ",(0,o.kt)("inlineCode",{parentName:"li"},"hash_type")," contains ",(0,o.kt)("inlineCode",{parentName:"li"},"type"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"code_hash")," should instead match the blake2b hash of type script contained by a a dep cell. Note CKB will throw a validation error when a) we are locating a script code using ",(0,o.kt)("inlineCode",{parentName:"li"},"type")," as ",(0,o.kt)("inlineCode",{parentName:"li"},"hash_type"),"; and b) more than one cell referenced by cell deps contains the specified hash of type script.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Q:"),"Can we hardcode the  ",(0,o.kt)("inlineCode",{parentName:"p"},"code_hash")," , ",(0,o.kt)("inlineCode",{parentName:"p"},"hash_type")," and the corresponding ",(0,o.kt)("inlineCode",{parentName:"p"},"cell_dep")," of two scripts? Are they the same on Testnet as on Mainnet\uff1f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"code_hash")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"hash_type")," can be hardcoded and they are the same on Testnet as on Mainnet. ",(0,o.kt)("inlineCode",{parentName:"p"},"cell_dep"),"  is not the same on the Testnet as on Manniet. But they are all get from the fixed position of the genesis block. The single signature is from the second transaction of the genesis block and the multisignature is from the second output cell, once the genesis block is confirmed, the value is fixed"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Q:")," How do we use  ",(0,o.kt)("inlineCode",{parentName:"p"},"Type")," in the outputs?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Type")," can be used in many ways, such as UDT(User Defined Token). We already have an RFC: ",(0,o.kt)("a",{parentName:"p",href:"https://talk.nervos.org/t/rfc-simple-udt-draft-spec/4333"},"Simple UDT Draft Spec")," you may refer it for more details, but currently there isn\u2019t a standard equivalent of ERC20 in Ethereum community, will have to wait until the community has developed a best practice. For wallets or exchanges, you may handle the transactions with ",(0,o.kt)("inlineCode",{parentName:"p"},"Type = null")," If the standard is generated, you also need filter transactions by whitelist and leave transactions with ",(0,o.kt)("inlineCode",{parentName:"p"},"Type = null")," in the future."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Q:")," What is the relationship between the short address, long address and lock script?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:"),"  The long address and lock Script correspond one to one. All long addresses can be converted into a lock script and vice versa. All short addresses can be converted into long addresses, but the reverse is not necessarily true. CKB have provided single signature transfer and multisignature transfer scripts by default. Also you may refer to RFC:",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0021-ckb-address-format/0021-ckb-address-format.md"},"CKB Address Format")," for more details."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Q:")," Are there some test cases for address resolution and generation in other programming languages?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:")," Yes, you may refer to the test cases of ckb-sdk-java\uff1a\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb-sdk-java/blob/develop/ckb/src/test/java/utils/AddressParserTest.java"},"https://github.com/nervosnetwork/ckb-sdk-java/blob/develop/ckb/src/test/java/utils/AddressParserTest.java"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb-sdk-java/blob/develop/ckb/src/test/java/utils/AddressGeneratorTest.java"},"https://github.com/nervosnetwork/ckb-sdk-java/blob/develop/ckb/src/test/java/utils/AddressGeneratorTest.java")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Q:")," Why is it that the minimum transfer amount cannot be less than 61 CKB?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:")," A cell is used to represent a balance on-chain, and one must hold 1 CKB for every 1 byte of space that the cell occupies. The data in every cell is broken down into four fields: capacity, lock script, type script, and data. Capacity and lock script are required, and type script and data are optional. For more detailed information about the structure of a cell, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://nervosnetwork.github.io/docs-new/docs/reference/cell"},"cell")," reference page."),(0,o.kt)("p",null,"The most common basic cell is one that represent a CKB balance. Often this will use the default lock script, which is used for short CKB addresses supported by most wallets. A basic cell like this does not require a type script or any additional data. The fields of this cell are as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"capacity")," field is used to hold the number of CKB balance in the cell. This is a u64, which takes 8 bytes."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"lock script")," field is ",(0,o.kt)("inlineCode",{parentName:"li"},"Script")," type. This inclues a ",(0,o.kt)("inlineCode",{parentName:"li"},"code_hash")," that is 32 bytes, a ",(0,o.kt)("inlineCode",{parentName:"li"},"hash_type")," that is 1 byte, and an ",(0,o.kt)("inlineCode",{parentName:"li"},"args")," field that is 20 bytes."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"type script")," field is optional and is not used for this cell."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"data")," field is optional and is not used for this cell.")),(0,o.kt)("p",null,"When you add these up, you get 61 bytes: 8 + 32 + 1 + 20 + 0 + 0 = 61."),(0,o.kt)("p",null,"This is why the minimum transfer is 61 CKB, because 61 bytes are required to represent this information on-chain."),(0,o.kt)("p",null,"While 61 CKB is the minimum, in many cases it is recommended that 62 CKB be sent as the minimum. This is because 61 CKB is the absolute minimum that is required for the cell to exist, and if there are no extra available, then transaction fees cannot be paid from this cell, if needed."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Q:")," If I have 100 CKB in my address and transfer 61 CKB, the balance remaining (39 CKB) isn\u2019t enough to create a change cell. How should I handle this?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:")," There are several ways that this can be handled."),(0,o.kt)("p",null,"The most simple method is to inform users that they have an insufficient balance, and prompt them to add more CKB as needed. This requires only basic processing logic to be implemented."),(0,o.kt)("p",null,"A second option is to tranfer the entire balance of 100 CKB (minus tx fees) so that there is nothing left. If the balance is exactly 0 CKB, then the cell can be consumed and removed from the state completely. This works well if the user wants to withdraw their total balance."),(0,o.kt)("p",null,'A third option is to use a more specialized lock script that supports the "Anyone Can Pay" (ACP) protocol. When both the sender and receiver are setup to use ACP, a balance of any size can be transferred between two parties without the sender having to include any CKB for the cell itself. For more information on ACP, please see the ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0026-anyone-can-pay/0026-anyone-can-pay.md"},"Anyone Can Pay RFC"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Q:")," Can ",(0,o.kt)("inlineCode",{parentName:"p"},"output_data")," be used as exchange entry certificate?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:")," CKB Programming model is a generalized version of the UTXO model.It is recommended to generate different account addresses for each user instead of sharing one address and distinguish them by memo."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Q:")," Are there APIs similar to Bitcoin Wallet\u2019s APIs to manage CKB?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:")," If you already have UTXO management framework for Bitcoin, you may continue to use it and scan every block of CKB blockchain.If you don\u2019t, you may refer to ",(0,o.kt)("a",{parentName:"p",href:"https://nervosnetwork.github.io/docs-new/docs/reference/cell#tools"},"Cell")," and use the tools to index or query."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Q:")," Which APIs need to be invoked if I want to get transaction lists, transaction balance, initiate transactions and etc."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A:")," You may refer to our ",(0,o.kt)("a",{parentName:"p",href:"https://nervosnetwork.github.io/docs-new/docs/reference/rpc"},"JSON RPC")," document."))}u.isMDXComponent=!0}}]);
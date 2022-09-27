"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7850],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),g=o,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2927:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={id:"debug",title:"Tips for debugging CKB script"},l=void 0,c={unversionedId:"essays/debug",id:"essays/debug",title:"Tips for debugging CKB script",description:"CKB uses RISC-V ISA to implement VM layer and CKB VM is very different from other VMs with hard-code functionality through opcodes. Given the generalized nature of CKB VM, various languages and toolchains can be supported- every language and toolchain will be a bit different and implementers should provide appropriate documentation and support for the community.",source:"@site/docs/essays/debug.md",sourceDirName:"essays",slug:"/essays/debug",permalink:"/docs/essays/debug",draft:!1,tags:[],version:"current",lastUpdatedBy:"Yonghui Lin",lastUpdatedAt:1664241369,formattedLastUpdatedAt:"9/27/2022",frontMatter:{id:"debug",title:"Tips for debugging CKB script"},sidebar:"Essays",previous:{title:"Transaction validation lifecycle",permalink:"/docs/essays/lifecycle"},next:{title:"Tips for profiling CKB script",permalink:"/docs/essays/pprof"}},p={},u=[{value:"Error codes",id:"error-codes",level:2},{value:"Debug syscall",id:"debug-syscall",level:2},{value:"ckb-cli",id:"ckb-cli",level:2},{value:"1. Generate mock-tx template",id:"1-generate-mock-tx-template",level:3},{value:"2. Modify the template",id:"2-modify-the-template",level:3},{value:"3. Complete the template",id:"3-complete-the-template",level:3},{value:"4. Verify the transaction",id:"4-verify-the-transaction",level:3},{value:"Using VM debugger and GDB",id:"using-vm-debugger-and-gdb",level:2},{value:"1. Install ckb-standalone-debugger",id:"1-install-ckb-standalone-debugger",level:3},{value:"2. Start standalone debugger",id:"2-start-standalone-debugger",level:3},{value:"3. Start GDB",id:"3-start-gdb",level:3},{value:"Report bugs",id:"report-bugs",level:2}],d={toc:u};function g(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"CKB uses RISC-V ISA to implement VM layer and CKB VM is very different from other VMs with hard-code functionality through opcodes. Given the generalized nature of CKB VM, various languages and toolchains can be supported- every language and toolchain will be a bit different and implementers should provide appropriate documentation and support for the community."),(0,a.kt)("p",null,"This document introduces several tips about debugging CKB scripts."),(0,a.kt)("h2",{id:"error-codes"},"Error codes"),(0,a.kt)("p",null,"The CKB node only reports an exit code on transaction verification failure; the most straightforward way to distinguish errors is to use a different exit code (between -128 and 127) to represent errors."),(0,a.kt)("p",null,"For example, see the default lock script error codes: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb-system-scripts/wiki/Error-codes"},"secp256k1 error codes")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A common mistake is mixing up lock script errors and type script errors. It is recommended that remove the type script, then run again; if the error still exists, you can make sure the error is being caused by the lock script; otherwise, it is caused by the type script.")),(0,a.kt)("h2",{id:"debug-syscall"},"Debug syscall"),(0,a.kt)("p",null,"When we want to output additional information from the script; we need use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0009-vm-syscalls/0009-vm-syscalls.md#debug"},"debug syscall"),"."),(0,a.kt)("p",null,"By default, the CKB node does not output the debug syscall message, however ",(0,a.kt)("inlineCode",{parentName:"p"},"ckb.toml")," can be configured to enable it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[logger]\nfilter = info,ckb-script=debug\n")),(0,a.kt)("p",null,"You can also choose to run the script under a debugging environment like ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb-cli"},"ckb-cli"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/xxuejie/ckb-standalone-debugger"},"VM debugger"),", or ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jjyr/ckb-contract-tool"},"ckb-contract-tool"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For language / toolchain developers, it is recommended that integrate ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0009-vm-syscalls/0009-vm-syscalls.md#debug"},"debug syscall")," to print the error backtrace if the language supports it. For example: if you are using Rust with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jjyr/ckb-contract-std"},"ckb-contract-std"),", you can see the panic location where the program crashed.")),(0,a.kt)("h2",{id:"ckb-cli"},"ckb-cli"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb-cli"},"ckb-cli")," supports to generate mock transactions and verification under the debugging environment."),(0,a.kt)("h3",{id:"1-generate-mock-tx-template"},"1. Generate mock-tx template"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ckb-cli mock-tx template --lock-arg <your lock-arg> --output-file debug-tx.json\n")),(0,a.kt)("h3",{id:"2-modify-the-template"},"2. Modify the template"),(0,a.kt)("p",null,"Add your script cell to the ",(0,a.kt)("inlineCode",{parentName:"p"},"cell_deps")," and modify the transaction structure to use a lock script or type script."),(0,a.kt)("h3",{id:"3-complete-the-template"},"3. Complete the template"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ckb-cli mock-tx complete --tx-file debug-tx.json\n")),(0,a.kt)("p",null,"This command is used to sign the transaction with the private key according to your lock arg."),(0,a.kt)("h3",{id:"4-verify-the-transaction"},"4. Verify the transaction"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ckb-cli mock-tx verify --tx-file debug-tx.json\n")),(0,a.kt)("p",null,"You will see the verification result and the debug output."),(0,a.kt)("p",null,"Please refer to the ","[transaction RFC]","(",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0022-transaction-structure/"},"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0022-transaction-structure/")," 0022-transaction-structure.md) for constructing a transaction."),(0,a.kt)("h2",{id:"using-vm-debugger-and-gdb"},"Using VM debugger and GDB"),(0,a.kt)("h3",{id:"1-install-ckb-standalone-debugger"},"1. Install ckb-standalone-debugger"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/nervosnetwork/ckb-standalone-debugger\ncd ckb-standalone-debugger/bins\ncargo build --release\n")),(0,a.kt)("h3",{id:"2-start-standalone-debugger"},"2. Start standalone debugger"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/xxuejie/ckb-standalone-debugger"},"ckb-standalone-debugger")," supports a ckb-cli generated template. To debug a script, we indicate the script group type with ",(0,a.kt)("inlineCode",{parentName:"p"},"-g <script type>")," . This indicates the script group we want to debug with the referenced ",(0,a.kt)("inlineCode",{parentName:"p"},"-h <script hash>"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ckb-debugger -l 0.0.0.0:2000 -g type -h <type script hash> -t debug-tx.json\n")),(0,a.kt)("h3",{id:"3-start-gdb"},"3. Start GDB"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run --rm -it -v `pwd`:/code nervos/ckb-riscv-gnu-toolchain:bionic-20191012 bash\n# start gdb\nriscv64-unknown-elf-gdb <path of script binary>\n# connect to debugger server\ntarget remote <ip>:2000\n")),(0,a.kt)("p",null,"You may refer to the tutorial: ",(0,a.kt)("a",{parentName:"p",href:"https://xuejie.space/2019_07_05_introduction_to_ckb_script_programming_validation_model/"},"introduction to CKB script programming")," for more details."),(0,a.kt)("h2",{id:"report-bugs"},"Report bugs"),(0,a.kt)("p",null,"When you find security-related bugs in script, please don't post them on public issues. Instead, try to contact maintainers privately, they can be found on the ",(0,a.kt)("a",{parentName:"p",href:"https://t.me/nervos_ckb_dev"},"CKB dev telegram"),". Responsible disclosure could help maintainers, as well as prevent users from losing funds."),(0,a.kt)("p",null,"When you find security-related bugs in CKB official scripts or CKB VM, join the ",(0,a.kt)("a",{parentName:"p",href:"https://bounty.nervos.org/"},"bug bounty program")," to be rewarded for your valuable contribution!"))}g.isMDXComponent=!0}}]);
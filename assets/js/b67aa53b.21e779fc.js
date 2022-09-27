"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9021],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,f=d["".concat(a,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:i,s[1]=p;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2196:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>p,metadata:()=>c,toc:()=>u});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),s=["components"],p={id:"rules",title:"CKB VM Verification Rules"},a=void 0,c={unversionedId:"essays/rules",id:"essays/rules",title:"CKB VM Verification Rules",description:"When writing a program, it is important to determine the operating environment and runtime behavior, so that the execution structure of the program is in line with the program\u2019s intended behavior. For example: the impact of GIL (Global Interpreter Lock) in Python, the expected execution time of hardware instructions and pipeline planning, etc.",source:"@site/docs/essays/rules.md",sourceDirName:"essays",slug:"/essays/rules",permalink:"/docs/essays/rules",draft:!1,tags:[],version:"current",lastUpdatedBy:"Yonghui Lin",lastUpdatedAt:1664241369,formattedLastUpdatedAt:"9/27/2022",frontMatter:{id:"rules",title:"CKB VM Verification Rules"},sidebar:"Essays",previous:{title:"Tips for profiling CKB script",permalink:"/docs/essays/pprof"},next:{title:"Script dependencies",permalink:"/docs/essays/dependencies"}},l={},u=[{value:"Environment",id:"environment",level:2},{value:"Execution unit",id:"execution-unit",level:3},{value:"Special rules",id:"special-rules",level:3},{value:"Syscall Links",id:"syscall-links",level:3}],d={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When writing a program, it is important to determine the operating environment and runtime behavior, so that the execution structure of the program is in line with the program\u2019s intended behavior. For example: the impact of GIL (Global Interpreter Lock) in Python, the expected execution time of hardware instructions and pipeline planning, etc."),(0,o.kt)("p",null,"We all know that CKB VM is a virtual environment based on the RISC-V instruction set. In addition to this, developers should also know the context of the VM during CKB verification, including some syscalls provided, etc. This article will provide more information about the operation of CKB VM."),(0,o.kt)("h2",{id:"environment"},"Environment"),(0,o.kt)("p",null,"In CKB, each transaction is executed separately, that is, each transaction runs in its own separate VM environment. Though parallel verification of multiple transactions is performed (by the host), there is no multi-threaded execution environment inside of the VM."),(0,o.kt)("h3",{id:"execution-unit"},"Execution unit"),(0,o.kt)("p",null,"When each individual transaction is verified, the scripts will first be separated into groups and then executed sequentially in units of script groups. Each group is created by grouping together transactions that have the same script hash. "),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note that the lock scripts of transaction outputs are not executed during transaction verification.")),(0,o.kt)("p",null,"No matter which script group is being executed, the entirety of transaction data can be accessed by scripts included in that transaction during execution. "),(0,o.kt)("p",null,"An advantage of this design is the group records the index of the cell(s) which belong to the current group. This is equivalent to combining multiple verifications that may exist into one verification. This reduces verification resource consumption and provides a public environment for the data set of the transaction. But this requires the developer to be aware when writing the script that it needs to consider the case of validating multiple cells."),(0,o.kt)("p",null,"This is described here:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"`class ScriptGroup:\n    def __init__(self, script):\n        self.script = script\n        self.input_indices = []\n        self.output_indices = []\n\ndef split_group(tx):\n     lock_groups: Dict[Hash, ScriptGroup] = dict()\n     type_groups: Dict[Hash, ScriptGroup] = dict()\n    for index, input in enumerate(tx.inputs):\n        if lock_groups.get(hash(input.lock)):\n            lock_groups.get(hash(input.lock)).input_indices.append(index)\n        else:\n            script_group = ScriptGroup(input.lock)\n            script_group.input_indices.append(index)\n            lock_groups[hash(input.lock)] = script_group\n        if input.type:\n            if type_groups.get(hash(input.type)):\n                type_groups.get(hash(input.type)).input_indices.append(index)\n            else:\n                script_group = ScriptGroup(input.type)\n                script_group.input_indices.append(index)\n                type_groups[hash(input.type)] = script_group\n    for index, output in enumerate(tx.outputs):\n        if output.type:\n            if type_groups.get(hash(input.type)):\n                type_groups.get(hash(input.type)).output_indices.append(index)\n            else:\n                script_group = ScriptGroup(input.type)\n                script_group.output_indices.append(index)\n                type_groups[hash(input.type)] = script_group\n    return list(lock_groups.values()) + list(type_groups.values())\n\ndef run():\n    for group in split_group(tx):\n        if vm_run(group) != 0:\n            return error()\n`\n")),(0,o.kt)("p",null,"When each script group is executed, the execution cost of the scripts is recorded and the sum of all resource consumption is compared with the ",(0,o.kt)("inlineCode",{parentName:"p"},"max_block_cycles")," allowed upper limit."),(0,o.kt)("p",null,"Suppose there is a transaction as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"`Transaction {\n    input: [cell_1 {lock: A, type: B}, cell _2 {lock: A, type: B}, cell_3 {lock: C, type: None}]\n    output: [cell_4 {lock: D, type: B}, cell_5 {lock: C, type: B}, cell_6 {lock: G, type: None}, cell_7(lock: A, type: F)]\n}`\n")),(0,o.kt)("p",null,"it will be grouped as such:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"`[\n    group(A, input:[0, 1], output:[]), \n    group(C, input:[2], output:[]), \n    group(B, input:[0, 1], output:[0, 1]),\n    group(F, input:[], output:[3])\n]`\n")),(0,o.kt)("p",null,"The syscall of the VM can load these corresponding cells through ",(0,o.kt)("inlineCode",{parentName:"p"},"group(input/output index)")," to complete one-time verification."),(0,o.kt)("p",null,"CKB will execute all script groups, which are then verified based on return value. This follows the convention of process exit status in Unix-like systems: a return value of zero is a verification pass, while other return values are verification exceptions. "),(0,o.kt)("p",null,"Note that when the script is executed, the script itself does not know if it is a type or lock script. The script will need to figure this out itself, by checking args or witness data."),(0,o.kt)("h3",{id:"special-rules"},"Special rules"),(0,o.kt)("p",null,"Most of the contracts are verified as above, except for one type of contract, which is the TypeId contract. This contract employs special rules, written directly in the script code, and does not start the VM. For more information, see the code ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb/blob/44b0d3595c31a29aef81e74360ba8613cd0dd27f/script/src/type_id.rs"},"here")," and a tutorial about creation of TypeId contracts ",(0,o.kt)("a",{parentName:"p",href:"https://xuejie.space/2020_02_03_introduction_to_ckb_script_programming_type_id/"},"here"),"."),(0,o.kt)("h3",{id:"syscall-links"},"Syscall Links"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0009-vm-syscalls/0009-vm-syscalls.md"},"Sycall RFC")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb-system-scripts/blob/865f4d7697cc979d62111e49f2fb12a3607a4eb9/c/ckb_syscalls.h"},"Syscall system script (C code)")))}h.isMDXComponent=!0}}]);
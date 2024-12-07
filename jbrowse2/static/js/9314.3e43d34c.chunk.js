"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[9314,9870],{59870:(e,t,n)=>{n.r(t),n.d(t,{bufferToString:()=>r,parseCsvBuffer:()=>u,parseTsvBuffer:()=>l});var a=n(99546);function r(e){return new TextDecoder("utf8",{fatal:!0}).decode(e)}async function s(e,t={}){return(await n.e(2847).then(n.t.bind(n,82847,23)).then((e=>e.default)))({noheader:!0,output:"csv",...t}).fromString(r(e))}function o(e,t,n){const r=e.rows[0].cells[t].text||"";let s,o="Text";try{s=(0,a.parseLocString)(r,n)}catch(e){}return s?.refName&&"number"==typeof s.start?o="LocString":/^\d+(\.\d+)?$/.test(r)&&(o="Number"),o}function c(e,t={}){const{hasColumnNameLine:n=!1,columnNameLineNumber:r=1,isValidRefName:s=()=>!1,selectedAssemblyName:c}=t;let u=0;const l={isLoaded:!0,rows:e.map(((e,t)=>{const a=t+(n?0:1);return e.length>u&&(u=e.length),{id:String(a),cells:e.map(((e,t)=>({columnNumber:t,text:e})))}}))},d={};if(n&&void 0!==r){const[e]=l.rows.splice(r-1,1);e&&e.cells.forEach(((e,t)=>{d[t]=e.text||""}))}const i=[],m=[];for(let e=0;e<u;e+=1){m.push(e);const t=o(l,e,s);if("LocString"===t)for(const t of l.rows){const n=t.cells[e];n.extendedData=(0,a.parseLocString)(n.text,s)}i[e]={name:d[e],dataType:{type:t}}}return{rowSet:l,columnDisplayOrder:m,hasColumnNames:!!n,columns:i,assemblyName:c}}async function u(e,t){return c(await s(e),t)}async function l(e,t){return c(await s(e,{delimiter:"\t"}),t)}},99314:(e,t,n)=>{n.r(t),n.d(t,{parseVcfBuffer:()=>c,splitVcfFileHeaderAndBody:()=>u});var a=n(9502),r=n(79230),s=n(59870);const o=[{name:"CHROM",type:"Text"},{name:"POS",type:"Number"},{name:"ID",type:"Text"},{name:"REF",type:"Text"},{name:"ALT",type:"Text"},{name:"QUAL",type:"Number"},{name:"FILTER",type:"Text"},{name:"INFO",type:"Text"},{name:"FORMAT",type:"Text"}];function c(e,t={}){const{selectedAssemblyName:n}=t;let{header:c,body:l}=u((0,s.bufferToString)(e));const d=[],i=new a.A({header:c});c="",l.split(/\n|\r\n|\r/).forEach(((e,t)=>{/\S/.test(e)&&d.push(function(e,t,n){const a=e.parseLine(t),s=new r._({variant:a,parser:e,id:`vcf-${n}`}),o=t.split("\t").map((e=>"."===e?"":e));return 8===o.length&&o.push(""),{id:String(n+1),extendedData:{vcfFeature:s.toJSON()},cells:o.map(((e,t)=>({columnNumber:t,text:e})))}}(i,e,t))})),l="";const m={isLoaded:!0,rows:d},f=[],p=[];for(let e=0;e<o.length;e+=1)f.push(e),p[e]={name:o[e].name,dataType:{type:o[e].type}};for(let e=0;e<i.samples.length;e+=1){const t=o.length+e;f.push(t),p[t]={name:i.samples[e],dataType:{type:"Text"}}}return f.push(f.length),p.unshift({name:"Location",dataType:{type:"LocString"},isDerived:!0,derivationFunctionText:"jexl:{text:row.extendedData.vcfFeature.refName+':'\n\n    +row.extendedData.vcfFeature.start+'..'+row.extendedData.vcfFeature.end, extendedData:\n\n    {refName:row.extendedData.vcfFeature.refName,start:row.extendedData.vcfFeature.start,end:row.extendedData.vcfFeature.end}}"}),{rowSet:m,columnDisplayOrder:f,hasColumnNames:!0,columns:p,assemblyName:n}}function u(e){let t,n=0;for(;n<e.length;n+=1){const a=e[n];if("\n"===t&&"#"!==a)break;t=a}return{header:e.slice(0,Math.max(0,n)),body:e.slice(n)}}}}]);
//# sourceMappingURL=9314.3e43d34c.chunk.js.map
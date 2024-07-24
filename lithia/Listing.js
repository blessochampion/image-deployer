"use strict";(()=>{var e="data",l={positionsCount:`[${e}=positions-count]`,viewOpportunities:`[${e}=view-opportunities]`,usLoadAll:`[${e}=us-load-all-container]`,count:`[${e}=count]`,locationCount:`[${e}=location-count]`,locationInput:`[${e}=location-input]`,titleInput:`[${e}=title-input]`,searchButton:`[${e}=search-btn]`,name:`[${e}=name]`,input:`[${e}=input]`,checkbox:`[${e}=checkbox]`,loadMore:`[${e}=load-more]`,title:`[${e}=title]`,time:`[${e}=time]`,location:`[${e}=location]`,description:`[${e}=description]`,jobRequisitionId:`[${e}=job-requisition-id]`,subCategory:o=>`[${e}-sub-category="${o}"]`};var g="https://cors-middleware.lithia.workers.dev/";var L=o=>J(o,"State");var J=(o,t)=>{let i={};return o.filter(n=>n[t]).forEach(n=>{let r=n[t]||"";i[r]||(i[r]=[]),i[r].push(n)}),i};var T=(o,t=100)=>o.length>100?o.substring(0,t)+"...":o;var m=class{constructor(){this.jobs=null}async fetchJobs(){if(this.jobs)return Promise.resolve(this.jobs);let{Report_Entry:t}=await this.fetchJobsFromAPI()||{};return t&&(this.jobs=t),Promise.resolve(this.jobs)}async fetchJobsFromAPI(){try{return await(await fetch(`${g}jobs`)).json()}catch(t){return console.error("Error fetching jobs",t),null}}};window.Webflow||(window.Webflow=[]);window.Webflow.push(async()=>{let t=await new m().fetchJobs();if(t){let i=window.location.search,n=new URLSearchParams(i).get("id");if(!n){console.error("Error fetching job id");return}let r=t.find(c=>c.jobRequisitionId===n);if(!r){console.error("Error fetching job");return}let{title:y,timeType:w,jobDescription:u,jobRequisitionId:b,City:p,State:a}=r,d=document.querySelector(l.title);d&&(d.innerHTML=y||"");let S=document.querySelector(l.time);S&&(S.innerHTML=w||"");let f=document.querySelector(l.location);f&&(f.innerHTML=`${p||""} ${a?",":""} ${a||""}`);let h=document.querySelector(l.description);h&&(h.innerHTML=u||"");let E=document.querySelector(l.jobRequisitionId);E&&(E.innerHTML=b||""),document.querySelectorAll(".apply-now-btn").forEach(c=>{c.addEventListener("click",()=>{window.open(r.External_Apply_URL,"_blank")})}),document.querySelector(".view-all-btn").addEventListener("click",()=>{window.location.href=`${window.location.origin}/opportunities?similar_jobs=${b}`});let j=L(t)[a||""].filter(c=>c.jobRequisitionId!==n).filter(c=>c.jobDescription);$(j)}else console.error("Error fetching jobs")});var $=o=>{let t=document.querySelectorAll(".listing-similar-grid-card"),i=new DOMParser;t.forEach((s,n)=>{let r=s.querySelector(".similar-jobs-location"),{title:y,jobDescription:w,jobRequisitionId:u,City:b,State:p}=o[n];r.innerHTML=`${b||""} ${p?",":""} ${p||""}`;let a=s.querySelector(".similar-jobs-title");a.innerHTML=y||"",a.addEventListener("click",()=>{window.location.href=`${window.location.origin}/listing?id=${u}`});let d=s.querySelector(".similar-jobs-description");d.innerHTML=T(i.parseFromString(w||"","text/html").body.innerHTML),s.querySelector(".similar-jobs-read-more").addEventListener("click",()=>{window.open(`${window.location.origin}/listing?id=${u}`,"_blank")}),s.addEventListener("click",()=>{window.location.href=`${window.location.origin}/listing?id=${u}`})})};})();
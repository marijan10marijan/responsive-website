(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const a=document.querySelector(".hamburger"),u=document.querySelector(".nav__list"),f=document.querySelector(".header"),m=document.querySelectorAll(".nav__link"),d=()=>{a.classList.toggle("active"),u.classList.toggle("active"),f.classList.toggle("active")};m.forEach(s=>{s.addEventListener("click",d)});a.addEventListener("click",d);const n=document.querySelectorAll(".services__data-title"),i=document.querySelectorAll(".services__data-content"),g=n.length,v=s=>{for(let r=0;r<g;r++)s.target.textContent===i[r].dataset.visibility&&(i.forEach(o=>{o.classList.remove("active")}),n.forEach(o=>{o.classList.remove("active")}),i[r].classList.toggle("active"),s.target.classList.add("active"))};n.forEach(s=>{s.addEventListener("click",v)});

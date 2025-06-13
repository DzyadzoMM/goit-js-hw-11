import{a as u,S as d,i}from"./assets/vendor-DKtxmrwh.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f="50828964-e021381452ec656de38c2c47d",m="https://pixabay.com/api/";function y(o){const s={key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return u.get(m,{params:s}).then(t=>t.data)}const g=new d(".gallery a",{captionsData:"alt",captionDelay:250}),c=document.querySelector(".gallery"),p=document.querySelector(".loader");function h(o){const s=o.map(t=>`
        <li class="gallery-item">
            <a href="${t.largeImageURL}">
                <img src="${t.webformatURL}" alt="${t.tags}" class="image"/>
            </a>
            <div class="description">
                <p class="text">Likes <span class="span">${t.likes}</span></p>
                <p class="text">Views <span class="span">${t.views}</span></p>
                <p class="text">Comments <span class="span">${t.comments}</span></p>
                <p class="text">Downloads <span class="span">${t.downloads}</span></p>
            </div>
        </li>`).join("");c.insertAdjacentHTML("beforeend",s),g.refresh()}function L(){c.innerHTML=""}function w(){p.style.display="block"}function b(){p.style.display="none"}const l=document.querySelector(".form");document.querySelector(".gallery");l.addEventListener("submit",o=>{o.preventDefault();const s=o.target.elements["search-text"].value.trim();if(!s){i.warning({title:"warning",message:"Please enter a search term",position:"topRight"});return}L(),w(),y(s).then(t=>{const{hits:n}=t;n.length===0?i.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):h(n)}).catch(t=>{i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{b(),l.reset()})});
//# sourceMappingURL=index.js.map

import{a as g,S as P,i as l}from"./assets/vendor-frHSA4Lh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const f=(o,t)=>{g.defaults.baseURL="https://pixabay.com/api/";const a="50578368-dd70245762fcec5298974d7f8",i=new URLSearchParams({key:a,image_type:"photo",orientation:"horizontal",safesearch:!0,q:o,page:t,per_page:I});return g.get(`?${i}`)},x={gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},{gallery:y,loader:b}=x,E=new P(".gallery a",{overlay:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:100}),L=o=>{const t=o.map(({webformatURL:a,largeImageURL:i,tags:e,likes:r,views:c,comments:M,downloads:q})=>`<a href="${i}">
        <img src="${a}" alt="${e}"/>        
        <ul class="imagesData">
          <li class="liImageData">
            <h3 class="h3ImageData">likes</h3>
            <p class="pImageData">${r}</p>
          </li>
          <li class="liImageData">
            <h3 class="h3ImageData">views</h3>
            <p class="pImageData">${c}</p>
          </li>
          <li class="liImageData">
            <h3 class="h3ImageData">comments</h3>
            <p class="pImageData">${M}</p>
          </li>
          <li class="liImageData">
            <h3 class="h3ImageData">downloads</h3>
            <p class="pImageData">${q}</p>
          </li>
        </ul>
      </a>`).join("");y.insertAdjacentHTML("beforeend",t),E.refresh()},$=()=>{y.innerHTML=""},v=()=>{b.classList.remove("isHidden")},s=()=>{b.classList.add("isHidden")},R=()=>{D.classList.remove("isHidden")},A=()=>{D.classList.add("isHidden")},H={input:document.querySelector("input"),btnSubmit:document.querySelector(".btnSubmit"),form:document.querySelector(".form"),btnLoadMore:document.querySelector(".btnLoadMore")},{input:B,btnSubmit:u,form:h,btnLoadMore:p}=H,D=p;let d="",n=1;const I=15;let m,S;function O(o){return d=o.target.value}B.addEventListener("input",O);async function W(o){if($(),n=1,o.preventDefault(),!d.trim()){s();return}v(),u.setAttribute("disabled"," ");const{data:t}=await f(d,n);try{if(!t.hits.length){_();return}L(t.hits),S=2*document.querySelector("a").getBoundingClientRect().height,s()}catch(a){l.error({title:"Error",message:"❌"+a,position:"topRight",maxWidth:350}),s()}m=Math.ceil(t.totalHits/I),m>n?R():l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),h.reset(),u.removeAttribute("disabled")}h.addEventListener("submit",W);async function w(o){o.preventDefault(),n+=1,v();const{data:t}=await f(d,n);try{L(t.hits),window.scrollBy({left:0,top:S,behavior:"smooth"}),s()}catch(a){l.error({title:"Error",message:"❌"+a,position:"topRight",maxWidth:350}),s()}m===n&&(l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),s(),A(),p.removeEventListener("click",w)),u.removeAttribute("disabled")}p.addEventListener("click",w);function _(){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:350}),s(),h.reset()}
//# sourceMappingURL=index.js.map

const e=document.querySelector(".breed-select");fetch("https://api.thecatapi.com/v1/breeds").then((e=>{if(!e.ok)throw new Error;return e.json()})).then((t=>{const o=t.map((({id:e,name:t}={})=>`<option value="${e}">${t}</option>`)).join("");e.insertAdjacentHTML("afterbegin",o)})).catch((e=>console.log(e)));
//# sourceMappingURL=index.2f38a438.js.map

import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as t}from"./assets/vendor-77e16229.js";const a="/goit-js-hw-10/assets/bi_check2-circle-286069d5.svg",n="/goit-js-hw-10/assets/bi_x-octagon-4f06a8ee.svg",l={form:document.querySelector(".form"),inputDelay:document.querySelector(".inputDelay")};l.form.addEventListener("submit",c);function c(o){o.preventDefault();const s=o.target.delay.value,r=o.target.state.value;new Promise((e,i)=>{setTimeout(()=>{r==="fulfilled"?e(s):i(s)},s)}).then(e=>{t.show({backgroundColor:"green",message:`Fulfilled promise in ${e} ms`,messageColor:"#fff",messageSize:"16",imageWidth:302,close:!0,closeOnEscape:!0,closeOnClick:!0,progressBar:!0,progressBarColor:"#b51b1b",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight",iconUrl:a,iconColor:"#FAFAFB"})}).catch(e=>{t.show({backgroundColor:"red",message:`Rejected promise  in ${e} ms`,iconUrl:n,messageColor:"#fff",messageSize:"16",imageWidth:302,close:!0,closeOnEscape:!0,closeOnClick:!0,progressBar:!0,progressBarColor:"#b51b1b",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"})})}
//# sourceMappingURL=commonHelpers2.js.map

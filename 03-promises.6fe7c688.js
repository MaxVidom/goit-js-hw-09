!function(){var o={form:document.querySelector(".form")};function e(o,e){return new Promise((function(n,t){var r=Math.random()>.3;setTimeout((function(){r?n({position:o,delay:e}):t({position:o,delay:e})}),e)}))}o.form.addEventListener("submit",(function(n){n.preventDefault();for(var t=Number(o.form.amount.value),r=Number(o.form.step.value),i=Number(o.form.delay.value),a=1;a<=t;a+=1)e(a,i).then((function(o){var e=o.position,n=o.delay;console.log("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms"))})).catch((function(o){var e=o.position,n=o.delay;console.log("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))})),i+=r}))}();
//# sourceMappingURL=03-promises.6fe7c688.js.map
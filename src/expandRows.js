        const expandRows=(function(e){
            console.log(e.target);
            const parentElement = e.target.parentNode;
            const targetElement1 = parentElement.nextElementSibling;
            const targetElement2=targetElement1.nextSibling;
            const targetElement3=targetElement2.nextSibling;
            if(e.target.textContent==="+"){
                targetElement1.classList.remove("hidden");
                targetElement2.classList.remove("hidden");
                targetElement3.classList.remove("hidden");
                e.target.textContent="-";
            } else {
                targetElement1.classList.add("hidden");
                targetElement2.classList.add("hidden");
                targetElement3.classList.add("hidden");
                e.target.textContent="+"
            }
         });

         export {expandRows};
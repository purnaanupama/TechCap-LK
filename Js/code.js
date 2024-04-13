document.addEventListener('DOMContentLoaded',()=>{
    const codeBlock = document.getElementById('code');
    const copyButton = document.getElementById("copy-button");

    const copyTextHandler =()=>{
      const text = codeBlock.innerText
      navigator.clipboard.writeText(text).then(
        ()=>{
            copyButton.innerHTML = "Copied!"
            setTimeout(()=>{
               
                copyButton.innerHTML="copy"
              },1000)
        },
       
        
        ()=>{
            console.log("Error writing to the clipboard");
        }
      )
    };
    copyButton.addEventListener('click',copyTextHandler);
})

document.addEventListener('DOMContentLoaded',()=>{
  const codeBlock = document.getElementById('code1');
  const copyButton = document.getElementById("copy-button1");

  const copyTextHandler =()=>{
    const text = codeBlock.innerText
    navigator.clipboard.writeText(text).then(
      ()=>{
          copyButton.innerHTML = "Copied!"
          setTimeout(()=>{
             
              copyButton.innerHTML="copy"
            },1000)
      },
     
      
      ()=>{
          console.log("Error writing to the clipboard");
      }
    )
  };
  copyButton.addEventListener('click',copyTextHandler);

})
document.addEventListener('DOMContentLoaded',()=>{
  const codeBlock = document.getElementById('code2');
  const copyButton = document.getElementById("copy-button2");

  const copyTextHandler =()=>{
    const text = codeBlock.innerText
    navigator.clipboard.writeText(text).then(
      ()=>{
          copyButton.innerHTML = "Copied!"
          setTimeout(()=>{
             
              copyButton.innerHTML="copy"
            },1000)
      },
     
      
      ()=>{
          console.log("Error writing to the clipboard");
      }
    )
  };
  copyButton.addEventListener('click',copyTextHandler);
})

let mybutton = document.querySelector(".TopToBottom");

window.addEventListener('scroll',()=>{
  if(window.pageYOffset > 500){
  mybutton.style.visibility = "visible"
  }else if(window.pageYOffset < 500){
    mybutton.style.visibility = "hidden"
  }
});

  mybutton.addEventListener('click',()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
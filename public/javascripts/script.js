const fileI = document.querySelector("#fileI");
    const folderI = document.querySelector("#folderI");
    const file = document.querySelector("#file");
    const folder = document.querySelector("#folder");
    
    const onOff = () => {
      document.querySelectorAll("form").forEach((elm) => {
        elm.style.display = "none"
      })
    }

    fileI.addEventListener("click", () => {
      onOff();
      file.style.display = "initial"
    })
    folderI.addEventListener("click", () => {
      onOff();
      folder.style.display = "initial"
    })
    window.addEventListener("keydown", (detail) => {
      if(detail.keyCode === 27){
        onOff();
        document.querySelectorAll("input").forEach((elm) => {
        elm.value = "";
      })
      }
    })
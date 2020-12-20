let HelperFunction = {}

HelperFunction.ConvertURLImageToBase64 = url => {
    
    return new Promise((resolve, reject) => {
       

        try {
          let img = new Image();
          img.crossOrigin = 'Anonymous';
          img.onload = function() {
            let canvas = document.createElement('CANVAS');
            let ctx = canvas.getContext('2d');
            let dataURL;
            canvas.height = this.height;
            canvas.width = this.width;
            ctx.drawImage(this, 0, 0);
            dataURL = canvas.toDataURL();
            resolve(dataURL);
            canvas = null;
          };
        
          img.src = url;
        } catch (error) {
          console.log(error, "<<<<<<<<<<<<<<");
          
          reject(error)
        }
   })
}

HelperFunction.Capitalize = (word) => {
  let arrWord = word.split("-").map(a =>  a[0].toUpperCase() + a.substr(1))
  return arrWord.join(" ")
}

HelperFunction.CapitalizeNoDash = (word) => {
  let result = word.replace( /([A-Z])/g, " $1" );
  let finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult
}






export default HelperFunction;
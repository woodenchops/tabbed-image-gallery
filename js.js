let link = document.querySelectorAll('a');
    let imageContainer = document.querySelector('.image-container');
    let images = document.querySelector('.image-container img');
    let localPath;
    
    
    let imagesName = [ // array of image names 
      
        {
            "album1": ["pexels-photo-412537.jpeg", "pexels-photo-748898.jpeg", "pexels-photo-1313191.jpeg"]
        },
        
        {
            "album2": ["pexels-photo-426893.jpeg", "pexels-photo-573241.jpeg", "pexels-photo-1139370.jpeg"]
        },
        
        {
            "album3": ["pexels-photo-58625.jpeg", "pexels-photo-1308684.jpeg", "pexels-photo-1308754.jpeg"]
        }
        
    ];
    
    
    function deleteImages() { // delete any images that were in the .image-container 
        
        if(imageContainer.childElementCount > 0) { // check if .image-container has any children - if so, delete them. 
        
            images.forEach((img) => {
                imageContainer.removeChild(img);
            }); 
            
        }
    }
    
    
    
    function createImg(src) { // after the deleteImages function runs, populate the .image-container with new images 
        
            let img = document.createElement("img");
            img.src = src;
            imageContainer.appendChild(img);
    
    }
    
    
    link.forEach((link) => { // loop through <a> tags and create click event on each 
        link.addEventListener('click', () => {
            
            switch(link.textContent) { // check name of link clicked 
                case "image 1":
    
                    deleteImages();
                    localPath = "/images/album1/"; // folder directory path to album 1
                    for (let i = 0; i < imagesName.length; i++) {
                        let imageURL = imagesName[i].album1; // (3) ["pexels-photo-412537.jpeg", "pexels-photo-748898.jpeg", "pexels-photo-1313191.jpeg"]
                        for (let n = 0; n < imageURL.length; n++) {
                            createImg(localPath + imageURL[n]); // join folder directory with image name to create img src attr 
                        }
                    }
                    
                    
                    break;
                case "image 2":
                    
                        deleteImages();
                        localPath = "/images/album2/";
                        for (let i = 0; i < imagesName.length; i++) {
                            let imageURL = imagesName[i].album2; /* checked debugger - get error: "js.js:69 Uncaught TypeError: Cannot read property 'length' of undefined
                                                                  at HTMLAnchorElement.link.addEventListener (js.js:69)"*/
                            for (let n = 0; n < imageURL.length; n++) {
                                createImg(localPath + imageURL[n]);
                            }
                        }
                    
                    
                    
                    
    
                    break;
                case "image 3":
    
                    deleteImages();
                    localPath = "/images/album3/";
                    for (let i = 0; i < imagesName.length; i++) {
                        let imageURL = imagesName[i].album3; /* checked debugger - get error:  js.js:85 Uncaught TypeError: Cannot read property 'length' of undefined
                                                              at HTMLAnchorElement.link.addEventListener (js.js:85)*/
                        for (let n = 0; n < imageURL.length; n++) {
                            createImg(localPath + imageURL[n]);
                        }
                    }
                    
                    
                    
                    break;
            }
           
        });
    });








var links = document.querySelectorAll('a');
    var imageContainer = document.querySelector('.image-container');
    var localPath;
    
    
    var imagesName = { // array of image names 
      
            "album1": ["pexels-photo-412537.jpeg", "pexels-photo-748898.jpeg", "pexels-photo-1313191.jpeg"],
        
            "album2": ["pexels-photo-426893.jpeg", "pexels-photo-573241.jpeg", "pexels-photo-1139370.jpeg"],
        
            "album3": ["pexels-photo-58625.jpeg", "pexels-photo-1308684.jpeg", "pexels-photo-1308754.jpeg"]
        
    };
    
    

        
    function createImg(src) { // after the deleteImages function runs, populate the .image-container with new images 
        
            var img = document.createElement("img");
            img.src = src;
            imageContainer.appendChild(img);
    
    }





    function deleteImages() { // delete any images that were in the .image-container 
        
        var images = document.querySelectorAll('.image-container img');
        
        if(imageContainer.childElementCount > 0) { // check if .image-container has any children - if so, delete them. 
        
            images.forEach((img) => {
                imageContainer.removeChild(img);
            }); 
            
        }
    }


    
    
    links.forEach((link) => { // loop through <a> tags and create click event on each 
        link.addEventListener('click', () => {
            
            switch(link.textContent) { // check name of link clicked 
                case "image 1":
    
                    deleteImages();
                    localPath = "/images/album1/"; // folder directory path to album 1
                    for (let i = 0; i < imagesName.album1.length; i++) {
                            createImg(localPath + imagesName.album1[i]); // join folder directory with image name to create img src attr 
                    }
                    
                    
                    break;
                case "image 2":
                    
                        deleteImages();
                        localPath = "/images/album2/";  // folder directory path to album 2
                    for (let i = 0; i < imagesName.album2.length; i++) {
                            createImg(localPath + imagesName.album2[i]); // join folder directory with image name to create img src attr 
                    }
                    
                    
                    
                    
    
                    break;
                case "image 3":
    
                    deleteImages();
                    localPath = "/images/album3/";  // folder directory path to album 3
                  for (let i = 0; i < imagesName.album3.length; i++) {
                                createImg(localPath + imagesName.album3[i]); // join folder directory with image name to create img src attr 
                        }
                    
                    
                    
                    break;
            }
           
        });
    });
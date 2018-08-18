(function() {
    let links = document.querySelectorAll('a'); // grab all <a> tags that trigger the image gallery
    let imageContainer = document.querySelector('.image-container'); // grab the div that will contain the imahges
    let localPath; // create an undefined variable that will later create the first part of the path to each image
    
    
    let imagesName = { // array of image names 
      
            "album1": ["pexels-photo-412537.jpeg", "pexels-photo-748898.jpeg", "pexels-photo-1166418.jpeg"],
        
            "album2": ["pexels-photo-426893.jpeg", "pexels-photo-573241.jpeg", "pexels-photo-1139370.jpeg"],
        
            "album3": ["pexels-photo-58625.jpeg", "pexels-photo-1308684.jpeg", "pexels-photo-1308754.jpeg"]
        
    };
    
    

        
    function createImg(src) { // after the deleteImages function runs, populate the .image-container with new images 
        
            let img = document.createElement("img");
            img.src = src;
            imageContainer.appendChild(img);
    
    }


    function deleteImages() { // delete any images that were in the .image-container 
        
        let images = document.querySelectorAll('.image-container img');
        
        if(imageContainer.childElementCount > 0) { // check if .image-container has any children - if so, delete them. 
        
            images.forEach((img) => {
                imageContainer.removeChild(img);
            }); 
            
        }
    }
    
    
        localPath = "/images/album1/"; // this code will automatically generate images from album 1 when the page loads 
        for (let i = 0; i < imagesName.album1.length; i++) {
            createImg(localPath + imagesName.album1[i]);
        }

    
    links.forEach((link) => { // loop through <a> tags and create click event on each 
        link.addEventListener('click', () => {

            switch (link.textContent) { // check name of link clicked 
                case "album 1":

                    deleteImages();
                    localPath = "/images/album1/"; // folder directory path to album 1
                    for (let i = 0; i < imagesName.album1.length; i++) {
                        createImg(localPath + imagesName.album1[i]); // join folder directory with image name to create img src attr 
                    }


                    break;
                case "album 2":

                    deleteImages();
                    localPath = "/images/album2/"; // folder directory path to album 2
                    for (let i = 0; i < imagesName.album2.length; i++) {
                        createImg(localPath + imagesName.album2[i]); // join folder directory with image name to create img src attr 
                    }


                    break;
                case "album 3":

                    deleteImages();
                    localPath = "/images/album3/"; // folder directory path to album 3
                    for (let i = 0; i < imagesName.album3.length; i++) {
                        createImg(localPath + imagesName.album3[i]); // join folder directory with image name to create img src attr 
                    }

                    break;
                    
                case "all": // display all images at once
                    deleteImages();
                    let album1path = "/images/album1/";
                    let album2path = "/images/album2/";
                    let album3path = "/images/album3/";
                    for (let i = 0; i < imagesName.album1.length; i++) {
                        createImg(album1path + imagesName.album1[i]); // join folder directory with image name to create img src attr 
                    }
                    
                    for (let i = 0; i < imagesName.album2.length; i++) {
                        createImg(album2path + imagesName.album2[i]); // join folder directory with image name to create img src attr 
                    }
                    
                    for (let i = 0; i < imagesName.album3.length; i++) {
                        createImg(album3path + imagesName.album3[i]); // join folder directory with image name to create img src attr 
                    }
                    break;
            }

        });
    });
    
    })();
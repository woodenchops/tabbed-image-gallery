(function() {
    let links = document.querySelectorAll('a'); // grab all <a> tags that trigger the image gallery
    let imageContainer = document.querySelector('.image-container'); // grab the div that will contain the images
    
    
    let imagesName = { // array of image names 
      
            "album1": ["/images/album1/pexels-photo-412537.jpeg", 
                       "/images/album1/pexels-photo-748898.jpeg", 
                       "/images/album1/pexels-photo-1166418.jpeg"],
        
            "album2": ["/images/album2/pexels-photo-426893.jpeg", 
                       "/images/album2/pexels-photo-573241.jpeg", 
                       "/images/album2/pexels-photo-1139370.jpeg"],
        
            "album3": ["/images/album3/pexels-photo-58625.jpeg", 
                       "/images/album3/pexels-photo-1308684.jpeg", 
                       "/images/album3/pexels-photo-1308754.jpeg"]
        
    };
    
    
    function deleteImages() { // delete any images that were in the .image-container 

        let images = document.querySelectorAll('.image-container img');

        if (imageContainer.childElementCount > 0) { // check if .image-container has any children - if so, delete them. 

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
    
    
 // this code will automatically generate images from album 1 when the page loads 
        for (let i = 0; i < imagesName.album1.length; i++) {
            createImg(imagesName.album1[i]);
        }

    
    links.forEach((link) => { // loop through <a> tags and create click event on each 
        link.addEventListener('click', (e) => {
            e.preventDefault();

            switch (link.textContent) { // check name of link clicked 
                case "album 1": // link 1 text

                    deleteImages(); // delete all images that were prev there

                    for (let i = 0; i < imagesName.album1.length; i++) {
                        createImg(imagesName.album1[i]); // create img src attr 
                    }


                    break;
                case "album 2": // link 2 text

                    deleteImages(); // delete all images that were prev there 

                    for (let i = 0; i < imagesName.album2.length; i++) {
                        createImg(imagesName.album2[i]); // create img src attr
                    }


                    break;
                case "album 3": // link 3 text

                    deleteImages(); // delete all images that were prev there

                    for (let i = 0; i < imagesName.album3.length; i++) {
                        createImg(imagesName.album3[i]); // create img src attr
                    }

                    break;
                    
                case "all": // // link 4 text - display all images at once
                    deleteImages(); // delete all images that were prev there
                    
                    // concat all arrays together, so that you can loop through all images at once.
                    
                    let allImagesArray = imagesName.album1.concat(imagesName.album2, imagesName.album3);

                    for(let i = 0; i < allImagesArray.length; i++) {
                        createImg(allImagesArray[i]);
                    }
                    

                    break;
            }

        });
    });
    
    })();
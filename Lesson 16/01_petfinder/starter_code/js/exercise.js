function selectPet(petType){

    // Get the specific pet data set
    const thePet = petData[petType];
    // Set the title
    document.querySelector(".petDisplayName").innerText = thePet.displayName;

    // Empty the specification data
    document.querySelector(".petsDataSpecs").innerHTML = "";

    let listData = '';
    // Add the space required, size, weight
    
    listData += "<dt>Space Required</dt>";
    listData += "<dd>" + thePet.spaceRequired + "</dd>";
    
    listData += "<dt>Weight</dt>";
    listData += "<dd>" + thePet.weight + "</dd>";

    listData += "<dt>Size</dt>";
    listData += "<dd>" + thePet.size + "</dd>";

    // Add logic to add the trainability and lap size images
    listData += "<dt>Trainability</dt>";
        if(thePet.trainability == true){
            listData += "<dd><img src='./img/200px-Gnome-emblem-default.svg.png'></dd>";
        }
        else{
            listData += "<dd><img src='./img/200px-Gnome-emblem-unreadable.svg.png'></dd>";
        }

    // Add the foods (may require loop)
    listData += "<dt>Foods</dt>";
    listData += "<dd><ul>";
    for (let i=0;i<thePet.foods.length;i++){
        listData += "<li>" + thePet.foods[i]+ "</li>"
    }



    listData += "</ul></dd>";
   document.querySelector(".petsDataSpecs").innerHTML = listData;

    // Update the images

        //set the big image first
    document.querySelector(".photoLarge").setAttribute("src",thePet.images[0].img);
    document.querySelector(".photoLarge").setAttribute("alt",thePet.images[0].alt);
        //add thumbnails
        let theThumbnails = "";

        for(let i=0;i<thePet.images.length;i++){
            theThumbnails += "<a href=\""+ thePet.images[i].img + "\"><img src='" + thePet.images[i].thumb + "' alt='" + thePet.images[i].thumb + "'/></a>";
    

        //click event
        
  

        // Apply the click event to thumbnails (note - this will likely need to be applied to the a and not the img direclty)
            let theThumbnailsTag = document.querySelectorAll('.thumbHaus > a');
            for(let i=0;i<theThumbnailsTag.length; i++){
                theThumbnailsTag[i].addEventListener('click',function(e){
                        //get href of the A this is our big image
                        e.preventDefault();
                   
                        let theBigImageURL = this.getAttribute('href');

                        let theAlt = this.querySelector('photoThumb').getAttribute('alt');

                        document.querySelector(".photoLarge").setAttribute("src",theBigImageURL);
                        document.querySelector(".photoLarge").setAttribute("alt",theAlt);
                        
                });
            }
    // Empty the ideal for
    document.querySelector(".idealFor").innerHTML = "";
    // Insert the ideal for
    let idealOwner = "";
    for (let i=0; i<listData.idealOwner.length;i++){
        idealOwner += "<li>"+listData.idealOwner[i]+"</li>";
    }


    // Empty the Adoption Groups
    document.querySelector(".idealFor").innerHTML = idealOwner;
    // Add the adoption groups
    let adoptionGroups = "";
    for (let i=0; i<listData.adoptionGroups.length;i++){
        adoptionGroups += "<li><a href= "+listData.adoptionGroups[i].url+">"+listData.adoptionGroups[i].name+"</a></li>";
    }

    document.querySelector(".adoptionGroups").innerHTML = adoptionGroups

}// end selectPet



document.addEventListener('DOMContentLoaded', function(event) {

    // Initial run
    selectPet("dog");
    //Update whenever a new value is picked
    document.querySelector("#petType").addEventListener("change",function(){
        //Get the pet that is selected
        let selectedPet = document.querySelector("#petType").value;

        //call the selected pet
        selectPet(selectedPet);
    });
});
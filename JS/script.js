// 1. Select the div.container element you created within index.html. Make sure you select the element using "document.querySelector" and assign it a variable. You can name the variable anything you want but may be beneficial if you name it "container" 




// the following is an Array containing JavaScript Object. We will use this data to create our html elements. you will need to assign this array to a variable. Example: let arrayVariableName = ARRAY 

[{ name: "BICHON FRISE", image: "https://fwkc-cloudinary.corebine.com/fwkc-production/image/upload/b_transparent,c_pad,dpr_1.25,f_webp,g_center,q_auto,w_768/v1/fwkc/import/1012", description: "The Bichon originated in the Mediterranean area. They appeared in Italy and then Spain where painters often included them in their works. They were also popular in France and Belgium where they became nobility favorites during the Renaissance era. The breed was introduced into the United States in the 1950's, received AKC recognition in 1973 and has since become highly successful in the show ring. The Bichon excels in Obedience and Agility and has established himself as an outstanding therapy dog. With his outgoing personality and social attitude, the Bichon has historically been known as a fine companion dog.", webpage: "https://www.westminsterkennelclub.org/breeds/bichon-frise" }, { name: "AKITA", image: "https://fwkc-cloudinary.corebine.com/fwkc-production/image/upload/b_transparent,c_pad,dpr_1.25,f_webp,g_center,q_auto,w_768/v1/fwkc-prod/Nik_WKC_AkitaBreedImage_1", description: "A national monument in Japan, the akita’s proud heritage includes hunting large game such as bear, elk and boar. This powerful and dignified member of the working group is renowned for courage and loyalty, but may not be tolerant of other animals. His luxurious double-coat can include any combination of vibrant colors. Aloof toward strangers, they form strong family bonds. Highly intelligent with a keen sense of humor, the akita responds best to respectful commands and training techniques that rely on motivation rather than force. Strong-willed and proud, akitas are not receptive to abusive methods.", webpage: "https://www.westminsterkennelclub.org/breeds/akita" }];


// It's always helpful for you to console.log the arrayVariableName to view the independet elements within it and in this case each independent element will list the name, emage, description and webpage properties along with their values.
console.log();


// 2. Once the arrayVariableName above has been assigned to a variable you can create a loop to iterate over the array.
// make sure you insert the 3 clauses within the "()" of your for loop. The initializer which will be used to reference the index of the elements within your Array. The contidition: i < ARRAYNAME.length. The afterthough: i++ . 


for () {

    // Within your loop you will want to access the element you are iterating over: arrayVariableName[i] 
    // Always helpful to console.log(arrayVariableName[i]) 
    // Note you can access the various object properties by using dot notation: arrayVariableName[i].name or arrayVariableName[i].image

    // 3. Now that you have access to the individual object and the corresponding properties and values within each iteration of your loop you can start creating the HTML elements using JavaScript. 

    // 3a. Create a div element and assign it to a variable using: document.createElement("div");

    // 3b. Set a class name for the div you just created by calling .setAttribute("class", "bt-white") on the variable containing your div element.

    // 3c. Create an h1 element using document.createElement("h1") and assign it to a variable 

    // 3d. Set the textContent for the new h1 you created and set it to arrayVariableName[i].name 

    // 3e. Append the h1 element to the div element. Example DIVVARIABLENAME.append(H1VARIABLENAME)

    // 3f. Create an img tag and assign it to a variable 

    // 3g. Set the src attribute for the image element by calling setAttribute("img", arrayVariableName[i].image)

    // 3h. Append the IMAGEVRIABLENAME to the DIVVARIABLENAME

    // 3i. Create a p element and assign to a variable 

    // 3j. Set the text content of the PVARIABLENAME to arrayVariableName[i].description

    // 3k. Append the PVARIABLENAME to the DIVVARIABLENAME

    // 3l. Create an anchor tag and assign it to a variable 

    // 3m. Set the href property for the ANCHORTAGVARIABLENAME and set the value to the arrayVariableName[i]'s property value listing the webpage url.

    // 3n. Append the ANCHORTAGVARIABLENAME to the DIVVARIABLENAME

    // 3o. The div is not completed, the h1, img, p and a tags should all be appended to it. Final step is to append the DIVVARIABLENAME itself to the Container element you assingend to a variable in STEP 1 above. 


    // At the end of this loop your webapge should have four cards. Two you created using html and two you appended using javascript and DOM manipulation 

};




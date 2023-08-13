const spacesRegEx = /^(\S+\s{0,1})+$/


const validate = (form)=>{
    const {name, description, rating} = form
    const errors = {}
    if(!spacesRegEx.test(name)) { errors.name2 = "There can be no more than 1 space between each word"
    }

    if(name.length === 0){errors.name1="Required name"}
    
    if(!spacesRegEx.test(description)) {errors.description2 = "There can be no more than 1 space between each word";
      }
      if(description.length === 0){errors.description1="Required description"}
      
      if (isNaN(parseFloat(rating))){errors.rating2="Rating must be a number"}
      
        if (rating<0 || rating>5 ){errors.rating1="Rating must be between 0 and 5"}
      
      

    return errors
    }
    export default validate;
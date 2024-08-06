exports.validation = (requiredFields, data) => {

  const error= {}

  for (let i of requiredFields){
      if(!data[i]){
         
              // error[i]: `${i} is required`
              error.push(`${i} is required`)
        

      }

  }

  return error;

  // console.log(Object.keys(error).length){
  //     return res.status(400).json({
  //         error
  //     })
  // }

  // if(error.length){
  //     return res.json({message: error.join(',')})
  // }
};
export const getPaginationData=(dataLength,selectedPage)=>{
    const pagesNumber= Math.ceil(dataLength/5)
    const elements = new Array(pagesNumber).fill(0).map((el, index) => {
        return index + 1;
      }); 
    const result = []

    for(let i in elements){
        if((parseInt(i)===0) | (parseInt(i)===(elements.length-1))){
            result.push(elements[i])
        }
        else {
            const isNotFar = Math.abs(elements[i]-selectedPage)<=2
            if(isNotFar){
                result.push(elements[i])
            }
        }
    }
    return result
}
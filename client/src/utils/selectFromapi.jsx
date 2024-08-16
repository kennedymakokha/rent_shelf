/* eslint-disable no-unused-vars */
export const SelectFromAPI = (data) => {
    const { array, name, } = data
  
    let t = array?.map((item, i) => (
      {
        key: i,
        value: item?._id,
        label: `${item?.name}`,
        lat: `${item?.location?.lat}`,
        lng: `${item?.location?.lng}`,
        name: name
      }
    ))
 
    return t
  }
  

  export const HandleArray = (array) => {
    let newarr = []
    for (let index = 0; index < array?.length; index++) {
      newarr.push({ _id: array[index]._id, name: array[index].name, state: false })
    }
    return newarr

  }
  
export const HandleConsole = (data, tb) => {

  return (<>
    if(tb){
      console.table(`*******************Table start*********************`,
        data,
        `******************* Stop*********************`
      )
    }
    else{
      console.log(`******************* start*********************`,
        data,
        `******************* Stop*********************`
      )
    }
  </>


  )

}
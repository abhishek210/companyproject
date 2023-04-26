
const initial={
    products:[]
    // addtocart:[]
}

const basicReducer=(storedata=initial ,action)=>{

    if(action.type==="book"){
        
        return{
            ...storedata,
            products:action.payload
        };

   
    }

    return storedata;

}

export default basicReducer;
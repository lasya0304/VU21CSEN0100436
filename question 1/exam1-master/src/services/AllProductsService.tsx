import axios from "axios"

export const fetchallproducts = async (company:string,category:string,minPrice:Number,maxPrice:Number)=>{
    const response =await axios.get(`http://20.244.56.144/test/companies/${company}/categories/${category}/products?top=${10}&minPrice=${minPrice}$maxPrice=${maxPrice}`,
        { headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzI0NzM3NTY0LCJpYXQiOjE3MjQ3MzcyNjQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImU4ZGE0ZTc1LTQ5NDItNDY0OS04MzA0LWJkMDAzNjMxOTRlYSIsInN1YiI6InNtYWxsaXBlQGdpdGFtLmluIn0sImNvbXBhbnlOYW1lIjoiR0lUQU0iLCJjbGllbnRJRCI6ImU4ZGE0ZTc1LTQ5NDItNDY0OS04MzA0LWJkMDAzNjMxOTRlYSIsImNsaWVudFNlY3JldCI6IkFZQk1JaENRT0VXVkJzdGYiLCJvd25lck5hbWUiOiJNYWxsaXBlZGRpIFNhbmRlZXAiLCJvd25lckVtYWlsIjoic21hbGxpcGVAZ2l0YW0uaW4iLCJyb2xsTm8iOiJWVTIxQ1NFTjAxMDAxNDEifQ.DIKoH7W3rKNskUupG6irUpvFgl_23u2UBdMog-wvMfI`
        }}
        
    );
    const result = response.data;
    return result;
}
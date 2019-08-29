


//Api call to food fork api
const RecipeAPI = {
    search: async (ingredient)=>{
        let url = 'https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?';
        let query='&q=' + ingredient;
        let apiKey = 'key=16daf457dec40fb542ec5228644e5643';
        let endPoint = url+apiKey+query;
        try{
            const response = await fetch(endPoint)
            if(response.ok){
                const jsonResponse = await response.json();
                if(jsonResponse.recipes){
                    return jsonResponse.recipes.map(recipe=>{

                        return{
                            title:recipe.title,
                            recipe_url:recipe.source_url,
                            image: recipe.image_url,
                            rank:recipe.social_rank
                        }
                    })
                }
            }
            throw new Error('Request failed!')
        } catch (error) {
            console.log(error)
        }

    }
};

export default RecipeAPI;




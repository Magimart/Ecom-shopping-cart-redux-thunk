class APIFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }      
      
        search() {  
        // console.log(this.queryStr)      
           const country = this.queryStr.country ?
            {

            countryOfArtist: {
                    $regex: this.queryStr.country,
                    $options: 'i'
                }
            } 
        : {}

        this.query = this.query.find({ ...country})
        return this;
        }

        filter() {
                                                    //this.query === req.query
            const queryCopy = { ...this.queryStr }

                                                    // Remove nonefields from query
            const removeFields = ['country', 'page'];

            removeFields.forEach(el => delete queryCopy[el]);

            this.query = this.query.find(queryCopy);
          

            return this;
        }

        pagination(resPerPage) {
            const currentPage = Number(this.queryStr.page) || 1;
            const skip = resPerPage * (currentPage - 1);
    
            this.query = this.query.limit(resPerPage).skip(skip);
            return this;
        }

}

export default APIFeatures;





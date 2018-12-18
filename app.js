const vm = new Vue({
    el: '#app',
    data: {
      baseurl : "https://newsapi.org/v2/everything",
      apiKey : "31ab40d75032430fa1494d15913e7230",
      sources : ['football','cricket'],
      language: 'en',
      results: [],
    },
    created : function() {
        this.getNewsData();
      },
    methods:{
        getNewsData : function(){  
            this.sources.forEach(source => {
                this.getAPIData(source,`${this.baseurl}?apiKey=${this.apiKey}&q=${source}&sortBy=publishedAt&pageSize=5&language=${this.language}`);                
            });          
          }, //method getNewsData Ends here

          getAPIData : function(source,requesturl){
            let self = this;
            fetch(requesturl)
                .then(function(response) { return response.json()
                .then( function(data) { 
                    self.results.push({source:source,data:data.articles})                     
                 } );
            })
            .catch(function(error) {
                console.log(error);
            });
           
        console.log(this.results);
         }// method getAPIData ends here  
    }
  });

  

  
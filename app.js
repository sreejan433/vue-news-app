const vm = new Vue({
    el: '#app',
    data: {
      baseurlTopics : "https://newsapi.org/v2/everything",
      baseurlTopheadlines : "https://newsapi.org/v2/top-headlines",
      apiKey : "31ab40d75032430fa1494d15913e7230",   
      
      settings:{
      	topics : [],      	
      	numberofpost: 4,
      	language: 'en',
      	sortBy: 'publishedAt'
      },
      results: [],
    },
    created : function() {
        this.getNewsData();
      },
    methods:{
    	refreshNews () {
    		this.getNewsData();	     
	    },
        getNewsData : function(){
            this.results = [];
			if(this.settings.topics.length>0){
				this.settings.topics.forEach(topic => {
	            	let requesturl=`${this.baseurlTopics}?apiKey=${this.apiKey}&sortBy=${this.settings.sortBy}&pageSize=${this.settings.numberofpost}&language=${this.settings.language}&q=${topic}`;  
					this.getAPIData(topic,requesturl);                
	            }); 
			}
			else{
				let requesturl=`${this.baseurlTopheadlines}?apiKey=${this.apiKey}&sortBy=${this.settings.sortBy}&pageSize=${this.settings.numberofpost}&language=${this.settings.language}`;  
				this.getAPIData('Top Headlines',requesturl);
			} 
			      
                     
          }, //method getNewsData Ends here

          getAPIData : function(topic,requesturl){
            let self = this;
            fetch(requesturl)
                .then(function(response) { return response.json()
                .then( function(data) { 
                    self.results.push({source:topic,data:data.articles})                     
                 } );
            })
            .catch(function(error) {
                console.log(error);
            });
           
        	//console.log(this.results);
         }// method getAPIData ends here  
    }
  });


 

  
const vm = new Vue({
    el: '#app',
    data: {
      baseurl : "https://newsapi.org/v2/everything",
      apiKey : "31ab40d75032430fa1494d15913e7230",
      newsource : "football,cricket",
      results: this.getNewsData(),
    },
    method:{
        getNewsData : function(){
            //news api bata data request gari
            
            return this.getAPIData(`${this.baseurl}?apiKey=${this.apiKey}&q=${this.newsource}&from=2018-11-15&sortBy=publishedAt`);
          },
          getAPIData : function(requesturl){
           let data = [
                {
                    title: "news title one",
                    url: "https://google.com"
                },
                {
                   title: "news title two",
                   url: "https://google.com"
                }
               ];
               return data;
         }  
    }
  });

  

  
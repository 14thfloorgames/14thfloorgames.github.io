
borad =["corey","mcorlky","bear","door","kids","school","codnext","DC","cub","brown","white","copper","explain","ill-fated","truck",
"neat"
,"unite"
,"branch"
,"educated"
,"tenuous"
,"hum"
,"decisive"
,"notice"]
get_count = function(codename, words, topk) {
    query = codename + ' ';
    //console.log(query)
    wordCount = words.length
    //console.log(wordCount)
    for (word in words) {
        //console.log(words[word])
        wordCount --
        query += words[word]
        if(wordCount!==0){

           query += '/'
        }

        // console.log(query)
        // console.log(wordCount)
    }
  phrasefinder_url = 'https://cors-anywhere.herokuapp.com/http://phrasefinder.io/search?corpus=eng-us&topk=10&query=' + encodeURIComponent(query);
  console.log(phrasefinder_url)
  //counts = []
  counts = new Map();
function success(phrasefinder_response) {
  for (x in phrasefinder_response.phrases) {
    count = phrasefinder_response.phrases[x].mc
    console.log(count)
    word = phrasefinder_response.phrases[x].tks[1].tt.toLowerCase()
    console.log(word)
      console.log(counts.size)
    if(counts.get(word)===undefined){
      counts.set(word,count)
      if(counts.size == topk){
        console.log("break")
        break//stop
      }
    }else{
      counts.set(word, counts.get(word) + count)
    }
console.log(counts)
  }
}
  $.ajax({
      type: "GET",
      url: phrasefinder_url,
      dataType: 'json',
      async: false,
      success:success,
      error: function(requtes, error, status) {
          console.log(["status", status]);
      }
  });
return counts.keys()
}

console.log(get_count('dog', borad, 6))
//get_count('dog', borad, 6);

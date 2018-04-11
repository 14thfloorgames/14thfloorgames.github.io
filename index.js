
borad =["corey","mcorlky","bear","door","kids","school","codnext","DC","cub","brown","white"]
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
  counts = {}

function success(phrasefinder_response) {
  for (x in phrasefinder_response.phrases) {
    count = phrasefinder_response.phrases[x].mc
    console.log(count)
    word = phrasefinder_response.phrases[x].tks[1].tt.toLowerCase()
    console.log(word)
    if(counts[word]===undefined){
      counts[word] = count
    }else{
      counts[word] += count
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
}

get_count('grizzly', borad, 'car');

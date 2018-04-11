phrase = "grizzly bear/cub/car/blacl/toy/ty/code/hi/no/tame/frame/land/fill/landfill";
borad =["corey","mcorlky","bear","door","kids","school","codnext","DC"]
phrasefinder_url = 'https://cors-anywhere.herokuapp.com/http://phrasefinder.io/search?corpus=eng-us&topk=10&query=' + encodeURIComponent(phrase);
console.log(phrasefinder_url)
$.ajax({
    type: "GET",
    url: phrasefinder_url,
    dataType: 'json',
    async: false,
    success: function(phrasefinder_response) {
        for (x in phrasefinder_response.phrases) {
            console.log(phrasefinder_response.phrases[x].mc);
            console.log(phrasefinder_response.phrases[x].tks[0].tt);
            console.log(phrasefinder_response.phrases[x].tks[1].tt);
        }

        //console.log(phrasefinder_response.phrases);

    },
    error: function(requtes, error, status) {
        console.log(["status", status]);
    }
});

get_count = function(codename, words, topk) {
    query = codename + ' ';
    console.log(query)
    wordCount = words.length
    console.log(wordCount)
    for (word in words) {
        console.log(words[word])
        wordCount --
        query += words[word]
        if(wordCount!==0){

           query += '/'
        }

        console.log(query)
        console.log(wordCount)
    }
  phrasefinder_url = 'https://cors-anywhere.herokuapp.com/http://phrasefinder.io/search?corpus=eng-us&topk=10&query=' + encodeURIComponent(query);
  console.log(phrasefinder_url)
}

get_count('grizzly', borad, 'car');

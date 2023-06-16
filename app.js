async function getGifImg(searchInput){
    const allGif = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    const gifData = allGif.data.data
    return gifData
    //addImg(gifData)
};

function addImg(gifData){
    const randIndex = Math.floor(Math.random() * gifData.length)
    const randGif = gifData[randIndex]
    const url = randGif.images.preview_gif.url
    const newImg = $('<img>')
    console.log(gifData)

    $('#gifs').append(newImg)
    newImg.attr("src",url).attr("class", "gif")
}

$('#submitBtn').click(function(e){
    const input = $('#textInput')
    e.preventDefault()
    //getGifImg(input.val())
    // console.log([2].map((v) => v * 2).map((v) => v -3))
    Promise.all(([input.val()].map(async (val) =>
    {
       let d =  await getGifImg(val)
       console.log(d)
       return d
    })).map(async (val) => {
        console.log("0")
        addImg
    }))
    input.val('')
});

$('#removeBtn').click(function(){
    $('#gifs').empty();
});


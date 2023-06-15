async function getGifaddImg(searchInput){
    const allGif = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    const gifData = allGif.data.data
    const randGif = gifData[Math.floor(Math.random() * gifData.length)]
    const url = randGif.images.preview_gif.url
    const newImg = $('<img>')

    $('#gifs').append(newImg)
    newImg.attr("src",url).attr("class", "gif")
};

$('#submitBtn').click(function(e){
    const input = $('#textInput')
    e.preventDefault()
    getGifaddImg(input.val())
    input.val('')
});

$('#removeBtn').click(function(){
    $('#gifs').empty();
});


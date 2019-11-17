//variable
const tweetList =document.getElementById('tweet-list')

//event listener
eventListener();

function eventListener(){
    document.querySelector('#form').addEventListener('submit',newTweet);

    //remove tweet in list

    tweetList.addEventListener('click',removeTweet)

    //Document
    document.addEventListener('DOMContentLoaded',localStorageOnLoad)
}


//function

function newTweet(e){
    e.preventDefault();

    const tweet=document.getElementById('tweet').value;

    const removeBtn=document.createElement('a');
    removeBtn.classList='remove-tweet'
    removeBtn.textContent='X'



    const li =document.createElement('li');
    li.textContent=tweet;


    li.appendChild(removeBtn);
    tweetList.appendChild(li)

    addTweetLocalStorage(tweet);


    this.reset()

    
}

function removeTweet(e){
    if(e.target.classList.contains('remove-tweet')){
        e.target.parentElement.remove()
    }
    //remove from storage
    removeTweetLocalStorage(e.target.parentElement.textContent);

}

function addTweetLocalStorage(tweet){
    let tweets=getTweetsFromsStorage();

    tweets.push(tweet)

    localStorage.setItem('tweets',JSON.stringify(tweets))
}

function getTweetsFromsStorage(){
    let tweets;
    const tweetsLS=localStorage.getItem('tweets')

    if(tweetsLS===null){
        tweets=[]
    }
    else{
        tweets=JSON.parse(tweetsLS);
    }
    return tweets;

}

function localStorageOnLoad(){
    let tweets=getTweetsFromsStorage();

    //loop througt storage
    tweets.forEach(function(tweet){

    const removeBtn=document.createElement('a');
    removeBtn.classList='remove-tweet'
    removeBtn.textContent='X'



    const li =document.createElement('li');
    li.textContent=tweet;


    li.appendChild(removeBtn);
    tweetList.appendChild(li)

    })
}

//remove the tweet

function removeTweetLocalStorage(tweet){
    let tweets =getTweetsFromsStorage();

    //remove the x
    const tweetDelete=tweet.substring(0,tweet.length-1)

    // loop through the tweet and remove that's tweet

    tweets.forEach(function(tweetsLS,index){
        if(tweetDelete===tweetsLS){
            tweets.splice(index,1)
        }
    })

    localStorage.setItem('tweets',JSON.stringify(tweets))
}
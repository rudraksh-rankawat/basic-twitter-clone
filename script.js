document.getElementById('tweetForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const tweetText = document.getElementById('tweetText').value;
    document.getElementById('tweetText').value = '';
    const tweet = document.createElement('div');
    tweet.classList.add('tweet');
    tweet.innerHTML = `
        <div class="profile">
            <img src="assets/musk.jpg" class="profile-icon" alt="Profile Icon">
            <span class="username">Elon Musk</span>
        </div>
        <p>${tweetText}</p>
        <div>
            <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" class="like" alt="like icon" />
            <span class="like-count">0</span>
            <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619" class="comment" alt="comment icon" />
            <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/030/original/delete-color-filled.png?1706888714" class="delete" alt="delete icon" height="21px"/>
        </div>
    `;
    document.getElementById('tweets').prepend(tweet);
});

document.getElementById('tweets').addEventListener('click', function(e) {
    if (e.target.classList.contains('like')) {
        const likeCount = e.target.nextElementSibling;
        if (e.target.getAttribute('src') === "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679") {
            e.target.setAttribute('src', "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/025/original/state_clicked.png?1706888455");
            likeCount.textContent = parseInt(likeCount.textContent) + 1;
        } else {
            e.target.setAttribute('src', "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679");
            likeCount.textContent = parseInt(likeCount.textContent) - 1;
        }
    } else if (e.target.classList.contains('delete')) {
        e.target.parentElement.parentElement.remove();
    }
});


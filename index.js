function readMore(company) {
    let dots = document.querySelector(`.card[data-company="${company}"] .dots`);
    let moreText = document.querySelector(`.card[data-company="${company}"] .more`); 
    let btnText = document.querySelector(`.card[data-company="${company}"] .myBtn`);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.textContent = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.textContent = "Read less"; 
        moreText.style.display = "inline";
    }
}
// handling search btn
const searchButton = () => {
    document.getElementById("all").textContent = "";
    const searchFieldValue = document.getElementById("searchField");
    const searchFieldText = searchFieldValue.value;
    const url = `https://openlibrary.org/search.json?q=${searchFieldText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => getBooks(data))
    searchFieldValue.value = "";
}
//-----------//

//------getting results--------//
const getBooks = (data) => {

    const booksDetails = data.docs;
    const sliceBooksDetails = booksDetails.slice(0, 35);
    //console.log(slice)
    const totalSearchResult = data.numFound;
    if (totalSearchResult > 0) {
        document.getElementById("results").innerText = `${totalSearchResult} results Found`
    } else {
        document.getElementById("results").innerText = `sorry! No Results Found`;
    }


    sliceBooksDetails.forEach(bookDetail => {
        console.log(bookDetail);

        const coverImg = bookDetail.cover_i;
        let bookTitle = bookDetail.title;
        let firstPublishYear = bookDetail.first_publish_year;
        let authorsNames = bookDetail.author_name;
        let publishers = bookDetail.publisher;

        let publishYear = (firstPublishYear === undefined) ? "published year not found" : firstPublishYear;
        let authors = (authorsNames === undefined) ? "authors are not found" : authorsNames;
        let publisher = (publishers === undefined) ? "publishers are not found" : publishers;
        const div = document.createElement("div");

        div.classList.add("col");
        div.innerHTML = `
                            <div class="card h-100">
                            <img  src=https://covers.openlibrary.org/b/id/${coverImg}-M.jpg class="card-img-top" alt="...">
                           <div class="card-body">
                               <h5 class="card-title">Book Name : ${bookTitle}</h5>
                               <p class="card-text"><b>Published Year</b> : ${publishYear}</p>
                               <p class="card-text"><b>Authors</b> : ${authors}</p>
                               <p class="card-text"><b>publisher</b> : ${publisher}</p>
                             </div>
                            </div>
       
       `

        document.getElementById("all").appendChild(div);


    });
}
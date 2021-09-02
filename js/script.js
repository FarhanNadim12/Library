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
    // const slice = booksDetails.slice(0, 25);
    //console.log(slice)
    const totalSearchResult = data.numFound;
    document.getElementById("results").innerText = `${totalSearchResult} results Found`

    booksDetails.forEach(bookDetail => {
        console.log(bookDetail);

        const coverImg = bookDetail.cover_i;
        let bookTitle = bookDetail.title;
        let firstPublishYear = bookDetail.first_publish_year;
        let authorsNames = bookDetail.author_name;
        let publisher = bookDetail.publisher;
        console.log(authorsNames);


        if (firstPublishYear === undefined) {

            const div = document.createElement("div");

            div.classList.add("col");
            div.innerHTML = `
                                <div class="card ">
                                <img class="h-25" src=https://covers.openlibrary.org/b/id/${coverImg}-M.jpg class="card-img-top" alt="...">     
                               <div class="card-body">
                                   <h5 class="card-title"> Book Name : ${bookTitle}</h5>
                                   <p class="card-text"><b>Published Year</b> : Not Found</p>
                                   <p class="card-text"><b>Authors</b>: ${authorsNames}</p>
                                   <p class="card-text"><b>Publisher</b> :${publisher}</p>
                                   
                                 </div>
                                </div>
           
           `

            document.getElementById("all").appendChild(div);

        } else if (authorsNames === undefined) {
            console.log("its undefined")
            const div = document.createElement("div");
            div.classList.add("col");
            div.innerHTML = `
                                <div class="card ">
                                <img class="h-25" src=https://covers.openlibrary.org/b/id/${coverImg}-M.jpg class="card-img-top" alt="...">     
                               <div class="card-body">
                                   <h5 class="card-title"> Book Name : ${bookTitle}</h5>
                                   <p class="card-text"><b>Published Year</b> ${firstPublishYear}</p>
                                   <p class="card-text"><b>Authors</b>: not found</p>
                                   <p class="card-text"><b>Publisher</b> :${publisher}</p>
                                   
                                 </div>
                                </div>
           
           `

            document.getElementById("all").appendChild(div);
        }
        else if (publisher === undefined) {
            const div = document.createElement("div");
            
            div.classList.add("col");
            div.innerHTML = `
                                <div class="card h-100">
                                <img src=https://covers.openlibrary.org/b/id/${coverImg}-M.jpg class="card-img-top" alt="...">
                               <div class="card-body">
                                   <h5 class="card-title">Book Name : ${bookTitle}</h5>
                                   <p class="card-text"><b>Published Year</b> : ${firstPublishYear}</p>
                                   <p class="card-text"><b>Authors</b> : ${authorsNames}</p>
                                   <p class="card-text"><b>publisher</b> : not found</p>
                                 </div>
                                </div>
           
           `

            document.getElementById("all").appendChild(div);
        }
        else {
            const div = document.createElement("div");

            div.classList.add("col");
            div.innerHTML = `
                                <div class="card h-100">
                                <img src=https://covers.openlibrary.org/b/id/${coverImg}-M.jpg class="card-img-top" alt="...">
                               <div class="card-body">
                                   <h5 class="card-title">Book Name : ${bookTitle}</h5>
                                   <p class="card-text"><b>Published Year</b> : ${firstPublishYear}</p>
                                   <p class="card-text"><b>Authors</b> : ${authorsNames}</p>
                                   <p class="card-text"><b>publisher</b> : ${publisher}</p>
                                 </div>
                                </div>
           
           `

            document.getElementById("all").appendChild(div);

        }
    });
}
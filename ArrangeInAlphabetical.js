const books=[
    {
        title:"The Greate Gatsby",
        author:"F. Scott Fitgerald",
        year: 1925,
    },
    {
        title:"To Killa Mocking bird",
        author:"Harper Lee ",
        year: 1960,
    },
    {
        title:"who are you",
        author:"George orwell",
        year: 1949,
    },
    {
        title:"Pride and Prejudice",
        author:"Jane Austen",
        year: 1813,
    },
    
];

function logTitles(titles){
    titles.sort();
    console.log(titles.join(","));
}

function extractTitles(books,callback){
    const titles=books.map((books)=>books.title);
    callback(titles);
}

extractTitles(books,logTitles);
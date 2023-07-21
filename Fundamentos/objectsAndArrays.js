// L29S01 - Array of Objects
//
var bookList = [
    {
      "title" : "Harry Potter and the Chamber of Secrets",
      "author" : "J.K. Rowling"
    },
    {
      "title" : "Moby Dick",
      "author" : "Herman Melville"
    },
    {
      "title" : "A Tale of Two Cities",
      "author" : "Charles Dickens"
    }
  ];
  var len = bookList.length;
  gs.info('Last author=' + bookList[len].author);
  
  for (var i = 0; i < len; i++) {
    var book = bookList[i];
    gs.info(i + ' - Title: ' + book.title + ' - Author: ' + book.author);
  }

// L30S01 - JSON.Stringify and Parse
// JSON.Stringify converte objetos em texto (string), possibilitando
// a leitura de objetos.
// Parse
  var bookList = [
    {
      "title" : "Harry Potter and the Chamber of Secrets",
      "author" : "J.K. Rowling"
    },
    {
      "title" : "Moby Dick",
      "author" : "Herman Melville"
    },
    {
      "title" : "A Tale of Two Cities",
      "author" : "Charles Dickens"
    }
  ];
  gs.info(bookList); // That's not very helpful!
  
  var bookListStr = JSON.stringify(bookList);
  gs.info(bookListStr);  // I can read it - sort of
  
  var bookListStrFormat = JSON.stringify(bookList, null, 4);
  gs.info(bookListStrFormat); // Ah - that's better!

  // L30S02 - Parse example
//
var libraryStr = '[{"title":"Harry Potter and the Chamber of Secrets","author":"J.K. Rowling"},{"title":"Moby Dick","author":"Herman Melville"},{"title":"A Tale of Two Cities","author":"Charles Dickens"}]';
gs.info('length=' + libraryStr.length);
var libraryObj = JSON.parse(libraryStr);
gs.info('length=' + libraryObj.length);
gs.info(JSON.stringify(libraryObj, null, 4));












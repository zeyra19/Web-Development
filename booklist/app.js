let btn=document.getElementById("btn");
let bookList = document.getElementById("book-list");


btn.addEventListener("click", (e) => {
    e.preventDefault();

let title= document.getElementById("title");
let author= document.getElementById("author");
let year= document.getElementById("year");

if (title.value== "" && author.value== "" && year.value== ""){
    alert("Lütfen boş bırakmayınız");
}else {
    let newRow = document.createElement("section");

    let newTitle = document.createElement("div"); //yeni başlığı, yeni satırın içine eklicem
    newTitle.innerHTML=title.value;
    newRow.appendChild(newTitle);

    let newAuthor = document.createElement("div");
    newAuthor.innerHTML=author.value;
    newRow.appendChild(newAuthor);

    let newYear = document.createElement("div");
    newYear.innerHTML=year.value;
    newRow.appendChild(newYear);

    bookList.appendChild(newRow); //kitap listesinin içine yeni satırı ekledim

}
});

let deleteBtn = document.getElementById("delete");

deleteBtn.addEventListener("click", () => {
    alert("Başarıyla temizlendi");
 });
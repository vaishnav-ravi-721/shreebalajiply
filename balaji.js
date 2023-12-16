function showItems() {
  let itemList = Object.keys(PRODUCTS) 
  console.log(itemList);

  let html = "<table id='myTable'>"
  //making table of items automatic
      setTimeout(() => {
        for(let i = 0;i < itemList.length;i++){
          html += `<tr class="productList">`;
          html += `<td><img class='product-img' src="${PRODUCTS[itemList[i]]["image"]}"></td>`;
          html += "<td>"
          html += `<p class="productName">${itemList[i]}</p>`
          html += `<p class="productDetails"> price : ${PRODUCTS[itemList[i]]["price"]}/${PRODUCTS[itemList[i]]["unit"]}</p>`
          html += `<p class="productDetails"> Purchase Price : ${PRODUCTS[itemList[i]]["purchasePrice"]}/${PRODUCTS[itemList[i]]["purchaseUnit"]}</p>`
          html += `<p class="productDetails">Packing : ${PRODUCTS[itemList[i]]["packing"]}</p>`;
          html += `<p class="productDetails">Brand : ${PRODUCTS[itemList[i]]["brand"]}</p>`;
          html += `<p class="productDetails">inStock : ${PRODUCTS[itemList[i]]["inStock"]}</p>`;
          html += "</td>";
          html += "</tr>"; 
          console.log(PRODUCTS[itemList[i]]["image"])   
      }
      document.getElementById("itemContainer").innerHTML = html;
      },500);

}

/*function filterItems(){
  let getInput = document.getElementById("takeInput")
  let productItem = Object.keys(PRODUCTS)
  for(let x = 0;x < productItem.length;x++){

  }  
}*/

//search items or filter items
function filterItems() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("takeInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1].getElementsByTagName("p")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
  console.log("working")
}



// hide navigation bar on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("searchItem").style.top = "0";
  } else {
    document.getElementById("searchItem").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}

/*

*/
const categoriesItems = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  console.log(`Category: ${categoryTitle}`);

  const categoryList = item.querySelectorAll(".item ul li").length;
  console.log(`Elements: ${categoryList}`);
});

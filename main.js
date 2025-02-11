const movies = [
  {
    movieImage: "https://shorturl.at/383HI",
    movieTitle: "Чон кыз",
    movieStatus: "Абонемент",
    movieId: 1,
    rating: 4.5,
  },
  {
    movieImage: "https://shorturl.at/mjYe8",
    movieTitle: "Жаны кошуна",
    movieStatus: "Аренда",
    movieId: 2,
    rating: 4.8,
  },
  {
    movieImage: "https://shorturl.at/5trnL",
    movieTitle: "Такси",
    movieStatus: "Бесплатно",
    movieId: 3,
    rating: 5.5,
  },

  {
    movieImage: "https://shorturl.at/nelwP",
    movieTitle: "Террорист",
    movieStatus: "Аренда",
    movieId: 4,
    rating: 7.5,
  },
  {
    movieImage: "https://shorturl.at/VR3zi",
    movieTitle: "Полчан",
    movieStatus: "Аренда",
    movieId: 5,
    rating: 5.7,
  },
  {
    movieImage: "https://shorturl.at/383HI",
    movieTitle: "Чон кыз",
    movieStatus: "Абонемент",
    movieId: 6,
    rating: 4.1,
  },

  {
    movieImage: "https://shorturl.at/mjYe8",
    movieTitle: "Жаны кошуна",
    movieStatus: "Аренда",
    movieId: 7,
    rating: 4.4,
  },

  {
    movieImage: "https://shorturl.at/5trnL",
    movieTitle: "Такси",
    movieStatus: "Бесплатно",
    movieId: 8,
    rating: 6.5,
  },
];

const cards_container = document.getElementsByClassName("cards_container");
function renderMovies() {
  cards_container[0].innerHTML = "";
  movies.map(({ movieImage, movieTitle, movieStatus, rating }) => {
    const div = document.createElement("div");
    const wrapperLowBlock = document.createElement("div");
    const card_image = document.createElement("img");
    const rating_block = document.createElement("div");
    const star_img = document.createElement("img");
    const ratingNumber = document.createElement("span");
    const title = document.createElement("p");
    const status = document.createElement("p");
    rating_block.append(star_img, ratingNumber);
    //
    title.className = "title";
    movieStatus === "Абонемент"
      ? status.classList.add("abon")
      : movieStatus === "Бесплатно"
      ? status.classList.add("free")
      : status.classList.add("arenda");
    //
    ratingNumber.className = "rating_number";
    card_image.src = movieImage;
    rating_block.className = "rating_block";
    star_img.src = "./assets/icons/star.svg";
    star_img.className = "star_icon";
    card_image.className = "card_image";
    ratingNumber.textContent = rating;
    title.textContent = movieTitle;
    status.textContent = movieStatus;
    div.classList.add("card_movie");
    wrapperLowBlock.className = "low_block";
    wrapperLowBlock.append(title, status);
    div.append(card_image, rating_block, wrapperLowBlock);
    cards_container[0].appendChild(div);
  });
}
const openModalButton = document.getElementById("openModalButton");
const closeModalButton = document.getElementById("cancel");
const backdrop = document.getElementById("backdrop");
const addModal = document.getElementById("add-modal");

const toggleHandler = () => {
  backdrop.classList.toggle("visible");
  addModal.classList.toggle("visible");
  // console.log(
  //   "Backdrop класс visible:",
  //   backdrop.classList.contains("visible")
  // );
};

openModalButton.addEventListener("click", toggleHandler);
backdrop.addEventListener("click", toggleHandler);
closeModalButton.addEventListener("click", toggleHandler);
//
const titleInput = document.getElementById("title");
const urlInput = document.getElementById("url");
const ratingInput = document.getElementById("rating");
const statusInput = document.getElementById("status");

const addNewMovie = document.getElementById("add-movie");
addNewMovie.addEventListener("click", () => {
  const newMovie = {
    movieImage: urlInput.value.trim(),
    movieTitle: titleInput.value.trim(),
    movieStatus: statusInput.value.trim(),
    movieId: Date.now().toString(),
    rating: parseFloat(ratingInput.value.trim()),
  };

  if (!newMovie.movieTitle || !newMovie.movieImage || isNaN(newMovie.rating)) {
    alert("Пожалуйста, заполните все поля корректно!");
    return;
  }

  movies.push(newMovie);

  titleInput.value = "";
  urlInput.value = "";
  ratingInput.value = "";
  statusInput.value = "";

  toggleHandler();
  renderMovies();
  console.log(newMovie);
});
renderMovies();

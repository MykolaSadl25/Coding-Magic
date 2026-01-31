const scientists = [
  {
    name: "Albert",
    surname: "Einstein",
    born: 1879,
    dead: 1955,
    id: 1,
  },
  {
    name: "Isaac",
    surname: "Newton",
    born: 1643,
    dead: 1727,
    id: 2,
  },
  {
    name: "Galileo",
    surname: "Galilei",
    born: 1564,
    dead: 1642,
    id: 3,
  },
  {
    name: "Marie",
    surname: "Curie",
    born: 1867,
    dead: 1934,
    id: 4,
  },
  {
    name: "Johannes",
    surname: "Kepler",
    born: 1571,
    dead: 1630,
    id: 5,
  },
  {
    name: "Nicolaus",
    surname: "Copernicus",
    born: 1473,
    dead: 1543,
    id: 6,
  },
  {
    name: "Max",
    surname: "Planck",
    born: 1858,
    dead: 1947,
    id: 7,
  },
  {
    name: "Katherine",
    surname: "Blodgett",
    born: 1898,
    dead: 1979,
    id: 8,
  },
  {
    name: "Ada",
    surname: "Lovelace",
    born: 1815,
    dead: 1852,
    id: 9,
  },
  {
    name: "Sarah E.",
    surname: "Goode",
    born: 1855,
    dead: 1905,
    id: 10,
  },
  {
    name: "Lise",
    surname: "Meitner",
    born: 1878,
    dead: 1968,
    id: 11,
  },
  {
    name: "Hanna",
    surname: "Hammarström",
    born: 1829,
    dead: 1909,
    id: 12,
  },
];

const readyListRef = document.querySelector(".scientists__sortedList");
const buttonsListRef = document.querySelectorAll(".scientists__desc");

function createItemsMarkup(array) {
  const item = array
    .map(({ name, surname, born, dead }) => {
      return `
        <li class="scientists__box">
        <div class="scientists__boxes">
  <h2 class="scientists__name">${name}</h2>
  <h3 class="scientists__name">${surname}</h3>
  </div>
  <div class="scientists__wrap">
  <p>${born}</p>
  <p>-${dead}</p>
</div>
</li>`;
    })
    .join("");
  readyListRef.innerHTML = item;

  const boxes = readyListRef.querySelectorAll(".scientists__box");
  boxes.forEach(box => {
    // small delay so browser registers the scale(0) first
    setTimeout(() => box.classList.add("show"), 50);
  });
}

buttonsListRef.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const action = event.currentTarget.dataset.id;
    switch (action) {
      case "scientistsBorn19c":
        const findScientists19c = scientists.filter(({ born }) => {
          return born >= 1800 && born < 1900;
        });
        createItemsMarkup(findScientists19c);
        break;
      case "sortByAlphabet":
        const sortByAlpabet = [...scientists].sort((a, b) =>
          a.name.localeCompare(b.name),
        );
        createItemsMarkup(sortByAlpabet);
        break;
      case "sortByYears":
        const sortByYears = [...scientists].sort((a, b) => {
          const livedA = a.dead - a.born;
          const livedB = b.dead - b.born;
          return livedA - livedB;
        });
        createItemsMarkup(sortByYears);
        break;
      case "latestBirth":
        let latestBorn = scientists[0].born;
        scientists.forEach((item) => {
          if (item.born > latestBorn) {
            latestBorn = item;
          }
        });
        createItemsMarkup([latestBorn]);
        break;
      case "findByFirstLetters":
        const findByFirstLetters = scientists.filter(
          (item) => item.name[0] === item.surname[0],
        );
        createItemsMarkup(findByFirstLetters);
        break;
      case "AlbertEinsteinBirth":
        const findBirth = scientists.find((item) => item.name === "Albert");
        if (findBirth) {
          createItemsMarkup([findBirth]);
        }
        break;
      case "surnameByC":
        const filterByC = scientists.filter((item) => item.surname[0] === "C");
        createItemsMarkup(filterByC);
        break;
      case "deleteByA":
        const filterByA = scientists.filter((item) => item.name[0] !== "A");
        createItemsMarkup(filterByA)
        break;
      case "findLongestAndShortestLife":
        let longestLife = scientists[0]
        let shortestLife = scientists[0];
        scientists.forEach((item)=>{
            let lived = item.dead - item.born;
            if (lived > (longestLife.dead - longestLife.born)) {
                longestLife = item
            }
            if (lived < (shortestLife.dead - shortestLife.born)) {
                shortestLife = item
            }
        })
        createItemsMarkup([shortestLife,longestLife])
        break;
    }
  });
});
createItemsMarkup(scientists);

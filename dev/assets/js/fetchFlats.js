{
  const statusMap = {
    "free": {
      style: "status-free",
      name: "Вільно"
    },
    "discount": {
      style: "status-discount",
      name: "Знижка"
    },
    "reserved": {
      style: "status-reserved",
      name: "Резерв"
    },
    "sold": {
      style: "status-sold",
      name: "Продано"
    },
  }

  const floorMap = ["Перший", "Другий", "Третій", "Четвертий", "П'ятий"];

  const flatInfo = [{
      id: 1,
      house: "",
      floor: 1,
      number: 1,
      rooms: 3,
      area: 82.3, // m^2
      pricePerSquare: 650, // $
      // total: 55510, // $, can be calculated on client
      status: 'discount',
    },
    {
      id: 2,
      house: "",
      floor: 1,
      number: 2,
      rooms: 2,
      area: 60.7, // m^2
      pricePerSquare: 650, // $
      // total: 55510, // $, can be calculated on client
      status: 'discount',
    },
    {
      id: 3,
      house: "",
      floor: 1,
      number: 3,
      rooms: 2,
      area: 60.7, // m^2
      pricePerSquare: 700, // $
      // total: 55510, // $, can be calculated on client
      status: 'free',
    },
    {
      id: 4,
      house: "",
      floor: 1,
      number: 4,
      rooms: 3,
      area: 82.0, // m^2
      pricePerSquare: 700, // $
      // total: 55510, // $, can be calculated on client
      status: 'reserved',
    },
    {
      id: 5,
      house: "",
      floor: 1,
      number: 5,
      rooms: 3,
      area: 79.7, // m^2
      pricePerSquare: 650, // $
      // total: 55510, // $, can be calculated on client
      status: 'discount',
    },
    {
      id: 6,
      house: "",
      floor: 1,
      number: 6,
      rooms: 1,
      area: 39.2, // m^2
      pricePerSquare: 700, // $
      // total: 55510, // $, can be calculated on client
      status: 'sold',
    },
    {
      id: 7,
      house: "",
      floor: 1,
      number: 7,
      rooms: 1,
      area: 42.0, // m^2
      pricePerSquare: 700, // $
      // total: 55510, // $, can be calculated on client
      status: 'sold',
    },
    {
      id: 8,
      house: "",
      floor: 1,
      number: 8,
      rooms: 1,
      area: 39.2, // m^2
      pricePerSquare: 700, // $
      // total: 55510, // $, can be calculated on client
      status: 'free',
    },
    {
      id: 9,
      house: "",
      floor: 1,
      number: 9,
      rooms: 3,
      area: 79.3, // m^2
      pricePerSquare: 700, // $
      // total: 55510, // $, can be calculated on client
      status: 'free',
    },
  ];

  function setupFlatDisplay(display, info) {
    display.setAttribute('data-floor', floorMap[info.floor]);
    display.setAttribute('data-number', info.number);
    display.setAttribute('data-room-count', info.rooms);
    display.setAttribute('data-area', `${info.area} м²`);
    display.setAttribute('data-cost', `${info.pricePerSquare} $/м²`);
    display.setAttribute('data-price', `${(info.pricePerSquare * info.area).toFixed(0)} $`);
    display.setAttribute('data-status', statusMap[info.status].name);

    display.classList.toggle(statusMap[info.status].style, true);
    [...display.querySelectorAll('.status-description')].forEach(
      (e) => e.innerHTML = statusMap[info.status].name
    );
    [...display.querySelectorAll('.status-indicator')].forEach(
      (e) => e.classList.toggle(statusMap[info.status].style, true)
    );
  }

  function setFlatData(info) {
    const displayList = [...document.getElementById('flat-list').children];
    displayList.forEach((display) => {
      const id = display.getAttribute('data-flat-id');
      if (id) {
        const flatInfo = info.find((f) => f.id == id);
        setupFlatDisplay(display, flatInfo);
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => setFlatData(flatInfo));
  }
  else {
    setFlatData(flatInfo);
  }
}

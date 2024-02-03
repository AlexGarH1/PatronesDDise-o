const data = [
  {
    name: "Erdinger Pikantus",
    conutry: "Alemania",
    info: "Cerveza de trigo de color marrón oscuro, con un sabor fuerte y afrutado.",
    img: "https://beerhunter.co.uk/wp-content/uploads/2020/06/erdinger-pikantus-german-wheat-beer-12-pack.jpg",
  },
  {
    name: "Corona",
    conutry: "México",
    info: "Cerveza mexicana, de tipo lager, elaborada por el grupo Modelo.",
    img: "https://icdn.bottlenose.wine/images/full/602320.jpg",
  },
  {
    name: "Guinness",
    conutry: "Irlanda",
    info: "Cerveza negra, de tipo stout, elaborada por la cervecera Guinness.",
    img: "https://www.kenyancollective.com/wp-content/uploads/2018/08/Guinness-New-Pack-1-768x1081.jpg",
  },
];

class InfoContext {
  constructor(strategy, data, element) {
    this.setStrategy(strategy);
    this.data = data;
    this.element = element;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  show() {
    this.strategy.show(this.data, this.element);
  }
}

class ListStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((ac, beer) => {
      return (
        ac +
        `<div>
            <h2>${beer.name}</h2>
            <p>${beer.conutry}</p>
            </div>
            <hr>`
      );
    }, "");
  }
}

class DetailListStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((ac, beer) => {
      return (
        ac +
        `<div>
            <h2>${beer.name}</h2>
            <p>${beer.conutry}</p>
            <p>${beer.info}</p>
            </div>
            <hr>`
      );
    }, "");
  }
}

class showImageStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((ac, beer) => {
      return (
        ac +
        `<div>
        <img width="10%" src="${beer.img}" >
        <h2>${beer.name}</h2>
        </div>
        <hr>`
      );
    }, "");
  }
}

const strategies = [
  new ListStrategy(),
  new DetailListStrategy(),
  new showImageStrategy()
];

const info = new InfoContext(new ListStrategy(), data, content);
info.show();

slcOptions.addEventListener("change", (event) => {
  const op = event.target.value;
  info.setStrategy(strategies[op]);
  info.show();
});

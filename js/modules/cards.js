function cards() {
	class MenuBox {
		constructor(img, alt, title, descr, price, parentSelector, ...classes) {
			this.img = img;
			this.alt = alt;
			this.title = title;
			this.descr = descr;
			this.cost = price;
			this.parent = document.querySelector(parentSelector);
			this.transfer = 2.6;
			this.classes = classes;
			this.changeToUAH();
		}

		changeToUAH() {
			this.cost = Math.round(this.cost * this.transfer);
		}

		render() {
			const element = document.createElement('div');

			if (this.classes.length === 0) {
				this.element = 'menu__item';
				element.classList.add(this.element);
			} else {
				this.classes.forEach(className => element.classList.add(className));
			}

			element.innerHTML = `
      <img src=${this.img} alt="${this.alt}" />
      <h3 class="menu__item-subtitle">${this.title}</h3>
      <div class="menu__item-descr">
      ${this.descr}
      </div>
      <div class="menu__item-divider"></div>
      <div class="menu__item-price">
        <div class="menu__item-cost">Цена:</div>
        <div class="menu__item-total"><span>${this.cost}</span> руб/день</div>
      </div>`;
			this.parent.append(element);
		}
	}

	const getResource = async (url) => {
		const res = await fetch(url);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}

		return await res.json();
	};

	getResource('http://localhost:3000/menu')
		.then(json => {
			json.forEach(({ img, alt, title, descr, price }) => {
				new MenuBox(img, alt, title, descr, price,
					'.menu .container',
					'menu__item')
					.render();
			});
		});
}


export default cards;
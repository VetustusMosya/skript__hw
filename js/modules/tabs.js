function tabs() {
	const tabs = document.querySelectorAll(".tabheader__item"),
		tabsContent = document.querySelectorAll(".tabcontent"),
		tabsParent = document.querySelector(".tabheader__items");

	function hideTibeContent() {
		tabsContent.forEach((item) => {
			item.style.display = "none";
		});

		tabs.forEach((tab) => {
			tab.classList.remove("tabheader__item_active");
		});
	}

	function showTabContent(i = 0) {
		tabsContent[i].style.display = "block";
		tabs[i].classList.add("tabheader__item_active");
	}

	hideTibeContent();
	showTabContent();

	tabsParent.addEventListener("click", (event) => {
		const target = event.target;
		if (target && target.classList.contains("tabheader__item")) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideTibeContent();
					showTabContent(i);
				}
			});
		}
	});
}

export default tabs;
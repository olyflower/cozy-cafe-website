document.addEventListener("DOMContentLoaded", () => {
	const loadMoreBtn = document.querySelector(".btn-load-more");

	loadMoreBtn.addEventListener("click", function () {
		const hiddenItems = document.querySelectorAll(".extra-item.d-none");
		if (hiddenItems.length === 0) return;

		const columns = document.querySelectorAll(".col-md-4");

		columns.forEach((col) => {
			const next = col.querySelector(".extra-item.d-none");
			if (next) {
				next.classList.remove("d-none");
			}
		});

		if (document.querySelectorAll(".extra-item.d-none").length === 0) {
			this.classList.add("d-none");
		}
	});
});

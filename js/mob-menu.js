(() => {
  const refs = {
    // Додати атрибут data-mob-menu-open на кнопку відкриття
    openMenuBtn: document.querySelector("[data-mob-menu-open]"),
    // Додати атрибут data-mob-menu-close на кнопку закриття
    closeMenuBtn: document.querySelector("[data-mob-menu-close]"),
    // Додати атрибут data-mob-menu на бекдроп модалки
    modal: document.querySelector("[data-mob-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle("is-open");
  }
})();

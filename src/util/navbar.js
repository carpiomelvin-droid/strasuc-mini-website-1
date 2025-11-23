const navbar = () => {
  const mainnav = document.getElementById("main-nav");

  if (mainnav) {
    const navItems = mainnav.querySelectorAll("li");

    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        navItems.forEach((li) => li.classList.remove("active"));
        item.classList.add("active");
      });
    });
  }
  return null;
};
export default navbar;

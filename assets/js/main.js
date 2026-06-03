document.querySelectorAll(".code-copy").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const code = e.target.closest(".code-block").querySelector("pre");
    navigator.clipboard.writeText(code.textContent);
    btn.textContent = "Copied";
    btn.classList.add("copied");
    setTimeout(() => {
      btn.textContent = "Copy";
      btn.classList.remove("copied");
    }, 2000);
  });
});



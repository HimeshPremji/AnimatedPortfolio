const clips = document.querySelectorAll(".clips");
window.addEventListener("load", () => {
  clips.forEach((clip) => {
    clip.style.height = "100%";
  });
});

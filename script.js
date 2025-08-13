// Card hover effects
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', e => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--y', `${e.clientY - rect.top}px`);
  })
})

// Image track functionality
const track = document.getElementById("image-track");

const handleOnDown = (e) => {
  // Only handle mouse events if they originated from the image track
  if (!isDescendantOfTrack(e.target)) return;
  track.dataset.mouseDownAt = e.clientX;
}

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = (e) => {
  if (track.dataset.mouseDownAt === "0") return;
  
  // Only handle mouse moves if they originated from the image track
  if (!isDescendantOfTrack(e.target)) return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth / 2;

  const percentage = (mouseDelta / maxDelta) * -100,
    nextPercentageUnconstrained =
      parseFloat(track.dataset.prevPercentage) + percentage,
    nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 20), -90);

  track.dataset.percentage = nextPercentage;

  track.animate(
    {
      transform: `translate(${nextPercentage}%, -50%)`,
    },
    { duration: 1200, fill: "forwards" }
  );

  for (const image of track.getElementsByClassName("image")) {
    image.animate(
      {
        objectPosition: `${100 + nextPercentage}% center`,
      },
      { duration: 1200, fill: "forwards" }
    );
  }
}

// Helper function to check if an element is part of the image track
function isDescendantOfTrack(element) {
  return element.closest('#image-track') !== null;
}

// Event listeners with passive option for better performance
window.addEventListener('mousedown', handleOnDown, { passive: true });
window.addEventListener('touchstart', (e) => handleOnDown(e.touches[0]), { passive: true });
window.addEventListener('mouseup', handleOnUp, { passive: true });
window.addEventListener('touchend', (e) => handleOnUp(e.touches[0]), { passive: true });
window.addEventListener('mousemove', handleOnMove, { passive: true });
window.addEventListener('touchmove', (e) => handleOnMove(e.touches[0]), { passive: true });

//cv download
  document.getElementById("cvDownload").addEventListener("click", () => {
    const a = document.createElement("a");
    a.href = "assets/cvSomo.pdf"; // Path to your CV file
    a.download = "HerbenneReyV_CV.pdf"; // Downloaded filename
    document.body.appendChild(a);
    a.click();
    a.remove();
  });
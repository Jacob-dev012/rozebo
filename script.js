// navbar fade effect
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  
  if (window.scrollY > 50) {
    nav.style.background = "rgba(255,255,255,.9)";
  } else {
    nav.style.background = "rgba(255,255,255,.2)";
  }
});

// WhatsApp booking system
function book(room) {
  const number = "233208530897‬";
  
  const msg = `Hello Rozebo Hotel,
I want to book:
Room: ${room}
Check-in:
Check-out:
Guests:
`;
  
  window.open(`https://wa.me/${number}?text=${encodeURIComponent(msg)}`, "_blank");
}
$(document).ready(function () {
  $('#menuToggle').click(function () {
    $('#navLinks ul').toggleClass('show');
  });
});

console.log("Script is connected!");


// Example features data
const features = [
    {
    title: "AI Performance Insights",
    subtitle: "Automated Evaluation & Reports",
    description: "Analyze academic trends, generate intelligent progress reports, and get predictive analytics for better learning outcomes using machine learning models.",
    image: "https://cdn-icons-png.flaticon.com/512/2942/2942810.png"
  },
  {
    title: "Smart Attendance",
    subtitle: "QR Code & Face Recognition",
    description: "Track student and staff attendance in real-time using AI-driven facial recognition and secure QR scans. Get instant reports, alerts for irregularities, and seamless integration with timetables.",
    image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
  },
  
  {
    title: "Smart Timetable",
    subtitle: "Auto Scheduling with Conflicts Management",
    description: "Generate error-free, optimized class schedules with smart conflict resolution for rooms, staff, and subjects. Supports real-time updates and sync with attendance.",
    image: "https://cdn-icons-png.flaticon.com/512/2022/2022320.png"
  },
  // Add more feature objects as needed
];

let currentFeatureIndex = 0;

const modal = document.getElementById("featureModal");
const closeModal = document.getElementById("closeModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalSubtitle = document.getElementById("modalSubtitle");
const modalDescription = document.getElementById("modalDescription");
const paginationCount = document.getElementById("paginationCount");

function openModal(index) {
  currentFeatureIndex = index;
  const feature = features[index];
  modalImage.src = feature.image;
  modalTitle.textContent = feature.title;
  modalSubtitle.textContent = feature.subtitle;
  modalDescription.textContent = feature.description;
  paginationCount.textContent = `${index + 1} / ${features.length}`;
  
  modal.style.display = "flex";  // Show modal
   // Optional
}


document.querySelectorAll(".read-more-btn").forEach((btn, idx) => {
  btn.addEventListener("click", () => openModal(idx));
});

document.getElementById("prevBtn").addEventListener("click", () => {
  currentFeatureIndex = (currentFeatureIndex - 1 + features.length) % features.length;
  openModal(currentFeatureIndex);
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentFeatureIndex = (currentFeatureIndex + 1) % features.length;
  openModal(currentFeatureIndex);
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

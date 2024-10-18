const mentors = [
    {
        name: "Dr. John Doe",
        expertise: "Artificial Intelligence",
        availableSlots: ["10:00 AM", "2:00 PM", "4:00 PM"]
    },
    {
        name: "Dr. Jane Smith",
        expertise: "Data Science",
        availableSlots: ["11:00 AM", "3:00 PM", "5:00 PM"]
    }
];

// Load mentors into the page
function loadMentors() {
    const mentorList = document.getElementById("mentor-profiles");
    const mentorSelect = document.getElementById("mentor");

    mentors.forEach((mentor, index) => {
        // Display mentor profiles
        const mentorDiv = document.createElement("div");
        mentorDiv.classList.add("mentor");
        mentorDiv.innerHTML = `<h3>${mentor.name}</h3>
                               <p>Expertise: ${mentor.expertise}</p>`;
        mentorList.appendChild(mentorDiv);

        // Add mentor to dropdown
        const option = document.createElement("option");
        option.value = index;
        option.text = mentor.name;
        mentorSelect.appendChild(option);
    });
}

// Update available time slots when mentor is selected
document.getElementById("mentor").addEventListener("change", function() {
    const selectedMentor = mentors[this.value];
    const timeSlotSelect = document.getElementById("time-slot");
    timeSlotSelect.innerHTML = ""; // Clear existing options

    selectedMentor.availableSlots.forEach(slot => {
        const option = document.createElement("option");
        option.value = slot;
        option.text = slot;
        timeSlotSelect.appendChild(option);
    });
});

// Handle booking submission
document.getElementById("booking").addEventListener("submit", function(event) {
    event.preventDefault();
    const mentor = mentors[document.getElementById("mentor").value];
    const timeSlot = document.getElementById("time-slot").value;

    alert(`Session booked with ${mentor.name} at ${timeSlot}`);
    // Mark the slot as booked (could implement more advanced logic)
    mentor.availableSlots = mentor.availableSlots.filter(slot => slot !== timeSlot);
});

// Initialize mentors on page load
window.onload = loadMentors;

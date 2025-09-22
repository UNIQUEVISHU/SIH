// Show form section on button click
document.getElementById("show-form").onclick = function() {
    document.getElementById("form-section").style.display = "block";
    document.getElementById("show-form").style.display = "none";
    document.querySelector(".form-heading").scrollIntoView({ behavior: "smooth" });
};

// Voice Input Feature
const voiceBtn = document.getElementById("voice-btn");
const voiceOutput = document.getElementById("voice-output");
const voiceLangSelect = document.getElementById("voice-language");

if (voiceBtn) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        let isRecording = false;
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        voiceBtn.addEventListener("click", () => {
            if (isRecording) {
                recognition.stop();
                voiceBtn.innerHTML = '<i class="fa-solid fa-microphone"></i> Start Recording';
                isRecording = false;
            } else {
                recognition.lang = voiceLangSelect.value;
                recognition.start();
                voiceBtn.innerHTML = '<i class="fa-solid fa-stop"></i> Stop Recording';
                voiceOutput.textContent = "Listening...";
                isRecording = true;
            }
        });

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            voiceOutput.textContent = transcript;
        };

        recognition.onerror = (event) => {
            console.error(event.error);
            voiceOutput.textContent = "Voice input error. Please try again.";
            voiceBtn.innerHTML = '<i class="fa-solid fa-microphone"></i> Start Recording';
            isRecording = false;
        };

        recognition.onend = () => {
            voiceBtn.innerHTML = '<i class="fa-solid fa-microphone"></i> Start Recording';
            isRecording = false;
        };
    } else {
        voiceBtn.disabled = true;
        voiceOutput.textContent = "Speech Recognition not supported in this browser.";
    }
}

// Form Submission
const farmForm = document.getElementById("farm-form");
if (farmForm) {
    farmForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = {
            location: document.getElementById("location").value,
            landSize: document.getElementById("land-size").value,
            crop: document.getElementById("crop").value,
            soilCharacter: document.getElementById("soil-character").value,
            irrigation: document.getElementById("irrigation").value,
            sowing: document.getElementById("sowing").value,
            sowingDate: document.getElementById("sowing-date").value,
            cropStage: document.getElementById("crop-stage").value,
            problem: document.getElementById("problem").value
        };

        console.log("Form Data:", formData);
        alert("Farm details submitted successfully!");
    });
}

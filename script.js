document.addEventListener("DOMContentLoaded", function() {
    const cardContainer = document.getElementById("card-container");

    // Sample medical data for each card, including image URLs
    const medicalData = [
        { title: "Cardiology",details: "Cardiology involves the diagnosis and treatment of various heart conditions such as coronary artery disease, heart failure, and arrhythmias. Cardiologists may perform procedures like angioplasty, stent placement, and pacemaker implantation. They also play a crucial role in educating patients about heart-healthy lifestyles and preventive measures.", buttonText: "Learn More", imageSrc: "Cardiology5.jpg" },
        { title: "Neurology",  details: "Neurology encompasses diseases such as Alzheimer's disease, Parkinson's disease, epilepsy, and multiple sclerosis. Neurologists diagnose and treat conditions affecting the brain, spinal cord, and nerves. They may use various diagnostic tests such as EEG, MRI, and CT scans to evaluate neurological disorders.", buttonText: "Learn More", imageSrc: "Neurology1.jpeg" },
        { title: "Orthopedics", details: "Orthopedics covers a wide range of conditions including fractures, arthritis, sports injuries, and spinal disorders. Orthopedic surgeons perform surgeries such as joint replacements, spinal fusion, and fracture repair. They also provide nonsurgical treatments like physical therapy and pain management.", buttonText: "Learn More", imageSrc: "Orthopedics5.jpg" },
        { title: "Pediatrics", details: "Pediatricians manage the physical, mental, and emotional well-being of their patients, from birth until the age of 18. They provide preventive care, vaccinations, and treatment for common childhood illnesses. Pediatricians also monitor growth and development milestones.", buttonText: "Learn More", imageSrc: "Pediatrics.jpeg" },
        { title: "Dermatology", details: "Dermatology deals with conditions such as acne, eczema, psoriasis, and skin cancer. Dermatologists diagnose and treat skin conditions through medications, surgical procedures, and cosmetic techniques. They also provide skin cancer screenings and perform procedures like mole removal.", buttonText: "Learn More", imageSrc: "Dermatology.jpeg" },
        { title: "Oncology", details: "Oncology involves the use of chemotherapy, radiation therapy, surgery, and targeted therapy to treat cancer. Oncologists specialize in various types of cancer and coordinate treatment plans for patients. They also provide supportive care to manage side effects and improve quality of life.", buttonText: "Learn More", imageSrc: "Oncology3.jpeg" },
        { title: "Gastroenterology" , details: "Gastroenterology covers conditions such as irritable bowel syndrome, inflammatory bowel disease, and liver diseases. Gastroenterologists perform procedures like endoscopy, colonoscopy, and liver biopsy. They also provide nutritional counseling and manage conditions like acid reflux and ulcers.", buttonText: "Learn More", imageSrc: "Gastroenterology.png" },
        { title: "Ophthalmology", details: "Ophthalmology includes the treatment of conditions such as cataracts, glaucoma, and macular degeneration. Ophthalmologists perform surgeries like cataract removal, LASIK, and corneal transplants. They also prescribe corrective lenses and manage eye infections.", buttonText: "Learn More", imageSrc: "Opthalmology5.jpg" },
        { title: "Psychiatry",details: "Psychiatry involves the use of psychotherapy, medications, and other interventions to treat mental illnesses such as depression, anxiety, and schizophrenia. Psychiatrists work with patients to manage their symptoms and improve their quality of life. They also provide counseling and support to families.", buttonText: "Learn More", imageSrc: "Psychiatry.jpeg" },
        { title: "Urology", details: "Urology deals with conditions such as urinary incontinence, kidney stones, and prostate cancer. Urologists perform surgeries such as prostatectomy, nephrectomy, and bladder reconstruction. They also provide treatment for erectile dysfunction and perform vasectomies.", buttonText: "Learn More", imageSrc: "Urology5.jpg" }
    ];

    // Create cards dynamically
    medicalData.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h2>${item.title}</h2>
            <img src="${item.imageSrc}" alt="${item.title}">
            <button class="details-btn" data-details="${item.details}">${item.buttonText}</button>
        `;
        
        // Apply styling to create gap between image and button
        card.style.display = "flex";
        card.style.flexDirection = "column";
        card.style.alignItems = "center";

        card.querySelector("img").style.marginBottom = "10px";

        cardContainer.appendChild(card);
    });

    // Add event listeners to toggle details visibility
    const detailButtons = document.querySelectorAll(".details-btn");
    detailButtons.forEach(button => {
        button.addEventListener("click", function() {
            const details = this.getAttribute("data-details");
            openPopup(details);
        });
    });

    // Function to open popup window
    function openPopup(details) {
        const popupWindow = window.open("", "Popup", "width=400,height=400");

        // Popup content
        popupWindow.document.write(`
            <html>
            <head>
                <title>Card Details</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        padding: 20px;
                    }
                    h2 {
                        color:#1d1515;
                    }
                    p {
                        margin-bottom: 20px;
                    }
                    .close-btn {
                        background-color: #007bff;
                        color: #fff;
                        border: none;
                        border-radius: 4px;
                        padding: 8px 16px;
                        cursor: pointer;
                        margin-top: 20px;
                    }
                    .close-btn:hover {
                        background-color: #0056b3;
                    }
                </style>
            </head>
            <body>
                <h2>${details.split(':')[0]}</h2>
                <p>${details.split(':')[1] || ''}</p>
                <button class="close-btn" onclick="window.close()">Close</button>
            </body>
            </html>
        `);
    }
});

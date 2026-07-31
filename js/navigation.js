/* ==========================================
   Navigation
   ========================================== */

/* ---------- 요소 ---------- */

const steps = document.querySelectorAll(".step-page");
const stepIndicators = document.querySelectorAll(".step");
const stepLines = document.querySelectorAll(".step-line");


/* ==========================================
   Step 이동
   ========================================== */

function goToStep(stepNumber) {

    /* 현재 페이지 숨기기 */
    steps.forEach(step => {

        step.classList.remove("active");

    });

    /* 선택한 페이지 표시 */
    document
        .querySelector(`.step-page[data-step="${stepNumber}"]`)
        .classList.add("active");


    /* Stepper 초기화 */
    stepIndicators.forEach(step => {

        step.classList.remove("active");

    });

    stepLines.forEach(line => {

        line.classList.remove("active");

    });


    /* 현재 Step 활성화 */
    for (let i = 0; i < stepNumber; i++) {

        stepIndicators[i].classList.add("active");

    }


    /* 연결선 활성화 */
    for (let i = 0; i < stepNumber - 1; i++) {

        stepLines[i].classList.add("active");

    }


    /* Step별 초기화 */

if (stepNumber === 2 && typeof initializeStep2 === "function") {

    initializeStep2();

}

if (stepNumber === 3 && typeof renderSplitImages === "function") {

    renderSplitImages();

}

}
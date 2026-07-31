/* ==========================================
   Step 2
   ========================================== */

/*
    역할

    1. Step2가 열리면 업로드한 이미지 표시
    2. 이전 버튼
    3. 이미지 분리 시작
*/


/* ===========================
   요소
   =========================== */

/* previewImage는 step1.js에서 이미 선언됨 */

const previewPlaceholder =
    document.getElementById("previewPlaceholder");

const backToUpload =
    document.getElementById("backToUpload");

const splitBtn =
    document.getElementById("splitBtn");


/* ===========================
   Step2 초기화
   =========================== */

function initializeStep2() {

    if (!window.selectedImage.src) {

        previewImage.style.display = "none";

        previewPlaceholder.style.display = "flex";

        return;

    }

    previewImage.src = window.selectedImage.src;

    previewImage.style.display = "block";

    previewPlaceholder.style.display = "none";

}


/* ===========================
   이전 버튼
   =========================== */

backToUpload.addEventListener("click", () => {

    goToStep(1);

});


/* ===========================
   이미지 분리
   =========================== */

splitBtn.addEventListener("click", async () => {

    if (!window.selectedImage.src) {

        alert("이미지를 먼저 업로드하세요.");

        return;

    }

    splitBtn.disabled = true;

try {

    await splitImage();

} finally {

    splitBtn.disabled = false;
}

});
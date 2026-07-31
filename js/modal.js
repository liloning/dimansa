/* ==========================================
   Modal
   ========================================== */

/* 요소 */

const imageModal =
    document.getElementById("imageModal");

const modalImage =
    document.getElementById("modalImage");

const closeModalBtn =
    document.getElementById("closeModal");


/* ==========================================
   열기
   ========================================== */

function openModal(imageURL) {

    modalImage.src = imageURL;

    imageModal.classList.add("show");

}


/* ==========================================
   닫기
   ========================================== */

function closeModal() {

    imageModal.classList.remove("show");

    modalImage.src = "";

}


/* ==========================================
   이벤트
   ========================================== */

closeModalBtn.addEventListener(
    "click",
    closeModal
);


/* 배경 클릭 */

imageModal.addEventListener("click", event => {

    if (event.target === imageModal) {

        closeModal();

    }

});


/* ESC */

document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        imageModal.classList.contains("show")
    ) {

        closeModal();

    }

});
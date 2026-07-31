/* ===========================
   Step 1
   =========================== */

/* ---------- 요소 ---------- */

const uploadZone = document.querySelector(".upload-zone");
const fileInput = document.getElementById("fileInput");

const nextBtn = document.getElementById("nextBtn");

const previewImage = document.getElementById("previewImage");

const filePlaceholder = document.querySelector(".file-placeholder");
const fileDetails = document.querySelector(".file-details");

const fileName = document.getElementById("fileName");
const fileSize = document.getElementById("fileSize");
const fileType = document.getElementById("fileType");

/* ---------- 전역 데이터 ---------- */

window.uploadedFile = null;

/* 모든 Step에서 사용할 이미지 */
window.selectedImage = new Image();

/* ===========================
   이벤트 등록
   =========================== */

fileInput.addEventListener("change", handleFileSelect);

uploadZone.addEventListener("dragenter", handleDragEnter);
uploadZone.addEventListener("dragover", handleDragOver);
uploadZone.addEventListener("dragleave", handleDragLeave);
uploadZone.addEventListener("drop", handleDrop);

nextBtn.addEventListener("click", () => {
  goToStep(2);
});

/* ===========================
   파일 선택
   =========================== */

function handleFileSelect(event) {
  const file = event.target.files[0];

  if (!file) return;

  processFile(file);
}

/* ===========================
   Drag & Drop
   =========================== */

function handleDragEnter(event) {
  event.preventDefault();

  uploadZone.classList.add("dragover");
}

function handleDragOver(event) {
  event.preventDefault();
}

function handleDragLeave() {
  uploadZone.classList.remove("dragover");
}

function handleDrop(event) {
  event.preventDefault();

  uploadZone.classList.remove("dragover");

  const file = event.dataTransfer.files[0];

  if (!file) return;

  processFile(file);
}

/* ===========================
   파일 처리
   =========================== */

function processFile(file) {
  window.uploadedFile = file;

  const reader = new FileReader();

  reader.onload = function (event) {
    const imageUrl = event.target.result;

    /* Step2에서 사용할 이미지 */
    selectedImage.onload = function () {
        
      if (
        selectedImage.width !== APP_CONFIG.IMAGE_WIDTH ||
        selectedImage.height !== APP_CONFIG.IMAGE_HEIGHT
      ) {
        alert(
  `이미지는 ${APP_CONFIG.IMAGE_WIDTH} × ${APP_CONFIG.IMAGE_HEIGHT}px 이어야 합니다.`,
);

selectedImage.src = "";
previewImage.src = "";

fileInput.value = "";

nextBtn.disabled = true;

return;
      }

      previewImage.src = imageUrl;

      showFileInfo(file);

      nextBtn.disabled = false;
    };

    selectedImage.src = imageUrl;
  };

  reader.readAsDataURL(file);
}

/* ===========================
   파일 정보
   =========================== */

function showFileInfo(file) {
  filePlaceholder.hidden = true;

  fileDetails.hidden = false;

  fileName.textContent = `✔ ${file.name}`;

  fileSize.textContent = `${selectedImage.width} × ${selectedImage.height} px`;

  fileType.textContent = file.type.replace("image/", "").toUpperCase();
}

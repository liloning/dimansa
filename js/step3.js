/* ==========================================
   Step 3
   ========================================== */

/*
    역할

    1. 분리된 이미지 출력

    2. 개수 표시

    3. 이미지 클릭 이벤트

    4. 처음으로 버튼
*/


/* ==========================================
   요소
   ========================================== */

const imageGrid =
    document.getElementById("imageGrid");

const pieceCount =
    document.getElementById("pieceCount");

const restartBtn =
    document.getElementById("restartBtn");


/* ==========================================
   결과 출력
   ========================================== */

function renderSplitImages() {

    imageGrid.innerHTML = "";

    pieceCount.textContent =
        `${splitImages.length} / ${APP_CONFIG.GRID_COLUMNS * APP_CONFIG.GRID_ROWS}`;


    if (splitImages.length === 0) {

        imageGrid.innerHTML =

        `
            <div class="empty-result">

                아직 생성된 이미지가 없습니다.

            </div>
        `;

        return;

    }


    splitImages.forEach(piece => {

        const item =
            createImageItem(piece);

        imageGrid.appendChild(item);

    });

}


/* ==========================================
   이미지 카드 생성
   ========================================== */

function createImageItem(piece) {

    const item =
        document.createElement("div");

    item.className = "image-item";


    const thumb =
        document.createElement("div");

    thumb.className = "image-thumb";


    const image =
        document.createElement("img");

    image.src = piece.dataURL;

    image.alt =
        `Emoji ${piece.id}`;


    /* 확대보기 */

    image.addEventListener("click", () => {

        if (typeof openModal === "function") {

            openModal(piece.dataURL);

        }

    });


    thumb.appendChild(image);


    const number =
        document.createElement("div");

    number.className = "image-index";

    number.textContent =
        `#${piece.id}`;


    item.appendChild(thumb);

    item.appendChild(number);


    return item;

}


/* ==========================================
   처음으로
   ========================================== */

restartBtn.addEventListener("click", resetProject);


/* ==========================================
   프로젝트 초기화
   ========================================== */

function resetProject() {

    splitImages.length = 0;

    window.selectedImage.src = "";

    imageGrid.innerHTML = "";

    pieceCount.textContent = "0 / 42";


    fileInput.value = "";

    filePlaceholder.hidden = false;

    fileDetails.hidden = true;

    nextBtn.disabled = true;


    goToStep(1);

}
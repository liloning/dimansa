/* ==========================================
   Split Manager
   ========================================== */

/*
    역할

    1. 이미지를 42개로 분리
    2. canvas.js 호출
    3. 결과 저장
    4. Step3으로 이동
*/

/* ==========================================
   전역 데이터
   ========================================== */

/* 분리된 Canvas 저장 */
window.splitImages = [];

/* ==========================================
   이미지 분리 시작
   ========================================== */

async function splitImage() {
  if (!window.selectedImage.src) {
    alert("이미지를 먼저 업로드하세요.");

    return;
  }

  /* 이전 결과 삭제 */
  splitImages.length = 0;

  const image = window.selectedImage;


  /* 42개의 이미지 생성 */

  for (let row = 0; row < APP_CONFIG.GRID_ROWS; row++) {
    for (let col = 0; col < APP_CONFIG.GRID_COLUMNS; col++) {
      const x = col * APP_CONFIG.SOURCE_SIZE;
      const y = row * APP_CONFIG.SOURCE_SIZE;

      /* 360×360 자르기 */
      const croppedCanvas = cropImage(image, x, y);

      /* 180×180 축소 */
      const resizedCanvas = resizeCanvas(croppedCanvas);

      /* 결과 저장 */
      splitImages.push({
        id: splitImages.length + 1,

        row,

        col,

        canvas: resizedCanvas,

        dataURL: canvasToDataURL(resizedCanvas),
      });
    }
  }

  console.log(

    `${splitImages.length}개의 이미지 생성 완료`

);

console.log("STEP3 이동");
goToStep(3);
}

/* ==========================================
   Canvas Engine
   ========================================== */

/*
    역할

    1. Canvas 생성

    2. 이미지 자르기

    3. 180px로 리사이즈

    4. Blob 생성

    모든 Canvas 작업은
    이 파일에서만 수행합니다.
*/


/* ==========================================
   Canvas 생성
   ========================================== */

function createCanvas(width, height) {

    const canvas = document.createElement("canvas");

    canvas.width = width;

    canvas.height = height;

    return canvas;

}


/* ==========================================
   원본 이미지 자르기 (360 x 360)
   ========================================== */

function cropImage(sourceImage, x, y) {

    const size = APP_CONFIG.SOURCE_SIZE;

    const canvas = createCanvas(size, size);

    const context = canvas.getContext("2d");

    context.drawImage(

        sourceImage,

        x,
        y,

        size,
        size,

        0,
        0,

        size,
        size

    );

    return canvas;

}


/* ==========================================
   Canvas 리사이즈 (360 → 180)
   ========================================== */

function resizeCanvas(sourceCanvas) {

    const outputSize = APP_CONFIG.OUTPUT_SIZE;

    const resizedCanvas =
        createCanvas(outputSize, outputSize);

    const context =
        resizedCanvas.getContext("2d");

    context.drawImage(

        sourceCanvas,

        0,
        0,

        sourceCanvas.width,
        sourceCanvas.height,

        0,
        0,

        outputSize,
        outputSize

    );

    return resizedCanvas;

}


/* ==========================================
   Canvas → Blob
   ========================================== */

function canvasToBlob(canvas) {

    return new Promise(resolve => {

        canvas.toBlob(

            blob => resolve(blob),

            APP_CONFIG.OUTPUT_FORMAT

        );

    });

}


/* ==========================================
   Canvas → DataURL
   ========================================== */

function canvasToDataURL(canvas) {

    return canvas.toDataURL(

        APP_CONFIG.OUTPUT_FORMAT

    );

}
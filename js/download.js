/* ==========================================
   Download
   ========================================== */

/* 버튼 */

const downloadAllBtn =
    document.getElementById("downloadAll");

const downloadZipBtn =
    document.getElementById("downloadZip");


/* ==========================================
   PNG 다운로드
   ========================================== */

downloadAllBtn.addEventListener(
    "click",
    downloadAllPNG
);

async function downloadAllPNG() {

    if (splitImages.length === 0) {

        alert("다운로드할 이미지가 없습니다.");

        return;

    }

    for (const piece of splitImages) {

        const link =
            document.createElement("a");

        link.href = piece.dataURL;

        link.download =
            `emoticon_${String(piece.id).padStart(2, "0")}.png`;

        document.body.appendChild(link);

        link.click();

        link.remove();

        await wait(80);

    }

}


/* ==========================================
   ZIP 다운로드
   ========================================== */

downloadZipBtn.addEventListener(
    "click",
    downloadZIP
);

async function downloadZIP() {

    if (splitImages.length === 0) {

        alert("다운로드할 이미지가 없습니다.");

        return;

    }

    downloadZipBtn.disabled = true;

    downloadZipBtn.textContent =
        "ZIP 생성 중...";

    try {

        const zip = new JSZip();

        for (const piece of splitImages) {

            const blob =
                await canvasToBlob(piece.canvas);

            zip.file(

                `emoji_${String(piece.id).padStart(2, "0")}.png`,

                blob

            );

        }

        const zipBlob =
            await zip.generateAsync({

                type: "blob"

            });

        const url =
            URL.createObjectURL(zipBlob);

        const link =
            document.createElement("a");

        link.href = url;

        link.download =
            "emoticon.zip";

        document.body.appendChild(link);

        link.click();

        link.remove();

        URL.revokeObjectURL(url);

    }

    catch (error) {

        console.error(error);

        alert("ZIP 생성 중 오류가 발생했습니다.");

    }

    finally {

        downloadZipBtn.disabled = false;

        downloadZipBtn.textContent =
            "ZIP 다운로드";

    }

}


/* ==========================================
   Delay
   ========================================== */

function wait(ms) {

    return new Promise(resolve => {

        setTimeout(resolve, ms);

    });

}
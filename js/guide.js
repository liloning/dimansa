/* ==========================================
   Guide Download
   ========================================== */

const guideButton =
    document.getElementById("downloadGuide");


guideButton.addEventListener(
    "click",
    downloadGuide
);


function downloadGuide() {

    const link =
        document.createElement("a");

    link.href =
        "assets/guide.png";

    link.download =
        "kakao_mini_guide(6x7).png";

    document.body.appendChild(link);

    link.click();

    link.remove();

}
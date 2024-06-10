(function () {
    const daltonismo = {
        normal: "",
        protanopia: `
            :root {
                filter: brightness(1.05) contrast(1.2) sepia(0.3) saturate(1.2) hue-rotate(5deg);
            }
        `,
    };

    const filtro = (style) => {
        let styleElement = document.getElementById("filtroProtanopia");

        if (!styleElement) {
            styleElement = document.createElement("style");
            styleElement.id = "filtroProtanopia";
            document.head.appendChild(styleElement);
        }
        styleElement.textContent = style;
    };

    chrome.storage.sync.get("protanopia", (data) => {
        const protanopia = data.protanopia || "normal";
        const layout = daltonismo[protanopia];
        filtro(layout);
    });

    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.type === "updateContent") {
            chrome.storage.sync.get("protanopia", (data) => {
                const protanopia = data.protanopia || "normal";
                const layout = daltonismo[protanopia];
                filtro(layout);
            });
        }
    });
})();
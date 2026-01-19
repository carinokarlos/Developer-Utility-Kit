// 1. TAB SWITCHING
function switchTab(tabId) {
    // Hide all panels
    document.querySelectorAll('.tool-panel').forEach(p => p.classList.remove('active'));
    // Show selected panel
    document.getElementById(tabId).classList.add('active');
    
    // Update button styles
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    event.currentTarget.classList.add('active');
}

// 2. JSON TOOLS
function formatJSON() {
    const input = document.getElementById('jsonInput').value;
    try {
        const parsed = JSON.parse(input);
        document.getElementById('jsonOutput').value = JSON.stringify(parsed, null, 4);
    } catch (e) {
        document.getElementById('jsonOutput').value = "❌ INVALID JSON";
    }
}
function minifyJSON() {
    const input = document.getElementById('jsonInput').value;
    try {
        const parsed = JSON.parse(input);
        document.getElementById('jsonOutput').value = JSON.stringify(parsed);
    } catch (e) {
        document.getElementById('jsonOutput').value = "❌ INVALID JSON";
    }
}

// 3. BASE64 TOOLS
function encode64() {
    const input = document.getElementById('b64Input').value;
    document.getElementById('b64Output').value = btoa(input);
}
function decode64() {
    const input = document.getElementById('b64Input').value;
    try {
        document.getElementById('b64Output').value = atob(input);
    } catch (e) {
        document.getElementById('b64Output').value = "❌ INVALID BASE64";
    }
}

// 4. PX TO REM
function convertPxToRem() {
    const px = document.getElementById('pxInput').value;
    const base = document.getElementById('baseSize').value;
    document.getElementById('remInput').value = (px / base).toFixed(3);
}
function convertRemToPx() {
    const rem = document.getElementById('remInput').value;
    const base = document.getElementById('baseSize').value;
    document.getElementById('pxInput').value = (rem * base).toFixed(0);
}

// 5. SHADOW GENERATOR
function updateShadow() {
    const x = document.getElementById('rangeX').value;
    const y = document.getElementById('rangeY').value;
    const blur = document.getElementById('rangeBlur').value;
    const spread = document.getElementById('rangeSpread').value;
    const color = document.getElementById('shadowColor').value;

    // Convert Hex to RGBA for opacity (hardcoded 0.4 opacity for style)
    const shadowString = `${x}px ${y}px ${blur}px ${spread}px ${color}`;
    
    document.getElementById('shadowBox').style.boxShadow = shadowString;
    document.getElementById('codeShadow').innerText = shadowString + ";";

    // Update labels
    document.getElementById('valX').innerText = x + 'px';
    document.getElementById('valY').innerText = y + 'px';
    document.getElementById('valBlur').innerText = blur + 'px';
    document.getElementById('valSpread').innerText = spread + 'px';
}

// UTILITIES
function copyToClipboard(elementId) {
    const copyText = document.getElementById(elementId);
    copyText.select();
    document.execCommand("copy");
    alert("COPIED TO CLIPBOARD");
}
function copyShadowCode() {
    const code = "box-shadow: " + document.getElementById('codeShadow').innerText;
    navigator.clipboard.writeText(code);
    alert("CSS COPIED!");
}

// Init Shadow on load
updateShadow();

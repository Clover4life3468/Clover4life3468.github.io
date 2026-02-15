async function copyContent() {
    const textElement = document.getElementById('emailcontainer');
    const content = textElement.textContent; // Use textContent to get the text

    try {
        await navigator.clipboard.writeText(content);
        console.log('Content copied to clipboard');
        alert('Copied to clipboard: ' + content); // Provide user feedback

    } catch (err) {
        console.error('Failed to copy: ', err);
        alert('Failed to copy text.');
    }
}
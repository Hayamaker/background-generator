function colorGenerator() {
    let tag = '#';
    let color = '1234567890ABCDEF'
    for (let i = 0; i < 6; i++) {
        tag += color.charAt(Math.floor(Math.random() * color.length));
    }
    document.getElementById('color-display').innerHTML = tag;
    return document.getElementById('body').style.backgroundColor = tag;
}

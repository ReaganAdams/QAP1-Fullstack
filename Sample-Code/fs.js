// Import the filesystem module to work with the file system
const fs = require('fs');

// Write data to a file
fs.writeFile('filename', 'Hello Node.js', (err) => {
    if (err) throw err;
    console.log('File has been written');

    // Read the file's content
    fs.readFile('filename', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('File content:', data);

        // Delete the file
        fs.unlink('filename', (err) => {
            if (err) throw err;
            console.log('File deleted');
        });
    });
});

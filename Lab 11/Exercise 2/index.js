const fs = require("fs"); // Import fs module

// 1. Create a file
fs.writeFile("sample.txt", "Hello, this is Exercise 2 file.\n", (err) => {
    if (err) {
        console.log("Error creating file:", err);
        return;
    }
    console.log("File created successfully.");

    // 2. Read the file
    fs.readFile("sample.txt", "utf8", (err, data) => {
        if (err) {
            console.log("Error reading file:", err);
            return;
        }
        console.log("File content:\n", data);

        // 3. Append to file
        fs.appendFile("sample.txt", "This line is appended.\n", (err) => {
            if (err) {
                console.log("Error appending file:", err);
                return;
            }
            console.log("Data appended successfully.");

            // 4. Read again after append
            fs.readFile("sample.txt", "utf8", (err, data) => {
                if (err) {
                    console.log("Error reading file:", err);
                    return;
                }
                console.log("Updated content:\n", data);

                // 5. Delete file
                fs.unlink("sample.txt", (err) => {
                    if (err) {
                        console.log("Error deleting file:", err);
                        return;
                    }
                    console.log("File deleted successfully.");
                });
            });
        });
    });
});
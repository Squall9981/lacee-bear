// const fs = require('fs');
// const path = require('path');

// const folderPath = './'; // Replace 'your_folder_path' with the path to your folder

// // Function to read files in a folder
// function readFilesInFolder(folderPath) {
// 	const files = fs.readdirSync(folderPath);
// 	const output = require('./index.js');
// 	let id = output.length + 1;

// 	files.forEach((file) => {
// 		const filePath = path.join(folderPath, file);
// 		// Assuming only image files need to be processed, you can modify the condition as per your file types
// 		if (fs.statSync(filePath).isFile() && /\.(jpg|jpeg|png|gif)$/i.test(file) && !output.some((item) => item.imagePath === filePath)) {
// 			// Create an object for each file
// 			const fileInfo = {
// 				id: id++, // Assign unique ID, you can change this logic as per your requirement
// 				imagePath: filePath,
// 				shortDesc: '',
// 				longDesc: '',
// 			};
// 			output.push(fileInfo);
// 		}
// 	});

// 	return output;
// }

// // Function to write JSON data to a file
// function writeToJSONFile(data) {
// 	const jsonOutput = JSON.stringify(data, null, 2); // Convert array to formatted JSON
// 	fs.writeFileSync('output.json', jsonOutput); // Write JSON data to output.json file
// 	console.log('JSON file created successfully!');
// }

// // Read files in the folder and generate JSON output
// const filesData = readFilesInFolder(folderPath);
// writeToJSONFile(filesData);

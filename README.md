# MergeX Tools

MergeX Tools is a simple web application that provides a convenient way to merge PDF documents seamlessly. With this tool, you can easily combine multiple PDF files into a single, unified document. Whether you're merging reports, presentations, or any other PDF content, MergeX Tools has got you covered.

## Features

- **User-Friendly Interface:** The application features an intuitive and user-friendly interface, making it easy for users to merge their PDF documents effortlessly.

- **Multiple File Upload:** Users can upload multiple PDF files simultaneously, streamlining the process of merging documents.

- **PDF Merging:** The core functionality of the application is its ability to merge PDF files. It uses the `pdf-merger-js` library to combine the uploaded PDFs into a single, merged document.

## Getting Started

Follow these steps to get the project up and running on your local machine:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/dxdelvin/PDF_Merger.git
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd MergeX-Tools (// or whatever Folder Name You have Given!)
   ```

3. **Install Dependencies:**
   ```bash
   npm install
   ```

4. **Start the Application:**
   ```bash
   node app.js
   ```

5. **Access the Application:**
   Open your web browser and go to [http://localhost:5000](http://localhost:5000).

## Dependencies
- Only 2 PDF Files Can BE MERGED FOR NOW!
- [Express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js.
- [Multer](https://github.com/expressjs/multer): Middleware for handling `multipart/form-data` (file uploads).
- [pdf-merger-js](https://www.npmjs.com/package/pdf-merger-js): Library for merging PDF documents.

## Usage

1. Access the application through the homepage.

2. Enter the PDF files you want to merge using the file input.

3. Click the "Submit" button to initiate the merging process.

4. Once the merging is complete, you will be redirected to a page where you can download the merged PDF.

## Folder Structure

- **uploads:** Temporary directory to store uploaded PDF files.
- **static:** Directory for static files (CSS, images, etc.).
- **public:** Directory to store merged PDFs.

By Delvin Dsouza From thedx

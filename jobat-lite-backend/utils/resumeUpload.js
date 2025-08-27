// utils/resumeUpload.js

const fs = require('fs');
const pdfParse = require('pdf-parse');
const mammoth = require('mammoth');

/**
 * Extracts text from a PDF file.
 * @param {Buffer} fileBuffer - PDF file buffer
 * @returns {Promise<String>} Extracted text
 */
exports.extractTextFromPDF = async (fileBuffer) => {
  const data = await pdfParse(fileBuffer);
  return data.text;
};

/**
 * Extracts text from a DOCX file.
 * @param {Buffer} fileBuffer - DOCX file buffer
 * @returns {Promise<String>} Extracted text
 */
exports.extractTextFromDOCX = async (fileBuffer) => {
  const result = await mammoth.extractRawText({ buffer: fileBuffer });
  return result.value;
};

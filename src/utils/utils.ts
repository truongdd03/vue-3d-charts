import { FontLoader, TextGeometry } from 'three/examples/jsm/Addons.js';

/**
 * Return the width of a matrix
 * @param matrix
 * @returns
 */
export const safeGetMatrixWidth = (matrix: number[][]) => {
  return matrix.length == 0 ? 0 : matrix[0].length;
};

/**
 * Return max value in matrix
 * @param matrix
 * @returns
 */
export const safeGetMaxValInMatrix = (matrix: number[][]) => {
  return Math.max(...matrix.flat());
};

/**
 * Return min value in matrix
 * @param matrix
 * @returns
 */
export const safeGetMinValInMatrix = (matrix: number[][]) => {
  return Math.min(...matrix.flat());
};

/**
 * Return the scaling factor to scale a matrix to range 0 -> 10
 */
export const getScalingFactor = (matrix: number[][]) => {
  // Find the minimum and maximum values in the matrix
  const minVal = safeGetMinValInMatrix(matrix);
  const maxVal = safeGetMaxValInMatrix(matrix);

  // Calculate the scaling factor
  return 10 / (maxVal - minVal);
};

/**
 * Return the value after scaling
 * @param value
 * @param minVal original min value of the matrix
 * @param scalingFactor
 * @returns
 */
export const getScaledValue = (value: number, minVal: number, scalingFactor: number) => {
  return (value - minVal) * scalingFactor;
};

export const getTextWidth = (text: string): Promise<number> => {
  const loader = new FontLoader();

  return new Promise((resolve, reject) => {
    // Load the font and calculate width
    loader.load('https://raw.githubusercontent.com/Tresjs/assets/main/fonts/FiraCodeRegular.json', (font) => {
      const textGeometry = new TextGeometry(text, {
        font: font,
        size: 0.2,
        depth: 0.1,
      });

      // Compute the bounding box of the geometry
      textGeometry.computeBoundingBox();
      const boundingBox = textGeometry.boundingBox;

      if (boundingBox) {
        const width = boundingBox.max.x - boundingBox.min.x;
        resolve(width);
      } else {
        reject(new Error('Failed to compute text width'));
      }
    });
  });
};

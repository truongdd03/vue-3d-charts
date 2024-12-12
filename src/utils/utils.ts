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

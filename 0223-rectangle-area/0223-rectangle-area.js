/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
const computeRectangleArea = (x1, x2, y1, y2) => {
    return (x2 - x1) * (y2 - y1)
}
const computeArea = (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) => {
    const totalArea = computeRectangleArea(ax1, ax2, ay1, ay2) + computeRectangleArea(bx1, bx2, by1, by2)
    
    const cx1 = Math.max(ax1, bx1)
    const cx2 = Math.min(ax2, bx2)
    const cy1 = Math.max(ay1, by1)
    const cy2 = Math.min(ay2, by2)
    
    let overlapArea = 0
    if (cx2 > cx1 && cy2 > cy1)
        overlapArea = computeRectangleArea(cx1, cx2, cy1, cy2)
    
    return totalArea - overlapArea
};
function housePainting(x, y, h) {
    
    let sideWall = x * y;
    let window = 1.5 * 1.5;
    let twoWalls = 2 * sideWall - 2 * window;
    let backWall = x * x;
    let entrance = 1.2 * 2;
    let totalBackAndFront = backWall * 2 - entrance;
    let totalAreaWalls = twoWalls + totalBackAndFront;
    let greenPaint = totalAreaWalls / 3.4;

    let twoRectangelsOnRoof = 2 * (x * y);
    let twoTriangelsOnRoof = 2 * (x * h / 2);
    let totalAreaRoof = twoRectangelsOnRoof + twoTriangelsOnRoof;
    let redPaint = totalAreaRoof / 4.3;

    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));
    
}

housePainting(10.25, 15.45, 8.88);
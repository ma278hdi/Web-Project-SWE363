class Pieces{
    constructor(Shape,size,type,img){
        this.Shape = Shape;
        this.size = size;
        this.type = type;
        this.img = img;
    }
    loadPieces(place){
        let cell = document.getElementsByClassName("Pcell")[place]
        let img = document.createElement("img")
        img.src = this.img
        img.width = "100"
        img.height = "100"
        cell.appendChild(img)
    }
}

let piece1 = new Pieces("rec","big","filled","QuartoPieces/black_B_F_R.png")
piece1.loadPieces(0)
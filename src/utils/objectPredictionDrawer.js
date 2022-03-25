export const drawRect = (detections, ctx) => {
    
    detections.forEach(prediction => {
        
        // Get prediction results
        const [x, y, width, height] = prediction["bbox"]
        const text = prediction["class"]

        // Set styling.
        ctx.font = "25px Arial"
        ctx.strokeStyle = "#337" 
        ctx.fillStyle = "#fff"

        // Draw retangles and text.
        ctx.beginPath()
        ctx.fillText(text, x, y)
        ctx.rect(x, y, width, height)
        ctx.stroke()
    });
}
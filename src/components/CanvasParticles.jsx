import React, { useEffect, useRef } from "react";

export default function CanvasParticles({ isDarkMode }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let time = 0;
    
    // Grid settings
    const cols = 28;
    const rows = 20;
    const mouse = { x: null, y: null, radius: 180 };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    handleResize();

    // Render loop
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Calculate spacing
      const cellWidth = canvas.width / (cols - 1);
      const cellHeight = canvas.height / (rows - 1);
      
      const grid = [];
      time += 0.015; // Speed of sine waves

      // 1. Generate deformed grid nodes
      for (let r = 0; r < rows; r++) {
        grid[r] = [];
        for (let c = 0; c < cols; c++) {
          // Standard coordinate
          let originalX = c * cellWidth;
          let originalY = r * cellHeight;
          
          // Math wave offsets (incorporate sine and cosine)
          const waveX = Math.sin(time + c * 0.3 + r * 0.2) * 12;
          const waveY = Math.cos(time + c * 0.2 + r * 0.35) * 12;

          let posX = originalX + waveX;
          let posY = originalY + waveY;

          // Mouse warp factor
          if (mouse.x !== null && mouse.y !== null) {
            const dx = mouse.x - posX;
            const dy = mouse.y - posY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < mouse.radius) {
              const force = (mouse.radius - dist) / mouse.radius;
              // Push nodes away from mouse or pull (let's bend mesh organic-style towards cursor)
              posX += (dx / dist) * force * 50;
              posY += (dy / dist) * force * 50;
            }
          }

          grid[r][c] = { x: posX, y: posY };
        }
      }

      // 2. Draw wireframe mesh links
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const node = grid[r][c];

          // Link horizontally to right neighbor
          if (c < cols - 1) {
            const nextNode = grid[r][c + 1];
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(nextNode.x, nextNode.y);
            
            // Neon gradient style connection
            const grad = ctx.createLinearGradient(node.x, node.y, nextNode.x, nextNode.y);
            if (isDarkMode) {
              grad.addColorStop(0, "rgba(0, 240, 255, 0.08)"); // Cyber Cyan
              grad.addColorStop(0.5, "rgba(138, 43, 226, 0.06)"); // Proton Purple
              grad.addColorStop(1, "rgba(0, 255, 135, 0.08)"); // Matrix Emerald
            } else {
              grad.addColorStop(0, "rgba(0, 240, 255, 0.04)");
              grad.addColorStop(1, "rgba(138, 43, 226, 0.04)");
            }
            
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }

          // Link vertically to bottom neighbor
          if (r < rows - 1) {
            const nextNode = grid[r + 1][c];
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(nextNode.x, nextNode.y);

            const grad = ctx.createLinearGradient(node.x, node.y, nextNode.x, nextNode.y);
            if (isDarkMode) {
              grad.addColorStop(0, "rgba(138, 43, 226, 0.08)");
              grad.addColorStop(1, "rgba(0, 240, 255, 0.06)");
            } else {
              grad.addColorStop(0, "rgba(138, 43, 226, 0.04)");
              grad.addColorStop(1, "rgba(0, 240, 255, 0.03)");
            }

            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }

          // Draw neon glowing node points
          if (c % 2 === 0 && r % 2 === 0) {
            ctx.beginPath();
            ctx.arc(node.x, node.y, 1.2, 0, Math.PI * 2);
            ctx.fillStyle = isDarkMode ? "rgba(0, 240, 255, 0.3)" : "rgba(0, 240, 255, 0.15)";
            ctx.fill();
            
            // Draw a subtle secondary ring on hover
            if (mouse.x !== null && mouse.y !== null) {
              const dx = mouse.x - node.x;
              const dy = mouse.y - node.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < 80) {
                ctx.beginPath();
                ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
                ctx.strokeStyle = "rgba(0, 255, 135, 0.2)";
                ctx.lineWidth = 0.5;
                ctx.stroke();
              }
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDarkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none transition-all duration-700"
      style={{
        background: isDarkMode 
          ? "radial-gradient(circle at 50% 50%, #03030b 0%, #010103 100%)" 
          : "radial-gradient(circle at 50% 50%, #fcfdfe 0%, #f1f5f9 100%)",
      }}
    />
  );
}

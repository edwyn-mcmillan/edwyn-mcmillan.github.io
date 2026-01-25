import { useEffect, useRef } from "react";
import { PixelScene } from "../three/PixelScene";

export function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new PixelScene(canvasRef.current);
    scene.start();

    return () => scene.dispose();
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{ width: "100vw", height: "100vh", display: "block" }}
      />
      {/* <MenuOverlay /> */}
    </>
  );
}

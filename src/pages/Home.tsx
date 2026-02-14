import { useEffect, useRef, useState } from "react";
import { PixelScene } from "../three/PixelScene";
import { NavBar } from "../components/NavBar";
import { AboutPage } from "../components/AboutPage";

export function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<PixelScene | null>(null);
  const [page, setPage] = useState<"home" | "about">("home");

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new PixelScene(canvasRef.current);
    scene.start();
    sceneRef.current = scene;

    return () => {
      scene.dispose();
      sceneRef.current = null;
    };
  }, []);

  const handleNavigate = (target: string) => {
    const scene = sceneRef.current;
    if (!scene) return;

    if (target === "about" && page !== "about") {
      scene.zoomToShape();
      setTimeout(() => setPage("about"), 1200);
    } else if (target === "home" && page !== "home") {
      setPage("home");
      scene.zoomOut();
    }
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{ width: "100vw", height: "100vh", display: "block" }}
      />
      <NavBar currentPage={page} onNavigate={handleNavigate} />
      <AboutPage visible={page === "about"} />
    </>
  );
}

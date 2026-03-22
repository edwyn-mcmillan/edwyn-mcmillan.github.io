import { useEffect, useRef, useState } from "react";
import { PixelScene } from "../three/PixelScene";
import { NavBar } from "../components/NavBar";
import { AboutPage } from "../components/AboutPage";
import { ProjectsPage } from "../components/ProjectsPage";
import { PanHint } from "../components/PanHint";

export type Page = "home" | "about" | "projects";

export function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<PixelScene | null>(null);
  const [page, setPage] = useState<Page>("home");
  const [panHintVisible, setPanHintVisible] = useState(true);
  const navTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  const handleNavigate = (target: Page) => {
    const scene = sceneRef.current;
    if (!scene || target === page) return;

    if (navTimeout.current) {
      clearTimeout(navTimeout.current);
      navTimeout.current = null;
    }

    if (target === "home") {
      scene.zoomOut();
      setPage("home");
      setPanHintVisible(true);
      return;
    }

    setPanHintVisible(false);
    if (page !== "home") setPage("home");

    if (target === "about") {
      scene.zoomToShape();
      navTimeout.current = setTimeout(() => setPage("about"), 1200);
    } else if (target === "projects") {
      scene.zoomToGrass();
      navTimeout.current = setTimeout(() => setPage("projects"), 1200);
    }
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{ width: "100dvw", height: "100dvh", display: "block" }}
      />
      <NavBar currentPage={page} onNavigate={handleNavigate} />
      <AboutPage visible={page === "about"} />
      <ProjectsPage visible={page === "projects"} />
      <PanHint visible={panHintVisible} />
    </>
  );
}

import Nav from "@/components/layout/Nav";
import Scene from "@/components/layout/Scene";
import TunnelIntro from "@/components/sections/TunnelIntro";

/*
 * THE STACK.
 *
 * Every frame is a Scene: a runway that owns scroll distance, holding a
 * sticky full-screen stage. Scenes are painted in ascending order, so the
 * next one rises from the bottom of the viewport and COVERS the one before
 * it — the previous frame stays put behind it rather than scrolling away.
 * Native sticky does the work, so the movement is exactly scrubbable: stop
 * halfway and the incoming frame stays halfway across.
 *
 * `runway` is the extra scroll length a scene needs for its interior to play
 * (tunnel travel, chapters, the card arc, the decks, the drift wall). A scene
 * with no runway is a single held frame that the next one covers straight
 * away.
 *
 * Connect is last and deliberately NOT a Scene: it is taller than the
 * viewport and ends the page, so it rises over the Gallery and then scrolls
 * naturally into the footer.
 */
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* keepOnMobile: these three fill one screen at any size, so they stay
            cinematic frames on phones too. The rest release into normal flow —
            their mobile layouts are tall and a fixed frame would clip them. */}
        <Scene order={1} runway={6} id="intro" keepOnMobile>
          <TunnelIntro />
        </Scene>


      </main>
    </>
  );
}

"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
    useEffect,
    useRef,
    useState,
    type CSSProperties,
    type ReactNode,
} from "react";

export interface CarouselItem {
    id: string;
    buttonContent: ReactNode;
    content: ReactNode;
    label?: string;
}

interface FontValue {
    fontFamily?: string;
    fontWeight?: number | string;
    fontSize?: number | string;
    fontStyle?: string;
    letterSpacing?: number | string;
    lineHeight?: number | string;
}

interface KlarnaCarouselProps {
    items: CarouselItem[];
    scrollProgress: number;
    cardRadius?: number;
    imageWidth?: number | string;
    imageHeight?: number | string;
    buttonCount?: number;
    buttonSize?: number;
    buttonRadius?: number;
    curve?: number;
    gap?: number;
    labelShow?: boolean;
    labelX?: number;
    labelY?: number;
    labelColor?: string;
    labelFont?: FontValue;
    backgroundColor?: string;
    style?: CSSProperties;
}

function modIdx(i: number, n: number) {
    return ((i % n) + n) % n;
}

export default function KlarnaCarousel(props: KlarnaCarouselProps) {
    const {
        items,
        scrollProgress,
        cardRadius = 0,
        imageWidth = "100%",
        imageHeight = 350,
        buttonCount = 7,
        buttonSize = 50,
        buttonRadius = 25,
        curve = 5,
        gap = 26,
        labelShow = false,
        labelX = 0,
        labelY = 0,
        labelColor = "#111111",
        labelFont = {
            fontFamily: "Inter",
            fontWeight: 400,
            fontSize: 26,
            lineHeight: "1.3em",
            letterSpacing: "0em",
        },
        backgroundColor = "transparent",
    } = props;

    const list = items;
    const M = list.length;

    const posDisplay = scrollProgress * (M - 1);
    const active = Math.min(M - 1, Math.max(0, Math.round(posDisplay)));

    const prevActiveRef = useRef(active);
    const [dir, setDir] = useState(1);

    useEffect(() => {
        if (active !== prevActiveRef.current) {
            setDir(active > prevActiveRef.current ? 1 : -1);
            prevActiveRef.current = active;
        }
    }, [active]);

    const half = Math.floor(Math.min(Math.max(1, buttonCount), M) / 2);
    const buffer = half + 1;

    const cardRadiusPx = typeof cardRadius === 'number' ? 
        (Math.max(0, Math.min(20, cardRadius)) / 20) *
        (typeof imageWidth === 'number' && typeof imageHeight === 'number' ? Math.min(imageWidth, imageHeight) / 2 : 200) : cardRadius;
        
    const buttonRadiusPx =
        (Math.max(0, Math.min(20, buttonRadius)) / 20) * (buttonSize / 2);
    const t = Math.max(0.0001, Math.min(10, curve) / 10);
    const step = buttonSize + gap;
    const dPsi = ((Math.PI * 2) / M) * t;
    const R = step / (2 * Math.sin(dPsi / 2));
    const baseTop = buttonSize * 0.9;
    const fadeInner = Math.max(0, half - 0.4);
    const fadeEnd = half + 0.6;
    const maxPsi = Math.min(Math.PI, fadeEnd * dPsi);
    const stripHeight =
        baseTop + R * (1 - Math.cos(maxPsi)) + buttonSize / 2 + 16;


    const center = Math.round(posDisplay);
    const renderItems: number[] = [];
    const seen = new Set<number>();
    for (let s = -buffer; s <= buffer; s++) {
        const idx = modIdx(center + s, M);
        if (!seen.has(idx)) {
            seen.add(idx);
            renderItems.push(idx);
        }
    }

    function getVisualSlot(itemIdx: number): number {
        let slot = itemIdx - posDisplay;
        // Do not wrap around since we want a linear timeline scrub
        // If it's a linear timeline, wrapping might look weird when scrolling.
        // But for the sake of the arc, let's keep the modulo math so items loop visually around the arc.
        slot = slot % M;
        if (slot > M / 2) slot -= M;
        if (slot < -M / 2) slot += M;
        return slot;
    }

    function slotStyle(slot: number) {
        const angle = slot * dPsi;
        const x = R * Math.sin(angle);
        const y = R * (1 - Math.cos(angle));
        const deg = (angle * 180) / Math.PI;
        const absSlot = Math.abs(slot);
        const depth = Math.max(0, 1 - (0.55 * absSlot) / Math.max(1, half));
        const scale = 0.55 + 0.45 * depth;
        const opacity =
            absSlot <= fadeInner
                ? 1
                : absSlot >= fadeEnd
                  ? 0
                  : 1 - (absSlot - fadeInner) / (fadeEnd - fadeInner);
        const zIndex = Math.round(depth * 100) + (absSlot < 0.5 ? 100 : 0);
        return { x, y, deg, scale, opacity, zIndex };
    }

    const imgSweep = 260,
        imgDip = 150;
    const contentVariants = {
        enter: (d: number) => ({
            x: d * imgSweep,
            y: imgDip,
            opacity: 0,
            scale: 0.82,
            rotate: d * 8,
        }),
        center: { x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 },
        exit: (d: number) => ({
            x: -d * imgSweep,
            y: imgDip,
            opacity: 0,
            scale: 0.82,
            rotate: -d * 8,
        }),
    };

    if (list.length === 0) return null;

    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 24,
                overflow: "hidden",
                boxSizing: "border-box",
                background: backgroundColor,
                ...props.style
            }}
        >
            <div
                style={{
                    position: "relative",
                    width: imageWidth,
                    height: imageHeight,
                    flex: "0 0 auto",
                    borderRadius: typeof cardRadiusPx === 'number' ? cardRadiusPx : 0,
                    overflow: "hidden",
                    background: backgroundColor,
                }}
            >
                <AnimatePresence mode="popLayout" initial={false} custom={dir}>
                    <motion.div
                        key={active}
                        custom={dir}
                        variants={contentVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            position: "absolute",
                            inset: 0,
                            background: backgroundColor,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        {list[active]?.content}
                    </motion.div>
                </AnimatePresence>
            </div>

            {labelShow && (
                <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                        key={`label-${active}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            flex: "0 0 auto",
                            maxWidth: "100%",
                            textAlign: "center",
                            color: labelColor,
                            transform: `translate(${labelX}px, ${labelY}px)`,
                            fontFamily: labelFont?.fontFamily,
                            fontWeight: labelFont?.fontWeight as any,
                            fontSize: labelFont?.fontSize,
                            fontStyle: labelFont?.fontStyle,
                            letterSpacing: labelFont?.letterSpacing,
                            lineHeight: labelFont?.lineHeight,
                        }}
                    >
                        {list[active]?.label ?? ""}
                    </motion.div>
                </AnimatePresence>
            )}

            <div
                style={{
                    position: "relative",
                    width: "100%",
                    height: stripHeight,
                    overflow: "hidden",
                    flex: "0 0 auto",
                }}
            >
                {renderItems.map((itemIdx) => {
                    const slot = getVisualSlot(itemIdx);
                    const { x, y, deg, scale, opacity, zIndex } =
                        slotStyle(slot);
                    const isActive = itemIdx === active;
                    const item = list[itemIdx];

                    return (
                        <div
                            key={itemIdx}
                            style={{
                                position: "absolute",
                                left: "50%",
                                top: baseTop,
                                marginLeft: -buttonSize / 2,
                                marginTop: -buttonSize / 2,
                                width: buttonSize,
                                height: buttonSize,
                                transform: `translate(${x}px, ${y}px) rotate(${deg}deg) scale(${scale})`,
                                transformOrigin: "center",
                                opacity,
                                zIndex,
                                willChange: "transform, opacity",
                            }}
                        >
                            <div
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: buttonRadiusPx,
                                    overflow: "hidden",
                                    position: "relative",
                                    transform: `rotate(${-deg}deg)`,
                                    transformOrigin: "center",
                                    background: isActive
                                        ? "#ffffff"
                                        : "rgba(255,255,255,0.55)",
                                    boxShadow: isActive ? "0 4px 12px rgba(0,0,0,0.15)" : "none",
                                    backdropFilter: isActive
                                        ? undefined
                                        : "blur(6px)",
                                    WebkitBackdropFilter: isActive
                                        ? undefined
                                        : "blur(6px)",
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: isActive ? '#111' : '#666',
                                    fontWeight: isActive ? 700 : 500,
                                    border: '1px solid rgba(0,0,0,0.05)',
                                }}
                            >
                                {item?.buttonContent}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

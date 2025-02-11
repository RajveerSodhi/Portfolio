"use client";
import { useEffect, useRef } from "react";

export default function AshDash() {
    const boardRef = useRef<HTMLCanvasElement>(null);

    let board: any;
    let boardWidth = 900;
    let boardHeight = 300;
    let context: CanvasRenderingContext2D | null;

    let ashWidth = 128;
    let ashHeight = 128;
    let ashX = 50;
    let ashY = boardHeight - ashHeight;
    let ashImg: HTMLImageElement;

    let ash = {
        x: ashX,
        y: ashY,
        height: ashHeight,
        width: ashWidth,
    };

    let rocksArray: any[] = [];
    let rock1Width = 100;
    let rock2Width = 100;
    let rock3Width = 100;

    let rock1Height = 100;
    let rock2Height = 100;
    let rock3Height = 100;
    let rockX = boardWidth;
    let rock1Y = boardHeight - rock1Height;
    let rock2Y = boardHeight - rock2Height;
    let rock3Y = boardHeight - rock3Height;

    let rock1Img: HTMLImageElement;
    let rock2Img: HTMLImageElement;
    let rock3Img: HTMLImageElement;

    let velocityX = -1;
    let velocityY = 0;
    let gravity = 0.3;

    let gameStarted = false;
    let gameOver = false;
    let score = 0;

    useEffect(() => {
        if (boardRef.current) {
            board = boardRef.current;
            board.height = boardHeight;
            board.width = boardWidth;
            context = board.getContext("2d");

            if (context) {
                context.font = "40px courier";
                context.fillStyle = "black";
                context.fillText("Press Space to Play!", 250, 140);
            }
            document.addEventListener("keydown", handleKeyPress);
        }

        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    function handleKeyPress(e: KeyboardEvent) {
        if (!gameStarted && e.code === "Space") {
            startGame();
        } else {
            moveAsh(e);
        }
    }

    function loadImage(src: string): HTMLImageElement {
        const img = new Image();
        img.src = src;
        img.onload = () => console.log(`${src} loaded successfully.`);
        img.onerror = () => console.error(`Failed to load ${src}`);
        return img;
    }

    function update() {
        if (gameOver) {
            return;
        }

        if (context) {
            requestAnimationFrame(update);
            context?.clearRect(0, 0, board.width, board.height);

            velocityY += gravity;
            ash.y = Math.min(ash.y + velocityY, ashY);

            if (ash.y === ashY && ashImg.src.includes("jump.png")) {
                ashImg.src = "/ashdash/ash/walk.gif";
            }

            context?.drawImage(ashImg, ash.x, ash.y, ash.width, ash.height);

            for (let i = 0; i < rocksArray.length; i++) {
                let rock = rocksArray[i];
                rock.x += velocityX;
                context?.drawImage(rock.img, rock.x, rock.y, rock.width, rock.height);

                if (detectCollision(ash, rock)) {
                    gameOver = true;
                    ashImg.src = "/ashdash/ash/end.png";
                    ashImg.onload = function () {
                        context?.drawImage(ashImg, ash.x, ash.y, ash.width, ash.height);
                    };
                }
            }

            context.fillStyle = "black";
            context.font = "20px courier";
            score++;
            context.fillText(String(Math.floor(score / 100)), 5, 20);
        }
    }

    function startGame() {
        gameStarted = true;

        ashImg = new Image();
        ashImg.src = "/ashdash/ash/walk.gif";
        ashImg.onload = () => context?.drawImage(ashImg, ash.x, ash.y, ash.width, ash.height);

        rock1Img = loadImage("/ashdash/obstacles/rock1.png");
        rock2Img = loadImage("/ashdash/obstacles/rock1.png");
        rock3Img = loadImage("/ashdash/obstacles/rock1.png");

        requestAnimationFrame(update);
        setInterval(placeRock, 1000);
    }

    function moveAsh(e: KeyboardEvent) {
        if (gameOver) {
            return;
        }

        if ((e.code == "Space" || e.code == "ArrowUp") && ash.y == ashY) {
            velocityY = -10;
            ashImg.src = "/ashdash/ash/jump.png";
        } else if (e.code == "arrowDown" && ash.y == ashY) {
            console.log("duck");
        }
    }

    function placeRock() {
        if (gameOver) {
            return;
        }

        let rock: {
            img: HTMLImageElement | null;
            x: number;
            y: number | null;
            width: number | null;
            height: number | null;
        } = {
            img: null,
            x: rockX,
            y: null,
            width: null,
            height: null,
        };

        let placeRockChance = Math.random();
        if (placeRockChance > 0.9 && rock3Img.complete) {
            rock.img = rock3Img;
            rock.y = rock3Y;
            rock.width = rock3Width;
            rock.height = rock3Height;
            rocksArray.push(rock);
        } else if (placeRockChance > 0.6 && rock2Img.complete) {
            rock.img = rock2Img;
            rock.y = rock2Y;
            rock.width = rock2Width;
            rock.height = rock2Height;
            rocksArray.push(rock);
        } else if (placeRockChance > 0.1 && rock1Img.complete) {
            rock.img = rock1Img;
            rock.y = rock1Y;
            rock.width = rock1Width;
            rock.height = rock1Height;
            rocksArray.push(rock);
        }

        if (rocksArray.length > 5) {
            rocksArray.shift();
        }
    }

    function detectCollision(a: any, b: any) {
        return (
            a.x < b.x + b.width &&
            a.y + a.width > b.x &&
            a.y < b.y + b.height &&
            a.y + a.height > b.y
        );
    }

    return (
        <section>
            <h1>Ash Dash</h1>
            <canvas className="rounded-3xl bg-red-500" ref={boardRef}></canvas>
        </section>
    );
}

"use client";
import { useEffect, useRef } from "react";

export default function AshDash() {
    const boardRef = useRef<HTMLCanvasElement>(null);

    let board: any;
    let boardWidth = 900;
    let boardHeight = 300;
    let context: CanvasRenderingContext2D | null;

    let frameImg: HTMLImageElement;
    let frameThickness = 10;

    let scorecardImg: HTMLImageElement;

    let backgroundImg: HTMLImageElement;

    let ashWidth = 128;
    let ashHeight = 128;
    let ashX = 60;
    let ashY = boardHeight - ashHeight - frameThickness;
    let ashImg: HTMLImageElement;

    let ash = {
        x: ashX,
        y: ashY,
        height: ashHeight,
        width: ashWidth,
    };

    let rocksArray: any[] = [];
    let rock1Width = 50;
    let rock2Width = 70;
    let rock3Width = 100;

    let rock1Height = 40;
    let rock2Height = 70;
    let rock3Height = 80;
    let rockX = boardWidth;
    let rock1Y = boardHeight - rock1Height - frameThickness;
    let rock2Y = boardHeight - rock2Height - frameThickness;
    let rock3Y = boardHeight - rock3Height - frameThickness;

    let rock1Img: HTMLImageElement;
    let rock2Img: HTMLImageElement;
    let rock3Img: HTMLImageElement;

    let velocityX = -7;
    let velocityY = 0;
    let gravity = 0.4;

    let gameStarted = false;
    let gameOver = false;
    let score = 0;
    let rockInterval: ReturnType<typeof setInterval> | null = null;

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

            frameImg = new Image();
            frameImg.src = "/ashdash/UI/frame.png";
            frameImg.onload = function () {
                context?.drawImage(frameImg, 0, 0, boardWidth, boardHeight);
            };

            document.addEventListener("keydown", handleKeyPress);
        }

        return () => {
            document.removeEventListener("keydown", handleKeyPress);
            if (rockInterval) {
                clearInterval(rockInterval);
            }
        };
    }, []);

    function handleKeyPress(e: KeyboardEvent) {
        if (e.code === "KeyR") {
            restartGame();
            // startGame();
        } else if (!gameStarted && e.code === "Space") {
            startGame();
        } else {
            moveAsh(e);
        }
    }

    function restartGame() {
        gameOver = false;
        gameStarted = false;
        score = 0;
        velocityY = 0;
        ash.x = ashX;
        ash.y = ashY;
        rocksArray = [];
        if (rockInterval) {
            clearInterval(rockInterval);
            rockInterval = null;
        }
        if (context && board) {
            context.clearRect(0, 0, board.width, board.height);
            context.font = "40px courier";
            context.fillStyle = "black";
            context.fillText("Press Space to Play!", 250, 140);
        }
    }

    function loadImage(src: string): HTMLImageElement {
        const img = new Image();
        img.src = src;
        img.onerror = () => console.error(`Failed to load ${src}`);
        return img;
    }

    function update() {
        if (gameOver || !gameStarted) {
            return;
        }

        scorecardImg = new Image();
        scorecardImg.src = "/ashdash/UI/scorecard.png";

        backgroundImg = new Image();
        backgroundImg.src = "/ashdash/UI/background.png";

        if (context) {
            requestAnimationFrame(update);
            context?.clearRect(0, 0, board.width, board.height);

            if (backgroundImg.complete) {
                context.drawImage(backgroundImg, 0, 0, boardWidth, boardHeight);
            }

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
                    ashImg.src =
                        ash.y == ashY ? "/ashdash/ash/walk-end.png" : "/ashdash/ash/jump-end.png";
                    ashImg.onload = function () {
                        context?.drawImage(ashImg, ash.x, ash.y, ash.width, ash.height);
                    };
                }
            }

            if (frameImg.complete) {
                context.drawImage(frameImg, 0, 0, boardWidth, boardHeight);
            }

            if (scorecardImg.complete) {
                context?.drawImage(scorecardImg, frameThickness + 10, frameThickness + 10, 80, 48);
            }

            context.fillStyle = "white";
            context.font = "25px courier";
            context.textAlign = "center";
            context.textBaseline = "middle";
            score++;
            context.fillText(
                String(Math.floor(score / 100)),
                frameThickness + 10 + 40,
                frameThickness + 10 + 30
            );
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
        rockInterval = setInterval(placeRock, 1000);
    }

    function moveAsh(e: KeyboardEvent) {
        if (gameOver || !gameStarted) {
            return;
        }

        if ((e.code == "Space" || e.code == "ArrowUp") && ash.y == ashY) {
            e.preventDefault();
            velocityY = -11;
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
        if (placeRockChance > 0.85 && rock3Img.complete) {
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
        } else if (placeRockChance > 35 && rock1Img.complete) {
            rock.img = rock1Img;
            rock.y = rock1Y;
            rock.width = rock1Width;
            rock.height = rock1Height;
            rocksArray.push(rock);
        }

        if (rocksArray.length > 20) {
            rocksArray.shift();
        }
    }

    function detectCollision(a: any, b: any) {
        return (
            a.x < b.x + b.width &&
            a.x + a.width - 10 > b.x &&
            a.y < b.y + b.height &&
            a.y + a.height - 10 > b.y
        );
    }

    return (
        <section>
            <h1>Ash Dash</h1>
            <canvas className="rounded-xl h-[300px] w-[900px] bg-red-500" ref={boardRef}></canvas>
        </section>
    );
}

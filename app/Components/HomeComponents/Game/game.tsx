"use client";
import { useEffect, useRef, useState } from "react";
import Tilt from "react-parallax-tilt";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

export default function AshDash() {
    const boardRef = useRef<HTMLCanvasElement>(null);
    const soundButtonRef = useRef<HTMLButtonElement>(null);

    let board: any;
    let boardWidth = 900;
    let boardHeight = 300;
    let context: CanvasRenderingContext2D | null;

    let frameImg: HTMLImageElement;
    let frameThickness = 10;

    let scorecardImg: HTMLImageElement;
    let backgroundImg: HTMLImageElement;
    let titleImg: HTMLImageElement;
    let gameoverImg: HTMLImageElement;

    let ashWidth = 128;
    let ashHeight = 128;
    let ashX = 60;
    let ashY = boardHeight - ashHeight - frameThickness * 2;
    let ashImg: HTMLImageElement;
    let jumpImg: HTMLImageElement;

    let currentFrame = 0;
    let lastFrameTime = performance.now();
    let frameDuration = 100;
    let walkFrames: any[];

    let ash = {
        x: ashX,
        y: ashY,
        height: ashHeight,
        width: ashWidth,
    };

    let treatsArray: any[] = [];
    let treat1Width = 48;
    let treat2Width = 48;

    let treat1Height = 36;
    let treat2Height = 48;

    let treatX = boardWidth;
    let treatY = boardHeight / 3 - frameThickness;

    let treat1Img: HTMLImageElement;
    let treat2Img: HTMLImageElement;

    let cloudsArray: any[] = [];
    let cloud1Width = 80;
    let cloud2Width = 72;

    let cloud1Height = 80;
    let cloud2Height = 72;

    let cloudX = boardWidth;
    let cloudY = 50;

    let cloud1Img: HTMLImageElement;
    let cloud2Img: HTMLImageElement;

    let rocksArray: any[] = [];
    let rock1Width = 45;
    let rock2Width = 60;
    let rock3Width = 90;
    let rock4Width = 80;

    let rock1Height = 45;
    let rock2Height = 60;
    let rock3Height = 75;
    let rock4Height = 70;

    let rockX = boardWidth;

    let rock1Y = boardHeight - rock1Height - frameThickness * 2;
    let rock2Y = boardHeight - rock2Height - frameThickness * 2;
    let rock3Y = boardHeight - rock3Height - frameThickness * 2;
    let rock4Y = boardHeight - rock4Height - frameThickness * 2;

    let rock1Img: HTMLImageElement;
    let rock2Img: HTMLImageElement;
    let rock3Img: HTMLImageElement;
    let rock4Img: HTMLImageElement;

    let rockTimeoutId: ReturnType<typeof setTimeout> | null = null;
    let treatTimeoutId: ReturnType<typeof setTimeout> | null = null;
    let cloudTimeoutId: ReturnType<typeof setTimeout> | null = null;

    let rockTimeoutBase = 1000;
    let treatTimeoutBase = 1000;
    let cloudTimeoutBase = 1600;

    let velocityX = -6;
    let velocityY = 0;
    let gravity = 0.385;

    let gameStarted = false;
    let gameOver = false;
    let points = 0;
    let score = 0;

    const [gameState, setGameState] = useState(false);
    const [soundOn, setSoundOn] = useState(true);

    const soundOnRef = useRef(soundOn);

    useEffect(() => {
        if (boardRef.current) {
            board = boardRef.current;
            board.height = boardHeight;
            board.width = boardWidth;
            context = board.getContext("2d");

            if (context) {
                titleImg = new Image();
                titleImg.src = "/ashdash/UI/title.png";
                frameImg = new Image();
                frameImg.src = "/ashdash/UI/frame.png";

                titleImg.onload = function () {
                    context?.drawImage(titleImg, 0, 0, boardWidth, boardHeight);
                };
            }

            document.addEventListener("keydown", handleKeyPress);
        }

        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    useEffect(() => {
        soundOnRef.current = soundOn;
        if (soundOnRef.current && gameState) {
            playSound("bgm", 0.05);
        } else {
            stopSound("bgm");
        }
    }, [soundOn]);

    function handleKeyPress(e: KeyboardEvent) {
        e.preventDefault();
        if (e.code === "KeyR") {
            restartGame();
        } else if (e.code == "KeyM") {
            toggleSound();
        } else if (!gameStarted && e.code === "Space") {
            startGame();
        } else {
            moveAsh(e);
        }
    }

    function restartGame() {
        gameOver = false;
        gameStarted = false;
        setGameState(false);
        stopSound("bgm");
        score = 0;
        points = 0;
        velocityX = -5;
        velocityY = 0;
        ash.x = ashX;
        ash.y = ashY;

        rocksArray = [];
        treatsArray = [];
        cloudsArray = [];

        if (rockTimeoutId) {
            clearTimeout(rockTimeoutId);
            rockTimeoutId = null;
        }
        if (treatTimeoutId) {
            clearTimeout(treatTimeoutId);
            treatTimeoutId = null;
        }
        if (cloudTimeoutId) {
            clearTimeout(cloudTimeoutId);
            cloudTimeoutId = null;
        }

        if (context && board) {
            context.clearRect(0, 0, board.width, board.height);
            if (titleImg.complete) {
                context.drawImage(titleImg, 0, 0, boardWidth, boardHeight);
            }
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

        if (context) {
            requestAnimationFrame(update);
            context?.clearRect(0, 0, board.width, board.height);

            if (backgroundImg.complete) {
                context.drawImage(backgroundImg, 0, 0, boardWidth, boardHeight);
            }

            for (let i = 0; i < cloudsArray.length; i++) {
                let cloud = cloudsArray[i];
                cloud.x += velocityX * 0.3;
                if (cloud.img && cloud.img.complete) {
                    context.drawImage(cloud.img, cloud.x, cloud.y, cloud.width, cloud.height);
                }
            }

            velocityY += gravity;
            ash.y = Math.min(ash.y + velocityY, ashY);

            if (ash.y === ashY) {
                const now = performance.now();
                if (now - lastFrameTime >= frameDuration) {
                    currentFrame = (currentFrame + 1) % 4;
                    lastFrameTime = now;
                }
                context.drawImage(walkFrames[currentFrame], ash.x, ash.y, ash.width, ash.height);
            } else {
                context.drawImage(jumpImg, ash.x, ash.y, ash.width, ash.height);
            }

            for (let i = treatsArray.length - 1; i >= 0; i--) {
                let treat = treatsArray[i];
                treat.x += velocityX;
                if (treat.img && treat.img.complete) {
                    context.drawImage(treat.img, treat.x, treat.y, treat.width, treat.height);
                }
                if (detectCollision(ash, treat)) {
                    points += 2;
                    if (soundOnRef.current) {
                        playSound("treat", 0.15);
                    }
                    treatsArray.splice(i, 1);
                }
            }

            for (let i = 0; i < rocksArray.length; i++) {
                let rock = rocksArray[i];
                rock.x += velocityX;
                if (rock.img && rock.img.complete) {
                    context.drawImage(rock.img, rock.x, rock.y, rock.width, rock.height);
                }

                if (detectCollision(ash, rock)) {
                    gameOver = true;
                    if (soundOnRef.current) {
                        playSound("end", 0.15);
                    }
                    stopSound("bgm");
                    ashImg.src =
                        ash.y == ashY
                            ? `/ashdash/ash/walk-end${currentFrame}.png`
                            : "/ashdash/ash/jump-end.png";

                    ashImg.onload = function () {
                        context?.drawImage(ashImg, ash.x, ash.y, ash.width, ash.height);
                    };

                    if (gameoverImg.complete) {
                        context.drawImage(gameoverImg, 260, 98, 380, 105);
                    }
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
                String(Math.floor(score / 100) + points),
                frameThickness + 10 + 40,
                frameThickness + 10 + 30
            );

            if (score > 0 && score % 1000 == 0) {
                velocityX += -1;
                rockTimeoutBase -= 35;
                treatTimeoutBase -= 30;
                cloudTimeoutBase -= 22.5;
            }
        }
    }

    function startGame() {
        gameStarted = true;
        setGameState(true);
        if (soundOnRef.current) {
            playSound("bgm", 0.05);
        }

        walkFrames = [];
        for (let i = 0; i < 4; i++) {
            const img = new Image();
            img.src = `/ashdash/ash/walk${i}.png`;
            walkFrames.push(img);
        }

        jumpImg = new Image();
        jumpImg.src = "/ashdash/ash/jump.png";

        ashImg = walkFrames[0];

        rock1Img = loadImage("/ashdash/obstacles/rock1.png");
        rock2Img = loadImage("/ashdash/obstacles/rock2.png");
        rock3Img = loadImage("/ashdash/obstacles/rock3.png");
        rock4Img = loadImage("/ashdash/obstacles/rock4.png");

        treat1Img = loadImage("/ashdash/treats/bone1.png");
        treat2Img = loadImage("/ashdash/treats/bone2.png");

        cloud1Img = loadImage("/ashdash/scene/cloud1.png");
        cloud2Img = loadImage("/ashdash/scene/cloud2.png");

        scorecardImg = loadImage("/ashdash/UI/scorecard.png");
        backgroundImg = loadImage("/ashdash/scene/background.png");
        gameoverImg = loadImage("/ashdash/UI/gameover.png");

        lastFrameTime = performance.now();
        currentFrame = 0;
        requestAnimationFrame(update);

        scheduleNextRock();
        scheduleNextTreat();
        scheduleNextCloud();
    }

    function scheduleNextRock() {
        const delay = rockTimeoutBase + Math.random() * 500;
        rockTimeoutId = setTimeout(() => {
            placeRock();
            scheduleNextRock();
        }, delay);
    }

    function scheduleNextTreat() {
        const delay = treatTimeoutBase + Math.random() * 500;
        treatTimeoutId = setTimeout(() => {
            placeTreat();
            scheduleNextTreat();
        }, delay);
    }

    function scheduleNextCloud() {
        const delay = cloudTimeoutBase + Math.random() * 400;
        cloudTimeoutId = setTimeout(() => {
            placeCloud();
            scheduleNextCloud();
        }, delay);
    }

    function moveAsh(e: KeyboardEvent) {
        if (gameOver || !gameStarted) {
            return;
        }

        if ((e.code == "Space" || e.code == "ArrowUp") && ash.y == ashY) {
            e.preventDefault();
            velocityY = -12;
        }
    }

    function placeCloud() {
        if (gameOver) {
            return;
        }

        let cloud: {
            img: HTMLImageElement | null;
            x: number;
            y: number | null;
            width: number | null;
            height: number | null;
        } = {
            img: null,
            x: cloudX,
            y: null,
            width: null,
            height: null,
        };

        let placeCloudChance = Math.random();
        if (placeCloudChance > 0.65 && cloud1Img.complete) {
            cloud.img = cloud1Img;
            cloud.y = cloudY + Math.random() * 70;
            cloud.width = cloud1Width;
            cloud.height = cloud1Height;
        } else if (placeCloudChance > 0.3 && cloud2Img.complete) {
            cloud.img = cloud2Img;
            cloud.y = cloudY + Math.random() * 70;
            cloud.width = cloud2Width;
            cloud.height = cloud2Height;
        }

        if (cloud.img && cloud.img.complete) {
            cloudsArray.push(cloud);
        }

        if (cloudsArray.length > 10) {
            cloudsArray.shift();
        }
    }

    function placeTreat() {
        if (gameOver) {
            return;
        }

        let treat: {
            img: HTMLImageElement | null;
            x: number;
            y: number | null;
            width: number | null;
            height: number | null;
        } = {
            img: null,
            x: treatX,
            y: null,
            width: null,
            height: null,
        };

        let placeTreatChance = Math.random();
        if (placeTreatChance > 0.85 && treat1Img.complete) {
            treat.img = treat1Img;
            treat.y = Math.random() <= 0.5 ? rock2Y : treatY;
            treat.width = treat1Width;
            treat.height = treat1Height;
        } else if (placeTreatChance > 0.7 && treat2Img.complete) {
            treat.img = treat2Img;
            treat.y = Math.random() <= 0.5 ? rock2Y : treatY;
            treat.width = treat2Width;
            treat.height = treat2Height;
        }

        let overlapsRock = rocksArray.some((rock) => detectCollision(rock, treat));
        if (!overlapsRock && treat.img && treat.img.complete) {
            treatsArray.push(treat);
        }

        if (treatsArray.length > 8) {
            treatsArray.shift();
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
        if (placeRockChance > 0.95 && rock3Img.complete) {
            rock.img = rock3Img;
            rock.y = rock3Y;
            rock.width = rock3Width;
            rock.height = rock3Height;
        } else if (placeRockChance > 0.85 && rock4Img.complete) {
            rock.img = rock4Img;
            rock.y = rock4Y;
            rock.width = rock4Width;
            rock.height = rock4Height;
        } else if (placeRockChance > 0.6 && rock2Img.complete) {
            rock.img = rock2Img;
            rock.y = rock2Y;
            rock.width = rock2Width;
            rock.height = rock2Height;
        } else if (placeRockChance > 0.4 && rock1Img.complete) {
            rock.img = rock1Img;
            rock.y = rock1Y;
            rock.width = rock1Width;
            rock.height = rock1Height;
        }

        if (rock.img && rock.img.complete) {
            rocksArray.push(rock);
        }

        if (rocksArray.length > 8) {
            rocksArray.shift();
        }
    }

    function detectCollision(a: any, b: any) {
        return (
            a.x < b.x + b.width &&
            a.x + a.width - 16 > b.x &&
            a.y < b.y + b.height &&
            a.y + a.height - 16 > b.y
        );
    }

    function playSound(name: string, volume: number) {
        if (!soundOnRef.current) {
            return;
        }

        const sound = document.getElementById(name) as HTMLAudioElement;
        if (sound && typeof sound.play === "function") {
            sound.currentTime = 0;
            sound.volume = volume;
            sound.play();
        }
    }

    function stopSound(name: string) {
        const sound = document.getElementById(name) as HTMLAudioElement;
        if (sound && typeof sound.pause === "function") {
            sound.pause();
            sound.currentTime = 0;
        }
    }

    function toggleSound() {
        setSoundOn((prevSoundOn) => {
            const newSoundState = !prevSoundOn;
            return newSoundState;
        });
    }

    return (
        <section className="hidden md:flex">
            <h4 className="text-center text-xl md:text-2xl mb-4">Meet my dog!</h4>
            <Tilt
                tiltReverse={false}
                tiltMaxAngleX={1}
                tiltMaxAngleY={1}
                gyroscope={false}
                tiltEnable={!gameState}
            >
                <canvas
                    className={`rounded-xl h-[300px] w-[900px] bg-white shadow-md transition-all duration-200 ease-in-out ${
                        gameState ? "scale-[1.05] mt-4" : ""
                    }`}
                    ref={boardRef}
                ></canvas>
            </Tilt>
            <div className="w-[900px] flex items-end justify-end text-myblack dark:text-mywhite text-3xl py-8">
                <button
                    onClick={() => {
                        toggleSound();
                        soundButtonRef.current?.blur();
                    }}
                    ref={soundButtonRef}
                >
                    {soundOn ? <FaVolumeUp /> : <FaVolumeMute />}
                </button>
            </div>
            <audio id="treat" preload="auto">
                <source src="/ashdash/audio/treat.mp3" type="audio/mpeg" />
            </audio>

            <audio id="end" preload="auto">
                <source src="/ashdash/audio/end.mp3" type="audio/mpeg" />
            </audio>

            <audio id="bgm" preload="auto" loop>
                <source src="/ashdash/audio/bgm.mp3" type="audio/mpeg" />
            </audio>
        </section>
    );
}

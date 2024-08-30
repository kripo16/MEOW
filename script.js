document.addEventListener("DOMContentLoaded", function() {
    const characterImg1 = document.getElementById("character-img1");
    const messageDisplay1 = document.getElementById("message1");
    const speechBubble1 = document.getElementById("speech-bubble1");

    const characterImg2 = document.getElementById("character-img2");
    const messageDisplay2 = document.getElementById("message2");
    const speechBubble2 = document.getElementById("speech-bubble2");
    const characterInfo1 = document.getElementById('character-info1');
    const characterInfo2 = document.getElementById('character-info2');
    const characterName1 = document.getElementById('character-name1');
    const characterName2 = document.getElementById('character-name2');

    const passwordSection = document.getElementById("password-section");
    const passwordInput = document.getElementById("password-input");
    const submitButton = document.getElementById("submit-button");

    const instruction = document.getElementById("instruction");

    const questSection = document.getElementById("quest-section");

    const wrongButton1 = document.getElementById("choice1");
    const wrongButton2 = document.getElementById("choice2");
    const wrongButton3 = document.getElementById("choice3");
    const secretPhrase = document.getElementById("secret-phrase");
    const memeVideo = document.getElementById("meme-video")
    const questSection1 = document.getElementById("quest-section1");

    const wrongButton11 = document.getElementById("choice11");
    const wrongButton22 = document.getElementById("choice22");
    const wrongButton33 = document.getElementById("choice33");

                          
    const videoContainer = document.getElementById('video-container');
    const correctButton = document.getElementById("choice");
    const correctButton1 = document.getElementById("choicee");

    const imageContainer = document.getElementById("imageContainer");
    const title = document.getElementById("title");
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");

    const messageContainer = document.getElementById('message-container');



    memeVideo.addEventListener('timeupdate', function() {
        if (videoSolved) {
            return;
        }
        instruction.style.display = "none";
        var video = memeVideo
        var pauseTime = 6; // Set the time (in seconds) where you want to pause the video
    
        if (video.currentTime >= pauseTime) {
            video.pause();
            setTimeout(() => {
                stress.play();
                questSection1.style.display = "block"; // Make it visible
                questSection1.classList.add('fade-in');
            }, 500);
        }
    });
    

    

    const dialogues = [
        { text: "Ello Ello Ello, I see you finally arrived !!", img: "src/images/link.jpg", position: 'left', name: 'Link' },
        { text: "Ugh stupid Imad, that's embarrassing I told him the Ello won't suit me. He thinks I'm that British guy or what?", img: "src/images/madlink.jpg", position: 'left', name: 'Link' },
        { text: "Mind your words you little c*nt", img: "src/images/butcher.jpg", position: 'right', name: 'Billy Butcher' },
        { text: "Never mind that jerk, So... !!", img: "src/images/tangledlink.jpg", position: 'left', name: 'Link' },
        { text: "Who you calling STUPID?!", img: "src/images/imad.jpg", position: 'right', name: '???' },
        { text: "Oh, it's you again", img: "src/images/link.jpg", position: 'left', name: 'Link' },
        { text: "Did you forget that I can show her the pictures :)", img: "src/images/imad.jpg", position: 'right', name: 'Imad' },
        { text: "No, don't you dare ...", img: "src/images/challengingLink.jpg", position: 'left', name: 'Link' },
        { text: "hehehe ...", img: "src/images/imad.jpg", position: 'right', name: 'Imad' },
        { text: "That laugh was creepy but anyway", img: "src/images/link.jpg", position: 'left', name: 'Link' },
        { text: "You should be Kwthr, right?", img: "src/images/link.jpg", position: 'left', name: 'Link' },
        { text: "Nice to meet you Kwthr", img: "src/images/link.jpg", position: 'left', name: 'Link' },
        { text: "Ughh he started playing 😡😡😡", img: "src/images/angryLink.jpg", position: 'left', name: 'Link' },
        { text: "...", img: "src/images/imad.jpg", position: 'right', name: 'Imad' },
        { text: "I guess he's not stopping.", img: "src/images/ughlink.jpg", position: 'left', name: 'Link' },
        { text: "Aight, I'll give you a good look", img: "src/images/imad.jpg", position: 'right', name: 'Imad' },
        { text: "Ty, Ig?", img: "src/images/zelda.jpg", position: 'left', name: 'Link' },
        { text: "Ok let's start, we already wasted a lot of time", img: "src/images/zelda.jpg", position: 'left', name: 'Link' },
        { text: "Ok I will tell you how things will be going: Four quests once you complete all of them, You reveal the secret phrase !!", img: "src/images/zelda2.jpg", position: 'left', name: 'Link' },
        { text: "What? what do you mean you see no secret phrase?, Imad suck at coding. Press that space bar again to force it to show up", img: "src/images/zelda2.jpg", position: 'left', name: 'Link' },
        { text: "There you go, Now we start.", img: "src/images/zelda2.jpg", position: 'left', name: 'Link' },
        { text: "First Quest: Let's start with a simple one, answer the question below", img: "src/images/zelda3.jpg", position: 'left', name: 'Link' },
        { text: "OMG !! You made it through the first one, hear that sound? that means you revealed a word !!", img: "src/images/zelda3.jpg", position: 'left', name: 'Link' },
        { text: "Second Quest: Go back to discord this one Imad has it, once you complete it. He will give you a password which will allow you to move to the next one. The hint for it is: 'We Should Be In Sync Like Two Halfs Of The Same HeartBeat'.", img: "src/images/zelda2.jpg", position: 'left', name: 'Link' },
        { text: "Great !! You got the password and the second word too. (psst he just tricked you to match with him)", img: "src/images/zelda3.jpg", position: 'left', name: 'Link' },
        { text: "... !!", img: "src/images/imad.jpg", position: 'right', name: 'Imad' },
        { text: "Shut up, you thought you were being funny with those pictures.", img: "src/images/zelda3.jpg", position: 'left', name: 'Link' },
        { text: "Third Quest: A memory test, Imad claims that you bad at it. So let's see if you can remember an iconic video (He will be sad if you don't) and because of this we will even play 'من سيربح المليون' in the background :)", img: "src/images/zelda4.jpg", position: 'left', name: 'Link' },
        { text: "Yesss OMG ILYYY !!", img: "src/images/imad.jpg", position: 'right', name: 'Imad' },
        { text: "Yay !! You almost there Kwthr !! only the final word left. (I think it's too obv, that Imad thinks we are idiots or what?)", img: "src/images/zelda4.jpg", position: 'left', name: 'Link' },
        { text: "Final Quest: and the hardest, I call it FACT ADMISSION. You Ready?", img: "src/images/zelda5.jpg", position: 'left', name: 'Link' },
        { text: "Okay, The Final Quest begins: You'll be prompted with two choices you need to answer correctly, the question is so intense and stressful if you can't take it. YOU MIGHT DIE.", img: "src/images/zelda6.jpg", position: 'left', name: 'Link' },
        { text: "Yess !!, you completed all the quests !!", img: "src/images/zelda6.jpg", position: 'left', name: 'Link' },
        { text: "Ok so I guess that's the end of the journey, as I promised here is the secret phrase. Press space bar to reveal it.", img: "src/images/zelda6.jpg", position: 'left', name: 'Link' },



    ];

    let currentMessageIndex = 0;
    let songStarted = false; // Flag to check if song has started
    const song = new Audio('src/song.mp3');
    const reveal = new Audio('src/reveal.mp3');
    const stress = new Audio('src/question.mp3'); // Add your typing sound file here
    const correct = new Audio('src/correct.mp3');
    const song1 = new Audio('src/song1.mp3');
    const laugh = new Audio('src/laugh.mp3');
    const finish = new Audio('src/finish.mp3');



    song.volume = 1; // Set volume as needed
    song.loop = true;
    song1.loop = true;
    finish.loop = true;
    stress.volume = 1;
    let solved = false;
    videoShown = false;
    let videoSolved = false;

    

    function displayNextMessage() {
        if (currentMessageIndex < dialogues.length) {
            const currentDialogue = dialogues[currentMessageIndex];
            // Hide all elements first
            characterInfo1.style.display = "none";
            characterInfo2.style.display = "none";
            speechBubble1.style.display = "none";
            speechBubble2.style.display = "none";
            messageDisplay1.style.display = "none";
            messageDisplay2.style.display = "none";
            passwordSection.style.display = "none";



            if (instruction.style.display !== 'block') {
                instruction.style.display = 'block';
            }

            if (currentDialogue.position === 'left') {
                characterInfo1.style.display = "block";
                characterImg1.src = currentDialogue.img;
                characterName1.textContent = currentDialogue.name;
                characterImg1.style.display = "block"; // Ensure the image is displayed
                speechBubble1.className = `speech-bubble left`;
                speechBubble1.style.display = "block";
                messageDisplay1.innerHTML = ""; // Clear previous message
                typeText(messageDisplay1, currentDialogue.text, speechBubble1);
            } else {
                characterInfo2.style.display = "block";
                characterImg2.src = currentDialogue.img;
                characterName2.textContent = currentDialogue.name;
                if (characterName2.textContent === 'Imad') {
                    characterName2.style.color = "#32CD32"
                }
                if (characterName2.textContent === 'Billy Butcher') {
                    characterName2.style.color = "red"
                }
                if (characterName2.textContent === '???') {
                    characterName2.style.color = "grey"
                }
                characterImg2.style.display = "block"; // Ensure the image is displayed
                speechBubble2.className = `speech-bubble right`;
                speechBubble2.style.display = "block";
                messageDisplay2.innerHTML = ""; // Clear previous message
                typeText(messageDisplay2, currentDialogue.text, speechBubble2);
            }
            currentMessageIndex++;

            // Show password section after the specific message
            if (currentMessageIndex === 24) { 
                instruction.style.display = "none"; // Apply fade-in effect
                setTimeout(() => {
                    passwordSection.style.display = "block"; // Make it visible
                    passwordSection.classList.add('fade-in');
                }, 4000); // 2000 milliseconds = 2 seconds
            }

            // Show background images based on message index
            if (currentMessageIndex === 13) {
                document.body.style.backgroundImage = "url('src/images/bgs/2.jpg')"; // Set background image
            }

            if (currentMessageIndex === 15) {
                document.body.style.backgroundImage = "url('src/images/bgs/1.jpg')"; // Set background image
            }

            if (currentMessageIndex === 17) {
                document.body.style.backgroundImage = "none"; // Remove background image
            }

            if (currentMessageIndex === 22) {
                instruction.style.display = "none";
                setTimeout(() => {
                    questSection.style.display = "block"; // Make it visible
                    questSection.classList.add('fade-in');
                }, 1500);
            }
            if (currentMessageIndex === 28) {
                questSection.style.display = "none";
                videoShown = true 
            }
            if (currentMessageIndex === 20) {
                instruction.textContent = "Press Space to Show The Secret Phrase";
                instruction.style.color = "#1E90FF";
            }
            if (currentMessageIndex === 21) {
                secretPhrase.style.display = "block";
                secretPhrase.classList.add('fade-in');
            }
            if (currentMessageIndex === 32) {
                instruction.textContent = "Press Space to Start The Final Quest"
                instruction.style.color = "#1E90FF";
            }

            if (currentMessageIndex === 34) {
                instruction.textContent = "Press Space to Reaveal The Secret Phrase";
                instruction.style.color = "#1E90FF";
            }

        }
    }

    let isTyping = false; // Track whether the text is currently being typed
    let skipTyping = false;

    
    
 

    function typeText(messageDisplay, text, speechBubble) {
        let i = 0;
        isTyping = true; // Set the typing state to true
    
        const keywordStyles = {
            'Kwthr': 'color: #800080;',
            'Imad': 'color: #32CD32;',
            'Four quests': 'color: #DC143C;',
            'YOU WIN !!': 'color: #FFD700;',
            'First Quest:': 'color: #DC143C;',
            'discord': 'color: #1E90FF;',
            'password': 'color: #DC143C;',
            'OMG !!': 'color: #FFD700;',
            'Shut up': 'color: #DC143C;',
            'Second Quest:': 'color: #DC143C;',
            'secret phrase': 'color: #DC143C;',
            'space bar': 'color: #1E90FF;',
            'Great !!': 'color: #FFD700;',
            'second word': 'color: #DC143C;',
            'Third Quest:': 'color: #DC143C;',
            'OMG !!': 'color: #FFD700;',
            'Yesss OMG ILYYY !!': 'color: #FF1493;',
            'Yay !!': 'color: #FFD700;',
            'Final Quest:': 'color: #DC143C;',
            'FACT ADMISSION': 'color: #1E90FF;',
            'YOU READY?': 'color: #DC143C;',
            'The Final Quest begins:': 'color: #DC143C;',
            'two choices': 'color: #32CD32;',
            'answer correctly': 'color: #DC143C',
            'so intense': 'color: #DC143C',
            'stressful': 'color: #DC143C',
            'YOU MIGHT DIE': 'color: #DC143C',
            'Yess !!': 'color: #FFD700;',
            'completed': 'color: #1E90FF;',
            'We Should Be In Sync Like Two Halfs Of The Same HeartBeat': 'color: #1E90FF;',


        };
    
        function getStyledText(text) {
            let styledText = text;
            for (let keyword in keywordStyles) {
                const style = keywordStyles[keyword];
                const regex = new RegExp(`(${keyword})`, 'g');
                styledText = styledText.replace(regex, `<span style="${style}">$1</span>`);
            }
            return styledText;
        }

        
    
        function typeCharacter() {
            if (skipTyping) {
                // If skip is triggered, display full text immediately
                messageDisplay.innerHTML = getStyledText(text);
                isTyping = false; // Typing is complete
                skipTyping = false; // Reset the skip flag
            } else if (i <= text.length) {
                let partToType = text.substring(0, i);
                let styledText = getStyledText(partToType);
                messageDisplay.innerHTML = styledText;
                i++;
                setTimeout(typeCharacter, 20); // Adjust speed of typing
            } else {
                isTyping = false; // Typing is complete
            }
        }
    
        messageDisplay.style.display = "block"; // Make sure the message is visible
        speechBubble.style.display = "block"; // Ensure the speech bubble is visible
        typeCharacter();
    }

    function revealWord(wordId, newText) {
        reveal.play();
        const wordElement = document.getElementById(wordId);
        wordElement.style.opacity = '0'; // Fade out the current text
        setTimeout(() => {
            wordElement.textContent = newText; // Change the text after fading out
            wordElement.style.opacity = '1'; // Fade in the new text
        }, 500); // Delay to sync with the fade-out effect
    }

    
    // Start the reveal when the page loads

    // Event listener for the spacebar key
    document.addEventListener("keydown", function(event) {
        if (event.code === "Space" || event.key === " ") {
            if (isTyping) {
                skipTyping = true; 
                return;// Trigger skip if text is still being typed
            } else {
                if (!songStarted) {
                    song.play(); // Start playing the song on first spacebar press
                    songStarted = true; // Set the flag to true after starting the song
                }
                if (instruction.style.display === "none") {
                    return;
                }
                if (videoContainer.style.display !== "none") {
                    memeVideo.play();
                    return;
                }
                instruction.textContent = "Press Space to Continue";
                instruction.style.color = '#FFD700'

                if (videoShown) {
                    secretPhrase.style.display = "none";
                    characterInfo1.style.display = "none";
                    characterInfo2.style.display = "none";
                    speechBubble1.style.display = "none";
                    speechBubble2.style.display = "none";
                    messageDisplay1.style.display = "none";
                    messageDisplay2.style.display = "none";
                    passwordSection.style.display = "none";
                    videoContainer.style.display = "block";
                    videoContainer.classList.add('fade-in');
                    instruction.textContent = "Press Space to Play The Video"
                    instruction.style.color = "#1E90FF";
                    song.pause();
                    videoShown = false;
                    return;
                }
                if (currentMessageIndex === 31) {
                    song.pause();
                    song1.play();
                }

                if (currentMessageIndex === 32) {
                    characterInfo1.style.display = "none";
                    characterInfo2.style.display = "none";
                    speechBubble1.style.display = "none";
                    speechBubble2.style.display = "none";
                    messageDisplay1.style.display = "none";
                    messageDisplay2.style.display = "none";
                    passwordSection.style.display = "none";
                    imageContainer.style.display = "block";
                    imageContainer.classList.add('fade-in');
                    instruction.textContent = "Choose The Right Answer !!"
                    secretPhrase.style.display = "none";
                    return;
                }
                if (currentMessageIndex === 34) {
                    characterInfo1.style.display = "none";
                    characterInfo2.style.display = "none";
                    speechBubble1.style.display = "none";
                    speechBubble2.style.display = "none";
                    messageDisplay1.style.display = "none";
                    messageDisplay2.style.display = "none";
                    passwordSection.style.display = "none";
                    instruction.style.display = "none";
                    secretPhrase.style.animation = "moveToCenter 2s forwards, glowEffect 4s infinite ease-in-out 2s";
                    setTimeout(() => {
                        instruction.textContent = "Press Space !!"
                        instruction.style.color = "#1E90FF";

                        instruction.style.display = "block";
                    }, 4000);
                    currentMessageIndex++;
                    return;
                }
                if (currentMessageIndex === 35) {
                    revealWord('word3', 'MARRY')
                    setTimeout(() => {
                        secretPhrase.style.color = '#FFB6C1'; // Light Pink
                        secretPhrase.style.borderColor = '#FF1493'; // Deep Pink
                    }, 500);

                    currentMessageIndex++;
                    return;
                }
                if (currentMessageIndex === 36) {
                    secretPhrase.style.animation = "moveUp 2s forwards";
                    setTimeout(() => {
                        secretPhrase.style.display = "none";
                        messageContainer.style.display = "block";
                        messageContainer.classList.add("fade-in");
                        instruction.style.display = "none";
                    }, 2000);
                    return; 
                }
                displayNextMessage();
            }
            event.preventDefault(); // Prevent spacebar from scrolling the page
        }
    });
    

    // Handle submit button click
    submitButton.addEventListener('click', function() {
        const enteredPassword = passwordInput.value;
        // Check if the password is correct (example password: 'correctpassword')
        if (enteredPassword === '18092023') {
            revealWord('word4', 'ME?')


            displayNextMessage();
            event.preventDefault();
            // Proceed with whatever needs to be done after correct password
        } else {
            passwordInput.classList.add('shake');
            setTimeout(() => {
                passwordInput.classList.remove('shake');

            }, 1000);
        }
    });

    wrongButton1.addEventListener('click', function() {
        if (solved) {
            return;
        }
        questSection.style.border = "4px solid #e74c3c";
        questSection.classList.add('shake');
        wrongButton1.style.border = "2px solid #e74c3c";
            setTimeout(() => {
                questSection.classList.remove('shake');
                questSection.style.border = "4px solid #2ecc71";

            }, 1000);
    })
    wrongButton2.addEventListener('click', function() {
        if (solved) {
            return;
        }
        questSection.style.border = "4px solid #e74c3c";
        questSection.classList.add('shake');
        wrongButton2.style.border = "2px solid #e74c3c";
            setTimeout(() => {
                questSection.classList.remove('shake');
                questSection.style.border = "4px solid #2ecc71";

            }, 1000);
    })
    wrongButton3.addEventListener('click', function() {
        if (solved) {
            return;
        }
        questSection.style.border = "4px solid #e74c3c";
        questSection.classList.add('shake');
        wrongButton3.style.border = "2px solid #e74c3c";
            setTimeout(() => {
                questSection.classList.remove('shake');
                questSection.style.border = "4px solid #2ecc71";

            }, 1000);
    })

    correctButton.addEventListener('click', function() {
        if (solved) {
            return;
        }
        questSection.style.border = "4px solid #f1c40f";
        correctButton.style.border = "2px solid #2ecc71"
        solved = true;
        revealWord('word2', 'YOU')
        setTimeout(() => {
            questSection.style.display = "none";
        }, 1000);

        displayNextMessage();

    })
    wrongButton11.addEventListener('click', function() {
        questSection1.style.border = "4px solid #e74c3c";
        questSection1.classList.add('shake');
        wrongButton11.style.border = "2px solid #e74c3c";
            setTimeout(() => {
                questSection1.classList.remove('shake');
                questSection1.style.border = "4px solid #2ecc71";

            }, 1000);
    })
    wrongButton22.addEventListener('click', function() {
        questSection1.style.border = "4px solid #e74c3c";
        questSection1.classList.add('shake');
        wrongButton22.style.border = "2px solid #e74c3c";
            setTimeout(() => {
                questSection1.classList.remove('shake');
                questSection1.style.border = "4px solid #2ecc71";

            }, 1000);
    })
    wrongButton33.addEventListener('click', function() {
        questSection1.style.border = "4px solid #e74c3c";
        questSection1.classList.add('shake');
        wrongButton33.style.border = "2px solid #e74c3c";
            setTimeout(() => {
                questSection1.classList.remove('shake');
                questSection1.style.border = "4px solid #2ecc71";

            }, 1000);
    })

    correctButton1.addEventListener('click', function() {
        correct.play();
        questSection1.style.border = "4px solid #f1c40f";
        correctButton1.style.border = "2px solid #2ecc71"
        videoSolved = true;
        setTimeout(() => {
            questSection1.style.display = "none";
            memeVideo.play();
        }, 5000);
        setTimeout(() => {
            videoContainer.style.display = "none";
            instruction.textContent = "Press Space to Continue"
            instruction.style.color = "#FFD700";
            secretPhrase.style.display = "block";
            secretPhrase.classList.add('fade-in');
            stress.pause();
            song.play();
            displayNextMessage();
        }, 7500);
        setTimeout(() => {
            revealWord('word1', 'WILL')
        }, 8000);
    })

    button1.addEventListener('click', function() {
        button1.style.border = "2px solid #e74c3c";
        laugh.play();
        title.textContent = "You Gotta Be Kidding Me"
        title.style.color = "red"
        setTimeout(() => {
            title.textContent = "Who's The Goat? Srsly"
            title.style.color = "#FFFF00"
        }, 2000);
    })
    

    button2.addEventListener('click', function() {
        song1.pause();
        finish.play();          
        button2.style.border = "2px solid #f1c40f";
        title.textContent = "Yessiiiiirr"
        title.style.color = "#2ecc71"

        setTimeout(() => {
            imageContainer.style.display = "none";
            instruction.textContent = "Press Space to Continue";
            secretPhrase.style.display = "block";
            secretPhrase.classList.add("fade-in");
            displayNextMessage();
        }, 1500);
    })
    // Start by displaying the first message
    characterInfo2.style.display = "none";
    characterInfo1.style.display= "none";
    instruction.style.display = "none";
    setTimeout(() => {
        displayNextMessage();
    }, 3500);

});

window.addEventListener('load', function() {
    // Delay hiding the loader by 2 seconds
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
    }, 3500); // Adjust the delay as needed (2000ms = 2 seconds)
});




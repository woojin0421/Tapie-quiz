// 퀴즈 데이터
const quizData = [
    // 6점 문제들
    {
        question: "다음 중 올바른 테이피의 스펠링은?",
        options: ["TAPEI", "TAPIE", "TAIPE", "TEAPI"],
        correct: 1,
        points: 6
    },
    {
        question: "다음 중 선린 동문이 아닌 사람은?",
        options: [
            { text: "방정환", image: "https://th.bing.com/th/id/OIP.YSGycI7v-pt6UL6k-yRdVgAAAA?w=122&h=187&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3" },
            { text: "socodomo", image: "https://th.bing.com/th/id/OIP.x-_8637JZotn6wl4mXzeSwHaEK?w=295&h=180&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3" },
            { text: "Zior Park", image: "https://th.bing.com/th/id/OIP.gzbrIOrktX3l6aeEg4CHqQHaEH?w=311&h=180&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3" },
            { text: "zion-T", image: "https://th.bing.com/th/id/OIP.vaBa5U3LlgmvrT_sVwPudQHaJQ?w=127&h=180&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3" }
        ],
        correct: 3,
        points: 6,
        hasImages: true
    },
    {
        question: "1호관 2층은 어떤 과가 사용하나요?",
        options: ["소프트웨어과", "정보보호과", "콘텐츠디자인과", "IT경영과"],
        correct: 1,
        points: 6
    },
    {
        question: "다음 중 매점에 없는 음식은?",
        options: [
            { text: "참치마요컵밥", image: "https://th.bing.com/th/id/OIP.2dddQ8gGCEkXk6DcWJkYGQHaHa?w=173&h=180&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3" },
            { text: "요맘때", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNMBHbjg3MAVAM3vu5uhQNcoEkZfVufB2vHA&s" },
            { text: "죠스바", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIjRcbY3X46PR6-JXT22cZTfaBTMMyBxfF2Q&s" },
            { text: "매운새우깡", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyQYqSodMqlOA53b4RYskr84s9THxqvKVkRg&s" },
        ],
        correct: 2,
        points: 6,
        hasImages: true
    },
    {
        question: "선린 학생회 이름은?",
        options: ["BACK-UP", "SPARK", "FLAME", "BRIGHT"],
        correct: 1,
        points: 6
    },
    {
        question: "교가 맨 마지막 가사는?",
        options: ["선린의 터를", "선린의 땅을", "선린에 터를", "선린의 하늘을"],
        correct: 0,
        points: 6
    },
    {
        question: "교가 맨 처음 가사는?",
        options: ["저 높은 남산 위에 우뚝 선", "드 높은 남산 위에 우뚝 선", "드 넓은 남산 위에 우뚝 선", "드 높은 남산 중에 우뚝 선"],
        correct: 1,
        points: 6
    },
    {
        question: "현재 1학년(120기)의 학급 개수는?",
        options: ["8개", "12개", "10개", "14개"],
        correct: 2,
        points: 6
    },
    {
        question: "콘텐츠디자인과의 옛이름은?",
        options: ["산업디자인과", "멀티미디어과", "콘텐츠미디어디자인과", "멀티디자인과"],
        correct: 1,
        points: 6
    },
    {
        question: "다음 중 TAPIE 부실의 위치는?",
        options: ["341실", "343실", "데이터과학실", "인공지능실"],
        correct: 1,
        points: 6
    },
    
    // 8점 문제들
    {
        question: "TAPIE에 있는 '우진'을 모두 선택하세요 (2개)",
        options: ["정우진", "설우진", "이우진", "김우진"],
        correct: [0, 2], // 다중 선택
        points: 8,
        multiSelect: true
    },
    {
        question: "교문에 들어오자마자 보이는 비석에 새겨져있는 문구는?",
        options: ["白年을 딛고 于年을 날자", "百年을 딛고 千年을 날자", "千年을 딛고 萬年을 날자", "千年을 딛고 百年을 날자"],
        correct: 1,
        points: 8
    },
    {
        question: "선린인고의 전공동아리는 총 몇 개인가요?",
        options: ["12개", "15개", "8개", "13개"],
        correct: 1,
        points: 8
    },
    {
        question: "선린인고의 교훈은?",
        options: ["참된 일꾼이 되자", "세계로 미래로 꿈을 펼치자", "성실한 일꾼이 되자", "세계로 미래로 나아가자"],
        correct: 1,
        points: 8
    },
    {
        question: "선린인고 공식 홈페이지 주소는?",
        options: ["https://sunrint.sen.hs.kr/", "https://sunrin.sen.hs.kr/", "https://sunrint.hs.kr/", "https://sunrin.hs.kr/"],
        correct: 0,
        points: 8
    }
];

// 게임 상태
let currentQuestionIndex = 0;
let score = 0;
let correctCount = 0;
let timeLeft = 5;
let timer;
let playerName = '';
let playerDepartment = '';
let selectedOptions = []; // 다중선택을 위한 배열

// DOM 요소
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const nicknameInput = document.getElementById('nickname');
const departmentSelect = document.getElementById('department');
const startBtn = document.getElementById('start-btn');
const questionNumber = document.getElementById('question-number');
const currentScoreElement = document.getElementById('current-score');
const timerElement = document.getElementById('timer');
const questionPointsElement = document.getElementById('question-points');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options');
const resultNickname = document.getElementById('result-nickname');
const resultDepartment = document.getElementById('result-department');
const finalScore = document.getElementById('final-score');
const correctCountElement = document.getElementById('correct-count');
const accuracy = document.getElementById('accuracy');
const newRecordElement = document.getElementById('new-record');
const restartBtn = document.getElementById('restart-btn');
const homeBtn = document.getElementById('home-btn');
const bestScoreElement = document.getElementById('best-score');

// 초기화
function init() {
    loadBestScore();
    
    // 이벤트 리스너
    startBtn.addEventListener('click', startQuiz);
    
    // 기본 버튼 이벤트 (자동 복귀 타이머에서 덮어쓰일 수 있음)
    restartBtn.onclick = () => {
        cancelAutoReturn();
        restartQuiz();
    };
    
    homeBtn.onclick = () => {
        cancelAutoReturn();
        goHome();
    };
    
    // 입력 검증
    nicknameInput.addEventListener('input', validateInputs);
    departmentSelect.addEventListener('change', validateInputs);
    
    // 엔터키로 시작
    nicknameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !startBtn.disabled) {
            startQuiz();
        }
    });
    
    // 기록 초기화 버튼 이벤트
    const resetBtn = document.getElementById('reset-records-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', showResetModal);
    }
    
    // 전체 기록 보기 버튼 이벤트
    const viewAllRecordsBtn = document.getElementById('view-all-records-btn');
    if (viewAllRecordsBtn) {
        viewAllRecordsBtn.addEventListener('click', showAllRecordsModal);
    }
    
    // 초기 버튼 상태 설정
    validateInputs();
}

// 기록 초기화 모달 표시
function showResetModal() {
    const modal = document.getElementById('reset-modal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

// 기록 초기화 모달 숨기기
function hideResetModal() {
    const modal = document.getElementById('reset-modal');
    const passwordInput = document.getElementById('reset-password');
    if (modal) {
        modal.style.display = 'none';
        if (passwordInput) {
            passwordInput.value = '';
        }
    }
}

// 기록 초기화 실행
function resetRecords() {
    const passwordInput = document.getElementById('reset-password');
    const password = passwordInput.value;
    
    if (password === '0421') {
        // 기존 기록 수 확인
        const currentRankings = getRankings();
        const recordCount = currentRankings.length;
        
        // 모든 기록 삭제
        localStorage.removeItem('tapie-quiz-rankings');
        localStorage.removeItem('tapie-quiz-best-score');
        localStorage.removeItem('tapie-quiz-best-score-holder');
        localStorage.removeItem('tapie-quiz-best-score-department');
        
        // 화면 업데이트
        loadBestScore();
        hideResetModal();
        
        console.log(`총 ${recordCount}개의 기록이 초기화되었습니다.`);
        alert(`총 ${recordCount}개의 기록이 초기화되었습니다.`);
    } else {
        alert('비밀번호가 틀렸습니다.');
        passwordInput.value = '';
        passwordInput.focus();
    }
}

// 입력 검증
function validateInputs() {
    const nickname = nicknameInput.value.trim();
    const department = departmentSelect.value;
    
    if (nickname && department) {
        startBtn.disabled = false;
        startBtn.style.opacity = '1';
        startBtn.style.cursor = 'pointer';
    } else {
        startBtn.disabled = true;
        startBtn.style.opacity = '0.6';
        startBtn.style.cursor = 'not-allowed';
    }
}

// 최고 점수 로드
function loadBestScore() {
    const rankings = getRankings();
    
    if (rankings.length === 0) {
        bestScoreElement.innerHTML = '<div class="no-records">아직 기록이 없습니다</div>';
        return;
    }
    
    let html = '<div class="rankings">';
    const medals = ['1등', '2등','3등'];
    
    rankings.slice(0, 3).forEach((record, index) => {
        const medal = medals[index] || `${index + 1}등`;
        // 이름과 학과를 명확하게 구분하여 표시
        const playerInfo = `${record.name} (${record.department})`;
        html += `
            <div class="rank-item rank-${index + 1}">
                <span class="medal">${medal}</span>
                <div class="rank-info">
                    <div class="rank-score">${record.score}점</div>
                    <div class="rank-details">${playerInfo}</div>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    bestScoreElement.innerHTML = html;
}

// 순위 데이터 가져오기
function getRankings() {
    const rankings = localStorage.getItem('tapie-quiz-rankings');
    return rankings ? JSON.parse(rankings) : [];
}

// 순위 업데이트
function updateRankings(score, name, department) {
    let rankings = getRankings();
    
    // 같은 사람인지 확인하는 함수 (이름과 학과가 모두 같아야 같은 사람)
    const isSamePerson = (record, playerName, playerDepartment) => {
        return record.name.trim().toLowerCase() === playerName.trim().toLowerCase() && 
               record.department === playerDepartment;
    };
    
    // 같은 사람의 기존 기록이 있는지 확인
    const existingRecordIndex = rankings.findIndex(record => 
        isSamePerson(record, name, department)
    );
    
    if (existingRecordIndex !== -1) {
        // 기존 기록이 있으면 더 높은 점수일 때만 업데이트
        if (score > rankings[existingRecordIndex].score) {
            rankings[existingRecordIndex].score = score;
            rankings[existingRecordIndex].date = new Date().toISOString();
            console.log(`${name}(${department})의 기록이 ${rankings[existingRecordIndex].score}점에서 ${score}점으로 갱신되었습니다.`);
        } else {
            console.log(`${name}(${department})의 기존 기록(${rankings[existingRecordIndex].score}점)이 더 높아 갱신되지 않았습니다.`);
        }
    } else {
        // 새로운 사람이면 기록 추가
        rankings.push({
            score: score,
            name: name.trim(),
            department: department,
            date: new Date().toISOString()
        });
        console.log(`${name}(${department})의 새로운 기록 ${score}점이 추가되었습니다.`);
    }
    
    // 점수순으로 정렬 (높은 점수부터)
    rankings.sort((a, b) => b.score - a.score);
    
    // 상위 10개만 유지
    rankings = rankings.slice(0, 10);
    
    // 저장
    localStorage.setItem('tapie-quiz-rankings', JSON.stringify(rankings));
    
    // 1등인지 확인 (같은 사람이 1등이고 점수가 갱신된 경우만)
    const firstPlace = rankings[0];
    return isSamePerson(firstPlace, name, department) && firstPlace.score === score;
}

// 퀴즈 시작
function startQuiz() {
    const nickname = nicknameInput.value.trim();
    const department = departmentSelect.value;
    
    if (!nickname || !department) {
        alert('닉네임과 학과를 모두 입력해주세요!');
        return;
    }
    
    playerName = nickname;
    playerDepartment = department;
    
    // 퀴즈 데이터 섞기
    shuffleArray(quizData);
    
    // 상태 초기화
    currentQuestionIndex = 0;
    score = 0;
    correctCount = 0;
    
    // 화면 전환
    showScreen('quiz');
    displayQuestion();
}

// 배열 섞기 (Fisher-Yates 알고리즘)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// 문제 표시
function displayQuestion() {
    const question = quizData[currentQuestionIndex];
    
    // UI 업데이트
    questionNumber.textContent = currentQuestionIndex + 1;
    currentScoreElement.textContent = score;
    questionPointsElement.textContent = question.points + '점';
    questionText.textContent = question.question;
    
    // 선택 상태 초기화
    selectedOptions = [];
    
    // 선택지 표시
    optionsContainer.innerHTML = '';
    
    // 선택지 섞기
    const shuffledOptions = question.options.map((option, index) => ({
        text: question.hasImages ? option.text : option,
        image: question.hasImages ? option.image : null,
        originalIndex: index
    }));
    shuffleArray(shuffledOptions);
    
    shuffledOptions.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        
        // 클릭 활성화
        optionElement.style.pointerEvents = 'auto';
        optionElement.style.cursor = 'pointer';
        
        if (question.hasImages) {
            optionElement.innerHTML = `
                <img src="${option.image}" alt="${option.text}" class="option-image">
                <span class="option-text">${option.text}</span>
            `;
        } else {
            optionElement.textContent = option.text;
        }
        
        if (question.multiSelect) {
            optionElement.onclick = () => selectMultipleOption(index, option.originalIndex, question.correct);
        } else {
            optionElement.onclick = () => selectOption(index, option.originalIndex, question.correct);
        }
        
        optionsContainer.appendChild(optionElement);
    });
    
    // 다중선택 문제인 경우 제출 버튼 추가
    if (question.multiSelect) {
        const submitButton = document.createElement('button');
        submitButton.className = 'btn primary submit-btn';
        submitButton.textContent = '답안 제출';
        submitButton.onclick = () => submitMultipleAnswer(question.correct);
        submitButton.disabled = true;
        optionsContainer.appendChild(submitButton);
    }
    
    // 타이머 표시 숨기기
    timerElement.style.display = 'none';
}

// 다중선택 옵션 선택
function selectMultipleOption(selectedIndex, originalIndex, correctAnswerArray) {
    const options = document.querySelectorAll('.option');
    const submitBtn = document.querySelector('.submit-btn');
    
    // 이미 선택된 옵션인지 확인
    const existingIndex = selectedOptions.findIndex(opt => opt.selectedIndex === selectedIndex);
    
    if (existingIndex > -1) {
        // 이미 선택된 경우 선택 해제
        selectedOptions.splice(existingIndex, 1);
        options[selectedIndex].classList.remove('selected');
    } else {
        // 새로 선택
        selectedOptions.push({ selectedIndex, originalIndex });
        options[selectedIndex].classList.add('selected');
    }
    
    // 제출 버튼 활성화/비활성화
    submitBtn.disabled = selectedOptions.length === 0;
}

// 다중선택 답안 제출
function submitMultipleAnswer(correctAnswerArray) {
    const options = document.querySelectorAll('.option');
    const submitBtn = document.querySelector('.submit-btn');
    
    // 제출 버튼 비활성화
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.6';
    submitBtn.style.cursor = 'not-allowed';
    
    // 모든 옵션 클릭 비활성화
    options.forEach(option => {
        if (!option.classList.contains('submit-btn')) {
            option.style.pointerEvents = 'none';
            option.style.cursor = 'not-allowed';
        }
    });
    
    // 정답 확인
    const selectedOriginalIndices = selectedOptions.map(opt => opt.originalIndex).sort();
    const correctIndices = [...correctAnswerArray].sort();
    const isCorrect = JSON.stringify(selectedOriginalIndices) === JSON.stringify(correctIndices);
    
    // 정답/오답 표시
    setTimeout(() => {
        options.forEach((option, index) => {
            if (index === options.length - 1) return; // 제출 버튼 제외
            
            const optionOriginalIndex = getOriginalIndexFromElement(option, index);
            
            if (correctAnswerArray.includes(optionOriginalIndex)) {
                option.classList.add('correct');
            } else if (selectedOptions.some(opt => opt.selectedIndex === index)) {
                option.classList.add('incorrect');
            }
        });
        
        // 점수 계산
        if (isCorrect) {
            score += quizData[currentQuestionIndex].points;
            correctCount++;
        }
        
        // 다음 문제로 이동 (2초 대기)
        setTimeout(() => {
            nextQuestion();
        }, 2000);
    }, 500);
}

// 요소에서 원본 인덱스 찾기
function getOriginalIndexFromElement(optionElement, displayIndex) {
    const question = quizData[currentQuestionIndex];
    const optionText = question.hasImages 
        ? optionElement.querySelector('.option-text').textContent 
        : optionElement.textContent;
    
    return question.options.findIndex(opt => 
        question.hasImages ? opt.text === optionText : opt === optionText
    );
}

// 선택지 선택
function selectOption(selectedIndex, originalIndex, correctIndex) {
    // 이미 선택이 완료된 상태면 클릭 무시
    if (document.querySelector('.option.selected') || document.querySelector('.option.correct') || document.querySelector('.option.incorrect')) {
        return;
    }
    
    // 타이머가 있다면 정리
    if (timer) {
        clearInterval(timer);
    }
    
    const options = document.querySelectorAll('.option');
    const isCorrect = originalIndex === correctIndex;
    
    // 모든 옵션 클릭 비활성화
    options.forEach(option => {
        option.style.pointerEvents = 'none';
        option.style.cursor = 'not-allowed';
    });
    
    // 선택한 옵션 표시
    options[selectedIndex].classList.add('selected');
    
    // 정답/오답 표시
    setTimeout(() => {
        options.forEach((option, index) => {
            const optionOriginalIndex = quizData[currentQuestionIndex].hasImages
                ? quizData[currentQuestionIndex].options.findIndex(opt => opt.text === option.querySelector('.option-text')?.textContent || option.textContent)
                : quizData[currentQuestionIndex].options.findIndex(opt => opt === option.textContent);
            
            if (optionOriginalIndex === correctIndex) {
                option.classList.add('correct');
            } else if (index === selectedIndex && !isCorrect) {
                option.classList.add('incorrect');
            }
        });
        
        // 점수 계산
        if (isCorrect) {
            score += quizData[currentQuestionIndex].points;
            correctCount++;
        }
        
        // 다음 문제로 이동 (2초 대기)
        setTimeout(() => {
            nextQuestion();
        }, 2000);
    }, 500);
}

// 타이머 시작
function startTimer() {
    timeLeft = 5;
    timerElement.textContent = timeLeft;
    timerElement.classList.remove('warning');
    
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;
        
        // 시간이 2초 이하일 때 경고 스타일
        if (timeLeft <= 2) {
            timerElement.classList.add('warning');
        }
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            // 시간 초과 시 다음 문제로
            setTimeout(() => {
                nextQuestion();
            }, 500);
        }
    }, 1000);
}

// 다음 문제
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizData.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

// 결과 표시
function showResults() {
    // 결과 정보 업데이트
    resultNickname.textContent = playerName;
    resultDepartment.textContent = playerDepartment;
    finalScore.textContent = score;
    correctCountElement.textContent = correctCount;
    accuracy.textContent = Math.round((correctCount / quizData.length) * 100) + '%';
    
    // 순위 업데이트 및 신기록 확인
    const isNewFirst = updateRankings(score, playerName, playerDepartment);
    
    // 내 순위 확인 및 표시
    const myRank = getMyRank(playerName, playerDepartment);
    const myRankElement = document.getElementById('my-rank');
    if (myRank !== -1) {
        myRankElement.textContent = `${myRank}등`;
        myRankElement.style.color = myRank <= 3 ? '#22c55e' : '#ffffff';
    } else {
        myRankElement.textContent = '-';
    }
    
    if (isNewFirst) {
        newRecordElement.classList.remove('hidden');
        loadBestScore();
    } else {
        newRecordElement.classList.add('hidden');
    }
    
    // 화면 전환
    showScreen('result');
    
    // 먼저 순위 알림 모달 표시
    showRankAnnouncement(myRank);
}

// 순위 알림 모달 표시
function showRankAnnouncement(rank) {
    const modal = document.getElementById('rank-announcement-modal');
    const rankText = document.getElementById('rank-announcement-text');
    const rankScore = document.getElementById('rank-announcement-score');
    
    if (rank !== -1) {
        rankText.textContent = `${playerName}님은 ${rank}등입니다!`;
    } else {
        rankText.textContent = `${playerName}님의 기록이 등록되었습니다!`;
    }
    
    rankScore.textContent = `${score}점`;
    modal.style.display = 'flex';
}

// 순위 알림 모달 닫기
function closeRankAnnouncement() {
    const modal = document.getElementById('rank-announcement-modal');
    modal.style.display = 'none';
    
    // 10초 후 자동 복귀 시작
    startInactivityTimer();
}

// 비활성 상태 타이머 시작 (10초 후 3초 카운트다운)
function startInactivityTimer() {
    let inactivityTimer;
    let isUserActive = false;
    
    // 사용자 활동 감지 함수
    const resetInactivityTimer = () => {
        isUserActive = true;
        if (inactivityTimer) {
            clearTimeout(inactivityTimer);
        }
        
        // 다시 10초 타이머 시작
        inactivityTimer = setTimeout(() => {
            if (!isUserActive) {
                startAutoReturn(); // 3초 카운트다운 시작
            }
        }, 10000);
        
        // 활성 상태 플래그 리셋
        setTimeout(() => {
            isUserActive = false;
        }, 100);
    };
    
    // 초기 10초 타이머 시작
    inactivityTimer = setTimeout(() => {
        startAutoReturn(); // 3초 카운트다운 시작
    }, 10000);
    
    // 사용자 활동 이벤트 리스너 추가
    const activityEvents = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    
    activityEvents.forEach(event => {
        document.addEventListener(event, resetInactivityTimer, true);
    });
    
    // 전역에서 접근할 수 있도록 저장
    window.inactivityTimer = inactivityTimer;
    window.activityEvents = activityEvents;
    window.resetInactivityTimer = resetInactivityTimer;
}

// 내 순위 찾기
function getMyRank(name, department) {
    const rankings = getRankings();
    const myRecordIndex = rankings.findIndex(record => 
        record.name.trim().toLowerCase() === name.trim().toLowerCase() && 
        record.department === department
    );
    
    return myRecordIndex !== -1 ? myRecordIndex + 1 : -1;
}

// 자동 복귀 타이머 시작
function startAutoReturn() {
    // 비활성 타이머 정리
    if (window.inactivityTimer) {
        clearTimeout(window.inactivityTimer);
    }
    
    // 활동 감지 이벤트 리스너 제거
    if (window.activityEvents && window.resetInactivityTimer) {
        window.activityEvents.forEach(event => {
            document.removeEventListener(event, window.resetInactivityTimer, true);
        });
    }
    
    // 자동 복귀 모달 표시
    const autoReturnModal = document.getElementById('auto-return-modal');
    const countdownNumberElement = document.getElementById('countdown-number');
    
    autoReturnModal.style.display = 'flex';
    
    let countdown = 3; // 3초로 변경
    countdownNumberElement.textContent = countdown;
    
    // 1초마다 카운트다운 업데이트
    const autoReturnTimer = setInterval(() => {
        countdown--;
        countdownNumberElement.textContent = countdown;
        
        if (countdown <= 0) {
            clearInterval(autoReturnTimer);
            autoReturnModal.style.display = 'none';
            goHome(); // 처음 화면으로 돌아가기
        }
    }, 1000);
    
    // 전역에서 접근할 수 있도록 타이머 저장
    window.autoReturnTimer = autoReturnTimer;
}

// 자동 복귀 취소
function cancelAutoReturn() {
    const autoReturnModal = document.getElementById('auto-return-modal');
    
    if (window.autoReturnTimer) {
        clearInterval(window.autoReturnTimer);
        window.autoReturnTimer = null;
    }
    
    // 비활성 타이머도 정리
    if (window.inactivityTimer) {
        clearTimeout(window.inactivityTimer);
        window.inactivityTimer = null;
    }
    
    // 활동 감지 이벤트 리스너 제거
    if (window.activityEvents && window.resetInactivityTimer) {
        window.activityEvents.forEach(event => {
            document.removeEventListener(event, window.resetInactivityTimer, true);
        });
    }
    
    autoReturnModal.style.display = 'none';
}

// 지금 바로 돌아가기
function goHomeNow() {
    cancelAutoReturn();
    goHome();
}

// 전체 기록 모달 표시
function showAllRecordsModal() {
    const modal = document.getElementById('all-records-modal');
    const recordsList = document.getElementById('all-records-list');
    
    const rankings = getRankings();
    
    if (rankings.length === 0) {
        recordsList.innerHTML = '<div style="text-align: center; color: rgba(255, 255, 255, 0.7); padding: 40px;">아직 기록이 없습니다</div>';
    } else {
        let html = '';
        rankings.forEach((record, index) => {
            const date = new Date(record.date);
            const formattedDate = `${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
            
            html += `
                <div class="all-record-item">
                    <div class="record-rank">${index + 1}등</div>
                    <div class="record-info">
                        <div class="record-name">${record.name}</div>
                        <div class="record-department">${record.department}</div>
                        <div class="record-date">${formattedDate}</div>
                    </div>
                    <div class="record-score">${record.score}점</div>
                </div>
            `;
        });
        recordsList.innerHTML = html;
    }
    
    modal.style.display = 'flex';
}

// 전체 기록 모달 숨기기
function hideAllRecordsModal() {
    const modal = document.getElementById('all-records-modal');
    modal.style.display = 'none';
}

// 화면 전환
function showScreen(screenName) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    document.getElementById(screenName + '-screen').classList.add('active');
}

// 다시 시작
function restartQuiz() {
    showScreen('start');
    // 입력 필드 초기화는 하지 않음
}

// 처음으로
function goHome() {
    showScreen('start');
    // 모든 입력 필드 초기화
    nicknameInput.value = '';
    departmentSelect.value = '';
    validateInputs();
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', init);
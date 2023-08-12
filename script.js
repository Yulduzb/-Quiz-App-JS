

const questionElement=document.getElementById("question");
const answerBtns=document.getElementById("answer-buttons");
const nextBtn=document.getElementById("next-btn");

let currentQuestionIndex=0;

let score=0;

const startQuiz=()=>{
    currentQuestionIndex=0;
    
    score=0;
    nextBtn.innerHTML="Next";
    showQuestion();
}


function showQuestion(){
    resetState();
    let currentQuestion=sorular[currentQuestionIndex];
   console.log(currentQuestion);
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML= questionNo+ ". "+ currentQuestion.soru;

   currentQuestion.cevaplar.forEach(element => {
       const button=document.createElement("button");
       button.innerHTML=element.metin;
        button.classList.add("btn");
        answerBtns.appendChild(button);
        if(element.dogru){
            button.dataset.dogru=element.dogru;
        }
        button.addEventListener("click",selectAnswer);
        
    });
}

function resetState(){
    nextBtn.style.display="none";         
    while(answerBtns.firstChild){                                 //answerBtns adında bir HTML öğesinin firstChild özelliğine bakıyor. Bu özellik, answerBtns öğesinin ilk alt öğesini temsil eder. Bu döngü, alt öğeleri silme işlemi yaparken kullanılır.
        answerBtns.removeChild(answerBtns.firstChild);
    }
}

//cevabi tıklandğinda çalişacak
function selectAnswer(e){
    const selectBtn=e.target;
    const isCorrect=selectBtn.dataset.dogru==="true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerBtns.children).forEach(button => {
        if(button.dataset.dogru==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextBtn.style.display="block";
}


//alinan puan göstermesi için
function showScore(){
    resetState();
    questionElement.innerHTML=`Scorunuz: ${sorular.length} üzerindan ${score} puan aldiniz`;
    nextBtn.innerHTML="Tekrar Oyna";
    nextBtn.style.display="block";
}



//Sonraki soruya geçmesi için
function handleNextButton(){
    currentQuestionIndex++;
    if( currentQuestionIndex<sorular.length){
        showQuestion();
    }else{
        showScore();
        
    }
   
}
//sonraki button click olduğunda 
nextBtn.addEventListener("click",()=>{
    if(currentQuestionIndex<sorular.length){
        handleNextButton();
    }else{
        startQuiz(); // quiz yenidan başlar
    }
});

startQuiz();


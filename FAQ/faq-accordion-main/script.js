function toggleAnswer(index) {
    const answers = document.getElementsByClassName('faq-answer');
    if (answers[index].classList.contains('active')) {
        answers[index].classList.remove('active');
    } 
    else {
        answers[index].classList.add('active');
    }
}
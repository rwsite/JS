

function myFirstApp( name, age){
    let message; let num;

    alert("Привет, меня зовут " + name + " и это моя первая программа");
    
    function showSkills() {
        let skills = ['html','css','php', 'PS'];
        for (let i = 0; i < skills.length ; i++ ){
            message  = 'Я владею: ' + skills[i] + '<br>'; //Непотно чем выводить??
            //console.log(message); alert(message);
            document.querySelector('div').innerHTML += message;
        }
    }
    showSkills();// skills передавать не нужно?

    function checkAge(age) {
        if ( age >= 18){
            message  = '<div class="alert alert-success" role="alert">Вам открыт доступ в раздел 18+</div>';
        }else{
            message  = '<div class="alert alert-danger" role="alert">Вам закрыт доступ в раздел 18+</div>';
        }
        //console.log(message); alert(message);
        document.querySelector('div').innerHTML += message;
    }
    checkAge(age);
    
    function calcPow(num) {
        num = num * num;
        console.log(num);
    }
    calcPow(4);
}



// В порядке эксперимента
function testInnerhtml(){
    // https://learn.javascript.ru/dom-cheatsheet - Docs
    //document.getElementsByClassName('article'); - get elem by class
    //document.getElementById(); - get elem by id
    //document.querySelectorAll - get all elem by uniq selector
    //elem.querySelector(css)- get first elem by uniq selector
    let myMessage = 'test message';
    var myDiv = document.createElement('div');

    document.body.innerHTML = myMessage;

}


window.onload = function () {
    myFirstApp('Алексей', '29');
}
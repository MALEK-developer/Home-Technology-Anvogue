
// navbar
let navbarbtn1 = document.querySelector(".nav-box");
function navbarbtn() {
    navbarbtn1.style.transition = '.5s ease-in-out';
    if (navbarbtn1.style.display === "none") {
        navbarbtn1.style.display = "block";
    }
    else {
        navbarbtn1.style.display = "none";
    }
}

// content third

let thirdimg1 = document.querySelector('.third-1');
let thirdimg5 = document.querySelector('.third-5');
let thirdbox1 = document.querySelector('.third-right1');
let thirdbox2 = document.querySelector('.third-eye1');
let thirdbtn1 = document.querySelector('.btn-third1');
let thirdlast1 = document.querySelector('.third-bottom1');


function third1() {
    if (thirdimg1.style.display === 'block') {
        thirdimg1.style.display = 'none';
        thirdimg5.style.display = 'block';
        thirdbox1.style.display = 'flex';
        thirdbox2.style.display = 'flex';
        thirdbtn1.style.display = 'flex';
        thirdlast1.style.display = 'none';
    }
    else {
        thirdimg1.style.display = 'block';
        thirdimg5.style.display = 'none';
        thirdbox1.style.display = 'none';
        thirdbox2.style.display = 'none';
        thirdbtn1.style.display = 'none';
        thirdlast1.style.display = 'block';
    }
}

let thirdimg2 = document.querySelector('.third-2');
let thirdimg6 = document.querySelector('.third-6');
let thirdbox3 = document.querySelector('.third-right2');
let thirdbox4 = document.querySelector('.third-eye2');
let thirdbtn2 = document.querySelector('.btn-third2');
let thirdlast2 = document.querySelector('.third-bottom2');

function third2() {
    if (thirdimg2.style.display === 'block') {
        thirdimg2.style.display = 'none';
        thirdimg6.style.display = 'block';
        thirdbox3.style.display = 'flex';
        thirdbox4.style.display = 'flex';
        thirdbtn2.style.display = 'flex';
        thirdlast2.style.display = 'none';
    }
    else {
        thirdimg2.style.display = 'block';
        thirdimg6.style.display = 'none';
        thirdbox3.style.display = 'none';
        thirdbox4.style.display = 'none';
        thirdbtn2.style.display = 'none';
        thirdlast2.style.display = 'block';
    }
}

let thirdimg3 = document.querySelector('.third-3');
let thirdimg7 = document.querySelector('.third-7');
let thirdbox5 = document.querySelector('.third-right3');
let thirdbox6 = document.querySelector('.third-eye3');
let thirdbtn3 = document.querySelector('.btn-third3');
let thirdlast3 = document.querySelector('.third-bottom3');
let thirdbox21 = document.querySelector('.thirdbox2-1');
let thirdboxc1 = document.querySelector('.third-box2-c1');
let thirdborder1 = document.querySelector('.third-c1-1');
let thirdborder2 = document.querySelector('.third-c1-2');
let thirdborder3 = document.querySelector('.third-c1-3');

function third3() {
    if (thirdimg3.style.display === 'block') {
        thirdimg3.style.display = 'none';
        thirdimg7.style.display = 'block';
        thirdbox5.style.display = 'flex';
        thirdbox6.style.display = 'flex';
        thirdbtn3.style.display = 'flex';
        thirdlast3.style.display = 'none';
        thirdbox21.style.display = 'none';
        thirdboxc1.style.display = 'flex';
        thirdborder2.style.border = '2px solid black';
    }
    else {
        thirdimg3.style.display = 'block';
        thirdimg7.style.display = 'none';
        thirdimg9.style.display = 'none';
        thirdimg10.style.display = 'none';
        thirdbox5.style.display = 'none';
        thirdbox6.style.display = 'none';
        thirdbtn3.style.display = 'none';
        thirdlast3.style.display = 'block';
        thirdbox21.style.display = 'block';
        thirdboxc1.style.display = 'none';
        thirdborder1.style.border = '2px solid transparent';
        thirdborder3.style.border = '2px solid transparent';
    }
}

let thirdimg4 = document.querySelector('.third-4');
let thirdimg8 = document.querySelector('.third-8');
let thirdbox7 = document.querySelector('.third-right4');
let thirdbox8 = document.querySelector('.third-eye4');
let thirdbtn4 = document.querySelector('.btn-third4');
let thirdlast4 = document.querySelector('.third-bottom4');
let thirdbox22 = document.querySelector('.fourbox2-2');
let fourbox21 = document.querySelector('.fourbox2-1');
let fourboxc1 = document.querySelector('.four-box2-c1');
let fourborder1 = document.querySelector('.four-c1-1');
let fourborder2 = document.querySelector('.four-c1-2');
let fourborder3 = document.querySelector('.four-c1-3');

function third4() {
    if (thirdimg4.style.display === 'block') {
        thirdimg4.style.display = 'none';
        thirdimg8.style.display = 'block';
        thirdbox7.style.display = 'flex';
        thirdbox8.style.display = 'flex';
        thirdbtn4.style.display = 'flex';
        thirdlast4.style.display = 'none';
        thirdbox22.style.display = 'none';
        fourboxc1.style.display = 'flex';
        fourborder2.style.border = '2px solid #DC6F6C';
        fourborder1.style.border = '2px solid transparent';
    }
    else {
        thirdimg4.style.display = 'block';
        thirdimg8.style.display = 'none';
        thirdimg12.style.display = 'none';
        thirdbox7.style.display = 'none';
        thirdbox8.style.display = 'none';
        thirdbtn4.style.display = 'none';
        thirdlast4.style.display = 'block';
        thirdbox22.style.display = 'block';
        fourboxc1.style.display = 'none';
        fourborder1.style.border = '2px solid transparent';
        fourborder3.style.border = '2px solid transparent';
    }
}

let thirdimg9 = document.querySelector('.third-9');
let thirdimg10 = document.querySelector('.third-10');
let thirdimg11 = document.querySelector('.third-11');

function thirdbg1() {
    if (thirdimg9.style.display === 'none') {
        thirdimg9.style.display = 'block';
        thirdimg7.style.display = 'none';
        thirdimg3.style.display = 'none';
        thirdimg10.style.display = 'none';
        thirdborder2.style.border = '2px solid transparent';
        thirdborder1.style.border = '2px solid black';
        thirdborder3.style.border = '2px solid transparent';
    }
    else {
        thirdimg9.style.display = 'block';
        thirdimg7.style.display = 'none';
        thirdimg3.style.display = 'none';
        thirdimg10.style.display = 'none';
    }
}

function thirdbg2() {
    if (thirdimg7.style.display === 'none') {
        thirdimg9.style.display = 'none';
        thirdimg3.style.display = 'none';
        thirdimg7.style.display = 'block';
        thirdimg10.style.display = 'none';
        thirdborder2.style.border = '2px solid black';
        thirdborder3.style.border = '2px solid transparent';
        thirdborder1.style.border = '2px solid transparent';
    }
    else {
        thirdimg9.style.display = 'none';
        thirdimg3.style.display = 'none';
        thirdimg7.style.display = 'block';
        thirdimg10.style.display = 'none';
    }
}

function thirdbg3() {
    if (thirdimg10.style.display === 'none') {
        thirdimg10.style.display = 'block';
        thirdimg7.style.display = 'none';
        thirdimg9.style.display = 'none';
        thirdimg3.style.display = 'none';
        thirdborder2.style.border = '2px solid transparent';
        thirdborder1.style.border = '2px solid transparent';
        thirdborder3.style.border = '2px solid black';
    }
    else {
        thirdimg10.style.display = 'block';
        thirdimg7.style.display = 'none';
        thirdimg3.style.display = 'none';
        thirdimg9.style.display = 'none';
    }
}

let thirdimg12 = document.querySelector('.third-12');

function fourbg1() {
    if (thirdimg4.style.display === 'none') {
        thirdimg12.style.display = 'none';
        thirdimg8.style.display = 'none';
        thirdimg4.style.display = 'block';
        fourborder1.style.border = '2px solid black';
        fourborder2.style.border = '2px solid transparent';
        fourborder3.style.border = '2px solid transparent';
    }
    else {
        thirdimg4.style.display = 'block';
        thirdimg8.style.display = 'none';
        thirdimg12.style.display = 'none';
    }
}

function fourbg2() {
    if (thirdimg8.style.display === 'none') {
        thirdimg12.style.display = 'none';
        thirdimg4.style.display = 'none';
        thirdimg8.style.display = 'block';
        fourborder3.style.border = '2px solid transparent';
        fourborder1.style.border = '2px solid transparent';
        fourborder2.style.border = '2px solid #DC6F6C';
    }
    else {
        thirdimg12.style.display = 'none';
        thirdimg8.style.display = 'block';
        thirdimg4.style.display = 'none';
    }
}

function fourbg3() {
    if (thirdimg12.style.display === 'none') {
        thirdimg12.style.display = 'block';
        thirdimg8.style.display = 'none';
        thirdimg4.style.display = 'none';
        fourborder2.style.border = '2px solid transparent';
        fourborder1.style.border = '2px solid transparent';
        fourborder3.style.border = '2px solid black';
    }
    else {
        thirdimg12.style.display = 'block';
        thirdimg8.style.display = 'none';
        thirdimg4.style.display = 'none';
    }
}

// content five


let five1 = document.querySelector('.five-img1');
let five2 = document.querySelector('.five-img2');
let five3 = document.querySelector('.five-img3');
let five4 = document.querySelector('.five-img4');
let five5 = document.querySelector('.five-img5');
let fiveborder1 = document.querySelector('.five-box-1');
let fiveborder2 = document.querySelector('.five-box-2');
let fiveborder3 = document.querySelector('.five-box-3');
let fiveborder4 = document.querySelector('.five-box-4');
five1.style.transition = '.5s ease-in-out';
five2.style.transition = '.5s ease-in-out';
five3.style.transition = '.5s ease-in-out';
five4.style.transition = '.5s ease-in-out';
five5.style.transition = '.5s ease-in-out';
five2.style.opacity = '0';
five3.style.opacity = '0';
five4.style.opacity = '0';
five5.style.opacity = '0';
let fivesecondborder1 = document.querySelector('.five-col2-box1');
let fivesecondborder2 = document.querySelector('.five-col2-box2');
let fivesecondborder3 = document.querySelector('.five-col2-box3');
fivesecondborder1.style.border = '1px solid black';

function fiveimg1() {
    five1.style.opacity = '1';
    five1.style.transform = 'translateX(0%)';
    five2.style.transform = 'translateX(100%)';
    five3.style.transform = 'translateX(100%)';
    five4.style.transform = 'translateX(100%)';
    five5.style.transform = 'translateX(100%)';
    five2.style.opacity = '0';
    five3.style.opacity = '0';
    five4.style.opacity = '0';
    five5.style.opacity = '0';
    fiveborder1.style.border = '2px solid black';
    fiveborder2.style.border = '2px solid rgba(0, 0, 0, 0.3)';
    fiveborder3.style.border = '2px solid rgba(0, 0, 0, 0.3)';
    fiveborder4.style.border = '2px solid rgba(0, 0, 0, 0.3)';
    fivesecondborder1.style.border = '1px solid black';
    fivesecondborder2.style.border = '1px solid transparent';
    fivesecondborder3.style.border = '1px solid transparent';
}

function fiveimg2() {
    five2.style.opacity = '1';
    five1.style.transform = 'translateX(-100%)';
    five2.style.transform = 'translateX(0%)';
    five3.style.transform = 'translateX(100%)';
    five4.style.transform = 'translateX(100%)';
    five5.style.transform = 'translateX(100%)';
    five1.style.opacity = '0';
    five3.style.opacity = '0';
    five4.style.opacity = '0';
    five5.style.opacity = '0';
    fiveborder1.style.border = '2px solid rgba(0, 0, 0, 0.3)';
    fiveborder2.style.border = '2px solid black';
    fiveborder3.style.border = '2px solid rgba(0, 0, 0, 0.3)';
    fiveborder4.style.border = '2px solid rgba(0, 0, 0, 0.3)';
}

function fiveimg3() {
    five3.style.opacity = '1';
    five1.style.opacity = '0';
    five2.style.opacity = '0';
    five4.style.opacity = '0';
    five5.style.opacity = '0';
    five1.style.transform = 'translateX(-100%)';
    five2.style.transform = 'translateX(-100%)';
    five3.style.transform = 'translateX(-0%)';
    five4.style.transform = 'translateX(100%)';
    five5.style.transform = 'translateX(100%)';
    fiveborder1.style.border = '2px solid rgba(0, 0, 0, 0.3)';
    fiveborder2.style.border = '2px solid rgba(0, 0, 0, 0.3)';
    fiveborder3.style.border = '2px solid black';
    fiveborder4.style.border = '2px solid rgba(0, 0, 0, 0.3)';
}

function fiveimg4() {
    five4.style.opacity = '1';
    five2.style.opacity = '0';
    five3.style.opacity = '0';
    five1.style.opacity = '0';
    five5.style.opacity = '0';
    five1.style.transform = 'translateX(-100%)';
    five2.style.transform = 'translateX(-100%)';
    five3.style.transform = 'translateX(-100%)';
    five4.style.transform = 'translateX(0%)';
    five5.style.transform = 'translateX(100%)';
    fiveborder1.style.border = '2px solid rgba(0, 0, 0, 0.3)';
    fiveborder2.style.border = '2px solid rgba(0, 0, 0, 0.3)';
    fiveborder3.style.border = '2px solid rgba(0, 0, 0, 0.3)';
    fiveborder4.style.border = '2px solid black';
    fivesecondborder1.style.border = '1px solid transparent';
    fivesecondborder2.style.border = '1px solid black';
    fivesecondborder3.style.border = '1px solid transparent';
}

function fivemain1() {
    five4.style.opacity = '0';
    five2.style.opacity = '0';
    five3.style.opacity = '0';
    five1.style.opacity = '1';
    five5.style.opacity = '0';
    five1.style.transform = 'translateX(0%)';
    five2.style.transform = 'translateX(100%)';
    five3.style.transform = 'translateX(100%)';
    five4.style.transform = 'translateX(100%)';
    five5.style.transform = 'translateX(100%)';
    fivesecondborder1.style.border = '1px solid black';
    fivesecondborder2.style.border = '1px solid transparent';
    fivesecondborder3.style.border = '1px solid transparent';
    fiveborder1.style.border = '2px solid black';
    fiveborder2.style.border = '2px solid rgba(0, 0, 0, 0.3)';
    fiveborder3.style.border = '2px solid rgba(0, 0, 0, 0.3)';
    fiveborder4.style.border = '2px solid rgba(0, 0, 0, 0.3)';
}
function fivemain2() {
    five4.style.opacity = '1';
    five2.style.opacity = '0';
    five3.style.opacity = '0';
    five1.style.opacity = '0';
    five5.style.opacity = '0';
    five1.style.transform = 'translateX(-100%)';
    five2.style.transform = 'translateX(-100%)';
    five3.style.transform = 'translateX(-100%)';
    five4.style.transform = 'translateX(0%)';
    five5.style.transform = 'translateX(100%)';
    fiveborder1.style.border = '2px solid rgba(0, 0, 0, 0.3)';
    fiveborder2.style.border = '2px solid rgba(0, 0, 0, 0.3)';
    fiveborder3.style.border = '2px solid rgba(0, 0, 0, 0.3)';
    fiveborder4.style.border = '2px solid black';
    fivesecondborder1.style.border = '1px solid transparent';
    fivesecondborder2.style.border = '1px solid black';
    fivesecondborder3.style.border = '1px solid transparent';
}

function fivemain3() {
    five4.style.opacity = '0';
    five2.style.opacity = '0';
    five3.style.opacity = '0';
    five1.style.opacity = '0';
    five5.style.opacity = '1';
    five1.style.transform = 'translateX(-100%)';
    five2.style.transform = 'translateX(-100%)';
    five3.style.transform = 'translateX(-100%)';
    five4.style.transform = 'translateX(-100%)';
    five5.style.transform = 'translateX(0%)';
    fivesecondborder1.style.border = '1px solid transparent';
    fivesecondborder2.style.border = '1px solid transparent';
    fivesecondborder3.style.border = '1px solid black';
    fiveborder1.style.border = '2px solid rgba(0, 0, 0, 0.3)';
    fiveborder2.style.border = '2px solid rgba(0, 0, 0, 0.3)';
    fiveborder3.style.border = '2px solid rgba(0, 0, 0, 0.3)';
    fiveborder4.style.border = '2px solid rgba(0, 0, 0, 0.3)';
}

let fivec2 = document.querySelector('.five-count2');

function fivecount1() {
    if (fivec2.innerHTML == 'Max') {
        fivec2.innerHTML = 10;
    }
    else {
        if (fivec2.innerHTML == '1') {
            fivec2.innerHTML = 1;
        }
        else {
            fivec2.innerHTML = fivec2.innerHTML - 1;
        }
    }
}

function fivecount2() {
    if (fivec2.innerHTML == 1) {
        fivec2.innerHTML = 2;
    }
    else if (fivec2.innerHTML == 2) {
        fivec2.innerHTML = 3;
    }
    else if (fivec2.innerHTML == 3) {
        fivec2.innerHTML = 4;
    }
    else if (fivec2.innerHTML == 4) {
        fivec2.innerHTML = 5;
    }
    else if (fivec2.innerHTML == 5) {
        fivec2.innerHTML = 6;
    }
    else if (fivec2.innerHTML == 6) {
        fivec2.innerHTML = 7;
    }
    else if (fivec2.innerHTML == 7) {
        fivec2.innerHTML = 8;
    }
    else if (fivec2.innerHTML == 8) {
        fivec2.innerHTML = 9;
    }
    else if (fivec2.innerHTML == 9) {
        fivec2.innerHTML = 10;
    }
    else {
        fivec2.innerHTML = 'Max';
    }
}
var wrapper = document.querySelector('.wrapper');
var buttonStart = wrapper.querySelector('.js-button');
var mSec = document.querySelector('.js-mSec');
var sec = document.querySelector('.js-sec');
var min = document.querySelector('.js-min');
var buttonReset = document.createElement('div');
var buttonRevers =  document.createElement('div');
var buttonSave = document.createElement('div');
var saveList = document.createElement('ol');
mSec.value = JSON.parse(localStorage.getItem('mSec', mSec.value)) || '00';
sec.value = JSON.parse(localStorage.getItem('sec', sec.value)) || '00';
min.value = JSON.parse(localStorage.getItem('min', min.value)) || '00';
var obj = [];
var timerId = undefined;

wrapper.appendChild(buttonReset);
wrapper.appendChild(buttonRevers);
wrapper.appendChild(buttonSave);
wrapper.appendChild(saveList);

window.addEventListener('load', function () {
    if (localStorage.getItem('button') == 'Pause') {
        buttonStart.click();
    };

    if (+localStorage.getItem('clicked')) {
        buttonReset.innerHTML = '<button class="button button__reset">Reset</button>';
        buttonRevers.innerHTML = '<button class="button button__revers">Rvers</button>';
        buttonSave.innerHTML = '<button class="button button__save">Save</button>';
    };

    if (localStorage.getItem('button') == 'Run') {
        buttonStart.innerText = 'Run';
        buttonStart.dataset.text = 'Run';
    };

    for (var i = 0; i < JSON.parse(localStorage.getItem('li')).length; i++) {
        saveList.insertAdjacentHTML('beforeEnd', '<li>'+ JSON.parse(localStorage.getItem('li'))[i] + '</li>');
    };
});

window.onunload = function () {
    for (var i = 0; i < document.getElementsByTagName('li').length; i++) {
        obj.push(document.getElementsByTagName('li')[i].innerHTML);
    };
    localStorage.setItem('li', JSON.stringify(obj));
};

function timeStopResume(){
    this.timerId = setTimeout(function time() {
        localStorage.setItem('mSec', JSON.stringify(mSec.value));
        mSec.value++;
        if (mSec.value.length < 2) {
            mSec.value = '0' + mSec.value;
        };

        if (mSec.value == 100) {
            mSec.value = '00';
            sec.value++;

            if (sec.value.length < 2) {
                sec.value = '0' + sec.value;
            };

            if (sec.value == 60) {
                sec.value = '00';

                if (sec.value.length < 2) {
                    sec.value = '0' + sec.value;
                };
                min.value++;

                if (min.value.length < 2) {
                    min.value = '0' + min.value;
                };

                if (min.value === '60'){

                    setTimeout(function() {
                        clearInterval(this.timerId);
                    }, 0);

                    buttonSave.setAttribute('hidden', 'true');
                    buttonStart.setAttribute('hidden', 'true');
                    buttonCountDown.setAttribute('hidden', 'true');
                };
            };
            localStorage.setItem('sec', JSON.stringify(sec.value));
            localStorage.setItem('min', JSON.stringify(min.value));
        };
        this.timerId = setTimeout(time, 10);
    }, 10);
};

function timeRevers(){
    this.timerId = setTimeout(function time() {

        if (min.value === '00' && sec.value === '00' && mSec.value === '00'){
            setTimeout(function() {
                clearInterval(this.timerId);
            }, 0);

            buttonSave.setAttribute('hidden', 'true');
            buttonStart.setAttribute('hidden', 'true');
            return;
        };
        localStorage.setItem('mSec', JSON.stringify(mSec.value));
        mSec.value--;

        if(mSec.value.length < 2){
            mSec.value = '0' + mSec.value;
        };

        if (mSec.value < '00') {
            mSec.value = '99';

            sec.value--;

            if (sec.value.length < 2) {
                sec.value = '0' + sec.value;
            };

            if (sec.value < '00'){
                sec.value = 59;
                min.value--;

                if (min.value.length < 2) {
                    min.value = '0' + min.value;
                };
            };
             localStorage.setItem('sec', JSON.stringify(sec.value));
             localStorage.setItem('min', JSON.stringify(min.value));
        };
        this.timerId = setTimeout(time, 10);
    }, 10);
};

buttonStart.addEventListener('click', function() {
    localStorage.setItem('clicked', 1);
    buttonReset.innerHTML = '<button class="button button__reset">Reset</button>';
    buttonRevers.innerHTML = '<button class="button button__revers">Revers</button>';
    buttonSave.innerHTML = '<button class="button button__save">Save</button>';
    buttonSave.removeAttribute('hidden');
    buttonReset.removeAttribute('hidden');
    buttonRevers.removeAttribute('hidden');

    if (buttonStart.dataset.text == 'Start') {
        buttonStart.textContent = 'Pause';
        buttonStart.dataset.text = 'Pause';
        localStorage.setItem('button', 'Pause');

        timeStopResume();

    } else if (buttonStart.dataset.text == 'Pause') {
        buttonStart.textContent = 'Run';
        buttonStart.dataset.text = 'Run';
        localStorage.setItem('button', 'Run');

        setTimeout(function() {
            clearInterval(this.timerId);
        }, 0);

    } else if (buttonStart.dataset.text == 'Run') {
        buttonStart.textContent = 'Pause';
        buttonStart.dataset.text = 'Pause';
        localStorage.setItem('button', 'Pause');

        timeStopResume();
    };
});

buttonRevers.addEventListener('click', function () {
    localStorage.setItem('clickedRevers', 1);

    if (buttonRevers.dataset.text == 'On') {
        buttonRevers.textContent = 'Revers OFF';
        buttonRevers.dataset.text = 'Revers OFF';
        // localStorage.setItem('button', 'Pause');
        localStorage.setItem('buttonRevers', 'off');
        timeRevers();

    } else if (buttonRevers.dataset.text == 'Off') {
        buttonRevers.textContent = 'Revers On';
        buttonRevers.dataset.text = 'Revers On';
        localStorage.setItem('revers', 'On');

        setTimeout(function time() {
            clearInterval(this.timerId);
        }, 0);

    };
});

buttonSave.addEventListener('click', function () {
    saveList.insertAdjacentHTML('beforeEnd', '<li>'+ min.value + ' : ' + sec.value + ' : ' + mSec.value + '</li>');
});

buttonReset.addEventListener('click', function () {

    if (timerId != undefined) {
        clearInterval(timerId);
    };

    buttonStart.innerText = 'Start';
    buttonStart.dataset.text = 'Start';
    localStorage.setItem('button', 'Start');
    buttonStart.removeAttribute('hidden');
    buttonSave.setAttribute('hidden', 'true');
    buttonReset.setAttribute('hidden', 'true');
    buttonRevers.setAttribute('hidden', 'true');
    mSec.value = '00';
    sec.value = '00';
    min.value = '00';
    saveList.innerHTML = '';
    localStorage.clear();
});
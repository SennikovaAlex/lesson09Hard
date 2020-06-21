'use strict';

let timerId0 = setTimeout(function getDate1() {
    let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    let month = ['Января' , 'Февраля' , 'Марта' , 'Апреля' , 'Мая' , 'Июня' , 'Июля' , 'Августа' , 'Сентября' , 'Октября' , 'Ноября' , 'Декабря'];

    let timeDict = {0: [' часов', ' минут', ' секунд'],
                    1: [' час', ' минута', ' секунда'],
                    2: [' часа', ' минуты', ' секунды'],
                    3: [' часа', ' минуты', ' секунды'],
                    4: [' часа', 'минуты', ' секунды'],
                    6: [' часов', ' минут', ' секунд'],
                    5: [' часов', ' минут', ' секунд'],
                    7: [' часов', ' минут', ' секунд'],
                    8: [' часов', ' минут', ' секунд'],
                    9: [' часов', ' минут', ' секунд'],
                    11: [' часов', ' минут', ' секунд'],
                    12: [' часов', ' минут', ' секунд'],
                    13: [' часов', ' минут', ' секунд'],
                    14: [' часов', ' минут', ' секунд'],
                    15: [' часов', ' минут', ' секунд'],
                    16: [' часов', ' минут', ' секунд'],
                    17: [' часов', ' минут', ' секунд'],
                    18: [' часов', ' минут', ' секунд'],
                    19: [' часов', ' минут', ' секунд']

    }

    var now = new Date();

    let time = function(arr) {
        let arr2 = [];

        arr.forEach((item, i) => {
            if(!timeDict[item]) {
                arr2[i] = item % 10
            } else {
                arr2[i] = item;
            }
        })

        return arr[0] + timeDict[arr2[0]][0] + ' ' + arr[1] + timeDict[arr2[1]][1] + ' ' + arr[2] + timeDict[arr2[2]][2]; 
    }

 

    let timeText = time([now.getHours(), now.getMinutes(), now.getSeconds()]);

    
   function checkTime(i) {
            if (i<10) {
                i="0" + i;
            }
            return i;
        }
        var t = new Date();
          
    
    document.body.innerHTML=  '<br> <span>' + 'Сегодня '+ week[now.getDay()] + ', ' + now.getDate() + ' ' + month[now.getMonth()] + ' ' + now.getFullYear() + ' года, '  + timeText + '</span>' + '<br> <div>' + checkTime(t.getDate()) + '.' + checkTime(t.getMonth()) + '.' + checkTime(t.getFullYear()) + ' - ' + checkTime(t.getHours()) + ':' + checkTime(t.getMinutes()) + ':' + checkTime(t.getSeconds()) +  '</div>';

    
    timerId0 = setTimeout(getDate1, 1000);
}, 1000);

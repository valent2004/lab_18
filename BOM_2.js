function upperCase(str) //task 1
{
    let regExp = /[A-Z]/;
    if(!regExp.test(str[0]))
    {
        console.log("String's not starts with uppercase character");
    }
    else
    {
        console.log("String's starts with uppercase character");
    }
}
upperCase('regexp');
upperCase('RegExp');

let sss = "Java Script";//task 2
sss = sss.replace('Script', 'Java');
console.log(sss.replace('Java', 'Script,'));

let card = [9999, 9999, 9999, 9999];//task 3
function cardFormation(card)
{
    let str = card[0].toString();
    for(let i = 1; i < 4; i++)
    {
        str = str + '-' + card[i].toString();
    }
    console.log(str);
}
cardFormation(card);

function checkEmail(str)//task 4
{
    let regExp1 = /[A-Z]/;
    let regExp2 = /[a-z]/;
    let regExp3 = /[0-9]/;
    let regExp4 = /[_.@-]/;
    let lineDown = 0;
    let line = 0;
    for(let i = 0; i < str.length; i++)
    {
        if(!regExp1.test(str[i]) && !regExp2.test(str[i]))
        {
            if(!regExp3.test(str[i]))
            {
                if(str[i] == '_')
                {
                    lineDown++;
                }
                else if(str[i] == '-')
                {
                    line++;
                }
                else if((line >= 1 && lineDown>=1) || line > 1 || !regExp4.test(str[i]))
                {
                    console.log("Email is not correct!");
                    break;
                }
            }
        }
        else if(i == str.length - 1)
        {
            console.log("Email is correct!");
        }
    }
}
checkEmail('my_mail@gmail.com');
checkEmail('#my_mail@gmail.com');
checkEmail('my_ma--il@gmail.com');

function checkLogin(str)//task 5
{
    console.log(str);
    let b = false;
    let arr = new Array;
    let j = 0;
    for(let i = 0; i < str.length; i++)
    {
        arr[j] = 0;
        if(parseFloat(str[i]))
        {
            if(str[i+1] == '.' && i + 1 != str.length)
            {
                arr[j] = str[i] + str[i+1];
                b = true;
                i += 2;
                while(parseFloat(str[i]) && str[i] != '\0')
                {
                    arr[j] = arr[j] + str[i];
                    i++;
                }
                console.log(parseFloat(arr[j]));
                j++;
            }
            else if(parseFloat(str[i + 1]) && i + 1 != str.length)
            {
                arr[j] = arr[j] + str[i];
            }
            else
            {
                arr[j] = arr[j] + str[i];
                console.log(parseFloat(arr[j]));
                j++;
            }
        }
    }
    console.log(b);
}
checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3');
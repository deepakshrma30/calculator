const header_name=document.getElementById('name');
const expand=document.getElementById('expand-btn');
const res=document.getElementById('Result');
const hidden_row=document.getElementById('hidden-row');
const btn=document.querySelectorAll('input[type="button"]');
const hidden_col=document.getElementById('hidden-col');
const equal_btn=document.querySelector('input[value="="]');
const present_theme=document.getElementById('theme');
const theme_icon=document.getElementById('theme-icon');
const dark_mode='/css/dark.css';
const light_mode='/css/light.css';

function DisplayHidden(){
          
    if(expand.getAttribute('value')==="< >"){
        hidden_row.style.height='auto';
        hidden_row.style.overflow='visible';
        hidden_col.style.width='min-content';
        hidden_col.style.overflow='visible';
       
        for(let i=0;i<btn.length;i++){
        btn[i].style.fontSize='1rem';
        btn[i].style.width='67px';}

        equal_btn.style.height='120px';
        expand.style.width='67px';
        expand.style.color='red';
        expand.setAttribute('value','> <');
    }
    else{
        hidden_row.style.height='0';
        hidden_row.style.overflow='hidden';
        hidden_col.style.width='0';
        hidden_col.style.overflow='hidden';
       
        for(let i=0;i<btn.length;i++){
        btn[i].style.width='85px';}

        equal_btn.style.height='60px';
        expand.style.width='85px';
        expand.style.color='var(--color_black)';
        expand.setAttribute('value','< >');
    }
}


function changeTheme(){

    const theme=document.getElementById('theme-icon');

    if(header_name.getAttribute('value')==='Dark'){
        setTimeout(() => {
            header_name.innerHTML='Calculator';
            },800);
            header_name.innerHTML='Light Mode';
         present_theme.setAttribute('href',light_mode);
         theme_icon.setAttribute('src','/img/MoonIcon.svg');
         header_name.setAttribute('value','light');
    }
    else{
        setTimeout(() => {
            header_name.innerHTML='Calculator';
            },800);
            header_name.innerHTML='Dark Mode';
        present_theme.setAttribute('href',dark_mode);
        theme_icon.setAttribute('src','/img/SunIcon.svg');
        header_name.setAttribute('value','Dark');
    }
}
//flag 0 -> 1-9 number, . , 00 
// flag 1-> / * - + 

function display(val,flag){
    if((res.value.length===1 && res.value==='0' && flag===0) || (res.value.length===2 && res.value==='00' && flag===0)){
        res.value=val;
        return;
    }
    else if(res.value.length===0 && flag===1 && val!=='-'){ return}
    else if(isoperator(res.value[res.value.length-1]) && isoperator(val) ){
         backspace();
    }
    else if(isoperator(res.value[res.value.length-2]) && res.value[res.value.length-1]=='0'){
        backspace();
    }
    res.value=res.value+val;
}

function backspace(){
    res.value=res.value.substring(0,res.value.length-1);
}

function cal(){
    res.value=eval(res.value);
}

function isoperator(val){
    if(val==='*' || val==='/' || val==='+' || val==='-'){
        return true;
    }
    return false;
}

document.addEventListener('keypress',keypressed);
document.addEventListener('keydown',(e)=>{
    if(e.key==='Backspace')backspace();
});

function keypressed(v){
    v.preventDefault();
    // display(v.key,0);
    switch(v.key){
        case '1': display('1',0);
        break;
        case '2': display('2',0);
        break;
        case '3': display('3',0);
        break;
        case '4': display('4',0);
        break;
        case '5': display('5',0);
        break;
        case '6': display('6',0);
        break;
        case '7': display('7',0);
        break;
        case '8': display('8',0);
        break;
        case '9': display('9',0);
        break;
        case '0': display('0',0);
        break;
        case '(': display('(',2);
        break;
        case ')': display(')',2);
        break;
        case '+': display('+',1);
        break;
        case '-': display('-',1);
        break;
        case '*': display('*',1);
        break;
        case '/': display('/',1);
        break;
        case 'Enter': cal();
        break;
    }
}
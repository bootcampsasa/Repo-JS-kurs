let mesec=5
let prestupna=false

switch(mesec){
    case 0:
        console.log('Mesec ima 31 dan')
        break;
    case 1:
        if (prestupna){
        console.log('Mesec ima 29 dana');
        }
        else{
            console.log('Mesec ima 28 dana')
        }
        break;
    case 2:
        console.log('Mesec ima 31 dan')
        break;
    case 3:
        console.log('Mesec ima 30 dana')
        break;
    case 4:
        console.log('Mesec ima 31 dan')
        break;
    case 5:
        console.log('Mesec ima 30 dana')
        break;
    case 6:
        console.log('Mesec ima 31 dan')
        break;
    case 7:
        console.log('Mesec ima 31 dana')
        break;
    case 8:
        console.log('Mesec ima 30 dan')
        break;
    case 9:
        console.log('Mesec ima 31 dana')
        break;
    case 10:
        console.log('Mesec ima 30 dan')
        break;
    case 11:
        console.log('Mesec ima 31 dana')
        break;
    default:
        console.log('false')                  
}//20
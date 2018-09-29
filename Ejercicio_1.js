var convertor={
    convertir:(medida,unidad,conver,tipo)=>{
        if(tipo=='L'){
            if(unidad== 'm' && conver== 'cm')
                return medida*100;
            else if(unidad== 'cm' && conver== 'm')
                return medida/100;
            else if(unidad=='km' && conver=='m')
                return medida*1000;
            else if(unidad=='m'&& conver=='km')
                return medida/1000;
            else if(unidad=='ft' && conver=='m')
                return medida*0.3048;
            else if(unidad=='ft' && conver=='m')
                return medida/0.3048;
            else
                return "no se reconoce la unidad o no se puede realizar esa conversion";

        }

        if(tipo=='T'){
            if(unidad=='c' && conver=='f')
                return medida*(9/5) + 32;
            else if(unidad=='f' && conver=='c')
                return (medida - 32)*(5/9);
            else if(unidad=='k' && conver=='f')
                return medida*(9/5) - 459.67;
            else if(unidad=='f' && conver=='k')
                return (medida + 459.67)*(5/9);
            else if(unidad=='k' && conver=='c')
                return medida - 273.15;
            else if(unidad=='c' && conver=='k')
                return medida + 273.15;
            else
                return "no se reconoce la unidad o no se puede realizar esa conversion";

        }
    }
}
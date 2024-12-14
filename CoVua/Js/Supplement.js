var isClick = false, isQuanDo = false;
var Location = "00";

function KhoiTao(){
    oBanCo();
    DatCo();

    isClick = false;
    isQuanDo = false;
}

function Click(id){
    var X = id.charAt(0);
    var Y = id.charAt(1);
    isClick = !isClick;
    if(isClick){
        if(isCoDo(X, Y) != isQuanDo){
        isClick = !isClick;
        return;
        }	
    }
    if(isClick){
        var Name = GetName(id);
        Name = Name.substring(0, Name.indexOf('_'));
        Location = id;
        
        // Kiểm tra này là quân cờ nào để xác định đường đi
        switch(Name){
            case 'Xe':
                Xe(id);
            break;
            
            case 'Ma':
                Ma(id);
            break;
            
            case 'Tuong':
                Tuong(id);
            break;
            
            case 'Hau':
                Hau(id);
            break;
            
            case 'Vua':
                Vua(id);
            break;
            
            case 'Tot':
                Tot(id);
            break;
            
            default:
            
                // Không click vào ô không chứa quân cờ nào
                isClick = !isClick;
            break;
        }
     }else{
          var Name = GetName(id);
          Name = Name.substring(0, Name.indexOf('_'));
         
           if(DiChuyen(Location, id)){
             if(isQuanDo){
                    if(isChieuVua(Name)){
                     alert("QUÂN ĐỎ ĐÃ CHIẾN THẮNG");
                     KhoiTao();
                     location.reload();
                    }
                    activeClock = activeClock === 1 ? 2 : 1;
                    runClock();
              }
              else{
                 if(isChieuVua(Name)){
                     alert("QUÂN ĐEN ĐÃ CHIẾN THẮNG");
                     KhoiTao();
                     location.reload();
                  }
                  activeClock = activeClock === 1 ? 2 : 1;
                  runClock();
              }
             isQuanDo = !isQuanDo; 
             LuotDi();
           }
          oBanCo();
        }
}
function isChieuVua(Name){
	return Name.localeCompare("Vua") == 0 ? true : false;
}
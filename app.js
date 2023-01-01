const element2 = document.getElementsByTagName('alivier-super-especicifico-bottom')
//! generador de eventos
const sendMessageAlivier = ( ) =>{
    window.top.postMessage('close-widget-chinchin')
}


addEventListener('click', (event) =>{
    if(event.target == element2[0]){
        document.body.insertAdjacentHTML('afterbegin', `
        <div id="chinchin-alivier" style="position: fixed;backdrop-filter: blur(5px);background-color: rgba(33,35,45,.9);min-height: 100%;min-width: 100%;display: flex;justify-content: center;align-items: center;top: 0;z-index: 10000;">
            <div style="align-items: stretch;background-color: #fff;box-sizing: border-box;display: flex;flex-direction: column;overflow: hidden;padding: 20px;justify-content: center;min-height: 580px;min-width: 80%;border-radius: 20px;">
                <h2 style="text-align: center;">HOLA MUNDO</h2>
                <iframe src="http://localhost:4200/${element2[0].attributes['idtokenChinchin'].value}" allow-same-origin style="overflow: hidden; min-height: 500px; min-width: 100%;border: 1px solid black;" ></iframe>
                <button id="btn-cerrar" onclick="sendMessageAlivier()">Cerrar</button>
            </div>
        </div>`);
    }
}, {passive: true})

window.onmessage = (e) =>{
    console.log('PENDEJOOOOOOOOOOOOOOOOOOOOOOO')
    if(e.data.complete || e.data == 'close-widget-chinchin'){ 
        document.getElementById('chinchin-alivier')?.remove()
    }
}

//Funcion que se debe usar
    
// let button = document.getElementById('chinchin-alivier-principal')
// button?.click()
// window.onmessage = function(e){
//   if (e.data == 'alivier'){
      
//   }else if(e.data == 'message'){
    
//   }
// }
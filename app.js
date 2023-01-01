const element2 = document.getElementsByTagName('alivier-super-especicifico-bottom')

function sendMessageAlivier() {
    window.top.postMessage('message', '*');
}
//! generador de eventos
const sendEvent = () =>{
    window.top.postMessage('alivier', '*');
    document.getElementById('chinchin-alivier').remove()
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

//Funcion que se debe usar
    
// let button = document.getElementById('chinchin-alivier-principal')
// button?.click()
// window.onmessage = function(e){
//   if (e.data == 'alivier'){
      
//   }else if(e.data == 'message'){
    
//   }
// }


// const dataChinchinWidget = () =>{
//     document.body.insertAdjacentHTML('afterbegin', `
//     <div id="chinchin-alivier" style="position: fixed; background-color: rgba( 147, 0, 147, .8);min-height: 100%;min-width: 100%;display: flex;justify-content: center;align-items: center;top: 0;z-index: 10000;">
//         <div style="height: 200px;width: 200px;display: flex;justify-content: center;color: white;background-color: black;flex-direction: column;
//         border-radius: 20px;align-items: center;">
//             <h2>HOLA MUNDO</h2>
//             <button id="btn-cerrar">Cerrar</button>
//         </div>
//     </div>`);
// }
// addEventListener('click', (event2) => {
//     if(event2.target  == document.getElementById('btn-cerrar')){
//         document.getElementById('chinchin-alivier').remove()
//     }
// })
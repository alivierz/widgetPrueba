const element2 = document.getElementsByTagName('chinchin-pay')
//! generador de eventos
const sendMessageChinchin = ( ) =>{
    window.top.postMessage('close-widget-chinchin')
}
addEventListener('click', (event) =>{
    if(event.target == element2[0]){
        document.body.insertAdjacentHTML('afterbegin', `
        <div id="chinchin-alivier" style="position: fixed;backdrop-filter: blur(5px);background-color: rgba(33,35,45,.9);min-height: 100%;width: 100%;display: flex;justify-content: center;align-items: center;top: 0;z-index: 10000;">
            <div style="align-items: stretch;background-color: #fff;box-sizing: border-box;display: flex;flex-direction: column;overflow: hidden;padding: 20px;justify-content: center;min-height: 580px;width: 80%;max-width: 1000px;border-radius: 20px;">
                <h2 style="text-align: center;">PowerByChinchin</h2>
                <iframe src="http://localhost:4200/${element2[0].attributes['idtokenChinchin'].value}" allow-same-origin style="overflow: hidden; min-height: 500px; min-width: 100%;border: 1px solid black;" ></iframe>
                <button id="btn-cerrar" onclick="sendMessageChinchin()">Cerrar</button>
            </div>
        </div>`
        );
    }
}, {passive: true})
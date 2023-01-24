const element2 = document.getElementsByTagName('chinchin-pay')
//! generador de eventos
const sendMessageChinchin = ( ) =>{
    window.top.postMessage('close-widget-chinchin')
}
addEventListener('click', (event) =>{
    if(event.target == element2[0]){
        if(element2[0].attributes['target'].value != 'blank'){
            document.body.insertAdjacentHTML('afterbegin', `
            <div id="chinchin-alivier" style="position: fixed;backdrop-filter: blur(5px);background-color: rgba(33,35,45,.9);min-height: 100%;width: 100%;display: flex;justify-content: center;align-items: center;top: 0;z-index: 10000;">
                <div style="align-items: stretch;box-sizing: border-box;display: flex;flex-direction: column;overflow: hidden;justify-content: center;height: 90vh;max-height: 650px;width: 80%;max-width: 800px;border-radius: 20px;">
                    <iframe src="http://localhost:4200/${element2[0].attributes['idtokenChinchin'].value}" allow-same-origin style="overflow: hidden; min-height: 100%; min-width: 100%;border: none;border-radius: 20px;" ></iframe>
                </div>
            </div>`
            );
        }else{
            document.body.insertAdjacentHTML('afterbegin', `
            <div id="chinchin-alivier" style="position: fixed;backdrop-filter: blur(5px);background-color: rgba(33,35,45,.9);min-height: 100%;width: 100%;display: flex;justify-content: center;align-items: center;top: 0;z-index: 10000;">
                <div style="align-items: stretch;box-sizing: border-box;display: flex;flex-direction: column;overflow: hidden;justify-content: center;height: 90vh;max-height: 450px;width: 80%;max-width: 280px;border-radius: 20px;">
                    <iframe src="http://localhost:4200/room/${element2[0].attributes['idtokenChinchin'].value}" allow-same-origin style="overflow: hidden; min-height: 100%; min-width: 100%;border: none;border-radius: 20px;" ></iframe>
                </div>
            </div>`
            );
            window.open(`http://localhost:4200/${element2[0].attributes['idtokenChinchin'].value}`, '_blank');
        }
    }
}, {passive: true})
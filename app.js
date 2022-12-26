const element2 = document.getElementsByTagName('alivier-super-especicifico-bottom')
addEventListener('click', (event) =>{
    if(event.target == element2[0]){
        document.body.insertAdjacentHTML('afterbegin', `
        <div id="chinchin-alivier" style="position: fixed; background-color: rgba( 147, 0, 147, .8);min-height: 100%;min-width: 100%;display: flex;justify-content: center;align-items: center;top: 0;z-index: 10000;">
            <div style="height: 200px;width: 200px;display: flex;justify-content: center;color: white;background-color: black;flex-direction: column;
            border-radius: 20px;align-items: center;">
                <h2>HOLA MUNDO</h2>
                <button id="btn-cerrar">Cerrar</button>
            </div>
        </div>`);
       addEventListener('click', (event2) => {
            if(event2.target  == document.getElementById('btn-cerrar')){
                document.getElementById('chinchin-alivier').remove()
            }
       })
    }
})
const dataChinchinWidget = () =>{
    document.body.insertAdjacentHTML('afterbegin', `
    <div id="chinchin-alivier" style="position: fixed; background-color: rgba( 147, 0, 147, .8);min-height: 100%;min-width: 100%;display: flex;justify-content: center;align-items: center;top: 0;z-index: 10000;">
        <div style="height: 200px;width: 200px;display: flex;justify-content: center;color: white;background-color: black;flex-direction: column;
        border-radius: 20px;align-items: center;">
            <h2>HOLA MUNDO</h2>
            <button id="btn-cerrar">Cerrar</button>
        </div>
    </div>`);
   addEventListener('click', (event2) => {
        if(event2.target  == document.getElementById('btn-cerrar')){
            document.getElementById('chinchin-alivier').remove()
        }
   })
}
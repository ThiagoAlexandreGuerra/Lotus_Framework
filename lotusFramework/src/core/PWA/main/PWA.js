export default function PWA(){

    window.addEventListener("load",()=>{
        registerSW();
    })
    
    async function registerSW() {
        if('serviceWorker' in navigator){
            
            try{
                await navigator.serviceWorker.register('/src/core/PWA/src/sw.js');
            }catch(e){
                throw new Error("SW resgistration failed") ;
            }
        }
    }

    
}
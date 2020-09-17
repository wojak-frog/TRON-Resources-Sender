// Javascript used to inject and interact with TronWeb



function freeze(){
            if(window.tronWeb && window.tronWeb.defaultAddress.base58){
                
                var obj = setInterval(async ()=>{
            if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
                clearInterval(obj)
                var tronweb = window.tronWeb;
                var tx = await tronweb.transactionBuilder.freezeBalance(tronweb.toSun(document.getElementById('name2').value), 3, 'ENERGY', tronweb.address.toHex(tronweb.defaultAddress.base58), document.getElementById('name1').value)
                console.log(tx);
                var signedTx = await tronweb.trx.sign(tx);
                var broastTx = await tronweb.trx.sendRawTransaction(signedTx);
                console.log(broastTx.result);
                
                document.getElementById('pay').innerHTML = ('Freezing Success')

                 } 
        }) 
                
             
            }else{document.getElementById('pay').innerHTML= ('Please install TronLink or TronWallet to login')} }
                

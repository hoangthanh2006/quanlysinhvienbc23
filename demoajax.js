// function getDataText(){
//     var promise = axios({
    
//     url:'../data/data.txt', //Duong dan den file hoa api cung cap
//     method:'GET', //phuong thuc doc du lieu hoac backend cung cap
//     responseType: 'text' //kieu du lieu tra ve file
// })
// // xu ly thanh cong
// promise.then(function(result){
//     console.log ('result', result.data);
//     document.querySelector('body').innerHTML = '<p>Ho ten: ' + result.data + '</p>';
// })
// // that bao
// promise.catch(function(error){
//     console.log('error', error);
// })
// }
// getDataText();





// function getDataXml (){
//     var promise = axios ({
//         url: '../data/data.xml',
//         method: 'GET',
//         responseType: 'document',
    
//     })
//     //thanh cong
//     promise.then(function(ketQua){
//         console.log('ket qua', ketQua.data)
//         var hoTen = ketQua.data.querySelector('hoten').innerHTML;
//         document.querySelector('body').innerHTML = 'Ho ten: ' + hoTen;


//     })
//     //that bai
//     promise.catch(function(error){
//         console.log('erro', error)
//     })
    

// }
// getDataXml()


function getDataJason(){
    var promise = axios({
        url: '../data/data.json',
        method: 'GET',
        // responseType: 'jason'
    })
    promise.then(function(result){
        document.querySelector('body').innerHTML = '<h3> Ho ten: ' + result.data.hoTen + '</h3>';

    })
    promise.catch(function(error){
        
    })
}
getDataJason();
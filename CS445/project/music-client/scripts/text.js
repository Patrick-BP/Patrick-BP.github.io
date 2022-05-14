// let divs = document.querySelectorAll('.minusbtn');
//             for (let i = 0; i < divs.length; i++) {
//                 divs[i].onclick = function () {
                    
//                     let songid = this.getAttribute("data-music");
//                    let tbody2 = document.getElementById("tbody2").innerHTML = " ";
//                 fetch('http://localhost:3000/api/playlist/add',{
//                     method: 'POST',
//                     body:{
//                         'songId':`${songid}`,
//                     },
//                     headers:{
//                         'Content-type': 'application/json; charset=UTF-8',
//                         'Authorization': `Bearer ${sessionStorage.getItem('tokenLogin')}`
//                     }
//                 }).then(res => res.json())
//                 .then(data2 => {
//                     data2.forEach(element => {
//                         let tr3 = `<tr>
//                                 <td>${element.orderId}</td>
//                                 <td>${element.title}</td>
                                
//                                 <td>
//                                     <span>
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
//                                                         fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
//                                                         <path
//                                                             d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
//                                                         <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
//                                                     </svg>
//                                     </span>
//                                     <span>
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
//                                                         fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
//                                                         <path
//                                                             d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
//                                                     </svg></span>
//                                             </td>
        
//                                 </tr>`;
//                         tbody2.innerHTML += tr3;
//                     });
                    
//                 })
//                 }
        
//             }
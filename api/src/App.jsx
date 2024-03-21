import logo from './logo.svg';
import './App.css';
import axios from 'axios'; // axiosu import et
import { useEffect } from 'react';

const BASE_URL = "http://localhost:3005"; // istek adresini tanımla

function App() {

  // VERİ ALMAK İÇİN "GET"
  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users"); //çekmek istediğim veriyi yazıyorum asenkron çalışıyor senkron yapabilmem için async await kullanmam gerek
  }
  // İD'E ,NAME'E, PASSWORD GİBİ İŞLEMLERİ DİREKT ALMAK İSTİYORSAM

  const getUserById = async (userId) => {
    const response = await axios.get(BASE_URL + "/users/" + userId);
  }




  //VERİ EKLEMEK İÇİN "POST"

  const createUser = async (newUser) => {
    const response = await axios.post(`${BASE_URL}/users`, newUser) //sen bu base/users adresine şu userı ekle diyorum
  }





  // VERİ GÜNCELLEMEK İÇİN "PUT"
  // bize bir yeni değerler ve Id lazım Id'si şu olanın yeni değerleri şunlardır .... vs vs

  const updateUser = async (userId, updatedUser) => {
    const response = axios.put(`${BASE_URL}/users/${userId}`, updatedUser)
  }



  // VERİ SİLMEK İÇİN "DELETE"
  //bana parametre olarak gelen şu Id'i sil
  // useEffectin içinde deleteUserById tanımlarız
  const deleteUserById = async (userId) => {
    const deletedResponse = await axios.delete(`${BASE_URL}/users/${userId}`)
  
  }





  useEffect(() => {
    // getAllUsers();   //component ilk yüklendiğinde sen getallusers adındaki fonksiyonu çalıştır
    const newUser = {
      "username": "nuri bilge",
      "password": "zeyra"
    }
    createUser(newUser)
  }, [])








  return (
    <div >

    </div>
  );
}

export default App;

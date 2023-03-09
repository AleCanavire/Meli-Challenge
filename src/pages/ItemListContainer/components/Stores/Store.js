import React from 'react';
import { useResize } from '../../../../hooks/utilities';

function Store({ name, background, logo, products }) {
  return (
    <div className="store">
      <div className="storeBackground">
        <img src={background} alt={`Fondo de ${name}`}/>
      </div>
      <div className="storeLogo">
        <img src={logo} alt={name}/>
      </div>
      <div className="storeTitle">
        <div className="title">{name}</div>
      </div>
      { useResize(1024) &&
        <>
        <div className="storeItems">
          { products &&
            products.map((product, index)=>{
            return(
              <img key={index} src={product[index]} alt={`Producto ${index}`}/>
            )})
          }
        </div>
        <div className="seeShop">Ver tienda</div>
        </>
      }
    </div>
  )
}

export default Store;

export const stores = [
  {
    name: "adidas Performance",
    background: "https://http2.mlstatic.com/storage/official-stores-images/adidasperformance/background_home201711211123.jpg",
    logo: "https://mla-s1-p.mlstatic.com/687102-MLA45628970987_042021-AE.webp",
    products:[
      {
        0: "https://http2.mlstatic.com/D_Q_NP_718616-MLA53563702132_022023-R.webp"
      },
      {
        1: "https://http2.mlstatic.com/D_Q_NP_954356-MLA53713582889_022023-R.webp"
      },
      {
        2: "https://http2.mlstatic.com/D_Q_NP_663967-MLA52235895767_112022-R.webp"
      }
    ]
  },
  {
    name: "Frávega",
    background: "https://http2.mlstatic.com/storage/official-stores-images/frvega/background_home201712111118.jpg",
    logo: "https://http2.mlstatic.com/D_Q_NP_929977-MLA25773062830_072017-AE.webp",
    products:[
      {
        0: "https://http2.mlstatic.com/D_Q_NP_670573-MLA53563071792_022023-R.webp"
      },
      {
        1: "https://http2.mlstatic.com/D_Q_NP_693370-MLA49335808266_032022-R.webp"
      },
      {
        2: "https://http2.mlstatic.com/D_Q_NP_885267-MLA52735440281_122022-R.webp"
      }
    ]
  },
  {
    name: "Whirlpool",
    background: "https://http2.mlstatic.com/storage/official-stores-images/whirlpool/background_home201802161234.jpg",
    logo: "https://http2.mlstatic.com/D_Q_NP_871989-MLA25801430807_072017-AE.webp",
    products:[
      {
        0: "https://http2.mlstatic.com/D_Q_NP_836689-MLA31356144514_072019-R.webp"
      },
      {
        1: "https://http2.mlstatic.com/D_Q_NP_979080-MLA31023154382_062019-R.webp"
      },
      {
        2: "https://http2.mlstatic.com/D_Q_NP_612119-MLA41796898520_052020-R.webp"
      }
    ]
  },
  {
    name: "Peugeot Repuestos y Servicios",
    background: "https://http2.mlstatic.com/storage/official-stores-images/peugeotrepuestosyservicios/background_home201907150216.jpg",
    logo: "https://mla-s1-p.mlstatic.com/613869-MLA45017391866_022021-AE.webp",
    products:[
      {
        0: "https://http2.mlstatic.com/D_Q_NP_954308-MLA53812921227_022023-R.webp"
      },
      {
        1: "https://http2.mlstatic.com/D_Q_NP_652283-MLA52766330189_122022-R.webp"
      },
      {
        2: "https://http2.mlstatic.com/D_Q_NP_604997-MLA53009083254_122022-R.webp"
      }
    ]
  },
  {
    name: "LG",
    background: "https://http2.mlstatic.com/storage/official-stores-images/lg/background_home201801171034.jpg",
    logo: "https://http2.mlstatic.com/D_Q_NP_975065-MLA25817097055_072017-AE.webp",
    products:[
      {
        0: "https://http2.mlstatic.com/D_Q_NP_876743-MLA49786158043_042022-R.webp"
      },
      {
        1: "https://http2.mlstatic.com/D_Q_NP_601194-MLA32509070603_102019-R.webp"
      },
      {
        2: "https://http2.mlstatic.com/D_Q_NP_624740-MLA51150020095_082022-R.webp"
      }
    ]
  },
  {
    name: "Samsung",
    background: "https://http2.mlstatic.com/storage/official-stores-images/samsung/background_home201902190516.jpg",
    logo: "https://http2.mlstatic.com/D_Q_NP_869939-MLA28051336464_082018-AE.webp",
    products:[
      {
        0: "https://http2.mlstatic.com/D_Q_NP_993781-MLA50499672764_062022-R.webp"
      },
      {
        1: "https://http2.mlstatic.com/D_Q_NP_805162-MLA47690436691_092021-R.webp"
      },
      {
        2: "https://http2.mlstatic.com/D_Q_NP_662295-MLA51046914728_082022-R.webp"
      }
    ]
  },
  {
    name: "Sportline",
    background: "https://http2.mlstatic.com/storage/official-stores-images/sportline/background_home201807241041.jpg",
    logo: "https://http2.mlstatic.com/D_Q_NP_636721-MLA25904474456_082017-AE.webp",
    products:[
      {
        0: "https://http2.mlstatic.com/D_Q_NP_898478-MLA53175720683_012023-R.webp"
      },
      {
        1: "https://http2.mlstatic.com/D_Q_NP_679657-MLA52870363614_122022-R.webp"
      },
      {
        2: "https://http2.mlstatic.com/D_Q_NP_681971-MLA42808123088_072020-R.webp"
      }
    ]
  },
  {
    name: "Philips",
    background: "https://http2.mlstatic.com/storage/official-stores-images/philips/background_home201801260438.jpg",
    logo: "https://mla-s1-p.mlstatic.com/902765-MLA43138801201_082020-AE.webp",
    products:[
      {
        0: "https://http2.mlstatic.com/D_Q_NP_930902-MLA43623760984_092020-R.webp"
      },
      {
        1: "https://http2.mlstatic.com/D_Q_NP_625268-MLA31010238466_062019-R.webp"
      },
      {
        2: "https://http2.mlstatic.com/D_Q_NP_727956-MLA53487970030_012023-R.webp"
      }
    ]
  }
]
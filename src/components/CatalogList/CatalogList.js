import React from 'react'
import Catalog from '../Catalog/Catalog'


export default function CatalogList() {
    const items = [
        { name: "Ирригатор B.Well Wl-911", price: "2019", 
        url: "https://avatars.mds.yandex.net/get-mpic/1926093/img_id8929824454640850899.jpeg/orig"},
        { name: "Расческа для бороды Borodist...", price: "350",url:"https://avatars.mds.yandex.net/get-mpic/1545401/img_id8012300520411194688.png/orig" },
        { name: "Ирригатор B.Well Wl-911 c...", price: "2689", url:"https://avatars.mds.yandex.net/get-mpic/2017233/img_id2876123970420993573.jpeg/9hq"},
        { name: "Конструктор LEGO Hidden Sid... ", price: "5690", url:"https://avatars.mds.yandex.net/get-mpic/1525355/img_id2857087755165942916.jpeg/orig"},

    ]
    return (
        <div>
            <Catalog name={items[0].name} price={items[0].price} url={items[0].url} />
            <Catalog name={items[1].name} price={items[1].price} url={items[1].url}/>
            <Catalog name={items[2].name} price={items[2].price} url={items[2].url}/>
            <Catalog name={items[3].name} price={items[3].price} url={items[3].url}/>
        </div>
    )
}